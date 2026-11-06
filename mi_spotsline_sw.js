/* Mi Spotsline: service worker mínimo para que el celular la pueda instalar como app.
   No guarda nada en caché (los datos son personales): todo va siempre a internet. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => {
  if (e.request.mode !== 'navigate') return;
  e.respondWith(fetch(e.request).catch(() => new Response(
    '<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><body style="background:#111;color:#eee;font-family:sans-serif;padding:24px"><h2>Sin conexión</h2><p>Mi Spotsline necesita internet. Revisá el wifi o los datos del celular y volvé a abrirla.</p></body>',
    { headers: { 'Content-Type': 'text/html; charset=utf-8' } })));
});
