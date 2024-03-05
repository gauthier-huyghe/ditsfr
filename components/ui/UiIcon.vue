<template>
  <SvgIcon :class="customClasses" :name="icon" />
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
    size: {
      type: String,
      default: 'default',
    },
  },

  computed: {
    customClasses() {
      return ['ui-icon', `ui-icon--${this.size}`]
    },
  },
}
</script>

<style lang="scss">
.ui-icon {
  @include transition(color transform opacity);

  --icon-size: 2.4rem;

  width: var(--icon-size);
  height: var(--icon-size);
  flex: 0 0 var(--icon-size);
  color: inherit;

  &--xxs {
    --icon-size: 1rem;
  }

  &--xs {
    --icon-size: 1.4rem;
  }

  &--sm {
    --icon-size: 1.8rem;
  }

  &--md {
    --icon-size: 2rem;
  }

  &--ml {
    --icon-size: 3rem;
  }

  &--button {
    --icon-size: 3.2rem;
  }

  &--lg {
    --icon-size: 4rem;
  }

  &--xl {
    --icon-size: 5rem;
  }
}
</style>
