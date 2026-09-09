/* KAIZOKUGARI V26 - flat-path isolated lazy page modules
   Matches current GitHub layout:
   /syair-togel.html
   /bukti-kemenangan.html
   /selisih-qris.html
   /kalkulator-bola.html
   /assets/css/<module>.css
   /assets/js/<module>.js
*/
(function(){
  'use strict';
  const modules={
    'syair-togel':{fragment:'syair-togel.html',css:'assets/css/syair-togel.css',js:'assets/js/syair-togel.js',init:'JONI_initSyairLegacy'},
    'bukti-kemenangan':{fragment:'bukti-kemenangan.html',css:'assets/css/bukti-kemenangan.css',js:'assets/js/bukti-kemenangan.js',init:'JONI_initBuktiLegacy'},
    'selisih':{fragment:'selisih-qris.html',css:'assets/css/selisih-qris.css',js:'assets/js/selisih-qris.js',init:'JONI_initQrisLegacy',bodyClass:'page-qris-v440'},
    'kalkulator-bola':{fragment:'kalkulator-bola.html',css:'assets/css/kalkulator-bola.css',js:'assets/js/kalkulator-bola.js',init:'JONI_initBolaLegacy'}
  };
  const promises={};
  const bodyClasses=Object.values(modules).map(x=>x.bodyClass).filter(Boolean);

  function setBodyClass(page){
    bodyClasses.forEach(c=>document.body.classList.remove(c));
    const c=modules[page]?.bodyClass;
    if(c)document.body.classList.add(c);
  }

  function loadCss(url){
    if(document.querySelector(`link[data-joni-module-css="${url}"]`))return Promise.resolve();
    return new Promise((resolve,reject)=>{
      const l=document.createElement('link');
      l.rel='stylesheet';
      l.href=url;
      l.dataset.joniModuleCss=url;
      l.onload=resolve;
      l.onerror=()=>reject(new Error('CSS gagal dimuat: '+url));
      document.head.appendChild(l);
    });
  }

  function loadJs(url){
    if(document.querySelector(`script[data-joni-module-js="${url}"]`))return Promise.resolve();
    return new Promise((resolve,reject)=>{
      const s=document.createElement('script');
      s.src=url;
      s.defer=true;
      s.dataset.joniModuleJs=url;
      s.onload=resolve;
      s.onerror=()=>reject(new Error('JS gagal dimuat: '+url));
      document.body.appendChild(s);
    });
  }

  async function load(page){
    const cfg=modules[page];
    setBodyClass(page);
    if(!cfg)return;

    if(promises[page]){
      await promises[page];
      const fn=window[cfg.init];
      if(typeof fn==='function')fn();
      return;
    }

    promises[page]=(async()=>{
      const host=document.querySelector(`#page-${page} .module-fragment-host`);
      if(!host)throw new Error('Host modul tidak ditemukan: '+page);

      const [resp]=await Promise.all([
        fetch(cfg.fragment,{cache:'no-cache'}),
        loadCss(cfg.css)
      ]);

      if(!resp.ok)throw new Error(`Fragment ${page} gagal dimuat (${resp.status})`);
      host.innerHTML=await resp.text();
      host.dataset.loaded='1';

      await loadJs(cfg.js);
      const fn=window[cfg.init];
      if(typeof fn!=='function')throw new Error('Init modul tidak ditemukan: '+cfg.init);
      fn();
    })().catch(err=>{
      console.error('[KAIZOKUGARI MODULE]',page,err);
      const host=document.querySelector(`#page-${page} .module-fragment-host`);
      if(host)host.innerHTML='<div class="placeholder-box"><b>Modul gagal dimuat.</b><br>Periksa file upload lalu refresh halaman.</div>';
      delete promises[page];
      throw err;
    });

    return promises[page];
  }

  window.JONI_setActiveModulePage=setBodyClass;
  window.JONI_loadPageModule=load;
})();
