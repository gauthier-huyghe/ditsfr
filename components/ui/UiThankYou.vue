<template>
  <div class="thank-you" :class="`thank-you--${theme}`">
    <UiIcon class="thank-you__icon" icon="checkmark" />
    <UiTitle size="sm" :title="title" no-margin />
    <p class="thank-you__text" v-html="text" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    theme: {
      type: String,
      default: '',
    },
  },
}
</script>

<style lang="scss">
.thank-you {
  @include flex-end-stretch;
  @include flex-col;

  --border-color: var(--color-font);
  --color: var(--color-font);

  position: relative;
  border-radius: 1.5rem;
  border: 1.5px solid var(--border-color);
  text-align: left;
  color: var(--color-font);
  margin-top: 2rem;

  @include md-down {
    padding: 2rem 6rem;
  }
  @include lg-up {
    height: 20rem;
    padding: 3rem 2rem;
  }

  &__text {
    margin-top: 1rem;
    line-height: 1;
  }

  &__icon {
    z-index: 1;
    position: absolute;
    top: 2rem;
    left: 2rem;
  }

  // °_°_°_°_°
  // THEMES
  // °_°_°_°_°

  // DEFAULT
  & {
    --border-color: #{rgba($font, 0.1)};
  }
  // WHITE
  &--white {
    --border-color: var(--bg);
    --color: var(--color-alt);
  }
}
</style>
