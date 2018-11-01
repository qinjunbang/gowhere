<template>
  <div>
    <div class="search">
      <input type="text" v-model="keyword" class="search-input" placeholder="输入城市名或拼音"/>
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item in list" :key="item.id" @click="handelCityClick(item.name)">
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasData">
          没有找到数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
  import Bscroll from 'better-scroll';

  @Component({
    props: {
      cities: Object
    }
  })

  export default class CitySearch extends Vue {

      public keyword: string = '';
      public list: Array = [];
      public timer;

      // 是否有数据
      get hasData () {
          return !this.list.length;
      }

      // 监听 v-model 绑定的变化
      @Watch ('keyword')
      onKeywordChanged (val: string, oldVal: string) {
        if (this.timer) {
          clearTimeout(this.timer);
        }

        if (!this.keyword) {
          this.list = [];
          return;
        }

        this.timer = setTimeout(() => {
          const result = [];
          console.log("this.cities", this.cities);
          for (let i in this.cities) {
            this.cities[i].forEach((val) => {
              if (val.spell.indexOf(this.keyword) > -1 || val.name.indexOf(this.keyword) > -1) {
                result.push(val)
              }
            });
          }
          this.list = result;
          console.log("this.list", this.list);
        }, 100);
      }

      // 项目初始化完成
      public mounted () {
          this.scroll = new Bscroll(this.$refs.search, { mouseWheel: true, click: true, tap: true });
      }

  }
</script>

<style lang="scss" scoped>
  @import '../../../assets/css/varibles.scss';
  .search {
    height: .72rem;
    padding: 0 .1rem;
    background-color: $bgColor;
    .search-input {
      box-sizing: border-box;
      width: 100%;
      height: .62rem;
      line-height: .62rem;
      padding: 0 .1rem;
      text-align: center;
      border-radius: .06rem;
      color: #666;
    }
  }
  .search-content {
    z-index: 1;
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #eee;
    .search-item {
      line-height: .62rem;
      padding-left: .2rem;
      background-color: #fff;
      color: #666;
    }
  }

</style>

