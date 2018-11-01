<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{city}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper" v-for="item in hot" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area" v-for="(item, key) in cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom" v-for="vo in item" :key="vo.id" @click="handleCityClick(vo.name)">
            {{vo.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
  import Bscroll from 'better-scroll';
  import { mapState, mapMutations } from 'vuex';

  @Component({
    props: {
        cities: Object,
        hot: Array,
        letter: String
    },
    computed: mapState ({
        city: state => {
          console.log("state", state);
        }

    }),
    methods: {
        ...mapMutations(['changeCity'])
    }
  })

  export default class CityList extends Vue {

    public handleCityClick (city) {
        console.log("city", city);
        this.changeCity(city);
        this.$router.go(-1);
    }

    @Watch('letter')
    onLetterChange () {
        if (this.letter) {
            const ele = this.$refs[this.letter][0];
            this.scroll.scrollToElement(ele);
        }
    }


    public mounted () {
        this.scroll = new Bscroll(this.$refs.wrapper, { mouseWheel: true, click: true, tap: true });
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../../assets/css/varibles.scss';
  .border-topbottom:before, .border-topbottom:after {
    background-color: #ccc;
  }
  .border-bottom:before {
    background-color: #ccc;
  }
  .list {
    overflow: hidden;
    position: absolute;
    top: 1.58rem;
    left: 0;
    right: 0;
    bottom: 0;
    .title {
      line-height: .54rem;
      background-color: #eee;
      padding-left: .2rem;
      color: #666;
      font-size: .26rem;
    }
    .button-list {
      overflow: hidden;
      padding: .1rem .6rem .1rem .1rem;
      .button-wrapper {
        float: left;
        width: 33.33%;
        .button {
          margin: .1rem;
          padding: .1rem 0;
          text-align: center;
          border: .02rem solid #ccc;
          border-radius: .06rem;
        }
      }
    }
    .item-list {
      .item {
        line-height: .76rem;
        padding-left: .2rem;
      }
    }
  }

</style>

