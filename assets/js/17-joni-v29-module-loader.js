(function(){
  'use strict';
  const BUILD='29.0.0';
  const modules={
    'syair-togel':{pageId:'page-syair-togel',html:'pages/modules/syair-togel-v29.html',css:'assets/css/modules/syair-togel-v29.css',js:'assets/js/modules/syair-togel-v29.js',init:'JONI_initSyairLegacy'},
    'bukti-kemenangan':{pageId:'page-bukti-kemenangan',html:'pages/modules/bukti-kemenangan-v29.html',css:'assets/css/modules/bukti-kemenangan-v29.css',js:'assets/js/modules/bukti-kemenangan-v29.js',init:'JONI_initBuktiLegacy'},
    'selisih':{pageId:'page-selisih',html:'pages/modules/selisih-qris-v29.html',css:'assets/css/modules/selisih-qris-v29.css',js:'assets/js/modules/selisih-qris-v29.js',init:'JONI_initQrisLegacy'},
    'kalkulator-bola':{pageId:'page-kalkulator-bola',html:'pages/modules/kalkulator-bola-v29.html',css:'assets/css/modules/kalkulator-bola-v29.css',js:'assets/js/modules/kalkulator-bola-v29.js',init:'JONI_initBolaLegacy'}
  };
  const state={};
  const inflight={};

  function esc(s){return String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
  function setBodyMode(page){
    document.body.classList.remove('page-qris-v440','page-bola-v450');
    if(page==='selisih') document.body.classList.add('page-qris-v440');
    if(page==='kalkulator-bola') document.body.classList.add('page-bola-v450');
  }
  function addShellCss(){
    if(document.getElementById('joni-v29-shell-css')) return;
    const l=document.createElement('link'); l.id='joni-v29-shell-css'; l.rel='stylesheet'; l.href='assets/css/43-joni-v29-module-shell.css'; document.head.appendChild(l);
  }
  function addBolaNavAndPage(){
    if(!document.querySelector('.nav-btn[data-page="kalkulator-bola"]')){
      const selisih=document.querySelector('.nav-btn[data-page="selisih"]');
      if(selisih){
        const b=document.createElement('button');
        b.className='nav-btn'; b.type='button'; b.dataset.page='kalkulator-bola';
        b.innerHTML='<span aria-hidden="true" class="nav-icon"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="8"></circle><path d="M8.5 8.5l3.5-2 3.5 2 1 4-2.8 3.2H10.3L7.5 12.5z"></path><path d="M12 6v4M7.5 12.5l2.8-1M16.5 12.5l-2.8-1M10.3 15.7L9 19M13.7 15.7L15 19"></path></svg></span><span class="menu-label">Kalkulator Bola</span>';
        selisih.insertAdjacentElement('afterend',b);
      }
    }
    if(!document.getElementById('page-kalkulator-bola')){
      const main=document.querySelector('main.main');
      if(main){const p=document.createElement('div');p.className='page';p.id='page-kalkulator-bola';main.appendChild(p);}
    }
  }
  function showPage(page){
    if(window.canOpenKerjaBossPage && !window.canOpenKerjaBossPage(page)) return false;
    document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
    const target=document.getElementById('page-'+page); if(target) target.classList.add('active');
    document.querySelectorAll('.nav-btn[data-page]').forEach(b=>b.classList.toggle('active',b.dataset.page===page));
    window.scrollTo({top:0,behavior:'smooth'}); return true;
  }
  function loadCss(path){
    const id='joni-v29-css-'+path.replace(/[^a-z0-9]/gi,'-');
    const old=document.getElementById(id); if(old) return old.dataset.failed==='1'?Promise.reject(new Error('CSS gagal dimuat: '+path)):Promise.resolve();
    return new Promise((resolve,reject)=>{const l=document.createElement('link');l.id=id;l.rel='stylesheet';l.href=path;l.onload=resolve;l.onerror=()=>{l.dataset.failed='1';reject(new Error('CSS gagal dimuat: '+path));};document.head.appendChild(l);});
  }
  function loadScript(path){
    const id='joni-v29-js-'+path.replace(/[^a-z0-9]/gi,'-');
    const old=document.getElementById(id); if(old) return old.dataset.loaded==='1'?Promise.resolve():new Promise((resolve,reject)=>{old.addEventListener('load',resolve,{once:true});old.addEventListener('error',reject,{once:true});});
    return new Promise((resolve,reject)=>{const s=document.createElement('script');s.id=id;s.src=path;s.async=false;s.onload=()=>{s.dataset.loaded='1';resolve();};s.onerror=()=>reject(new Error('JS gagal dimuat: '+path));document.body.appendChild(s);});
  }
  async function loadModule(page){
    const cfg=modules[page]; if(!cfg) return;
    setBodyMode(page);
    if(state[page]==='ready') return;
    if(inflight[page]) return inflight[page];
    const host=document.getElementById(cfg.pageId); if(!host) return;
    host.innerHTML='<div class="joni-v29-loading">MEMUAT TAMPILAN BARU...</div>';
    const job=(async()=>{
      try{
        const [resp]=await Promise.all([fetch(cfg.html,{cache:'no-store'}),loadCss(cfg.css),loadScript(cfg.js)]);
        if(!resp.ok) throw new Error('HTML '+resp.status+' '+cfg.html);
        host.innerHTML=await resp.text();
        const fn=window[cfg.init]; if(typeof fn!=='function') throw new Error('Initializer tidak ditemukan: '+cfg.init);
        fn(); state[page]='ready'; host.dataset.joniModuleBuild=BUILD;
      }catch(err){
        console.error('[JONI V29]',page,err);
        host.innerHTML='<div class="joni-v29-error"><b>MODUL GAGAL DIMUAT</b><span>'+esc(err&&err.message?err.message:err)+'</span></div>';
        state[page]='error';
      }finally{delete inflight[page];}
    })();
    inflight[page]=job; return job;
  }

  function init(){
    addShellCss(); addBolaNavAndPage();
    document.addEventListener('click',function(e){
      const btn=e.target.closest('.nav-btn[data-page]'); if(!btn) return;
      const page=btn.dataset.page||'';
      if(page==='kalkulator-bola'){
        e.preventDefault(); e.stopPropagation();
        if(showPage(page)){setBodyMode(page);loadModule(page);} return;
      }
      if(modules[page]){
        const host=document.getElementById(modules[page].pageId);
        if(host && state[page]!=='ready') host.innerHTML='<div class="joni-v29-loading">MEMUAT TAMPILAN BARU...</div>';
        setBodyMode(page); setTimeout(()=>loadModule(page),0);
      }else setBodyMode('');
    },true);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true}); else init();
  window.JONI_V29_openModule=loadModule; window.JONI_V29_BUILD=BUILD;
})();
