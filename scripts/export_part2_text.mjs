import fs from "node:fs";
import { articles } from "../src/data/article.js";

const article = articles.find((item) => item.path.includes("chast-2"));

if (!article) {
  throw new Error("Part 2 article was not found");
}

function cleanInline(text) {
  return text
    .replace(/\{\{copy:[^|}]+\|([^}]+)\}\}/g, "$1")
    .replace(/\{\{info:([^}]+)\}\}/g, "($1)")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function promptEntries(section, index) {
  return section.promptsAfter?.[index] ?? [];
}

function captionEntries(section, index) {
  const entries = [];
  const image = section.imagesAfter?.[index];
  const embed = section.embedsAfter?.[index];
  const media = section.mediaAfter?.[index];
  const gallery = section.galleriesAfter?.[index];
  const matrix = section.matricesAfter?.[index];

  if (image?.caption) entries.push(image.caption);
  if (embed?.step || embed?.caption) {
    entries.push([embed.step, embed.caption].filter(Boolean).join(". "));
  }
  if (media?.caption) entries.push(media.caption);
  if (media?.items) {
    for (const item of media.items) {
      if (item.caption) entries.push(item.caption);
    }
  }
  if (gallery?.caption) entries.push(gallery.caption);
  if (gallery?.items) {
    for (const item of gallery.items) {
      if (item.label) entries.push(item.label);
    }
  }
  if (matrix?.columns) entries.push(`Подписи колонок: ${matrix.columns.join(", ")}`);
  return entries.map(cleanInline);
}

const sections = article.sections.map((section) => ({
  id: section.id,
  title: section.title || section.nav || "",
  paragraphs: section.paragraphs.map((paragraph, index) => ({
    text: cleanInline(paragraph),
    captionsAfter: captionEntries(section, index),
    promptsAfter: promptEntries(section, index).map((prompt) => ({
      label: prompt.label || "Prompt",
      text: prompt.text.trim(),
    })),
  })),
}));

const output = {
  title: article.title,
  tag: article.tag,
  date: article.date,
  asideText: article.asideText,
  sections,
};

const json = JSON.stringify(output, null, 2);
const outputPath = process.argv[2];

if (outputPath) {
  fs.writeFileSync(outputPath, json);
} else {
  console.log(json);
}
