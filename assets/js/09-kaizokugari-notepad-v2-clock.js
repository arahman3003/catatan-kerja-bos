(function(){
  function updateKn2Clock(){
    var now=new Date();
    var tz='Asia/Jakarta';
    var timeEl=document.getElementById('kn2ClockTime');
    var dateEl=document.getElementById('kn2ClockDate');
    if(timeEl) timeEl.textContent=new Intl.DateTimeFormat('id-ID',{timeZone:tz,hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).format(now).replace(/\./g,':');
    if(dateEl) dateEl.textContent=new Intl.DateTimeFormat('id-ID',{timeZone:tz,weekday:'long',day:'2-digit',month:'long',year:'numeric'}).format(now);
    var parts=new Intl.DateTimeFormat('en-GB',{timeZone:tz,hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false}).formatToParts(now);
    var obj={}; parts.forEach(function(p){obj[p.type]=p.value});
    var h=Number(obj.hour||0)%12, m=Number(obj.minute||0), s=Number(obj.second||0);
    var he=document.getElementById('kn2ClockHour'), me=document.getElementById('kn2ClockMinute'), se=document.getElementById('kn2ClockSecond');
    if(he) he.style.transform='rotate('+(h*30+m*.5-90)+'deg)';
    if(me) me.style.transform='rotate('+(m*6+s*.1-90)+'deg)';
    if(se) se.style.transform='rotate('+(s*6-90)+'deg)';
  }
  updateKn2Clock(); setInterval(updateKn2Clock,1000);
})();
