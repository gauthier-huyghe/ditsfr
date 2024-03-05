<template>
  <Field
    :lg="lg"
    :md="md"
    class="field-submit"
    :class="`field-submit--${theme}`"
  >
    <UiButton
      type="submit"
      :is-loading="loading"
      :chevron="theme === 'submitfull' ? true : false"
      class="field-submit__submit"
      :disabled="disabled"
      :theme="theme"
    >
      <slot />
    </UiButton>
  </Field>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: '',
    },
    lg: {
      type: Number,
      default: 12,
    },
    md: {
      type: Number,
      default: 2,
    },
  },
}
</script>

<style lang="scss">
.field-submit {
  @include md-down {
    padding-top: 0;
  }
  @include lg-up {
    padding-top: 1rem;
  }

  // THEMES

  --color-font: var(--color-font-alt);
}
</style>
