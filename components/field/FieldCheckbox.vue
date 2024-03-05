<template>
  <Field class="field-checkbox__wrapper" :lg="lg" :md="md">
    <ValidationProvider
      v-slot="{ errors, invalid }"
      :rules="rules"
      :name="name"
      slim
    >
      <div
        :class="[
          customClasses,
          { 'is-disabled': disabled },
          { 'is-invalid': invalid },
          { 'has-error': errors.length },
        ]"
      >
        <label class="field-checkbox__label" :for="`${formSlug}-${name}`">
          <div class="field-checkbox__box">
            <div class="field-checkbox__tick" />
          </div>
          <span class="field-checkbox__txt">
            <slot />
          </span>
          <input
            :id="`${formSlug}-${name}`"
            v-model="fieldValue"
            class="field-checkbox__field"
            type="checkbox"
            :disabled="disabled"
            :value="name"
            :name="name"
          />
        </label>
        <FieldError
          :theme="theme"
          class="field-checkbox__error"
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
    formSlug: {
      type: String,
      default: '',
    },
    value: {
      type: [Boolean, Array],
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: [String, Object],
      required: false,
      default: '',
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

  data() {
    return {
      fieldValue: '',
    }
  },

  computed: {
    customClasses() {
      return [
        'field-checkbox',
        this.theme ?? `field-checkbox--${this.theme}`,
        {
          'is-selected': Array.isArray(this.fieldValue)
            ? this.fieldValue.includes(this.name)
            : this.fieldValue,
        },
      ]
    },
  },
  watch: {
    value() {
      this.setFieldValue()
    },
    fieldValue(value) {
      this.$emit('input', value)
    },
  },
  created() {
    this.setFieldValue()
  },
  methods: {
    setFieldValue() {
      if (Array.isArray(this.value)) {
        this.fieldValue = this.value
      } else {
        this.fieldValue = this.value
      }
    },
  },
}
</script>

<style lang="scss">
.field-checkbox {
  $e: &;

  --opacity: 0;
  --offset: 3rem;
  --size: 1.4rem;
  @include transition(color);

  color: var(--color-font);

  &__wrapper {
    margin-top: 1rem;

    @include md-down {
      padding: 1.5rem 0;
    }
    @include lg-up {
      padding: 0.75rem 0;
    }

    & + & {
      margin-top: -0.7rem;
      // CANCEL GAP BETWEEN CHECKBOXES
    }
  }

  &__label {
    @include rf(14, 16);
    @include font-normal;
    position: relative;
    display: flex;
    gap: 1.2rem;
    cursor: pointer;
  }
  &:focus-within &__box {
    @include focus;
  }

  // THE ACTUAL LABEL
  &__txt {
    @include rf(14, 16);
    @include font-medium;

    display: block;

    a {
      @include text-font;
      text-decoration: underline;

      @include hover {
        @include text-font;
      }
    }
  }

  // THE BOX
  &__box {
    @include flex-center-center;
    @include transition(border-color);
    @include rf(16, 16);
    margin-top: 0.3em;
    width: var(--size);
    height: var(--size);
    flex: 0 0 var(--size);
    z-index: 1;
    border: 1px solid var(--border);
  }

  // THE TICK
  &__tick {
    @include transition(color opacity);
    @include size(calc(var(--size) - 6px));
    background-color: var(--color-font);
    opacity: var(--opacity);
  }

  &__field {
    @include hide-visually;
  }

  &__error {
    padding-left: var(--offset);
  }

  &.has-error {
  }

  &.is-selected {
    --opacity: 1;
  }

  &.is-disabled {
    #{$e}__label {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
}
</style>
