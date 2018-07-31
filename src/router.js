import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Nominate from './views/Nominate.vue'
import Vote from './views/Vote.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
    path: '/nominate',
    name: 'nominate',
    component: Nominate
    },
    {
      path: '/vote',
      name: 'vote',
      component: Vote

    }
  ]
})
