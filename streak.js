// Отдельный экран стрика — растение растёт вместе со стриком
function plantSVG(streak){
  const stage = streak>=14?3 : streak>=7?2 : streak>=3?1 : 0;
  const plants = [
    `<circle cx="50" cy="80" r="4" fill="#8a6b4a"/>`,
    `<path d="M50,80 L50,68" stroke="#38c793" stroke-width="3"/><ellipse cx="46" cy="66" rx="6" ry="3" fill="#38c793"/>`,
    `<path d="M50,80 L50,55" stroke="#2e8b5c" stroke-width="4"/><ellipse cx="43" cy="58" rx="9" ry="4" fill="#38c793"/><ellipse cx="57" cy="52" rx="9" ry="4" fill="#38c793"/>`,
    `<path d="M50,80 L50,35" stroke="#2e8b5c" stroke-width="5"/><ellipse cx="38" cy="45" rx="12" ry="5" fill="#38c793"/><ellipse cx="62" cy="38" rx="12" ry="5" fill="#38c793"/><ellipse cx="50" cy="28" rx="10" ry="5" fill="#38c793"/>`
  ];
  return `<svg viewBox="0 0 100 90" width="140" height="120">
    <ellipse cx="50" cy="82" rx="22" ry="5" fill="#1d2b46"/>
    ${plants[stage]}
  </svg>`;
}
function renderStreak(){
  const days = Array.from({length:12}).map((_,i)=> i < state.streak ? '#ff7a45' : '#182338');
  document.getElementById('streak').innerHTML = `
    <div class="streak-full">
      ${plantSVG(state.streak)}
      <h2>🔥 ${state.streak} дней</h2>
      <p>непрерывной активности</p>
      <div class="streak-days">${days.map(c=>`<div style="background:${c}"></div>`).join('')}</div>
      <p style="margin-top:14px">🪙 ${state.points} очков</p>
    </div>`;
}
