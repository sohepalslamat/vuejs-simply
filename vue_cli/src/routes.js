import main from './components/main.vue'
import news from './components/news.vue'
import money from './components/money.vue'

const routes =
[
  { path: '/', component: main, name: "homepage"  },
  { path: '/news', component: news , name: 'news'  },
  { path: '/money', component: money, name: 'money'   }

]

export default routes