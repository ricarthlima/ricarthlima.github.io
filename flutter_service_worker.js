'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/config": "b3faa8806c5852e6503eef95f566515a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "15e657e679f2641f587b0541ed122f15",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "24dc00d65afc54beaa90f8e58b116bbf",
".git/logs/refs/heads/master": "24dc00d65afc54beaa90f8e58b116bbf",
".git/logs/refs/remotes/origin/HEAD": "24dc00d65afc54beaa90f8e58b116bbf",
".git/objects/pack/pack-b5518445357e8a61b87e78694cbe47d2364e7dab.idx": "9ecab2aa953550bd7d8afd7c8ec9f6f8",
".git/objects/pack/pack-b5518445357e8a61b87e78694cbe47d2364e7dab.pack": "bd8a125d19d3428bc4532d253ea8d392",
".git/packed-refs": "3f705181c1bdcedd9e30d80830aa8405",
".git/refs/heads/master": "ad74dc048657fd0e9fb858fb190f5ad2",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
"assets/AssetManifest.bin": "21d061a8e86f3cbdfe91861eb6a93272",
"assets/AssetManifest.json": "45bd1ac683f8b0bf21327ad53db3e4a1",
"assets/assets/assets/coding_bg.jpg": "3a8418a2714a361b1ff86735eb16d16d",
"assets/assets/assets/construction.gif": "c94f1b33c9208adbb3163c483f3d82c3",
"assets/assets/assets/contact_bg.jpg": "b45c8dbae84434e1562a007c6632cc52",
"assets/assets/assets/flutter_me.png": "dde4bacf0cefbcf4e579e7da72d0fcea",
"assets/assets/assets/icon_android.png": "febea6f689d5f971245754b1cba8e83d",
"assets/assets/assets/icon_blueprint.png": "4654f41a04b1e5179fcaa2c4ce5c228a",
"assets/assets/assets/icon_email.png": "cd11655d5af7b911aef5de4dec350897",
"assets/assets/assets/icon_github.png": "965a838da528cf7bb7c3ec052e5774ce",
"assets/assets/assets/icon_instagram.png": "ef1ba6f51764c8c8a70cd5762768ea70",
"assets/assets/assets/icon_photoshop.png": "e2c6eb0320487fd2b2f6aab33d3e93a0",
"assets/assets/assets/icon_smartphone.png": "45116e325784e538476124ff2a983afd",
"assets/assets/assets/icon_teacher.png": "b6e082d47d965ef608cd4c394356773d",
"assets/assets/assets/icon_twitter.png": "f8498b086823a485947ef37bb023c0b6",
"assets/assets/assets/icon_web.png": "55af6869621f3c88e75b90054c6b9b48",
"assets/assets/assets/icon_youtube.png": "d7e54ed2ec94f5f8d5ae54b2a26628f4",
"assets/assets/assets/ricarth.png": "dd6966b19df25364cb94721673fd523a",
"assets/assets/assets/services.png": "0bceb42a2f397a853c4f193750f4aab4",
"assets/assets/coding_bg.jpg": "3a8418a2714a361b1ff86735eb16d16d",
"assets/assets/construction.gif": "c94f1b33c9208adbb3163c483f3d82c3",
"assets/assets/contact_bg.jpg": "b45c8dbae84434e1562a007c6632cc52",
"assets/assets/flutter_me.png": "dde4bacf0cefbcf4e579e7da72d0fcea",
"assets/assets/icon_android.png": "febea6f689d5f971245754b1cba8e83d",
"assets/assets/icon_blueprint.png": "4654f41a04b1e5179fcaa2c4ce5c228a",
"assets/assets/icon_email.png": "cd11655d5af7b911aef5de4dec350897",
"assets/assets/icon_github.png": "965a838da528cf7bb7c3ec052e5774ce",
"assets/assets/icon_instagram.png": "ef1ba6f51764c8c8a70cd5762768ea70",
"assets/assets/icon_photoshop.png": "e2c6eb0320487fd2b2f6aab33d3e93a0",
"assets/assets/icon_smartphone.png": "45116e325784e538476124ff2a983afd",
"assets/assets/icon_teacher.png": "b6e082d47d965ef608cd4c394356773d",
"assets/assets/icon_twitter.png": "f8498b086823a485947ef37bb023c0b6",
"assets/assets/icon_web.png": "55af6869621f3c88e75b90054c6b9b48",
"assets/assets/icon_youtube.png": "d7e54ed2ec94f5f8d5ae54b2a26628f4",
"assets/assets/ricarth.png": "dd6966b19df25364cb94721673fd523a",
"assets/assets/services.png": "0bceb42a2f397a853c4f193750f4aab4",
"assets/FontManifest.json": "7e9433d5386f1e47ab22f0afd8e7a4f9",
"assets/fonts/MaterialIcons-Regular.otf": "aedcccf99c0b4e2ac931571e1c7fbf1f",
"assets/fonts/NotoSans-Regular.ttf": "5a87cce84010f7cea085ae218d44a64b",
"assets/icon_android.png": "febea6f689d5f971245754b1cba8e83d",
"assets/icon_blueprint.png": "4654f41a04b1e5179fcaa2c4ce5c228a",
"assets/icon_email.png": "cd11655d5af7b911aef5de4dec350897",
"assets/icon_github.png": "965a838da528cf7bb7c3ec052e5774ce",
"assets/icon_instagram.png": "ef1ba6f51764c8c8a70cd5762768ea70",
"assets/icon_photoshop.png": "e2c6eb0320487fd2b2f6aab33d3e93a0",
"assets/icon_smartphone.png": "45116e325784e538476124ff2a983afd",
"assets/icon_teacher.png": "b6e082d47d965ef608cd4c394356773d",
"assets/icon_twitter.png": "f8498b086823a485947ef37bb023c0b6",
"assets/icon_web.png": "55af6869621f3c88e75b90054c6b9b48",
"assets/icon_youtube.png": "d7e54ed2ec94f5f8d5ae54b2a26628f4",
"assets/NOTICES": "c96d515b6caad95396f62196a90e2e94",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/services.png": "0bceb42a2f397a853c4f193750f4aab4",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/profiling/canvaskit.js": "e069e181424052299c5bffb1b300bb13",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"CNAME": "abbe89bfbbede7ecd14a4e0e25505d37",
"favicon.png": "c8b633e1e02043f81b37dccb28837456",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "0795fcfbce815666217cec0cbc20feab",
"icons/Icon-512.png": "870114fb9818457fda34adac24a40cfb",
"index.html": "f2fff9614b4644517299fd0c53cde05b",
"/": "f2fff9614b4644517299fd0c53cde05b",
"main.dart.js": "8887549cb1d732c22123c09a4a6bb866",
"manifest.json": "370847913173b5d2e414f47088740b02",
"version.json": "eb120dac552d473b68606cb3f4bb38e7"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
