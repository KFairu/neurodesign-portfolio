# Аудит ассетов перед деплоем

Сайт готов к сборке, но сейчас папка `public` весит около `1.4 GB`. Это важно для Vercel: тяжелый деплой может долго загружаться, медленно собираться или упереться в лимиты проекта.

## Как проверить вес

```bash
npm run audit:assets
```

Команда показывает общий вес `public` и самые тяжелые файлы.

## Что сейчас самое тяжелое

На момент подготовки деплоя самые крупные файлы:

- `public/assets/itogo.png`
- `public/assets/hero-cover-video-kling-110509-scrub.mp4`
- `public/assets/hero-cover-video-hq-scrub.mp4`
- `public/assets/part2/picnic-blender-nbp.png`
- `public/assets/part2/picnic-blender-chatgpt.png`
- `public/assets/part2/picnic-carton-angle.png`
- `public/assets/part2/picnic-carton-refined.png`
- `public/drag-canvas-picnic*/assets/picnic-gemini-output.png`

## Что лучше сделать перед продакшном

1. Оставить в `public` только те ассеты, которые реально используются на страницах.
2. Старые варианты обложек и видео перенести из `public/assets` в архив вне проекта.
3. Большие PNG-фото без прозрачности заменить на WebP или JPG.
4. Видео держать в одном финальном варианте, без старых дублей.
5. После чистки снова выполнить:

```bash
npm run audit:assets
npm run build
```

## Важно

Интерактивные страницы из `public/drag-canvas*` нужны статьям через iframe. Их можно оптимизировать, но нельзя просто удалить, пока они подключены в статье.
