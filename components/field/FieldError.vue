<template>
  <UiSlideUpDown
    class="form-error"
    :class="`form-error--${theme}`"
    :active="hasErrors"
  >
    <span class="form-error__content" v-html="errorMessage" />
  </UiSlideUpDown>
</template>

<script>
export default {
  props: {
    errorsBag: {
      type: Array,
      default: () => {
        return []
      },
    },
    theme: {
      type: String,
      default: '',
    },
  },

  computed: {
    hasErrors() {
      return this.errorMessage !== ''
    },
    errorMessage() {
      return this.errorsBag[0] || ''
    },
  },
}
</script>

<style lang="scss">
.form-error {
  --color: var(--color-alert);

  &__content {
    @include padding-y(0.6rem, 0);
    @include rf(13, 14);

    display: block;
    color: var(--color);
  }
  // °_°_°_°_°_°_°
  // THEMES
  // °_°_°_°_°_°_°

  &--overlay {
    --color: var(--color-alt);
  }
  &--white {
    --color: var(--color-alt);
  }
}
</style>
