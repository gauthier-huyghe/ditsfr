<template>
  <UiContainer v-if="show" classname="the-grid">
    <div class="the-grid__mid" />
    <div v-for="i in 12" :key="i" class="the-grid__col" />
  </UiContainer>
</template>

<script>
export default {
  data() {
    return {
      show: false,
    }
  },
  mounted() {
    window.addEventListener('keyup', this.myMethod)
  },
  unmounted() {
    window.removeEventListener('keyup', this.myMethod)
  },
  methods: {
    myMethod(e) {
      if (e.keyCode === 76 && e.ctrlKey) {
        this.show = !this.show
      }
    },
  },
}
</script>

<style lang="scss">
.the-grid {
  position: fixed !important;
  z-index: 99999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;

  &__inner {
    height: 100%;
    border-left: 1px solid rgba(red, 0.1);
    border-right: 1px solid rgba(red, 0.1);
  }

  &__content {
    @include md-down {
      grid-template-columns: repeat(2, minmax(0, 1fr));
      padding: 0 1.5rem;
    }

    height: 100%;
    display: grid;
    grid-template-columns: repeat(12, minmax(0, 1fr));
    column-gap: 2rem;
    position: relative;
  }

  &__col {
    height: 100%;
    background-color: rgba(red, 0.1);
  }

  &__mid {
    position: absolute;
    width: 1px;
    top: 0;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(red, 0.1);
  }
}
</style>
