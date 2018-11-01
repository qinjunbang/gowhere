<template>
  <div class="icons">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="page in pages">
        <div class="flex">
          <div class="flex-item" v-for="item in page" :key="item.id">
            <div class="icons-img">
              <img :src="item.imgUrl" alt="">
            </div>
            <div class="icons-text">
              {{item.desc}}
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

@Component({
  components: {
    swiper,
    swiperSlide
  }
})

export default class HomeIcons extends Vue {

  @Prop () list: Array;

  // 步长
  public limit: number = 8;

  public swiperOptions: Object = {
    autoplay: false
  };

  public get pages () {
      const pages = [];
      this.list.forEach((item, index) =>{
          const i = Math.floor(index / this.limit);

          if (!pages[i]) {
              pages[i] = [];
          }

          pages[i].push(item);
      });

      return pages;
  };

}
</script>

<style lang="scss" scoped>
  .icons {
    padding-bottom: .2rem;
  }
  .flex {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .flex-item {
      width: 25%;
      height: 0;
      padding-bottom: 28%;
    }
    .icons-img {
      padding: .3rem .3rem .2rem;
    }
    .icons-img img {
      display: block;
      width: 100%;
      height: 100%;
    }
    .icons-text {
      color: #666;
      text-align: center;
    }
  }

</style>
