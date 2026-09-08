window.openNoteImagePopup = function(event, src){
      if(event) event.stopPropagation();

      const modal = document.getElementById("noteImageModal");
      const preview = document.getElementById("noteImageModalPreview");

      if(!modal || !preview || !src) return;

      preview.src = src;
      modal.classList.add("show");
      document.body.classList.add("note-image-modal-open");
    };

    window.closeNoteImagePopup = function(){
      const modal = document.getElementById("noteImageModal");
      const preview = document.getElementById("noteImageModalPreview");

      if(modal) modal.classList.remove("show");
      document.body.classList.remove("note-image-modal-open");

      if(preview) preview.src = "";
    };

    document.getElementById("noteImageModalCloseBtn")
      ?.addEventListener("click", window.closeNoteImagePopup);

    document.getElementById("noteImageModalBackdrop")
      ?.addEventListener("click", window.closeNoteImagePopup);

    document.addEventListener("keydown", event => {
      if(
        event.key === "Escape" &&
        document.getElementById("noteImageModal")?.classList.contains("show")
      ){
        window.closeNoteImagePopup();
      }
    });
  
    /* PREDIKSI TOGEL — NAMA DARI E2:E78, ISI DARI F2:F78 */
    const PREDIKSI_SHEET_URL="https://docs.google.com/spreadsheets/d/1_EcGXsjxv_iMbk4Vyg8YimzQyj-ymayWe6nNS1ezHc8/gviz/tq?tqx=out:csv&gid=1081718576&range=E2:F78";
    const prediksiMarketList=document.getElementById("prediksiMarketList");
    const prediksiMarketSearch=document.getElementById("prediksiMarketSearch");
    const prediksiStatusFilter=document.getElementById("prediksiStatusFilter");
    const prediksiTotalCount=document.getElementById("prediksiTotalCount");
    const prediksiOpenCount=document.getElementById("prediksiOpenCount");
    const prediksiClosedCount=document.getElementById("prediksiClosedCount");
    const prediksiResultContent=document.getElementById("prediksiResultContent");
    const prediksiSourceStatus=document.getElementById("prediksiSourceStatus");
    const prediksiCopyBtn=document.getElementById("prediksiCopyBtn");
    const prediksiRefreshBtn=document.getElementById("prediksiRefreshBtn");
    const prediksiClockTime=document.getElementById("prediksiClockTime");
    const prediksiClockMeta=document.getElementById("prediksiClockMeta");
    let prediksiMarketData=[];
    let prediksiSelectedId="";

    function prediksiParseCsv(text){
      const rows=[];let row=[],cell="",quoted=false;
      for(let i=0;i<text.length;i++){
        const ch=text[i],next=text[i+1];
        if(ch==='"'&&quoted&&next==='"'){cell+='"';i++;continue}
        if(ch==='"'){quoted=!quoted;continue}
        if(ch===','&&!quoted){row.push(cell);cell="";continue}
        if((ch==='\n'||ch==='\r')&&!quoted){
          if(ch==='\r'&&next==='\n')i++;
          row.push(cell);cell="";
          rows.push(row);row=[];continue;
        }
        cell+=ch;
      }
      row.push(cell);if(row.some(v=>String(v).trim()!==""))rows.push(row);
      return rows;
    }
    function prediksiCanonical(value){
      return String(value||"").toUpperCase().replace(/^PREDIKSI\s+/i,"")
        .replace(/\b\d{1,2}:\d{2}(?:\s*WIB)?\b/g,"")
        .replace(/NEW\s+YORK/g,"NEWYORK").replace(/TOTO\s+MACAU/g,"TOTOMACAU")
        .replace(/KING\s+KONG/g,"KINGKONG").replace(/[^A-Z0-9]/g,"");
    }
    function prediksiExtractName(content,index){
      const first=String(content||"").split(/\r?\n/).map(x=>x.trim()).find(Boolean)||`PASARAN ${index+1}`;
      return first.replace(/^PREDIKSI\s+/i,"").replace(/\s+\d{1,2}:\d{2}(?:\s*WIB)?\s*$/i,"").trim();
    }
    function prediksiFindSchedule(name){
      const key=prediksiCanonical(name);
      const schedules=(Array.isArray(jadwalTogelData)&&jadwalTogelData.length)
        ? jadwalTogelData
        : (typeof DEFAULT_JADWAL_TOGEL!=="undefined"?DEFAULT_JADWAL_TOGEL:[]);

      /* Ambil jadwal yang sama persis dari menu JADWAL TOGEL.
         Ini penting agar TOTO MACAU MALAM I, II, dan III tidak saling tertukar. */
      const exact=schedules.find(item=>prediksiCanonical(item.name)===key);
      if(exact)return exact;

      /* Fallback aman untuk nama yang sedikit berbeda, tapi pilih yang paling panjang
         supaya tidak jatuh ke jadwal versi pendek seperti MALAM I saat pasarannya MALAM II. */
      const candidates=schedules
        .map(item=>({item,itemKey:prediksiCanonical(item.name)}))
        .filter(row=>row.itemKey&&key&&(row.itemKey.includes(key)||key.includes(row.itemKey)))
        .sort((a,b)=>b.itemKey.length-a.itemKey.length);

      return candidates[0]?.item||null;
    }
    function prediksiJakartaParts(){
      const now=new Date();
      const parts=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Jakarta",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:false,weekday:"long",day:"2-digit",month:"2-digit",year:"numeric"}).formatToParts(now);
      return Object.fromEntries(parts.map(p=>[p.type,p.value]));
    }

    function prediksiDateTextWIB(offsetDays=0){
      const base=new Date(Date.now()+(Number(offsetDays)||0)*24*60*60*1000);
      const parts=new Intl.DateTimeFormat("id-ID",{
        timeZone:"Asia/Jakarta",
        weekday:"long",
        day:"numeric",
        month:"long",
        year:"numeric"
      }).formatToParts(base);

      const get=type=>parts.find(p=>p.type===type)?.value||"";
      const text=`${get("weekday")}, ${get("day")} ${get("month")} ${get("year")}`;
      return text.replace(/\b\w/g,c=>c.toUpperCase());
    }

    function prediksiTodayTextWIB(){
      return prediksiDateTextWIB(0);
    }

    function prediksiDateOffsetForItem(item){
      const name=String(item?.name||"");
      if(/\bBESOK\b/i.test(name))return 1;
      if(item?.status && item.status.open===false)return 1;
      return 0;
    }

    function prediksiContentWithDate(content,offsetDays=0){
      const targetDate=prediksiDateTextWIB(offsetDays);
      const lines=String(content||"").split(/\r?\n/);

      const dayDate=/^\s*(senin|selasa|rabu|kamis|jumat|jum'at|sabtu|minggu)\s*,?\s*\d{1,2}\s+(januari|februari|maret|april|mei|juni|juli|agustus|september|oktober|november|desember)\s+\d{4}\s*$/i;
      const dateOnly=/^\s*\d{1,2}\s+(januari|februari|maret|april|mei|juni|juli|agustus|september|oktober|november|desember)\s+\d{4}\s*$/i;

      let changed=false;
      for(let i=0;i<lines.length;i++){
        if(dayDate.test(lines[i])||dateOnly.test(lines[i])){
          lines[i]=targetDate;
          changed=true;
        }
      }
      if(changed)return lines.join("\n");

      const prediksiIndexes=[];
      lines.forEach((line,index)=>{if(/^\s*PREDIKSI\b/i.test(line))prediksiIndexes.push(index)});
      if(prediksiIndexes.length){
        for(let i=prediksiIndexes.length-1;i>=0;i--){
          lines.splice(prediksiIndexes[i]+1,0,targetDate);
        }
        return lines.join("\n");
      }

      return targetDate+"\n"+String(content||"");
    }

    function prediksiContentToday(content){
      return prediksiContentWithDate(content,0);
    }
    function prediksiTimeToMinutes(value){
      const m=String(value||"").match(/(\d{1,2}):(\d{2})/);
      return m?Number(m[1])*60+Number(m[2]):null;
    }
    function prediksiStatus(schedule,name=""){
      const p=prediksiJakartaParts();
      const nowMin=Number(p.hour)%24*60+Number(p.minute);
      const formatDiff=diff=>{
        const safe=Math.max(0,Number(diff)||0);
        const h=Math.floor(safe/60);
        const m=safe%60;
        return `${h?`${h}j `:""}${m}m`;
      };

      /* HOKIDRAW RESULT SETIAP JAM:
         nama pada Sheet, contoh "HOKI DRAW 01:00", menentukan jam result. */
      if(/HOKI\s*DRAW|HOKIDRAW/i.test(name)){
        const resultMatch=String(name).match(/(\d{1,2}):(\d{2})/);
        if(resultMatch){
          const resultMin=Number(resultMatch[1])*60+Number(resultMatch[2]);

          if(nowMin>=resultMin){
            return {open:false,label:"TUTUP",countdown:"Result sudah keluar"};
          }

          return {open:true,label:"BUKA",countdown:`Tutup ${formatDiff(resultMin-nowMin)} lagi`};
        }

        return {open:true,label:"BUKA",countdown:"Result 1 jam sekali"};
      }

      if(!schedule)return {open:true,label:"BUKA",countdown:"Jadwal belum tersedia"};

      const closeMin=prediksiTimeToMinutes(schedule.close);
      const openMin=prediksiTimeToMinutes(schedule.open);

      if(closeMin===null){
        return {open:true,label:"BUKA",countdown:"Jadwal aktif"};
      }

      /* Status harian untuk PREDIKSI TOGEL:
         - BUKA dari pergantian hari sampai jam Tutup.
         - Setelah jam Tutup lewat, tetap TUTUP sampai ganti hari berikutnya.
         - Jam Buka tetap ditampilkan sebagai info jadwal, bukan membuat status kembali BUKA di hari yang sama. */
      if(nowMin>=closeMin){
        return {open:false,label:"TUTUP",countdown:"Sudah tutup hari ini"};
      }

      const diffToClose=closeMin-nowMin;
      return {open:true,label:"BUKA",countdown:`Tutup ${formatDiff(diffToClose)} lagi`};
    }
    function prediksiEscape(value){
      return String(value||"").replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[ch]));
    }
    function prediksiDecorate(items){
      return items.map((item,index)=>{
        const name=String(item.name||"").trim()||prediksiExtractName(item.content,index);
        const schedule=prediksiFindSchedule(name);
        return {...item,name,schedule,status:prediksiStatus(schedule,name)};
      });
    }

    function prediksiMarketKey(name){
      const clean=String(name||"").trim().toUpperCase();

      /* Semua HOKIDRAW per jam dihitung sebagai 1 pasaran saja */
      if(/HOKI\s*DRAW|HOKIDRAW/.test(clean))return "HOKIDRAW";

      return clean
        .replace(/\s+/g," ")
        .trim();
    }

    function prediksiSummaryCounts(items){
      const groups=new Map();

      items.forEach(item=>{
        const key=prediksiMarketKey(item.name);
        if(!key)return;

        if(!groups.has(key)){
          groups.set(key,{open:false});
        }

        /* Satu pasaran dianggap buka jika minimal satu result-nya masih buka */
        if(item.status?.open){
          groups.get(key).open=true;
        }
      });

      const markets=[...groups.values()];
      const total=markets.length;
      const open=markets.filter(item=>item.open).length;

      return {
        total,
        open,
        closed:Math.max(0,total-open)
      };
    }


    function prediksiThumbSrc(name){
      const clean=String(name||"").toUpperCase().replace(/\s+/g," ").trim();
      const base="assets/images/market-icons/";

      if(/HOKI\s*DRAW|HOKIDRAW/.test(clean)) return base+"bullseye-target-1.png";

      if(/TOTO\s*MACAU.*PAGI/.test(clean)) return base+"macau-tower-1.png";
      if(/TOTO\s*MACAU.*SIANG/.test(clean)) return base+"macau-tower-2.png";
      if(/TOTO\s*MACAU.*SORE/.test(clean)) return base+"macau-tower-3.png";
      if(/TOTO\s*MACAU.*MALAM\s*I{2,3}/.test(clean)) return base+"macau-tower-3.png";
      if(/TOTO\s*MACAU.*MALAM\s*I/.test(clean)) return base+"macau-tower-2.png";
      if(/TOTO\s*MACAU.*5D.*SORE/.test(clean)) return base+"macau-tower-3.png";
      if(/TOTO\s*MACAU.*5D.*MALAM/.test(clean)) return base+"macau-tower-3.png";
      if(/TOTO\s*MACAU|TOTOMACAU/.test(clean)) return base+"macau-tower-1.png";

      if(/KENTUCKY.*MIDDAY/.test(clean)) return base+"usa-flag.png";
      if(/KENTUCKY.*EVENING/.test(clean)) return base+"kentucky-horse-1.png";
      if(/KENTUCKY/.test(clean)) return base+"usa-flag.png";

      if(/FLORIDA.*MIDDAY/.test(clean)) return base+"florida-beach-1.png";
      if(/FLORIDA.*EVENING/.test(clean)) return base+"florida-beach-2.png";
      if(/FLORIDA/.test(clean)) return base+"florida-beach-1.png";

      if(/HUAHIN\s*0100/.test(clean)) return base+"huahin-temple-1.png";
      if(/HUAHIN\s*1630/.test(clean)) return base+"huahin-temple-1.png";
      if(/HUAHIN\s*2100/.test(clean)) return base+"huahin-temple-1.png";
      if(/HUAHIN/.test(clean)) return base+"huahin-temple-1.png";

      if(/BANGKOK\s*0130/.test(clean)) return base+"bangkok-temple-1.png";
      if(/BANGKOK\s*0930/.test(clean)) return base+"bangkok-temple-2.png";
      if(/BANGKOK/.test(clean)) return base+"bangkok-temple-1.png";

      if(/NEW\s*YORK|NEWYORK/.test(clean)) return base+"newyork-liberty-1.png";
      if(/CAROLINA.*DAY/.test(clean)) return base+"carolina-beach-1.png";
      if(/CAROLINA.*EVENING/.test(clean)) return base+"carolina-beach-2.png";
      if(/CAROLINA/.test(clean)) return base+"carolina-beach-1.png";

      if(/BRUNEI\s*02/.test(clean)) return base+"brunei-mosque-1.png";
      if(/BRUNEI\s*14/.test(clean)) return base+"brunei-mosque-2.png";
      if(/BRUNEI\s*21/.test(clean)) return base+"brunei-mosque-1.png";
      if(/BRUNEI/.test(clean)) return base+"brunei-mosque-1.png";

      if(/OREGON\s*03/.test(clean)) return base+"oregon-mountain-1.png";
      if(/OREGON\s*06/.test(clean)) return base+"oregon-mountain-2.png";
      if(/OREGON\s*09/.test(clean)) return base+"oregon-coast-1.png";
      if(/OREGON\s*12/.test(clean)) return base+"nevada-mountain-1.png";
      if(/OREGON/.test(clean)) return base+"oregon-mountain-1.png";
      if(/CALIFORNIA/.test(clean)) return base+"california-goldengate.png";

      if(/TOTOCAMBODIA/.test(clean)) return base+"cambodia-angkor-1.png";
      if(/CHELSEA/.test(clean)) return /19|21/.test(clean) ? base+"chelsea-bigben-2.png" : base+"chelsea-bigben-1.png";
      if(/POIPET/.test(clean)) return /19|22/.test(clean) ? base+"poipet-gate-2.png" : base+"poipet-gate-1.png";

      if(/BULLSEYE/.test(clean)) return base+"bullseye-target-1.png";
      if(/SYDNEY/.test(clean)) return base+"sydney-opera-1.png";
      if(/JAKARTA/.test(clean)) return base+"jakarta-monas-1.png";
      if(/SINGAPORE/.test(clean)) return base+"singapore-merlion-1.png";
      if(/MAGNUM4D/.test(clean)) return base+"malaysia-petronas-1.png";
      if(/TOTOMALI/.test(clean)) return base+"malaysia-petronas-1.png";
      if(/PCSO/.test(clean)) return base+"pcso-generic-1.png";
      if(/NEVADA/.test(clean)) return base+"nevada-mountain-1.png";
      if(/HONGKONG/.test(clean)) return base+"macau-tower-2.png";
      if(/KING\s*KONG4D|KING-KONG4D/.test(clean)) return base+"pcso-generic-1.png";

      return "";
    }

    function prediksiInitials(name){
      return String(name||"")
        .replace(/[^A-Za-z0-9 ]+/g," ")
        .trim()
        .split(/\s+/)
        .filter(Boolean)
        .slice(0,2)
        .map(part=>part.charAt(0))
        .join("")
        .toUpperCase()||"TG";
    }

    function prediksiRender(){
      if(!prediksiMarketList)return;
      prediksiMarketData=prediksiDecorate(prediksiMarketData);

      const summary=prediksiSummaryCounts(prediksiMarketData);
      prediksiTotalCount.textContent=summary.total;
      prediksiOpenCount.textContent=summary.open;
      prediksiClosedCount.textContent=summary.closed;
      const q=(prediksiMarketSearch?.value||"").trim().toLowerCase();
      const filter=prediksiStatusFilter?.value||"all";
      const shown=prediksiMarketData.filter(item=>{
        const matches=!q||item.name.toLowerCase().includes(q)||item.content.toLowerCase().includes(q);
        const statusMatches=filter==="all"||(filter==="open"&&item.status.open)||(filter==="closed"&&!item.status.open);
        return matches&&statusMatches;
      });
      if(!shown.length){prediksiMarketList.innerHTML='<div class="prediksi-no-result">Pasaran tidak ditemukan.</div>';return}
      prediksiMarketList.innerHTML=shown.map(item=>{
        const schedule=item.schedule;
        const hokiResult=/(HOKI\s*DRAW|HOKIDRAW)/i.test(item.name)
          ? String(item.name).match(/(\d{1,2}:\d{2})/)
          : null;
        const meta=hokiResult
          ? `◷ Result ${prediksiEscape(hokiResult[1])} WIB`
          : schedule
            ? `◷ Tutup ${prediksiEscape(schedule.close)} WIB • Buka ${prediksiEscape(schedule.open)} WIB`
            : 'Jadwal belum ditemukan';
        const detail=item.status.open?'Masih buka hari ini':'Sudah tutup hari ini';
        const initials=prediksiEscape(prediksiInitials(item.name));
        const thumbSrc=prediksiThumbSrc(item.name);
        const thumbHtml=thumbSrc
          ? `<div class="prediksi-market-thumb has-image"><img src="${prediksiEscape(thumbSrc)}" alt="${prediksiEscape(item.name)}"></div>`
          : `<div class="prediksi-market-thumb">${initials}</div>`;
        return `<button type="button" class="prediksi-market-item ${item.status.open?"open":"closed"} ${item.id===prediksiSelectedId?"active":""}" data-prediksi-id="${prediksiEscape(item.id)}">
          ${thumbHtml}
          <div class="prediksi-market-copy">
            <div class="prediksi-market-row"><span class="prediksi-market-name">${prediksiEscape(item.name)}</span><span class="prediksi-status-badge">${item.status.open?'BUKA':'TUTUP'}</span></div>
            <div class="prediksi-market-meta">${meta}</div>
            <div class="prediksi-market-countdown">${prediksiEscape(detail)}</div>
          </div>
          <div class="prediksi-market-arrow">›</div>
        </button>`;
      }).join('');
    }
    function prediksiSelect(id){
      const item=prediksiMarketData.find(x=>x.id===id);if(!item)return;
      prediksiSelectedId=id;
      prediksiResultContent.innerHTML=`<div class="prediksi-result-text">${prediksiEscape(prediksiContentWithDate(item.content,prediksiDateOffsetForItem(item)))}</div><div class="prediksi-result-sticker">GOOD LUCK<br>AND STAY<br>CONSISTENT!</div>`;
      prediksiRender();
    }
    async function prediksiLoadSheet(force=false){
      if(!prediksiMarketList)return;
      prediksiMarketList.innerHTML='<div class="prediksi-loading">Mengambil nama dari E2:E78 dan prediksi dari F2:F78...</div>';
      prediksiSourceStatus.textContent="Menghubungkan ke Google Sheet...";
      prediksiRefreshBtn.disabled=true;
      try{
        const response=await fetch(PREDIKSI_SHEET_URL+(force?`&_=${Date.now()}`:""),{cache:"no-store"});
        if(!response.ok)throw new Error("HTTP "+response.status);
        const csv=await response.text();
        const rows=prediksiParseCsv(csv);
        const data=rows.map((row,index)=>({
          id:`sheet_ef_${index+2}`,
          name:String(row[0]||"").trim(),
          content:String(row[1]||"").trim()
        })).filter(item=>item.name&&item.content);

        if(!data.length)throw new Error("Kolom E2:F78 kosong atau format tidak sesuai");

        prediksiMarketData=data;
        localStorage.setItem("prediksiTogelSheetCache",JSON.stringify({savedAt:Date.now(),data:prediksiMarketData}));
        prediksiSourceStatus.textContent=`Google Sheet E2:F78 • ${prediksiMarketData.length} data`;
        prediksiRender();
        const first=prediksiMarketData[0];if(first)prediksiSelect(first.id);
      }catch(error){
        console.error(error);
        const cached=JSON.parse(localStorage.getItem("prediksiTogelSheetCache")||"null");
        if(cached?.data?.length){
          prediksiMarketData=cached.data;
          prediksiSourceStatus.textContent="Mode cache • Sheet gagal dimuat";
          prediksiRender();
          if(prediksiMarketData[0])prediksiSelect(prediksiMarketData[0].id);
          showToast("Sheet gagal dimuat, memakai data terakhir");
        }else{
          prediksiMarketList.innerHTML='<div class="prediksi-no-result">Gagal mengambil data. Pastikan Google Sheet dapat dilihat oleh siapa saja yang memiliki link.</div>';
          prediksiSourceStatus.textContent="Gagal terhubung ke Google Sheet";
        }
      }finally{prediksiRefreshBtn.disabled=false}
    }
    prediksiMarketList?.addEventListener("click",event=>{
      const btn=event.target.closest("[data-prediksi-id]");if(btn)prediksiSelect(btn.dataset.prediksiId);
    });
    prediksiMarketSearch?.addEventListener("input",prediksiRender);
    prediksiStatusFilter?.addEventListener("change",prediksiRender);
    prediksiRefreshBtn?.addEventListener("click",()=>prediksiLoadSheet(true));
    async function prediksiCopyActive(){
      const item=prediksiMarketData.find(x=>x.id===prediksiSelectedId);
      if(!item)return showToast("Pilih pasaran terlebih dahulu");

      const copyContent=prediksiContentWithDate(item.content,prediksiDateOffsetForItem(item));

      try{
        await navigator.clipboard.writeText(copyContent);
        showToast("Prediksi berhasil dicopy");
      }catch{
        const ta=document.createElement("textarea");
        ta.value=copyContent;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        ta.remove();
        showToast("Prediksi berhasil dicopy");
      }
    }

    prediksiCopyBtn?.addEventListener("click",prediksiCopyActive);

    document.addEventListener("keydown",event=>{
      if(
        event.altKey &&
        event.key.toLowerCase()==="x" &&
        document.getElementById("page-prediksi-togel")?.classList.contains("active")
      ){
        event.preventDefault();
        prediksiCopyActive();
      }
    });
    let prediksiLastDateKey="";
    function prediksiDateKeyWIB(){
      return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Jakarta",year:"numeric",month:"2-digit",day:"2-digit"}).format(new Date());
    }

    function prediksiUpdateClock(){
      if(!prediksiClockTime)return;
      const now=new Date();
      const time=new Intl.DateTimeFormat("id-ID",{timeZone:"Asia/Jakarta",hour:"2-digit",minute:"2-digit",second:"2-digit",hour12:false}).format(now).replace(/\./g,":");
      prediksiClockTime.textContent=time+" WIB";
      const decorated=prediksiDecorate(prediksiMarketData);
      const summary=prediksiSummaryCounts(decorated);
      prediksiClockMeta.textContent=`${summary.open} buka • ${summary.closed} tutup`;

      const currentDateKey=prediksiDateKeyWIB();
      if(!prediksiLastDateKey)prediksiLastDateKey=currentDateKey;
      if(prediksiLastDateKey!==currentDateKey){
        prediksiLastDateKey=currentDateKey;
        if(prediksiSelectedId)prediksiSelect(prediksiSelectedId);
      }
    }
    setInterval(()=>{prediksiUpdateClock();if(prediksiMarketData.length)prediksiRender()},1000);
    prediksiUpdateClock();
    prediksiLoadSheet();


/* POSTINGAN PREDIKSI JITU GENERATOR */
    const predPostCanvas=document.getElementById("predPostCanvas");
    const predPostTitle=document.getElementById("predPostTitle");
    const predPostMarket=document.getElementById("predPostMarket");
    const predPostDate=document.getElementById("predPostDate");
    const predPostLogoText=document.getElementById("predPostLogoText");
    const predPostShio=document.getElementById("predPostShio");
    const predPostGenerateBtn=document.getElementById("predPostGenerateBtn");
    const predPostDownloadBtn=document.getElementById("predPostDownloadBtn");
    const predPostCopyImgBtn=document.getElementById("predPostCopyImgBtn");
    const predPostCopyTextBtn=document.getElementById("predPostCopyTextBtn");

    let predPostData=null;

    function predPostPad(n){return String(n).padStart(2,"0")}
    function predPostDateDefault(){
      const d=new Date();
      const month=["JANUARI","FEBRUARI","MARET","APRIL","MEI","JUNI","JULI","AGUSTUS","SEPTEMBER","OKTOBER","NOVEMBER","DESEMBER"];
      return `${d.getDate()} ${month[d.getMonth()]} ${d.getFullYear()}`;
    }
    function predPostRandDigit(){return Math.floor(Math.random()*10)}
    function predPostNumber(len){
      let out="";
      for(let i=0;i<len;i++)out+=predPostRandDigit();
      return out;
    }
    function predPostPair(){return predPostNumber(2)}
    function predPostLine(count,len){
      return Array.from({length:count},()=>predPostNumber(len)).join(" · ");
    }
    function predPostPairLine(count){
      return Array.from({length:count},()=>predPostPair()).join(" · ");
    }
    function predPostGenerate(){
      const shioList=["ANJING","AYAM","BABI","HARIMAU","KAMBING","KELINCI","KERBAU","KUDA","MONYET","NAGA","TIKUS","ULAR"];
      if(!predPostDate.value)predPostDate.value=predPostDateDefault();
      if(predPostShio && !predPostShio.value)predPostShio.value=shioList[Math.floor(Math.random()*shioList.length)];

      predPostData={
        title:(predPostTitle?.value||"PREDIKSI JITU").toUpperCase(),
        market:(predPostMarket?.value||"HUAHIN 0100").toUpperCase(),
        date:(predPostDate?.value||predPostDateDefault()).toUpperCase(),
        logoText:(predPostLogoText?.value||"HuaHin Lottery"),
        bbfs:predPostNumber(7),
        main:predPostNumber(5),
        shio:(predPostShio?.value||shioList[Math.floor(Math.random()*shioList.length)]).toUpperCase(),
        fourD:[predPostLine(2,4),predPostLine(2,4)],
        threeD:[predPostLine(2,3),predPostLine(2,3)],
        twoD:[predPostPairLine(3),predPostPairLine(3)],
        cb:predPostPairLine(2),
        cb2d:predPostPairLine(3),
        cadangan:predPostPairLine(3)
      };
      predPostDraw();
    }

    function predPostRoundRect(ctx,x,y,w,h,r,fill,stroke,lineWidth=2){
      ctx.beginPath();
      ctx.moveTo(x+r,y);
      ctx.lineTo(x+w-r,y);
      ctx.quadraticCurveTo(x+w,y,x+w,y+r);
      ctx.lineTo(x+w,y+h-r);
      ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
      ctx.lineTo(x+r,y+h);
      ctx.quadraticCurveTo(x,y+h,x,y+h-r);
      ctx.lineTo(x,y+r);
      ctx.quadraticCurveTo(x,y,x+r,y);
      ctx.closePath();
      if(fill){ctx.fillStyle=fill;ctx.fill();}
      if(stroke){ctx.lineWidth=lineWidth;ctx.strokeStyle=stroke;ctx.stroke();}
    }
    function predPostText(ctx,text,x,y,size,color="#fff",align="center",weight="900",shadow=true){
      ctx.save();
      ctx.font=`${weight} ${size}px Georgia, 'Times New Roman', serif`;
      ctx.textAlign=align;
      ctx.textBaseline="middle";
      if(shadow){
        ctx.shadowColor="rgba(0,0,0,.9)";
        ctx.shadowBlur=7;
        ctx.shadowOffsetY=2;
      }
      ctx.fillStyle=color;
      ctx.fillText(String(text||""),x,y);
      ctx.restore();
    }
    function predPostGoldText(ctx,text,x,y,size,align="center"){
      ctx.save();
      const g=ctx.createLinearGradient(0,y-size,0,y+size);
      g.addColorStop(0,"#fff3a5");
      g.addColorStop(.45,"#ffd24a");
      g.addColorStop(1,"#9f5b06");
      ctx.font=`900 ${size}px Georgia, 'Times New Roman', serif`;
      ctx.textAlign=align;
      ctx.textBaseline="middle";
      ctx.lineWidth=Math.max(2,size/13);
      ctx.strokeStyle="#3b1600";
      ctx.shadowColor="rgba(255,185,25,.70)";
      ctx.shadowBlur=10;
      ctx.strokeText(String(text||""),x,y);
      ctx.fillStyle=g;
      ctx.fillText(String(text||""),x,y);
      ctx.restore();
    }
    function predPostDrawBox(ctx,x,y,w,h,label,value,opts={}){
      const grad=ctx.createLinearGradient(x,y,x,y+h);
      grad.addColorStop(0,"rgba(38,20,2,.96)");
      grad.addColorStop(.52,"rgba(8,6,4,.94)");
      grad.addColorStop(1,"rgba(52,26,2,.96)");
      predPostRoundRect(ctx,x,y,w,h,10,grad,"rgba(255,200,43,.98)",3);
      ctx.strokeStyle="rgba(255,240,144,.65)";
      ctx.lineWidth=1;
      predPostRoundRect(ctx,x+5,y+5,w-10,h-10,7,null,"rgba(255,173,18,.65)",1);

      const headerH=opts.small?34:46;
      const hg=ctx.createLinearGradient(x,y,x,y+headerH);
      hg.addColorStop(0,"rgba(102,52,3,.85)");
      hg.addColorStop(1,"rgba(18,13,4,.55)");
      predPostRoundRect(ctx,x+4,y+4,w-8,headerH,7,hg,null,0);
      predPostGoldText(ctx,label,x+w/2,y+headerH/2+3,opts.labelSize||30);

      const lines=Array.isArray(value)?value:String(value||"").split("\n");
      const valueSize=opts.valueSize||34;
      const startY=y+headerH+(h-headerH)/(lines.length+1);
      lines.forEach((line,i)=>{
        predPostText(ctx,line,x+w/2,startY+i*((h-headerH)/(lines.length+1)),valueSize,"#fff","center","900");
      });
    }
    function predPostDraw(){
      if(!predPostCanvas||!predPostData)return;
      const ctx=predPostCanvas.getContext("2d");
      const W=predPostCanvas.width,H=predPostCanvas.height;
      ctx.clearRect(0,0,W,H);

      const bg=ctx.createRadialGradient(W/2,H*.35,20,W/2,H*.55,W*.75);
      bg.addColorStop(0,"#2a1601");
      bg.addColorStop(.46,"#0d0702");
      bg.addColorStop(1,"#000000");
      ctx.fillStyle=bg;
      ctx.fillRect(0,0,W,H);

      for(let i=0;i<420;i++){
        const x=(Math.sin(i*92.41)*43758.5453%1+1)%1*W;
        const y=(Math.sin(i*44.17)*24634.6345%1+1)%1*H;
        const r=((Math.sin(i*13.77)*999%1+1)%1)*2.2+.5;
        ctx.beginPath();
        ctx.fillStyle=i%7===0?"rgba(255,238,150,.9)":"rgba(255,145,12,.45)";
        ctx.shadowColor="rgba(255,180,20,.8)";
        ctx.shadowBlur=8;
        ctx.arc(x,y,r,0,Math.PI*2);
        ctx.fill();
      }
      ctx.shadowBlur=0;

      ctx.strokeStyle="rgba(255,173,18,.42)";
      ctx.lineWidth=3;
      ctx.strokeRect(8,8,W-16,H-16);
      ctx.strokeStyle="rgba(255,225,76,.18)";
      ctx.strokeRect(22,22,W-44,H-44);

      predPostGoldText(ctx,predPostData.title,W/2,28,36);
      predPostGoldText(ctx,predPostData.market,W/2,88,64);
      predPostText(ctx,predPostData.date,W/2,155,32,"#fff7d0","center","900");

      const logoX=W/2-160,logoY=194,logoW=320,logoH=72;
      predPostRoundRect(ctx,logoX,logoY,logoW,logoH,10,"rgba(10,8,5,.88)","rgba(255,194,39,.95)",4);
      predPostRoundRect(ctx,logoX+7,logoY+7,logoW-14,logoH-14,7,null,"rgba(255,236,139,.45)",1);
      ctx.save();
      ctx.beginPath();
      ctx.arc(logoX+70,logoY+36,27,0,Math.PI*2);
      const wave=ctx.createLinearGradient(logoX+45,logoY+12,logoX+94,logoY+62);
      wave.addColorStop(0,"#ffe27a");
      wave.addColorStop(.45,"#31c7f1");
      wave.addColorStop(1,"#0b67ae");
      ctx.fillStyle=wave;
      ctx.shadowColor="rgba(0,160,255,.45)";
      ctx.shadowBlur=8;
      ctx.fill();
      predPostText(ctx,"~",logoX+70,logoY+34,54,"#ffffff","center","900",false);
      ctx.restore();
      predPostText(ctx,predPostData.logoText,logoX+198,logoY+34,27,"#e6f7ff","center","900");

      const left=20, gap=12, top=286;
      const colW=(W-left*2-gap*2)/3;
      predPostDrawBox(ctx,left,top,colW,118,"BBFS",predPostData.bbfs,{labelSize:31,valueSize:38});
      predPostDrawBox(ctx,left+colW+gap,top,colW,118,"ANGKA MAIN",predPostData.main,{labelSize:30,valueSize:38});
      predPostDrawBox(ctx,left+(colW+gap)*2,top,colW,118,"SHIO",predPostData.shio,{labelSize:34,valueSize:36});

      const row2=420;
      predPostDrawBox(ctx,left,row2,colW,138,"4D",predPostData.fourD,{labelSize:34,valueSize:31});
      predPostDrawBox(ctx,left+colW+gap,row2,colW,138,"3D",predPostData.threeD,{labelSize:34,valueSize:31});
      predPostDrawBox(ctx,left+(colW+gap)*2,row2,colW,138,"2D",predPostData.twoD,{labelSize:34,valueSize:31});

      const row3=578;
      predPostDrawBox(ctx,left,row3,colW,104,"COLOK BEBAS",predPostData.cb,{labelSize:25,valueSize:30});
      predPostDrawBox(ctx,left+colW+gap,row3,colW,104,"COLOK BEBAS 2D",predPostData.cb2d,{labelSize:23,valueSize:28});
      predPostDrawBox(ctx,left+(colW+gap)*2,row3,colW,104,"2D CADANGAN",predPostData.cadangan,{labelSize:25,valueSize:28});
    }
    function predPostTextOutput(){
      if(!predPostData)return "";
      return `${predPostData.title}
${predPostData.market}
${predPostData.date}

${predPostData.logoText}

BBFS: ${predPostData.bbfs}
ANGKA MAIN: ${predPostData.main}
SHIO: ${predPostData.shio}

4D: ${predPostData.fourD.join(" / ")}
3D: ${predPostData.threeD.join(" / ")}
2D: ${predPostData.twoD.join(" / ")}

COLOK BEBAS: ${predPostData.cb}
COLOK BEBAS 2D: ${predPostData.cb2d}
2D CADANGAN: ${predPostData.cadangan}`;
    }
    function predPostDownload(){
      if(!predPostCanvas)return;
      const a=document.createElement("a");
      a.download=`prediksi-${(predPostMarket?.value||"pasaran").toLowerCase().replace(/[^a-z0-9]+/g,"-")}.png`;
      a.href=predPostCanvas.toDataURL("image/png");
      a.click();
    }
    async function predPostCopyImage(){
      if(!predPostCanvas)return;
      try{
        const blob=await new Promise(resolve=>predPostCanvas.toBlob(resolve,"image/png"));
        await navigator.clipboard.write([new ClipboardItem({"image/png":blob})]);
        showToast("Gambar prediksi berhasil dicopy.");
      }catch(err){
        showToast("Browser tidak mengizinkan copy image. Pakai Download PNG.");
      }
    }
    async function predPostCopyText(){
      try{
        await navigator.clipboard.writeText(predPostTextOutput());
        showToast("Text prediksi berhasil dicopy.");
      }catch(err){
        showToast("Gagal copy text.");
      }
    }

    [predPostTitle,predPostMarket,predPostDate,predPostLogoText,predPostShio].forEach(el=>{
      if(el)el.addEventListener("input",()=>{
        if(!predPostData)predPostGenerate();
        predPostData.title=(predPostTitle?.value||"PREDIKSI JITU").toUpperCase();
        predPostData.market=(predPostMarket?.value||"HUAHIN 0100").toUpperCase();
        predPostData.date=(predPostDate?.value||predPostDateDefault()).toUpperCase();
        predPostData.logoText=predPostLogoText?.value||"HuaHin Lottery";
        predPostData.shio=(predPostShio?.value||"ANJING").toUpperCase();
        predPostDraw();
      });
    });
    predPostGenerateBtn?.addEventListener("click",predPostGenerate);
    predPostDownloadBtn?.addEventListener("click",predPostDownload);
    predPostCopyImgBtn?.addEventListener("click",predPostCopyImage);
    predPostCopyTextBtn?.addEventListener("click",predPostCopyText);
    if(predPostDate&&!predPostDate.value)predPostDate.value=predPostDateDefault();
    if(predPostCanvas)predPostGenerate();
