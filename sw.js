/* Opruim-versie: verwijdert de oude offline-cache en zichzelf, en laadt open pagina's opnieuw. */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil((async () => {
  try { for (const k of await caches.keys()) await caches.delete(k); } catch (err) {}
  try { await self.registration.unregister(); } catch (err) {}
  try { for (const c of await self.clients.matchAll({ type: 'window' })) c.navigate(c.url); } catch (err) {}
})()));
