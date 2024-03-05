<template>
  <Field lg="6" md="2">
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
        <div v-for="option in options" :key="option.value">
          <UiButton
            :theme="theme"
            :size="size"
            :disabled="disabled"
            :class="{ active: fieldValue.includes(option.value) }"
            type="button"
            @click="handleButtonClick(option.value)"
          >
            {{ option.text }}
          </UiButton>
        </div>
        <input :id="name" :value="fieldValue" type="hidden" :name="name" />
      </div>
      <FieldError
        :theme="theme"
        class="checkbox-buttons__error"
        :errors-bag="errors"
      />
    </ValidationProvider>
  </Field>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import { toggleItem } from '@unanim/helpers'

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
    size: {
      type: String,
      default: '',
    },
    theme: {
      type: String,
      default: 'checkbox',
    },
  },

  data: () => ({
    focus: false,
    active: false,
    fieldValue: '',
  }),

  computed: {
    customClasses() {
      return [
        'checkbox-buttons',
        this.size && `checkbox-buttons--${this.size}`,
        this.theme && `checkbox-buttons--${this.theme}`,
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
  },

  created() {
    this.fieldValue = this.value
    this.resetFocus()
  },

  methods: {
    handleButtonClick(val) {
      this.fieldValue = toggleItem([...this.fieldValue], val)
      // this.fieldValue = val
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
.checkbox-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}
</style>
