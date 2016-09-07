/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren */
'use strict';




importScripts("js/lib/push_worker.js");


/* eslint-disable quotes, comma-spacing */
var PrecacheConfig = [["badbrowser.html","cfb725c2ffb8df1fdf3efad6c69f7aa4"],["css/app.css","9b6131248046449ee70208f23e679ba3"],["css/badbrowser.css","57c12a60c48eb8e68acb08f01966fa08"],["css/desktop.css","da5ee547619938c0537c6c166986f51c"],["css/mobile.css","30611c88968f954f4982dba199165f94"],["favicon.ico","03ddb87b0f2bdd771bb85623a46b18c9"],["favicon_unread.ico","d79ccbccddedcdcd203b6e9dac52ec72"],["img/Manytabs.png","934b0719b40c5d75c5d4722ea25910cb"],["img/Manytabs_2x.png","7ae23e02158a421af33fcc60f25297f3"],["img/Telegram.svg","e94b9ca3cdafcac9e1eeacc626809535"],["img/Telegram72.png","85cb0568b4ecd4f167d7350b036bae99"],["img/Telegram72_2x.png","6cfd73b380736f655b871edce3d329a0"],["img/Telegram_2x.png","0809f0b0ed5d5946aa44657be8483d31"],["img/blank.gif","56398e76be6355ad5999b262208a17c9"],["img/changelog/card_wecandoit.png","82a13bc2991caf9834b3886bc274de56"],["img/emojisprite_0.png","063792fc6c5eb138a2d74bd47f51eabf"],["img/emojisprite_1.png","e5799e399aa8dfa948189b149cfdf5e5"],["img/emojisprite_2.png","3f7026e934e125e846336744a643fce0"],["img/emojisprite_3.png","cbf3f3cb2b243c369f4c6b1d77b08647"],["img/emojisprite_4.png","8f4c8d216136e6a5c9d91cce22a6daec"],["img/icons/AboutLogos.png","707cff47d4d6a9d908d1068f607109f1"],["img/icons/AboutLogos_2x.png","c23df8c1e9615a71f002931d2bf872e0"],["img/icons/General.png","531a2a81693fb1766ce4ae02f37eb2f6"],["img/icons/General_2x.png","c4d2b5962f01e4aba56ff1d5c0e78531"],["img/icons/IconsetSmiles.png","3a1694ece5d00b0259a7b8cb24520010"],["img/icons/IconsetSmiles_2x.png","b40a2c96f560ec75520b0fa2b258c40d"],["img/icons/IconsetW.png","e88b2586f71fbdd183023d18587b1bf4"],["img/icons/IconsetW_2x.png","7e21d34964fac508d2d2d0aab6023cd8"],["img/icons/Major.png","3a4ce7716b63c2fc664c98c27e037177"],["img/icons/Major_2x.png","fca5fc808508616de78e4c6f14ee2e64"],["img/icons/MobileIcons.png","47eb499516c9d059dcb84ca1a7a80e95"],["img/icons/MobileIcons_2x.png","31ba58da4088e87064e7c485b81c7ae1"],["img/icons/PhotoIcons.png","0816257b84f4f3125ec40d44482738a5"],["img/icons/PhotoIcons_2x.png","26c5249080b9be8756d880427a61688c"],["img/icons/ProfileIcons.png","20a6962818e396f4a3796941a79398d3"],["img/icons/ProfileIcons_2x.png","b9649cbdf7a146d639c244203827ea78"],["img/icons/icon120.png","b996b1db3beeb05dfe4eb0675bd8c95d"],["img/icons/icon128.png","c3d76daa22a4379f1d85ea820c37a2dc"],["img/icons/icon16.png","bca33e323a860ab8973cb7945808fd62"],["img/icons/icon32.png","964e50b5f38bca56a34844fe6f07a1f0"],["img/icons/icon60.png","d511d64e1cced2238f8d9f36efb58aca"],["img/icons/icon64.png","70ff831146ab91dab132d508edea2fe2"],["img/icons/icon90.png","f260ee4b01520e20feb2410305295710"],["img/iphone_home120.png","43c827c36ec8356f5aaacad481b5ea14"],["img/iphone_startup.png","2a56edae8108438c33442b6447b75426"],["img/logo_share.png","eb02273b137d8c7afa2ef2777416d83c"],["img/placeholders/DialogListAvatarSystem@2x.png","4c6c210b6c3298175d87990aa491aa5b"],["img/placeholders/GroupAvatar1@2x.png","83cdf5c4c52b1a9260e7f647069cf032"],["img/placeholders/GroupAvatar2@2x.png","f4fa1b8db0ee690394981d508668ea7a"],["img/placeholders/GroupAvatar3@2x.png","7b9da87351d1714784c1648820bc7c1a"],["img/placeholders/GroupAvatar4@2x.png","eccdda511aa159624dac374bbbd29cb7"],["img/placeholders/PhotoThumbConversation.png","df5af47e4a67d4b6c0512bff7b6bb50b"],["img/placeholders/PhotoThumbModal.png","df5af47e4a67d4b6c0512bff7b6bb50b"],["img/placeholders/UserAvatar1@2x.png","ea72228776d0ef771a748ee49e873b7a"],["img/placeholders/UserAvatar2@2x.png","5b5716be61df55840d5d5dc0eea1e3a4"],["img/placeholders/UserAvatar3@2x.png","86e73e28f229c937275e44d477bd39c2"],["img/placeholders/UserAvatar4@2x.png","4ed948c52f00699dc1e543cebb3e29f8"],["img/placeholders/UserAvatar5@2x.png","ae2218bbc1af3758a73e82efd64a0c48"],["img/placeholders/UserAvatar6@2x.png","7380075eaf8aaad5bdcf7f3a26618c35"],["img/placeholders/UserAvatar7@2x.png","47a1c3e16b7f6eb08d7c813b0cff5ae6"],["img/placeholders/UserAvatar8@2x.png","c062eb47646e1f5e6b1a6fa14187e46a"],["img/placeholders/VideoThumbConversation.png","df5af47e4a67d4b6c0512bff7b6bb50b"],["img/placeholders/VideoThumbModal.png","df5af47e4a67d4b6c0512bff7b6bb50b"],["img/sound_a.mp3","eba09b6a457792c52fc610b5f9f974b3"],["index.html","486827b183693cd3d272251612ba0172"],["js/app.js","e517c186a4baae308b9bb362c8525544"],["js/background.js","12004fed1812e62de54910267782f578"],["js/lib/bin_utils.js","40fac141bf8afcc824ed7b76c09f76fa"],["js/lib/crypto_worker.js","df468909675764fb274ae4f2eda5b062"],["js/lib/polyfill.js","d985db7b290fc8c999b950722b2602fa"],["js/lib/push_worker.js","41f56b40f093d8fb19837dc7edb8421c"],["js/locales/en-us.json","a94d2bd48edfe58e1677bc7240e28186"],["manifest.json","d901fefb99268ea46b0f7537b61f7fb1"],["manifest.webapp","4fc42f250afe85091579515747266670"],["nacl/mtproto_crypto.nmf","f7cbc5ecce97f184041bf7e56e30a925"],["nacl/mtproto_crypto.pexe","9b0030189b74b07a96908bc00ca2df54"],["vendor/angular/i18n/angular-locale_de-de.js","bef8329c258f22d04189439c38321ad6"],["vendor/angular/i18n/angular-locale_en-us.js","4e84db290d2e1743fa3b8a199683c146"],["vendor/angular/i18n/angular-locale_es-es.js","1f6e4e2bc7658c602bef7d5db8b61af1"],["vendor/angular/i18n/angular-locale_it-it.js","93a0645abafb9ac6da0ca03fd78f922c"],["vendor/angular/i18n/angular-locale_nl-nl.js","e264b0fbe7e107397893e04fd6c4b071"],["vendor/angular/i18n/angular-locale_pt-br.js","1b07dd4fe830f6404f03e300f6454489"],["vendor/angular/i18n/angular-locale_ru-ru.js","7693713aa5d07d2aa7a9e95fe0948d58"],["vendor/closure/long.js","b0a35c095dc09f1fd10de13953946b82"],["vendor/cryptoJS/crypto.js","6d1ac0184656afab590fbf06e7bc8c5d"],["vendor/jsbn/jsbn_combined.js","d7eb1b82e658eef11ce3d8fd9caf10d5"],["vendor/leemon_bigint/bigint.js","99290db3a3369437ba0d44152dc36ba1"],["vendor/rusha/rusha.js","779d54331470a66576a5292e61fc1680"]];
/* eslint-enable quotes, comma-spacing */
var CacheNamePrefix = 'sw-precache-v1-TWebogram-' + (self.registration ? self.registration.scope : '') + '-';


var IgnoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var getCacheBustedUrl = function (url, param) {
    param = param || Date.now();

    var urlWithCacheBusting = new URL(url);
    urlWithCacheBusting.search += (urlWithCacheBusting.search ? '&' : '') +
      'sw-precache=' + param;

    return urlWithCacheBusting.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var populateCurrentCacheNames = function (precacheConfig,
    cacheNamePrefix, baseUrl) {
    var absoluteUrlToCacheName = {};
    var currentCacheNamesToAbsoluteUrl = {};

    precacheConfig.forEach(function(cacheOption) {
      var absoluteUrl = new URL(cacheOption[0], baseUrl).toString();
      var cacheName = cacheNamePrefix + absoluteUrl + '-' + cacheOption[1];
      currentCacheNamesToAbsoluteUrl[cacheName] = absoluteUrl;
      absoluteUrlToCacheName[absoluteUrl] = cacheName;
    });

    return {
      absoluteUrlToCacheName: absoluteUrlToCacheName,
      currentCacheNamesToAbsoluteUrl: currentCacheNamesToAbsoluteUrl
    };
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var mappings = populateCurrentCacheNames(PrecacheConfig, CacheNamePrefix, self.location);
var AbsoluteUrlToCacheName = mappings.absoluteUrlToCacheName;
var CurrentCacheNamesToAbsoluteUrl = mappings.currentCacheNamesToAbsoluteUrl;

function deleteAllCaches() {
  return caches.keys().then(function(cacheNames) {
    return Promise.all(
      cacheNames.map(function(cacheName) {
        return caches.delete(cacheName);
      })
    );
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    // Take a look at each of the cache names we expect for this version.
    Promise.all(Object.keys(CurrentCacheNamesToAbsoluteUrl).map(function(cacheName) {
      return caches.open(cacheName).then(function(cache) {
        // Get a list of all the entries in the specific named cache.
        // For caches that are already populated for a given version of a
        // resource, there should be 1 entry.
        return cache.keys().then(function(keys) {
          // If there are 0 entries, either because this is a brand new version
          // of a resource or because the install step was interrupted the
          // last time it ran, then we need to populate the cache.
          if (keys.length === 0) {
            // Use the last bit of the cache name, which contains the hash,
            // as the cache-busting parameter.
            // See https://github.com/GoogleChrome/sw-precache/issues/100
            var cacheBustParam = cacheName.split('-').pop();
            var urlWithCacheBusting = getCacheBustedUrl(
              CurrentCacheNamesToAbsoluteUrl[cacheName], cacheBustParam);

            var request = new Request(urlWithCacheBusting,
              {credentials: 'same-origin'});
            return fetch(request).then(function(response) {
              if (response.ok) {
                return cache.put(CurrentCacheNamesToAbsoluteUrl[cacheName],
                  response);
              }

              console.error('Request for %s returned a response status %d, ' +
                'so not attempting to cache it.',
                urlWithCacheBusting, response.status);
              // Get rid of the empty cache if we can't add a successful response to it.
              return caches.delete(cacheName);
            });
          }
        });
      });
    })).then(function() {
      return caches.keys().then(function(allCacheNames) {
        return Promise.all(allCacheNames.filter(function(cacheName) {
          return cacheName.indexOf(CacheNamePrefix) === 0 &&
            !(cacheName in CurrentCacheNamesToAbsoluteUrl);
          }).map(function(cacheName) {
            return caches.delete(cacheName);
          })
        );
      });
    }).then(function() {
      if (typeof self.skipWaiting === 'function') {
        // Force the SW to transition from installing -> active state
        self.skipWaiting();
      }
    })
  );
});

if (self.clients && (typeof self.clients.claim === 'function')) {
  self.addEventListener('activate', function(event) {
    event.waitUntil(self.clients.claim());
  });
}

self.addEventListener('message', function(event) {
  if (event.data.command === 'delete_all') {
    console.log('About to delete all caches...');
    deleteAllCaches().then(function() {
      console.log('Caches deleted.');
      event.ports[0].postMessage({
        error: null
      });
    }).catch(function(error) {
      console.log('Caches not deleted:', error);
      event.ports[0].postMessage({
        error: error
      });
    });
  }
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    var urlWithoutIgnoredParameters = stripIgnoredUrlParameters(event.request.url,
      IgnoreUrlParametersMatching);

    var cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    var directoryIndex = 'index.html';
    if (!cacheName && directoryIndex) {
      urlWithoutIgnoredParameters = addDirectoryIndex(urlWithoutIgnoredParameters, directoryIndex);
      cacheName = AbsoluteUrlToCacheName[urlWithoutIgnoredParameters];
    }

    var navigateFallback = '';
    // Ideally, this would check for event.request.mode === 'navigate', but that is not widely
    // supported yet:
    // https://code.google.com/p/chromium/issues/detail?id=540967
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1209081
    if (!cacheName && navigateFallback && event.request.headers.has('accept') &&
        event.request.headers.get('accept').includes('text/html') &&
        /* eslint-disable quotes, comma-spacing */
        isPathWhitelisted([], event.request.url)) {
        /* eslint-enable quotes, comma-spacing */
      var navigateFallbackUrl = new URL(navigateFallback, self.location);
      cacheName = AbsoluteUrlToCacheName[navigateFallbackUrl.toString()];
    }

    if (cacheName) {
      event.respondWith(
        // Rely on the fact that each cache we manage should only have one entry, and return that.
        caches.open(cacheName).then(function(cache) {
          return cache.keys().then(function(keys) {
            return cache.match(keys[0]).then(function(response) {
              if (response) {
                return response;
              }
              // If for some reason the response was deleted from the cache,
              // raise and exception and fall back to the fetch() triggered in the catch().
              throw Error('The cache ' + cacheName + ' is empty.');
            });
          });
        }).catch(function(e) {
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});




