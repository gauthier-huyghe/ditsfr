<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="field" :style="styles">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    lg: {
      type: Number,
      default: 12,
    },
    md: {
      type: Number,
      default: 2,
    },
  },

  computed: {
    styles() {
      return [{ '--columns-lg': this.lg }, { '--columns-md': this.md }]
    },
  },
}
</script>

<style lang="scss">
.field {
  --columns-md: 2;
  --columns-lg: 12;

  @include md-down {
    grid-column: span var(--columns-md);
  }
  @include lg-up {
    grid-column: span var(--columns-lg);
  }
}
</style>
