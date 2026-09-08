(function(){
  function applyCenteredLayout(){
    var el = document.getElementById('pkcsResult');
    if(!el) return;
    if(el.classList.contains('pkcs-result-empty')) return;

    var existingShell = el.querySelector(':scope > .pkcs-centered-shell');
    if(existingShell) return;

    var existingText = el.querySelector(':scope > .pkcs-centered-text');
    var html = existingText ? existingText.innerHTML : el.innerHTML;

    el.innerHTML = '';
    var shell = document.createElement('div');
    shell.className = 'pkcs-centered-shell';
    var text = document.createElement('div');
    text.className = 'pkcs-centered-text';
    text.innerHTML = html;
    shell.appendChild(text);
    el.appendChild(shell);
  }

  function initPkcsCenterFix(){
    var el = document.getElementById('pkcsResult');
    if(!el) return;

    var busy = false;
    var observer = new MutationObserver(function(){
      if(busy) return;
      busy = true;
      try {
        applyCenteredLayout();
      } finally {
        busy = false;
      }
    });

    observer.observe(el, {childList:true, subtree:true, characterData:true});
    applyCenteredLayout();
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', initPkcsCenterFix);
  } else {
    initPkcsCenterFix();
  }
})();
