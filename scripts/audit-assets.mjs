import { readdir, stat } from "node:fs/promises";
import path from "node:path";

const publicDir = path.resolve("public");
const limit = Number(process.argv[2] || 30);

async function collectFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return collectFiles(fullPath);
      }

      const fileStat = await stat(fullPath);
      return [{ path: fullPath, size: fileStat.size }];
    }),
  );

  return files.flat();
}

function formatSize(bytes) {
  const units = ["B", "KB", "MB", "GB"];
  let value = bytes;
  let unitIndex = 0;

  while (value >= 1024 && unitIndex < units.length - 1) {
    value /= 1024;
    unitIndex += 1;
  }

  return `${value.toFixed(value >= 10 || unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`;
}

try {
  const files = await collectFiles(publicDir);
  const total = files.reduce((sum, file) => sum + file.size, 0);
  const largest = files.sort((a, b) => b.size - a.size).slice(0, limit);

  console.log(`public total: ${formatSize(total)}`);
  console.log(`largest ${largest.length} files:`);

  for (const file of largest) {
    console.log(`${formatSize(file.size).padStart(8)}  ${path.relative(process.cwd(), file.path)}`);
  }
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
