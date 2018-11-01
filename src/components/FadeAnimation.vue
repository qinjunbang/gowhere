<template>
    <transition>
      <slot></slot>
    </transition>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class FadeAnimation extends Vue {

}
</script>


<style scoped lang="scss">
  .v-enter,
  .v-leave-to {
    opacity: 0;
  }
  .v-enter-active,
  .v-leave-active {
    transition: opacity .5s;
  }
</style>
