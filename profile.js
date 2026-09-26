// Профиль, мини-CV и трекер активности с дедлайнами
function renderProfile(){
  const done = Object.keys(applied).length;
  const cells = Array.from({length:42}).map((_,i)=>{
    const lvl = i%7===0?3:(i%3===0?2:(i%5===0?1:0));
    return `<div style="background:${['#182338','#1f3a5f','#2d6fae','#3ea6ff'][lvl]}"></div>`;
  }).join('');
  const upcoming = tasks.map(t=>`<div class="due-item"><span>${t.title.slice(0,26)}${t.title.length>26?'…':''}</span><span class="t">${t.due}</span></div>`).join('');
  document.getElementById('profile').innerHTML = `
    <div class="profile-head"><div class="avatar">${avatarSVG(56)}</div>
      <div><h3>${state.name} (${state.city}) <span class="badge">${state.grade} класс</span></h3><p>Навыки: ${state.skills.join(', ')||'—'}</p></div></div>
    <h2 class="section">Мини-CV — черновик</h2>
    <div class="card">${done===0?'<p style="font-size:12px;color:var(--muted)">Пока пусто — откликнитесь на задачу в ленте.</p>':
      Object.keys(applied).map(i=>`<div class="cv-note">${cvSnippet(tasks[i])}</div>`).join('')}</div>
    <h2 class="section">Трекер и ближайшие дедлайны</h2>
    <div class="card"><div class="grid-cal">${cells}</div><div style="margin-top:10px">${upcoming}</div></div>`;
}
