# JETU — MVP (прототип для хакатона VentureHack)

Демонстрирует ключевой пайплайн: **регистрация → курируемая задача от организации → отклик в один клик → авто-генерация записи Social Impact CV → трекер активности**, плюс геймификацию: очки, иллюстрированное дерево роста (7 стадий), отдельный экран стрика с растущим растением, дашборд навыков с графиками и магазин с рабочей экипировкой аватара.

## Структура проекта

```
index.html      — разметка экранов
style.css       — все стили
state.js        — данные, состояние приложения, регистрация
feed.js         — лента задач и отклик
profile.js      — профиль, мини-CV, трекер
path.js         — дерево роста (геймификация)
dashboard.js    — графики по навыкам
shop.js         — магазин и экипировка аватара
streak.js       — экран стрика с растением
main.js         — навигация между экранами
```

## Как запустить

Открыть `index.html` в браузере, либо включить GitHub Pages для репозитория (Settings → Pages → main branch, папка `/`).

## Что реально работает, а что — мок

- **Реально работает:** вся навигация, состояние очков/заявок, обновление профиля, трекера, дерева и магазина — на чистом JS.
- **Замокано для демо:** текст задач и генерация CV — заготовленный шаблон (`cvSnippet()` в `state.js`), а не вызов модели. Для полной версии — запрос к Claude/GPT API.
- **Курируемая база задач:** 3 примера в `state.js`. Для пилота — таблица/БД от 2-3 партнёрских организаций.

## Как выложить на GitHub через терминал (macOS) — 10 коммитов

Откройте Terminal, перейдите в папку с файлами:

```bash
cd ~/Downloads/jetu-mvp   # путь замените на свой
git init
git branch -M main
```

Дальше — коммитим файл за файлом, чтобы история отражала реальную сборку продукта:

```bash
# 1. Инициализация репозитория
echo "node_modules/" > .gitignore
git add .gitignore
git commit -m "chore: init repository"

# 2. README
git add README.md
git commit -m "docs: add README with architecture and run instructions"

# 3. Каркас приложения
git add index.html style.css
git commit -m "feat: add app shell and base styles"

# 4. Состояние и регистрация
git add state.js
git commit -m "feat: add app state, mock data, and registration flow"

# 5. Лента задач
git add feed.js
git commit -m "feat: add task feed with match% and apply-to-CV flow"

# 6. Профиль и трекер
git add profile.js
git commit -m "feat: add profile, mini-CV, and activity tracker"

# 7. Дерево роста
git add path.js
git commit -m "feat: add gamified growth path (tree visualization)"

# 8. Дашборд
git add dashboard.js
git commit -m "feat: add skills dashboard with charts"

# 9. Магазин
git add shop.js
git commit -m "feat: add avatar shop with equip mechanic"

# 10. Стрик + навигация
git add streak.js main.js
git commit -m "feat: add streak screen and wire up navigation"
```

Проверить историю:

```bash
git log --oneline
```

Создать репозиторий на GitHub (через сайт, кнопка New repository, без README/gitignore — они уже есть), затем отправить:

```bash
git remote add origin https://github.com/<ваш-аккаунт>/jetu-mvp.git
git push -u origin main
```

## Архитектура для полной версии

```
Frontend (этот же код или React) → Backend (Node/Express)
                                     ├── БД задач и профилей (Postgres/Firebase)
                                     ├── Модуль AI (Claude API) — извлечение тегов и генерация CV
                                     └── Finance Navigator — матчинг профиля с базой грантов
```

## Roadmap после хакатона

См. основной pitch deck — блок «Roadmap 12-18 месяцев».
