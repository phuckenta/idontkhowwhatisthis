import Vue from 'vue'
import App from './App.vue'
import VueToast from 'vue-toast-notification';
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { BootstrapVueIcons } from 'bootstrap-vue'
import i18n from './lang/i18n'

Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueToast, {
  position: 'top-right',
  type: "success",
  duration: 3000,
  dismissible: true
})
library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(require('vue-moment'));
new Vue({
  router,
  store,
  i18n,
  render: h => h(App),
}).$mount('#app')
