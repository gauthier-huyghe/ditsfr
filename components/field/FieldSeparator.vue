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
      return [
        'field-separator',
        this.theme ? `field-separator--${this.theme}` : '',
      ]
    },
  },
}
</script>

<style lang="scss">
.field-separator {
  @include padding-y(0.4rem);
  @include rf(12, 12);
  @include font-normal;
  opacity: 0.6;

  border-bottom: 1px solid $font;
}
</style>
