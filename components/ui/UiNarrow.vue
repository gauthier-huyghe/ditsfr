<template>
  <Component
    :is="tag"
    class="ui-narrow"
    :style="{ '--left': left, '--right': right }"
  >
    <slot />
  </Component>
</template>

<script>
export default {
  props: {
    left: {
      type: [Number, String],
      default: 3,
    },
    right: {
      type: [Number, String],
      default: 3,
    },
    tag: {
      type: String,
      default: 'div',
    },
  },
}
</script>

<style lang="scss">
.ui-narrow {
  --left: 3;
  --right: 3;

  @include lg-up {
    padding-left: calc(100% / 12 * var(--left));
    padding-right: calc(100% / 12 * var(--right));
  }
}
</style>
