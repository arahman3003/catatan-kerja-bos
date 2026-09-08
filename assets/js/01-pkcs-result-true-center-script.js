(function(){
  function centerPkcsResult(){
    var el = document.getElementById('pkcsResult');
    if(!el) return;
    if(el.classList.contains('pkcs-result-empty')) return;
    if(el.querySelector('.pkcs-centered-text')) return;
    var txt = el.textContent || '';
    el.textContent = '';
    var box = document.createElement('div');
    box.className = 'pkcs-centered-text';
    box.textContent = txt;
    el.appendChild(box);
  }
  function init(){
    var el = document.getElementById('pkcsResult');
    if(!el) return;
    var busy = false;
    var observer = new MutationObserver(function(){
      if(busy) return;
      busy = true;
      try { centerPkcsResult(); } finally { busy = false; }
    });
    observer.observe(el, {childList:true, characterData:true, subtree:true});
    centerPkcsResult();
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
