import Vue from 'vue';
import Router from 'vue-router';
const Game = () => import("./components/Game.vue");
const Score = () => import("./components/Score.vue");

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'game',
      components: {
        default: Game
      }
    },
    {
      path: '/score',
      name: 'score',
      components: {
        default: Score
      }
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
});
