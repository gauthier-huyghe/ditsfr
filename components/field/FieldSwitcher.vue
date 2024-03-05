<template>
  <Field class="field-switcher__wrapper" :lg="lg" :md="md">
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
        <label class="field-switcher__label" :for="`${formSlug}-${name}`">
          <div class="field-switcher__box">
            <div class="field-switcher__tick" />
          </div>
          <span class="field-switcher__txt">
            <slot />
          </span>
          <input
            :id="`${formSlug}-${name}`"
            v-model="fieldValue"
            class="field-switcher__field"
            type="checkbox"
            :disabled="disabled"
            :value="name"
            :name="name"
          />
        </label>
        <FieldError
          :theme="theme"
          class="field-switcher__error"
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
        'field-switcher',
        this.theme ?? `field-switcher--${this.theme}`,
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
      this.fieldValue = this.value
    },
  },
}
</script>

<style lang="scss">
.field-switcher {
  $e: &;

  --offset: 2px;
  --size: 2.2rem;
  --transform: none;
  --opacity: 0.4;
  @include transition(color);

  color: var(--color-font);

  &__wrapper {
    @include md-down {
      padding: 1.5rem 2rem;
    }
    padding: 0.75rem 0;

    & + & {
      margin-top: -1.5rem;
      // CANCEL GAP BETWEEN SWITCHES
    }
  }

  &__label {
    position: relative;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    cursor: pointer;
  }
  &:focus-within &__box {
    @include focus;
  }

  // THE ACTUAL LABEL
  &__txt {
    @include rf(12, 13);
    @include font-medium;

    display: block;

    a {
      @include text-secondary;
      @include hover {
        @include text-secondary;
      }
    }
  }

  // THE BOX
  &__box {
    @include flex-start-center;

    --box-width: calc(var(--size) * 2 + var(--offset) * 3);

    border-radius: 10rem;
    width: var(--box-width);
    flex: 0 0 var(--box-width);
    padding: var(--offset);
    z-index: 1;
    border: 1px solid var(--border);
  }

  // THE TICK
  &__tick {
    @include transition(transform opacity);

    background-color: var(--color-font);
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);
    transform: var(--transform);
    opacity: var(--opacity);
  }

  &__field {
    @include hide-visually;
  }

  &__error {
  }

  &.has-error {
  }

  &.is-selected {
    --transform: translateX(100%);
    --opacity: 0.8;
  }

  &.is-disabled {
    #{$e}__label {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
}
</style>
