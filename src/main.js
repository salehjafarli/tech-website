import Vue from 'vue'
import App from './App.vue'
import navbar from './components/Nav.vue'
import router from './routes'

Vue.component('app-navbar', navbar)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
