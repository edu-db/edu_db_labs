/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5d9252bd180951f56995689720568a43"
  },
  {
    "url": "assets/css/0.styles.bb58e99c.css",
    "revision": "bf21bf60fbfc9ff09a5ea40d58702b1e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.17dc7fc0.js",
    "revision": "235105471074525d1d2bdc9d1186bdf9"
  },
  {
    "url": "assets/js/11.32ba2003.js",
    "revision": "b012f550c9920cce59792eeb20924fd7"
  },
  {
    "url": "assets/js/12.f4d805b2.js",
    "revision": "45a0f424731485e8513dbf3f52453817"
  },
  {
    "url": "assets/js/13.b369ab95.js",
    "revision": "ff30346a2ae0704d1a7791e2ab06f152"
  },
  {
    "url": "assets/js/14.d7f079b2.js",
    "revision": "6b809a93916ba8b3fde674d26eee6270"
  },
  {
    "url": "assets/js/15.d02b5dc8.js",
    "revision": "06d71e4892e34c482f10257ce22718c7"
  },
  {
    "url": "assets/js/16.9ad73624.js",
    "revision": "7c1d6af6d09d7310b9e4244ddd2518d1"
  },
  {
    "url": "assets/js/17.5b53db67.js",
    "revision": "88eb46c3062d10bf8da23f3e3c815e96"
  },
  {
    "url": "assets/js/18.393dbd29.js",
    "revision": "4dc9878951689875f62f246a270470a7"
  },
  {
    "url": "assets/js/19.7835ae59.js",
    "revision": "374df65b9b682f8b352e4cde19517798"
  },
  {
    "url": "assets/js/2.1ea4844d.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.cc00d6a7.js",
    "revision": "6057a59c83bbd86804bdaad145d96004"
  },
  {
    "url": "assets/js/21.22d7f9e5.js",
    "revision": "60f81cf0b854a6e9bcf13588674439b7"
  },
  {
    "url": "assets/js/22.fed602bb.js",
    "revision": "be0693706a1616c24e68a491dcd2af07"
  },
  {
    "url": "assets/js/23.9c9cf32f.js",
    "revision": "ababb98b2fce59099380a5d4ca80a377"
  },
  {
    "url": "assets/js/24.9364b685.js",
    "revision": "af5db62e23211f378001e561508a9cc3"
  },
  {
    "url": "assets/js/26.2b7d224e.js",
    "revision": "d09140fd6d4af5d21412c1e04e0338bb"
  },
  {
    "url": "assets/js/3.33d6b42d.js",
    "revision": "808ea9f2d864b4467fe90f16175227a8"
  },
  {
    "url": "assets/js/4.5d00dd71.js",
    "revision": "354b2b53903cf28623245afa41ac130d"
  },
  {
    "url": "assets/js/5.4b8fb81c.js",
    "revision": "b865b25b78848b369ebb4f7a7684bf5b"
  },
  {
    "url": "assets/js/6.37f402c4.js",
    "revision": "43bdcf1e529c99fca1e216d96833b9ee"
  },
  {
    "url": "assets/js/7.a2994458.js",
    "revision": "817c1a9fc1e6f84583934d814a9ab3f5"
  },
  {
    "url": "assets/js/8.d159d845.js",
    "revision": "229de9f470aa15983a689d6b1daa5fa3"
  },
  {
    "url": "assets/js/9.c0a843c2.js",
    "revision": "6fdef7e064583d735d435c9c7be58314"
  },
  {
    "url": "assets/js/app.b79a4e64.js",
    "revision": "85a46e7c0bfe60b6d037bb382a2eb4d5"
  },
  {
    "url": "conclusion/index.html",
    "revision": "33e2b6af2c2e001e3d701a9e2b4350c4"
  },
  {
    "url": "design/index.html",
    "revision": "f187b73529ba424499c62980a5b1bb5b"
  },
  {
    "url": "index.html",
    "revision": "a72fb7c6a593f20a2cbc41059d387d89"
  },
  {
    "url": "intro/index.html",
    "revision": "35fdea94206659e220b8e52dbe6ab281"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "0ecf053a00d050ac48e06b7553715f12"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "f8d85dedf3a73193e0895091437f0d7e"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "8d40d48acf12501195cc69113c3127f2"
  },
  {
    "url": "software/index.html",
    "revision": "3c76f2f19f997e27572905e573edf1ba"
  },
  {
    "url": "test/index.html",
    "revision": "8a604f03e9d14efc5bf1028ce7b97b3f"
  },
  {
    "url": "use cases/index.html",
    "revision": "c130eaf8dc1bb30365d745f91e095b84"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
