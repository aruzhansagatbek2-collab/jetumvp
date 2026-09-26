// Общее состояние приложения, мок-данные и регистрация
const state = { name:"", city:"", grade:"", skills:[], points:150, streak:4 };
let applied = {}, owned = {}, equipped = {};

const tasks = [
  {org:"НКО «Дала Көмек»", title:"Telegram-бот для приёма заявок волонтёров", tags:["Python","Social"], match:95, mentor:"Есть куратор от НКО", reward:40, due:"24.09, 14:00"},
  {org:"Кофейня «Buta»", title:"Мини-аналитика продаж в Google Sheets", tags:["Data","Excel"], match:88, mentor:"Есть куратор от бизнеса", reward:30, due:"27.09, 17:00"},
  {org:"AGIS Alumni Network", title:"Вебинар: как оформить портфолио для гранта", tags:["Webinar"], match:92, mentor:"Спикер: выпускник-грантополучатель", reward:15, due:"28.09, 17:00"}
];

const stages = [
  {title:"1. Семечко", desc:"Регистрация", need:0, detail:"Профиль создан — путь начался."},
  {title:"2. Росток", desc:"Первый отклик", need:40, detail:"Откликнись на задачу в ленте."},
  {title:"3. Листик", desc:"Задача подтверждена", need:70, detail:"Куратор подтвердил результат."},
  {title:"4. Молодое дерево", desc:"CV собрано", need:100, detail:"Собран блок Social Impact CV."},
  {title:"5. Крепкое дерево", desc:"3 задачи", need:130, detail:"Три подтверждённых кейса в портфолио."},
  {title:"6. Зрелое дерево", desc:"Грант найден", need:160, detail:"Finance Navigator подобрал грант."},
  {title:"7. Лес возможностей", desc:"Заявка подана", need:200, detail:"Первая заявка на финансирование отправлена."}
];

const skillData = {
  Python:{color:"var(--blue)", week:[2,3,3,4,5,6], month:[1,2,4,5,7,9], year:[0,2,5,7,10,14]},
  "Data Science":{color:"var(--gold)", week:[1,1,2,2,3,3], month:[0,1,2,3,4,6], year:[0,1,3,5,8,11]},
  "Social Impact":{color:"var(--good)", week:[1,2,2,3,4,5], month:[1,3,4,6,8,10], year:[0,2,4,7,9,13]}
};
let period = "week";

const shopItems = [
  {name:"Пиджак «Эксперт»", price:100, key:"jacket", color:"#2d6fae"},
  {name:"Кепка JETU", price:80, key:"hat", color:"#ffc45a"},
  {name:"Рюкзак-путешественник", price:120, key:"backpack", color:"#38c793"}
];

function cvSnippet(t){
  return `«Разработал(а) решение «${t.title}» для ${t.org}, применив навыки: ${t.tags.join(", ")}. Задача подтверждена организацией.» — добавлено в Social Impact CV.`;
}

// Единая SVG-иллюстрация аватара — переиспользуется в шапке, профиле и магазине
function avatarSVG(size){
  const jacket = owned.jacket && equipped.jacket ? shopItems[0].color : "#334565";
  const hat = owned.hat && equipped.hat;
  const backpack = owned.backpack && equipped.backpack;
  return `<svg width="${size}" height="${size}" viewBox="0 0 100 120">
    ${backpack?'<rect x="18" y="55" width="14" height="35" rx="6" fill="#38c793"/>':''}
    <rect x="30" y="60" width="40" height="45" rx="10" fill="${jacket}"/>
    <circle cx="50" cy="35" r="20" fill="#e9b98a"/>
    ${hat?`<rect x="30" y="14" width="40" height="12" rx="6" fill="${shopItems[1].color}"/>`:''}
  </svg>`;
}

function updateStats(){
  document.getElementById('pointsVal').innerText = state.points;
  document.getElementById('streakVal').innerText = state.streak;
  document.getElementById('avatarSlot').innerHTML = avatarSVG(36);
}

function finishRegistration(){
  state.name = document.getElementById('regName').value || "Гость";
  state.city = document.getElementById('regCity').value || "—";
  state.grade = document.getElementById('regGrade').value || "—";
  document.getElementById('authScreen').style.display = 'none';
  renderFeed();
}
document.getElementById('regSkills').addEventListener('click', e=>{
  if(e.target.classList.contains('tag')){
    e.target.classList.toggle('sel');
    const s = e.target.dataset.skill;
    state.skills = state.skills.includes(s) ? state.skills.filter(x=>x!==s) : [...state.skills, s];
  }
});
