
import { access, mkdir, copyFile } from 'node:fs/promises';

// Validate source files in project root
await access('index.html');
await access('app.js');
await access('styles.css');

// Create Netlify publish folder and copy website assets
await mkdir('public', { recursive: true });

await copyFile('index.html', 'public/index.html');
await copyFile('app.js', 'public/app.js');
await copyFile('styles.css', 'public/styles.css');

console.log('Build successful: website copied to public/.');

