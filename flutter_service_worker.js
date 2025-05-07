'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "6e4c54950e4fac490a67f0ee8191122d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "f1904549db749e5acbcc25a8557434b5",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "108a42edf4abe4415f89d00a43132c0b",
".git/logs/refs/heads/main": "56eca0cd8ada897b0023107147900890",
".git/logs/refs/remotes/origin/main": "d1c6a7748734b9477a560eda706f9605",
".git/objects/03/c4f9cf1033bbdca2ce9b1c0d93577d143934ce": "813a4c1c415d292b1bc71ea0d1ec6d74",
".git/objects/04/7bf25b4aebb8260bc829a25e69168a61de44b8": "ebd7e23b40da9ece54dc4ce049ab34d9",
".git/objects/06/df8db295fd9e0bca4176085b5dff8ded39eb40": "4fcc4970d14c08b5dad1f04bbb63eecf",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/10/6ce1c815d9fd6c43964ba82cb83600cc68de98": "e14414b53759195f7a1156e0bde7b199",
".git/objects/10/9e09162ca13a58688826bdba02799a2807377e": "1cbece680724604d8d9a5827bdb62a2d",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/22/5744bd6947df637fa2f5dbcc5e7c0dea0a6aa1": "9a92957b4a8b60d7f510b1a0baaae628",
".git/objects/25/90874a9e95547df3a1b336e36a3783eb88d58a": "5660c58feb5b5a1fc4c416a9f5bb7dde",
".git/objects/27/f528d2b27f964c2a491310464ee80c0bcc35dc": "4ce2a079ec31e763ad2400faee2859b3",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/36/93037449840a8917a017b2cc25cc892076bc73": "b42c2960973d3179c60911450f98d2f4",
".git/objects/36/a32cbc5804ac5c771bf785ec97091be249bd2d": "6e6779f9fc04df283f844717f2d730d1",
".git/objects/3a/6fbb68735ab605ea36d7ecc3f04fbb7a5b0790": "c48f454e4238ea413517e95776c30160",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/5d1e1d33b8d0e488ea856864fb4574e3eeb3fa": "b4b40e000008cb5ba1f0164b815845af",
".git/objects/3b/b813abae0b4b1e61cd0609de44857b10392fc7": "0ac6bf0633dd1a99c2e2b6cf74b435a2",
".git/objects/3e/5ae573d579592a6a9d7b71679c433506647ed3": "3af15663b6dac01680768aac8e3c3894",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/45/45b8eaf094b432e53b551486b4dbcd4586844d": "ae8553488dfce048a2bf9bf1333cda81",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4e/bb04a0c4e1b9a586a6e9ec3002930791db0f5f": "afde6d78259ceb67ca273264aef04dad",
".git/objects/50/7724d012a8664b553fbe43de091f47d822759e": "45465f01597c2e62ccdc1dfdc85ee699",
".git/objects/52/b0032152a5e9a55ca5b4aa4ada34dec275e23f": "86dae72aa4605057805009fbe77237b7",
".git/objects/59/083f3347c1c5af8f87500ff9c781d9f7ae3952": "fbfd2ef1bd0f05f2d47b77a8ca56eacd",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5f/e1223a294318f3b725be1f82510f7cf34052f0": "71ddef6f0ced30a130aad7ef44ed8510",
".git/objects/61/6a9381441a9c43f9b6942f29e8f65d51fb3739": "53253c8b33ff5b849e06a133506035b3",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/6b/0153be940964a31e9b8ec76c43a141c5a4a653": "23dee4a916c2195121bda40ef45519d4",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/6c/58f1414194c9ebf8fcb834a7c5a18561a28b53": "11d20c8025ab01cc3d9c0638aee6e590",
".git/objects/6d/936e0f3a7cba68124486c46ad666bf8f0041d5": "4495707f9f558ae0f9cf5ecbc375ac4c",
".git/objects/71/0085a776cb325356dc9e972098641db479fe12": "2b0a1faff9e90533fac388cfb0dce457",
".git/objects/72/d2ac11e3a7e709db33c98612eb36324b65a1c5": "c79df3f24627348b03a122af4e1edf89",
".git/objects/74/61b5085a9a6d56229c0eef849ab11ef9ea21d4": "80b3ee893102d4e760d6c4aa13f4d06a",
".git/objects/74/8034c804ba57ff692b4fdf0be0e7dbec18f929": "775947f804a3a88ab9685e4168be1b6b",
".git/objects/75/42c6b0e9cdcf9c8e3f7da12ab5edf7415f9fad": "f31e0e5a82c78b71792ba19b15f96867",
".git/objects/7d/0c6702189fcf0a1cc7c4cca4eade740fa0a4dc": "405caf9550cb28de2f82f0e27c8dd886",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/e9974f692beabe7ea6eafcf98fc917178cb516": "dcaa107642c6ad3fc2adf1b6baa383ab",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/924c6574c04fa59018a69d0b93a9a826fc55a8": "c031748e350d3417a0f3dbe88612e68f",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/cfe0c864c01d9dbe73f1cb9381a272f47d47a6": "6098f532c4825ee5fcc1bd450d5d8c4b",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9e/0e72b4a66e305f644c6e1edc5bad9f71f9edf4": "903a8aea382e7f4fc5890fa6fe2f8707",
".git/objects/a2/78a72603eec7e988d4536b20e454031a8cd64d": "e63c4ced08b8a2a230579fb4aafaa6ee",
".git/objects/a3/ba24221e4fe07b9fde826271dc67614d75bcad": "399fdf3c350aed00e1653e208438f238",
".git/objects/a4/f2e5938a2c168501287198580e383a72dc53fe": "f6fe6a1cc472cf888b1f89a7997017a8",
".git/objects/a7/473ba40c8bb8e8c2ba58437942602d20cd02c0": "c9cce5bbb15940d7f6af7265a3dcecc5",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/5e172c40cd6421e6794911ae09b631b677e6fa": "f5f3d2c8293e57aa9c384fa1f12c5c98",
".git/objects/b1/be82bc7f62c296f224091a4d360a2060864121": "e1b4d09ab1e546760b6596af8574188c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bf/df67a75df2c341802424bca1fe830577ca84b0": "b53ea21c87ad55790c6a36884cc23562",
".git/objects/c0/8c87792d7a68ffd71898fa598b9b983f7e7ef9": "f455d63cfccab304798020f3d589d259",
".git/objects/c3/944b8a86e8e765015d9f823da8321bc425b40f": "00f2a42df0979a2759e789cb2c87b344",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/ce/7ee755341290d3ca2a1c72f47cb9bf7d6e5506": "5552e6766bef0340e7633748ec227bc8",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9b118defc80e1bdf30bab4989d562bdf955513": "bf22c33ce38a72010b317d42e6305f09",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/de/459a3a5b7a8c52f2cfa45b52f535b98cc63a72": "15131df0fadb9ac463323c7669a6ced1",
".git/objects/de/adbc9c21820491b88ba29c53f730b0d79d5ca2": "2d5ca77d0b8e799b3494821a78ac053a",
".git/objects/e3/893d874f83726c7faee6b44a20e3f501a947cf": "018c2070207c5adf1a0677acd0bd09fc",
".git/objects/e5/3cacde92dc81d0ded632d472ca3d4053760f27": "41739ec0f68fd70cdcd752567139bf1b",
".git/objects/e9/2376a41e09a39cf624430e2f4112ab5748190b": "fc78c8713987348db91407b933c3252f",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/953199f1cef3355ca92199d93a5e4d01fa1a03": "08f0049ba3227a44c35e2b39231a5ec0",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fa/0f11de71462e547e6770da4b0e95f923dccdc0": "e105d1aa0dd2b04b3ab6365cb65135d7",
".git/objects/fb/f5ffbe9408487ae5acbeec0a78981c32f45845": "81f34e0cb43f00c0a8400cce9b8f9f6d",
".git/refs/heads/main": "4f92af313408441a5f43ae16ab0d3556",
".git/refs/remotes/origin/main": "4f92af313408441a5f43ae16ab0d3556",
"assets/AssetManifest.bin": "5a1d224c47195f307abf9ffe5761729f",
"assets/AssetManifest.bin.json": "84b8482b8e761711929900d44978c597",
"assets/AssetManifest.json": "cc7fdc32cc75464ab0061602b803b794",
"assets/assets/images/alfa.png": "97e5f5917bdce40cee6c5db8259ab8cb",
"assets/assets/images/loading.json": "8c1ac511b3e89e0dbbc9a2d1cff802e1",
"assets/assets/images/logo.jpg": "990b2472fec4d89c93b825db363ac83c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "a80b86203af272fec94d61e6444eddc3",
"assets/NOTICES": "1fb6e1271588564a15082c42c6635d93",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "d2ce8787de392a116b6a080113088d92",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/onenote.jpg": "990b2472fec4d89c93b825db363ac83c",
"index.html": "967a644ec630f66fdb2e7379a642755e",
"/": "967a644ec630f66fdb2e7379a642755e",
"main.dart.js": "c6b7e4f45c5773f8c1d8164682e8f023",
"manifest.json": "358380dc7776f45bc1d6b176dffaa3ac",
"onenote.jpg": "990b2472fec4d89c93b825db363ac83c",
"version.json": "f3f6b792a3f381e04cff5c8895303e79"};
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
