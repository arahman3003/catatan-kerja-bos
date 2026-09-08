(function(){
  'use strict';
  function kick(btn){
    if(!btn || btn.disabled) return;
    btn.classList.remove('kaizo-nav-kick');
    void btn.offsetWidth;
    btn.classList.add('kaizo-nav-kick');
    setTimeout(function(){ btn.classList.remove('kaizo-nav-kick'); }, 370);
  }
  function init(){
    var sidebar=document.querySelector('.sidebar');
    if(!sidebar) return;
    sidebar.addEventListener('pointerdown',function(e){
      var btn=e.target.closest('.menu button,.submenu button');
      if(btn) kick(btn);
    });
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();
