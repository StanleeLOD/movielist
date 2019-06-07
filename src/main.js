import Vue from 'vue'
import './plugins/axios'
import App from './App.vue'
import store from './store'

import MoviesList from './components/MoviesList.vue';

Vue.config.productionTip = false

Vue.component('MoviesList', MoviesList);

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
