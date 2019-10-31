import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// App.vue
import Vuetify from 'vuetify'
Vue.use(Vuetify)
// Vuetify
import Plugins from './plugins/plugins'
Vue.use(Plugins)
// Plugins
Vue.config.productionTip = false
//

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
