/* KAIZOKUGARI V27 - LOGIN SAFE lazy modules
   IMPORTANT: this file does not initialize Firebase and does not run any feature
   until the corresponding page is opened after login. */
(function(){
  'use strict';

  const modules = {
    'syair-togel': {
      fragment: 'pages/modules/syair-togel-v27.html',
      css: 'assets/css/modules/syair-togel-v27.css',
      js: 'assets/js/modules/syair-togel-v27.js',
      init: 'JONI_initSyairLegacy'
    },
    'bukti-kemenangan': {
      fragment: 'pages/modules/bukti-kemenangan-v27.html',
      css: 'assets/css/modules/bukti-kemenangan-v27.css',
      js: 'assets/js/modules/bukti-kemenangan-v27.js',
      init: 'JONI_initBuktiLegacy'
    },
    'selisih': {
      fragment: 'pages/modules/selisih-qris-v27.html',
      css: 'assets/css/modules/selisih-qris-v27.css',
      js: 'assets/js/modules/selisih-qris-v27.js',
      init: 'JONI_initQrisLegacy',
      bodyClass: 'page-qris-v440'
    },
    'kalkulator-bola': {
      fragment: 'pages/modules/kalkulator-bola-v27.html',
      css: 'assets/css/modules/kalkulator-bola-v27.css',
      js: 'assets/js/modules/kalkulator-bola-v27.js',
      init: 'JONI_initBolaLegacy'
    }
  };

  const pending = Object.create(null);
  const loaded = Object.create(null);
  const featureBodyClasses = Object.values(modules).map(x=>x.bodyClass).filter(Boolean);

  function clearBodyClasses(){
    featureBodyClasses.forEach(c=>document.body.classList.remove(c));
  }
  function setBodyClass(page){
    clearBodyClasses();
    const c = modules[page] && modules[page].bodyClass;
    if(c) document.body.classList.add(c);
  }

  function ensureCss(url){
    if(document.querySelector('link[data-joni-v27-css="'+url+'"]')) return Promise.resolve();
    return new Promise((resolve,reject)=>{
      const link=document.createElement('link');
      link.rel='stylesheet';
      link.href=url;
      link.dataset.joniV27Css=url;
      link.onload=resolve;
      link.onerror=()=>reject(new Error('CSS modul gagal dimuat: '+url));
      document.head.appendChild(link);
    });
  }

  function ensureJs(url){
    if(document.querySelector('script[data-joni-v27-js="'+url+'"]')) return Promise.resolve();
    return new Promise((resolve,reject)=>{
      const script=document.createElement('script');
      script.src=url;
      script.dataset.joniV27Js=url;
      script.onload=resolve;
      script.onerror=()=>reject(new Error('JS modul gagal dimuat: '+url));
      document.body.appendChild(script);
    });
  }

  async function load(page){
    const cfg=modules[page];
    setBodyClass(page);
    if(!cfg) return false;

    if(loaded[page]){
      const init=window[cfg.init];
      if(typeof init==='function') init();
      return true;
    }
    if(pending[page]) return pending[page];

    pending[page]=(async()=>{
      const host=document.querySelector('#page-'+page+' .module-fragment-host');
      if(!host) throw new Error('Host modul tidak ditemukan: '+page);

      const [response] = await Promise.all([
        fetch(cfg.fragment,{cache:'no-store'}),
        ensureCss(cfg.css)
      ]);
      if(!response.ok) throw new Error('HTML modul gagal dimuat: '+cfg.fragment+' ('+response.status+')');

      host.innerHTML=await response.text();
      await ensureJs(cfg.js);

      const init=window[cfg.init];
      if(typeof init!=='function') throw new Error('Init modul tidak ditemukan: '+cfg.init);
      init();

      host.dataset.loaded='1';
      loaded[page]=true;
      return true;
    })().catch(err=>{
      console.error('[KAIZOKUGARI V27 MODULE]',page,err);
      const host=document.querySelector('#page-'+page+' .module-fragment-host');
      if(host){
        host.innerHTML='<section class="section"><div class="placeholder-box"><b>Modul belum berhasil dimuat.</b><br>Tekan Ctrl+Shift+R. Jika tetap muncul, periksa apakah folder pages/modules dan assets/*/modules sudah ikut di-upload.</div></section>';
      }
      delete pending[page];
      throw err;
    });

    return pending[page];
  }

  window.JONI_V27_MODULE_PAGES=Object.freeze(Object.keys(modules));
  window.JONI_setActiveModulePage=setBodyClass;
  window.JONI_loadPageModule=load;
})();
