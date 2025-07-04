
const CACHE_NAME = 'validador-cache-v3';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './operarios.json',
  './secciones.json',
  './ciclos.json',
  './service-worker.js',
  './usuarios.json',
  './lecturas.json',
  './revisiones.json',
  './icon-192.png',
  './Logo.png',
  './icon-512.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
