// Лента курируемых задач + отклик в один клик
function renderFeed(){
  document.getElementById('feed').innerHTML = '<h2 class="section">Курируемые задачи и менторы под ваш профиль</h2>' +
    tasks.map((t,i)=>`
      <div class="card">
        <div class="top"><h3>${t.title}</h3><div class="match">${t.match}% match</div></div>
        <div class="meta">${t.org} · ${t.mentor} · до ${t.due}</div>
        <div class="tags">${t.tags.map(g=>`<span class="tag">${g}</span>`).join('')}</div>
        <button class="apply ${applied[i]?'done':''}" onclick="apply(${i})">${applied[i]?'✓ Отклик отправлен':'Откликнуться · +'+t.reward+' 🪙'}</button>
      </div>`).join('');
  updateStats();
}
function apply(i){
  if(applied[i]) return;
  applied[i] = true; state.points += tasks[i].reward;
  renderFeed();
  setTimeout(()=>{
    document.getElementById('modalTitle').innerText = `+${tasks[i].reward} 🪙 · Черновик CV сгенерирован`;
    document.getElementById('modalText').innerText = cvSnippet(tasks[i]);
    document.getElementById('modalBg').classList.add('show');
  }, 400);
}
function closeModal(){ document.getElementById('modalBg').classList.remove('show'); }
