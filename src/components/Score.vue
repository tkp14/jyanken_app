<template>
  <div id="score">
    <h2>せいせき</h2>
    <button type="button" @click.prevent="dataReset">クリア</button>
    <ul v-if="scores">
      <li v-for="(score, i) of $parent.$data.scores" v-bind:key="score.id">
        <span>{{ (i + 1) }}:</span>
        {{ score.message }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'score',
  props: ['scores'],
  data() {
    return{}
  },
  methods: {
    dataReset() {
      this.$parent.$data.scores = [];
    }
  }
}
</script>

<style scoped>

</style>
