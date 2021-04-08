<template>
  <div id="game">
    <div v-if="resultMessage" class="result">
      <h2>{{ resultMessage }}</h2>
      <button @click="start">もう一度</button>
    </div>
    <div class="imgArea"><img :src="src" alt=""></div>
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
</template>

<script>



  export default {
    name: 'game',
    props: ['scores'],
    data () {
      return {
        src: '@/assets/imgs/janken_choki.png',
        imgList: [
          require('@/assets/imgs/janken_choki.png'),
          require('@/assets/imgs/janken_pa.png'),
          require('@/assets/imgs/janken_gu.png')
        ],
        timer: null,
        resultMessage: ''
      }
    },
    created () {
      this.start();
    },
    methods: {
      changeImg(number) {
        if(number && Math.abs(number) <= this.imgList.length) {
          this.src = this.imgList[number];
        } else {
          var num = Math.floor(Math.random() * this.imgList.length);
          this.src = this.imgList[num];
        }
      },
      start () {
        this.reset();
        this.timer = setInterval(() => {
          this.changeImg();
        }, 100);
      },
      onSelected(e) {
        clearInterval(this.timer);

        let button = e.target;
        let resultNum = parseInt(this.imgList.indexOf(this.src), 10);
        let selectNum = parseInt(button.value, 10);
        let decision = this.decisionJanken(selectNum, resultNum);

        var btns = document.querySelectorAll('.button');
        for( let btn of btns ) {
          btn.setAttribute('disabled', true);
        }

        if(decision == 1) {
          this.resultMessage = '勝ち';
        } else if (decision == 2){
          this.resultMessage = '引き分け';
        } else {
          this.resultMessage = '負け';
        }
        this.$parent.$data.scores.push({ message: this.resultMessage });
        button.classList.add('is-selected');
      },
      reset() {
        var btns = document.querySelectorAll('.button');
        for( let btn of btns ) {
          btn.removeAttribute('disabled');
          btn.classList.remove('is-selected');
        }
        this.resultMessage = '';
      },
      decisionJanken(myHand, youHand) {
        let result = 0; // 0は負け、1は勝ち、2は引き分け
        switch(myHand) {
          case 'myHand(0)':
            youHand(1);
            break;
          case 'myHand(1)':
            youHand(0);
            break;
          case 'myHand(2)':
            youHand(2);
            break;
          //ジャンケンの判定
        }
        return result;
      }
    }
  }
</script>

<style scoped>
#game {
  margin: 0 auto;
}

img {
  width: 50ox;
  height: 50px;
}

ul {
  display: inline-flex;
  list-style: none;
  padding: 0;
}
li {
  margin: 10px;
}
</style>
