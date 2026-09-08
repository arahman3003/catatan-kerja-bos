/* extracted former onclick handlers */
(function(){
function bindKaizoClicks(){
document.querySelectorAll('[data-kaizo-click="kaizo-click-01"]').forEach(function(el){
el.addEventListener('click',function(event){var f=new Function('event',"openPage('pk-cs')");var r=f.call(this,event);if(r===false){event.preventDefault();event.stopPropagation();}});
});
document.querySelectorAll('[data-kaizo-click="kaizo-click-02"]').forEach(function(el){
el.addEventListener('click',function(event){var f=new Function('event',"openPage('notepad')");var r=f.call(this,event);if(r===false){event.preventDefault();event.stopPropagation();}});
});
document.querySelectorAll('[data-kaizo-click="kaizo-click-03"]').forEach(function(el){
el.addEventListener('click',function(event){var f=new Function('event',"openPage('gambar')");var r=f.call(this,event);if(r===false){event.preventDefault();event.stopPropagation();}});
});
document.querySelectorAll('[data-kaizo-click="kaizo-click-04"]').forEach(function(el){
el.addEventListener('click',function(event){var f=new Function('event',"openPage('prediksi-togel')");var r=f.call(this,event);if(r===false){event.preventDefault();event.stopPropagation();}});
});
document.querySelectorAll('[data-kaizo-click="kaizo-click-05"]').forEach(function(el){
el.addEventListener('click',function(event){var f=new Function('event',"openPage('jadwal-togel')");var r=f.call(this,event);if(r===false){event.preventDefault();event.stopPropagation();}});
});
document.querySelectorAll('[data-kaizo-click="kaizo-click-06"]').forEach(function(el){
el.addEventListener('click',function(event){var f=new Function('event',"document.getElementById('postinganDropdownBtn')?.click()");var r=f.call(this,event);if(r===false){event.preventDefault();event.stopPropagation();}});
});
document.querySelectorAll('[data-kaizo-click="kaizo-click-07"]').forEach(function(el){
el.addEventListener('click',function(event){var f=new Function('event',"document.getElementById('pkcsSearchInput').dispatchEvent(new Event('input',{bubbles:true}))");var r=f.call(this,event);if(r===false){event.preventDefault();event.stopPropagation();}});
});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',bindKaizoClicks);else bindKaizoClicks();
})();
