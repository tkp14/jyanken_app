<template>
  <div id="game">
    <div v-if="resultMessage" class="result">
      <h2>{{ resultMessage }}</h2>
      <button @click="start">もう一度</button>
    </div>

    <div class="imgArea"><img :src="src" alt="">
      <ul>
        <li>
          <button @click="onSelected" class="button" type="button" value="0">グー</button>
        </li>
        <li>
          <button @click="onSelected" class="button" type="button" value="1">チョキ</button>
        </li>
        <li>
          <button @click="onSelected" class="button" type="button" value="2">パー</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Storage from "../util/storage";
  let storage = new Storage();

  export default {
    name: 'game',
    props: ['scores'],
    data () {
      return {
        src: 'dist/imgs/'
      }
    }
  }
</script>

<style>

</style>
