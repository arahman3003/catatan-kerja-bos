/* ============================================================
   JADWAL TOGEL - FINAL BACKGROUND USER
   File pengganti untuk: assets/js/13-jadwal-market-images-force-final.js

   Tujuan:
   - Semua 53 pasaran memakai gambar yang dikirim user.
   - Tidak memakai lagi assets/images/market-icons/* yang sempat memunculkan
     gambar putih/icon Prediksi.
   - Background dipasang langsung ke CARD dengan inline !important.
   - Layer img lama disembunyikan agar tidak bisa menimpa background.
   ============================================================ */
(function(){
  "use strict";

  const MARKET_BG = {
    "hokidraw":"assets/images/hokidraw.png",
    "toto-macau-pagi":"assets/images/toto-macau.png",
    "kentucky-midday":"assets/images/kentucky.png",
    "florida-midday":"assets/images/florida-midday.png",
    "huahin-0100":"assets/images/huahin.png",
    "bangkok-0130":"assets/images/bangkok.png",
    "newyork-midday":"assets/images/newyork-midday.png",
    "carolina-day":"assets/images/carolina.png",
    "brunei-02":"assets/images/brunei.png",
    "oregon-03":"assets/images/oregon.png",
    "oregon-06":"assets/images/oregon.png",
    "california":"assets/images/california.png",
    "florida-evening":"assets/images/florida-evening.png",
    "oregon-09":"assets/images/oregon.png",
    "bangkok-0930":"assets/images/bangkok.png",
    "newyork-evening":"assets/images/newyork-evening.png",
    "totocambodia":"assets/images/totocambodia.png",
    "kentucky-evening":"assets/images/kentucky-alt.png",
    "carolina-evening":"assets/images/carolina.png",
    "chelsea-11":"assets/images/chelsea.png",
    "oregon-12":"assets/images/oregon.png",
    "poipet12":"assets/images/poipet.png",
    "bullseye":"assets/images/bullseye.png",
    "totomacau-siang":"assets/images/toto-macau-alt.png",
    "sydney":"assets/images/sydney.png",
    "jakarta-1400":"assets/images/jakarta.png",
    "brunei-14":"assets/images/brunei.png",
    "chelsea-15":"assets/images/chelsea.png",
    "totomali-1530":"assets/images/pcso.png",
    "totomacau-5d-sore":"assets/images/toto-macau-alt.png",
    "poipet15":"assets/images/poipet.png",
    "totomacau-sore":"assets/images/toto-macau.png",
    "huahin-1630":"assets/images/huahin-alt.png",
    "king-kong4d-i":"assets/images/hongkong.png",
    "singapore":"assets/images/singapore.png",
    "magnum4d":"assets/images/magnum4d.png",
    "totomacau-malam-i":"assets/images/toto-macau-alt.png",
    "chelsea-19":"assets/images/chelsea.png",
    "poipet19":"assets/images/poipet.png",
    "pcso":"assets/images/pcso.png",
    "totomali-2030":"assets/images/pcso.png",
    "huahin-2100":"assets/images/huahin-alt.png",
    "chelsea-21":"assets/images/chelsea.png",
    "totomacau-5d-malam":"assets/images/toto-macau-alt.png",
    "nevada":"assets/images/nevada.png",
    "brunei-21":"assets/images/brunei.png",
    "totomacau-malam-ii":"assets/images/toto-macau.png",
    "poipet22":"assets/images/poipet.png",
    "hongkong":"assets/images/hongkong.png",
    "totomacau-malam-iii":"assets/images/toto-macau-alt.png",
    "totomali-2330":"assets/images/pcso.png",
    "jakarta-2330":"assets/images/jakarta.png",
    "king-kong4d-ii":"assets/images/hongkong.png"
  };

  function applyCard(card){
    if(!card) return;
    const id=String(card.getAttribute("data-jadwal-id")||"").trim().toLowerCase();
    const src=MARKET_BG[id];
    if(!src) return;

    // Inline + important menang terhadap CSS 43/44/45 lama.
    card.style.setProperty("background-image", `url("${src}")`, "important");
    card.style.setProperty("background-size", "cover", "important");
    card.style.setProperty("background-position", "center center", "important");
    card.style.setProperty("background-repeat", "no-repeat", "important");
    card.style.setProperty("background-color", "#02231a", "important");
    card.setAttribute("data-jadwal-final-user-bg", "1");

    // Matikan image/icon lama dari 03-app-core-data-jadwal.js.
    const art=card.querySelector(".jadwal-card-art");
    if(art){
      art.style.setProperty("display", "none", "important");
      art.style.setProperty("visibility", "hidden", "important");
      art.style.setProperty("opacity", "0", "important");
      const img=art.querySelector("img");
      if(img) img.setAttribute("src", src);
    }
  }

  function applyAll(){
    document.querySelectorAll('#page-jadwal-togel .jadwal-card[data-jadwal-id]').forEach(applyCard);
  }

  function boot(){
    applyAll();

    // Grid dirender ulang saat search/filter, jadi pantau perubahan DOM.
    const grid=document.getElementById("jadwalGrid");
    if(grid){
      const observer=new MutationObserver(applyAll);
      observer.observe(grid,{childList:true,subtree:true});
    }

    // Pengaman terhadap file override lama yang mungkin masih ada di repo.
    setInterval(applyAll, 1200);
  }

  if(document.readyState==="loading"){
    document.addEventListener("DOMContentLoaded", boot, {once:true});
  }else{
    boot();
  }
})();
