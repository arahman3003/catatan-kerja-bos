/* ============================================================
   JADWAL / PREDIKSI PASARAN - ICON + BACKGROUND FIX FINAL
   Update:
   - Menjaga background pasaran yang sudah dipakai.
   - Memasang icon khusus untuk pasaran yang sebelumnya masih kosong / placeholder:
     * TOTO MALI 1530 / 2030 / 2330
     * POIPET 12 / 15 / 19 / 22
     * KINGKONG 4D I / II
     * ALL PREDIKSI
     * ALL PREDIKSI BESOK
   - Dibuat defensif agar tetap jalan walau struktur card sedikit berbeda.
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

  const MARKET_ICON = {
    "totomali-1530":"assets/images/toto-mali-icon.png",
    "totomali-2030":"assets/images/toto-mali-icon.png",
    "totomali-2330":"assets/images/toto-mali-icon.png",
    "poipet12":"assets/images/poipet-icon.png",
    "poipet15":"assets/images/poipet-icon.png",
    "poipet19":"assets/images/poipet-icon.png",
    "poipet22":"assets/images/poipet-icon.png",
    "king-kong4d-i":"assets/images/kingkong4d-icon.png",
    "king-kong4d-ii":"assets/images/kingkong4d-icon.png",
    "all-prediksi":"assets/images/all-prediksi-icon.png",
    "allprediksi":"assets/images/all-prediksi-icon.png",
    "all-prediksi-besok":"assets/images/all-prediksi-besok-icon.png",
    "allprediksibesok":"assets/images/all-prediksi-besok-icon.png"
  };

  function normalize(val){
    return String(val || "")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  function getCardTitle(card){
    const selectors = [
      '.jadwal-card-title', '.jadwal-card-name', '.market-title', '.market-name',
      '.pasaran-title', '.pasaran-name', '.title', 'h2', 'h3', 'h4', 'strong'
    ];
    for(const sel of selectors){
      const el = card.querySelector(sel);
      if(el && el.textContent && el.textContent.trim()) return el.textContent.trim();
    }
    return card.textContent || '';
  }

  function detectKey(card){
    const rawId = card.getAttribute('data-jadwal-id') || card.getAttribute('data-market-id') || card.id || '';
    const id = normalize(rawId);
    const title = normalize(getCardTitle(card));

    if (MARKET_BG[id] || MARKET_ICON[id]) return id;
    if (title.includes('all-prediksi-besok')) return 'all-prediksi-besok';
    if (title.includes('all-prediksi')) return 'all-prediksi';
    if ((id + ' ' + title).includes('king-kong4d-ii') || /king-?kong.*4d.*ii/.test(id + ' ' + title)) return 'king-kong4d-ii';
    if ((id + ' ' + title).includes('king-kong4d-i') || /king-?kong.*4d/.test(id + ' ' + title)) return 'king-kong4d-i';
    if ((id + ' ' + title).includes('poipet22') || /poipet.*22/.test(id + ' ' + title)) return 'poipet22';
    if ((id + ' ' + title).includes('poipet19') || /poipet.*19/.test(id + ' ' + title)) return 'poipet19';
    if ((id + ' ' + title).includes('poipet15') || /poipet.*15/.test(id + ' ' + title)) return 'poipet15';
    if ((id + ' ' + title).includes('poipet12') || /poipet.*12/.test(id + ' ' + title)) return 'poipet12';
    if ((id + ' ' + title).includes('totomali-2330') || /toto-?mali.*2330/.test(id + ' ' + title)) return 'totomali-2330';
    if ((id + ' ' + title).includes('totomali-2030') || /toto-?mali.*2030/.test(id + ' ' + title)) return 'totomali-2030';
    if ((id + ' ' + title).includes('totomali-1530') || /toto-?mali.*1530/.test(id + ' ' + title)) return 'totomali-1530';
    return id || title;
  }

  function applyBackground(card, bgSrc){
    if(!bgSrc) return;
    card.style.setProperty('background-image', `url("${bgSrc}")`, 'important');
    card.style.setProperty('background-size', 'cover', 'important');
    card.style.setProperty('background-position', 'center center', 'important');
    card.style.setProperty('background-repeat', 'no-repeat', 'important');
    card.style.setProperty('background-color', '#02231a', 'important');
    card.setAttribute('data-jadwal-final-user-bg', '1');
  }

  function findThumbElements(card){
    const imgSelectors = [
      '.jadwal-card-art img', '.jadwal-card-thumb img', '.market-thumb img',
      '.pasaran-thumb img', '.thumb img', '.icon img'
    ];
    for(const sel of imgSelectors){
      const el = card.querySelector(sel);
      if(el) return { img: el, box: el.parentElement };
    }

    const boxSelectors = [
      '.jadwal-card-art', '.jadwal-card-thumb', '.market-thumb',
      '.pasaran-thumb', '.thumb', '.icon'
    ];
    for(const sel of boxSelectors){
      const el = card.querySelector(sel);
      if(el) return { img: el.querySelector('img'), box: el };
    }

    const firstImg = card.querySelector('img');
    if(firstImg) return { img: firstImg, box: firstImg.parentElement };
    return { img: null, box: null };
  }

  function createThumbBox(card, src){
    const box = document.createElement('div');
    box.className = 'jadwal-card-art jadwal-card-art--ghostwriter-icon';
    box.style.cssText = [
      'width:48px', 'min-width:48px', 'height:48px', 'border-radius:12px',
      'overflow:hidden', 'margin-right:12px', 'background:#081814',
      'box-shadow:0 0 0 1px rgba(255,255,255,.1) inset'
    ].join(';');

    const img = document.createElement('img');
    img.src = src;
    img.alt = 'market-icon';
    img.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block;';
    box.appendChild(img);

    const target = card.firstElementChild || card;
    card.insertBefore(box, target);
  }

  function applyIcon(card, iconSrc){
    if(!iconSrc) return;
    const found = findThumbElements(card);
    const img = found.img;
    const box = found.box;

    if(img){
      img.src = iconSrc;
      img.alt = 'market-icon';
      img.removeAttribute('srcset');
      img.style.setProperty('display', 'block', 'important');
      img.style.setProperty('visibility', 'visible', 'important');
      img.style.setProperty('opacity', '1', 'important');
      img.style.setProperty('width', '100%', 'important');
      img.style.setProperty('height', '100%', 'important');
      img.style.setProperty('object-fit', 'cover', 'important');
      img.onerror = function(){ this.src = iconSrc; };
    }

    if(box){
      box.style.setProperty('display', 'block', 'important');
      box.style.setProperty('visibility', 'visible', 'important');
      box.style.setProperty('opacity', '1', 'important');
      box.style.setProperty('overflow', 'hidden', 'important');
      box.style.setProperty('border-radius', '12px', 'important');
      box.style.setProperty('background-image', `url("${iconSrc}")`, 'important');
      box.style.setProperty('background-size', 'cover', 'important');
      box.style.setProperty('background-position', 'center center', 'important');
      box.style.setProperty('background-repeat', 'no-repeat', 'important');
      if(!img){
        box.innerHTML = '';
        const injected = document.createElement('img');
        injected.src = iconSrc;
        injected.alt = 'market-icon';
        injected.style.cssText = 'width:100%;height:100%;object-fit:cover;display:block;';
        box.appendChild(injected);
      }
    }else if(card && !card.querySelector('.jadwal-card-art--ghostwriter-icon')){
      createThumbBox(card, iconSrc);
    }
  }

  function applyCard(card){
    if(!card || card.nodeType !== 1) return;
    const key = detectKey(card);
    const bgSrc = MARKET_BG[key];
    const iconSrc = MARKET_ICON[key];
    if(bgSrc) applyBackground(card, bgSrc);
    if(iconSrc) applyIcon(card, iconSrc);
  }

  function getAllCards(){
    return document.querySelectorAll([
      '#page-jadwal-togel .jadwal-card[data-jadwal-id]',
      '.jadwal-card[data-jadwal-id]',
      '.market-card[data-jadwal-id]',
      '[data-jadwal-id]',
      '[data-market-id]'
    ].join(','));
  }

  function applyAll(){
    getAllCards().forEach(applyCard);
  }

  function boot(){
    applyAll();
    const roots = [
      document.getElementById('jadwalGrid'),
      document.getElementById('page-jadwal-togel'),
      document.body
    ].filter(Boolean);

    roots.forEach(root => {
      const observer = new MutationObserver(() => applyAll());
      observer.observe(root, { childList:true, subtree:true, attributes:true, attributeFilter:['data-jadwal-id','data-market-id','src'] });
    });

    setInterval(applyAll, 1500);
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', boot, {once:true});
  }else{
    boot();
  }
})();
