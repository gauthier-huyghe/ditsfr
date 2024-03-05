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
          { 'is-readonly': readOnly },
        ]"
      >
        <label class="field-number__label" :for="name">
          <p v-if="fieldValue" class="field-number__value">
            {{ displayedValue }}
          </p>
          <input
            :id="name"
            :value="fieldValue"
            class="field-number__field"
            type="text"
            :name="name"
            :maxlength="maxLength"
            :disabled="disabled"
            :readonly="readOnly ? 'readonly' : null"
            @input="handleInput($event.target.value)"
          />
          <span class="field-number__top" :class="{ small: active }">
            {{ label }} <i v-if="required">*</i>
          </span>
          <p v-if="suffix" class="field-number__suffix">{{ suffix }}</p>
          <div class="field-number__button">
            <slot />
          </div>
        </label>
        <FieldError
          :theme="theme"
          class="field-number__error"
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
    readOnly: {
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
    suffix: {
      type: String,
      default: '',
    },
  },

  data: () => ({
    fieldValue: '',
    revealPassword: false,
  }),

  computed: {
    customClasses() {
      return [
        'field-number',
        this.theme ? `field-number--${this.theme}` : '',
        { 'is-active': this.active },
      ]
    },
    active() {
      return this.fieldValue !== ''
    },
    displayedValue() {
      return new Intl.NumberFormat('de-DE').format(this.fieldValue)
    },
  },

  watch: {
    value() {
      this.fieldValue = this.value
    },
  },

  created() {
    this.fieldValue = this.value
  },

  methods: {
    handleInput(value) {
      this.fieldValue = this.sanitizeValue(value)
      this.$emit('input', this.fieldValue)
    },
    sanitizeValue(val) {
      const value = val
        .replace(/[^\d.,]/gi, '') // ONLY KEEP NUMBERS COMMA AND DOT
        .replace(/,/gi, '.') // REPLACE DOTS BY COMMA
        .replace(/(\d*\.\d*)\.(\d*)/i, '$1$2') // ONLY KEEP ONE DOT

      return value
    },
  },
}
</script>

<style lang="scss">
.field-number {
  $e: &;

  @include transition(margin);

  width: 100%;
  position: relative;

  // REMOVE EDGE PASSWORD REVEAL
  ::-ms-reveal {
    display: none;
  }

  &__suffix {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    @include rf(16, 16);
  }

  &__value {
    @include rf(16, 18);
    @include font-normal;
    color: var(--color-font);
    line-height: $leading-tight;
    text-align: left;
    position: absolute;
    bottom: 0;
    opacity: 1;
    padding: 1.5rem 2px;
    box-sizing: border-box;
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

  &__label:focus-within &__value {
    opacity: 0;
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
    padding-top: 1.9rem;
    opacity: 0;

    &::-ms-clear {
      display: none;
    }
    -moz-appearance: textfield;
    &:focus-within {
      opacity: 1;
    }
  }

  &__error {
  }

  &__button {
    position: absolute;
    right: 1rem;
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

  &.is-readonly {
    #{$e}__top,
    #{$e}__value,
    #{$e}__label,
    #{$e}__field {
      color: rgba($font, 0.5);
    }
  }

  // °_°_°_°_°
  // THEMES
  // °_°_°_°_°

  // DEFAULT
  & {
  }

  &--xxxx {
  }
}
</style>
