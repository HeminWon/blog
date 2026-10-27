// Keep Hexo directory URLs alongside Astro's flat HTML output.
import { readdir, mkdir, copyFile } from 'node:fs/promises';
import { join } from 'node:path';
async function visit(dir) {
 for (const entry of await readdir(dir, { withFileTypes: true })) {
  const path = join(dir, entry.name);
  if (entry.isDirectory()) await visit(path);
  else if (entry.name.endsWith('.html') && entry.name !== 'index.html') {
   // Article permalinks are already correct; only list routes need directory aliases.
   if (dir === 'dist' && ['archives.html','thoughts.html','tech.html','gallery.html'].includes(entry.name) || /^(?:\d{4}|\d{2})\.html$/.test(entry.name) && dir.startsWith('dist/archives') || dir.startsWith('dist/categories') || dir.startsWith('dist/tags')) {
    const target = path.slice(0, -5);
    await mkdir(target, { recursive: true });
    await copyFile(path, join(target, 'index.html'));
   }
  }
 }
}
await visit('dist');
