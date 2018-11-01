<template>
  <div class="detail">
    <DetailBanner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="bannerImgs"></DetailBanner>
    <DetailHeader></DetailHeader>
    <div class="content">
      <DetailList :list="list"></DetailList>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import axios from 'axios';
  import DetailBanner from './component/Banner.vue';
  import DetailHeader from './component/Header.vue';
  import DetailList from './component/List.vue';

  @Component({
    components: {
      DetailBanner,
      DetailHeader,
      DetailList
    }
  })

  export default class Detail extends Vue {

    sightName = '';
    bannerImg = '';
    bannerImgs = [];
    list = [];

    // get data
    getDetailInfo () {
      axios.get('/api/detail.json', {
          params: {
              id: this.$route.params.id
          }
      }).then(res => {
          console.log("res", res);
          if (res.status == 200) {
            const data = res.data.data;
            this.sightName = data.sightName;
            this.bannerImg = data.bannerImg;
            this.bannerImgs = data.gallaryImgs;
            this.list = data.categoryList;
          }
      });
    }


    // 页面初始化完成
    mounted () {
        this.getDetailInfo()
    }
  }
</script>

<style lang="scss" scoped>
  .content {
    height: 50rem;
  }
</style>
