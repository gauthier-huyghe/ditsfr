<template>
  <Field :lg="lg" :md="md">
    <div :class="classes">
      <p v-if="suptitle" class="field-title__subtitle" v-html="suptitle" />
      <h2 v-if="title" class="field-title__title" v-html="title" />
      <slot v-else />
    </div>
  </Field>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    suptitle: {
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
    noPadding: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    classes() {
      return [
        'field-title',
        this.theme ? `field-title--${this.theme}` : '',
        this.noPadding ? 'field-title--no-padding' : '',
      ]
    },
  },
}
</script>

<style lang="scss">
.field-title {
  @include md-down {
    padding-bottom: 1rem;
  }
  @include lg-up {
    padding-bottom: 3rem;
  }

  &--no-padding {
    padding-top: 0;
  }

  &__subtitle {
    @include rf(14, 14);
    @include font-normal;
    line-height: 1;
    margin-bottom: 1rem;
  }

  &__title {
    @include rf(28, 28);
    @include font-normal;
    text-transform: uppercase;
    line-height: 1;
  }
}
</style>
