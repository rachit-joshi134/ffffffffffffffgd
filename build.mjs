import { access, mkdir, copyFile } from 'node:fs/promises';
// Static site is authored directly in public/. Validate deploy entry point before success.
await access('public/index.html');
await access('public/app.js');
await access('public/styles.css');
await mkdir('public', { recursive: true });
console.log('Build check passed: public/index.html and required assets exist.');
