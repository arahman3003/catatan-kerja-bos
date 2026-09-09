window.JONI_BUKTI_BUILD='1627';
window.JONI_initBuktiLegacy = function(){
/* V76 - JS ASLI BUKTI KEMENANGAN DARI FILE LAMA index(375).html */
(function(){
  const host=document.getElementById('kartuKemenanganHost');
  if(!host || host.dataset.ready==='1') return;
  host.dataset.ready='1';

  /* V15.1: WorkGame owns the global shell. Bukti only styles its own host/Shadow DOM. */
  try{
    host.style.marginLeft='0';
    host.style.width='100%';
    host.style.maxWidth='100%';
    host.style.minWidth='0';
    host.style.background='transparent';
  }catch(_wgShellErr){}

  function kkToast(message, type='success'){
    let box=document.getElementById('kkCopyToast');
    if(!box){
      box=document.createElement('div');
      box.id='kkCopyToast';
      box.className='kk-copy-toast';
      document.body.appendChild(box);
    }
    box.textContent=message;
    box.className='kk-copy-toast show ' + (type || 'success');
    clearTimeout(window.__kkCopyToastTimer);
    window.__kkCopyToastTimer=setTimeout(()=>box.classList.remove('show'),1800);
  }

  const data={"backgrounds": [{"nama": "Background Bukti 1", "url": "https://i.imgur.com/ejcM44e.jpeg"}, {"nama": "Background Bukti 2", "url": "https://i.imgur.com/GjEFZs2.jpeg"}, {"nama": "Background Bukti 3", "url": "https://i.imgur.com/0eWTILg.jpeg"}, {"nama": "Background Bukti 4", "url": "https://i.imgur.com/EM28EK3.jpeg"}, {"nama": "Background Bukti 5", "url": "https://i.imgur.com/o73M7DL.jpeg"}], "data": {"BCA": [{"nama": "DEMO PEMENANG 01", "rekening": "0000000001", "userId": "demo001", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 02", "rekening": "0000000002", "userId": "demo002", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 03", "rekening": "0000000003", "userId": "demo003", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 04", "rekening": "0000000004", "userId": "demo004", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 05", "rekening": "0000000005", "userId": "demo005", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 06", "rekening": "0000000006", "userId": "demo006", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 07", "rekening": "0000000007", "userId": "demo007", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 08", "rekening": "0000000008", "userId": "demo008", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 09", "rekening": "0000000009", "userId": "demo009", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 10", "rekening": "0000000010", "userId": "demo010", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 11", "rekening": "0000000011", "userId": "demo011", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 12", "rekening": "0000000012", "userId": "demo012", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 13", "rekening": "0000000013", "userId": "demo013", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 14", "rekening": "0000000014", "userId": "demo014", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 15", "rekening": "0000000015", "userId": "demo015", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 16", "rekening": "0000000016", "userId": "demo016", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 17", "rekening": "0000000017", "userId": "demo017", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 18", "rekening": "0000000018", "userId": "demo018", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 19", "rekening": "0000000019", "userId": "demo019", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 20", "rekening": "0000000020", "userId": "demo020", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 21", "rekening": "0000000021", "userId": "demo021", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 22", "rekening": "0000000022", "userId": "demo022", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 23", "rekening": "0000000023", "userId": "demo023", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 24", "rekening": "0000000024", "userId": "demo024", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 25", "rekening": "0000000025", "userId": "demo025", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 26", "rekening": "0000000026", "userId": "demo026", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 27", "rekening": "0000000027", "userId": "demo027", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 28", "rekening": "0000000028", "userId": "demo028", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 29", "rekening": "0000000029", "userId": "demo029", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 30", "rekening": "0000000030", "userId": "demo030", "nominal": "94,000,000,00"}], "BRI": [{"nama": "DEMO PEMENANG 31", "rekening": "0000000031", "userId": "demo031", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 32", "rekening": "0000000032", "userId": "demo032", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 33", "rekening": "0000000033", "userId": "demo033", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 34", "rekening": "0000000034", "userId": "demo034", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 35", "rekening": "0000000035", "userId": "demo035", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 36", "rekening": "0000000036", "userId": "demo036", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 37", "rekening": "0000000037", "userId": "demo037", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 38", "rekening": "0000000038", "userId": "demo038", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 39", "rekening": "0000000039", "userId": "demo039", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 40", "rekening": "0000000040", "userId": "demo040", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 41", "rekening": "0000000041", "userId": "demo041", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 42", "rekening": "0000000042", "userId": "demo042", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 43", "rekening": "0000000043", "userId": "demo043", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 44", "rekening": "0000000044", "userId": "demo044", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 45", "rekening": "0000000045", "userId": "demo045", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 46", "rekening": "0000000046", "userId": "demo046", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 47", "rekening": "0000000047", "userId": "demo047", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 48", "rekening": "0000000048", "userId": "demo048", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 49", "rekening": "0000000049", "userId": "demo049", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 50", "rekening": "0000000050", "userId": "demo050", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 51", "rekening": "0000000051", "userId": "demo051", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 52", "rekening": "0000000052", "userId": "demo052", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 53", "rekening": "0000000053", "userId": "demo053", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 54", "rekening": "0000000054", "userId": "demo054", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 55", "rekening": "0000000055", "userId": "demo055", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 56", "rekening": "0000000056", "userId": "demo056", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 57", "rekening": "0000000057", "userId": "demo057", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 58", "rekening": "0000000058", "userId": "demo058", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 59", "rekening": "0000000059", "userId": "demo059", "nominal": "94,000,000,00"}, {"nama": "DEMO PEMENANG 60", "rekening": "0000000060", "userId": "demo060", "nominal": "94,000,000,00"}]}};
  /* V476 — container utama dikunci setelah sidebar oleh index.php. */
  host.style.marginLeft='0';
  host.style.width='100%';
  host.style.maxWidth='100%';
  host.style.minWidth='0';

  const root=host.attachShadow({mode:'open'});
  root.innerHTML=`
  <style>
  :host{display:block;min-height:100vh;font-family:Arial,Helvetica,sans-serif;color:#f8eed7;background:#050504}
  *{box-sizing:border-box}
  .kk-wrap{display:grid;grid-template-columns:minmax(0,1fr) 360px;gap:22px;min-height:auto;padding:14px;background:radial-gradient(circle at 45% 10%,rgba(210,158,43,.08),transparent 32%),linear-gradient(180deg,#090806 0%,#050504 100%)}
  .kk-stage{display:flex;align-items:center;justify-content:center;min-width:0}
  .kk-poster{--accent:#2a88ff;--accent-soft:#d9e7ff;--accent-2:#7ec0ff;--panel:#f7fbff;--text:#183354;--badge-bg:rgba(14,53,120,.84);--badge-border:rgba(125,190,255,.36);--date-x:0px;--date-y:0px;--time-x:0px;--time-y:0px;--name-x:0px;--name-y:0px;--acc-x:0px;--acc-y:0px;--nominal-x:0px;--nominal-y:0px;--nominal-top-x:0px;--nominal-top-y:0px;--winner-x:0px;--winner-y:0px;--user-x:0px;--user-y:0px;--status-x:0px;--status-y:0px;--total-x:0px;--total-y:0px;--avatar-x:0px;--avatar-y:0px;--sensor-x:0px;--sensor-y:0px;--source-x:0px;--source-y:0px;--bank-x:0px;--bank-y:0px;--target-label-x:0px;--target-label-y:0px;--target-avatar-x:0px;--target-avatar-y:0px;--target-sensor1-x:0px;--target-sensor1-y:0px;--target-bank-x:0px;--target-bank-y:0px;--detail-x:0px;--detail-y:0px;--ref-x:0px;--ref-y:0px;position:relative;width:min(100%,860px);aspect-ratio:1/1;border-radius:22px;overflow:hidden;background:#130406;box-shadow:0 12px 28px rgba(0,0,0,.24);border:1px solid rgba(255,255,255,.08)}
  .kk-wrap.theme-bca .kk-side{background:linear-gradient(180deg,#062b63 0%,#021938 100%);border:1px solid rgba(120,180,255,.45)}
  .kk-wrap.theme-bri .kk-side{background:linear-gradient(180deg,#5d1212 0%,#2a0a0a 100%);border:1px solid rgba(255,145,122,.45)}
  .kk-poster.theme-bca{--accent:#2a88ff;--accent-soft:#d9e7ff;--accent-2:#7ec0ff;--panel:#f7fbff;--text:#183354;--badge-bg:rgba(14,53,120,.84);--badge-border:rgba(125,190,255,.36)}
  /* V16.27 — BCA date/time positions come from editable poster variables.
     Do not use !important here: Position Editor must be able to update them. */
  .kk-poster.theme-bri{--accent:#e14a32;--accent-soft:#ffe1d9;--accent-2:#ffb16a;--panel:#fff8f5;--text:#44231c;--badge-bg:rgba(122,29,16,.84);--badge-border:rgba(255,170,120,.36)}
  .kk-bg{position:absolute;inset:0;background-size:cover;background-position:center}
  .kk-overlay{position:absolute;inset:0;background:none!important}
  .kk-poster.theme-bri .kk-overlay{background:none!important}
  .kk-coins{display:none!important}.kk-coins span{display:none!important}
  .kk-coins span:after{display:none!important}
  .c1,.c2,.c3,.c4{display:none!important}
  .kk-brand{position:absolute;top:18px;left:0;right:0;text-align:center;font-weight:1000;font-style:italic;line-height:.78;color:#ffe680;text-shadow:0 1px 0 rgba(90,52,0,.65),0 3px 8px rgba(0,0,0,.28)}
  .kk-brand .jt{font-size:54px;letter-spacing:-3px}.kk-brand .sub{font-size:30px;letter-spacing:-2px;display:inline-block;vertical-align:top;margin-left:4px}
  .kk-bank-badge{display:none!important}
  .kk-card{display:none!important}
  /* Link desain kartu akan dipasang hanya pada kartu tengah, bukan background poster. */
  .kk-card.custom-template{background-image:var(--custom-card-image);background-size:100% 100%;background-position:center;background-repeat:no-repeat;border-color:transparent}
  .kk-card.custom-template .kk-card-head{background:transparent!important;height:0!important}
  .kk-card.custom-template .kk-card-body{background:transparent!important}
  .kk-card.custom-template .kk-card-body:before{display:none!important}
  .kk-card.custom-template .kk-title{border-top:none!important;border-bottom:none!important;background:transparent!important}
  .kk-card.custom-template .kk-row{border-bottom:none!important;background:transparent!important}
  .kk-card.custom-template .kk-hint{display:none!important}
  .kk-card.custom-template .kk-card-head{background:transparent}
  .kk-card.custom-template .kk-card-body{background:transparent}
  .kk-card.custom-template .kk-card-body:before{display:none}
  .kk-card{visibility:hidden;opacity:0;pointer-events:none}
  .kk-card.custom-template{visibility:visible;opacity:1;pointer-events:auto}
  .kk-card-head{height:52px;background:var(--accent-soft)}
  .kk-card-body{position:relative;padding:14px 12px 12px;min-height:298px;height:298px}
  .kk-card-body:before{content:'DEMO · BUKAN BUKTI TRANSAKSI   DEMO · BUKAN BUKTI TRANSAKSI   DEMO · BUKAN BUKTI TRANSAKSI';position:absolute;left:-34px;right:-34px;top:34px;text-align:center;font-size:22px;font-weight:1000;color:color-mix(in srgb, var(--accent) 22%, transparent);transform:rotate(-22deg);pointer-events:none;line-height:2.2}
  .kk-check{position:absolute;top:6px;left:50%;transform:translateX(-50%);font-size:38px;line-height:1;color:var(--accent);text-align:center;font-weight:900}
  .kk-status{position:absolute;top:52px;left:50%;transform:translateX(-50%);width:100%;padding:0 10px;font-size:14px;font-weight:1000;text-align:center;letter-spacing:-.2px}
  .kk-date{position:absolute;top:74px;left:50%;transform:translate(calc(-50% + var(--date-x)), var(--date-y));font-size:8px;text-align:center;color:#657183;white-space:nowrap}
  .kk-title{position:absolute;top:98px;left:12px;right:12px;padding:8px 4px 8px;border-top:1px solid #e7e2d7;border-bottom:1px solid #e7e2d7;text-align:center;font-size:11px;font-weight:1000;color:var(--accent);letter-spacing:.2px}
  .kk-title small{display:block;font-size:8px;color:#6e7784;margin-top:2px;line-height:1.25}
  .kk-row{position:absolute;left:12px;right:12px;display:flex;justify-content:space-between;gap:8px;padding:8px 2px;border-bottom:1px solid #e7e2d7;font-size:9px;align-items:center}
  .kk-row b{text-align:right;font-size:9px}
  .kk-name-row{top:162px;transform:translate(var(--name-x), var(--name-y))}
  .kk-acc-row{top:192px;transform:translate(var(--acc-x), var(--acc-y))}
  .kk-hint{position:absolute;left:10px;right:10px;bottom:6px;font-size:8px;line-height:1.15;text-align:center;color:#7a8592;padding-top:6px;font-weight:700}
  .kk-direct-data{position:absolute;inset:0;z-index:8;pointer-events:none;color:#5f6773;font-family:Arial,Helvetica,sans-serif}
  .kk-direct-data .kk-direct{position:absolute;left:50%;transform:translateX(-50%);min-width:120px;max-width:78%;text-align:center;white-space:nowrap;font-weight:600;line-height:1.12;letter-spacing:0;text-shadow:none}
  .kk-direct-date{top:290px;transform:translate(calc(-50% + var(--date-x)),var(--date-y))!important;font-size:12px;line-height:1;color:#6a7380;font-weight:500}
  .kk-direct-time{top:290px;transform:translate(calc(-50% + var(--time-x)),var(--time-y))!important;font-size:12px;line-height:1;color:#6a7380;font-weight:500}
  .kk-direct-name{top:365px;transform:translate(calc(-50% + var(--name-x)),var(--name-y))!important;font-size:13px;color:#5b6370;font-weight:600}
  .kk-poster.theme-bri .kk-direct-name{display:flex;align-items:center;justify-content:flex-start;gap:5px;min-width:160px;max-width:none;text-align:left;color:#2e3440;font-family:Arial,Helvetica,sans-serif;font-size:8px;font-weight:700;letter-spacing:0;line-height:1;white-space:nowrap}
  .kk-poster.theme-bri .kk-direct-name .bri-name-front{display:inline-block;letter-spacing:0;color:#2d3340;font-size:7px;font-weight:700;line-height:1}
  .kk-poster.theme-bri .kk-direct-name .bri-name-mask{display:inline-block;height:7px;border-radius:999px;background:linear-gradient(90deg,#bcc3ce 0%,#d7dbe2 58%,#c3cad4 100%);box-shadow:0 1px 3px rgba(74,94,120,.20);vertical-align:middle}
  .kk-direct-acc{top:395px;transform:translate(calc(-50% + var(--acc-x)),var(--acc-y))!important;font-size:13px;color:#5b6370;font-weight:600}
  .kk-direct-nominal{top:690px;transform:translate(calc(-50% + var(--nominal-x)),var(--nominal-y))!important;font-size:44px;font-family:Georgia,'Times New Roman',serif;font-weight:900;letter-spacing:.18px;z-index:20;min-width:560px;text-align:center;padding:0 10px;border:none;background:linear-gradient(180deg,#fffef5 0%,#fff8d7 10%,#ffe9a0 22%,#ffd25a 40%,#ffbe2e 54%,#e59710 70%,#ad6200 84%,#6f3600 100%);-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent;box-shadow:none;-webkit-text-stroke:1.15px rgba(83,38,0,.90);text-shadow:0 1px 0 rgba(255,250,225,.98),0 2px 0 rgba(243,199,87,.98),0 3px 0 rgba(186,113,11,.98),0 4px 0 rgba(121,65,0,.95),0 8px 14px rgba(0,0,0,.42),0 0 10px rgba(255,208,96,.18),0 0 20px rgba(255,184,43,.10);filter:drop-shadow(0 1px 0 rgba(255,247,214,.55)) drop-shadow(0 5px 8px rgba(0,0,0,.18));text-transform:none}
  .kk-direct-topnominal{top:335px;transform:translate(calc(-50% + var(--nominal-top-x)),var(--nominal-top-y))!important;font-size:24px;color:#1f2937;font-weight:800;letter-spacing:0;z-index:14;min-width:300px;text-align:center}
  .kk-direct-userid{top:724px;transform:translate(calc(-50% + var(--user-x)),var(--user-y))!important;font-size:22px;font-family:Georgia,'Times New Roman',serif;font-weight:900;letter-spacing:.04em;z-index:20;min-width:360px;text-align:center;text-transform:uppercase;background:linear-gradient(180deg,#fffef5 0%,#fff8dc 10%,#ffeeb0 24%,#ffd867 42%,#ffbf33 56%,#e69810 72%,#b46800 86%,#733800 100%);-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-fill-color:transparent;-webkit-text-stroke:1px rgba(83,38,0,.88);text-shadow:0 1px 0 rgba(255,250,225,.98),0 2px 0 rgba(243,199,87,.90),0 3px 0 rgba(176,105,10,.92),0 6px 12px rgba(0,0,0,.35),0 0 10px rgba(255,210,102,.14)}
  .kk-direct-status,.kk-direct-total{display:none}
  .kk-poster.theme-bri .kk-direct-status{display:block;top:207px;transform:translate(calc(-50% + var(--status-x)),var(--status-y))!important;z-index:21;min-width:330px;text-align:center;color:#fff;font-family:Arial,Helvetica,sans-serif;font-size:18px;font-weight:950;letter-spacing:.01em;line-height:1.1;text-shadow:0 1px 2px rgba(0,35,90,.42)}
  .kk-poster.theme-bri .kk-direct-total{display:block;top:303px;transform:translate(calc(-50% + var(--total-x)),var(--total-y))!important;z-index:21;min-width:330px;text-align:center;color:#a0a7b0;font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:600;letter-spacing:0;line-height:1.1;text-shadow:0 1px 0 rgba(255,255,255,.75)}
  .kk-direct-bri-avatar{display:none}
  .kk-poster.theme-bri .kk-direct-bri-avatar{display:grid;place-items:center;position:absolute;left:50%;top:382px;transform:translate(calc(-50% + 71px + var(--avatar-x)),calc(54px + var(--avatar-y)))!important;z-index:23;width:30px;height:30px;border-radius:50%;color:#fff;font-family:Arial,Helvetica,sans-serif;font-size:8px;font-weight:950;letter-spacing:.01em;line-height:1;text-align:center;text-shadow:0 1px 1px rgba(0,55,120,.48);pointer-events:none}
  .kk-direct-bri-sensor,.kk-direct-bri-source,.kk-direct-bri-bank,.kk-direct-bri-target-label,.kk-direct-bri-target-avatar,.kk-direct-bri-target-bank,.kk-direct-bri-target-sensor1,.kk-direct-bri-detail,.kk-direct-bri-ref{display:none}
  .kk-poster.theme-bri .kk-direct-bri-sensor{display:block;position:absolute;left:50%;top:382px;transform:translate(calc(-50% + 95px + var(--sensor-x)),calc(53px + var(--sensor-y)))!important;z-index:22;width:104px;height:42px;pointer-events:none}
  .kk-poster.theme-bri .kk-direct-bri-source{display:block;position:absolute;left:50%;top:382px;transform:translate(calc(-50% + 66px + var(--source-x)),calc(14px + var(--source-y)))!important;z-index:24;min-width:130px;color:#6d747e;font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:800;letter-spacing:.01em;line-height:1;white-space:nowrap;pointer-events:none}
  .kk-poster.theme-bri .kk-direct-bri-bank{display:block;position:absolute;left:50%;top:382px;transform:translate(calc(-50% + 104px + var(--bank-x)),calc(54px + var(--bank-y)))!important;z-index:24;min-width:88px;color:#7f8790;font-family:Arial,Helvetica,sans-serif;font-size:8px;font-weight:700;letter-spacing:.01em;line-height:1;white-space:nowrap;pointer-events:none}
  .kk-poster.theme-bri .kk-direct-bri-sensor:before,.kk-poster.theme-bri .kk-direct-bri-sensor:after,.kk-poster.theme-bri .kk-direct-bri-target-sensor1:before{content:"";position:absolute;left:0;height:10px;border-radius:999px;background:linear-gradient(90deg,#bcc3ce 0%,#d7dbe2 58%,#c3cad4 100%);box-shadow:0 1px 3px rgba(74,94,120,.20)}
  .kk-poster.theme-bri .kk-direct-bri-sensor:before{top:0;width:96px}
  .kk-poster.theme-bri .kk-direct-bri-sensor:after{top:31px;width:74px}

  .kk-poster.theme-bri .kk-direct-bri-target-label{display:block;position:absolute;left:50%;top:382px;transform:translate(calc(-50% + 18px + var(--target-label-x)),calc(74px + var(--target-label-y)))!important;z-index:24;color:#6d747e;font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:800;letter-spacing:.01em;line-height:1;white-space:nowrap;pointer-events:none}
  .kk-poster.theme-bri .kk-direct-bri-target-avatar{display:grid;place-items:center;position:absolute;left:50%;top:382px;transform:translate(calc(-50% + 27px + var(--target-avatar-x)),calc(100px + var(--target-avatar-y)))!important;z-index:23;width:28px;height:28px;border-radius:50%;background:#4b9be8;color:#fff;font-family:Arial,Helvetica,sans-serif;font-size:8px;font-weight:900;letter-spacing:.01em;line-height:1;text-align:center;pointer-events:none}
  .kk-poster.theme-bri .kk-direct-bri-target-bank{display:block;position:absolute;left:50%;top:382px;transform:translate(calc(-50% + 87px + var(--target-bank-x)),calc(125px + var(--target-bank-y)))!important;z-index:24;min-width:88px;color:#7f8790;font-family:Arial,Helvetica,sans-serif;font-size:8px;font-weight:700;letter-spacing:.01em;line-height:1;white-space:nowrap;pointer-events:none}
  .kk-poster.theme-bri .kk-direct-bri-target-sensor1{display:block;position:absolute;left:50%;top:382px;transform:translate(calc(-50% + 119px + var(--target-sensor1-x)),calc(96px + var(--target-sensor1-y)))!important;z-index:22;width:78px;height:10px;pointer-events:none}
  .kk-poster.theme-bri .kk-direct-bri-target-sensor1:before{top:0;width:78px}
  .kk-poster.theme-bri .kk-direct-bri-detail{display:block;position:absolute;left:50%;top:382px;transform:translate(calc(-50% + 100px + var(--detail-x)),calc(210px + var(--detail-y)))!important;z-index:24;min-width:170px;text-align:center;color:#1978bf;font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:800;line-height:1;white-space:nowrap;pointer-events:none}
  .kk-poster.theme-bri .kk-direct-bri-ref{display:block;position:absolute;left:50%;top:382px;transform:translate(calc(-50% + 44px + var(--ref-x)),calc(177px + var(--ref-y)))!important;z-index:24;min-width:70px;text-align:left;color:#9aa2ad;font-family:Arial,Helvetica,sans-serif;font-size:8px;font-weight:700;line-height:1;white-space:nowrap;pointer-events:none}

  .kk-poster.theme-bri .kk-direct-name{
    display:block;
    position:absolute;
    left:50%;
    top:382px;
    transform:translate(calc(-50% + 82px + var(--name-x)),calc(101px + var(--name-y)))!important;
    z-index:24;
    min-width:34px;
    color:#5a6370;
    font-family:Arial,Helvetica,sans-serif;
    font-size:11px;
    font-weight:700;
    letter-spacing:.01em;
    line-height:1;
    text-align:left;
    white-space:nowrap;
    pointer-events:none;
  }
  .kk-poster.theme-bri .kk-direct-acc{display:none !important}
  .kk-direct-label{display:block;font-size:10px;opacity:.8;letter-spacing:.12em;margin-bottom:2px}

  /* ============================================================
     STYLE KHUSUS BRI — tidak memengaruhi BCA.
     Semua posisi BRI tetap memakai preset BRI sendiri di bawah.
     ============================================================ */
  .kk-poster.theme-bri .kk-direct-date{
    color:#fff;
    font-size:12px;
    font-weight:600;
    text-shadow:0 1px 2px rgba(0,44,101,.34);
  }
  .kk-poster.theme-bri .kk-direct-time{display:none!important}
  .kk-poster.theme-bri .kk-direct-name,
  .kk-poster.theme-bri .kk-direct-acc{
    color:#0a4f9a;
    font-weight:800;
    text-shadow:0 1px 0 rgba(255,255,255,.88);
  }
  .kk-poster.theme-bri .kk-direct-topnominal{
    color:#0a72b6;
    font-size:20px;
    font-weight:900;
    letter-spacing:0;
    text-shadow:0 1px 0 rgba(255,255,255,.84),0 1px 2px rgba(0,53,125,.10);
  }
  .kk-poster.theme-bri .kk-direct-userid{
    background:linear-gradient(180deg,#ffffff 0%,#dff0ff 18%,#8cd1ff 42%,#2489d4 64%,#0756a7 84%,#03326d 100%);
    -webkit-background-clip:text;
    background-clip:text;
    color:transparent;
    -webkit-text-fill-color:transparent;
    -webkit-text-stroke:1px rgba(1,47,101,.92);
    text-shadow:0 1px 0 rgba(255,255,255,.82),0 2px 0 rgba(11,102,184,.76),0 5px 10px rgba(0,0,0,.30);
  }
  .kk-poster.theme-bri .kk-direct-nominal{
    background:linear-gradient(180deg,#ffffff 0%,#dff3ff 13%,#a6dcff 30%,#56b6f2 50%,#1883d1 68%,#0757a8 84%,#032f70 100%);
    -webkit-background-clip:text;
    background-clip:text;
    color:transparent;
    -webkit-text-fill-color:transparent;
    -webkit-text-stroke:1.15px rgba(1,42,95,.92);
    text-shadow:0 1px 0 rgba(255,255,255,.92),0 2px 0 rgba(43,143,216,.88),0 3px 0 rgba(8,86,161,.92),0 7px 14px rgba(0,0,0,.38),0 0 12px rgba(128,210,255,.18);
  }
  .kk-poster.theme-bri .kk-bottom .a{
    background:linear-gradient(180deg,#ffffff 0%,#e5f5ff 14%,#a9dcff 33%,#5ab9f0 54%,#167fc6 72%,#07549f 88%,#032d67 100%);
    -webkit-background-clip:text;
    background-clip:text;
    color:transparent;
    -webkit-text-stroke:1.4px rgba(2,42,87,.94);
    text-shadow:0 1px 0 rgba(255,255,255,.90),0 2px 0 rgba(48,147,215,.86),0 3px 0 rgba(8,87,155,.95),0 7px 14px rgba(0,0,0,.48),0 0 12px rgba(104,199,255,.30);
  }
  
  .kk-bottom{position:absolute;left:50%;top:632px;transform:translate(calc(-50% + var(--winner-x)),var(--winner-y));width:520px;max-width:72%;text-align:center;text-transform:uppercase;font-weight:1000;z-index:18}
  .kk-bottom .c{display:none!important}
  .kk-bottom .a{display:inline-block;font-family:Georgia,'Times New Roman',serif;font-size:27px;font-style:italic;font-weight:900;letter-spacing:.03em;line-height:1;text-transform:uppercase;background:linear-gradient(180deg,#fffef2 0%,#fff4c7 12%,#ffe38d 30%,#ffc93a 52%,#e89a13 70%,#b76606 86%,#7a3800 100%);-webkit-background-clip:text;background-clip:text;color:transparent;-webkit-text-stroke:1.5px rgba(76,30,0,.96);paint-order:stroke fill;text-shadow:0 1px 0 rgba(255,252,236,.92),0 2px 0 rgba(217,142,15,.98),0 3px 0 rgba(156,88,0,.98),0 4px 0 rgba(102,52,0,.95),0 8px 16px rgba(0,0,0,.62),0 0 16px rgba(255,219,108,.42),0 0 4px rgba(255,245,197,.55);filter:drop-shadow(0 1px 0 rgba(255,247,214,.4))}.kk-bottom .c{font-size:28px;color:var(--accent-2);margin-top:8px}
  .kk-side{background:linear-gradient(180deg,#03214c 0%,#01152f 100%);border:1px solid rgba(120,180,255,.35);border-radius:24px;padding:14px 14px 12px;box-shadow:0 16px 38px rgba(0,0,0,.28);align-self:start;position:sticky;top:14px;max-height:calc(100vh - 28px);overflow:auto}
  .kk-side h2{margin:0 0 14px;text-align:center;font-size:18px;line-height:1.2;text-transform:uppercase;color:#f4fbff}
  .kk-group{margin-bottom:12px}
  .kk-group label,.kk-pos-title{display:block;margin:0 0 6px;font-size:12px;font-weight:900;text-transform:uppercase;color:#d8edff;letter-spacing:.4px}
  .kk-input,.kk-side select{width:100%;height:42px;border-radius:12px;border:1px solid rgba(84,184,255,.45);background:#f8fcff;color:#0f172a;padding:0 12px;font-weight:800;outline:none}
  .kk-btn{width:100%;height:44px;border:none;border-radius:12px;background:linear-gradient(180deg,#20c15a 0%,#1aaa4f 100%);color:#fff;font-size:15px;font-weight:900;cursor:pointer;margin-top:10px}
  .kk-btn.small{height:38px;font-size:13px;margin-top:0}
  .kk-btn.alt{background:linear-gradient(180deg,#3a8dff 0%,#2266d9 100%)}
  .kk-btn.ghost{background:linear-gradient(180deg,#8c98aa 0%,#697687 100%)}
  .kk-btn.orange{background:linear-gradient(180deg,#ff9b47 0%,#df6f1f 100%)}
  .kk-btn:active{transform:translateY(1px)}
  .kk-btn-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}
  .kk-help{font-size:11px;line-height:1.5;color:#cfe4ff;text-align:center;margin-top:12px}.kk-foot{font-size:10px;line-height:1.45;color:#9ec1eb;text-align:center;margin-top:10px}
  .kk-pos-box{padding:10px;border-radius:14px;background:rgba(255,255,255,.05);border:1px solid rgba(144,201,255,.18);margin-top:10px}
  .kk-range{display:grid;grid-template-columns:18px 1fr 34px;gap:8px;align-items:center;margin-top:8px}
  .kk-range span{font-size:11px;font-weight:900;color:#d9eeff;text-align:center}
  .kk-range b{font-size:11px;color:#fff;text-align:right}
  .kk-range input[type=range]{width:100%}
  .kk-code{margin-top:10px;padding:10px 12px;border-radius:12px;background:rgba(0,0,0,.22);border:1px solid rgba(255,255,255,.09);font-size:10px;line-height:1.5;color:#dfefff;white-space:pre-wrap;word-break:break-word}
  @media(max-width:1150px){.kk-wrap{grid-template-columns:1fr}.kk-side{position:static;max-width:460px;justify-self:center;width:100%;max-height:none}.kk-poster{width:min(100%,760px)}}
  @media(max-width:760px){.kk-wrap{padding:8px;gap:12px}.kk-poster{aspect-ratio:auto;min-height:720px}.kk-card{max-width:calc(100% - 28px);width:var(--card-width);height:var(--card-height);top:var(--card-top)}.kk-brand .jt{font-size:42px}.kk-brand .sub{font-size:24px}.kk-bottom{top:620px;width:86%}.kk-bottom .a{font-size:22px}.kk-bottom .c{font-size:24px}.kk-direct-nominal{font-size:34px;min-width:86%}}


  /* ============================================================
     V476 — TEMA HITAM EMAS + SIDEBAR HARD LOCK, HANYA MENGUBAH UI GENERATOR.
     POSISI INTERNAL POSTER / BUKTI TIDAK DIUBAH.
     ============================================================ */
  :host{
    display:block;
    min-height:100vh;
    padding:24px 28px 42px;
    box-sizing:border-box;
    color:#f8eed7;
    font-family:Inter,Arial,Helvetica,sans-serif;
    background:
      radial-gradient(circle at 45% 10%,rgba(210,158,43,.08),transparent 32%),
      linear-gradient(180deg,#090806 0%,#050504 100%);
    border:0;
    outline:0;
  }
  .bk-head-v473{
    min-height:94px;
    margin:0 0 16px;
    padding:16px 20px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:18px;
    border:1px solid rgba(229,180,70,.28);
    border-radius:20px;
    background:linear-gradient(145deg,rgba(22,20,16,.98),rgba(8,8,7,.99));
    box-shadow:0 18px 40px rgba(0,0,0,.28),inset 0 1px 0 rgba(255,240,185,.05);
  }
  .bk-head-left-v473{display:flex;align-items:center;gap:16px;min-width:0}
  .bk-head-icon-v473{
    width:68px;height:68px;flex:0 0 68px;
    display:grid;place-items:center;
    border:1px solid rgba(235,188,75,.36);
    border-radius:50%;
    background:radial-gradient(circle,rgba(226,174,58,.18),rgba(9,9,8,.98) 72%);
    color:#efc65d;
  }
  .bk-head-icon-v473 svg{width:31px;height:31px;fill:none;stroke:currentColor;stroke-width:1.8;stroke-linecap:round;stroke-linejoin:round}
  .bk-head-kicker-v473{color:#d9a941;font-size:11px;font-weight:950;letter-spacing:.08em;text-transform:uppercase}
  .bk-head-title-v473{margin-top:3px;color:#fff7e4;font-size:28px;font-weight:950;line-height:1.05;letter-spacing:-.02em}
  .bk-head-desc-v473{margin-top:8px;color:#b9ae94;font-size:12px;line-height:1.35}
  .kk-wrap,
  .kk-wrap.theme-bca,
  .kk-wrap.theme-bri{
    display:grid;
    grid-template-columns:minmax(0,1fr) 420px;
    gap:20px;
    min-height:auto;
    padding:0;
    background:transparent!important;
    align-items:start;
  }
  .bk-left-v473{min-width:0;display:grid;gap:14px}
  .kk-stage{
    min-width:0;
    padding:16px;
    align-items:flex-start;
    justify-content:center;
    border:1px solid rgba(229,180,70,.30);
    border-radius:20px;
    background:linear-gradient(145deg,#15130f 0%,#080807 100%);
    box-shadow:0 18px 44px rgba(0,0,0,.32),inset 0 1px 0 rgba(255,239,182,.05);
    overflow:auto;
  }
  .kk-poster{
    flex:0 0 auto;
    box-shadow:0 20px 50px rgba(0,0,0,.52),0 0 0 1px rgba(231,180,67,.20);
  }
  .bk-tools-v473{
    padding:14px 16px;
    display:grid;
    grid-template-columns:minmax(0,1fr) auto;
    align-items:end;
    gap:18px;
    border:1px solid rgba(229,180,70,.25);
    border-radius:18px;
    background:linear-gradient(180deg,#14120f,#090807);
    box-shadow:0 12px 28px rgba(0,0,0,.22),inset 0 1px 0 rgba(255,239,182,.04);
  }
  .bk-tools-title-v473{margin-bottom:7px;color:#cabb8c;font-size:10px;font-weight:950;letter-spacing:.07em;text-transform:uppercase}
  .bk-template-row-v473{display:grid;grid-template-columns:repeat(5,112px);align-items:center;justify-content:start;gap:9px;width:100%;padding-bottom:4px;overflow-x:auto;overflow-y:hidden}
    .bk-zoom-row-v473{display:flex;align-items:center;gap:9px;flex-wrap:wrap}
  .bk-template-btn-v473{
    width:112px;height:76px;padding:0;min-width:112px;
    position:relative;overflow:hidden;
    border:1px solid rgba(229,180,70,.34);
    border-radius:11px;
    background-color:#060606;
    background-position:center;
    background-size:contain;
    background-repeat:no-repeat;
    box-shadow:inset 0 0 0 1px rgba(0,0,0,.42);
    cursor:pointer;
  }
  .bk-template-btn-v473:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 68%,rgba(0,0,0,.18));pointer-events:none}
  .bk-template-btn-v473.active{border-color:#efc75c;box-shadow:0 0 0 2px rgba(229,180,70,.13),inset 0 0 0 1px rgba(0,0,0,.38)}
  .bk-zoom-btn-v473,.bk-fit-btn-v473{
    min-height:42px;padding:0 14px;
    border:1px solid rgba(229,180,70,.35);
    border-radius:10px;
    background:linear-gradient(180deg,#15130f,#090807);
    color:#efc85f;font-weight:900;cursor:pointer;
  }
  .bk-zoom-value-v473{min-width:60px;text-align:center;color:#fff2cf;font-weight:850}
  .kk-wrap.theme-bca .kk-side,
  .kk-wrap.theme-bri .kk-side,
  .kk-side{
    position:sticky;
    top:14px;
    align-self:start;
    width:420px;
    min-width:420px;
    max-width:420px;
    max-height:calc(100vh - 28px);
    overflow:auto;
    padding:0 0 18px;
    border:1px solid rgba(229,180,70,.32)!important;
    border-radius:20px;
    background:linear-gradient(180deg,#15130f 0%,#090807 100%)!important;
    color:#f8eed7;
    box-shadow:0 18px 44px rgba(0,0,0,.34),inset 0 1px 0 rgba(255,239,182,.05);
  }
  .kk-side::-webkit-scrollbar{width:8px}
  .kk-side::-webkit-scrollbar-track{background:#090807}
  .kk-side::-webkit-scrollbar-thumb{background:linear-gradient(180deg,#bd8b2b,#755114);border-radius:20px}
  .kk-side h2{
    position:sticky;top:0;z-index:5;
    margin:0;padding:18px 20px;
    display:flex;align-items:center;gap:10px;
    border-bottom:1px solid rgba(229,180,70,.22);
    background:linear-gradient(180deg,#181510,#0f0d09);
    color:#efc75e;
    text-align:left;
    font-size:17px;line-height:1.2;font-weight:950;text-transform:uppercase;
  }
  .kk-side h2:before{
    content:"";width:26px;height:26px;flex:0 0 26px;
    background:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cg fill='none' stroke='%23efc75e' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect x='5' y='3' width='12' height='18' rx='2'/%3E%3Cpath d='M8 7h6M8 11h6M8 15h3'/%3E%3Cpath d='M16 15l3 3m0-3-3 3'/%3E%3C/g%3E%3C/svg%3E") center/24px 24px no-repeat;
  }
  .bk-section-v473{
    margin:0 16px 16px;
    padding:16px;
    border:1px solid rgba(229,180,70,.17);
    border-radius:16px;
    background:rgba(255,255,255,.014);
  }
  .bk-section-title-v473{
    margin:0 0 13px;
    color:#dfb44a;
    font-size:12px;font-weight:950;letter-spacing:.045em;text-transform:uppercase;
  }
  .bk-fields-grid-v473{display:grid;grid-template-columns:1fr 1fr;gap:12px 14px}
  .kk-group{margin:0}
  .kk-group label,.kk-pos-title{
    display:block;margin:0 0 6px;
    color:#cdbb88;
    font-size:10px;font-weight:950;letter-spacing:.04em;text-transform:uppercase;
  }
  .kk-input,.kk-side select{
    width:100%;height:44px;
    border:1px solid rgba(229,180,70,.28);
    border-radius:11px;
    background:linear-gradient(180deg,#11100d,#0a0908);
    color:#fff2cf;
    -webkit-text-fill-color:#fff2cf;
    padding:0 12px;
    font-size:11px;font-weight:800;
    outline:none;
  }
  .kk-input:focus,.kk-side select:focus{border-color:rgba(255,218,116,.75);box-shadow:0 0 0 2px rgba(229,180,70,.11)}
  .kk-side select option{background:#f2e7c9;color:#171108;-webkit-text-fill-color:#171108}
  .bk-actions-v473{display:grid;grid-template-columns:1fr 1fr;gap:10px}
  .kk-btn{
    width:100%;height:47px;margin:0;
    border:1px solid rgba(229,180,70,.43);
    border-radius:12px;
    background:linear-gradient(135deg,#c58a20,#f0c75d 52%,#d9a431);
    color:#241604;
    font-size:11px;font-weight:950;
    box-shadow:inset 0 1px 0 rgba(255,244,200,.52);
  }
  .kk-btn.alt,.kk-btn.ghost{
    background:linear-gradient(180deg,#15130f,#090807);
    color:#efcc6c;
  }
  .kk-btn.orange{
    background:linear-gradient(180deg,#15130f,#090807);
    color:#efcc6c;
  }
  .kk-btn.small{height:40px;font-size:10px}
  .kk-pos-box{
    padding:12px;margin:0 0 10px;
    border:1px solid rgba(229,180,70,.16);
    border-radius:13px;
    background:linear-gradient(180deg,#11100d,#0b0a08);
  }
  .kk-range{display:grid;grid-template-columns:18px minmax(0,1fr) 42px;gap:8px;align-items:center;margin-top:7px}
  .kk-range span{color:#d9caa6;font-size:10px;font-weight:900}
  .kk-range b{padding:4px 5px;border:1px solid rgba(229,180,70,.22);border-radius:7px;background:#17130c;color:#edca70;text-align:center;font-size:10px}
  .kk-range input[type=range]{width:100%;accent-color:#d9a83b}
  .kk-code,.kk-help,.kk-foot{display:none!important}
  .kk-btn-grid{margin-top:8px!important}
  .bk-position-section-v484{display:block!important}
  .bk-position-head-v159{
    display:flex;align-items:center;justify-content:space-between;gap:10px;
    margin-bottom:12px;
  }
  .bk-position-head-v159 .bk-section-title-v473{margin:0!important}
  .bk-position-toggle-v159{
    flex:0 0 auto;height:30px;padding:0 10px;border:1px solid rgba(239,204,108,.34);
    border-radius:8px;background:linear-gradient(180deg,#17130c,#0b0a08);
    color:#efcc6c;font-size:8px;font-weight:950;letter-spacing:.06em;cursor:pointer;
  }
  .bk-position-toggle-v159:hover{filter:brightness(1.12)}
  .bk-position-body-v159{
    display:block;
  }
  .bk-position-section-v484.is-collapsed-v159 .bk-position-body-v159{
    display:none!important;
  }
  .bk-position-help-v159{
    display:block;margin:0 0 12px;padding:9px 10px;
    border:1px solid #2b354a;border-radius:9px;background:#080d16;
    color:#9ca8bc;font-size:8px;font-weight:800;letter-spacing:.06em;text-align:center;
  }
  .bk-position-section-v484.is-collapsed-v159{
    padding-bottom:12px!important;
  }
  .bk-position-section-v484{
    order:-10!important;
    border-color:rgba(239,204,108,.52)!important;
    box-shadow:inset 0 0 0 1px rgba(239,204,108,.05),0 8px 24px rgba(0,0,0,.16)!important;
  }
  .bk-position-head-v159{
    position:sticky;
    top:0;
    z-index:12;
    margin:-14px -14px 12px!important;
    padding:12px 14px!important;
    background:#0f0d09!important;
    border-bottom:1px solid rgba(239,204,108,.22)!important;
    border-radius:11px 11px 0 0;
  }
  .bk-position-section-v484.is-collapsed-v159 .bk-position-head-v159{
    margin-bottom:-12px!important;
    border-bottom:0!important;
    border-radius:11px;
  }
  .bk-position-dashboard-v1511{
    display:block!important;
    visibility:visible!important;
    opacity:1!important;
    margin:0 14px 14px!important;
    padding:0 14px 14px!important;
    border:1px solid rgba(244,194,66,.62)!important;
    border-radius:13px!important;
    background:linear-gradient(180deg,#151109,#0b0906)!important;
    box-shadow:0 0 0 1px rgba(244,194,66,.06),0 10px 30px rgba(0,0,0,.25)!important;
  }
  .bk-position-head-v1511{
    display:flex!important;
    align-items:center!important;
    justify-content:space-between!important;
    gap:10px!important;
    margin:0 -14px 12px!important;
    padding:12px 14px!important;
    border-bottom:1px solid rgba(244,194,66,.28)!important;
    background:#110d07!important;
    border-radius:12px 12px 0 0!important;
  }
  .bk-position-head-v1511 .bk-section-title-v473{
    margin:2px 0 0!important;
    color:#ffd75e!important;
  }
  .bk-position-version-v1511{
    color:#7cf1d7!important;
    font-size:8px!important;
    font-weight:950!important;
    letter-spacing:.10em!important;
  }
  .bk-position-toggle-v1511{
    flex:0 0 auto!important;
    height:31px!important;
    padding:0 11px!important;
    border:1px solid rgba(244,194,66,.45)!important;
    border-radius:8px!important;
    background:#1b1408!important;
    color:#ffd75e!important;
    font-size:8px!important;
    font-weight:950!important;
    cursor:pointer!important;
  }
  .bk-position-body-v1511{
    display:block!important;
    visibility:visible!important;
  }
  .bk-position-dashboard-v1511.is-collapsed-v1511{
    padding-bottom:0!important;
  }
  .bk-position-dashboard-v1511.is-collapsed-v1511 .bk-position-head-v1511{
    margin-bottom:0!important;
    border-bottom:0!important;
    border-radius:12px!important;
  }
  .bk-position-dashboard-v1511.is-collapsed-v1511 .bk-position-body-v1511{
    display:none!important;
  }
  .bk-position-help-v1511{
    display:block!important;
    margin-bottom:10px!important;
    padding:9px 10px!important;
    border:1px solid #283247!important;
    border-radius:9px!important;
    background:#080d16!important;
    color:#9ca8bc!important;
    font-size:8px!important;
    font-weight:850!important;
    text-align:center!important;
    letter-spacing:.05em!important;
  }
  .bk-position-dashboard-v1511 .kk-pos-box{
    display:block!important;
    visibility:visible!important;
    opacity:1!important;
  }
  @media(max-width:1320px){
    .kk-wrap{grid-template-columns:1fr 380px}
    .kk-side,.kk-wrap.theme-bca .kk-side,.kk-wrap.theme-bri .kk-side{width:380px;min-width:380px;max-width:380px}
  }
  @media(max-width:1120px){
    .kk-wrap{grid-template-columns:1fr}
    .kk-side,.kk-wrap.theme-bca .kk-side,.kk-wrap.theme-bri .kk-side{position:static;width:100%;min-width:0;max-width:100%;max-height:none}
  }
  @media(max-width:720px){
    .bk-head-v473{padding:13px}
    .bk-head-icon-v473{width:52px;height:52px;flex-basis:52px}
    .bk-head-title-v473{font-size:21px}
    .bk-tools-v473{grid-template-columns:1fr}
    .bk-fields-grid-v473,.bk-actions-v473{grid-template-columns:1fr}
    .kk-stage{padding:8px}
  }

  /* V738 — ruang luar langsung di Shadow DOM agar border tidak rapat ke tepi. */
  :host{
    display:block!important;
    box-sizing:border-box!important;
    width:100%!important;
    min-height:100vh!important;
    padding:22px 26px 46px!important;
    background:#050504!important;
  }
  .kk-wrap,.kk-wrap.theme-bca,.kk-wrap.theme-bri{
    width:100%!important;
    max-width:100%!important;
    min-height:auto!important;
    background:transparent!important;
  }
  @media(max-width:1100px){:host{padding:18px 20px 38px!important}}
  @media(max-width:720px){:host{padding:12px 12px 30px!important}}

  </style>
  <div class="kk-wrap">
   <div class="kk-stage"><div class="kk-poster theme-bca" id="poster"><div class="kk-bg" id="bg"></div><div class="kk-overlay"></div><div class="kk-coins"><span class="c1"></span><span class="c2"></span><span class="c3"></span><span class="c4"></span></div><div class="kk-bank-badge" id="bankBadge">BCA EDITION</div><div class="kk-brand"><span class="jt"></span><span class="sub"><br></span></div><div class="kk-card"><div class="kk-card-head"></div><div class="kk-card-body"><div class="kk-check"></div><div class="kk-status"></div><div class="kk-date" id="datePreview"></div><div class="kk-title"><small></small></div><div class="kk-row kk-name-row"><span></span><b id="namePreview">---</b></div><div class="kk-row kk-acc-row"><span></span><b id="rekPreview">---</b></div><div class="kk-hint"></div></div></div><div class="kk-direct-data"><div class="kk-direct kk-direct-date" id="directDate"></div><div class="kk-direct kk-direct-time" id="directTime"></div><div class="kk-direct kk-direct-topnominal" id="directNominalTop"></div><div class="kk-direct kk-direct-status" id="directStatus">Transaksi Berhasil</div><div class="kk-direct kk-direct-total" id="directTotal">Total Transaksi</div><div class="kk-direct-bri-avatar" id="directBriAvatar"></div><div class="kk-direct-bri-source" id="directBriSource">Sumber Dana</div><div class="kk-direct-bri-bank" id="directBriBank">BANK BRI</div><div class="kk-direct-bri-sensor" aria-hidden="true"></div><div class="kk-direct-bri-target-label" id="directBriTargetLabel">Tujuan</div><div class="kk-direct-bri-target-avatar" id="directBriTargetAvatar"></div><div class="kk-direct-bri-target-bank" id="directBriTargetBank">BANK BRI</div><div class="kk-direct-bri-target-sensor1" aria-hidden="true"></div><div class="kk-direct-bri-detail" id="directBriDetail">Lihat Detail Transaksi</div><div class="kk-direct-bri-ref" id="directBriRef">No. Ref</div><div class="kk-direct kk-direct-userid" id="directUserId"></div><div class="kk-direct kk-direct-name" id="directName"></div><div class="kk-direct kk-direct-acc" id="directAcc"></div><div class="kk-direct kk-direct-nominal" id="directNominal"></div></div><div class="kk-bottom"><div class="a">SELAMAT KEPADA PEMENANG</div><div class="c">RP. <span id="amountBottom">0</span>,-</div></div></div></div>
   <aside class="kk-side"><h2>Generator Kartu<br>Kemenangan</h2>
     <div class="kk-group"><label>Background Bukti</label><select id="bgSelect"></select></div>
     <div class="kk-group"><label>Kategori Data</label><select id="catSelect"></select></div>
     <div class="kk-group"><label>Tanggal Bukti</label><input class="kk-input" id="dateInput" type="date"></div>
     <div class="kk-group"><label>Waktu Bukti</label><input class="kk-input" id="timeInput" type="time" step="1"></div>
     <div class="kk-group"><label>Nama Pemenang</label><input class="kk-input" id="nameInput" readonly></div>
     <div class="kk-group"><label>ID Akun Tersensor</label><input class="kk-input" id="rekInput" readonly></div>
     <div class="kk-group"><label>User ID</label><input class="kk-input" id="userIdInput" readonly></div>
     <div class="kk-group"><label>Nominal</label><input class="kk-input" id="amountInput" readonly></div>
     <button class="kk-btn" id="generateBtn">🎲 Generate Data</button>
     <button class="kk-btn alt" id="copyTextBtn">📄 Copy Text</button>
     <button class="kk-btn orange" id="downloadPngBtn" type="button">⬇ Download PNG</button>
     <button class="kk-btn alt" id="copyImageBtn" type="button">🖼 Copy Image</button>
     <div class="kk-pos-box"><div class="kk-pos-title">Posisi Tanggal <small style="opacity:.7">• geser tanggal di kartu</small></div><div class="kk-range"><span>X</span><input type="range" id="dateX" min="-300" max="300" value="0"><b id="dateXVal">0</b></div><div class="kk-range"><span>Y</span><input type="range" id="dateY" min="-300" max="300" value="0"><b id="dateYVal">0</b></div></div>
     <div class="kk-pos-box"><div class="kk-pos-title">Posisi Waktu <small style="opacity:.7">• pisahkan dari tanggal</small></div><div class="kk-range"><span>X</span><input type="range" id="timeX" min="-300" max="300" value="0"><b id="timeXVal">0</b></div><div class="kk-range"><span>Y</span><input type="range" id="timeY" min="-300" max="300" value="0"><b id="timeYVal">0</b></div></div>
     <div class="kk-pos-box"><div class="kk-pos-title">Posisi Nama Pemenang</div><div class="kk-range"><span>X</span><input type="range" id="nameX" min="-300" max="300" value="0"><b id="nameXVal">0</b></div><div class="kk-range"><span>Y</span><input type="range" id="nameY" min="-300" max="300" value="0"><b id="nameYVal">0</b></div></div>
     <div class="kk-pos-box"><div class="kk-pos-title">Posisi ID Akun</div><div class="kk-range"><span>X</span><input type="range" id="accX" min="-300" max="300" value="0"><b id="accXVal">0</b></div><div class="kk-range"><span>Y</span><input type="range" id="accY" min="-300" max="300" value="0"><b id="accYVal">0</b></div></div>
     <div class="kk-pos-box"><div class="kk-pos-title">Posisi Nominal Dalam Kartu</div><div class="kk-range"><span>X</span><input type="range" id="nominalTopX" min="-300" max="300" value="0"><b id="nominalTopXVal">0</b></div><div class="kk-range"><span>Y</span><input type="range" id="nominalTopY" min="-300" max="300" value="0"><b id="nominalTopYVal">0</b></div></div>
     <div class="kk-pos-box"><div class="kk-pos-title">Posisi User ID</div><div class="kk-range"><span>X</span><input type="range" id="userX" min="-300" max="300" value="0"><b id="userXVal">0</b></div><div class="kk-range"><span>Y</span><input type="range" id="userY" min="-300" max="300" value="0"><b id="userYVal">0</b></div></div>
     <div class="kk-pos-box"><div class="kk-pos-title">Posisi Transaksi Berhasil (BRI)</div><div class="kk-range"><span>X</span><input type="range" id="statusX" min="-300" max="300" value="0"><b id="statusXVal">0</b></div><div class="kk-range"><span>Y</span><input type="range" id="statusY" min="-300" max="300" value="0"><b id="statusYVal">0</b></div></div>
     <div class="kk-pos-box"><div class="kk-pos-title">Posisi Total Transaksi (BRI)</div><div class="kk-range"><span>X</span><input type="range" id="totalX" min="-300" max="300" value="0"><b id="totalXVal">0</b></div><div class="kk-range"><span>Y</span><input type="range" id="totalY" min="-300" max="300" value="0"><b id="totalYVal">0</b></div></div>
     <div class="kk-pos-box"><div class="kk-pos-title">Posisi Huruf Bulatan BRI</div><div class="kk-range"><span>X</span><input type="range" id="avatarX" min="-300" max="300" value="0"><b id="avatarXVal">0</b></div><div class="kk-range"><span>Y</span><input type="range" id="avatarY" min="-300" max="300" value="0"><b id="avatarYVal">0</b></div></div>
     <div class="kk-pos-box"><div class="kk-pos-title">Posisi Garis Sensor BRI</div><div class="kk-range"><span>X</span><input type="range" id="sensorX" min="-300" max="300" value="0"><b id="sensorXVal">0</b></div><div class="kk-range"><span>Y</span><input type="range" id="sensorY" min="-300" max="300" value="0"><b id="sensorYVal">0</b></div></div>
     <div class="kk-pos-box"><div class="kk-pos-title">Posisi Sumber Dana BRI</div><div class="kk-range"><span>X</span><input type="range" id="sourceX" min="-300" max="300" value="0"><b id="sourceXVal">0</b></div><div class="kk-range"><span>Y</span><input type="range" id="sourceY" min="-300" max="300" value="0"><b id="sourceYVal">0</b></div></div>
     <div class="kk-pos-box"><div class="kk-pos-title">Posisi Bank BRI</div><div class="kk-range"><span>X</span><input type="range" id="bankX" min="-300" max="300" value="0"><b id="bankXVal">0</b></div><div class="kk-range"><span>Y</span><input type="range" id="bankY" min="-300" max="300" value="0"><b id="bankYVal">0</b></div></div>
     <div class="kk-pos-box"><div class="kk-pos-title">Posisi Label Tujuan BRI</div><div class="kk-range"><span>X</span><input type="range" id="targetLabelX" min="-300" max="300" value="0"><b id="targetLabelXVal">0</b></div><div class="kk-range"><span>Y</span><input type="range" id="targetLabelY" min="-300" max="300" value="0"><b id="targetLabelYVal">0</b></div></div>
     <div class="kk-pos-box"><div class="kk-pos-title">Posisi Bulatan Tujuan BRI</div><div class="kk-range"><span>X</span><input type="range" id="targetAvatarX" min="-300" max="300" value="0"><b id="targetAvatarXVal">0</b></div><div class="kk-range"><span>Y</span><input type="range" id="targetAvatarY" min="-300" max="300" value="0"><b id="targetAvatarYVal">0</b></div></div>
     <div class="kk-pos-box"><div class="kk-pos-title">Posisi Sensor Tujuan BRI</div><div class="kk-range"><span>X</span><input type="range" id="targetSensor1X" min="-300" max="300" value="0"><b id="targetSensor1XVal">0</b></div><div class="kk-range"><span>Y</span><input type="range" id="targetSensor1Y" min="-300" max="300" value="0"><b id="targetSensor1YVal">0</b></div></div>
     <div class="kk-pos-box"><div class="kk-pos-title">Posisi Bank Tujuan BRI</div><div class="kk-range"><span>X</span><input type="range" id="targetBankX" min="-300" max="300" value="0"><b id="targetBankXVal">0</b></div><div class="kk-range"><span>Y</span><input type="range" id="targetBankY" min="-300" max="300" value="0"><b id="targetBankYVal">0</b></div></div><div class="kk-pos-box"><div class="kk-pos-title">Posisi Lihat Detail Transaksi</div><div class="kk-range"><span>X</span><input type="range" id="detailX" min="-300" max="300" value="0"><b id="detailXVal">0</b></div><div class="kk-range"><span>Y</span><input type="range" id="detailY" min="-300" max="300" value="0"><b id="detailYVal">0</b></div></div><div class="kk-pos-box"><div class="kk-pos-title">Posisi No. Ref</div><div class="kk-range"><span>X</span><input type="range" id="refX" min="-300" max="300" value="0"><b id="refXVal">0</b></div><div class="kk-range"><span>Y</span><input type="range" id="refY" min="-300" max="300" value="0"><b id="refYVal">0</b></div></div>
     <div class="kk-pos-box"><div class="kk-pos-title">Posisi Nominal Bawah</div><div class="kk-range"><span>X</span><input type="range" id="nominalX" min="-300" max="300" value="0"><b id="nominalXVal">0</b></div><div class="kk-range"><span>Y</span><input type="range" id="nominalY" min="-300" max="300" value="0"><b id="nominalYVal">0</b></div></div><div class="kk-pos-box"><div class="kk-pos-title">Posisi Selamat Kepada Pemenang</div><div class="kk-range"><span>X</span><input type="range" id="winnerX" min="-300" max="300" value="0"><b id="winnerXVal">0</b></div><div class="kk-range"><span>Y</span><input type="range" id="winnerY" min="-300" max="300" value="0"><b id="winnerYVal">0</b></div></div>
     <div class="kk-btn-grid" style="margin-top:10px"><button class="kk-btn orange small" id="resetPosBtn">Reset Posisi</button><button class="kk-btn ghost small" id="copyCssBtn">Copy CSS</button></div>
     <div class="kk-code" id="cssCode">#poster{
--date-x:192px;
--date-y:-3px;
--time-x:200px;
--time-y:-38px;
--name-x:65px;
--name-y:36px;
--acc-x:0px;
--acc-y:0px;
--nominal-top-x:191px;
--nominal-top-y:4px;
--user-x:-189px;
--user-y:24px;
--status-x:190px;
--status-y:57px;
--total-x:193px;
--total-y:13px;
--avatar-x:30px;
--avatar-y:14px;
--sensor-x:78px;
--sensor-y:14px;
--source-x:79px;
--source-y:37px;
--bank-x:64px;
--bank-y:30px;
--target-label-x:80px;
--target-label-y:46px;
--target-avatar-x:74px;
--target-avatar-y:39px;
--target-sensor1-x:39px;
--target-sensor1-y:68px;
--target-bank-x:83px;
--target-bank-y:28px;
--detail-x:87px;
--detail-y:3px;
--ref-x:64px;
--ref-y:-176px;
--nominal-x:-171px;
--nominal-y:90px;
--winner-x:-178px;
--winner-y:64px;
}</div>
     <div class="kk-help">Mode background saja aktif. Tidak memakai gambar kartu tambahan. Atur posisi tanggal, waktu, nama, ID akun, USER ID, dan nominal dengan slider, lalu gunakan Copy CSS. Setelah bos kirim CSS final, nilainya akan dikunci.</div><div class="kk-foot">Kartu promosi demo — bukan bukti transaksi.</div></aside>
  </div>`;


  /* V15.1 — unified JONI WORKGAME chrome inside Shadow DOM. Poster artwork itself stays untouched. */
  const wgTheme=document.createElement('style');
  wgTheme.textContent=`
    :host{display:block!important;min-height:0!important;background:transparent!important;color:#f5f7ff!important;font-family:Inter,ui-sans-serif,system-ui,-apple-system,"Segoe UI",Arial,sans-serif!important}
    .kk-wrap,.kk-wrap.theme-bca,.kk-wrap.theme-bri{grid-template-columns:minmax(0,1fr) 400px!important;gap:16px!important;padding:0!important;background:transparent!important}
    .bk-head-v473{min-height:94px!important;margin:0 0 14px!important;padding:17px 20px!important;border:1px solid #30394f!important;border-radius:16px!important;background:radial-gradient(circle at 12% 0%,rgba(123,92,255,.15),transparent 36%),radial-gradient(circle at 88% 20%,rgba(75,220,202,.07),transparent 30%),linear-gradient(155deg,#121827,#090d16)!important;box-shadow:0 18px 48px rgba(0,0,0,.24)!important}
    .bk-head-icon-v473{width:58px!important;height:58px!important;flex-basis:58px!important;border:1px solid rgba(123,92,255,.32)!important;border-radius:14px!important;background:rgba(123,92,255,.09)!important;color:#aa9cff!important}
    .bk-head-kicker-v473{color:#8173e9!important;font-size:9px!important;letter-spacing:.15em!important}
    .bk-head-title-v473{color:#f5f7ff!important;font-size:25px!important;letter-spacing:-.025em!important}
    .bk-head-desc-v473{color:#8390a6!important;font-size:10px!important}
    .kk-stage{padding:14px!important;border:1px solid #2b354a!important;border-radius:16px!important;background:linear-gradient(155deg,#101621,#090d16)!important;box-shadow:0 18px 48px rgba(0,0,0,.24)!important}
    .kk-poster{box-shadow:0 20px 48px rgba(0,0,0,.40),0 0 0 1px rgba(123,92,255,.15)!important}
    .bk-tools-v473{padding:13px 14px!important;border:1px solid #2b354a!important;border-radius:14px!important;background:linear-gradient(155deg,#101621,#090d16)!important;box-shadow:0 14px 34px rgba(0,0,0,.20)!important}
    .bk-tools-title-v473{color:#7d899f!important;font-size:9px!important;letter-spacing:.10em!important}
    .bk-template-btn-v473{border:1px solid #303a50!important;border-radius:9px!important;background-color:#070b12!important;box-shadow:none!important}
    .bk-template-btn-v473.active{border-color:#7966e8!important;box-shadow:0 0 0 2px rgba(123,92,255,.12)!important}
    .bk-zoom-btn-v473,.bk-fit-btn-v473{min-height:38px!important;border:1px solid #303a50!important;border-radius:9px!important;background:#111724!important;color:#bfc8d8!important}
    .bk-zoom-value-v473{color:#c9c2ff!important}
    .kk-side,.kk-wrap.theme-bca .kk-side,.kk-wrap.theme-bri .kk-side{position:sticky!important;top:14px!important;width:400px!important;min-width:400px!important;max-width:400px!important;max-height:calc(100vh - 112px)!important;padding:0 0 16px!important;border:1px solid #2b354a!important;border-radius:16px!important;background:linear-gradient(155deg,#111724,#090e17)!important;color:#eef3ff!important;box-shadow:0 18px 48px rgba(0,0,0,.24)!important}
    .kk-side::-webkit-scrollbar-track{background:#090e17!important}.kk-side::-webkit-scrollbar-thumb{background:linear-gradient(180deg,#765ee5,#3d8f8b)!important}
    .kk-side h2{padding:16px 18px!important;border-bottom:1px solid #252f43!important;background:#0e1420!important;color:#c8c0ff!important;font-size:14px!important;letter-spacing:.04em!important}
    .kk-side h2:before{filter:hue-rotate(205deg) saturate(.7) brightness(1.35)!important}
    .bk-section-v473{margin:0 14px 14px!important;padding:14px!important;border:1px solid #242e41!important;border-radius:13px!important;background:#0b101a!important}
    .bk-section-title-v473{margin-bottom:12px!important;color:#8e80ef!important;font-size:9px!important;letter-spacing:.10em!important}
    .kk-group label,.kk-pos-title{color:#7f8da3!important;font-size:8px!important;letter-spacing:.06em!important}
    .kk-input,.kk-side select{height:41px!important;border:1px solid #2a3449!important;border-radius:9px!important;background:#080d16!important;color:#eef3ff!important;-webkit-text-fill-color:#eef3ff!important;font-size:10px!important;box-shadow:none!important}
    .kk-input:focus,.kk-side select:focus{border-color:#725fe0!important;box-shadow:0 0 0 3px rgba(123,92,255,.10)!important}
    .kk-side select option{background:#0b101a!important;color:#eef3ff!important;-webkit-text-fill-color:#eef3ff!important}
    .kk-btn{height:43px!important;border:1px solid rgba(75,220,202,.35)!important;border-radius:9px!important;background:linear-gradient(100deg,#7656ff,#8d62f5 55%,#3fcfbe)!important;color:#fff!important;box-shadow:none!important;font-size:9px!important;letter-spacing:.025em!important}
    .kk-btn.alt,.kk-btn.ghost,.kk-btn.orange{border-color:#303a50!important;background:#111724!important;color:#bbc5d6!important}
    .kk-pos-box{border:1px solid #242e41!important;border-radius:11px!important;background:#090e17!important}
    .kk-range span{color:#748198!important}.kk-range b{border-color:#293348!important;background:#111724!important;color:#a99cff!important}.kk-range input[type=range]{accent-color:#7b5cff!important}
    .kk-copy-toast{background:#111724!important;border:1px solid #36415a!important;color:#eef3ff!important}
    @media(max-width:1320px){.kk-wrap,.kk-wrap.theme-bca,.kk-wrap.theme-bri{grid-template-columns:1fr 360px!important}.kk-side,.kk-wrap.theme-bca .kk-side,.kk-wrap.theme-bri .kk-side{width:360px!important;min-width:360px!important;max-width:360px!important}}
    @media(max-width:1120px){.kk-wrap,.kk-wrap.theme-bca,.kk-wrap.theme-bri{grid-template-columns:1fr!important}.kk-side,.kk-wrap.theme-bca .kk-side,.kk-wrap.theme-bri .kk-side{position:static!important;width:100%!important;min-width:0!important;max-width:100%!important;max-height:none!important}}

    /* V15.17 — TEMPLATE DIPINDAHKAN KE SAMPING KARTU */
    .kk-wrap,.kk-wrap.theme-bca,.kk-wrap.theme-bri{
      grid-template-columns:minmax(0,1fr) 176px 400px!important;
      gap:14px!important;
      align-items:start!important;
    }
    .bk-left-v473{
      min-width:0!important;
      display:block!important;
    }
    .bk-template-rail-v1517{
      position:sticky!important;
      top:14px!important;
      align-self:start!important;
      width:176px!important;
      min-width:176px!important;
      max-width:176px!important;
      margin:0!important;
      padding:12px!important;
      display:grid!important;
      grid-template-columns:1fr!important;
      gap:14px!important;
      border:1px solid #2b354a!important;
      border-radius:16px!important;
      background:linear-gradient(155deg,#101621,#090d16)!important;
      box-shadow:0 18px 48px rgba(0,0,0,.22)!important;
      max-height:none!important;
      overflow:visible!important;
    }
    .bk-template-rail-v1517 > div{
      min-width:0!important;
    }
    .bk-template-rail-v1517 .bk-tools-title-v473{
      margin:0 0 8px!important;
      text-align:center!important;
      color:#8e80ef!important;
      font-size:9px!important;
      letter-spacing:.11em!important;
    }
    .bk-template-rail-v1517 .bk-template-row-v473{
      width:100%!important;
      display:grid!important;
      grid-template-columns:1fr!important;
      gap:8px!important;
      padding:0!important;
      overflow:visible!important;
    }
    .bk-template-rail-v1517 .bk-template-btn-v473{
      width:100%!important;
      min-width:0!important;
      height:72px!important;
      border-radius:10px!important;
      background-size:cover!important;
      background-position:center!important;
    }
    .bk-template-rail-v1517 .bk-template-btn-v473.active{
      border-color:#8a78ff!important;
      box-shadow:0 0 0 2px rgba(123,92,255,.18),0 8px 18px rgba(0,0,0,.20)!important;
    }
    .bk-template-rail-v1517 .bk-zoom-row-v473{
      display:grid!important;
      grid-template-columns:36px minmax(0,1fr) 36px!important;
      align-items:center!important;
      gap:6px!important;
    }
    .bk-template-rail-v1517 .bk-zoom-btn-v473{
      width:36px!important;
      min-width:36px!important;
      height:36px!important;
      min-height:36px!important;
      padding:0!important;
    }
    .bk-template-rail-v1517 .bk-zoom-value-v473{
      min-width:0!important;
      width:100%!important;
      text-align:center!important;
      font-size:11px!important;
    }
    .bk-template-rail-v1517 .bk-fit-btn-v473{
      grid-column:1 / -1!important;
      width:100%!important;
      min-height:36px!important;
      height:36px!important;
      padding:0 7px!important;
      font-size:8px!important;
      white-space:nowrap!important;
    }

    /* Desktop sedang: rail tetap di samping, dibuat sedikit lebih ramping. */
    @media(max-width:1450px){
      .kk-wrap,.kk-wrap.theme-bca,.kk-wrap.theme-bri{
        grid-template-columns:minmax(0,1fr) 154px 360px!important;
        gap:12px!important;
      }
      .bk-template-rail-v1517{
        width:154px!important;
        min-width:154px!important;
        max-width:154px!important;
        padding:10px!important;
      }
      .bk-template-rail-v1517 .bk-template-btn-v473{height:64px!important}
      .kk-side,.kk-wrap.theme-bca .kk-side,.kk-wrap.theme-bri .kk-side{
        width:360px!important;min-width:360px!important;max-width:360px!important;
      }
    }

    /* Hanya di layar sempit rail kembali horizontal agar tidak merusak kartu. */
    @media(max-width:1120px){
      .kk-wrap,.kk-wrap.theme-bca,.kk-wrap.theme-bri{
        grid-template-columns:1fr!important;
      }
      .bk-template-rail-v1517{
        position:static!important;
        width:100%!important;
        min-width:0!important;
        max-width:100%!important;
        grid-template-columns:minmax(0,1fr) auto!important;
      }
      .bk-template-rail-v1517 .bk-template-row-v473{
        grid-template-columns:repeat(5,minmax(84px,1fr))!important;
      }
      .kk-side,.kk-wrap.theme-bca .kk-side,.kk-wrap.theme-bri .kk-side{
        position:static!important;width:100%!important;min-width:0!important;max-width:100%!important;max-height:none!important;
      }
    }
  `;
  root.appendChild(wgTheme);

  const $=s=>root.querySelector(s), bgs=data.backgrounds, sets=data.data;
  const themeBgMap={BCA:0,BRI:0};
  /* BACKGROUND BRI KHUSUS: isi URL di bawah nanti saat gambar BRI sudah ada.
     Selama kosong, saat BRI dipilih poster tidak akan memakai background BCA. */
  const BRI_BACKGROUNDS=[{nama:"Background Bukti 1",url:"https://i.imgur.com/WCwxDyc.jpeg"},{nama:"Background Bukti 2",url:"https://i.imgur.com/qLvsQ6v.jpeg"},{nama:"Background Bukti 3",url:"https://i.imgur.com/zSUJjnO.jpeg"},{nama:"Background Bukti 4",url:"https://i.imgur.com/VtFUaAg.jpeg"},{nama:"Background Bukti 5",url:"https://i.imgur.com/JaGMnvp.jpeg"}];
  const USER_ID_POOL=['AFXXXXAN','BIXXXXRA','CAXXXXMI','DOXXXXTA','ELXXXXON','FUXXXXIN','GAXXXXRI','HIXXXXKA','JOXXXXEN','KAXXXXTO','LIXXXXAR','MAXXXXIN','NOXXXXRA','PAXXXXTO','QIXXXXAN','RAXXXXEL','SIXXXXRA','TOXXXXIN','VAXXXXAR','ZIXXXXON'];
  const BRI_AVATAR_INITIALS=['FA','AD','TD','RH','TS','SA','CE','AT','AI','MF'];
  const WINNER_NAME_POOL=[
    'Rizky Pratama','Dimas Saputra','Fajar Ramadhan','Aldi Firmansyah','Rian Maulana',
    'Dedi Kurniawan','Arif Setiawan','Reza Firmansyah','Rudi Hartono','Yoga Pratama',
    'Sandi Wijaya','Ilham Ramadhan','Bayu Saputra','Andre Kurniawan','Rio Mahendra',
    'Deni Setiawan','Farhan Akbar','Bagas Pratama','Kevin Maulana','Andika Saputra'
  ];
  /* V15.18 WINNER SHUFFLE BAG
     - 20 nama harus habis 1 putaran sebelum nama yang sama boleh muncul lagi.
     - State disimpan di sessionStorage supaya pindah menu/refresh tidak mereset putaran.
     - Sensor ***XXX yang sama dihindari muncul berturut-turut jika masih ada pilihan lain.
  */
  const WINNER_BAG_KEY='joni_bukti_winner_bag_v1518';
  const WINNER_LAST_KEY='joni_bukti_winner_last_v1518';

  function winnerMask3(name){
    const clean=String(name||'').toUpperCase().replace(/[^A-Z0-9]/g,'');
    return '***'+clean.slice(-3);
  }

  function shuffleWinnerNames(list){
    const a=list.slice();
    for(let i=a.length-1;i>0;i--){
      const j=Math.floor(Math.random()*(i+1));
      [a[i],a[j]]=[a[j],a[i]];
    }
    return a;
  }

  function readWinnerBag(){
    try{
      const raw=sessionStorage.getItem(WINNER_BAG_KEY);
      const parsed=raw?JSON.parse(raw):null;
      if(Array.isArray(parsed)){
        const valid=parsed.filter(name=>WINNER_NAME_POOL.includes(name));
        if(valid.length===parsed.length) return valid;
      }
    }catch(_){}
    return [];
  }

  function saveWinnerBag(bag){
    try{sessionStorage.setItem(WINNER_BAG_KEY,JSON.stringify(bag));}catch(_){}
  }

  function readLastWinnerName(){
    try{return sessionStorage.getItem(WINNER_LAST_KEY)||'';}catch(_){return '';}
  }

  function saveLastWinnerName(name){
    try{sessionStorage.setItem(WINNER_LAST_KEY,name);}catch(_){}
  }

  function refillWinnerBag(lastName=''){
    const bag=shuffleWinnerNames(WINNER_NAME_POOL);
    const lastMask=winnerMask3(lastName);

    // Jangan biarkan item pertama putaran baru mempunyai sensor sama dengan item terakhir putaran lama.
    if(bag.length>1 && lastMask && winnerMask3(bag[0])===lastMask){
      const swapIndex=bag.findIndex((name,index)=>index>0 && winnerMask3(name)!==lastMask);
      if(swapIndex>0) [bag[0],bag[swapIndex]]=[bag[swapIndex],bag[0]];
    }
    return bag;
  }

  function pickWinnerName(){
    const lastName=readLastWinnerName();
    const lastMask=winnerMask3(lastName);
    let bag=readWinnerBag();

    if(!bag.length) bag=refillWinnerBag(lastName);

    // Kalau kandidat terdepan memiliki sensor sama dengan output sebelumnya,
    // tukar dengan kandidat berikut yang sensornya berbeda.
    if(bag.length>1 && lastMask && winnerMask3(bag[0])===lastMask){
      const swapIndex=bag.findIndex((name,index)=>index>0 && winnerMask3(name)!==lastMask);
      if(swapIndex>0) [bag[0],bag[swapIndex]]=[bag[swapIndex],bag[0]];
    }

    const picked=bag.shift()||WINNER_NAME_POOL[0]||'Rizky Pratama';
    saveWinnerBag(bag);
    saveLastWinnerName(picked);
    return picked;
  }


  /* =========================================================
     V15.11 FORCE POSITION DASHBOARD
     Dibuat terpisah dari guard layout lama agar editor posisi
     selalu bisa dibangun walau dashboard sudah pernah direstruktur.
     ========================================================= */
  function ensurePositionDashboardV1511(){
    const side=$('.kk-side');
    if(!side) return false;

    // Kalau panel V15.11 sudah ada, pastikan tetap terlihat.
    const existing=side.querySelector('.bk-position-dashboard-v1511');
    if(existing){
      existing.style.display='block';
      return true;
    }

    // Ambil SEMUA kontrol posisi, termasuk jika sudah dipindah oleh versi sebelumnya.
    const posBoxes=Array.from(side.querySelectorAll('.kk-pos-box'));
    if(!posBoxes.length) return false;

    const oldSections=Array.from(side.querySelectorAll('.bk-position-section-v484'));
    const sec=document.createElement('section');
    sec.className='bk-section-v473 bk-position-dashboard-v1511';
    sec.innerHTML=`
      <div class="bk-position-head-v1511">
        <div>
          <div class="bk-position-version-v1511">POSITION EDITOR • V15.29</div>
          <div class="bk-section-title-v473">⚙ ATUR POSISI ELEMEN KARTU</div>
        </div>
        <button type="button" class="bk-position-toggle-v1511">SEMBUNYIKAN</button>
      </div>
      <div class="bk-position-body-v1511">
        <div class="bk-position-help-v1511">X = KIRI / KANAN &nbsp; • &nbsp; Y = ATAS / BAWAH</div>
      </div>`;

    const body=sec.querySelector('.bk-position-body-v1511');
    const toggle=sec.querySelector('.bk-position-toggle-v1511');

    posBoxes.forEach(box=>{
      box.style.display='block';
      box.hidden=false;
      body.appendChild(box);
    });

    const btnGrid=side.querySelector('.kk-btn-grid');
    if(btnGrid) body.appendChild(btnGrid);
    const code=side.querySelector('.kk-code');
    if(code) body.appendChild(code);

    // Posisi absolut: langsung di bawah heading panel kanan.
    const heading=side.querySelector('h2');
    if(heading && heading.nextSibling) side.insertBefore(sec,heading.nextSibling);
    else if(heading) side.appendChild(sec);
    else side.insertBefore(sec,side.firstChild);

    // Hapus container editor versi lama setelah semua kontrol berhasil dipindah.
    oldSections.forEach(old=>{
      if(old!==sec && old.parentNode) old.remove();
    });

    const KEY='joni_bukti_position_dashboard_hidden_v1511';
    function setHidden(hidden,persist=true){
      sec.classList.toggle('is-collapsed-v1511',!!hidden);
      toggle.textContent=hidden?'TAMPILKAN':'SEMBUNYIKAN';
      toggle.setAttribute('aria-expanded',hidden?'false':'true');
      if(persist){
        try{localStorage.setItem(KEY,hidden?'1':'0')}catch(_){}
      }
    }

    // V16.28 — Position Editor selalu mulai dalam keadaan tersembunyi saat halaman dibuka.
    // User tetap dapat membukanya lewat tombol TAMPILKAN.
    setHidden(true,false);
    toggle.addEventListener('click',()=>setHidden(!sec.classList.contains('is-collapsed-v1511')));

    return true;
  }


  function setupBlackGoldV473(){
    const wrap=$('.kk-wrap'),stage=$('.kk-stage'),side=$('.kk-side');
    if(!wrap||!stage||!side||wrap.dataset.v473==='1') return;
    wrap.dataset.v473='1';

    const head=document.createElement('div');
    head.className='bk-head-v473';
    head.innerHTML='<div class="bk-head-left-v473"><div class="bk-head-icon-v473"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"/><path d="M8 7h6M8 11h6M8 15h3"/><path d="m16 14 4 4m0-4-4 4"/></svg></div><div><div class="bk-head-kicker-v473">GENERATOR</div><div class="bk-head-title-v473">BUKTI KEMENANGAN</div><div class="bk-head-desc-v473">Buat bukti transfer kemenangan dengan cepat dan profesional</div></div></div>';
    root.insertBefore(head,wrap);

    const left=document.createElement('div');
    left.className='bk-left-v473';
    wrap.insertBefore(left,stage);
    left.appendChild(stage);

    const tools=document.createElement('div');
    tools.className='bk-tools-v473';
    tools.innerHTML='<div><div class="bk-tools-title-v473">TEMPLATE</div><div class="bk-template-row-v473"></div></div><div><div class="bk-tools-title-v473">ZOOM</div><div class="bk-zoom-row-v473"><button type="button" class="bk-zoom-btn-v473" data-delta="-10">−</button><span class="bk-zoom-value-v473">100%</span><button type="button" class="bk-zoom-btn-v473" data-delta="10">＋</button><button type="button" class="bk-fit-btn-v473">⛶ &nbsp; Fit to Screen</button></div></div>';
    tools.classList.add('bk-template-rail-v1517');
    wrap.insertBefore(tools,side);

    side.querySelector('h2').innerHTML='PENGATURAN BUKTI TRANSFER';

    const groups=Array.from(side.querySelectorAll(':scope > .kk-group'));
    if(groups.length){
      const sec1=document.createElement('section');sec1.className='bk-section-v473';
      sec1.innerHTML='<div class="bk-section-title-v473">DATA TRANSAKSI</div><div class="bk-fields-grid-v473"></div>';
      groups.slice(0,4).forEach(el=>sec1.lastElementChild.appendChild(el));
      side.insertBefore(sec1,side.querySelector('.kk-btn'));

      const sec2=document.createElement('section');sec2.className='bk-section-v473';
      sec2.innerHTML='<div class="bk-section-title-v473">DATA PENERIMA</div><div class="bk-fields-grid-v473"></div>';
      groups.slice(4,8).forEach(el=>sec2.lastElementChild.appendChild(el));
      side.insertBefore(sec2,side.querySelector('.kk-btn'));
    }

    const actionIds=['generateBtn','copyTextBtn','downloadPngBtn','copyImageBtn'];
    const actionButtons=actionIds.map(id=>$('#'+id)).filter(Boolean);
    if(actionButtons.length){
      const sec=document.createElement('section');sec.className='bk-section-v473';
      sec.innerHTML='<div class="bk-section-title-v473">AKSI & UNDUH</div><div class="bk-actions-v473"></div>';
      actionButtons.forEach(btn=>sec.lastElementChild.appendChild(btn));
      side.insertBefore(sec,side.querySelector('.kk-pos-box'));
    }

    const posBoxes=Array.from(side.querySelectorAll(':scope > .kk-pos-box'));
    if(posBoxes.length){
      const POSITION_DRAWER_KEY='joni_bukti_position_drawer_hidden_v1510';
      const sec=document.createElement('section');
      sec.className='bk-section-v473 bk-position-section-v484';
      sec.innerHTML='<div class="bk-position-head-v159"><div class="bk-section-title-v473">⚙ ATUR POSISI ELEMEN KARTU</div><button type="button" class="bk-position-toggle-v159">SEMBUNYIKAN</button></div><div class="bk-position-body-v159"><div class="bk-position-help-v159">GESER X = KIRI / KANAN &nbsp; • &nbsp; Y = ATAS / BAWAH</div></div>';
      const body=sec.querySelector('.bk-position-body-v159');
      const toggle=sec.querySelector('.bk-position-toggle-v159');
      posBoxes.forEach(box=>body.appendChild(box));
      const btnGrid=side.querySelector(':scope > .kk-btn-grid');if(btnGrid)body.appendChild(btnGrid);
      const code=side.querySelector(':scope > .kk-code');if(code)body.appendChild(code);

      function setPositionDrawerHidden(hidden,persist=true){
        sec.classList.toggle('is-collapsed-v159',!!hidden);
        toggle.textContent=hidden?'TAMPILKAN':'SEMBUNYIKAN';
        toggle.setAttribute('aria-expanded',hidden?'false':'true');
        if(persist){
          try{localStorage.setItem(POSITION_DRAWER_KEY,hidden?'1':'0')}catch(e){}
        }
      }

      let drawerHidden=false;
      try{drawerHidden=localStorage.getItem(POSITION_DRAWER_KEY)==='1'}catch(e){}
      setPositionDrawerHidden(drawerHidden,false);
      toggle.addEventListener('click',()=>setPositionDrawerHidden(!sec.classList.contains('is-collapsed-v159')));

      const firstDashboardSection=side.querySelector(':scope > .bk-section-v473');
      if(firstDashboardSection) side.insertBefore(sec,firstDashboardSection);
      else side.appendChild(sec);
    }

    let zoom=100;
    const poster=$('.kk-poster'),zoomValue=tools.querySelector('.bk-zoom-value-v473');
    function applyZoom(value){
      zoom=Math.max(60,Math.min(130,value));
      zoomValue.textContent=zoom+'%';
      if(poster){
        poster.style.transform='scale('+(zoom/100)+')';
        poster.style.transformOrigin='top center';
        stage.style.paddingBottom=Math.max(16,poster.offsetHeight*(zoom/100)-poster.offsetHeight+16)+'px';
      }
    }
    tools.querySelectorAll('.bk-zoom-btn-v473').forEach(btn=>btn.addEventListener('click',()=>applyZoom(zoom+Number(btn.dataset.delta||0))));
    tools.querySelector('.bk-fit-btn-v473').addEventListener('click',()=>applyZoom(100));

    function renderTemplates(){
      const row=tools.querySelector('.bk-template-row-v473');
      const bank=String($('#catSelect').value||'BCA').toUpperCase();
      const list=activeBackgrounds(bank);
      row.innerHTML='';
      row.style.display='grid';
      row.style.gridTemplateColumns='repeat('+Math.max(5,list.length)+', minmax(0, 1fr))';
      row.style.overflow='visible';
      list.forEach((item,index)=>{
        const btn=document.createElement('button');
        btn.type='button';
        btn.className='bk-template-btn-v473'+(String($('#bgSelect').value)===String(index)?' active':'');
        btn.style.backgroundImage='url("'+String(item.url||'').replace(/"/g,'\\"')+'")';
        btn.title=item.nama||('Template '+(index+1));
        btn.addEventListener('click',()=>{
          $('#bgSelect').value=String(index);
          $('#bgSelect').dispatchEvent(new Event('change',{bubbles:true}));
          row.querySelectorAll('button').forEach(x=>x.classList.remove('active'));
          btn.classList.add('active');
        });
        row.appendChild(btn);
      });
    }
    $('#catSelect').addEventListener('change',()=>setTimeout(renderTemplates,0));
    $('#bgSelect').addEventListener('change',()=>setTimeout(renderTemplates,0));
    renderTemplates();
  }

  /* ============================================================
     PRESET POSISI & UKURAN KARTU PER BACKGROUND
     Background Bukti 1 sudah disesuaikan agar kartu kemenangan
     masuk ke bingkai background baru yang bos kirim.
     ============================================================ */
  const BACKGROUND_CARD_PRESETS={
    default:{left:'50%',top:'215px',width:'314px',height:'458px'},
    0:{left:'73%',top:'108px',width:'224px',height:'326px'}
  };

  function applyBackgroundCardPreset(bgIndex){
    const poster=$('#poster');
    const p=BACKGROUND_CARD_PRESETS[Number(bgIndex)] || BACKGROUND_CARD_PRESETS.default;
    poster.style.setProperty('--card-left',p.left);
    poster.style.setProperty('--card-top',p.top);
    poster.style.setProperty('--card-width',p.width);
    poster.style.setProperty('--card-height',p.height);
  }

  /* ============================================================
     LINK DESAIN KARTU — UBAH LANGSUNG DI SINI SAAT EDIT index.html
     BCA = desain kartu khusus saat kategori dashboard memilih BCA
     BRI = desain kartu khusus saat kategori dashboard memilih BRI
     Isi dengan link gambar langsung (.png / .jpg / .webp).
     Kosongkan "" untuk kembali ke desain kartu bawaan CSS.
  ============================================================ */
  /* ===============================
     EDIT LINK DESAIN KARTU DI SINI
     Ganti link BCA / BRI sesuai desain kartu terbaru bos.
     Contoh:
     BCA:"https://i.imgur.com/desain-bca-terbaru.png",
     BRI:"https://i.imgur.com/desain-bri-terbaru.png"
     Link bawaan saat ini memakai file SVG di folder assets/images.
     Jika ingin pakai desain baru, cukup ganti link BCA atau BRI di bawah.
     =============================== */
  /* Desain kartu PNG tidak dipakai lagi. Semua teks sekarang langsung berada di background. */
  const CARD_CANVAS_URLS={BCA:"",BRI:""};

  /* ============================================================
     KUNCI POSISI CSS KARTU BCA
     Nilai ini dipakai otomatis setiap kategori BCA dipilih.
     ============================================================ */
  const CARD_POSITION_PRESETS={
    BCA:{dateX:148,dateY:99,timeX:210,timeY:99,nameX:288,nameY:101,accX:288,accY:123,nominalTopX:174,nominalTopY:83,userX:167,userY:2,statusX:0,statusY:0,totalX:0,totalY:0,avatarX:0,avatarY:0,sensorX:0,sensorY:0,sourceX:0,sourceY:0,bankX:0,bankY:0,targetLabelX:0,targetLabelY:0,targetAvatarX:0,targetAvatarY:0,targetSensor1X:0,targetSensor1Y:0,targetBankX:0,targetBankY:0,detailX:0,detailY:0,refX:0,refY:0,nominalX:167,nominalY:79,winnerX:174,winnerY:35},
    // Nilai BRI berdiri sendiri. Geser slider saat BRI aktif tidak akan mengubah BCA.
    BRI:{dateX:192,dateY:-3,timeX:200,timeY:-38,nameX:65,nameY:36,accX:0,accY:0,nominalTopX:191,nominalTopY:4,userX:-189,userY:24,statusX:190,statusY:57,totalX:193,totalY:13,avatarX:30,avatarY:14,sensorX:78,sensorY:14,sourceX:79,sourceY:37,bankX:64,bankY:30,targetLabelX:80,targetLabelY:46,targetAvatarX:74,targetAvatarY:39,targetSensor1X:39,targetSensor1Y:68,targetBankX:83,targetBankY:28,detailX:87,detailY:3,refX:64,refY:-176,nominalX:-171,nominalY:90,winnerX:-178,winnerY:64}
  };

  let current=null;

  /* V15.26 — CURRENT BUKTI STATE
     Refresh / pindah menu tidak boleh dianggap sebagai Generate Data.
     Data terakhir disimpan selama tab browser masih hidup.
  */
  const BUKTI_CURRENT_STATE_KEY='joni_bukti_current_state_v1526';

  function readBuktiCurrentState(){
    try{
      const raw=sessionStorage.getItem(BUKTI_CURRENT_STATE_KEY);
      if(!raw) return null;
      const saved=JSON.parse(raw);
      if(!saved || typeof saved!=='object' || !saved.current) return null;
      const bank=String(saved.bank||'BCA').toUpperCase();
      if(!sets[bank]) return null;
      return saved;
    }catch(_){
      return null;
    }
  }

  function saveBuktiCurrentState(){
    if(!current) return;
    try{
      const bank=String($('#catSelect')?.value||'BCA').toUpperCase();
      const payload={
        version:1526,
        bank,
        date:$('#dateInput')?.value||'',
        time:$('#timeInput')?.value||'',
        bgMap:{BCA:Number(themeBgMap.BCA)||0,BRI:Number(themeBgMap.BRI)||0},
        current:{
          nama:String(current.nama||''),
          rekening:String(current.rekening||''),
          userId:String(current.userId||''),
          briAvatar:String(current.briAvatar||''),
          nominal:String(current.nominal||'')
        }
      };
      sessionStorage.setItem(BUKTI_CURRENT_STATE_KEY,JSON.stringify(payload));
    }catch(_){ }
  }

  function restoreBuktiCurrentState(){
    const saved=readBuktiCurrentState();
    if(!saved) return false;

    const bank=String(saved.bank||'BCA').toUpperCase();
    if(saved.bgMap && typeof saved.bgMap==='object'){
      themeBgMap.BCA=Number(saved.bgMap.BCA)||0;
      themeBgMap.BRI=Number(saved.bgMap.BRI)||0;
    }

    $('#catSelect').value=bank;
    if(saved.date) $('#dateInput').value=String(saved.date);
    if(saved.time) $('#timeInput').value=String(saved.time).slice(0,8);

    current={
      nama:String(saved.current.nama||''),
      rekening:String(saved.current.rekening||''),
      userId:String(saved.current.userId||''),
      briAvatar:String(saved.current.briAvatar||''),
      nominal:String(saved.current.nominal||'')
    };

    applyTheme(bank);
    syncBackgroundByCategory(bank);
    applyCardCanvasByCategory(bank);
    applyCardPositionPreset(bank);
    render();
    return true;
  }

  const fmt=n=>Number(String(n||'').replace(/\D/g,'').replace(/00$/,'')||0).toLocaleString('id-ID');
  const fmtBri=n=>Number(String(n||'').replace(/\D/g,'').replace(/00$/,'')||0).toLocaleString('en-US');
  const maskName=n=>{const a=String(n||'').trim().toUpperCase().replace(/[^A-Z0-9]/g,'');return a?'***'+a.slice(-3):'***'};
  const maskAcc=n=>{const a=String(n||'').replace(/\D/g,'');return a?'***'+a.slice(-3):'***000'};

  function maskNameBri(n){
    const parts=String(n||'').trim().toUpperCase().split(/\s+/).filter(Boolean);
    const first=parts[0]||'';
    if(!first) return '---';
    return first.slice(0,3);
  }
  function maskNameBriBlurWidth(n){
    const parts=String(n||'').trim().toUpperCase().split(/\s+/).filter(Boolean);
    const first=parts[0]||'';
    const rest=Math.max(0, first.length-3);
    return Math.max(38, rest*12);
  }
  function maskAccBri(n){
    const digits=String(n||'').replace(/\D/g,'');
    if(!digits) return '••••••';
    return '•'.repeat(Math.max(6, digits.length));
  }
  function briAvatarFromName(n){
    const parts=String(n||'').trim().toUpperCase().split(/\s+/).filter(Boolean);
    if(parts.length>=2){
      return ((parts[0][0]||'') + (parts[1][0]||'')).slice(0,2);
    }
    const one=(parts[0]||'').replace(/[^A-Z]/g,'');
    if(!one) return 'FA';
    return (one.slice(0,2)).padEnd(2, one[0]||'A');
  }
  function dt(){const v=$('#dateInput').value,t=$('#timeInput').value||'00:00:00';if(!v)return '';const [y,m,d]=v.split('-'),mm=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];return Number(d)+' '+mm[Number(m)-1]+' '+y+' • '+t}
  function setPosterVar(name,val){$('#poster').style.setProperty(name,val)}
  function cssText(){const bank=($('#catSelect').value||'BCA').toUpperCase();return '/* POSISI '+bank+' — terpisah dari bank lain */\n#poster{\n--date-x:'+$('#dateX').value+'px;\n--date-y:'+$('#dateY').value+'px;\n--time-x:'+$('#timeX').value+'px;\n--time-y:'+$('#timeY').value+'px;\n--name-x:'+$('#nameX').value+'px;\n--name-y:'+$('#nameY').value+'px;\n--acc-x:'+$('#accX').value+'px;\n--acc-y:'+$('#accY').value+'px;\n--nominal-top-x:'+$('#nominalTopX').value+'px;\n--nominal-top-y:'+$('#nominalTopY').value+'px;\n--user-x:'+$('#userX').value+'px;\n--user-y:'+$('#userY').value+'px;\n--status-x:'+$('#statusX').value+'px;\n--status-y:'+$('#statusY').value+'px;\n--total-x:'+$('#totalX').value+'px;\n--total-y:'+$('#totalY').value+'px;\n--avatar-x:'+$('#avatarX').value+'px;\n--avatar-y:'+$('#avatarY').value+'px;\n--sensor-x:'+$('#sensorX').value+'px;\n--sensor-y:'+$('#sensorY').value+'px;\n--source-x:'+$('#sourceX').value+'px;\n--source-y:'+$('#sourceY').value+'px;\n--bank-x:'+$('#bankX').value+'px;\n--bank-y:'+$('#bankY').value+'px;\n--target-label-x:'+$('#targetLabelX').value+'px;\n--target-label-y:'+$('#targetLabelY').value+'px;\n--target-avatar-x:'+$('#targetAvatarX').value+'px;\n--target-avatar-y:'+$('#targetAvatarY').value+'px;\n--target-sensor1-x:'+$('#targetSensor1X').value+'px;\n--target-sensor1-y:'+$('#targetSensor1Y').value+'px;\n--target-bank-x:'+$('#targetBankX').value+'px;\n--target-bank-y:'+$('#targetBankY').value+'px;\n--detail-x:'+$('#detailX').value+'px;\n--detail-y:'+$('#detailY').value+'px;\n--ref-x:'+$('#refX').value+'px;\n--ref-y:'+$('#refY').value+'px;\n--nominal-x:'+$('#nominalX').value+'px;\n--nominal-y:'+$('#nominalY').value+'px;\n--winner-x:'+$('#winnerX').value+'px;\n--winner-y:'+$('#winnerY').value+'px;\n}'}
  function refreshCssCode(){$('#cssCode').textContent=cssText()}
  function bindRange(id,varName){const input=$('#'+id), out=$('#'+id+'Val'); const run=()=>{setPosterVar(varName,input.value+'px'); out.textContent=input.value; refreshCssCode();}; input.addEventListener('input',run); run();}
  function applyCardPositionPreset(cat){
    const bank=(cat||'BCA').toUpperCase();
    const p=CARD_POSITION_PRESETS[bank]||CARD_POSITION_PRESETS.BRI;
    const map={dateX:'--date-x',dateY:'--date-y',timeX:'--time-x',timeY:'--time-y',nameX:'--name-x',nameY:'--name-y',accX:'--acc-x',accY:'--acc-y',nominalTopX:'--nominal-top-x',nominalTopY:'--nominal-top-y',userX:'--user-x',userY:'--user-y',statusX:'--status-x',statusY:'--status-y',totalX:'--total-x',totalY:'--total-y',avatarX:'--avatar-x',avatarY:'--avatar-y',sensorX:'--sensor-x',sensorY:'--sensor-y',sourceX:'--source-x',sourceY:'--source-y',bankX:'--bank-x',bankY:'--bank-y',targetLabelX:'--target-label-x',targetLabelY:'--target-label-y',targetAvatarX:'--target-avatar-x',targetAvatarY:'--target-avatar-y',targetSensor1X:'--target-sensor1-x',targetSensor1Y:'--target-sensor1-y',targetBankX:'--target-bank-x',targetBankY:'--target-bank-y',detailX:'--detail-x',detailY:'--detail-y',refX:'--ref-x',refY:'--ref-y',nominalX:'--nominal-x',nominalY:'--nominal-y',winnerX:'--winner-x',winnerY:'--winner-y'};
    Object.keys(map).forEach(id=>{
      const value=Number(p[id]||0);
      $('#'+id).value=String(value);
      $('#'+id+'Val').textContent=String(value);
      setPosterVar(map[id],value+'px');
    });

    // V16.27 — tanggal dan waktu BCA berbagi baseline Y yang sama; X/Y tetap editable.
    ['dateX','dateY','timeX','timeY'].forEach(id=>{
      const input=$('#'+id);
      if(!input) return;
      input.disabled=false;
      input.removeAttribute('aria-disabled');
      input.title='Posisi dapat diatur kembali kapan pun';
    });
    refreshCssCode();
  }
  function applyTheme(cat){
    const poster=$('#poster'), wrap=root.querySelector('.kk-wrap'), badge=$('#bankBadge');
    const type=(cat||'BCA').toUpperCase();
    poster.classList.remove('theme-bca','theme-bri');
    wrap.classList.remove('theme-bca','theme-bri');
    if(type==='BRI'){
      poster.classList.add('theme-bri'); wrap.classList.add('theme-bri'); badge.textContent='BRI EDITION';
    }else{
      poster.classList.add('theme-bca'); wrap.classList.add('theme-bca'); badge.textContent='BCA EDITION';
    }
  }
  function applyBg(url){
    const bg=$('#bg');
    if(!url){ bg.style.backgroundImage='none'; return; }
    bg.style.backgroundImage='url("'+url.replace(/"/g,'\\"')+'")';
  }
  function activeBackgrounds(cat){ return String(cat||'BCA').toUpperCase()==='BRI' ? BRI_BACKGROUNDS : bgs; }
  function fillBackgroundOptions(cat){
    const list=activeBackgrounds(cat);
    const select=$('#bgSelect');
    if(!list.length){
      select.innerHTML='<option value="">Belum ada background BRI</option>';
      select.value='';
      select.disabled=true;
      return;
    }
    select.disabled=false;
    select.innerHTML=list.map((x,i)=>'<option value="'+i+'">'+x.nama+'</option>').join('');
    const saved=Number(themeBgMap[cat]);
    select.value=String(Math.max(0,Math.min(saved,list.length-1)));
  }
  function syncBackgroundByCategory(cat){
    const bank=String(cat||'BCA').toUpperCase();
    const list=activeBackgrounds(bank);
    fillBackgroundOptions(bank);
    if(!list.length){
      applyBg('');
      return;
    }
    const idx=Math.max(0,Math.min(Number(themeBgMap[bank])||0,list.length-1));
    themeBgMap[bank]=idx;
    $('#bgSelect').value=String(idx);
    applyBg(list[idx].url);
    applyBackgroundCardPreset(idx);
  }
  // Background-only mode: tidak ada gambar kartu terpisah.
  function applyCardCanvasByCategory(){
    const card=$('#poster').querySelector('.kk-card');
    if(card) card.style.display='none';
  }
  function render(){
    if(!current)return;
    const activeBank=($('#catSelect').value||'BCA').toUpperCase();
    const safeName=maskName(current.nama);
    const safeAcc=activeBank==='BRI' ? maskAccBri(current.rekening) : maskAcc(current.rekening);
    const amount=fmt(current.nominal);
    const fullDate=dt();
    const onlyDate=fullDate.split(' • ')[0]||'';
    const onlyTime=fullDate.split(' • ')[1]||'';

    $('#nameInput').value=safeName;
    $('#rekInput').value=safeAcc;
    $('#userIdInput').value=String(current.userId||'').toUpperCase();
    $('#amountInput').value=amount+',00';
    $('#namePreview').textContent=safeName;
    $('#rekPreview').textContent=safeAcc;
    $('#amountBottom').textContent=amount;
    $('#datePreview').textContent=fullDate;

    const briDateText=(()=>{
      const raw=$('#dateInput').value||'';
      const time=($('#timeInput').value||'00:00:00').slice(0,8);
      if(!raw) return '';
      const [year,month,day]=raw.split('-');
      const shortMonths=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
      return String(day||'').padStart(2,'0')+' '+shortMonths[Math.max(0,Number(month||1)-1)]+' '+year+' '+time+' WIB';
    })();

    $('#directDate').textContent=activeBank==='BRI' ? briDateText : onlyDate;
    $('#directTime').textContent=activeBank==='BRI' ? '' : onlyTime;
    if(activeBank==='BRI'){
      const frontName = maskNameBri(current.nama);
      const blurWidth = maskNameBriBlurWidth(current.nama);
      $('#directName').innerHTML='<span class="bri-name-front">'+frontName+'</span><span class="bri-name-mask" style="width:'+blurWidth+'px"></span>';
    }else{
      $('#directName').textContent=safeName;
    }
    $('#directAcc').textContent=activeBank==='BRI' ? '' : safeAcc;
    $('#directNominalTop').textContent=activeBank==='BRI' ? 'Rp'+fmtBri(current.nominal) : 'IDR '+amount+',00';
    $('#directUserId').textContent='USER ID : '+String(current.userId||'').toUpperCase();

    $('#directBriAvatar').textContent=activeBank==='BRI' ? String(current.briAvatar||'') : '';
    $('#directBriSource').textContent='Sumber Dana';
    $('#directBriBank').textContent='BANK BRI';

    const targetAvatar = activeBank==='BRI' ? briAvatarFromName(current.nama) : '';
    $('#directBriTargetLabel').textContent='Tujuan';
    $('#directBriTargetAvatar').textContent=targetAvatar;
    $('#directBriTargetBank').textContent='BANK BRI';

    $('#directNominal').textContent='Rp'+amount+',-';
  }
  function randomNominal(){
    // Acak nominal bulat per Rp1.000.000: Rp45.000.000 sampai Rp99.000.000.
    const juta=45+Math.floor(Math.random()*55);
    return juta+',000,000,00';
  }
  function gen(){
    const cat=$('#catSelect').value;
    applyTheme(cat);
    applyCardCanvasByCategory(cat);
    const l=sets[cat]||[];
    const picked=l[Math.floor(Math.random()*l.length)]||null;
    const randomUserId=USER_ID_POOL[Math.floor(Math.random()*USER_ID_POOL.length)]||'AFXXXXAN';
    const randomBriAvatar=BRI_AVATAR_INITIALS[Math.floor(Math.random()*BRI_AVATAR_INITIALS.length)]||'FA';
    current=picked ? {...picked,nama:pickWinnerName(),userId:randomUserId,briAvatar:randomBriAvatar,nominal:randomNominal()} : null;
    render();
    saveBuktiCurrentState();
  }
  function resetPos(){applyCardPositionPreset($('#catSelect').value)}

  $('#catSelect').innerHTML=Object.keys(sets).map(x=>'<option>'+x+'</option>').join('');
  fillBackgroundOptions('BCA');
  const now=new Date(),pad=n=>String(n).padStart(2,'0');
  $('#dateInput').value=now.getFullYear()+'-'+pad(now.getMonth()+1)+'-'+pad(now.getDate());
  $('#timeInput').value=pad(now.getHours())+':'+pad(now.getMinutes())+':'+pad(now.getSeconds());
  applyTheme('BCA'); syncBackgroundByCategory('BCA'); applyCardCanvasByCategory('BCA');
  setupBlackGoldV473();
  ensurePositionDashboardV1511();
  try{requestAnimationFrame(()=>ensurePositionDashboardV1511());}catch(_){setTimeout(()=>ensurePositionDashboardV1511(),0);}
  bindRange('dateX','--date-x'); bindRange('dateY','--date-y');
  bindRange('timeX','--time-x'); bindRange('timeY','--time-y');
  bindRange('nameX','--name-x'); bindRange('nameY','--name-y');
  bindRange('accX','--acc-x'); bindRange('accY','--acc-y');
  bindRange('nominalTopX','--nominal-top-x'); bindRange('nominalTopY','--nominal-top-y');
  bindRange('userX','--user-x'); bindRange('userY','--user-y');
  bindRange('statusX','--status-x'); bindRange('statusY','--status-y');
  bindRange('totalX','--total-x'); bindRange('totalY','--total-y');
  bindRange('avatarX','--avatar-x'); bindRange('avatarY','--avatar-y');
  bindRange('sensorX','--sensor-x'); bindRange('sensorY','--sensor-y');
  bindRange('sourceX','--source-x'); bindRange('sourceY','--source-y');
  bindRange('bankX','--bank-x'); bindRange('bankY','--bank-y');
  bindRange('targetLabelX','--target-label-x'); bindRange('targetLabelY','--target-label-y');
  bindRange('targetAvatarX','--target-avatar-x'); bindRange('targetAvatarY','--target-avatar-y');
  bindRange('targetSensor1X','--target-sensor1-x'); bindRange('targetSensor1Y','--target-sensor1-y');
  bindRange('targetBankX','--target-bank-x'); bindRange('targetBankY','--target-bank-y');
  bindRange('detailX','--detail-x'); bindRange('detailY','--detail-y');
  bindRange('refX','--ref-x'); bindRange('refY','--ref-y');
  bindRange('nominalX','--nominal-x'); bindRange('nominalY','--nominal-y');
  bindRange('winnerX','--winner-x'); bindRange('winnerY','--winner-y');
  applyCardPositionPreset('BCA');
  applyBackgroundCardPreset(themeBgMap.BCA);
  // PENTING: refresh / kembali ke menu Bukti memulihkan data terakhir.
  // Generate otomatis hanya dilakukan jika tab ini belum punya state sama sekali.
  if(!restoreBuktiCurrentState()) gen();

  async function loadHtml2Canvas(){
    if(window.html2canvas) return window.html2canvas;
    if(window.__kkHtml2CanvasPromise) return window.__kkHtml2CanvasPromise;
    window.__kkHtml2CanvasPromise=new Promise((resolve,reject)=>{
      const s=document.createElement('script');
      s.src='https://cdn.jsdelivr.net/npm/html2canvas@1.4.1/dist/html2canvas.min.js';
      s.async=true;
      s.onload=()=>window.html2canvas ? resolve(window.html2canvas) : reject(new Error('html2canvas gagal dimuat'));
      s.onerror=()=>reject(new Error('Tidak dapat memuat library PNG'));
      document.head.appendChild(s);
    });
    return window.__kkHtml2CanvasPromise;
  }
  async function loadHtmlToImage(){
    if(window.htmlToImage) return window.htmlToImage;
    if(window.__kkHtmlToImagePromise) return window.__kkHtmlToImagePromise;
    window.__kkHtmlToImagePromise=new Promise((resolve,reject)=>{
      const s=document.createElement('script');
      s.src='https://cdn.jsdelivr.net/npm/html-to-image@1.11.11/dist/html-to-image.js';
      s.async=true;
      s.onload=()=>window.htmlToImage ? resolve(window.htmlToImage) : reject(new Error('html-to-image gagal dimuat'));
      s.onerror=()=>reject(new Error('Tidak dapat memuat library export PNG'));
      document.head.appendChild(s);
    });
    return window.__kkHtmlToImagePromise;
  }

  async function renderPosterBlob(){
    render();
    await new Promise(resolve=>requestAnimationFrame(()=>requestAnimationFrame(resolve)));
    const poster=$('#poster');
    const htmlToImage=await loadHtmlToImage();
    return await htmlToImage.toBlob(poster,{
      cacheBust:true,
      pixelRatio:2,
      backgroundColor:null,
      imagePlaceholder:'',
      skipAutoScale:false
    });
  }

  async function downloadPosterPng(){
    const btn=$('#downloadPngBtn');
    const original=btn.textContent;
    try{
      btn.disabled=true;
      btn.textContent='⏳ Membuat PNG...';
      const blob=await renderPosterBlob();
      if(!blob) throw new Error('Blob PNG gagal dibuat');
      const link=document.createElement('a');
      const bank=($('#catSelect').value||'kartu').toLowerCase();
      const stamp=($('#dateInput').value||'').replace(/-/g,'') || 'hasil';
      link.download='kartu-kemenangan-'+bank+'-'+stamp+'.png';
      link.href=URL.createObjectURL(blob);
      document.body.appendChild(link);
      link.click();
      link.remove();
      setTimeout(()=>URL.revokeObjectURL(link.href),1000);
    }catch(err){
      console.error(err);
      alert('Download PNG gagal. Coba refresh halaman sekali lagi lalu ulangi. Jika gambar dari link luar tidak muncul, pastikan link gambarnya bisa dibuka langsung.');
    }finally{
      btn.disabled=false;
      btn.textContent=original;
    }
  }

  async function copyPosterImage(){
    const btn=$('#copyImageBtn');
    if(!navigator.clipboard || !window.ClipboardItem){
      kkToast('Browser belum mendukung copy image.', 'error');
      return;
    }
    const original=btn.textContent;
    try{
      btn.disabled=true;
      btn.textContent='⏳ Copy Image...';
      const blob=await renderPosterBlob();
      if(!blob) throw new Error('Blob PNG gagal dibuat');
      await navigator.clipboard.write([new ClipboardItem({'image/png':blob})]);
      kkToast('Image berhasil disalin.', 'success');
    }catch(err){
      console.error(err);
      kkToast('Copy image gagal. Gunakan Download PNG.', 'error');
    }finally{
      btn.disabled=false;
      btn.textContent=original;
    }
  }

  $('#bgSelect').addEventListener('change',e=>{
    const bank=String($('#catSelect').value||'BCA').toUpperCase();
    const list=activeBackgrounds(bank);
    const idx=Number(e.target.value);
    if(!list.length || !Number.isInteger(idx) || !list[idx]){ applyBg(''); return; }
    themeBgMap[bank]=idx;
    applyBg(list[idx].url);
    applyBackgroundCardPreset(idx);
    saveBuktiCurrentState();
  });
  $('#catSelect').addEventListener('change',e=>{applyCardPositionPreset(e.target.value); applyTheme(e.target.value); syncBackgroundByCategory(e.target.value); applyCardCanvasByCategory(e.target.value); gen()});
  $('#dateInput').addEventListener('input',()=>{render();saveBuktiCurrentState();});
  $('#timeInput').addEventListener('input',()=>{render();saveBuktiCurrentState();});
  $('#generateBtn').addEventListener('click',gen);
  $('#downloadPngBtn').addEventListener('click',downloadPosterPng);
  if($('#copyImageBtn')) $('#copyImageBtn').addEventListener('click',copyPosterImage);
  $('#resetPosBtn').addEventListener('click',resetPos);
  $('#copyCssBtn').addEventListener('click',async()=>{try{await navigator.clipboard.writeText(cssText());kkToast('CSS posisi berhasil disalin.', 'success')}catch(e){kkToast('Gagal menyalin CSS.', 'error')}});
  $('#copyTextBtn').addEventListener('click',async()=>{
    const nominal='Rp'+fmt(current?.nominal||'0');
    const text=[
      '🎉 Selamat kepada pemenang hari ini! 🎉',
      'Hadiah sebesar '+nominal+' telah berhasil diproses.',
      'Terima kasih atas kepercayaan dan partisipasinya.',
      'Semoga menjadi kabar baik dan membawa kebahagiaan ✨'
    ].join('\n');

    try{
      await navigator.clipboard.writeText(text);
      kkToast('Teks berhasil disalin.', 'success');
    }catch(e){
      kkToast('Gagal menyalin teks.', 'error');
    }
  });
})();


};
