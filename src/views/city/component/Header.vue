<template>
  <div class="city">
    <div class="header">
      城市选择
      <router-link to="/">
        <div class="iconfont icon-left header-back"></div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';

  @Component({})

  export default class CityHeader extends Vue {


  }
</script>

<style lang="scss" scoped>
  @import '../../../assets/css/varibles.scss';
  .header {
    position: relative;
    overflow: hidden;
    height: $headerHeight;
    line-height: $headerHeight;
    text-align: center;
    color: #fff;
    background-color: $bgColor;
    font-size: .32rem;
    .header-back {
      position: absolute;
      top: 0;
      left: 0;
      width: .64rem;
      text-align: center;
      font-size: .4rem;
      color: #fff;
    }
  }

</style>

