<template>
  <div class="form-switcher">
    <label class="form-switcher__inner" :for="`cookies-${name}`">
      <span class="form-switcher__label">
        <slot />
      </span>
      <input
        :id="`cookies-${name}`"
        class="form-switcher__field"
        :value="value"
        :checked="value"
        type="checkbox"
        :name="name"
        @input="$emit('input', !value)"
      />
      <i class="form-switcher__i" />
    </label>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.form-switcher {
  width: 100%;

  &__inner {
    @include flex-between-center;
    @include padding-y(0);

    min-height: 0;
    position: relative;
    width: 100%;
    cursor: pointer;
  }

  &__field {
    @include hide-visually;

    outline: none;
  }

  &__label {
    @include flex-auto;
    @include rf(14, 14);
    @include font-medium;
    @include text-font;

    line-height: $leading-snug;

    .title {
      display: block;
    }

    .desc {
      @include rf(12, 12);
      @include font-medium;
      @include text-font-alt;

      display: block;
    }
  }

  &__i {
    @include size(4.5rem, 2.4rem);

    position: relative;
    vertical-align: middle;
    flex: 0 0 auto;
    border-radius: 1.4rem;
    background: none;
    border: 1px solid rgba($border, 0.3);
    transition: 0.25s 0.09s;

    @include hover {
      background: darken($secondary, 2%);
    }

    &::after {
      @include rounded-full;
      @include size(1.8rem);

      position: absolute;
      display: block;
      left: 0.2rem;
      top: 0.2rem;
      content: ' ';
      transition: 0.25s;
      background-color: currentColor;
      opacity: 0.25;
    }

    &:hover,
    &:focus {
      background: none;
      border-color: $border;
    }
  }

  &__field:checked + &__i::after {
    transform: translateX(21px);
    opacity: 1;
  }
}
</style>
