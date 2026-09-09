/* KAIZOKUGARI V27 - bridge to the ORIGINAL V24 router.
   Does not replace openPage(), auth, Firebase, or user-profile logic. */
(function(){
  'use strict';
  const featurePages=new Set(['syair-togel','bukti-kemenangan','selisih','kalkulator-bola']);

  function activate(page){
    try{
      if(window.JONI_setActiveModulePage) window.JONI_setActiveModulePage(featurePages.has(page)?page:null);
      if(featurePages.has(page) && window.JONI_loadPageModule){
        Promise.resolve(window.JONI_loadPageModule(page)).catch(err=>{
          console.error('[KAIZOKUGARI V27 BRIDGE]',err);
        });
      }
    }catch(err){
      console.error('[KAIZOKUGARI V27 BRIDGE]',err);
    }
  }

  document.addEventListener('click',function(event){
    const button=event.target.closest('.nav-btn[data-page]');
    if(!button) return;
    const page=button.dataset.page;
    // Let V24's original button handler run first, then load the isolated feature.
    setTimeout(()=>activate(page),0);
  });

  // Remove feature-only body classes whenever another normal page is clicked.
  document.addEventListener('click',function(event){
    const button=event.target.closest('.open-page[data-page]');
    if(!button) return;
    setTimeout(()=>activate(button.dataset.page),0);
  });
})();
