'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "83f0bac388b0a562ac7a038ff6f9a94c",
"assets/AssetManifest.bin.json": "e473038d3c4dade3704863cd9d344aed",
"assets/AssetManifest.json": "fec1f4de68e2296d2fe7d023a8e03ed7",
"assets/assets/audios/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/fonts/Lato-Regular.ttf": "122dd68d69fe9587e062d20d9ff5de2a",
"assets/assets/fonts/Lexend%2520Deca-Medium.ttf": "142fc585b5cfbcb3b5b41fb0e89a347e",
"assets/assets/fonts/Roboto-Regular.ttf": "8a36205bd9b83e03af0591a004bc97f4",
"assets/assets/images/app_launcher_icon.png": "74dfdc4e66389fb98758bc079215c491",
"assets/assets/images/available-on-the-app-store-badge-logo-png_seeklogo-288615.png": "8a3caa5e6d908e9b17a84c00600788fc",
"assets/assets/images/Back.png": "f766f61a51676224a6f3dbd35bdd88e1",
"assets/assets/images/Back_(3).png": "96ce9ba49e289b45dc75350cc4d27776",
"assets/assets/images/batata_frita.jpg": "6696f3b504538b645a5042b73d0417ab",
"assets/assets/images/brightness-and-contrast.png": "8df220acd697020b56ee981622778e54",
"assets/assets/images/brooke-lark-V4MBq8kue3U-unsplash1366.jpg": "350608d89d28f8a485bdc8d283813961",
"assets/assets/images/cancelled.png": "c9ba230b6c8aba43c333d407c6e30946",
"assets/assets/images/carrinho-vazio_(1).png": "a6b3aa5793e3d87ff7d6398785bce0c6",
"assets/assets/images/Cart.png": "bb3c38516e2eabf6a5765f7c54cadd48",
"assets/assets/images/CHA_GELADO_NOVO.jpg": "be1d6859dd63291e9c1ae31e7cafa234",
"assets/assets/images/Clock.png": "a18cc9ba236a2b26654b66e5aa89cfa8",
"assets/assets/images/cooking_(2).png": "a8b40f5f12379bea4da7a57bc1caf5f4",
"assets/assets/images/credit-card.png": "9cb571d7c6e2f5519fb616938eab8f68",
"assets/assets/images/Cross.png": "05715e5a9496be05b29fa60c78782fcf",
"assets/assets/images/Delivery.png": "dc2852062499b5a834fd9300d39ffa31",
"assets/assets/images/delivery_(1).png": "c95c542cd762eee9dfa91b941d812446",
"assets/assets/images/delivery_(2).png": "d2bbd33ca19910433ec62b1254535848",
"assets/assets/images/editProfile.png": "32e27ce8b60a574709737fe906093c16",
"assets/assets/images/email.png": "46a69cf98c16897c446c6567a034e4cf",
"assets/assets/images/expired.png": "0397a490d9910c42dcb8c3f146d23ce6",
"assets/assets/images/FAQ.png": "1dba959f6187539e4382bb46d06bfcea",
"assets/assets/images/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/images/favourite.png": "1923b864a2f3c040eaad04b2da1ed748",
"assets/assets/images/foodAppImageBurguer.jpg": "bd9f83e1c5ab51c42225af2374b8867f",
"assets/assets/images/free.png": "623c9cd5eed173211780998772bb76c6",
"assets/assets/images/google-play-store-logo-png_seeklogo-270440.png": "bb57c6837de36b9e3e38c0fc2fa3492c",
"assets/assets/images/grid.png": "999b2689ce505ccb6ed3b5d14a7a7ace",
"assets/assets/images/Group_3363.png": "e6384a890d0e47ea75ba3d4002e541e2",
"assets/assets/images/Group_3364.png": "b8f3a1e7a7871656129a6c2c4da3dfee",
"assets/assets/images/Group_8228.png": "9ae00bb8213c81bd47ab326c8129e7e0",
"assets/assets/images/Group_8272.png": "449a988eba6d0078a72d737f6fe8b377",
"assets/assets/images/healthy.png": "0b4dc4451003d7942baab4432752994c",
"assets/assets/images/icons8-foto-48.png": "0c954c0dd1f92f89fbf5abb277ed8e66",
"assets/assets/images/icons8-frente-do-carto-de-crdito-48.png": "ec24de53f7a1f12ef31e6f745b64ce71",
"assets/assets/images/icons8-whatsapp-40.png": "179b8f2e00163565e9bb8f3ca45c3765",
"assets/assets/images/JOrrTMtOKjgo_1242_2688.png": "34497e9b71462cf33740ca1790abb45f",
"assets/assets/images/Logo.png": "70a9083c1d278eb7da2937eef439241e",
"assets/assets/images/logOut.png": "345ce7d8efca941cb9d083897c184569",
"assets/assets/images/mekht-GuvimT4IFok-unsplash.jpg": "78c8eb8f101a148d79b90b310b824616",
"assets/assets/images/Menu.png": "8bdcf2fb226a4c269a90a9544890c6ff",
"assets/assets/images/no-image.jpg": "af879c885f85336fb759d86fc5398612",
"assets/assets/images/notification.png": "64c30f7c3186f0f8382f7bad276a12c7",
"assets/assets/images/No_data-pana.png": "a05bd27a38fef9ba225fc480e133609e",
"assets/assets/images/pasta.jfif": "2ab71b0f8df9c09d801b55b80362d3e2",
"assets/assets/images/payment_Method.png": "13719134b900d144e9390eade2e9be44",
"assets/assets/images/pending.png": "7f7b14201734837bb77bac69b7d60501",
"assets/assets/images/Phone.png": "bfa859742a2275a5d5e298cbbf42e373",
"assets/assets/images/pix.jpg": "7d5c224ed43fb640b8ceeb24521e4ae0",
"assets/assets/images/PROMO.jpg": "81fb1e8ad15a539315caa81f6d084e2e",
"assets/assets/images/received_(2).png": "72f53c803b3d4d53864831032ac9d70d",
"assets/assets/images/received_(4).png": "189f08177e268485b59e298ced33ab9f",
"assets/assets/images/refund.png": "1705bdaf80796518ffb1822a66954f2b",
"assets/assets/images/refund_(1).png": "97771d5b5945a8e83b7abba766e1c06d",
"assets/assets/images/servico-de-entrega.png": "a01a37802648f361c03a330b6c4953a4",
"assets/assets/images/servico-de-entrega_(1).png": "7dd71e1faa8fd69e934118216e063d17",
"assets/assets/images/settings.png": "35eda35f9ea6625ad513ac9e9e3247b3",
"assets/assets/images/share_(3).png": "a8d877748a0d284259d0ea4f83c066a4",
"assets/assets/images/Star_1.png": "efee48c4711bb8bfb6f6fdecd2b56007",
"assets/assets/images/user_review.png": "a4eca8976346867231784024afa843b5",
"assets/assets/images/warning.png": "39d4b5fd85c65c51e5853a9e0161e766",
"assets/assets/images/x-logo.png": "59c1cccae839cff0e7268095f50b7531",
"assets/assets/jsons/Animation_-_1699826048182.json": "c37bd0edfcad822b02a1ce8e8df1ebbb",
"assets/assets/jsons/animation_lnhqnkn6.json": "75299d771d29fd80b44f5a56ff14996a",
"assets/assets/jsons/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/pdfs/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/rive_animations/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/assets/videos/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "7e60ebda88f3a2bf66c73ad50d85b340",
"assets/NOTICES": "5220079cd6a63e8a4bfa74e376cfc3f0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/packages/flutter_osm_plugin/assets/default_pin.png": "7679c39b09843c8bbea9add45fb6dd87",
"assets/packages/flutter_osm_plugin/assets/dynamic-styles.yaml": "0ee8b2f249be023fb6cb4e55d5961959",
"assets/packages/flutter_osm_web/src/asset/map.html": "c8a813f239108266b142983e20458ac4",
"assets/packages/flutter_osm_web/src/asset/map.js": "63c8de9df82417c5905e2a8d5fd14115",
"assets/packages/flutter_osm_web/src/asset/osm_interop.js": "41641d2154632983f79b53602f1776da",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "98c04e6808e1b1a3945f86c2a99738e7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f14e68bd5739a74a001672fc3be7935f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "687c0e6ec07f30811557fe4ae0dca04c",
"assets/packages/routing_client_dart/src/assets/ar.json": "45e29bd513d54467b03fe5c10c85cc14",
"assets/packages/routing_client_dart/src/assets/de.json": "75f261f48361c6ad0f987d669dc279be",
"assets/packages/routing_client_dart/src/assets/en.json": "006f10a887beeb7207fc58db61426a4e",
"assets/packages/routing_client_dart/src/assets/es.json": "006019fa2630f52d73040764ad461fab",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "2704101cb06ce66e2000356a312be25c",
"faviconFoodApp.png": "de5a4cfa121bb6936477df8b72459b9f",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "b8517356586597a69ab573006ff0767d",
"icons/app_launcher_icon.png": "74dfdc4e66389fb98758bc079215c491",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "25fcd214774c86f013ab1bfa64876f5c",
"/": "25fcd214774c86f013ab1bfa64876f5c",
"main.dart.js": "e9756db9ab64dff56263c846566473d0",
"manifest.json": "655c0f6ddc663d7066483723a0462921",
"version.json": "b0260afd21942d166dd91981fccefbc9"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
