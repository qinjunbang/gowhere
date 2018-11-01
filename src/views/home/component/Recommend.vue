<template>
  <div class="recommend">
    <div class="title">热销推荐</div>
    <ul>
      <router-link :to="'/detail/' + item.id"  class="item border-bottom" v-for="item in list" :key="item.id">
        <img :src="item.imgUrl" alt="" class="item-img">
        <div class="item-info">
          <div class="item-title">{{item.title}}</div>
          <div class="item-desc">{{item.desc}}</div>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})

export default class HomeRecommend extends Vue {
  @Prop () list: Array<any>;

}
</script>

<style lang="scss" scoped>
  .title {
    margin-top: .2rem;
    line-height: .8rem;
    background-color: #eee;
    text-indent: .2rem;
  }
  .item {
    display: flex;
    overflow: hidden;
    height: 1.9rem;
    .item-img {
      width: 1.7rem;
      height: 1.7rem;
      padding: .1rem;
    }
    .item-info {
      flex: 1;
      padding: .1rem;
      min-width: 0;
      .item-title {
        line-height: .54rem;
        font-size: .32rem;
      }
      .item-desc {
        line-height: .4rem;
        color: #ccc;
      }
      .item-button {
        line-height: .44rem;
        margin-top: .16rem;
        background-color: #ff9300;
        padding: 0 .2rem;
        border-radius: .06rem;
        color: #fff;
      }
    }
  }
</style>
