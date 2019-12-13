import 'vuetify/dist/vuetify.min.css'
// Styles
import clickOutside from "../directives/click-ouside.js";
// import GlobalDirectives from './globalDirectives'
// Directives
import VueScrollTo from 'vue-scrollto'
import Transitions from "vue2-transitions";
// Vendor Plugins
export default {
  install(Vue) {
    Vue.directive("click-outside", clickOutside);
    //
    Vue.use(Transitions);
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
