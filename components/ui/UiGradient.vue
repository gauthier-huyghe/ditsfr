<template>
  <div class="ui-gradient" :class="theme" />
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: 'default',
    },
  },
}
</script>

<style lang="scss">
.ui-gradient {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;

  &.default {
    background-image: linear-gradient(
      56deg,
      rgba(#000, 0.7),
      rgba(#000, 0) 66%
    );
  }

  // THEMES
  &.page {
    background-image: linear-gradient(
      10deg,
      rgba(#000, 0.25),
      rgba(#000, 0) 50%
    );
  }
}
</style>
