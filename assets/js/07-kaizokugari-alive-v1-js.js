(function(){
  'use strict';

  function addRipple(e){
    var host = e.target.closest('button, .kd-quick-card, .pkcs-item');
    if(!host || host.disabled) return;
    host.classList.add('kaizo-ripple-host');
    var r = document.createElement('span');
    r.className = 'kaizo-ripple';
    var rect = host.getBoundingClientRect();
    r.style.left = (e.clientX - rect.left) + 'px';
    r.style.top  = (e.clientY - rect.top) + 'px';
    host.appendChild(r);
    setTimeout(function(){ r.remove(); }, 560);
  }

  function initResultRefresh(){
    var el = document.getElementById('pkcsResult');
    if(!el) return;
    var timer = 0;
    var obs = new MutationObserver(function(){
      clearTimeout(timer);
      el.classList.remove('kaizo-result-refresh');
      void el.offsetWidth;
      el.classList.add('kaizo-result-refresh');
      timer = setTimeout(function(){el.classList.remove('kaizo-result-refresh');}, 320);
    });
    obs.observe(el,{childList:true,characterData:true,subtree:true});
  }

  function init(){
    document.addEventListener('pointerdown', addRipple, {passive:true});
    initResultRefresh();
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, {once:true});
  else init();
})();
