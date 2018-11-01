<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img :src="bannerImg" alt="" class="banner-img">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont "></span>
          {{bannerImgs.length}}
        </div>
      </div>
    </div>

    <FadeAnimation>
      <Gallary :imgs="bannerImgs" v-show="showGallary" @close="handleGallaryClose">

      </Gallary>
    </FadeAnimation>
  </div>

</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import Gallary from '../../../components/Gallary.vue';
  import FadeAnimation from '../../../components/FadeAnimation.vue';

  @Component({
    components: {
      Gallary,
      FadeAnimation
    },
    props: {
      sightName: String,
      bannerImg: String,
      bannerImgs: Array
    }
  })

  export default class DetailBanner extends Vue {

    showGallary = false;

    // 点击图片，查看详情
    handleBannerClick () {
      this.showGallary = true;
    }

    // 点击页面，关闭详情
    handleGallaryClose () {
      this.showGallary = false;
    }

  }
</script>

<style lang="scss" scoped>
  .banner {
    position: relative;
    overflow: hidden;
    height: 0;
    padding-bottom: 55%;
    .banner-img {
      display: block;
      width: 100%;
    }
    .banner-info {
      display: flex;
      position: absolute;
      right: 0;
      bottom: 0;
      left: 0;
      line-height: .6rem;
      color: #fff;
      background-image: linear-gradient(top, rgba(0,0,0,0), rgba(0,0,0,.8));
      .banner-title {
        flex: 1;
        font-size: .32rem;
        padding: 0 .2rem;
      }
      .banner-number {
        height: .32rem;
        line-height: .32rem;
        margin-top: .14rem;
        padding: 0 .4rem;
        border-radius: .2rem;
        background-color: rgba(0,0,0,.8);
        font-size: .24rem;
        .banner-icon {
          font-size: .24rem;
        }
      }
    }
  }
</style>
