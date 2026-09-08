(function(){
  function mountViewerToBody(){
    const viewer=document.getElementById('gambarViewer');
    if(viewer && viewer.parentElement!==document.body) document.body.appendChild(viewer);
  }
  function openViewerFromImage(img){
    if(!img) return;
    mountViewerToBody();
    const viewer=document.getElementById('gambarViewer');
    const preview=document.getElementById('gambarViewerImage');
    const title=document.getElementById('gambarViewerTitle');
    if(!viewer || !preview) return;
    const src=img.currentSrc || img.src || img.getAttribute('src') || '';
    if(!src) return;
    preview.removeAttribute('src');
    preview.src=src;
    const card=img.closest('.gambar-card');
    const titleEl=card?.querySelector('.gambar-card-title');
    if(title) title.textContent=titleEl?.textContent?.trim() || img.alt || 'Preview Gambar';
    viewer.classList.add('show');
    document.body.style.overflow='hidden';
  }
  function closeViewerFix(){
    const viewer=document.getElementById('gambarViewer');
    const preview=document.getElementById('gambarViewerImage');
    if(viewer) viewer.classList.remove('show');
    if(preview) preview.removeAttribute('src');
    document.body.style.overflow='';
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',mountViewerToBody,{once:true});
  else mountViewerToBody();
  document.addEventListener('click',function(e){
    const img=e.target.closest?.('#page-gambar .gambar-card-image[data-view-id]');
    if(img){openViewerFromImage(img);return;}
    if(e.target.closest?.('#gambarViewerCloseBtn') || e.target.id==='gambarViewerBackdrop') closeViewerFix();
  },true);
  document.addEventListener('keydown',function(e){
    if(e.key==='Escape' && document.getElementById('gambarViewer')?.classList.contains('show')) closeViewerFix();
  },true);
})();
