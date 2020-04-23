import Vue from 'vue'
import App from './App.vue'
import routes from './routes'
import VueRouter from 'vue-router'
import store from './store/store'

Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})


new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
