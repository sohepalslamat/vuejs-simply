import main from './components/main.vue'
import news from './components/news.vue'
import money from './components/money.vue'
import seasa from './components/seasa.vue'
import world from './components/world.vue'

const routes =
[
  { path: '/', component: main, name: "homepage"  },
  { path: '/news', component: news , name: 'news', children: [
    { path: 'seasa', component: seasa, name: "seasa"  },
    { path: 'world', component: world, name: "world"  },
  
  ]},
  { path: '/money', component: money, name: 'money'   }

]

export default routes