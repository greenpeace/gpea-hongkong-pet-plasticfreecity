import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader
import '../assets/vendor/font-awesome/css/font-awesome.css'
// Styles
import clickOutside from "../directives/click-ouside.js";
// import GlobalDirectives from './globalDirectives'
// Directives
import VueScrollTo from 'vue-scrollto'
// Vendor Plugins
export default {
  install(Vue) {
    Vue.directive("click-outside", clickOutside);
    //
    Vue.use(VueScrollTo, {
      container: 'body',
      duration: 300,
      easing: 'ease-in-out',
      cancelable: true,
      onDone: false,
      onCancel: false,
    })
  },
}
