self.addEventListener('notificationclose', function (e) {
    var notification = e.notification;
    var data = notification.data || {};
    var primaryKey = data.primaryKey;
    console.debug('Closed notification: ' + primaryKey);
  });
  self.addEventListener('notificationclick', function(e) {
    var notification = e.notification;
    var data = notification.data || {};
    var primaryKey = data.primaryKey;
    var action = e.action;
    console.debug('Clicked notification: ' + primaryKey);
    if (action === 'close') {
      console.debug('Notification clicked and closed', primaryKey);
      notification.close();
    } 
    else {
      console.debug('Notification actioned', primaryKey);
      clients.openWindow('/');
      notification.close();
    }
  });

  self.addEventListener('push', function(e) {
    var options = {
      body: 'This notification was generated from a push!',
      icon: 'images/example.png',
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now(),
        primaryKey: '2'
      },
      actions: [
        {action: 'explore', title: 'Explore this new world',
          icon: 'images/checkmark.png'},
        {action: 'close', title: 'Close',
          icon: 'images/xmark.png'},
      ]
    };
    e.waitUntil(
      self.registration.showNotification('Hello world!', options)
    );
  });

var CACHE_NAME = 'v1';
var urlsToCache = [
  '/',
  '/offline-page.html',
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          return cacheName !== CACHE_NAME;
        }).map(function(cacheName) {
          console.log('Deleting '+ cacheName);
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    // If network fetch fails serve offline page form cache
    fetch(event.request).catch(function(error) {
      return caches.open(CACHE_NAME).then(function(cache) {
        return cache.match('/offline-page.html');
      });
    })
  );
});
