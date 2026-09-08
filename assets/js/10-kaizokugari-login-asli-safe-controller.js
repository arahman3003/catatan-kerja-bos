(function(){
  function installSafeBook(){
    const book=document.getElementById('authBook');
    let cover=document.getElementById('authBookCover');
    if(!book||!cover)return;

    /* Remove only previous cover-click handlers by replacing the cover node. */
    const cleanCover=cover.cloneNode(true);
    cover.replaceWith(cleanCover);
    cover=cleanCover;

    /* Restore original initial state only while login gate is actually visible. */
    if(!document.getElementById('authGate')?.classList.contains('hidden')){
      book.classList.remove('book-opening','book-opened');
      book.classList.add('book-closed');
    }

    function openOriginalLogin(e){
      e.preventDefault();
      e.stopPropagation();
      if(book.classList.contains('book-opening')||book.classList.contains('book-opened'))return;

      book.classList.remove('book-closed');
      book.classList.add('book-opening');

      /* Login tab is the default page, exactly like the original file. */
      document.querySelectorAll('#authGate .auth-tab').forEach(tab=>{
        tab.classList.toggle('active',tab.dataset.authTab==='login');
      });
      document.getElementById('loginForm')?.classList.add('active');
      document.getElementById('registerForm')?.classList.remove('active');

      setTimeout(()=>{
        book.classList.remove('book-opening','book-closed');
        book.classList.add('book-opened');
        document.getElementById('loginEmail')?.focus();
      },980);
    }

    cover.addEventListener('click',openOriginalLogin,{passive:false});
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',installSafeBook,{once:true});
  }else{
    installSafeBook();
  }
})();
