import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
test('static entry points exist', async()=>{for(const p of ['public/index.html','public/app.js','public/styles.css','netlify.toml']) await readFile(new URL('../'+p,import.meta.url));assert.ok(true)});
test('seed contains 100 drivers', async()=>{const t=await readFile(new URL('../netlify/functions/seed.json',import.meta.url),'utf8');const d=JSON.parse(t);assert.equal(d.drivers.length,100);assert.ok(d.drivers.some(x=>x.name==='Rachit Joshi'));assert.ok(d.drivers.some(x=>x.name==='Elena Castillo'));});
