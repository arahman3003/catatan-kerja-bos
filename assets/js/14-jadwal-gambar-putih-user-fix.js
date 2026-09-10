(function(){
  "use strict";

  const MARKET_ART = {
    "california":"assets/images/california-user-fix.png",
    "poipet12":"assets/images/poipet-all-user-fix.png",
    "poipet15":"assets/images/poipet-all-user-fix.png",
    "poipet19":"assets/images/poipet-all-user-fix.png",
    "poipet22":"assets/images/poipet-all-user-fix.png",
    "bullseye":"assets/images/bullseye-user-fix.png",
    "jakarta-1400":"assets/images/jakarta-user-fix.png",
    "jakarta-2330":"assets/images/jakarta-user-fix.png",
    "magnum4d":"assets/images/magnum4d-user-fix.png",
    "nevada":"assets/images/nevada-user-fix.png",
    "hongkong":"assets/images/hongkong-user-fix.png",
    "pcso":"assets/images/pcso-user-fix.png",
    "totomali-1530":"assets/images/totomali-user-fix.png",
    "totomali-2030":"assets/images/totomali-user-fix.png",
    "totomali-2330":"assets/images/totomali-user-fix.png",
    "singapore":"assets/images/singapore-user-fix.png",
    "king-kong4d-i":"assets/images/hongkong-user-fix.png",
    "king-kong4d-ii":"assets/images/hongkong-user-fix.png"
  };

  const MARKET_POS = {
    "california":"center center",
    "poipet12":"center center",
    "poipet15":"center center",
    "poipet19":"center center",
    "poipet22":"center center",
    "bullseye":"center center",
    "jakarta-1400":"center center",
    "jakarta-2330":"center center",
    "magnum4d":"center center",
    "nevada":"center center",
    "hongkong":"center center",
    "pcso":"center center",
    "totomali-1530":"center center",
    "totomali-2030":"center center",
    "totomali-2330":"center center",
    "singapore":"center center",
    "king-kong4d-i":"center center",
    "king-kong4d-ii":"center center"
  };

  function applyCard(card){
    if(!card) return;
    const id=String(card.getAttribute('data-jadwal-id')||'').trim().toLowerCase();
    const src=MARKET_ART[id];
    if(!src) return;
    card.style.setProperty('background-image', 'url("'+src+'")', 'important');
    card.style.setProperty('background-repeat', 'no-repeat', 'important');
    card.style.setProperty('background-size', 'cover', 'important');
    card.style.setProperty('background-position', MARKET_POS[id] || 'center center', 'important');
    card.setAttribute('data-user-market-fix','1');
  }

  function applyAll(scope){
    (scope || document).querySelectorAll('#page-jadwal-togel .jadwal-card[data-jadwal-id]').forEach(applyCard);
  }

  function boot(){
    applyAll(document);
    const grid=document.getElementById('jadwalGrid');
    if(grid){
      const mo=new MutationObserver(function(){ applyAll(grid); });
      mo.observe(grid,{childList:true,subtree:true});
    }
    let tries=0;
    const timer=setInterval(function(){
      applyAll(document);
      tries+=1;
      if(tries>=25) clearInterval(timer);
    }, 300);
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded', boot, {once:true});
  else boot();
})();
