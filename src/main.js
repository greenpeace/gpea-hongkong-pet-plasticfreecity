import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// App.vue
import Vuetify from "vuetify";
Vue.use(Vuetify);
import VueMeta from "vue-meta";
Vue.use(VueMeta);
// Vuetify
import Plugins from "./plugins/plugins";
Vue.use(Plugins);
// Plugins
//
import VueLazyload from "vue-lazyload";
Vue.use(VueLazyload, {
  lazyComponent: true
});
//
import '@/styles/scss/main.scss'
//
Vue.config.productionTip = false;
//


new Vue({
  router,
  store,
  metaInfo: {
    htmlAttrs: {
      lang: "zh"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" }
    ],
    link: [
      {
        rel: "shortcut icon",
        href:
          "https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1853/gp-favicon.png?v=1550651064000"
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "96x96",
        href:
          "https://aaf1a18515da0e792f78-c27fdabe952dfc357fe25ebf5c8897ee.ssl.cf5.rackcdn.com/1853/gp-favicon.png?v=1550651064000"
      },
      { rel: "favicon", href: "favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Material+Icons"
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css"
      },
      {
        rel: "stylesheet",
        href:
          "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.css"
      }
    ],
    script: [
      {
        src:
          "https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js",
        async: false,
        defer: false
      }
    ],
    style: [
      {
        cssText: `.no-js *,
      .no-js-warning,
      .not-supported-browser *,
      .browser-warning {
        display: none !important;
      }

      .no-js body {
        display: block !important;
        width: auto;
        min-width: 0;
        height: auto;
        margin: 20px;
        font-size: 14px;
      }

      .no-js .no-js-warning,
      .no-js .no-js-warning * {
        display: block !important;
      }

      .no-js-warning__logo {
        width: 250px;
        height: auto;
      }

      .not-supported-browser body {
        display: block !important;
        width: auto;
        min-width: 0;
        height: auto;
        margin: 20px;
        font-size: 14px;
      }

      .not-supported-browser .browser-warning,
      .not-supported-browser .browser-warning * {
        display: block !important;
      }

      .browser-warning__logo {
        width: 250px;
        height: auto;
      }

      .browser-warning ul {
        padding-left: 1.5em;
      }

      .not-supported-browser .browser-warning ul li {
        line-height: 1.2em;
        display: list-item !important;
        margin-bottom: 2px;
        list-style-position: outside;
        list-style-type: disc;
      }`,
        type: "text/css"
      },
      {
        cssText: `.slick-track {
        padding-top: 15px;
        padding-bottom: 15px;
      }
      .slick-slide {
        cursor: move;
        cursor: grab;
        min-height: 1px;
        opacity: 0.55;
        transition: all 0.3s ease-in-out;
      }
      .slick-center {
        opacity: 1;
      }`,
        type: "text/css"
      }
    ],
    noscript: [
      {
        innerHTML:
          "請啟用瀏覽器的JavaScript功能，以便正確顯示此頁面。啟用後，請重新載入頁面。"
      }
    ]
  },
  render: h => h(App)
}).$mount("#app");
