'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "bb8649f3cdf1813f91c0bf60ebba7c63",
".git/config": "b3faa8806c5852e6503eef95f566515a",
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
".git/index": "8334efebfd8f1b63e0a58119b115455a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "8de903fab29d41298fa96e87de31504d",
".git/logs/refs/heads/master": "8de903fab29d41298fa96e87de31504d",
".git/logs/refs/remotes/origin/HEAD": "24dc00d65afc54beaa90f8e58b116bbf",
".git/logs/refs/remotes/origin/master": "d5a8d2ab45ab429b2044df23e4b334a5",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/12/e43ec577e5cbf38d69cb2334e5f776ae07a3a0": "7b692bc261e0409c4d879a637c1b8d04",
".git/objects/13/d93bfe20bb4e6be4a7e1fc29a160cf476a0bba": "6e9b17a8cc15b762f8c986122d23400e",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/21/ce7279ed93546d734a4dcade11b2fcf953b9be": "de45d1c801e5a9753602b2d40f57acb6",
".git/objects/2e/e58544daa20603b2a2524131ae7bb457ea7051": "38296d3747c0d1890c8c26c3fbd52e61",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/47/3b51bbd4b1eaeac3f884beede224e6af3acd7b": "7eaae18864cc581462067503d08c3638",
".git/objects/4f/d01be7201139f78ac6fea489f0ec4677c7314d": "2f227e6462ced48f3c82ed3b9186ac84",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/60/5027db46851b38fcf36a08d0186f5c30ec6681": "087e53f33da8349a8f7d503878c6d30e",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/6a/64dc77c78e7a6808aa68180b4fdee52f0d5a35": "bdddeed19125153bac55a86253b70e18",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/78/f605fa78ee3f699e9958234076b8ebb3dc674e": "05f8573902dcff5febd28f42d2cf7a6e",
".git/objects/81/32054f3d656b2ead345e9eb89908c8bb66f7e0": "ade0dbb8e172efca80c7d962ad510be6",
".git/objects/85/04623c2f6b7592b78af8f4efeb5ef4d531dca2": "4256458426374afc275ced49e97849eb",
".git/objects/8b/e3a8eaa687aa529e8c6ae65f209ff82dda6346": "38ad0b38d1010415073f4afd52dca275",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/93/317ad445d51cdc7060c764bbbc295cef48958b": "0f0a5c8506317dd648c4b5725a7b0206",
".git/objects/9c/55fad24d753449248eb94762917920be72c354": "d021d478b5e61e21260a5d30defdb92e",
".git/objects/a9/46a21c4ff67debf9ab87567ccd4bb59ad9d8fe": "0afed4041651aeb8da86fc6591cfd0f2",
".git/objects/ad/d7859eb892d7ceb2ff669231a7729a0f0b37d6": "8f940000a3a035d7cba07b9ad3a4e2cf",
".git/objects/ad/e116bb303de9a64a4e28253d40d7ddc0a939c2": "8baecda11c4ef59a79c31ef8d42916a6",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/cc/225501fc1f6b08d58a86557625a2e7d2aa0920": "81bcaa412dc9c07b4dec60bb9ac2df3d",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/dd/3dca1028ebd8948f92ddad1803ffdfeb2faa7b": "6a2c61a9b0166f178183a346828d7e76",
".git/objects/e6/442794b0ed74932bdaec166fc4c5851f1c856c": "f5acb6476a4488a223155015fc14bfd3",
".git/objects/e6/b93ffe8ae7270fd055b95bb3131fd82d185462": "613f2dd2cf24f957b1ac995f853a33e3",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/pack/pack-b5518445357e8a61b87e78694cbe47d2364e7dab.idx": "9ecab2aa953550bd7d8afd7c8ec9f6f8",
".git/objects/pack/pack-b5518445357e8a61b87e78694cbe47d2364e7dab.pack": "bd8a125d19d3428bc4532d253ea8d392",
".git/packed-refs": "3f705181c1bdcedd9e30d80830aa8405",
".git/refs/heads/master": "74d034d5fe067cb5639507482e7da13d",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "74d034d5fe067cb5639507482e7da13d",
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
"assets/fonts/MaterialIcons-Regular.otf": "fe7c7e033cf26d0f23498c1b23289780",
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
"index.html": "73080ed442780f766e34c3f3d5d05639",
"/": "73080ed442780f766e34c3f3d5d05639",
"main.dart.js": "b1cb8ecc36ffc8a9c4cac0e06d7c4417",
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
