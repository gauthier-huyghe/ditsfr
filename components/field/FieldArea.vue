<template>
  <Field :lg="lg" :md="md">
    <ValidationProvider
      v-slot="{ errors, invalid }"
      slim
      :rules="rules"
      :name="label"
    >
      <div
        :class="[
          customClasses,
          { 'is-invalid': invalid },
          { 'is-disabled': disabled },
          { 'has-error': errors.length },
        ]"
      >
        <label class="form-area__label" :for="name">
          <span
            class="form-area__top"
            :class="{ small: focus || active }"
            v-text="label"
          ></span>
          <textarea
            :id="name"
            v-model="fieldValue"
            class="form-area__field"
            :name="name"
            :disabled="disabled"
          />
        </label>
        <FieldError class="form-area__error" :errors-bag="errors" />
      </div>
    </ValidationProvider>
  </Field>
</template>

<script>
import { ValidationProvider } from 'vee-validate'

export default {
  components: {
    ValidationProvider,
  },

  props: {
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: [String, Object],
      required: true,
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

  data() {
    return {
      fieldValue: '',
    }
  },

  computed: {
    customClasses() {
      return ['form-area', { 'is-active': this.active }]
    },
    active() {
      return this.fieldValue !== ''
    },
  },

  watch: {
    value() {
      this.fieldValue = this.value
    },
    fieldValue(val) {
      this.$emit('input', val)
    },
  },

  created() {
    this.fieldValue = this.value
  },
}
</script>

<style lang="scss">
.form-area {
  $e: &;

  @include transition(margin);

  width: 100%;

  &__label {
    @include transition(color border-color);
    @include font-medium;

    // border-radius: 2.7rem;
    border-bottom: 1px solid var(--border);
    color: var(--color-font);
    position: relative;
    display: block;

    &:focus-within {
      @include focus;
    }
  }

  &__top {
    @include transition(color font-size top opacity);
    @include rf(14, 14);
    @include font-normal;
    @include margin-y(0, 0.5rem);

    position: absolute;
    top: 1.9rem;
    left: 0.1rem;
    opacity: 0.8;
    display: block;
    width: 100%;
    z-index: 0;
    color: var(--color-font);
  }

  &:focus-within &__top,
  &__top.small {
    @include rf(11, 11);
    opacity: 0.4;
    top: 0.5rem;
  }

  &__field {
    @include transition(color);
    @include bg-transparent;
    @include rf(16, 16);
    @include font-normal;
    @include size(100%, 10rem);
    color: var(--color-font);
    line-height: $leading-tight;
    outline: none;
    vertical-align: top;
    resize: vertical;
    padding-top: 2.5rem;
    // border-radius: 2.7rem;

    &::-ms-clear {
      display: none;
    }
  }
  &__error {
  }

  // &.has-error {
  // }

  // &.is-active {
  // }

  // &.is-focus {
  // }
  &.is-disabled {
    #{$e}__label {
      opacity: 0.5;
    }
    #{$e}__field {
      cursor: not-allowed;
    }
  }

  // °_°_°_°_°
  // THEMES
  // °_°_°_°_°

  // DEFAULT
  & {
  }
}
</style>
