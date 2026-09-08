(function(){
  const EYE_SVG = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z"></path><circle cx="12" cy="12" r="2.8"></circle></svg>';

  function getNoteById(id){
    try{
      if(typeof notepadData !== 'undefined' && Array.isArray(notepadData)){
        const found = notepadData.find(n => String(n.id) === String(id));
        if(found) return found;
      }
    }catch(_){ }

    /* Fallback: ambil langsung dari card jika data global belum siap */
    try{
      const esc = (window.CSS && CSS.escape) ? CSS.escape(String(id)) : String(id).replace(/['\\]/g,'\\$&');
      const card = document.querySelector(`#page-notepad .note-card[data-id="${esc}"]`);
      if(card){
        return {
          id,
          title: card.querySelector('.note-title')?.textContent?.trim() || 'Tanpa Judul',
          category: card.querySelector('.note-category-badge')?.textContent?.trim() || 'PK CS',
          content: card.querySelector('.note-content')?.textContent || '',
          updatedAt: ''
        };
      }
    }catch(_){ }
    return null;
  }

  function openPreviewById(id){
    const note = getNoteById(id);
    if(!note) return;
    const modal = document.getElementById('kgNotePreviewModal');
    const title = document.getElementById('kgPreviewTitle');
    const category = document.getElementById('kgPreviewCategory');
    const content = document.getElementById('kgPreviewContent');
    const date = document.getElementById('kgPreviewDate');
    if(!modal || !title || !content) return;

    title.textContent = note.title || 'Tanpa Judul';
    category.textContent = (note.category || 'PK CS') + ' • PREVIEW';
    content.textContent = note.content || '';
    try{
      date.textContent = note.updatedAt ? 'Terakhir diperbarui: ' + new Date(note.updatedAt).toLocaleString('id-ID',{day:'2-digit',month:'short',year:'numeric',hour:'2-digit',minute:'2-digit'}) : '';
    }catch(_){ date.textContent = ''; }

    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden','false');
    document.documentElement.style.overflow='hidden';
  }

  function closePreview(){
    const modal = document.getElementById('kgNotePreviewModal');
    if(!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden','true');
    document.documentElement.style.overflow='';
  }

  function installEyeButtons(){
    document.querySelectorAll('#page-notepad .note-card').forEach(card=>{
      if(card.querySelector('.note-preview-eye')) return;
      const id = card.getAttribute('data-id');
      if(!id) return;
      const btn = document.createElement('button');
      btn.type='button';
      btn.className='note-preview-eye';
      btn.title='Lihat isi PK';
      btn.setAttribute('aria-label','Lihat isi PK');
      btn.innerHTML=EYE_SVG;
      btn.addEventListener('click',function(e){
        e.preventDefault();
        e.stopPropagation();
        openPreviewById(id);
      });
      card.appendChild(btn);
    });
  }

  const start = ()=>{
    installEyeButtons();
    const list = document.querySelector('#page-notepad #noteList');
    if(list){
      new MutationObserver(()=>requestAnimationFrame(installEyeButtons)).observe(list,{childList:true,subtree:false});
    }
    document.getElementById('kgPreviewClose')?.addEventListener('click',closePreview);
    document.getElementById('kgNotePreviewModal')?.addEventListener('click',e=>{if(e.target.id==='kgNotePreviewModal') closePreview();});
    document.addEventListener('keydown',e=>{if(e.key==='Escape') closePreview();});
  };

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start);
  else start();

  window.openKgNotePreview = openPreviewById;
  window.closeKgNotePreview = closePreview;
})();
