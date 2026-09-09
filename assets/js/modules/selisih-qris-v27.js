window.JONI_QRIS_BUILD='1652';
window.JONI_initQrisLegacy = function(){
/* V16.52 — Panel + Zona Main are primary. History Koin is secondary/optional only. */
(function(){
  'use strict';
  const page = document.getElementById('dashSelisihQris');
  const qrisBuild = String(window.JONI_QRIS_BUILD||'1632');
  if(!page || page.dataset.qrisBuild === qrisBuild) return;
  page.dataset.qrisBuild = qrisBuild;
  page.dataset.qrisV440 = '1';

  const $ = id => document.getElementById(id);
  const state = {provider:[], zona:[], koin:[], results:[], checked:false};
  const money = n => new Intl.NumberFormat('id-ID',{maximumFractionDigits:0}).format(Math.abs(Number(n)||0));
  const clean = v => String(v ?? '').trim().replace(/^['"`]+/,'');
  const compact = v => clean(v).toLowerCase().replace(/[^a-z0-9]/g,'');
  const userKey = v => clean(v).toLowerCase().replace(/\s+/g,'');
  const idKey = v => clean(v).toLowerCase().replace(/\s+/g,'');
  const esc = v => String(v ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));

  function toast(message){
    let el = document.querySelector('.qris-toast-v440');
    if(!el){ el=document.createElement('div'); el.className='qris-toast-v440'; document.body.appendChild(el); }
    el.textContent=message; el.classList.add('show');
    clearTimeout(el._timer); el._timer=setTimeout(()=>el.classList.remove('show'),2600);
  }
  function toNumber(v){
    if(typeof v==='number' && Number.isFinite(v)) return v;
    let s=clean(v).replace(/[^0-9,.-]/g,''); if(!s) return 0;
    const lastDot=s.lastIndexOf('.'), lastComma=s.lastIndexOf(',');
    if(lastDot>=0 && lastComma>=0){
      const p=Math.max(lastDot,lastComma); s=s.slice(0,p).replace(/[.,]/g,'')+'.'+s.slice(p+1).replace(/[.,]/g,'');
    }else if((s.match(/[.,]/g)||[]).length>1){ s=s.replace(/[.,]/g,''); }
    else if(lastDot>=0 || lastComma>=0){
      const p=Math.max(lastDot,lastComma), tail=s.length-p-1;
      if(tail===3 || tail===6) s=s.replace(/[.,]/g,''); else s=s.replace(',','.');
    }
    const n=Number(s); return Number.isFinite(n)?n:0;
  }
  function findKey(row,names){
    const keys=Object.keys(row||{}), normalized=keys.map(k=>[k,compact(k)]);
    for(const name of names){const n=compact(name), hit=normalized.find(([,x])=>x===n); if(hit) return hit[0];}
    for(const name of names){const n=compact(name), hit=normalized.find(([,x])=>x.includes(n)||n.includes(x)); if(hit) return hit[0];}
    return '';
  }
  function splitDelimited(line,delimiter){
    const out=[]; let cur='', quoted=false;
    for(let i=0;i<line.length;i++){
      const ch=line[i];
      if(ch==='"'){if(quoted && line[i+1]==='"'){cur+='"';i++;}else quoted=!quoted;}
      else if(ch===delimiter && !quoted){out.push(cur.trim());cur='';}
      else cur+=ch;
    }
    out.push(cur.trim()); return out;
  }
  function looksHeader(row){
    const set=new Set((row||[]).map(compact));
    const hits=['orderid','rrn','userid','jumlah','recordvalue','partnerid','vendorid','member','coin','to','ticket','status'].filter(x=>set.has(x)).length;
    return hits>=2;
  }
  function matrixToObjects(matrix){
    let header=-1;
    for(let i=0;i<Math.min(matrix.length,40);i++){if(looksHeader(matrix[i])){header=i;break;}}
    if(header<0) return [];
    const heads=matrix[header].map((h,i)=>clean(h)||`COL_${i+1}`);
    return matrix.slice(header+1).map(row=>{const o={};heads.forEach((h,i)=>o[h]=row?.[i]??'');return o;}).filter(o=>Object.values(o).some(v=>clean(v)));
  }
  function parseText(text){
    const lines=String(text||'').replace(/^\uFEFF/,'').split(/\r?\n/).filter(x=>x.trim());
    if(!lines.length) return [];
    const sample=lines.slice(0,8).join('\n');
    const delimiter=sample.includes('\t')?'\t':((sample.match(/;/g)||[]).length>(sample.match(/,/g)||[]).length?';':',');
    return matrixToObjects(lines.map(line=>splitDelimited(line,delimiter)));
  }
  async function loadXLSX(){
    if(window.XLSX) return window.XLSX;
    await new Promise((resolve,reject)=>{const s=document.createElement('script');s.src='https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js';s.onload=resolve;s.onerror=()=>reject(new Error('Pembaca Excel gagal dimuat.'));document.head.appendChild(s);});
    return window.XLSX;
  }
  async function readFile(file){
    const name=file.name.toLowerCase();
    if(/\.(csv|tsv|txt)$/.test(name)) return parseText(await file.text());
    const X=await loadXLSX(), buffer=await file.arrayBuffer(), wb=X.read(buffer,{type:'array',cellDates:false}), ws=wb.Sheets[wb.SheetNames[0]];
    return matrixToObjects(X.utils.sheet_to_json(ws,{header:1,defval:'',raw:false}));
  }
  function normalizeProvider(rows){
    const out=[];
    rows.forEach(row=>{
      const status=clean(row[findKey(row,['STATUS'])]).toUpperCase();
      if(status && status!=='SUCCESS') return;
      const ticket=clean(row[findKey(row,['TICKET','PARTNER ID','REFERENCE NO','REFERENCE','ORDER ID'])]);
      const rrn=clean(row[findKey(row,['VENDOR ID','RRN'])]);
      const user=userKey(row[findKey(row,['MEMBER','USER ID','USERNAME'])]);
      const amount=toNumber(row[findKey(row,['RECORD VALUE','AMOUNT','JUMLAH','NOMINAL'])]);
      if(ticket && amount>0) out.push({ticket,rrn,user,amount});
    });
    return out;
  }
  function normalizeZona(rows){
    const out=[];
    rows.forEach(row=>{
      const order=clean(row[findKey(row,['ORDER ID','REFERENCE NO','REFERENCE','ID'])]);
      const rrn=clean(row[findKey(row,['RRN','RETRIEVAL REFERENCE NUMBER'])]);
      const client=clean(row[findKey(row,['CLIENT NAME'])]);
      const user=userKey(row[findKey(row,['USER ID','USERNAME'])]);
      const operator=clean(row[findKey(row,['OPERATOR'])]);
      const amount=toNumber(row[findKey(row,['JUMLAH','AMOUNT','NOMINAL'])]);
      if(order && amount>0) out.push({order,rrn,client,user,operator,amount,used:false});
    });
    return out;
  }
  function normalizeKoin(rows){
    const provider=clean($('qrisProviderSelect')?.value||'XPAY').toLowerCase();
    const out=[];
    rows.forEach(row=>{
      const user=userKey(row[findKey(row,['TO','USER ID','USERNAME'])]);
      const by=clean(row[findKey(row,['BY','OPERATOR'])]);
      const amount=toNumber(row[findKey(row,['COIN','KOIN','AMOUNT','JUMLAH'])]);
      if(!user || amount<=0) return;
      if(by && provider && !by.toLowerCase().includes(provider)) return;
      out.push({user,by,amount,used:false});
    });
    return out;
  }
  function setStateText(type,text,ready=false){
    const id=type==='provider'?'qrisProviderState':type==='zona'?'qrisZonaState':'qrisKoinState';
    const el=$(id); if(!el) return; el.textContent=text; el.classList.toggle('ready',ready);
  }
  async function importFile(type,file){
    if(!file) return;
    setStateText(type,'Membaca data...',false);
    try{
      const rows=await readFile(file);
      state[type]=type==='provider'?normalizeProvider(rows):type==='zona'?normalizeZona(rows):normalizeKoin(rows);
      const label=type==='provider'?'mutasi SUCCESS':type==='zona'?'mutasi':'data Koin';
      setStateText(type,`✓ Success upload · ${state[type].length.toLocaleString('id-ID')} ${label} terbaca`,state[type].length>0);
      state.checked=false; state.results=[]; clearResult('Data sudah diupload. Klik tombol <b>Cek Selisih</b> untuk menampilkan mutasi.');
    }catch(err){setStateText(type,'Gagal membaca file: '+(err.message||err),false);}
  }
  function takeKoin(user,amount){
    const u=userKey(user), a=Math.round(Number(amount)||0);
    const row=state.koin.find(x=>!x.used && x.user===u && Math.round(x.amount)===a);
    if(row) row.used=true; return row||null;
  }
  function findZonaForProvider(p){
    const keys=[p.ticket,p.rrn].map(idKey).filter(Boolean);
    return state.zona.find(z=>!z.used && [z.order,z.rrn].map(idKey).some(k=>k&&keys.includes(k)))||null;
  }
  function sum(list){return list.reduce((n,x)=>n+(Number(x.amount)||0),0);}
  function analyze(){
    if(!state.provider.length || !state.zona.length){
      toast('Upload Mutasi Panel dan Mutasi Zona Main terlebih dahulu.');
      return;
    }

    /*
      V16.52 FLOW:
      1) Panel QRIS + Zona Main = pemeriksaan utama.
      2) History Koin TIDAK PERNAH menjadi syarat Cek Selisih.
      3) Jika History Koin diupload, datanya hanya dipakai untuk memperkaya
         baris selisih yang memang sudah ditemukan dari Panel vs Zona Main.
      4) History Koin tidak boleh membuat baris koin-missing / koin-only.
    */
    const useKoin = state.koin.length > 0;
    state.zona.forEach(x=>x.used=false);
    state.koin.forEach(x=>x.used=false);

    const zonaByRef = new Map();
    state.zona.forEach((z,index)=>{
      [z.order,z.rrn].map(idKey).filter(Boolean).forEach(key=>{
        if(!zonaByRef.has(key)) zonaByRef.set(key,[]);
        zonaByRef.get(key).push(index);
      });
    });

    const koinByUserAmount = new Map();
    if(useKoin){
      state.koin.forEach((k,index)=>{
        const key=userKey(k.user)+'|'+Math.round(Number(k.amount)||0);
        if(!koinByUserAmount.has(key)) koinByUserAmount.set(key,[]);
        koinByUserAmount.get(key).push(index);
      });
    }

    function takeZonaFast(p){
      const keys=[p.ticket,p.rrn].map(idKey).filter(Boolean);
      for(const key of keys){
        const queue=zonaByRef.get(key);
        if(!queue) continue;
        while(queue.length){
          const index=queue.shift();
          const row=state.zona[index];
          if(row && !row.used){
            row.used=true;
            return row;
          }
        }
      }
      return null;
    }

    function takeKoinFast(user,amount){
      if(!useKoin) return null;
      const key=userKey(user)+'|'+Math.round(Number(amount)||0);
      const queue=koinByUserAmount.get(key);
      if(!queue) return null;
      while(queue.length){
        const index=queue.shift();
        const row=state.koin[index];
        if(row && !row.used){
          row.used=true;
          return row;
        }
      }
      return null;
    }

    const results=[];

    state.provider.forEach(p=>{
      const z=takeZonaFast(p);
      const user=z?.user||p.user;

      if(!z){
        const k=takeKoinFast(user,p.amount);
        results.push({
          kind:'panel-only',
          order:p.ticket,
          rrn:p.rrn,
          user,
          client:'',
          operator:k?.by||'',
          panel:p.amount,
          zona:0,
          koin:k?.amount||0,
          diff:p.amount
        });
        return;
      }

      if(Math.round(p.amount)!==Math.round(z.amount)){
        /* Coba History Koin hanya sebagai info tambahan untuk selisih ini. */
        const k=takeKoinFast(user,p.amount) || takeKoinFast(user,z.amount);
        results.push({
          kind:'amount',
          order:z.order||p.ticket,
          rrn:z.rrn||p.rrn,
          user,
          client:z.client,
          operator:z.operator||k?.by||'',
          panel:p.amount,
          zona:z.amount,
          koin:k?.amount||0,
          diff:p.amount-z.amount
        });
      }
      /* Kalau Panel dan Zona cocok, selesai. History Koin tidak ikut menentukan. */
    });

    state.zona.forEach(z=>{
      if(z.used) return;
      const k=takeKoinFast(z.user,z.amount);
      results.push({
        kind:'zona-only',
        order:z.order,
        rrn:z.rrn,
        user:z.user,
        client:z.client,
        operator:z.operator||k?.by||'',
        panel:0,
        zona:z.amount,
        koin:k?.amount||0,
        diff:-z.amount
      });
    });

    state.results=results;
    state.checked=true;
    renderTotals();
    renderResults();

    if(!results.length){
      toast('Mutasi Panel dan Zona Main cocok.');
    }else if(useKoin){
      toast(`Ditemukan ${results.length.toLocaleString('id-ID')} mutasi selisih. History Koin dipakai sebagai data pengecekan tambahan.`);
    }else{
      toast(`Ditemukan ${results.length.toLocaleString('id-ID')} mutasi selisih. History Koin opsional jika ingin pengecekan lanjutan.`);
    }
  }
  function renderTotals(){
    const p=sum(state.provider), z=sum(state.zona), k=sum(state.koin), d=p-z;
    const set=(id,val)=>{const el=$(id);if(el)el.textContent=val;};
    set('qrisTotalProvider','Rp '+money(p)); set('qrisProviderCount',state.provider.length+' mutasi SUCCESS');
    set('qrisTotalZona','Rp '+money(z)); set('qrisZonaCount',state.zona.length+' mutasi');
    set('qrisTotalKoin','Rp '+money(k)); set('qrisKoinCount',state.koin.length+' mutasi panel');
    set('qrisTotalDifference',(d<0?'- ':'')+'Rp '+money(d));
    set('qrisDifferenceCaption',d===0?'Saldo Panel dan Zona Main cocok':d>0?'Panel lebih besar dari Zona Main':'Zona Main lebih besar dari Panel');
  }
  function clearResult(message){const body=$('qrisResultRows');if(body)body.innerHTML=`<tr><td colspan="9" class="qris-empty">${message}</td></tr>`;}
  function amountCell(v){return Number(v)>0?'Rp '+money(v):'-';}
  function renderResults(){
    const body=$('qrisResultRows'); if(!body) return;
    if(!state.results.length){clearResult('Tidak ada mutasi selisih yang perlu diproses.');return;}
    body.innerHTML=state.results.map(r=>`<tr class="qris-row-warning" data-kind="${esc(r.kind)}" title="${esc(r.kind)}">
      <td class="id-cell">${esc(r.order||'-')}</td><td class="id-cell">${esc(r.rrn||'-')}</td><td>${esc(r.user||'-')}</td><td>${esc(r.client||'-')}</td><td>${esc(r.operator||'-')}</td>
      <td class="qris-money">${amountCell(r.panel)}</td><td class="qris-money">${amountCell(r.zona)}</td><td class="qris-money">${amountCell(r.koin)}</td>
      <td class="qris-money ${r.diff>0?'qris-diff-plus':r.diff<0?'qris-diff-minus':''}">${r.diff===0?'Rp 0':(r.diff>0?'+ ':'- ')+'Rp '+money(r.diff)}</td></tr>`).join('');
  }
  function copyData(){
    if(!state.checked){toast('Klik Cek Selisih terlebih dahulu.');return;}
    const rows=state.results.filter(r=>r.user && r.order && r.order!=='-');
    if(!rows.length){toast('Tidak ada data yang perlu dicopy.');return;}
    /* V16.31 — Copy Data siap paste ke Google Sheets: USER ID | ORDER ID / TICKET | NOMINAL */
    const text=rows.map(r=>[
      r.user,
      r.order,
      new Intl.NumberFormat('en-US',{maximumFractionDigits:0}).format(Math.abs(r.panel||r.zona||r.diff))
    ].join('\t')).join('\n');
    const done=()=>toast('Copy Data berhasil.');
    if(navigator.clipboard && window.isSecureContext) navigator.clipboard.writeText(text).then(done).catch(()=>toast('Gagal copy data.'));
    else{const ta=document.createElement('textarea');ta.value=text;ta.style.position='fixed';ta.style.left='-9999px';document.body.appendChild(ta);ta.select();document.execCommand('copy');ta.remove();done();}
  }
  function exportCSV(){
    if(!state.checked || !state.results.length){toast('Belum ada hasil untuk export.');return;}
    const rows=[['Order ID / Ticket','RRN','User ID','Client Name','Operator','Panel','Zona Main','Koin','Selisih']];
    state.results.forEach(r=>rows.push([r.order,r.rrn,r.user,r.client,r.operator,r.panel,r.zona,r.koin,r.diff]));
    const csv='\uFEFF'+rows.map(row=>row.map(v=>'"'+String(v??'').replace(/"/g,'""')+'"').join(',')).join('\n');
    const blob=new Blob([csv],{type:'text/csv;charset=utf-8'}), url=URL.createObjectURL(blob), a=document.createElement('a');a.href=url;a.download='mutasi-selisih-'+clean($('qrisProviderSelect')?.value||'qris').toLowerCase()+'.csv';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),500);
  }
  function reset(){
    state.provider=[];state.zona=[];state.koin=[];state.results=[];state.checked=false;
    ['qrisProviderFile','qrisZonaFile','qrisKoinFile'].forEach(id=>{const el=$(id);if(el)el.value='';});
    const provider=clean($('qrisProviderSelect')?.value||'XPAY');
    setStateText('provider','Siap upload data '+provider+'.');setStateText('zona','Siap upload data Zona Main.');setStateText('koin','Opsional · gunakan hanya jika ada selisih yang ingin dicek lebih lanjut.');
    const set=(id,val)=>{const el=$(id);if(el)el.textContent=val;};
    set('qrisTotalProvider','Rp 0');set('qrisProviderCount','0 mutasi SUCCESS');set('qrisTotalZona','Rp 0');set('qrisZonaCount','0 mutasi');set('qrisTotalKoin','Rp 0');set('qrisKoinCount','0 mutasi panel');set('qrisTotalDifference','Rp 0');set('qrisDifferenceCaption','Saldo Panel dan Zona Main cocok');
    clearResult('Belum ada mutasi selisih. Upload data lalu klik <b>Cek Selisih</b>.');
  }

  $('qrisProviderFile')?.addEventListener('change',e=>importFile('provider',e.target.files?.[0]));
  $('qrisZonaFile')?.addEventListener('change',e=>importFile('zona',e.target.files?.[0]));
  $('qrisKoinFile')?.addEventListener('change',e=>importFile('koin',e.target.files?.[0]));
  $('qrisAnalyzeBtn')?.addEventListener('click',analyze);
  $('qrisResetBtn')?.addEventListener('click',reset);
  $('qrisCopyBtn')?.addEventListener('click',copyData);
  $('qrisExportBtn')?.addEventListener('click',exportCSV);
  $('qrisProviderSelect')?.addEventListener('change',()=>{if(!state.provider.length)setStateText('provider','Siap upload data '+clean($('qrisProviderSelect').value)+'.');});
  reset();
  function syncProviderUi(){
    const select=$('qrisProviderSelect');
    if(!select) return;
    const head=$('qrisProviderCol');
    if(head) head.textContent=clean(select.value||'XPAY').toUpperCase();
    if(!state.provider.length) setStateText('provider','Siap upload data '+clean(select.value||'XPAY')+'.');
  }
  setTimeout(syncProviderUi,0);
})();

};
