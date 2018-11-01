<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-if="showSwiper">
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import 'swiper/dist/css/swiper.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

@Component({
  components: {
    swiper,
    swiperSlide
  }
})

export default class HomeSwiper extends Vue {
   @Prop() list: Array<any>;

   public swiperOption =  {
     pagination: {
         el: '.swiper-pagination'
     },
     loop: true,
     autoplay: {
       disableOnInteraction: false
     }
   };

   public get showSwiper() {
     return this.list.length;
   }

}
</script>
<style lang="scss">
  .wrapper .swiper-pagination-bullet-active {
    background: #fff;
  }
</style>
<style lang="scss" scoped>
  .wrapper {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 31.25%;
    background: #eee;
  }
  .swiper-img {
    width: 100%;
  }
</style>
