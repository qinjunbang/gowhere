<template>
  <div class="weekend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in list" :ken="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" alt="" class="item-img">
        </div>
        <div class="item-info">
          <div class="item-title">{{item.title}}</div>
          <div class="item-desc">{{item.desc}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})

export default class HomeWeekend extends Vue {

    @Prop() list: Array<any>;

}
</script>

<style lang="scss" scoped>
  .title {
    line-height: .8rem;
    background-color: #eee;
    text-indent: .2rem;
  }
  .item-img-wrapper {
    overflow: hidden;
    height: 0;
    padding-bottom: 37.09%;
    .item-img {
      display: block;
      width: 100%;
    }
  }
  .item-info {
    padding: .1rem;
    .item-title {
      line-height: .54rem;
      font-size: .32rem;
    }
    .item-desc {
      line-height: .4rem;
      color: #ccc;
    }
  }
</style>
