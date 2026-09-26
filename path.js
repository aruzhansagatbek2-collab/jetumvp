// Путь роста — иллюстрированное дерево, узлы кликабельны
const treePositions = [
  {x:50, y:92}, {x:38, y:76}, {x:62, y:62}, {x:35, y:46}, {x:65, y:32}, {x:30, y:18}, {x:60, y:6}
];

function treeSVG(){
  return `<svg viewBox="0 0 100 100" style="position:absolute;inset:0;width:100%;height:100%;z-index:1">
    <path d="M50,100 C50,80 48,60 50,6" stroke="#3a5a45" stroke-width="3" fill="none"/>
    <path d="M50,76 C44,72 40,68 38,64" stroke="#3a5a45" stroke-width="2" fill="none"/>
    <path d="M50,62 C56,58 60,54 62,50" stroke="#3a5a45" stroke-width="2" fill="none"/>
    <path d="M50,46 C42,42 38,38 35,34" stroke="#3a5a45" stroke-width="2" fill="none"/>
    <path d="M50,32 C58,28 62,24 65,20" stroke="#3a5a45" stroke-width="2" fill="none"/>
    <path d="M50,18 C40,14 34,10 30,6" stroke="#3a5a45" stroke-width="2" fill="none"/>
    <path d="M50,6 C56,3 60,1 60,-4" stroke="#3a5a45" stroke-width="2" fill="none"/>
  </svg>`;
}

function renderPath(){
  const html = stages.map((s,i)=>{
    const done = state.points>=s.need;
    const isCurrentTop = stages.filter(x=>state.points>=x.need).length-1===i;
    const cls = done ? (isCurrentTop?'current':'done') : '';
    const pos = treePositions[i];
    return `<div class="tree-node ${cls}" style="left:${pos.x}%;top:${pos.y}%" onclick="this.classList.toggle('open')">
      <h4>${s.title}</h4><p>${s.desc}${s.need>0?` · ${s.need} 🪙`:''}</p>
      <div class="detail">${s.detail}</div></div>`;
  }).join('');
  document.getElementById('path').innerHTML = `<h2 class="section">Твой путь роста</h2>
    <div class="tree-wrap">${treeSVG()}${html}</div>`;
}
