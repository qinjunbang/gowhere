<template>
  <div class="home">
    <Header></Header>
    <HomeSwiper :list="list"></HomeSwiper>
    <HomeIcons :list="iconList"></HomeIcons>
    <HomeRecommend :list="recommendList"></HomeRecommend>
    <HomeWeekend :list="weekendList"></HomeWeekend>
  </div>
</template>

<script lang="ts">
import { Component, Prop ,Vue } from 'vue-property-decorator';
import axios  from 'axios';
import { mapState } from 'vuex';
import Header from './component/Header.vue';
import HomeSwiper from './component/Swiper.vue';
import HomeIcons from './component/Icons.vue';
import HomeRecommend from './component/Recommend.vue';
import HomeWeekend from './component/Weekend.vue';

@Component({
  components: {
    Header,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  computed: {
      ...mapState(['city'])
  }
})
export default class Home extends Vue {

    public list = [];
    public iconList = [];
    public recommendList = [];
    public weekendList = [];
    public lastCity = '';

    public getHomeInfo () {
      axios.get("/api/index.json?city="+ this.city).then((res) => {
        console.log("res", res);
        const data = res.data.data;
        this.list = data.swiperList;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      });
    }

    // 呈现整个视图之后才运行 (当使用keep-alive，只执行一次)
    mounted () {
        console.log("mounted");
        this.lastCity = this.city;
        this.getHomeInfo();
    }

    // keep-alive 组件激活时调用
    activated () {
      if (this.lastCity != this.city) {
        this.lastCity = this.city;
        this.getHomeInfo();
      }
    }

}

</script>
