<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont"></div>
    </div>
    <div class="header-input">
      <span class="iconfont"></span>
      输入城市/景点/游玩主题
    </div>

    <router-link to="/city">
      <div class="header-right">
        {{city}}
        <span class="iconfont icon-down arrow-icon"></span>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapState } from 'vuex';

@Component({
  computed: {
      ...mapState(['city'])
  }
})

export default class Header extends Vue {

  public mounted () {
      console.log("mounted");
  }

}
</script>

<style lang="scss" scoped>
  @import '../../../assets/css/varibles.scss';
  $color: red;
  .header {
    display: flex;
    line-height: $headerHeight;
    background: $bgColor;
    color: #fff;
    .header-left {
      width: .64rem;
      float: left;
      .back-icon {
        text-align: center;
        font-size: .4rem ;
      }
    }
    .header-input {
      flex: 1;
      height: .64rem;
      line-height: .64rem;
      margin-top: .12rem;
      margin-left: .2rem;
      padding-left: .2rem;
      background: #fff;
      border-radius: .1rem;
      color: #ccc;
    }
    .header-right {
      min-width: 1.04rem;
      padding: 0 .1rem;
      float: right;
      text-align: center;
      color: #fff;
      .arrow-icon {
        margin-left: -.04rem;
        font-size: .24rem;
      }

    }

  }
</style>
