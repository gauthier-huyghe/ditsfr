<template>
  <Field :lg="lg" :md="md">
    <ValidationProvider
      v-slot="{ errors, invalid }"
      :rules="rules"
      :name="name"
      :vid="name"
      slim
    >
      <div
        :class="[
          customClasses,
          { 'is-invalid': invalid },
          { 'has-error': errors.length },
          { 'is-disabled': disabled },
        ]"
      >
        <label class="field-input__label" :for="name">
          <input
            :id="name"
            v-model="fieldValue"
            class="field-input__field"
            :type="theType"
            :name="name"
            :maxlength="maxLength"
            :disabled="disabled"
          />
          <span class="field-input__top" :class="{ small: active }">
            {{ label }} <i v-if="required">*</i>
          </span>
          <div class="field-input__reveal-password">
            <UiIconButton
              v-if="type === 'password'"
              :icon="revealPassword ? 'eye-close' : 'eye'"
              no-border
              @click="revealPassword = !revealPassword"
            />
          </div>
          <div class="field-input__button">
            <slot />
          </div>
        </label>
        <FieldError
          :theme="theme"
          class="field-input__error"
          :errors-bag="errors"
        />
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
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
    rules: {
      type: [String, Object],
      default: '',
    },
    required: {
      type: Boolean,
      required: false,
      default: false,
    },
    maxLength: {
      type: Number,
      default: 255,
    },
    disabled: {
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

  data: () => ({
    fieldValue: '',
    revealPassword: false,
  }),

  computed: {
    customClasses() {
      return [
        'field-input',
        this.theme ? `field-input--${this.theme}` : '',
        { 'is-active': this.active },
      ]
    },
    active() {
      return this.fieldValue !== ''
    },
    theType() {
      if (this.type === 'password') {
        return this.revealPassword ? 'text' : 'password'
      } else {
        return this.type
      }
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
.field-input {
  $e: &;

  @include transition(margin);

  width: 100%;
  position: relative;

  // REMOVE EDGE PASSWORD REVEAL
  ::-ms-reveal {
    display: none;
  }

  &__reveal-password {
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }

  &__label {
    @include transition(color border-color);
    @include font-medium;
    @include size(100%, 6.5rem);
    border-bottom: 1px solid var(--border);
    color: var(--color-font);
    position: relative;
    display: block;

    &:focus-within {
      @include focus;
    }

    i {
      @include text-alert;
    }
  }

  &__top {
    @include transition(color font-size top opacity);
    @include rf(14, 14);
    @include font-normal;
    @include center-abs(vertical);
    @include margin-y(0, 0.5rem);
    display: block;
    left: 0;
    opacity: 0.8;
    z-index: 1;
    pointer-events: none;
    color: var(--color-font);
  }

  &:focus-within &__top,
  &__top.small {
    @include rf(12, 12);
    opacity: 0.4;
    top: 1.5rem;
  }

  &__field {
    @include transition(color);
    @include bg-transparent;
    @include rf(16, 18);
    @include font-normal;
    color: var(--color-font);
    line-height: $leading-tight;
    width: 100%;
    height: 100%;
    text-align: left;
    outline: none;
    padding-top: 1.7rem;
    // border-radius: 5rem;

    &::-ms-clear {
      display: none;
    }
    -moz-appearance: textfield;
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus {
      border: 1px solid transparent;
      -webkit-text-fill-color: transparent;
      -webkit-box-shadow: 0 0 0px 1000px transparent inset;
      transition: background-color 5000s ease-in-out 0s;
    }
  }

  &__error {
  }

  &__button {
    position: absolute;
    right: 0.8rem;
    top: 50%;
    transform: translateY(-50%);
  }

  &.has-error {
  }

  &.is-active {
  }

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
