<template>
  <div id="app">
    <h1>じゃんけんゲーム</h1>
    <game scores="scores"></game>
    <score scores="scores"></score>
  </div>
</template>

<script>
import Game from "./components/game";
import Score from "./components/score";
import Storage from "./util/storage";
let storage = new Storage();

export default {
  name: 'app',
  data() {
    return {
      scores: storage.getData('scores') || []
    };
  },
  watch: {
    scores: 'saveData'
  },
  components: {
    Game,
    Score
  },
  methods: {
    saveData() {
      storage.setData('scores', this.scores)
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
</style>
