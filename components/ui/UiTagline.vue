<template>
  <Component :is="tag" class="ui-tagline" :class="classes">
    <span v-if="text" ref="title" v-html="text" />
    <slot v-else />
  </Component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'p',
    },
    text: {
      type: String,
      default: '',
    },
    theme: {
      type: String,
      default: '',
    },
    noMargin: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return [
        { 'no-margin': this.noMargin },
        this.theme && `ui-tagline--${this.theme}`,
      ]
    },
  },
}
</script>

<style lang="scss">
.ui-tagline {
  @include rf(9, 11);
  @include font-light;
  line-height: 1.05;
  letter-spacing: 0.2em;
  text-transform: uppercase;

  &.no-margin {
    margin: 0;
  }

  // °_°_°_°_°_°
  // THEMES
  // °_°_°_°_°_°
  &--red {
    // --color: var(--color-primary);
  }
}
</style>
