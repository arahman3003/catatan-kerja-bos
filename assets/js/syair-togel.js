window.JONI_initSyairLegacy = function(){
/* === SYAIR JS ASLI UPLOAD BOS: syair(3).js === */
/* Generator Syair Togel — memakai template emas yang tertanam di file */
(function(){
  const templateData = "assets/images/modules/syair-template.png";
  const canvas = document.getElementById('absensiSyairCanvas');
  if(!canvas) return;
  const ctx = canvas.getContext('2d');
  const bg = new Image();
  bg.crossOrigin = "anonymous";
  const $s = id => document.getElementById(id);

  const pasarans = ['BANGKOK','BRUNEI','CHELSEA','HUAHIN','POIPET','NEVADA'];
  const PASARAN_LOGOS = {
    BANGKOK:"https://i.imgur.com/HAtzQR1.png",
    BRUNEI:"https://i.imgur.com/02h0XAy.png",
    CHELSEA:"https://i.imgur.com/JWNoLlq.png",
    HUAHIN:"https://i.imgur.com/5pX7Etm.png",
    POIPET:"https://i.imgur.com/mfxnAms.png",
    NEVADA:"https://i.imgur.com/8ueARHz.gif"
  };
  const pasaranLogoCache = {};
  Object.entries(PASARAN_LOGOS).forEach(([key,url])=>{
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = ()=>{ pasaranLogoCache[key] = img; draw(); };
    img.src = url;
  });
  const shios = ['TIKUS','KERBAU','HARIMAU','KELINCI','NAGA','ULAR','KUDA','KAMBING','MONYET','AYAM','ANJING','BABI'];
  const SHIO_LOGOS = {
    gold:{
      kerbau:"https://i.imgur.com/Mw6mCFm.jpeg",
      ular:"https://i.imgur.com/0kHK7Ef.jpeg",
      monyet:"https://i.imgur.com/7W0tEZP.jpeg",
      kuda:"https://i.imgur.com/nJ0D99t.jpeg",
      anjing:"https://i.imgur.com/db3aeXC.jpeg",
      ayam:"https://i.imgur.com/pnvlQmn.jpeg",
      harimau:"https://i.imgur.com/ZNIyUrV.jpeg",
      naga:"https://i.imgur.com/ZoDimVa.jpeg",
      babi:"https://i.imgur.com/VuO09wk.jpeg",
      kelinci:"https://i.imgur.com/2ctAxob.jpeg",
      tikus:"https://i.imgur.com/KRjhSWb.jpeg",
      kambing:"https://i.imgur.com/DerojZQ.jpeg"
    },
    blue:{
      tikus:"https://i.imgur.com/LWY2eyj.jpeg",
      kerbau:"https://i.imgur.com/Ui2Fh5k.jpeg",
      harimau:"https://i.imgur.com/qtxTvo3.jpeg",
      babi:"https://i.imgur.com/uTOVhIu.jpeg",
      kelinci:"https://i.imgur.com/GMdgmmj.jpeg",
      naga:"https://i.imgur.com/mSknwgf.jpeg",
      ular:"https://i.imgur.com/m8M4La8.jpeg",
      kuda:"https://i.imgur.com/pghuukx.jpeg",
      kambing:"https://i.imgur.com/Pm4nlaZ.jpeg",
      monyet:"https://i.imgur.com/6hwop24.jpeg",
      ayam:"https://i.imgur.com/Z1NZ722.jpeg",
      anjing:"https://i.imgur.com/hAFz1Rj.jpeg"
    },
    purple:{
      tikus:"https://i.imgur.com/f5lKOaU.jpeg",
      kerbau:"https://i.imgur.com/osyzwdG.jpeg",
      harimau:"https://i.imgur.com/w6dBauj.jpeg",
      babi:"https://i.imgur.com/P8lT1zi.jpeg",
      kelinci:"https://i.imgur.com/eWt45cp.jpeg",
      naga:"https://i.imgur.com/WaFUdQB.jpeg",
      ular:"https://i.imgur.com/SHWYlcA.jpeg",
      kuda:"https://i.imgur.com/TFvqDyj.jpeg",
      kambing:"https://i.imgur.com/QUp4WRR.jpeg",
      monyet:"https://i.imgur.com/IjOYOZW.jpeg",
      ayam:"https://i.imgur.com/91tWS6q.jpeg",
      anjing:"https://i.imgur.com/CPO7hcQ.jpeg"
    }
  };
  const shioLogoCache = {};
  Object.entries(SHIO_LOGOS).forEach(([themeKey,logoMap])=>{
    Object.entries(logoMap).forEach(([key,url])=>{
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = ()=>{ shioLogoCache[`${themeKey}:${key}`] = img; draw(); };
      img.src = url;
    });
  });
  const defaultWallpaper = "https://i.imgur.com/iJxOHwA.jpeg";
  const syairThemes = {
    gold:{
      key:"gold",
      label:"EMAS",
      template:"https://i.imgur.com/pMgzjwR.jpeg",
      wallpaper:null,
      generatorTitle:"GENERATOR SYAIR",
      controlTitle:"⚜️ PENGATURAN SYAIR",
      vars:{
        "--syair-page-bg":"none",
        "--syair-overlay-start":"rgba(10,7,4,.12)",
        "--syair-overlay-end":"rgba(10,7,4,.12)",
        "--syair-preview-bg":"linear-gradient(145deg,rgba(25,20,16,.98),rgba(45,31,19,.98))",
        "--syair-preview-border":"rgba(225,177,85,.32)",
        "--syair-canvas-wrap-bg":"#090705",
        "--syair-canvas-wrap-border":"rgba(225,177,85,.20)",
        "--syair-panel-bg":"linear-gradient(180deg,#2b1a10 0%,#120b07 100%)",
        "--syair-panel-border":"rgba(225,177,85,.42)",
        "--syair-kicker":"#e9bb62",
        "--syair-head":"#fff4d9",
        "--syair-live-bg":"rgba(69,218,134,.10)",
        "--syair-live-border":"rgba(69,218,134,.34)",
        "--syair-live-color":"#a4f5c3",
        "--syair-title":"#ffe2a5",
        "--syair-label":"#f6dca6",
        "--syair-title-divider":"rgba(225,177,85,.22)",
        "--syair-input-border":"rgba(225,177,85,.40)",
        "--syair-input-bg":"#fff9ef",
        "--syair-input-color":"#24160a",
        "--syair-primary-start":"#f4cd70",
        "--syair-primary-end":"#ba792d",
        "--syair-primary-text":"#281508",
        "--syair-secondary-bg":"#2d2925",
        "--syair-secondary-border":"rgba(225,177,85,.34)",
        "--syair-secondary-text":"#fff6e4",
        "--syair-tip":"#d6b988"
      }
    },
    blue:{
      key:"blue",
      label:"BIRU",
      template:"https://i.imgur.com/Sqrmnx8.jpeg",
      wallpaper:null,
      generatorTitle:"GENERATOR SYAIR",
      controlTitle:"⚜️ PENGATURAN SYAIR",
      vars:{
        "--syair-page-bg":"none",
        "--syair-overlay-start":"rgba(6,14,35,.16)",
        "--syair-overlay-end":"rgba(6,14,35,.16)",
        "--syair-preview-bg":"linear-gradient(145deg,rgba(13,23,54,.96),rgba(20,43,98,.94))",
        "--syair-preview-border":"rgba(116,191,255,.34)",
        "--syair-canvas-wrap-bg":"#081229",
        "--syair-canvas-wrap-border":"rgba(116,191,255,.24)",
        "--syair-panel-bg":"linear-gradient(180deg,#123363 0%,#0a1835 100%)",
        "--syair-panel-border":"rgba(116,191,255,.38)",
        "--syair-kicker":"#9fd7ff",
        "--syair-head":"#eef8ff",
        "--syair-live-bg":"rgba(99,210,255,.14)",
        "--syair-live-border":"rgba(99,210,255,.36)",
        "--syair-live-color":"#c5efff",
        "--syair-title":"#d6ecff",
        "--syair-label":"#cbe7ff",
        "--syair-title-divider":"rgba(116,191,255,.22)",
        "--syair-input-border":"rgba(116,191,255,.34)",
        "--syair-input-bg":"#f4fbff",
        "--syair-input-color":"#0f2348",
        "--syair-primary-start":"#8fe1ff",
        "--syair-primary-end":"#2f69f4",
        "--syair-primary-text":"#07152c",
        "--syair-secondary-bg":"#15396f",
        "--syair-secondary-border":"rgba(143,225,255,.32)",
        "--syair-secondary-text":"#effbff",
        "--syair-tip":"#b8dcff"
      }
    },
    purple:{
      key:"purple",
      label:"MERAH UNGU",
      template:"https://i.imgur.com/wwNIxAC.jpeg",
      wallpaper:null,
      generatorTitle:"GENERATOR SYAIR",
      controlTitle:"⚜️ PENGATURAN SYAIR",
      vars:{
        "--syair-page-bg":"none",
        "--syair-overlay-start":"rgba(30,6,26,.14)",
        "--syair-overlay-end":"rgba(30,6,26,.14)",
        "--syair-preview-bg":"linear-gradient(145deg,rgba(69,9,42,.95),rgba(102,24,93,.94))",
        "--syair-preview-border":"rgba(255,136,188,.34)",
        "--syair-canvas-wrap-bg":"#210612",
        "--syair-canvas-wrap-border":"rgba(255,136,188,.22)",
        "--syair-panel-bg":"linear-gradient(180deg,#6b0f3a 0%,#2a0828 100%)",
        "--syair-panel-border":"rgba(255,136,188,.38)",
        "--syair-kicker":"#ffbfd6",
        "--syair-head":"#fff0f7",
        "--syair-live-bg":"rgba(255,174,214,.12)",
        "--syair-live-border":"rgba(255,174,214,.34)",
        "--syair-live-color":"#ffe0ef",
        "--syair-title":"#ffe0ef",
        "--syair-label":"#ffd5e9",
        "--syair-title-divider":"rgba(255,136,188,.22)",
        "--syair-input-border":"rgba(255,136,188,.32)",
        "--syair-input-bg":"#fff7fb",
        "--syair-input-color":"#4b1231",
        "--syair-primary-start":"#ff8db8",
        "--syair-primary-end":"#8a2db9",
        "--syair-primary-text":"#fff6fb",
        "--syair-secondary-bg":"#52113d",
        "--syair-secondary-border":"rgba(255,166,214,.30)",
        "--syair-secondary-text":"#fff1f9",
        "--syair-tip":"#ffd0e4"
      }
    }
  };
  const syairSamples = {
    TIKUS:['Langkah kecil membuka jalan','Angka lama datang perlahan','Jangan lengah melihat putaran','Semoga hoki menyapa kemenangan'],
    KERBAU:['Kerbau tenang berjalan pasti','Angka malam jangan dilalui','Pilih tenang jangan terburu','Semoga rezeki datang padamu'],
    HARIMAU:['Harimau datang membawa tenaga','Lihat pola jangan terbaca buta','Angka pilihan jadi penanda','Semoga malam penuh bahagia'],
    KELINCI:['Kelinci lincah di bawah bulan','Putaran angka jadi pegangan','Simpan sabar dalam pilihan','Semoga hoki hadir perlahan'],
    NAGA:['Naga emas terbang tinggi','Membawa sinyal malam ini','Satukan angka dalam hati','Semoga rezeki datang kembali'],
    ULAR:['Ular diam membaca arah','Angka pilihan jangan menyerah','Lihat jalur dengan cerah','Semoga hasil membawa berkah'],
    KUDA:['Kuda berlari penuh irama','Angka utama jadi bersama','Jangan lupa jaga ritma','Semoga hoki masuk ke rumah'],
    KAMBING:['Kambing santai di bukit pagi','Angka pilihan tetap teliti','Simpan pola di dalam hati','Semoga rezeki menghampiri'],
    MONYET:['Monyet cerdas memilih jalur','Angka putar jangan terukur','Ambil tenang jangan terburu','Semoga malam membawa mujur'],
    AYAM:['Ayam berkokok jadi pertanda','Angka malam hadir bersama','Pilih rapi jangan meraba','Semoga hasil sesuai harapan'],
    ANJING:['Anjing setia menjaga arah','Angka pilihan jangan berubah','Baca pola dengan pasrah','Semoga rezeki makin cerah'],
    BABI:['Babi emas membawa hoki','Angka pilihan jangan ditinggali','Simpan tenang di malam ini','Semoga rezeki datang lagi']
  };
  const state = {
    pasaran:'BANGKOK',
    shio:'NAGA',
    colok:'1234',
    main:'56789',
    bbfs:'1234567',
    syair:syairSamples.NAGA.join('\n'),
    theme:'gold'
  };

  function applyTheme(themeKey,forceRedraw=false){
    const theme = syairThemes[themeKey] || syairThemes.gold;
    state.theme = theme.key;
    try{ localStorage.setItem('syair_generator_theme', theme.key); }catch(e){}
    const page = $s('dashPostinganSyair');
    if(page && theme.vars){
      Object.entries(theme.vars).forEach(([key,val])=>page.style.setProperty(key,val));
    }
    const titleEl = $s('syairGeneratorTitle');
    if(titleEl) titleEl.textContent = theme.generatorTitle || 'GENERATOR SYAIR';
    const controlTitleEl = $s('syairControlTitle');
    if(controlTitleEl) controlTitleEl.textContent = theme.controlTitle || '⚜️ PENGATURAN SYAIR';
    document.querySelectorAll('[data-syair-theme]').forEach(btn=>{
      btn.classList.toggle('active', btn.getAttribute('data-syair-theme')===theme.key);
    });
    if(bg.getAttribute('data-theme') !== theme.key || bg.src !== theme.template){
      bg.setAttribute('data-theme', theme.key);
      bg.src = theme.template;
      return;
    }
    if(forceRedraw) draw();
  }

  function digits(value, length){
    return String(value||'').replace(/\D/g,'').slice(0,length);
  }
  function randomDigits(length){
    let out='';
    while(out.length<length) out += String(Math.floor(Math.random()*9)+1);
    return out;
  }
  function randomSyair(){
    const pool=syairSamples[state.shio] || syairSamples.NAGA;
    const shift=Math.floor(Math.random()*pool.length);
    state.syair=[...pool.slice(shift),...pool.slice(0,shift)].join('\n');
  }
  function syncInputs(){
    $s('syairPasaran').value=state.pasaran;
    $s('syairShio').value=state.shio;
    $s('syairText').value=state.syair;
  }
  function getThemeTextPalette(){
    const palettes = {
      gold:{
        fill:'#f7cd63',
        stroke:'rgba(0,0,0,.92)',
        shadow:'rgba(0,0,0,.95)',
        outline:'#4b2a08',
        gradient:['#d49b36','#fff0b0','#e8bb5b','#a86f1f']
      },
      blue:{
        fill:'#d9f4ff',
        stroke:'#062447',
        shadow:'rgba(0,0,0,.90)',
        outline:'#0a2e57',
        gradient:['#52d0ff','#eefbff','#86cfff','#295fdf']
      },
      purple:{
        fill:'#ffe0f0',
        stroke:'#4c163a',
        shadow:'rgba(0,0,0,.90)',
        outline:'#581641',
        gradient:['#ff7db1','#fff0f8','#d67cff','#842ab6']
      }
    };
    return palettes[state.theme] || palettes.gold;
  }
  function goldText(text,x,y,size,opts={}){
    const palette = getThemeTextPalette();
    ctx.save();
    ctx.textAlign=opts.align||'center';
    ctx.textBaseline='middle';
    ctx.font=`900 ${size}px Arial Black, Arial, sans-serif`;
    ctx.lineWidth=Math.max(2,Math.round(size*.11));
    ctx.strokeStyle=palette.stroke;
    ctx.fillStyle=palette.fill;
    ctx.shadowColor=palette.shadow;
    ctx.shadowBlur=8;
    ctx.strokeText(String(text),x,y);
    ctx.fillText(String(text),x,y);
    ctx.restore();
  }
  function smallGold(text,x,y,size){
    const palette = getThemeTextPalette();
    ctx.save();
    ctx.textAlign='center';ctx.textBaseline='middle';
    ctx.font=`900 ${size}px Arial, sans-serif`;
    ctx.fillStyle=palette.fill;ctx.strokeStyle=palette.stroke;
    ctx.lineWidth=3;ctx.shadowColor=palette.shadow;ctx.shadowBlur=6;
    ctx.strokeText(String(text),x,y);ctx.fillText(String(text),x,y);
    ctx.restore();
  }
  function frameGoldText(text,x,y,size){
    const palette = getThemeTextPalette();
    ctx.save();
    ctx.textAlign='center';
    ctx.textBaseline='middle';
    ctx.font=`900 ${size}px Arial Black, Arial, sans-serif`;
    ctx.lineWidth=Math.max(2,Math.round(size*.10));
    ctx.strokeStyle=palette.outline;
    ctx.shadowColor=palette.shadow;
    ctx.shadowBlur=7;
    ctx.strokeText(String(text),x,y);
    const grad=ctx.createLinearGradient(x-120,y-12,x+120,y+12);
    grad.addColorStop(0,palette.gradient[0]);
    grad.addColorStop(.45,palette.gradient[1]);
    grad.addColorStop(.7,palette.gradient[2]);
    grad.addColorStop(1,palette.gradient[3]);
    ctx.fillStyle=grad;
    ctx.fillText(String(text),x,y);
    ctx.restore();
  }
  function fitText(text,maxWidth,startSize){
    let size=startSize;
    ctx.font=`900 ${size}px Arial Black, Arial`;
    while(ctx.measureText(text).width>maxWidth && size>16){
      size-=1;ctx.font=`900 ${size}px Arial Black, Arial`;
    }
    return size;
  }
  function boxCenter(box){
    return [(box.x1+box.x2)/2,(box.y1+box.y2)/2];
  }
  function getThemeLayout(){
    const layouts = {
      gold:{
        colokCoords:[[150,855],[150,960],[262,855],[262,960]],
        colokSize:27,
        mainCoords:[[830,862],[905,862],[869,928],[830,990],[905,990]],
        mainSize:27,
        bbfsCenters:[[318,1137],[395,1137],[465,1137],[540,1137],[610,1137],[685,1137],[760,1137]],
        bbfsSize:25,
        syairTop:1264,
        syairBottom:1350,
        dateX:545,
        dateY:380,
        pasaranLogoY:530
      },
      blue:{
        /* KHUSUS TEMA BIRU — jangan diubah saat edit tema merah ungu */
        /* Titik tengah kotak template biru */
        /* Kompas biru mengikuti titik yang bos tandai:
           1 = kiri atas, 2 = kanan, 3 = kiri bawah, 4 = kanan bawah */
        /* Tema biru: samakan pola posisi dengan tema emas, di sisi dalam kompas */
        colokCoords:[[150,792],[150,902],[262,792],[262,902]],
        colokSize:30,
        mainCoords:[[830,786],[912,786],[871,857],[830,925],[912,925]],
        mainSize:25,
        bbfsCenters:[[306,1122],[382,1122],[464,1122],[540,1122],[622,1122],[696,1122],[778,1122]],
        bbfsSize:25,
        syairTop:1264,
        syairBottom:1378,
        dateX:542,
        dateY:344,
        pasaranLogoY:520
      },
      purple:{
        /* KHUSUS TEMA MERAH UNGU — posisi independen dari tema biru */
        colokCoords:[[160,822],[160,920],[270,822],[270,920]],
        colokSize:30,
        mainCoords:[[826,822],[900,822],[858,888],[826,950],[900,950]],
        mainSize:25,
        bbfsCenters:[[325,1112],[395,1112],[468,1112],[538,1112],[608,1112],[682,1112],[750,1112]],
        bbfsSize:25,
        syairTop:1236,
        syairBottom:1350,
        dateX:542,
        dateY:460,
        pasaranLogoY:600
      }
    };
    return layouts[state.theme] || layouts.gold;
  }
  function draw(){
    if(!bg.complete || !bg.naturalWidth) return;
    ctx.clearRect(0,0,1080,1440);
    ctx.drawImage(bg,0,0,1080,1440);

    const layout = getThemeLayout();

    // Logo pasaran + nama pasaran pada papan atas
    const date = new Date().toLocaleDateString('id-ID',{day:'2-digit',month:'long',year:'numeric'});
    const pasaranLogo = pasaranLogoCache[String(state.pasaran || '').toUpperCase()];
    if(pasaranLogo){
      const iw = pasaranLogo.naturalWidth || pasaranLogo.width;
      const ih = pasaranLogo.naturalHeight || pasaranLogo.height;

      // Tanggal dinaikkan ke tengah area dalam kotak atas
      const dateSize=fitText(date.toUpperCase(),235,27);
      frameGoldText(date.toUpperCase(),layout.dateX,layout.dateY,dateSize);

      // Logo pasaran dipindahkan ke bawah tanggal, di area kosong sebelum lingkaran shio
      const maxW = 270, maxH = 92;
      const scale = Math.min(maxW / iw, maxH / ih);
      const dw = iw * scale, dh = ih * scale;
      ctx.save();
      ctx.shadowColor = 'rgba(0,0,0,.82)';
      ctx.shadowBlur = 10;
      ctx.drawImage(pasaranLogo, 540 - (dw/2), (layout.pasaranLogoY || 482) - (dh/2), dw, dh);
      ctx.restore();
    }else{
      const topSize=fitText(state.pasaran,470,36);
      goldText(state.pasaran,540,290,topSize);
      const dateSize=fitText(date.toUpperCase(),235,27);
      frameGoldText(date.toUpperCase(),layout.dateX,layout.dateY,dateSize);
    }

    // Logo shio: dikembalikan ke posisi tengah lingkaran, lalu dibesarkan sedikit secara rapi
    const shioKey = String(state.shio || '').toLowerCase().trim();
    const shioThemeKey = state.theme === 'purple' ? 'purple' : (state.theme === 'blue' ? 'blue' : 'gold');
    const shioLogo = shioLogoCache[`${shioThemeKey}:${shioKey}`] || shioLogoCache[`gold:${shioKey}`];
    if(shioLogo){
      const themeShioPlacement = {
        gold:{ centerX:542, centerY:870, offsetX:0, offsetY:0, radius:160 },
        blue:{ centerX:540, centerY:824, offsetX:0, offsetY:0 },
        purple:{ centerX:538, centerY:850, offsetX:0, offsetY:0, radius:150 }
      }[state.theme] || { centerX:548, centerY:765, offsetX:0, offsetY:0 };

      const shioCenterX = themeShioPlacement.centerX;
      const shioCenterY = themeShioPlacement.centerY;
      const shioRadius = themeShioPlacement.radius || 140;

      // Penyesuaian halus per tema agar isi logo shio terasa pas di dalam lingkaran.
      // Tema biru: yang diturunkan adalah blok logo shio secara keseluruhan, bukan isi gambarnya saja.
      const themeShioAdjust = {
        gold:{ default:{ offsetX:0, offsetY:-4, extraScale:1.04 } },
        blue:{
          default:{ offsetX:0, offsetY:0, extraScale:1.10 },
          naga:{ offsetX:0, offsetY:0, extraScale:1.20 },
          ayam:{ offsetX:0, offsetY:0, extraScale:1.24 },
          harimau:{ offsetX:0, offsetY:8, extraScale:1.18 }
        },
        purple:{
          default:{ offsetX:0, offsetY:20, extraScale:1.10 },
          ular:{ offsetX:0, offsetY:8, extraScale:1.10 }
        }
      };
      const activeThemeAdjust = themeShioAdjust[state.theme] || themeShioAdjust.gold;
      const shioAdjust = (activeThemeAdjust && activeThemeAdjust[shioKey]) || activeThemeAdjust.default || { offsetX:0, offsetY:0, extraScale:1.04 };

      ctx.save();
      ctx.beginPath();
      ctx.arc(shioCenterX, shioCenterY, shioRadius, 0, Math.PI * 2);
      ctx.closePath();
      ctx.clip();

      const iw = shioLogo.naturalWidth || shioLogo.width;
      const ih = shioLogo.naturalHeight || shioLogo.height;
      const target = 286 * shioAdjust.extraScale;
      const scale = shioAdjust.fit === 'contain'
        ? Math.min(target / iw, target / ih)
        : Math.max(target / iw, target / ih);
      const dw = iw * scale;
      const dh = ih * scale;
      const dx = (shioCenterX - (dw / 2)) + themeShioPlacement.offsetX + shioAdjust.offsetX;
      const dy = (shioCenterY - (dh / 2)) + themeShioPlacement.offsetY + shioAdjust.offsetY;
      ctx.drawImage(shioLogo, dx, dy, dw, dh);
      ctx.restore();

      // Lapisan tipis agar logo menyatu dengan nuansa template
      ctx.save();
      ctx.beginPath();
      ctx.arc(shioCenterX, shioCenterY, shioRadius - 1, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(239,188,74,.48)';
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.restore();
    }

    // Nama shio diturunkan ke bawah logo agar tidak menutupi tengah gambar
    const shioSize=fitText(state.shio,300,34);
    const shioNameY = ({ gold:1020, blue:985, purple:1011 }[state.theme] || 935);
    const shioNameX = ({ gold:540, blue:532, purple:530 }[state.theme] || 540);
    frameGoldText(state.shio,shioNameX,shioNameY,shioSize);


    // Colok Bebas: posisi angka mengikuti tema/template aktif
    const colok=digits(state.colok,4).padEnd(4,'-').split('');
    layout.colokCoords.forEach((p,i)=>frameGoldText(colok[i],p[0],p[1],layout.colokSize));

    // Angka Main: posisi angka mengikuti tema/template aktif
    const main=digits(state.main,5).padEnd(5,'-').split('');
    layout.mainCoords.forEach((p,i)=>frameGoldText(main[i],p[0],p[1],layout.mainSize));

    // BBFS: posisi angka mengikuti tema/template aktif
    const bbfs=digits(state.bbfs,7).padEnd(7,'-').split('');
    layout.bbfsCenters.forEach((p,i)=>frameGoldText(bbfs[i],p[0],p[1],layout.bbfsSize));
    // Syair: hasil gambar selalu memakai 4 baris yang rapi.
    // Kalau user memberi 4 baris dengan Enter, susunan itu dipertahankan.
    // Kalau ditulis berantakan / satu paragraf, teks dibagi rata otomatis menjadi 4 baris.
    function formatSyairFourLines(rawText){
      const typedLines = String(rawText || '')
        .split(/\r?\n/)
        .map(line => line.replace(/\s+/g, ' ').trim())
        .filter(Boolean);

      if(!typedLines.length) return [];

      // Tepat 4 baris dari input: tampilkan sesuai susunan yang ditulis.
      if(typedLines.length === 4) return typedLines;

      const words = typedLines.join(' ').split(/\s+/).filter(Boolean);
      const result = [];
      let cursor = 0;

      for(let i=0; i<4; i++){
        const remainingWords = words.length - cursor;
        const remainingLines = 4 - i;
        if(remainingWords <= 0) break;

        const take = Math.ceil(remainingWords / remainingLines);
        result.push(words.slice(cursor, cursor + take).join(' '));
        cursor += take;
      }

      return result;
    }

    const lines = formatSyairFourLines(state.syair);
    /* Posisi Syair mengikuti tema: biru lebih bawah, emas dan merah ungu tetap normal */
    const syairTop=layout.syairTop;
    const syairBottom=layout.syairBottom;
    const lineGap=31;
    const textBlockHeight=Math.max(0,(lines.length-1)*lineGap);
    const startY=Math.max(
      syairTop,
      Math.min(syairBottom-textBlockHeight,(syairTop+syairBottom-textBlockHeight)/2)
    );
    lines.forEach((line,i)=>{
      const size=fitText(line.toUpperCase(),700,23);
      frameGoldText(line.toUpperCase(),540,startY+(i*lineGap),size);
    });
  }
  function populate(){
    pasarans.forEach(v=>{const o=document.createElement('option');o.value=v;o.textContent=v;$s('syairPasaran').appendChild(o)});
    shios.forEach(v=>{const o=document.createElement('option');o.value=v;o.textContent=v;$s('syairShio').appendChild(o)});
    syncInputs();
  }
  function bind(){
    $s('syairPasaran').addEventListener('change',e=>{state.pasaran=e.target.value;draw()});
    $s('syairShio').addEventListener('change',e=>{state.shio=e.target.value;randomSyair();syncInputs();draw()});
    const syairTextarea = $s('syairText');

    // Saat teks syair ditempel, otomatis dibagi menjadi tepat 4 baris rapi.
    // Teks yang sudah 4 baris tetap dipertahankan seperti susunan semula.
    function normalizePastedSyairToFourLines(rawText){
      const typedLines = String(rawText || '')
        .replace(/\r/g,'')
        .split('\n')
        .map(line => line.replace(/\s+/g,' ').trim())
        .filter(Boolean);

      if(typedLines.length === 4) return typedLines.join('\n');

      const words = typedLines.join(' ').split(/\s+/).filter(Boolean);
      if(!words.length) return '';

      const result = [];
      let cursor = 0;
      for(let i=0;i<4;i++){
        const remainingWords = words.length - cursor;
        const remainingLines = 4 - i;
        if(remainingWords <= 0) break;
        const take = Math.ceil(remainingWords / remainingLines);
        result.push(words.slice(cursor, cursor + take).join(' '));
        cursor += take;
      }
      return result.join('\n');
    }

    syairTextarea.addEventListener('paste',e=>{
      const pasted = (e.clipboardData || window.clipboardData)?.getData('text');
      if(!pasted) return;

      e.preventDefault();
      const formatted = normalizePastedSyairToFourLines(pasted);
      syairTextarea.value = formatted;
      state.syair = formatted;
      draw();
    });

    syairTextarea.addEventListener('input',e=>{state.syair=e.target.value;draw()});
    document.querySelectorAll('[data-syair-theme]').forEach(btn=>{
      btn.addEventListener('click',()=>applyTheme(btn.getAttribute('data-syair-theme'), true));
    });
    $s('syairAcakText').addEventListener('click',()=>{randomSyair();syncInputs();draw()});
    $s('syairAcakSemua').addEventListener('click',()=>{
      state.shio=shios[Math.floor(Math.random()*shios.length)];
      state.pasaran=pasarans[Math.floor(Math.random()*pasarans.length)];
      state.colok=randomDigits(4);state.main=randomDigits(5);state.bbfs=randomDigits(7);randomSyair();syncInputs();draw();
    });
    $s('syairDownload').addEventListener('click',()=>{
      draw();
      const a=document.createElement('a');
      a.download=`syair-${state.pasaran.toLowerCase()}-${Date.now()}.png`;
      a.href=canvas.toDataURL('image/png');a.click();
    });
  }
  populate();bind();
  bg.onload=draw;
  let savedTheme='gold';
  try{ savedTheme = localStorage.getItem('syair_generator_theme') || 'gold'; }catch(e){}
  applyTheme(savedTheme,true);
  window.drawAbsensiSyair=draw;
})();
};
