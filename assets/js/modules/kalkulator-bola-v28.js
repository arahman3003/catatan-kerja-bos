/* JONI WORKGAME V15.4 - Kalkulator Bola Engine mengikuti FILE 6 user */
window.JONI_initBolaLegacy = function(){
  'use strict';
  const root=document.getElementById('dashKalkulatorBola');
  if(!root || root.dataset.joniReady==='1') return;
  root.dataset.joniReady='1';
  const $=id=>root.querySelector('#'+id);
  const qsa=s=>Array.from(root.querySelectorAll(s));

  // FILE 6: parser nominal Indonesia.
  function num(v){
    if(!v) return 0;
    v=String(v).trim().replace(/\s/g,'');
    if(v.includes(',')&&v.includes('.')) v=v.replace(/\./g,'').replace(',','.');
    else if(v.includes(',')) v=v.replace(',','.');
    else { const p=v.split('.'); if(p.length>2)v=v.replace(/\./g,''); else if(p.length===2&&p[1].length===3)v=v.replace(/\./g,''); }
    const n=parseFloat(v); return isNaN(n)?0:n;
  }
  function rp(v){v=Math.round(Number(v)||0);const sign=v<0?'-':'';return sign+'Rp '+Math.abs(v).toLocaleString('id-ID');}
  function numOdds(v){if(!v)return 0;v=String(v).trim().replace(/\s/g,'').replace(',','.');const n=parseFloat(v);return isNaN(n)?0:n;}
  function f3(v){return Number(v||0).toFixed(3);}
  function formatOddsOutput(v){const n=Number(v)||0;if(n===0)return'0.00';if(n<0)return n.toFixed(2);return n.toFixed(3).replace(/0+$/,'').replace(/\.$/,'');}
  function isValidOdds(odds){return odds<0||odds>1;}
  function oddsWinMultiplier(odds){return odds<0?1+(1/Math.abs(odds)):odds;}
  function oddsHalfWinMultiplier(odds){const full=oddsWinMultiplier(odds);return((full-1)/2)+1;}
  function settlementMultiplier(status,odds){
    const full=oddsWinMultiplier(odds);
    if(status==='lose'||status==='lost')return 0;
    if(status==='void')return 1;
    if(status==='halflost'||status==='half_lost')return .5;
    if(status==='halfwin'||status==='half_won')return((full-1)/2)+1;
    return full;
  }
  const stripHtml=html=>{const d=document.createElement('div');d.innerHTML=html;return d.innerText.trim();};
  let activeMode='parlay';
  let lastText='Belum ada hasil.';

  function detailBox(title,items,rumusHtml){
    return `<div><b style="color:#8feaff">${title}</b>${items.length?`<ul style="margin:8px 0 10px;padding-left:18px">${items.map(x=>`<li style="margin:4px 0">${x}</li>`).join('')}</ul>`:''}<div style="border-top:1px solid rgba(255,255,255,.09);padding-top:9px"><b>Hitungan:</b><br>${rumusHtml}</div></div>`;
  }
  function setResult(stake,odds,payout,profit,status,desc,labels=['MODAL','ODDS','PAYOUT','PROFIT']){
    $('bolaMetricOneLabel').textContent=labels[0];$('bolaMetricTwoLabel').textContent=labels[1];$('bolaMetricThreeLabel').textContent=labels[2];$('bolaMetricFourLabel').textContent=labels[3];
    $('bolaMetricOne').textContent=typeof stake==='number'?rp(stake):stake;
    $('bolaMetricTwo').textContent=typeof odds==='number'?formatOddsOutput(odds):odds;
    $('bolaMetricThree').textContent=typeof payout==='number'?rp(payout):payout;
    $('bolaMetricFour').textContent=typeof profit==='number'?rp(profit):profit;
    $('bolaResultStatus').textContent=status;
    $('bolaCalculationDetail').innerHTML=desc||'<p>Isi data kalkulator untuk melihat rincian hitungan.</p>';
    lastText=['HASIL PERHITUNGAN','Kesimpulan: '+status,labels[0]+': '+(typeof stake==='number'?rp(stake):stake),labels[1]+': '+(typeof odds==='number'?formatOddsOutput(odds):odds),labels[2]+': '+(typeof payout==='number'?rp(payout):payout),labels[3]+': '+(typeof profit==='number'?rp(profit):profit),'',stripHtml(desc||'')].filter(Boolean).join('\n');
  }
  function clearResult(){setResult(0,0,0,0,'BELUM DIHITUNG','<p>Isi data kalkulator untuk melihat rincian hitungan.</p>');}
  function alertBad(msg){alert(msg);}

  function renumberLegs(){qsa('.bola-leg-row').forEach((r,i)=>{const l=r.querySelector('.bola-leg-label');if(l)l.textContent='Odds Match '+(i+1);});}
  function addLeg(data={}){
    const row=document.createElement('div');row.className='bola-leg-row bola-leg-row-simple';
    row.innerHTML=`<label class="bola-leg-field bola-leg-field-odds"><span class="bola-leg-label">Odds Match</span><input data-bola-odds inputmode="decimal" placeholder="Contoh: 1.80 atau -5.26" value="${String(data.odds??'').replace(/"/g,'&quot;')}"></label><label class="bola-leg-field bola-leg-field-status"><span>Hasil</span><select data-bola-status><option value="win">Menang</option><option value="lose">Kalah</option><option value="void">Void</option><option value="halfwin">Half Win</option><option value="halflost">Half Lose</option></select></label><button type="button" class="bola-remove" title="Hapus">x</button>`;
    row.querySelector('[data-bola-status]').value=data.status||'win';
    row.querySelector('.bola-remove').onclick=()=>{row.remove();if(!$('bolaLegs').children.length)addLeg();renumberLegs();};
    $('bolaLegs').appendChild(row);renumberLegs();
  }
  function getParlayRows(){return qsa('.bola-leg-row').map((r,i)=>({match:i+1,odds:numOdds(r.querySelector('[data-bola-odds]').value),status:r.querySelector('[data-bola-status]').value}));}
  async function saveParlay(stake,rows){
    const map={win:'won',lose:'lost',void:'void',halfwin:'half_won',halflost:'half_lost'};
    const legs=rows.map(r=>({match_name:'Match '+r.match,market:'',odds:r.odds,status:map[r.status]||r.status}));
    try{await fetch('kalkulator-bola.php',{method:'POST',credentials:'same-origin',headers:{'Content-Type':'application/json','Accept':'application/json'},body:JSON.stringify({action:'create',csrf_token:root.dataset.csrf||'',title:'Mix Parlay',stake,legs})});}catch(_){ }
  }

  // FILE 6: Parlay, termasuk Odds Minus, Half Win/Half Lose/Void dan kalah full.
  function calcParlay(save=true){
    const stake=num($('bolaStake').value);if(stake<=0)return alertBad('Modal belum diisi dengan benar.');
    const rows=getParlayRows();if(!rows.length)return alertBad('Tambahkan minimal 1 match.');
    let totalOddsEfektif=1,adaKalahFull=false,adaHalfWin=false,adaHalfLose=false;const detail=[],rumusList=[];
    for(const row of rows){
      const {match,odds,status}=row;
      if(status!=='void'&&!isValidOdds(odds))return alertBad('Odds match '+match+' belum benar. Gunakan Odds Plus seperti 1.80 / 2.10, atau Odds Minus seperti -5.26 / -1.10.');
      const full=status==='void'?1:oddsWinMultiplier(odds);
      if(status==='win'){
        totalOddsEfektif*=full;rumusList.push(f3(full));
        detail.push(odds<0?`Match ${match} menang full Odds Minus ${f3(odds)}: 1 + (1 / ${f3(Math.abs(odds))}) = <b>${f3(full)}</b>`:`Match ${match} menang full (Odds: ${f3(odds)}): <b>${f3(full)}</b>`);
      }else if(status==='halfwin'){
        const half=oddsHalfWinMultiplier(odds);totalOddsEfektif*=half;adaHalfWin=true;rumusList.push(f3(half));
        detail.push(odds<0?`Match ${match} half win Odds Minus ${f3(odds)}: odds full ${f3(full)}, lalu (${f3(full)} - 1) / 2 + 1 = <b>${f3(half)}</b>`:`Match ${match} half win: (${f3(full)} - 1) / 2 + 1 = <b>${f3(half)}</b>`);
      }else if(status==='halflost'){
        totalOddsEfektif*=.5;adaHalfLose=true;rumusList.push('0.500');detail.push(`Match ${match} half lose: <b>0.500</b>`);
      }else if(status==='void'){
        totalOddsEfektif*=1;rumusList.push('1.000');detail.push(`Match ${match} void/refund: odds dianggap <b>1.000</b>`);
      }else if(status==='lose'){
        adaKalahFull=true;rumusList.push('0.000');detail.push(`Match ${match} kalah full: <b>Parlay kalah</b>`);
      }
    }
    let payout=0,profit=0,status='',oddsTampil=totalOddsEfektif;
    if(adaKalahFull){payout=0;profit=-stake;status='Parlay Kalah';oddsTampil=0;totalOddsEfektif=0;}
    else{payout=stake*totalOddsEfektif;profit=payout-stake;if(profit>0){status=adaHalfLose?'Parlay Menang / Ada Half Lose':adaHalfWin?'Parlay Menang Setengah':'Parlay Menang Full';}else if(profit<0)status='Loss Sebagian';else status='Balik Modal';}
    const rumus=`Odds Efektif = ${rumusList.join(' × ')} = ${f3(totalOddsEfektif)}<br>Payout = ${rp(stake)} × ${f3(totalOddsEfektif)} = ${rp(payout)}<br>Profit/Loss = ${rp(payout)} - ${rp(stake)} = ${rp(profit)}`;
    setResult(stake,oddsTampil,payout,profit,status,detailBox(status,detail,rumus));
    if(save)saveParlay(stake,rows);
  }

  function toggleSingleCash(){const isCash=$('singleResult').value==='cashout';$('singleCashBox').style.display=isCash?'grid':'none';}
  function explainSingle(){const v=$('singleResult').value;const text={win:'Menang = payout dihitung dari modal × odds efektif.',lose:'Kalah = payout 0, modal hangus.',void:'Void / refund = modal dikembalikan penuh.',halfwin:'Half Win = setengah profit dibayarkan, modal tetap kembali.',halflost:'Half Lose = setengah modal kalah dan setengah modal kembali.',cashout:'Cash Out = payout mengikuti nominal cash out yang diterima.'};$('singleExplain').textContent=text[v];}
  // FILE 6: Single lengkap.
  function calcSingle(){
    const stake=num($('singleStake').value),odds=numOdds($('singleOdds').value),result=$('singleResult').value,cash=num($('singleCash').value);
    if(stake<=0)return alertBad('Modal belum diisi dengan benar.');
    if(result!=='cashout'&&!isValidOdds(odds))return alertBad('Odds belum benar. Gunakan Odds Plus seperti 1.80 / 2.10, atau Odds Minus seperti -5.26 / -1.10.');
    if(result==='cashout'&&cash<=0)return alertBad('Nominal cash out belum diisi.');
    let payout=0,status='',items=[],rumus='';
    if(result==='win'){const mult=oddsWinMultiplier(odds);payout=stake*mult;status='Tiket Menang';items.push(odds<0?`Odds Minus ${f3(odds)} dikonversi menjadi odds efektif: 1 + (1 / ${f3(Math.abs(odds))}) = <b>${f3(mult)}</b>`:`Odds Plus yang digunakan: <b>${f3(odds)}</b>`);}
    else if(result==='lose'){payout=0;status='Tiket Kalah';items.push('Hasil tiket kalah full, maka payout menjadi <b>Rp 0</b>.','Modal taruhan hangus sepenuhnya.');}
    else if(result==='void'){payout=stake;status='Void / Refund';items.push('Hasil void/refund, maka odds dianggap <b>1.000</b>.','Modal dikembalikan penuh.');}
    else if(result==='halfwin'){const full=oddsWinMultiplier(odds),mult=oddsHalfWinMultiplier(odds);payout=stake*mult;status='Half Win';items.push(odds<0?`Odds Minus ${f3(odds)} dikonversi dulu: 1 + (1 / ${f3(Math.abs(odds))}) = <b>${f3(full)}</b>`:`Odds Plus awal: <b>${f3(odds)}</b>`,`Karena Half Win, odds efektif = (${f3(full)} - 1) / 2 + 1 = <b>${f3(mult)}</b>`);}
    else if(result==='halflost'){payout=stake/2;status='Half Lose';items.push('Half Lose berarti setengah modal kalah dan setengah modal dikembalikan.',`Payout = modal / 2 = <b>${rp(payout)}</b>`);}
    else if(result==='cashout'){payout=cash;status='Cash Out';items.push('Tiket ditutup lebih awal menggunakan nominal cash out.',`Payout mengikuti nominal cash out yang diterima: <b>${rp(cash)}</b>`);}
    const profit=payout-stake;
    if(result==='win'||result==='halfwin'){const mult=payout/stake;rumus=`Payout = ${rp(stake)} × ${f3(mult)} = ${rp(payout)}<br>Profit/Loss = ${rp(payout)} - ${rp(stake)} = ${rp(profit)}`;}
    else if(result==='lose')rumus=`Payout = Rp 0<br>Profit/Loss = Rp 0 - ${rp(stake)} = ${rp(profit)}`;
    else if(result==='void')rumus=`Payout = ${rp(stake)}<br>Profit/Loss = ${rp(stake)} - ${rp(stake)} = ${rp(profit)}`;
    else if(result==='halflost')rumus=`Payout = ${rp(stake)} / 2 = ${rp(payout)}<br>Profit/Loss = ${rp(payout)} - ${rp(stake)} = ${rp(profit)}`;
    else rumus=`Profit/Loss = ${rp(cash)} - ${rp(stake)} = ${rp(profit)}`;
    setResult(stake,result==='cashout'?0:odds,payout,profit,status,detailBox(status,items,rumus));
  }

  // FILE 6: Target Profit / KEI mendukung Odds Plus dan Minus.
  function calcTarget(){
    const odds=numOdds($('targetOdds').value),target=num($('targetProfit').value);
    if(!isValidOdds(odds))return alertBad('Odds belum benar. Gunakan Odds Plus seperti 1.85 / 2.10, atau Odds Minus seperti -5.26 / -1.10.');
    if(target<=0)return alertBad('Target profit belum diisi.');
    let stake=0,payout=0,items=[];
    if(odds<0){stake=target*Math.abs(odds);payout=stake+target;items.push(`Odds Minus ${f3(odds)} artinya profit = modal / ${f3(Math.abs(odds))}.`,`Karena target profit sudah ditentukan, modal = target profit × ${f3(Math.abs(odds))}.`);}
    else{stake=target/(odds-1);payout=stake*odds;items.push(`Odds Plus yang digunakan: <b>${f3(odds)}</b>.`,'Karena ingin mencari modal, rumusnya modal = target profit / (odds - 1).');}
    const rumus=odds<0?`Modal = ${rp(target)} × ${f3(Math.abs(odds))} = ${rp(stake)}<br>Payout = ${rp(stake)} + ${rp(target)} = ${rp(payout)}`:`Modal = ${rp(target)} / (${f3(odds)} - 1) = ${rp(stake)}<br>Payout = ${rp(stake)} × ${f3(odds)} = ${rp(payout)}`;
    const status='Butuh Modal '+rp(stake);setResult(stake,odds,payout,target,status,detailBox(status,items,rumus));
  }

  // FILE 6: Cash Out hanya memakai modal dan nominal yang diterima.
  function calcCash(){
    const stake=num($('cashStake').value),cash=num($('cashOffer').value);if(stake<=0)return alertBad('Modal belum diisi dengan benar.');if(cash<=0)return alertBad('Nominal cash out belum diisi.');
    const profit=cash-stake,status=profit>0?'Cash Out Profit':profit<0?'Cash Out Rugi Sebagian':'Balik Modal';const items=[`Modal awal taruhan: <b>${rp(stake)}</b>`,`Nominal cash out yang diterima: <b>${rp(cash)}</b>`];items.push(profit>0?'Cash out lebih besar dari modal, berarti profit.':profit<0?'Cash out lebih kecil dari modal, berarti rugi sebagian.':'Cash out sama dengan modal, berarti balik modal.');
    const rumus=`Profit/Loss = ${rp(cash)} - ${rp(stake)} = ${rp(profit)}`;setResult(stake,0,cash,profit,status,detailBox(status,items,rumus));
  }

  // Market tidak tersedia pada FILE 6. Resolusi market lama dipertahankan,
  // tetapi settlement payout memakai engine Odds Plus/Minus FILE 6.
  function splitQuarter(line){const q=Math.round(line*4);if(Math.abs(q)%2===0)return[line];return[Math.floor(line*2)/2,Math.ceil(line*2)/2];}
  function settleCompare(diff){return diff>1e-9?'win':diff<-1e-9?'lose':'void';}
  function combineStatuses(a,b){if(a===b)return a;const set=new Set([a,b]);if(set.has('win')&&set.has('void'))return'halfwin';if(set.has('lose')&&set.has('void'))return'halflost';if(set.has('win')&&set.has('lose'))return'void';return a;}
  function result1x2(h,a){return h>a?'home':h<a?'away':'draw';}
  function renderMarketFields(){
    const type=$('marketType').value,box=$('marketDynamicFields');let h='';
    const sel=(id,label,opts)=>`<label>${label}<select id="${id}">${opts.map(([v,t])=>`<option value="${v}">${t}</option>`).join('')}</select></label>`;
    const inp=(id,label,ph,type='text')=>`<label>${label}<input id="${id}" type="${type}" inputmode="decimal" placeholder="${ph}"></label>`;
    if(type==='asian_handicap')h=sel('marketPick','Pilihan',[['home','Home'],['away','Away']])+inp('marketLine','Handicap','-0.5');
    else if(type==='asian_total')h=sel('marketPick','Pilihan',[['over','Over'],['under','Under']])+inp('marketLine','Line Total','2.5');
    else if(type==='one_x_two')h=sel('marketPick','Pilihan',[['home','Home / 1'],['draw','Draw / X'],['away','Away / 2']]);
    else if(type==='double_chance')h=sel('marketPick','Pilihan',[['1x','1X'],['x2','X2'],['12','12']]);
    else if(type==='btts')h=sel('marketPick','Pilihan',[['yes','YES'],['no','NO']]);
    else if(type==='draw_no_bet')h=sel('marketPick','Pilihan',[['home','Home'],['away','Away']]);
    else if(type==='european_handicap')h=inp('marketLine','Handicap Home','-1')+sel('marketPick','Pilihan',[['home','Home'],['draw','Draw'],['away','Away']]);
    else if(type==='team_total')h=sel('marketTeam','Team',[['home','Home'],['away','Away']])+sel('marketPick','Pilihan',[['over','Over'],['under','Under']])+inp('marketLine','Line','1.5');
    else if(type==='correct_score')h=inp('marketPredHome','Prediksi Home','2','number')+inp('marketPredAway','Prediksi Away','1','number');
    else if(type==='odd_even')h=sel('marketPick','Total Gol',[['odd','Odd / Ganjil'],['even','Even / Genap']]);
    else if(type==='ht_ft')h=inp('marketHtHome','Skor Home HT','1','number')+inp('marketHtAway','Skor Away HT','0','number')+sel('marketPick','HT / FT',[['home/home','Home / Home'],['home/draw','Home / Draw'],['home/away','Home / Away'],['draw/home','Draw / Home'],['draw/draw','Draw / Draw'],['draw/away','Draw / Away'],['away/home','Away / Home'],['away/draw','Away / Draw'],['away/away','Away / Away']]);
    else if(type==='first_half_1x2')h=inp('marketHtHome','Skor Home HT','1','number')+inp('marketHtAway','Skor Away HT','0','number')+sel('marketPick','Pilihan',[['home','Home / 1'],['draw','Draw / X'],['away','Away / 2']]);
    box.innerHTML=h;
  }
  function calcMarket(){
    const type=$('marketType').value,stake=num($('marketStake').value),odds=numOdds($('marketOdds').value),hs=num($('marketHomeScore').value),as=num($('marketAwayScore').value);if(stake<=0||!isValidOdds(odds))return alertBad('Isi stake dan odds market. Odds Plus dan Odds Minus didukung.');
    const g=id=>root.querySelector('#'+id),v=id=>g(id)?.value||'';let st='lose',explain='';
    if(type==='asian_handicap'){const pick=v('marketPick'),line=num(v('marketLine')),parts=splitQuarter(line),d=pick==='home'?hs-as:as-hs,ss=parts.map(x=>settleCompare(d+x));st=ss.length===2?combineStatuses(ss[0],ss[1]):ss[0];explain=`${pick.toUpperCase()} handicap ${line}: skor ${hs}-${as}.`;}
    else if(type==='asian_total'){const pick=v('marketPick'),line=num(v('marketLine')),total=hs+as,parts=splitQuarter(line),ss=parts.map(x=>settleCompare(pick==='over'?total-x:x-total));st=ss.length===2?combineStatuses(ss[0],ss[1]):ss[0];explain=`Total gol ${total}, ${pick.toUpperCase()} ${line}.`;}
    else if(type==='one_x_two'){const r=result1x2(hs,as);st=r===v('marketPick')?'win':'lose';explain=`Hasil FT ${hs}-${as} = ${r.toUpperCase()}.`;}
    else if(type==='double_chance'){const r=result1x2(hs,as),p=v('marketPick');st=((p==='1x'&&r!=='away')||(p==='x2'&&r!=='home')||(p==='12'&&r!=='draw'))?'win':'lose';explain=`Hasil FT ${r.toUpperCase()}, pilihan ${p.toUpperCase()}.`;}
    else if(type==='btts'){const yes=hs>0&&as>0;st=((v('marketPick')==='yes')===yes)?'win':'lose';explain=`Kedua tim ${yes?'mencetak':'tidak sama-sama mencetak'} gol.`;}
    else if(type==='draw_no_bet'){const r=result1x2(hs,as),p=v('marketPick');st=r==='draw'?'void':r===p?'win':'lose';explain=`DNB ${p.toUpperCase()}, hasil ${r.toUpperCase()}.`;}
    else if(type==='european_handicap'){const adj=hs+num(v('marketLine')),r=result1x2(adj,as);st=r===v('marketPick')?'win':'lose';explain=`Skor handicap ${adj}-${as} = ${r.toUpperCase()}.`;}
    else if(type==='team_total'){const goals=v('marketTeam')==='home'?hs:as,line=num(v('marketLine')),p=v('marketPick');st=settleCompare(p==='over'?goals-line:line-goals);explain=`Gol team ${goals}, ${p.toUpperCase()} ${line}.`;}
    else if(type==='correct_score'){st=(hs===num(v('marketPredHome'))&&as===num(v('marketPredAway')))?'win':'lose';explain=`Prediksi ${v('marketPredHome')}-${v('marketPredAway')}, hasil ${hs}-${as}.`;}
    else if(type==='odd_even'){const r=(hs+as)%2?'odd':'even';st=r===v('marketPick')?'win':'lose';explain=`Total gol ${hs+as} = ${r.toUpperCase()}.`;}
    else if(type==='ht_ft'){const ht=result1x2(num(v('marketHtHome')),num(v('marketHtAway'))),ft=result1x2(hs,as),r=ht+'/'+ft;st=r===v('marketPick')?'win':'lose';explain=`HT ${ht.toUpperCase()} / FT ${ft.toUpperCase()}.`;}
    else if(type==='first_half_1x2'){const r=result1x2(num(v('marketHtHome')),num(v('marketHtAway')));st=r===v('marketPick')?'win':'lose';explain=`Hasil babak pertama = ${r.toUpperCase()}.`;}
    const mult=settlementMultiplier(st,odds),payout=stake*mult,profit=payout-stake,statusMap={win:'MENANG',lose:'KALAH',void:'VOID',halfwin:'HALF WIN',halflost:'HALF LOSE'};
    const status='MARKET '+(statusMap[st]||st.toUpperCase());setResult(stake,mult,payout,profit,status,detailBox(status,[explain,`Odds ${formatOddsOutput(odds)} → multiplier settlement ${f3(mult)}.`],`Payout = ${rp(stake)} × ${f3(mult)} = ${rp(payout)}<br>Profit/Loss = ${rp(payout)} - ${rp(stake)} = ${rp(profit)}`));$('marketExplain').textContent=(statusMap[st]||st.toUpperCase())+' · '+explain;
  }

  function switchMode(mode){activeMode=mode;qsa('[data-bola-mode]').forEach(b=>b.classList.toggle('active',b.dataset.bolaMode===mode));qsa('[data-bola-panel]').forEach(p=>p.classList.toggle('active',p.dataset.bolaPanel===mode));}
  qsa('[data-bola-mode]').forEach(b=>b.onclick=()=>switchMode(b.dataset.bolaMode));

  $('bolaAddLeg').onclick=()=>addLeg();
  $('bolaCalculateBtn').onclick=()=>calcParlay(true);
  $('bolaResetBtn').onclick=()=>{$('bolaStake').value='';$('bolaLegs').innerHTML='';addLeg();addLeg();clearResult();};
  $('bolaExampleBtn').onclick=()=>{$('bolaStake').value='100000';$('bolaLegs').innerHTML='';addLeg({odds:'1.80',status:'win'});addLeg({odds:'2.00',status:'win'});addLeg({odds:'1.50',status:'win'});calcParlay(false);};

  $('singleResult').onchange=()=>{toggleSingleCash();explainSingle();};
  $('singleCalculateBtn').onclick=calcSingle;
  $('singleExampleBtn').onclick=()=>{$('singleStake').value='100000';$('singleOdds').value='1.80';$('singleResult').value='win';$('singleCash').value='';toggleSingleCash();explainSingle();calcSingle();};
  $('singleResetBtn').onclick=()=>{$('singleStake').value='';$('singleOdds').value='';$('singleCash').value='';$('singleResult').value='win';toggleSingleCash();explainSingle();clearResult();};

  $('targetCalculateBtn').onclick=calcTarget;
  $('targetExampleBtn').onclick=()=>{$('targetOdds').value='1.85';$('targetProfit').value='100000';calcTarget();};
  $('targetResetBtn').onclick=()=>{$('targetOdds').value='';$('targetProfit').value='';clearResult();};

  $('cashCalculateBtn').onclick=calcCash;
  $('cashExampleBtn').onclick=()=>{$('cashStake').value='100000';$('cashOffer').value='120000';calcCash();};
  $('cashResetBtn').onclick=()=>{$('cashStake').value='';$('cashOffer').value='';clearResult();};

  $('marketType').onchange=renderMarketFields;
  $('marketCalculateBtn').onclick=calcMarket;
  $('marketResetBtn').onclick=()=>{['marketStake','marketOdds','marketHomeScore','marketAwayScore'].forEach(id=>$(id).value='');renderMarketFields();$('marketExplain').textContent='';clearResult();};
  $('marketExampleBtn').onclick=()=>{$('marketType').value='asian_handicap';renderMarketFields();$('marketStake').value='50000';$('marketOdds').value='1.90';$('marketHomeScore').value='2';$('marketAwayScore').value='1';root.querySelector('#marketPick').value='home';root.querySelector('#marketLine').value='-0.5';calcMarket();};

  $('bolaCopyBtn').onclick=async()=>{if(lastText==='Belum ada hasil.')return;try{await navigator.clipboard.writeText(lastText);}catch(_){const area=document.createElement('textarea');area.value=lastText;area.style.position='fixed';area.style.left='-9999px';document.body.appendChild(area);area.select();try{document.execCommand('copy');}catch(__){}area.remove();}$('bolaCopyBtn').textContent='TERSALIN ✓';setTimeout(()=>$('bolaCopyBtn').textContent='COPY HASIL',1200);};
  $('bolaClearResult').onclick=clearResult;
  $('bolaHelpBtn').onclick=()=>$('bolaHelpModal').classList.remove('hidden');
  $('bolaHelpClose').onclick=()=>$('bolaHelpModal').classList.add('hidden');
  $('bolaHelpModal').addEventListener('click',e=>{if(e.target===$('bolaHelpModal'))$('bolaHelpModal').classList.add('hidden');});

  addLeg();addLeg();renderMarketFields();toggleSingleCash();explainSingle();clearResult();renumberLegs();
};
