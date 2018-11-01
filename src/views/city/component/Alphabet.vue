<template>
  <ul class="alphabet">
    <li class="item" v-for="item in letters" :key="item" :ref="item"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
        @click="handleLetterClick">
      {{item}}
    </li>
  </ul>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component({})

  export default class CityAlphabet extends Vue {

      @Prop () cities: Object;

      public touchStatus = false; // 滑动的状态
      public timer; // 定时计
      public startY = 0;

      // 获取字母
      public get letters () {
          const arr = [];
          for (let key in this.cities) {
              arr.push(key);
          }

          return arr;
      }

      // 点击letters
      public handleLetterClick (e) {

        const text = e.target.innerText;
        this.$emit('change', text);

      }




      // 开始滑动
      public handleTouchStart () {
          this.touchStatus = true;
      }


      // 滑动中
      public handleTouchMove (e) {
          if (this.touchStatus) {
              if (this.timer) {
                  clearTimeout(this.timer);
              }

              this.timer = setTimeout(() => {
                const touchY = e.touches[0].clientY - 79;
                const index = Math.floor((touchY - this.startY) / 20);
                console.log("index", index);
                if (index >= 0 && index < this.letters.length) {
                  this.$emit('change', this.letters[index]);
                }
              }, 16);
          }
      }

      // 滑动结束
      public handleTouchEnd () {
          this.touchStatus = false;
      }

      // 数据改变，页面重新渲染
      public updated () {
        this.startY = this.$refs['A'][0].offsetTop
      }

  }
</script>

<style lang="scss" scoped>
  @import '../../../assets/css/varibles.scss';
  .alphabet {
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: absolute;
    top: 1.58rem;
    right: 0;
    bottom: 0;
    width: .4rem;
    .item {
      line-height: .4rem;
      text-align: center;
      color: $bgColor;
    }
  }

</style>

