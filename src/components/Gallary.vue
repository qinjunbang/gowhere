<template>
  <div class="container" @click="handleGallaryClick">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallary-img" :src="item" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import 'swiper/dist/css/swiper.css';
  import { swiper, swiperSlide } from 'vue-awesome-swiper';

  @Component({
    components: {
      swiper,
      swiperSlide
    },
    props: {
      imgs: {
        type: Array,
        default () {
          return []
        }
      }
    },
  })
  export default class ImageGallary extends Vue {
    swiperOptions = {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction'
      },
      observeParents: true,
      observer: true
    };

    handleGallaryClick () {
      this.$emit('close')
    }
  }
</script>

<style scoped lang="scss">
  .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 99;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background: #000;
    .wrapper {
      height: 0;
      width: 100%;
      padding-bottom: 100%;
      .gallary-img {
        width: 100%;
      }
      .swiper-pagination {
        color: #fff;
        bottom: -1rem;
      }

    }
  }

</style>
