<template>
  <transition
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
    <div v-if="show" class="the-loader" :class="{ startAnim }">
      <div class="the-loader__div">
        <img class="the-loader__img" src="/img/Logo.png" alt="logo" />
        <img class="the-loader__loader" :src="loader" alt="Loader" />
      </div>
    </div>
  </transition>
</template>

<script>
import { wait } from '@unanim/helpers'
import loader from '@/assets/images/loading.svg'

export default {
  data: () => ({
    startAnim: false,
    show: true,
    loader,
  }),
  mounted() {
    this.startAnim = true

    wait(1200, () => {
      this.show = false
    })
  },
}
</script>

<style lang="scss">
.the-loader {
  @include flex-start-stretch;
  position: fixed !important;
  z-index: 99999;
  left: 0;
  top: 0;
  width: 100%;
  pointer-events: none;
  padding: var(--header-main) var(--gutter) var(--gutter) var(--gutter);
  background: $background;
  z-index: 100;

  @include md-down {
    height: -webkit-fill-available;
  }
  @include lg-up {
    min-height: 70rem;
    height: 100vh;
  }

  &__img {
    @include size(15.4rem, 3.3rem);
    @include center-abs;
    transition: all 1s $ease-in-out-circ;
    z-index: 1;
  }

  &__div {
    @include flex-auto;
    position: relative;
    width: 100%;
    max-width: calc($page-max - (var(--gutter) * 2));
    margin: 0 auto;
    border-top-left-radius: var(--global-radius);
    border-bottom-right-radius: var(--global-radius);
    background: rgba($foreground, 0.2);

    z-index: 1;
  }

  &__loader {
    position: absolute;
    left: 50%;
    top: calc(50% + 3rem);
    transform: translate(-50%, -50%);
    width: 3rem;
    transition: opacity 0.5s linear;
  }

  &.startAnim {
    .the-loader {
      &__div {
      }
      &__img {
        left: calc(var(--global-radius));
        transform: translate(0, 0);
        top: -5.5rem;
      }
      &__loader {
        opacity: 0;
      }
    }
  }
}
</style>
