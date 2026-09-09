(function(){
  "use strict";

  const MARKET_ART = {
    "hokidraw":"assets/images/jadwal-markets/hokidraw.png",
    "toto-macau-pagi":"assets/images/jadwal-markets/toto-macau-pagi.png",
    "kentucky-midday":"assets/images/jadwal-markets/kentucky-midday.png",
    "florida-midday":"assets/images/jadwal-markets/florida-midday.png",
    "huahin-0100":"assets/images/jadwal-markets/huahin-0100.png",
    "bangkok-0130":"assets/images/jadwal-markets/bangkok-0130.png",
    "newyork-midday":"assets/images/jadwal-markets/newyork-midday.png",
    "carolina-day":"assets/images/jadwal-markets/carolina-day.png",
    "brunei-02":"assets/images/jadwal-markets/brunei-02.png",
    "oregon-03":"assets/images/jadwal-markets/oregon-03.png"
  };

  function applyMarketArt(root){
    const scope = root && root.querySelectorAll ? root : document;
    scope.querySelectorAll('#page-jadwal-togel .jadwal-card[data-jadwal-id]').forEach(card=>{
      const id = String(card.getAttribute('data-jadwal-id')||'').trim().toLowerCase();
      const src = MARKET_ART[id];
      if(!src) return;

      const art = card.querySelector('.jadwal-card-art');
      if(!art) return;

      art.style.setProperty('background-image', `url("${src}")`, 'important');
      art.style.setProperty('background-size', 'cover', 'important');
      art.style.setProperty('background-repeat', 'no-repeat', 'important');
      art.style.setProperty('display', 'block', 'important');
      art.style.setProperty('visibility', 'visible', 'important');
      art.style.setProperty('opacity', '1', 'important');

      const img = art.querySelector('img');
      if(img){
        if(img.getAttribute('src') !== src) img.setAttribute('src', src);
        img.setAttribute('loading','eager');
      }

      card.setAttribute('data-market-art-ready','1');
    });
  }

  function boot(){
    applyMarketArt(document);

    const grid = document.getElementById('jadwalGrid');
    if(grid){
      const observer = new MutationObserver(()=>applyMarketArt(grid));
      observer.observe(grid,{childList:true,subtree:true});
    }

    // Renderer jadwal bisa berjalan setelah Firebase selesai. Ulang sebentar
    // agar artwork tetap terpasang tanpa bergantung pada urutan load Firebase.
    let tries=0;
    const timer=setInterval(()=>{
      applyMarketArt(document);
      tries++;
      if(tries>=20) clearInterval(timer);
    },350);
  }

  if(document.readyState==='loading'){
    document.addEventListener('DOMContentLoaded',boot,{once:true});
  }else{
    boot();
  }
})();
