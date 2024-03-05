<template>
  <Field :lg="lg" :md="md">
    <ValidationProvider
      v-slot="{ errors, invalid }"
      :rules="rules"
      :name="name"
    >
      <div
        :class="[
          ...customClasses,
          { 'is-invalid': invalid },
          { 'has-error': errors.length },
        ]"
      >
        <button
          v-for="option in options"
          :key="option.value"
          class="radio-buttons__button"
          :class="{ active: fieldValue === option.value }"
          type="button"
          @click="handleButtonClick(option.value)"
        >
          <div class="radio-buttons__content">
            <span v-if="option.text" class="radio-buttons__text">
              {{ option.text }}
            </span>
          </div>
        </button>
        <input :id="name" :value="fieldValue" type="hidden" :name="name" />
      </div>
      <FieldError
        :theme="theme"
        class="radio-buttons__error"
        :errors-bag="errors"
      />
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
    options: {
      type: Array,
      required: true,
    },
    name: {
      type: String,
      required: true,
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
    disabled: {
      type: Boolean,
      default: false,
    },
    free: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: '',
    },
    theme: {
      type: String,
      default: '',
    },
    lg: {
      type: [String, Number],
      default: 12,
    },
    md: {
      type: [String, Number],
      default: 2,
    },
  },

  data: () => ({
    focus: false,
    active: false,
    fieldValue: '',
    freeValue: null,
  }),

  computed: {
    customClasses() {
      return [
        'radio-buttons',
        this.size && `radio-buttons--${this.size}`,
        this.theme && `radio-buttons--${this.theme}`,
        { 'is-focus': this.focus },
        { 'is-active': this.active },
      ]
    },
    hasError() {
      return this.errors.length > 0
    },
  },

  watch: {
    value() {
      this.fieldValue = this.value
    },
    fieldValue(val) {
      this.$emit('input', val)
    },
    freeValue(val) {
      if (val !== null) {
        this.fieldValue = val
      }
    },
  },

  created() {
    this.fieldValue = this.value
    this.resetFocus()
  },

  methods: {
    handleButtonClick(val) {
      this.fieldValue = val
      this.freeValue = null
    },
    handleFreeFocus() {
      if (this.freeValue === null) this.freeValue = ''
    },
    handleFocus() {
      this.focus = true
      this.active = true
    },
    handleBlur() {
      this.focus = false
      this.active = this.fieldValue !== ''
    },
    resetFocus() {
      this.focus = false
      this.active = this.fieldValue !== ''
    },
  },
}
</script>

<style lang="scss">
.radio-buttons {
  $e: &;

  --background: var(--color-primary);
  --border: var(--color-font);
  --color: var(--color-font);
  --opacity: 0;
  --outside: 1.6rem;
  --inside: 0.8rem;
  --height: 5.4rem;
  --padding: 1.4rem 2rem;
  --radius: 1rem;
  --width: 18rem;

  display: flex;
  gap: 1.5rem;
  position: relative;

  @include sm {
    --height: 5.4rem;
    --padding: 1.8rem 2rem;
    --width: auto;

    flex-wrap: wrap;
  }

  &__button {
    @include transition(background-color border-color color);
    @include flex-center-center;
    @include flex-col;
    @include rf(16, 18);
    @include font-medium;
    position: relative;
    text-align: left;
    border-radius: var(--radius);
    border: 1px solid var(--border);
    color: var(--color);
    background-color: var(--background);
    padding: var(--padding);
    height: var(--height);
    width: var(--width);

    @include sm {
      align-items: center;
      flex-direction: row;
      gap: 1.3rem;
    }

    &.active {
      --color: var(--color-primary);
      --border: var(--color-font);
      --background: var(--color-font);
      --opacity: 1;
    }

    &:hover {
      --opacity: 0.75;
    }
  }

  &__text {
    @include rf(15, 15);
    line-height: 1;
    display: inline-block;
    appearance: none;
    text-transform: uppercase;
    text-align: center;
  }

  // °_°_°_°_°
  // SIZES
  // °_°_°_°_°
  // SM
  & {
  }
}
</style>
