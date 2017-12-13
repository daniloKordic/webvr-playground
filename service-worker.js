self.addEventListener('install', (event) => {	
	console.log('SW installing', event);
	event.waitUntil(
		caches.open('static').then((cache) => {
			return cache.addAll([
				'/',
				'/index.html',
				'/offline.html',
				'/help/index.html',
				'/src/js/app.js',
				'/src/js/feed.js',
				'/src/js/material.min.js',
				'/src/css/app.css',
				'/src/css/feed.css',
				'/src/images/main-image.jpg',
				'https://fonts.googleapis.com/icon?family=Material+Icons',
				'https://fonts.googleapis.com/css?family=Roboto:400,700',
				'https://cdnjs.cloudflare.com/ajax/libs/material-design-lite/1.3.0/material.indigo-pink.min.css',
				'/manifest.webmanifest',
				'https://fonts.gstatic.com/s/materialicons/v31/2fcrYFNaTjcS6g4U3t-Y5UEw0lE80llgEseQY3FEmqw.woff2',
				'https://fonts.gstatic.com/s/roboto/v18/oMMgfZMQthOryQo9n22dcuvvDin1pK8aKteLpeZ5c0A.woff2'
			]);
		})
	);
});

self.addEventListener('activate', (event) => {
	console.log('SW activated', event);
});


self.addEventListener('fetch', function(event) {
  
  // cache only
  /*
  event.respondWith(caches.match(event.request));
  */


  // cache, falling back to network
  /*
  event.respondWith(
  	caches.match(event.request).then(function(response) {
  		return response || fetch(event.request);
  	})
  );
  */

  // network falling back to cache
  event.respondWith(
  	fetch(event.request).catch(function() {
  		return caches.match(event.request);
  	})
  );
});
