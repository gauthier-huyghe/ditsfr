<template>
  <Component
    :is="tag"
    class="ui-title"
    :class="[size, { 'no-margin': noMargin, regular }]"
  >
    <span v-if="title" ref="title" class="ui-title__title" v-html="title" />
    <span
      v-if="subtitle"
      ref="subtitle"
      class="ui-title__subtitle"
      v-html="subtitle"
    />
    <slot v-else />
  </Component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'h2',
    },
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: 'default',
    },
    noMargin: {
      type: Boolean,
      default: false,
    },
    regular: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.ui-title {
  $e: &;

  color: var(--color-font);
  transition: color 400ms $ease-in-out;
  letter-spacing: $letter-tight;
  line-height: 1;
  margin-bottom: 1em;

  &.xxl,
  &.xl,
  &.lg,
  &.default {
    // @include font-medium;
  }
  &.md,
  &.sm,
  &.xs,
  &.xxs {
    // @include font-semibold;
  }

  // Home
  &.home {
    @include rf(20, 32);
    @include font-medium;
    text-transform: uppercase;
    margin-bottom: 0.75em;
    letter-spacing: 0;

    sup {
      font-size: 0.4em;
      top: -1em;
    }
  }

  &.homedouble {
    @include rf(40, 60);
    @include font-medium;
    text-transform: uppercase;
    margin-bottom: 0.2em;
    letter-spacing: 0;
    line-height: 0.8;

    #{$e}__subtitle {
      margin-top: 0;
    }

    sup {
      font-size: 0.4em;
      top: -1em;
    }
  }

  &.xxl {
    @include rf(46, 80);
    @include font-light;
    line-height: 0.95;
    margin-bottom: 0.5em;

    strong {
      @include font-medium;
    }
  }

  // DITS 2.0
  &.xl {
    @include rf(36, 56);
    @include font-light;

    margin-bottom: 0.75em;
  }

  &.lg {
    @include rf(36, 48);

    margin-bottom: 0.875em;
  }

  &.default {
    @include rf(28, 34);

    margin-bottom: 0.9375em;
  }

  &.md {
    @include rf(22, 28);
  }

  &.sm {
    @include rf(20, 24);

    margin-bottom: 3rem;
    line-height: 1.1;
  }

  &.xs {
    @include rf(16, 20);

    margin-bottom: 1rem;
  }

  &.xxs {
    @include rf(16, 18);

    margin-bottom: 0.75rem;
  }

  &.no-margin {
    margin: 0;
  }

  &.regular {
    @include font-regular;
  }

  small {
    @include rf(16, 16);
    @include font-medium;
    opacity: 0.3;
  }

  &__subtitle {
    margin-top: 0.7em;
    display: block;
    font-size: 0.83em;
    @include font-light;

    em {
      font-size: 1.4em;
      font-style: normal;
    }
  }
}
</style>
