// Service Worker for EEGAI Jobs PWA
const CACHE_NAME = 'eegai-jobs-v1.0';
const urlsToCache = [
  '/',
  '/eegai-jobs-enhanced.html',
  '/manifest.json',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Sans+Tamil:wght@400;500;600;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js',
  'https://cdn.jsdelivr.net/npm/chart.js',
  'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js'
];

// Install event - cache resources
self.addEventListener('install', event => {
  console.log('Service Worker installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Caching app shell');
        return cache.addAll(urlsToCache);
      })
      .catch(err => console.error('Cache failed:', err))
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  console.log('Service Worker activating...');
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if(cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if(response) {
          console.log('Serving from cache:', event.request.url);
          return response;
        }
        
        // Clone the request
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then(response => {
          // Check if valid response
          if(!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clone the response
          const responseToCache = response.clone();
          
          // Cache the new resource
          caches.open(CACHE_NAME).then(cache => {
            cache.put(event.request, responseToCache);
          });
          
          return response;
        }).catch(err => {
          console.error('Fetch failed:', err);
          
          // Return offline page if available
          return caches.match('/offline.html');
        });
      })
  );
});

// Background sync for offline actions
self.addEventListener('sync', event => {
  console.log('Background sync:', event.tag);
  
  if(event.tag === 'sync-applications') {
    event.waitUntil(syncApplications());
  }
  
  if(event.tag === 'sync-job-posts') {
    event.waitUntil(syncJobPosts());
  }
});

async function syncApplications() {
  // Get pending applications from IndexedDB
  // Send to server
  console.log('Syncing applications...');
}

async function syncJobPosts() {
  // Get pending job posts from IndexedDB
  // Send to server
  console.log('Syncing job posts...');
}

// Push notifications
self.addEventListener('push', event => {
  console.log('Push received:', event);
  
  const data = event.data ? event.data.json() : {};
  const title = data.title || 'EEGAI Jobs';
  const options = {
    body: data.body || 'You have a new notification',
    icon: '/icon-192.png',
    badge: '/icon-72.png',
    vibrate: [200, 100, 200],
    data: data.url || '/',
    actions: [
      {
        action: 'open',
        title: 'View',
        icon: '/icon-96.png'
      },
      {
        action: 'close',
        title: 'Dismiss',
        icon: '/icon-96.png'
      }
    ]
  };
  
  event.waitUntil(
    self.registration.showNotification(title, options)
  );
});

// Notification click
self.addEventListener('notificationclick', event => {
  console.log('Notification clicked:', event);
  
  event.notification.close();
  
  if(event.action === 'open') {
    event.waitUntil(
      clients.openWindow(event.notification.data)
    );
  }
});

// Message from client
self.addEventListener('message', event => {
  console.log('Message from client:', event.data);
  
  if(event.data.action === 'skipWaiting') {
    self.skipWaiting();
  }
  
  if(event.data.action === 'clearCache') {
    event.waitUntil(
      caches.delete(CACHE_NAME).then(() => {
        console.log('Cache cleared');
        event.ports[0].postMessage({ success: true });
      })
    );
  }
});

// Periodic background sync (for job alerts)
self.addEventListener('periodicsync', event => {
  if(event.tag === 'check-new-jobs') {
    event.waitUntil(checkNewJobs());
  }
});

async function checkNewJobs() {
  console.log('Checking for new jobs...');
  // Check API for new jobs matching user preferences
  // Show notification if found
}
