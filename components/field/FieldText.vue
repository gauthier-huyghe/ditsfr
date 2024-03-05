<template>
  <Field :lg="lg" :md="md">
    <p :class="classes">
      <span v-if="text" v-html="text" />
      <slot v-else />
    </p>
  </Field>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
    theme: {
      type: String,
      default: 'default',
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

  computed: {
    classes() {
      return ['field-text', this.theme ? `field-text--${this.theme}` : '']
    },
  },
}
</script>

<style lang="scss">
.field-text {
  @include md-down {
    padding: 0 2rem;
    padding-bottom: 2rem;
  }
  @include rf(15, 15);
  @include font-medium;

  opacity: 0.6;

  a {
    color: var(--color-green);
    text-decoration: underline;
  }
}
</style>
