import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import '../assets/vendor/font-awesome/css/font-awesome.css'
import '@/assets/scss/argon.scss'
// Styles
// import globalComponents from './globalComponents'
import globalDirectives from './globalDirectives'
// Directives
import VueScrollTo from 'vue-scrollto'
import VueLazyload from 'vue-lazyload'
// Vendor Plugins
export default {
  install(Vue) {
    Vue.use(VueScrollTo, {
      container: 'body',
      duration: 300,
      easing: 'ease-in-out',
      cancelable: true,
      onDone: false,
      onCancel: false,
    })
    Vue.use(VueLazyload)
    // Vue.use(globalComponents)
    Vue.use(globalDirectives)
  },
}
