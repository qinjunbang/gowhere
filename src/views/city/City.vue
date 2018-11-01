<template>
  <div class="city">
    <CityHeader></CityHeader>
    <CitySearch :cities="cities"></CitySearch>
    <CityList :cities="cities" :hot="hotCities" :letter="letter"></CityList>
    <CityAlphabet :cities="cities" @change="handleLetterChange"></CityAlphabet>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import http from 'axios';
  import CityHeader from './component/Header.vue';
  import CitySearch from './component/Search.vue';
  import CityList from './component/List.vue';
  import CityAlphabet from './component/Alphabet.vue';

  @Component({
    components: {
      CityHeader,
      CitySearch,
      CityList,
      CityAlphabet
    }
  })

  export default class City extends Vue {

    public cities = {};
    public hotCities = [];
    public letter = '';

    // 项目初始化完成
    public mounted () {
        console.log("mounted");
        this.getCityInfo ();
    }

    // 获取城市json
    public getCityInfo () {
        http.get('/api/city.json').then(res => {
          console.log("res", res);
          if (res.status == 200) {
              let data = res.data.data;
              this.cities = data.cities;
              this.hotCities = data.hotCities;

          }
        }).catch(error => {
            console.log("error", error);
        });
    }

    // 右边字母被点击
    public handleLetterChange (letter) {
        console.log("letter", letter);
        this.letter = letter;
    }
  }
</script>

<style lang="scss" scoped>


</style>

