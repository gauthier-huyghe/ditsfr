<template>
  <div
    class="ui-text"
    :class="[`ui-text--${theme}`, { truncate }]"
    :style="{ '--lines': truncate }"
    v-html="text"
  />
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    theme: {
      type: String,
      default: '',
    },
    truncate: {
      type: [String, Number],
      default: '',
    },
  },
}
</script>

<style lang="scss">
.ui-text {
  @include wysiwyg;
  color: var(--color-font);

  &.truncate {
    -webkit-line-clamp: var(--lines);
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  // °_°_°_°_°_°
  // THEMES
  // °_°_°_°_°_°
}
</style>
