// Дашборд навыков — графики по Python / Data Science / Social Impact
function sparkline(points,color){
  const w=260,h=44,max=Math.max(...points,1);
  const step=w/(points.length-1);
  const d=points.map((pt,i)=>`${i===0?'M':'L'}${i*step},${h-(pt/max)*h}`).join(' ');
  return `<svg viewBox="0 0 ${w} ${h}" style="width:100%;height:44px"><path d="${d}" fill="none" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
}
function renderDash(){
  document.getElementById('dash').innerHTML = `<div class="card">
    <div class="chart-head"><h2 class="section" style="margin:0">Дашборд навыков</h2>
      <div class="period">
        <button data-p="week" class="${period==='week'?'active':''}">Неделя</button>
        <button data-p="month" class="${period==='month'?'active':''}">Месяц</button>
        <button data-p="year" class="${period==='year'?'active':''}">Год</button>
      </div></div>
    ${Object.entries(skillData).map(([name,d])=>`
      <div class="skill-name"><span class="dotc" style="background:${d.color}"></span>${name}</div>
      ${sparkline(d[period], d.color)}
    `).join('')}
  </div>`;
  document.querySelectorAll('.period button').forEach(b=>b.addEventListener('click',()=>{period=b.dataset.p; renderDash();}));
}
