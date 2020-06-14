import Vue from 'vue'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import CoreuiVue from '@coreui/vue'
import Vuex from 'vuex'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'


import { router } from '../src/router/router';
import store from './store'

import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

Vue.use(Vuelidate)
Vue.use(Vuex)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(CoreuiVue)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: store,
  router
}).$mount('#app')


// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: {
//     App
//   }
// })