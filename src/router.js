import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'game',
      component: Game
    },
    {
      path: '/score',
      name: 'score',
      component: Score
    }
  ]
})
