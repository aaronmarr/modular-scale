import Vue from 'vue'
import App from './App.vue'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import VueRouter from 'vue-router'
import VueHead from 'vue-head'

import '@/assets/css/tailwind.css'

Vue.config.productionTip = false

Vue.use(VueHead)
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About }
  ]
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')