# Деплой на Vercel

## Что уже подготовлено

Проект готов к деплою как один Vercel-проект с двумя страницами:

- главная статья: `/`
- вторая статья: `/kontrolirovanie-prostranstva-i-planirovki-chast-2`

Файлы для деплоя:

- `package.json` — команды сборки и версия Node.js.
- `package-lock.json` — фиксированные версии зависимостей.
- `vercel.json` — настройки Vercel и rewrite для прямого открытия второй статьи.
- `.gitignore` — что не хранить в репозитории.
- `.vercelignore` — что не отправлять в Vercel при деплое.
- `public/` — все публичные картинки, видео и интерактивные iframe-страницы.
- `src/` — React-код и данные статей.

## Вариант 1. Через GitHub

Это самый удобный вариант для постоянной работы.

1. Создать новый репозиторий на GitHub.
2. Загрузить туда проект `neurodesign-blog`.
3. Открыть Vercel.
4. Нажать `Add New...` -> `Project`.
5. Выбрать GitHub-репозиторий.
6. Проверить настройки:

```text
Framework Preset: Vite
Build Command: npm run build
Output Directory: dist
Install Command: npm install
Node.js Version: 20.x или новее
```

7. Нажать `Deploy`.

После этого каждый новый push в GitHub будет автоматически собираться на Vercel.

## Вариант 2. Через Vercel CLI

Подходит, если нужно быстро задеплоить локально без GitHub.

1. Установить Vercel CLI:

```bash
npm i -g vercel
```

2. Войти в аккаунт:

```bash
vercel login
```

3. Перейти в папку проекта:

```bash
cd /Users/kfay/Documents/Playground/neurodesign-blog
```

4. Сделать первый деплой:

```bash
vercel
```

5. Для продакшн-деплоя:

```bash
vercel --prod
```

## Важные настройки

### Прямые ссылки на статьи

В `vercel.json` добавлен rewrite:

```json
{
  "source": "/kontrolirovanie-prostranstva-i-planirovki-chast-2",
  "destination": "/index.html"
}
```

Это нужно, чтобы при прямом открытии второй статьи Vercel отдавал React-приложение, а не 404.

### Интерактивные схемы

Интерактивные схемы лежат в `public/drag-canvas*`. Их нельзя удалять из `public`, потому что статьи открывают их через iframe.

### Видео и тяжелые ассеты

Все файлы из `public/assets` попадут в деплой. Если сайт начнет весить слишком много, сначала стоит удалить неиспользуемые старые видео из `public/assets`, а затем снова проверить:

```bash
npm run audit:assets
npm run build
```

Отдельный чеклист по весу файлов лежит в `ASSET_AUDIT.md`.

## Перед публикацией

Проверить локально:

```bash
npm install
npm run build
npm run preview
```

Проверить страницы:

```text
/
/kontrolirovanie-prostranstva-i-planirovki-chast-2
```

Если обе страницы открываются локально, проект готов к деплою.
