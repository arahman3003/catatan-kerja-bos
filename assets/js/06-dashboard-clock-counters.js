/* KAIZOKUGARI DASHBOARD COMIC V2 — live clock + counters */
(function(){
  function kdUpdateClock(){
    const clock=document.getElementById('kdDashboardClock');
    const date=document.getElementById('kdDashboardDate');
    if(!clock||!date)return;
    const now=new Date();
    clock.textContent=new Intl.DateTimeFormat('id-ID',{
      timeZone:'Asia/Jakarta',hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false
    }).format(now).replace(/\./g,':');
    const dateText=new Intl.DateTimeFormat('id-ID',{
      timeZone:'Asia/Jakarta',weekday:'long',day:'2-digit',month:'long',year:'numeric'
    }).format(now);
    date.textContent=dateText.replace(/^./,c=>c.toUpperCase());
  }
  kdUpdateClock();
  setInterval(kdUpdateClock,1000);

  function kdSet(id,value){const el=document.getElementById(id);if(el)el.textContent=String(value ?? 0)}
  function kdStartFirebaseCounters(){
    if(!window.firebase || !firebase.apps || !firebase.apps.length)return false;
    try{
      firebase.database().ref('notepadKerjaBoss').on('value',snap=>kdSet('kdStatNotes',snap.numChildren()));
      firebase.database().ref('gambarKerjaBoss').on('value',snap=>kdSet('kdStatImages',snap.numChildren()));
      firebase.database().ref('jadwalTogelKerjaBoss').on('value',snap=>kdSet('kdStatMarkets',snap.numChildren()));
      firebase.database().ref('usersKerjaBoss').on('value',snap=>{
        const users=snap.val()||{};
        const active=Object.values(users).filter(u=>u && u.status!=='disabled').length;
        kdSet('kdStatUsers',active);
      });
      return true;
    }catch(err){console.warn('Dashboard counter init gagal',err);return false}
  }
  if(!kdStartFirebaseCounters()){
    window.addEventListener('load',()=>setTimeout(kdStartFirebaseCounters,500),{once:true});
  }
})();
