<template>
  <div id="app">
    <h1>じゃんけんゲーム</h1>
    <ul class="nav">
      <li><router-link to="/">ゲーム</router-link></li>
      <li><router-link to="/score">スコア</router-link></li>
    </ul>
    <div class="inner">
      <transition name="fade" mode="out-in">
        <router-view scores="scores"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      scores: []
    };
  },
  created () {
    this.setScore()
  },
  methods: {
    saveData() {
      localStorage.setItem('scores', JSON.stringify(this.scores))
    },
    setScore() {
      this.scores = JSON.parse(localStorage.scores || '[]');
    }
  }
}
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
 ul {
   display: inline-flex;
   list-style: none;
   padding: 0;
 }
 li {
   padding: 10px;
 }

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
</style>
