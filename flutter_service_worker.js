'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "7b78a2d926958247ea9bd8cfa9beacd7",
".git/config": "b3faa8806c5852e6503eef95f566515a",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "ecd941b615e1a297aab106688f3b844d",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "dbe89373318bf898ed5e678b1e9f4dc0",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dab9d3c8df6447e708ad113e8e44534c",
".git/logs/refs/heads/master": "dab9d3c8df6447e708ad113e8e44534c",
".git/logs/refs/remotes/origin/master": "5543d073e1af3cf70191ab81bdaa5e44",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/05/b0f44b734ced04ccd5a6756b430134955b3fa9": "50e98d1d5dc4d82865cc0467c8628297",
".git/objects/1b/92c1454f5d5f64af11c87da385f85d54c3d5a7": "dcf02b516bb17f31850857a356708cf3",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/21/665a6e060538a2f654114eda230506ac4ab0c3": "ab14d28612a01bc3e62bab61162fda4c",
".git/objects/29/807bd18ba00d7c4446e88bbe89b6912cb42b78": "bb7f9891be8f866fd9400cfeffcd9c05",
".git/objects/2b/7be69f70b56420444f86714e2c81f411d3de56": "c805a114f2dbbdd3306a00915268de10",
".git/objects/36/a0d0ac22ac292e4e4a2211a09453b4a198d77d": "ea6880bc06a0169e15327ab5a183125b",
".git/objects/42/0e607bed991a488fc1f0ef75148f24b323e986": "bb09a107986058ea49975538623be25f",
".git/objects/42/9d9ef6f0db6461c672f28241203416de401eb0": "1779f6c2bc62b05064b98364ea70da8c",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/b5f464b87af56e18671d73590c6e8698730bac": "7fafce09a21c29b4aca0d1ae43b22442",
".git/objects/4d/bdfca8a4b975477f07c203e548e9c798d72ffc": "e0f636417adc16a5528144f85fb71d01",
".git/objects/52/215906dd93f62a1ea4733dba0631ae9c2cc7c3": "3dba88b57da6d429f53fb06f06f73105",
".git/objects/60/3f450dc40e11859bec0c008bcc2e1b44df6de4": "8768defb1407f19908ce729a761ac14d",
".git/objects/60/d46764760c46841732be1097ce6deeb093c65e": "818ebb5b99a2ddc33926b3c516f604f8",
".git/objects/69/2b574763a028ef548fe42908eefeb9de97f80d": "cd0307535dee04265c464c2778c40ffd",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/971440784ed929b67d147fcacdde5d92955afc": "11a4ea42090adb08911e4de411611978",
".git/objects/90/d7b11ca7f081fff0caa6d46e95c845ab073f51": "a39b49cfe22e6fdcb2433441b58c99c3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/b197b7927983a6f36cb4ad0efa28930fb4e027": "a138ccb3fe2b3304ddbfcf2a460d0d18",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/be/e3f0616ec2b9d5fac125a8d352d2f7ba6dde35": "1f3f11c077d09994d8443102dbb008fa",
".git/objects/bf/08fbdbdc49a636b33060359c33db4e7abe2a26": "beab8690cc6670d5f82e64fb62c8b521",
".git/objects/c1/b56104cb958ba1c90786c7e9e6b47812641b7a": "6cc2669950af6f93731d561d6e9a211e",
".git/objects/c6/1581a428ecf2929f27670f24a6cd305f5dcd38": "1f5f0fe37ca3ead54f005d7f24051302",
".git/objects/cb/85e3485f56eafbf9cb1d43c6addd213c0b0887": "b4ca8031ed243416a3d4545a309a41d5",
".git/objects/ce/6b220c33914f42b473fd78f6fbf98299637fd9": "4e13e908af0cfa21137c0a286063ea37",
".git/objects/d5/eba913ef0928ce4f188b89cfa4bfefadc7398e": "584b9c4488de883ac313b429d0b5fc40",
".git/objects/d6/890b336466d5c76aab0ae5f0b953abe7bdf0ec": "94450eb08bef15cdd1b0937b9b20c4c3",
".git/objects/d9/44cc84efcdce65da73324cfb34d87fbdd76a97": "71263f21b66cb762239c2cab79e690ab",
".git/objects/e3/3d2596dd015a4646d92faed95e71da0aac6d4f": "e768f0a2678892deaee3aa0aefb3be22",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/eb/48977c1b6fb37641516d2dfff3fb000504642f": "af7337b2039096c1dbaf9a9c291dace5",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/ORIG_HEAD": "c37d5d2de9fd6f515e4823e264b40b2f",
".git/refs/heads/master": "7d4bdcfc0390f8c1cde1d23b75908013",
".git/refs/remotes/origin/master": "7d4bdcfc0390f8c1cde1d23b75908013",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "b5d8e4dc4647683ab257113ce3360f77",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "62daaac9268d32f51799aa409d36be15",
"/": "62daaac9268d32f51799aa409d36be15",
"main.dart.js": "7c583a7c50e23881b09df91b01220a69",
"manifest.json": "4846091b14508dd1b9071c5e6c76bebb",
"version.json": "86de147ee5343277ac37765a035c711d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
