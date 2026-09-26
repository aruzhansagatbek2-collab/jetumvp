// Магазин — покупка и экипировка предметов для аватара
function renderShop(){
  document.getElementById('shop').innerHTML = `
    <div class="avatar-preview">${avatarSVG(110)}</div>
    <h2 class="section">Магазин — трать очки за задачи</h2>
    ${shopItems.map(it=>{
      const isOwned = owned[it.key], isEq = equipped[it.key];
      const label = isEq ? 'Снять' : (isOwned ? 'Надеть' : 'Купить · '+it.price+' 🪙');
      return `<div class="shop-item"><div class="info">${it.name}${!isOwned?`<div class="price">🪙 ${it.price}</div>`:''}</div>
        <button class="buy ${isEq?'equipped':(isOwned?'owned':'')}" onclick="buyOrEquip('${it.key}')">${label}</button></div>`;
    }).join('')}`;
}
function buyOrEquip(key){
  const it = shopItems.find(x=>x.key===key);
  if(!owned[key]){
    if(state.points < it.price) return;
    state.points -= it.price; owned[key]=true; equipped[key]=true;
  } else {
    equipped[key] = !equipped[key];
  }
  renderShop(); updateStats();
}
