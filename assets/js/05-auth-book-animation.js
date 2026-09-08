(function(){
  const book=document.getElementById('authBook');
  const cover=document.getElementById('authBookCover');
  if(!book||!cover||window.__kaizokuBookPremiumInit) return;
  book.classList.remove('book-opened','book-opening');
  book.classList.add('book-closed');
  function openBook(e){
    e.preventDefault();
    e.stopPropagation();
    if(book.classList.contains('book-opening')||book.classList.contains('book-opened')) return;
    book.classList.remove('book-closed');
    book.classList.add('book-opening');
    setTimeout(()=>{
      book.classList.remove('book-opening');
      book.classList.add('book-opened');
      document.getElementById('loginEmail')?.focus();
    },980);
  }
  cover.addEventListener('click',openBook);
})();
