import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import main from './components/main.vue'
import news from './components/news.vue'
import money from './components/money.vue'

Vue.config.productionTip = false

Vue.use(VueRouter)
const routes =
[
  { path: '/', component: main  },
  { path: '/news', component: news  },
  { path: '/money', component: money  }

]
const router = new VueRouter({
  routes
  
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
