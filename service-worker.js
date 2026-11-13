/**
 * KPV COACHES – SERVICE WORKER
 * Offline caching & Progressive Web App engine.
 */

const CACHE_NAME = "kpv-coaches-v2.2";
const ASSETS_TO_CACHE = [
  "./",
  "./index.html",
  "./login.html",
  "./manifest.json",
  "./css/style.css",
  "./css/login.css",
  "./css/admin.css",
  "./css/employee.css",
  "./css/customer.css",
  "./js/demo-data.js",
  "./js/storage.js",
  "./js/auth.js",
  "./js/app.js",
  "./js/admin.js",
  "./js/employee.js",
  "./js/attendance.js",
  "./js/upload.js",
  "./js/customer.js",
  "./assets/icons/logo.svg",
  "./assets/icons/logo-dark.svg",
  "./assets/icons/pwa-icon-192.svg",
  "./assets/icons/pwa-icon-512.svg",
  "./assets/icons/pwa-maskable.svg",
  "./assets/images/coach-mercedes.svg",
  "./assets/images/coach-scania.svg",
  "./assets/images/coach-before.svg",
  "./assets/images/coach-after.svg",
  "./assets/images/avatar-admin.svg",
  "./assets/images/avatar-emp.svg",
  "./assets/images/avatar-cust.svg"
];

// Install: Cache core assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[ServiceWorker] Pre-caching offline shell");
      return cache.addAll(ASSETS_TO_CACHE).catch(err => {
        console.warn("[ServiceWorker] Optional asset cache error:", err);
      });
    })
  );
  self.skipWaiting();
});

// Activate: Clean up old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            console.log("[ServiceWorker] Removing old cache:", key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch: Network first with Cache fallback
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // If response is valid, clone to cache
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Offline: try to return from cache
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          // Fallback to index if navigating to HTML
          if (event.request.mode === "navigate") {
            return caches.match("./index.html");
          }
        });
      })
  );
});

