'use strict';
const PREFIX='story-reader-mws13-reading-room-';
const CACHE=PREFIX+"96ba12682d27";
const ROOT=new URL('./',self.location).href;
const CORE=["./", "./10-1.html", "./10-2.html", "./6-1.html", "./6-2.html", "./6-3.html", "./7-1.html", "./8-1.html", "./9-1.html", "./9-2.html", "./app.js", "./assets/adults-reference.webp", "./assets/app-icon-180.png", "./assets/app-icon-192.png", "./assets/app-icon-512.png", "./assets/app-icon-maskable.png", "./assets/ch06-sc01.webp", "./assets/ch06-sc02.webp", "./assets/ch06-sc03.webp", "./assets/ch06-sc04.webp", "./assets/students-reference.webp", "./assets/supporting-reference.webp", "./character-bible.json", "./characters-data.json", "./characters.css", "./characters.html", "./characters.js", "./image-prompts.json", "./index.html", "./manifest.webmanifest", "./parts.js", "./provenance.json", "./pwa.js", "./scene-manifest.json", "./story.json", "./style.css"];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith(PREFIX)&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const r=e.request,u=new URL(r.url);if(r.method!=='GET'||!u.href.startsWith(ROOT))return;e.respondWith(fetch(r).then(async res=>{if(res.ok){const c=await caches.open(CACHE);await c.put(r,res.clone())}return res}).catch(async()=>{return await caches.match(r)||await caches.match(u.origin+u.pathname)||Response.error()}))});
