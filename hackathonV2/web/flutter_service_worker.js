'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "6cc20cb4e91c30bed6e35b4fdd1c39d3",
"native_bridge.js": "fec7fea879a9060a22b1d80dca752874",
"index.html": "218fa13a1d28ed14c8bea4f09ee79574",
"/": "218fa13a1d28ed14c8bea4f09ee79574",
"main.dart.js": "3512fabba9cb466b1b01661879d230d2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "b2da32757322e11f0e061b28321b83b1",
"assets/AssetManifest.json": "f8b0356b83579eed3ff058366cfa93bb",
"assets/NOTICES": "35bbe137d8ddf6c380b01116565a5c82",
"assets/FontManifest.json": "39018951616f8eadde6efcab968cc5f9",
"assets/packages/flutter_neumorphic/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/map_launcher/assets/icons/citymapper.svg": "58c49ff6df286e325c21a28ebf783ebe",
"assets/packages/map_launcher/assets/icons/yandexNavi.svg": "bad6bf6aebd1e0d711f3c7ed9497e9a3",
"assets/packages/map_launcher/assets/icons/yandexMaps.svg": "3dfd1d365352408e86c9c57fef238eed",
"assets/packages/map_launcher/assets/icons/doubleGis.svg": "ab8f52395c01fcd87ed3e2ed9660966e",
"assets/packages/map_launcher/assets/icons/mapswithme.svg": "87df7956e58cae949e88a0c744ca49e8",
"assets/packages/map_launcher/assets/icons/google.svg": "cb318c1fc31719ceda4073d8ca38fc1e",
"assets/packages/map_launcher/assets/icons/osmand.svg": "639b2304776a6794ec682a926dbcbc4c",
"assets/packages/map_launcher/assets/icons/baidu.svg": "22335d62432f9d5aac833bcccfa5cfe8",
"assets/packages/map_launcher/assets/icons/apple.svg": "6fe49a5ae50a4c603897f6f54dec16a8",
"assets/packages/map_launcher/assets/icons/waze.svg": "311a17de2a40c8fa1dd9022d4e12982c",
"assets/packages/map_launcher/assets/icons/amap.svg": "00409535b144c70322cd4600de82657c",
"assets/packages/hotel/assets/images/landmark_icon.svg": "e85c33205e77d1c81245b8779d5dd27c",
"assets/packages/hotel/assets/images/recent_search_icon.svg": "a84d466a657b62ebfa3863d7792c53f9",
"assets/packages/hotel/assets/images/no_traveller.svg": "87f7721207ffebd1e2d7d707af247890",
"assets/packages/hotel/assets/images/compass_icon.svg": "d618a4c1d8cf0e19a3703b0c7f2f205e",
"assets/packages/hotel/assets/images/delete_icon.svg": "5f82ba8c1a87e21a55b8a0d4f21be626",
"assets/packages/hotel/assets/images/right_arrow.svg": "91290781ad1170fef0468080536eea09",
"assets/packages/hotel/assets/images/edit_icon.svg": "525ba5a0d0da8a9606f7f69d0ffc4067",
"assets/packages/hotel/assets/images/hotel_landing_icon.svg": "10f14e2d9715187946c2281deb98f9a5",
"assets/packages/hotel/assets/images/option_icon.svg": "e01125cf02cc898424a990f430250f55",
"assets/packages/hotel/assets/images/cancellation_policy.svg": "18a718de56dcf9a6aea5eb5615c142c2",
"assets/packages/hotel/assets/images/hotel_landing_image.jpg": "dd6bfa27e0eef2aac066fd789b3c5d79",
"assets/packages/hotel/assets/images/cancelled_icon.svg": "5de669184a9076c5201f79d402056d8f",
"assets/packages/hotel/assets/images/check_out.svg": "58facadb2952b1daa4a7a08d72186f2c",
"assets/packages/hotel/assets/images/down_arrow.svg": "35d5f5c1d0c590ab83af1af836cb3fa8",
"assets/packages/hotel/assets/images/location_background.png": "7b7ce2ab7741587f348188f2f89c7a0e",
"assets/packages/hotel/assets/images/location_icon.svg": "7c698a2a166fe7edecf148902704ee72",
"assets/packages/hotel/assets/images/check_in.svg": "744daaa15ddf0bc6b6083ba07664f78b",
"assets/packages/hotel/assets/images/hotel_icon.svg": "ae995545381deea6803f91e537d2b57d",
"assets/packages/hotel/assets/lang/en.json": "11d97c77c3b66c2bd52def3bb7743691",
"assets/packages/dummy_module/assets/lang/en.json": "7ff7f47d65fd52eb00a9ea816b2f7595",
"assets/packages/bus/assets/vector_images/bus_swap_icon.svg": "f964ed58fd568fe7f3d3241d3e09a498",
"assets/packages/bus/assets/vector_images/coupons_icon.svg": "380da461fbc94b726ed6d89c25fcfd76",
"assets/packages/bus/assets/vector_images/forward_arrow.svg": "51b2addb6d1da3938f873fe6536f5e2b",
"assets/packages/bus/assets/vector_images/bus_location_icon.svg": "015612a8c113fc44536f4fe0689bdefd",
"assets/packages/bus/assets/vector_images/bus_source_icon.svg": "dbe72fdea51fabc3d4d1110f250cfff0",
"assets/packages/bus/assets/vector_images/location_trending_icon.svg": "3d43f02913c04034119a6843be883b8a",
"assets/packages/bus/assets/vector_images/bus_destination_icon.svg": "8bc37492106adcd0236a1ae8bc29bc7e",
"assets/packages/bus/assets/images/bus_seat_selection/sort_and_filter_icon.svg": "a7c50002d2a476e2e82fc30a85a2162f",
"assets/packages/bus/assets/images/bus_seat_selection/blocked_state/sleeper_normal_horizontal.svg": "fd3902728a8e324abe3029be3f8c7b13",
"assets/packages/bus/assets/images/bus_seat_selection/blocked_state/seater_normal.svg": "935083853fd036c474a89d8129b75f74",
"assets/packages/bus/assets/images/bus_seat_selection/blocked_state/sleeper_normal.svg": "34a0fd860ca40a84bcc935422c301811",
"assets/packages/bus/assets/images/bus_seat_selection/blocked_state/sleeper_ladies.svg": "22eb010551b9af58e172bc2b52d7f6d7",
"assets/packages/bus/assets/images/bus_seat_selection/blocked_state/sleeper_ladies_horizontal.svg": "dfd942fd9bc1086f37941a39008dc611",
"assets/packages/bus/assets/images/bus_seat_selection/blocked_state/seater_ladies.svg": "0838027fdccab53edece152164f11d51",
"assets/packages/bus/assets/images/bus_seat_selection/unselected_state/sleeper_normal_horizontal.svg": "341cc2c8fd4bebd124f37665fcc3b890",
"assets/packages/bus/assets/images/bus_seat_selection/unselected_state/seater_normal.svg": "52e53eb088e8d3ed60ee3efaf6bef4fd",
"assets/packages/bus/assets/images/bus_seat_selection/unselected_state/sleeper_normal.svg": "e6c598882eda3384a0c6f496525d4f5f",
"assets/packages/bus/assets/images/bus_seat_selection/unselected_state/sleeper_ladies.svg": "95e366c0ff856c8190c67535c5a66a8b",
"assets/packages/bus/assets/images/bus_seat_selection/unselected_state/sleeper_ladies_horizontal.svg": "e38400b6d40d446ffab6daf262463d4e",
"assets/packages/bus/assets/images/bus_seat_selection/unselected_state/seater_ladies.svg": "7ae9417d095daf1cabfdedd82f00b536",
"assets/packages/bus/assets/images/bus_seat_selection/selected_state/sleeper_normal_horizontal.svg": "e7235dccfe9a521260d419dbb4ee48e9",
"assets/packages/bus/assets/images/bus_seat_selection/selected_state/seater_normal.svg": "c3dff3067705fc23cea2661270407226",
"assets/packages/bus/assets/images/bus_seat_selection/selected_state/sleeper_normal.svg": "1baf6a483b44b1ef695a68a844eaa7a9",
"assets/packages/bus/assets/images/bus_seat_selection/selected_state/sleeper_ladies.svg": "a640fb2369372ca091aec81ae469f5f0",
"assets/packages/bus/assets/images/bus_seat_selection/selected_state/sleeper_ladies_horizontal.svg": "3c6310a0a80302d6ab35c34983fb2498",
"assets/packages/bus/assets/images/bus_seat_selection/selected_state/seater_ladies.svg": "6fe1efb6c547bd906edd3c129d2b7c79",
"assets/packages/bus/assets/images/bus_seat_selection/bus_steering_icon.svg": "06ccf74db4fce80ce704520655a870b5",
"assets/packages/bus/assets/images/cancelled_sucess.svg": "7206243703b2ef873de253215ae85447",
"assets/packages/bus/assets/images/placeholder.png": "e202fbfde53aa662fde93ad62d33fd24",
"assets/packages/bus/assets/images/cancelled_stamp.png": "c560903c475054a2cea3b4848f59f1fc",
"assets/packages/bus/assets/lang/en.json": "f54e87c20cc96d18c92326750b05344a",
"assets/packages/credit_score/assets/lang/en.json": "a6c23e74033fa39f4b998ec7981e509d",
"assets/packages/events/assets/images/star_filled.png": "1a3a0bd8a31adfa2b3a48549ebdafd7a",
"assets/packages/events/assets/images/image_placholder.png": "876f3c7596453feca0149a4e6c619441",
"assets/packages/events/assets/images/search_icon.png": "d395cef48b9a8e9c25e9e8bcc171fed9",
"assets/packages/events/assets/images/app_bar_image.png": "a76da85d295e54119f0aea977703ccec",
"assets/packages/events/assets/images/star_unfilled.png": "5ea1961643f96909bc5b07c9ba821cb8",
"assets/packages/events/assets/images/headout_logo_new.svg": "f41c4f9a2235770817ee36014ccbce4d",
"assets/packages/events/assets/images/four_dot_icon.png": "3ba0c4d9748b83b282e9545d77f83e04",
"assets/packages/events/assets/images/filter_icon.png": "57e0b42195c698edfe6fd96979c42db1",
"assets/packages/events/assets/images/something_went_wrong.png": "11c11379da021b91f2f3eefa2bf7287c",
"assets/packages/events/assets/images/location_background.png": "7b7ce2ab7741587f348188f2f89c7a0e",
"assets/packages/events/assets/images/clock_icon.png": "effc808488fdd7b0bf8327f3a4aad6d1",
"assets/packages/events/assets/images/no_internet.png": "3cf9d35b1301c9759e461ab9ae60b2cc",
"assets/packages/events/assets/images/no_booking_icon.svg": "bd238411a18be72b4e8e29c56ba2baa3",
"assets/packages/events/assets/images/date_time.png": "0ff4ae54fc68dfaa7ede9baf0410e246",
"assets/packages/events/assets/lang/en.json": "4300969de760aaccba7e6c0bd0bacbee",
"assets/packages/nuclei_core/assets/images/place_holder.png": "a33d23d0a44600e9bfc991acc1d0b232",
"assets/packages/nuclei_core/assets/images/no_content_icon.svg": "8a5a9d48595d70ce44b50d49e5f811dd",
"assets/packages/nuclei_core/assets/images/powered_by_nuclei.png": "01902b6dcd855633463bf3969b304dac",
"assets/packages/nuclei_core/assets/images/coupons_icon.svg": "380da461fbc94b726ed6d89c25fcfd76",
"assets/packages/nuclei_core/assets/images/one-way-arrow.svg": "8b35413ba7bca176c0bb4ea99c51dfe0",
"assets/packages/nuclei_core/assets/images/network_error.png": "34b71e3b44107dba09ba8e00fef25ae2",
"assets/packages/nuclei_core/assets/images/cart_coupon_applied.png": "8a256858c8f70cf79566829e690147bf",
"assets/packages/nuclei_core/assets/images/sort_and_filter_icon.svg": "a7c50002d2a476e2e82fc30a85a2162f",
"assets/packages/nuclei_core/assets/images/right_arrow_shape.png": "371178dde2630f7ff502437134fa1a9c",
"assets/packages/nuclei_core/assets/images/location_permission.svg": "6cc689f9b1356b0ab55472f651cb7803",
"assets/packages/nuclei_core/assets/images/no_transaction_icon.svg": "e910f0680840c00565d254188a85d63f",
"assets/packages/nuclei_core/assets/images/technical_issue_image.png": "0d8e0464524238d1984606397b7055a9",
"assets/packages/nuclei_core/assets/images/no_search_results.svg": "ab145f529214de480722bec0665cae25",
"assets/packages/nuclei_core/assets/images/two-way-arrow.svg": "e21784f14e13f246a3928b0c7aad8a1d",
"assets/packages/nuclei_core/assets/images/location_background.png": "7b7ce2ab7741587f348188f2f89c7a0e",
"assets/packages/nuclei_core/assets/images/neu_flat_no_search_result.svg": "a9a0d99dadfa200497f64a0b21c8736b",
"assets/packages/nuclei_core/assets/images/neu_flat_no_internet_image.svg": "c466391205acdf6fa06f24bb7647f978",
"assets/packages/nuclei_core/assets/images/neu_flat_technical_issue.svg": "84fc4081327e2cb4990aa6743b33bffe",
"assets/packages/nuclei_core/assets/images/no_booking_icon.svg": "bd238411a18be72b4e8e29c56ba2baa3",
"assets/packages/nuclei_core/assets/lang/en.json": "33a6a75029e2ba4fe5da8d71e0a3ba24",
"assets/packages/nuclei_core/assets/raw/certificate.pem": "96141e69a3fd3e6ed9f193bd799b21be",
"assets/packages/gift_card/assets/images/gift_card.png": "fe66821a9e27b65bda76911b0114ff50",
"assets/packages/gift_card/assets/images/no_my_gift_card.svg": "0925362d2dd54cfbef6ba61be287af01",
"assets/packages/gift_card/assets/images/placeholder.png": "ce927d4c550bc367159477a5bedea99c",
"assets/packages/gift_card/assets/images/close_icon.svg": "1451b135b2854507cc484dd35f3f7792",
"assets/packages/gift_card/assets/images/search_not_found.svg": "c5fabc451402b6557e35d629f4cf7e2e",
"assets/packages/gift_card/assets/images/contact_icon.svg": "fbcdf6bc08724331a982ff0dc6dfae6c",
"assets/packages/gift_card/assets/lang/en.json": "d71c1f3a975b37fabe84f89c3dd4bf2f",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac"
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
