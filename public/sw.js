if (!self.define) {
  let e,
    n = {};
  const s = (s, i) => (
    (s = new URL(s + ".js", i).href),
    n[s] ||
      new Promise((n) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = s), (e.onload = n), document.head.appendChild(e);
        } else (e = s), importScripts(s), n();
      }).then(() => {
        let e = n[s];
        if (!e) throw new Error(`Module ${s} didn’t register its module`);
        return e;
      })
  );
  self.define = (i, a) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (n[c]) return;
    let t = {};
    const o = (e) => s(e, c),
      r = { module: { uri: c }, exports: t, require: o };
    n[c] = Promise.all(i.map((e) => r[e] || o(e))).then((e) => (a(...e), t));
  };
}
define(["./workbox-07a7b4f2"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/18309496_SL-111719-25140-22.jpg",
          revision: "9ffbb6ccf92e983f06bcddbcc428411c",
        },
        {
          url: "/Spinner-1s-200px.svg",
          revision: "a20f550af38b2aa34171e53e6d0915c5",
        },
        {
          url: "/_next/app-build-manifest.json",
          revision: "5cf8140d070c27a204b615939e4aa7ac",
        },
        {
          url: "/_next/static/chunks/274-829845eb8c19f6af.js",
          revision: "nRnoJzqNRJiO-LU2zyWeh",
        },
        {
          url: "/_next/static/chunks/314-91848b4907106b33.js",
          revision: "nRnoJzqNRJiO-LU2zyWeh",
        },
        {
          url: "/_next/static/chunks/326-8c5152e13ea66bb8.js",
          revision: "nRnoJzqNRJiO-LU2zyWeh",
        },
        {
          url: "/_next/static/chunks/472-bab5148a38c51ac7.js",
          revision: "nRnoJzqNRJiO-LU2zyWeh",
        },
        {
          url: "/_next/static/chunks/665-57ff67c0b4149f7d.js",
          revision: "nRnoJzqNRJiO-LU2zyWeh",
        },
        {
          url: "/_next/static/chunks/688-07e08f736cc2b3cb.js",
          revision: "nRnoJzqNRJiO-LU2zyWeh",
        },
        {
          url: "/_next/static/chunks/870fdd6f-bf3888b37eedb795.js",
          revision: "nRnoJzqNRJiO-LU2zyWeh",
        },
        {
          url: "/_next/static/chunks/936-5ac1dcbabd5e5f39.js",
          revision: "nRnoJzqNRJiO-LU2zyWeh",
        },
        {
          url: "/_next/static/chunks/aaea2bcf-47a34bfb180046d4.js",
          revision: "nRnoJzqNRJiO-LU2zyWeh",
        },
        {
          url: "/_next/static/chunks/app/admin/%5Bid%5D/create/page-d570f9b474d24fa6.js",
          revision: "nRnoJzqNRJiO-LU2zyWeh",
        },
        {
          url: "/_next/static/chunks/app/admin/%5Bid%5D/page-2551ff3b879443b2.js",
          revision: "nRnoJzqNRJiO-LU2zyWeh",
        },
        {
          url: "/_next/static/chunks/app/admin/login/page-6fc45dc44b8b1b48.js",
          revision: "nRnoJzqNRJiO-LU2zyWeh",
        },
        {
          url: "/_next/static/chunks/app/admin/register/page-2356516d32189839.js",
          revision: "nRnoJzqNRJiO-LU2zyWeh",
        },
        {
          url: "/_next/static/chunks/app/layout-133ad200d83edbc8.js",
          revision: "nRnoJzqNRJiO-LU2zyWeh",
        },
        {
          url: "/_next/static/chunks/app/not-found-abc4b7b1f1ec8a2e.js",
          revision: "nRnoJzqNRJiO-LU2zyWeh",
        },
        {
          url: "/_next/static/chunks/app/page-c330fbe5fadebbf6.js",
          revision: "nRnoJzqNRJiO-LU2zyWeh",
        },
        {
          url: "/_next/static/chunks/app/policy/page-1dd7beb1093e6721.js",
          revision: "nRnoJzqNRJiO-LU2zyWeh",
        },
        {
          url: "/_next/static/chunks/app/profile/%5Bid%5D/page-c8a14177439c5f22.js",
          revision: "nRnoJzqNRJiO-LU2zyWeh",
        },
        {
          url: "/_next/static/chunks/app/results/page-7381bc8b05f93271.js",
          revision: "nRnoJzqNRJiO-LU2zyWeh",
        },
        {
          url: "/_next/static/chunks/app/user/page-695339db9d15ef7e.js",
          revision: "nRnoJzqNRJiO-LU2zyWeh",
        },
        {
          url: "/_next/static/chunks/cebd11e7-49d8d574af1a8d2b.js",
          revision: "nRnoJzqNRJiO-LU2zyWeh",
        },
        {
          url: "/_next/static/chunks/fd9d1056-cd2b88e80b9a3aa6.js",
          revision: "nRnoJzqNRJiO-LU2zyWeh",
        },
        {
          url: "/_next/static/chunks/framework-43665103d101a22d.js",
          revision: "nRnoJzqNRJiO-LU2zyWeh",
        },
        {
          url: "/_next/static/chunks/main-27d895e40c226a5b.js",
          revision: "nRnoJzqNRJiO-LU2zyWeh",
        },
        {
          url: "/_next/static/chunks/main-app-7a13de8a8864077e.js",
          revision: "nRnoJzqNRJiO-LU2zyWeh",
        },
        {
          url: "/_next/static/chunks/pages/_app-174d3fc0b06857fe.js",
          revision: "nRnoJzqNRJiO-LU2zyWeh",
        },
        {
          url: "/_next/static/chunks/pages/_error-1749fe2efd45c640.js",
          revision: "nRnoJzqNRJiO-LU2zyWeh",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-0602143448bd9c21.js",
          revision: "nRnoJzqNRJiO-LU2zyWeh",
        },
        {
          url: "/_next/static/css/b8ab4d43c094d5ba.css",
          revision: "b8ab4d43c094d5ba",
        },
        {
          url: "/_next/static/css/e2738bb98b23bb4a.css",
          revision: "e2738bb98b23bb4a",
        },
        {
          url: "/_next/static/media/4e1f07ca43cbb031-s.p.ttf",
          revision: "25d7d0f64950db07100481b47403f55e",
        },
        {
          url: "/_next/static/media/icons8-github.2a74d229.svg",
          revision: "2a74d229",
        },
        {
          url: "/_next/static/media/icons8-gmail-96.e16d4c49.png",
          revision: "e16d4c49",
        },
        {
          url: "/_next/static/media/princess.d766807e.png",
          revision: "d766807e",
        },
        { url: "/_next/static/media/queen.db843222.png", revision: "db843222" },
        {
          url: "/_next/static/nRnoJzqNRJiO-LU2zyWeh/_buildManifest.js",
          revision: "6822c4d5aaf7f92a59445cc0c6947e1d",
        },
        {
          url: "/_next/static/nRnoJzqNRJiO-LU2zyWeh/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/android-chrome-192x192-removebg-preview (1).png",
          revision: "75a4ba9ea1a3f84065c670f82b35df91",
        },
        { url: "/favicon.ico", revision: "afc800b0ab3aeaffc8406d5ff82703a4" },
        {
          url: "/icon-192x192.png",
          revision: "5886bbb00ad9ca087c3c346193be5132",
        },
        {
          url: "/icon-256x256.png",
          revision: "d72c89b75c0c01472ff5e3b1e0103693",
        },
        {
          url: "/icon-384x384.png",
          revision: "646601157ea43ffb91d22ab328645a74",
        },
        {
          url: "/icon-512x512.png",
          revision: "2cf1ec2ecce01c5ddddaf86e813745e7",
        },
        {
          url: "/icons8-github.svg",
          revision: "87f2198dea869e4755bae427dc524155",
        },
        {
          url: "/icons8-gmail-96.png",
          revision: "8dc388339018d528a5ccaf300cab2131",
        },
        { url: "/logo.ico", revision: "871f750ecc38c7159cad64d623e4e50c" },
        { url: "/logo.png", revision: "7273a16dea7a2e2b525e321e034f4594" },
        { url: "/manifest.json", revision: "e2eb303c67a4c1d39ba266c93c5deeea" },
        { url: "/princess.png", revision: "61106a4b6335074d6a7e49649e84b7e1" },
        { url: "/queen.png", revision: "27b87627367be5cb11929ad4dda93ca9" },
        { url: "/sample4.jpg", revision: "a32d5bc7a66465dc61de23e281710ab2" },
        { url: "/sample5.jpg", revision: "e05142f0e7357c9be109b8cfd6123e59" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: n,
              event: s,
              state: i,
            }) =>
              n && "opaqueredirect" === n.type
                ? new Response(n.body, {
                    status: 200,
                    statusText: "OK",
                    headers: n.headers,
                  })
                : n,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const n = e.pathname;
        return !n.startsWith("/api/auth/") && !!n.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
