(function(){
  'use strict';
  const BUILD='28.0.0';
  const modules={
    'syair-togel':{
      host:'joniV28SyairHost', html:'pages/modules/syair-togel-v28.html',
      css:'assets/css/modules/syair-togel-v28.css', js:'assets/js/modules/syair-togel-v28.js', init:'JONI_initSyairLegacy'
    },
    'bukti-kemenangan':{
      host:'joniV28BuktiHost', html:'pages/modules/bukti-kemenangan-v28.html',
      css:'assets/css/modules/bukti-kemenangan-v28.css', js:'assets/js/modules/bukti-kemenangan-v28.js', init:'JONI_initBuktiLegacy'
    },
    'selisih':{
      host:'joniV28QrisHost', html:'pages/modules/selisih-qris-v28.html',
      css:'assets/css/modules/selisih-qris-v28.css', js:'assets/js/modules/selisih-qris-v28.js', init:'JONI_initQrisLegacy'
    },
    'kalkulator-bola':{
      host:'joniV28BolaHost', html:'pages/modules/kalkulator-bola-v28.html',
      css:'assets/css/modules/kalkulator-bola-v28.css', js:'assets/js/modules/kalkulator-bola-v28.js', init:'JONI_initBolaLegacy'
    }
  };
  const inflight=new Map();

  function setBodyMode(page){
    document.body.classList.remove('page-qris-v440','page-bola-v450');
    if(page==='selisih') document.body.classList.add('page-qris-v440');
    if(page==='kalkulator-bola') document.body.classList.add('page-bola-v450');
  }
  function loadCss(path){
    const key='joni-v28-css-'+path.replace(/[^a-z0-9]+/gi,'-');
    if(document.getElementById(key)) return Promise.resolve();
    return new Promise((resolve,reject)=>{
      const l=document.createElement('link');l.id=key;l.rel='stylesheet';l.href=path;
      l.onload=resolve;l.onerror=()=>reject(new Error('CSS gagal dimuat: '+path));document.head.appendChild(l);
    });
  }
  function loadScript(path){
    const key='joni-v28-js-'+path.replace(/[^a-z0-9]+/gi,'-');
    if(document.getElementById(key)) return Promise.resolve();
    return new Promise((resolve,reject)=>{
      const s=document.createElement('script');s.id=key;s.src=path;s.defer=false;
      s.onload=resolve;s.onerror=()=>reject(new Error('JS gagal dimuat: '+path));document.body.appendChild(s);
    });
  }
  async function ensure(page){
    const cfg=modules[page]; if(!cfg) return;
    setBodyMode(page);
    const host=document.getElementById(cfg.host); if(!host) return;
    if(host.dataset.ready==='1'){
      const fn=window[cfg.init]; if(typeof fn==='function') fn();
      return;
    }
    if(inflight.has(page)) return inflight.get(page);
    host.innerHTML='<div class="joni-v28-loading">MEMUAT MODUL...</div>';
    const job=(async()=>{
      try{
        const [resp]=await Promise.all([fetch(cfg.html,{cache:'no-store'}),loadCss(cfg.css)]);
        if(!resp.ok) throw new Error('HTML '+resp.status+' '+cfg.html);
        host.innerHTML=await resp.text();
        await loadScript(cfg.js);
        const fn=window[cfg.init];
        if(typeof fn!=='function') throw new Error('Initializer tidak ditemukan: '+cfg.init);
        fn();
        host.dataset.ready='1';
        host.dataset.build=BUILD;
      }catch(err){
        console.error('[JONI V28]',err);
        host.innerHTML='<div class="joni-v28-error"><b>MODUL GAGAL DIMUAT</b><span>'+String(err.message||err)+'</span></div>';
      }finally{inflight.delete(page);}
    })();
    inflight.set(page,job); return job;
  }

  document.addEventListener('click',event=>{
    const btn=event.target.closest('.nav-btn[data-page]');
    if(!btn) return;
    const page=btn.dataset.page||'';
    if(modules[page]) setTimeout(()=>ensure(page),0);
    else setBodyMode('');
  });

  window.JONI_V28_openModule=ensure;
  window.JONI_V28_BUILD=BUILD;
})();
