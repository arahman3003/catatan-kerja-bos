(function(){
  "use strict";

  // FALLBACK JADWAL PNG DIRECT - sesuai struktur repo assets/images/
  const MARKET_ART = {
    "hokidraw":"assets/images/hokidraw.png",
    "toto-macau-pagi":"assets/images/toto-macau-pagi.png",
    "kentucky-midday":"assets/images/kentucky-midday.png",
    "florida-midday":"assets/images/florida-midday.png",
    "huahin-0100":"assets/images/huahin-0100.png",
    "bangkok-0130":"assets/images/bangkok-0130.png",
    "newyork-midday":"assets/images/newyork-midday.png",
    "carolina-day":"assets/images/carolina-day.png",
    "brunei-02":"assets/images/brunei-02.png",
    "oregon-03":"assets/images/oregon-all.png",
    "oregon-06":"assets/images/oregon-all.png",
    "california":"assets/images/california-goldengate.png",
    "florida-evening":"assets/images/florida-evening.png",
    "oregon-09":"assets/images/oregon-all.png",
    "bangkok-0930":"assets/images/bangkok-0130.png",
    "newyork-evening":"assets/images/newyork-evening.png",
    "totocambodia":"assets/images/totocambodia.png",
    "kentucky-evening":"assets/images/kentucky-evening.png",
    "carolina-evening":"assets/images/carolina-day.png",
    "chelsea-11":"assets/images/chelsea-all.png",
    "oregon-12":"assets/images/oregon-all.png",
    "poipet12":"assets/images/poipet-gate-1.png",
    "bullseye":"assets/images/bullseye-target-1.png",
    "totomacau-siang":"assets/images/totomacau-all.png",
    "sydney":"assets/images/sydney.png",
    "jakarta-1400":"assets/images/jakarta-monas-1.png",
    "brunei-14":"assets/images/brunei-02.png",
    "chelsea-15":"assets/images/chelsea-all.png",
    "totomali-1530":"assets/images/pcso-generic-1.png",
    "totomacau-5d-sore":"assets/images/totomacau-all.png",
    "poipet15":"assets/images/poipet-gate-2.png",
    "totomacau-sore":"assets/images/totomacau-all.png",
    "huahin-1630":"assets/images/huahin-all.png",
    "king-kong4d-i":"assets/images/usa-flag.png",
    "singapore":"assets/images/singapore.png",
    "magnum4d":"assets/images/malaysia-petronas-1.png",
    "totomacau-malam-i":"assets/images/totomacau-all.png",
    "chelsea-19":"assets/images/chelsea-all.png",
    "poipet19":"assets/images/poipet-gate-1.png",
    "pcso":"assets/images/pcso-generic-1.png",
    "totomali-2030":"assets/images/pcso-generic-1.png",
    "huahin-2100":"assets/images/huahin-all.png",
    "chelsea-21":"assets/images/chelsea-all.png",
    "totomacau-5d-malam":"assets/images/totomacau-all.png",
    "nevada":"assets/images/nevada-mountain-1.png",
    "brunei-21":"assets/images/brunei-02.png",
    "totomacau-malam-ii":"assets/images/totomacau-all.png",
    "poipet22":"assets/images/poipet-gate-2.png",
    "hongkong":"assets/images/macau-tower-2.png",
    "totomacau-malam-iii":"assets/images/totomacau-all.png",
    "totomali-2330":"assets/images/pcso-generic-1.png",
    "jakarta-2330":"assets/images/jakarta-monas-1.png",
    "king-kong4d-ii":"assets/images/usa-flag.png"
  };

  function applyMarketArt(root){
    const scope = root && root.querySelectorAll ? root : document;
    scope.querySelectorAll('#page-jadwal-togel .jadwal-card[data-jadwal-id]').forEach(card=>{
      const id=String(card.getAttribute('data-jadwal-id')||'').trim().toLowerCase();
      const src=MARKET_ART[id];
      if(!src) return;
      card.style.setProperty('background-image', `url("${src}")`, 'important');
      card.style.setProperty('background-size','cover','important');
      card.style.setProperty('background-position','center center','important');
      card.style.setProperty('background-repeat','no-repeat','important');
      card.setAttribute('data-market-art-ready','1');
    });
  }

  function boot(){
    applyMarketArt(document);
    const grid=document.getElementById('jadwalGrid');
    if(grid){
      const observer=new MutationObserver(()=>applyMarketArt(grid));
      observer.observe(grid,{childList:true,subtree:true});
    }
    let tries=0;
    const timer=setInterval(()=>{
      applyMarketArt(document);
      if(++tries>=20) clearInterval(timer);
    },350);
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{once:true});
  else boot();
})();
