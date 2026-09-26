// Навигация и первичный рендер
document.querySelectorAll('nav button, [data-tab]').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const tab = btn.dataset.tab;
    if(!tab) return;
    document.querySelectorAll('nav button').forEach(b=>b.classList.remove('active'));
    const navBtn = document.querySelector(`nav button[data-tab="${tab}"]`);
    if(navBtn) navBtn.classList.add('active');
    ['feed','path','dash','profile','shop','streak'].forEach(t=>{
      document.getElementById(t).style.display = t===tab ? 'block':'none';
    });
    if(tab==='path') renderPath();
    if(tab==='dash') renderDash();
    if(tab==='profile') renderProfile();
    if(tab==='shop') renderShop();
    if(tab==='streak') renderStreak();
  });
});
renderFeed();
