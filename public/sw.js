console.warn("ws file is public");

const staticCacheName = 'site-static-v5';

const assets = [
    '/',
    '/index.html',
    '/App.js',
    '/fonts/JetBrainsMono-Italic.woff2',
    '/fonts/JetBrainsMono-Bold.woff2',
    '/assets/GIRO-GIF-NEW.gif',
    '/assets/GIRO.PNG'
];

self.addEventListener('install', evt => {
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log('caching shell assets');
            cache.addAll(assets);
        })
    );
    
});


self.addEventListener('fetch', evt => {
    // console.log('fetch event', evt);
    evt.respondWith(
        caches.match(evt.request).then(cachesRes => {
            return cachesRes || fetch(evt.request);
        })
    );
});


self.addEventListener('activate', evt => {
    evt.waitUntil(
        caches.keys().then(keys => {
            // console.log(keys);
            return Promise.all(
                keys.filter(key => key !== staticCacheName)
                    .map(key => caches.delete(key))
            )
        })
    );
});
