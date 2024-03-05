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
        <div class="field-vat__container">
          <span class="field-vat__top" :class="{ small: active }">
            {{ label }} <i v-if="required">*</i>
          </span>

          <FieldSelect
            v-model="prefix"
            class="field-vat__prefix"
            name="var_prefix"
            :options="countryPrefixes"
            rules="required"
            required
            :disabled="disabled"
            :lg="2"
            :md="3"
          />

          <label class="field-vat__label" :for="name">
            <input
              :id="name"
              v-model="fieldValue"
              class="field-vat__field"
              type="text"
              :name="name"
              :maxlength="maxLength"
              :disabled="disabled"
              placeholder="0000 000 000"
            />
          </label>
          <UiIcon
            v-if="theme === 'warning' || theme === 'check'"
            class="field-vat__icon"
            :icon="theme"
            size="sm"
          />
        </div>
        <FieldError
          :theme="theme"
          class="field-vat__error"
          :errors-bag="errors"
        />
      </div>
    </ValidationProvider>
  </Field>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import CountryCode from '~/assets/json/countryCode.json'

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
    mask: {
      type: [String, Array],
      default: '',
    },
  },

  data: () => ({
    prefix: 'BE',
    fieldValue: '',
  }),

  computed: {
    customClasses() {
      return [
        'field-vat',
        this.theme ? `field-vat--${this.theme}` : '',
        { 'is-active': this.active },
      ]
    },
    countryPrefixes() {
      const prefixFirstCodes = ['BE', 'LU', 'NL']
      let countryPref = []
      const rtn = CountryCode
      rtn.forEach((country) => {
        countryPref.push({
          text: country.code,
          value: country.code,
          // text: `${country.code} ${country.dial_code}`,
          // value: country.dial_code,
          // code: country.code,
        })
      })
      countryPref.sort((a, b) =>
        a.text > b.text ? 1 : b.text > a.text ? -1 : 0
      )
      const countryFirst = countryPref.filter((i) =>
        prefixFirstCodes.includes(i.value)
      )
      const countrySecond = countryPref.filter(
        (i) => !prefixFirstCodes.includes(i.value)
      )
      countryPref = [...countryFirst, ...countrySecond]
      return countryPref
    },
    active() {
      return this.fieldValue !== ''
    },
    fullValue() {
      return `${this.prefix}${this.fieldValue}`
    },
  },

  watch: {
    value() {
      this.fieldValue = this.value?.slice(2) || ''
      this.prefix = this.value?.slice(0, 2) || 'BE'
      // this.fieldValue = this.value
    },
    fullValue(val) {
      this.$emit('input', val)
    },
  },

  created() {
    this.fieldValue = this.value
  },
}
</script>

<style lang="scss">
.field-vat {
  $e: &;

  @include transition(margin);

  width: 100%;
  position: relative;

  // REMOVE EDGE PASSWORD REVEAL
  ::-ms-reveal {
    display: none;
  }

  &__container {
    display: grid;
    grid-gap: 1.5rem;
    gap: 1.5rem;
    padding-top: 1.5rem;
    grid-template-columns: repeat(12, minmax(0, 1fr));

    .field-select__trigger {
      height: 5rem;
    }
  }

  &__top {
    @include transition(color font-size top opacity);
    @include margin-y(0, 0.5rem);
    @include rf(12, 12);
    @include font-normal;
    color: var(--color-font);
    position: absolute;
    grid-column: span 12;
    display: block;
    left: 0;
    top: 0.5rem;
    opacity: 0.4;
    pointer-events: none;
    z-index: 1;
  }

  &__label {
    @include transition(color border-color);
    @include font-medium;
    @include size(100%, 5rem);

    // border-radius: 5rem;
    border-bottom: 1px solid var(--border);
    color: var(--color-font);
    position: relative;
    display: block;

    @include sm {
      grid-column: span 9;
    }
    @include md {
      grid-column: span 9;
    }
    @include lg-up {
      grid-column: span 10;
    }

    &:focus-within {
      @include focus;
    }

    i {
      @include text-alert;
    }
  }

  &__field {
    @include transition(color);
    @include bg-transparent;
    @include rf(16, 16);
    @include font-normal;
    @include placeholder(rgba($primary, 0.3));
    color: var(--color-font);
    line-height: $leading-tight;
    width: 100%;
    height: 100%;
    text-align: left;
    outline: none;
    border: 0;
    padding: 0;

    &::-ms-clear {
      display: none;
    }
    -moz-appearance: textfield;
  }

  &__error {
    padding-left: 2rem;
  }

  &__icon {
    position: absolute;
    right: 0;
    top: 3.2rem;
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

  &--warning {
    .field-select__value,
    #{$e}__field {
      color: $warning;
    }
    #{$e}__icon {
      color: $warning;
    }
  }
  &--check {
    .field-select__value,
    #{$e}__field {
      color: $success;
    }
    #{$e}__icon {
      color: $success;
    }
  }
}
</style>
