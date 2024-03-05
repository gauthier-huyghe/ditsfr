<template>
  <Field :lg="lg" :md="md">
    <ValidationProvider
      v-slot="{ errors, invalid }"
      :rules="rules"
      :name="name"
      slim
    >
      <div
        :class="[
          customClasses,
          { 'is-invalid': invalid },
          { 'has-error': errors.length },
          { 'has-nolabel': !label },
          { 'is-disabled': disabled },
        ]"
      >
        <div v-click-outside="handleClose" class="field-select__group">
          <button
            type="button"
            class="field-select__trigger"
            :disabled="disabled"
            @click="handleTriggerClick"
            @keydown="handleKeyDown"
          >
            <span
              v-if="label"
              class="field-select__label"
              :class="{ small: selected }"
            >
              {{ label }} <i v-if="required">*</i>
            </span>
            <transition
              enter-active-class="animated fadeIn"
              leave-active-class="animated fadeOut"
            >
              <span v-show="selected" class="field-select__value">
                {{ selected }}
              </span>
            </transition>
            <UiIcon icon="chevron-down" size="sm" class="field-select__arrow" />
          </button>

          <UiSlideUpDown
            class="field-select__dropdown"
            :class="`js-${name}-dropdown`"
            :active="show"
          >
            <ul class="field-select__options">
              <li
                v-for="(option, i) in options"
                :key="'option' + name + i"
                :class="`js-${name}-${i}`"
              >
                <button
                  type="button"
                  class="field-select__option"
                  :class="[
                    {
                      focused: i === focused,
                      active: option.value === fieldValue,
                    },
                  ]"
                  @click="handleSelect(option.value)"
                >
                  {{ option.text }}
                </button>
              </li>
            </ul>
          </UiSlideUpDown>
        </div>

        <select
          :id="name"
          v-model="fieldValue"
          class="field-select__field"
          tabindex="-1"
          :name="name"
        >
          <option
            v-for="option in options"
            :key="option.value"
            :value="option.value"
          >
            {{ option.value }}
          </option>
        </select>

        <FieldError
          :theme="theme"
          class="field-select__error"
          :errors-bag="errors"
        />
      </div>
    </ValidationProvider>
  </Field>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
import { debounce } from '@unanim/helpers'

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
    disabled: {
      type: Boolean,
      default: false,
    },
    required: {
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
    show: false,
    fieldValue: '',
    focused: null,
    search: '',
  }),

  computed: {
    customClasses() {
      return [
        'field-select',
        this.theme ? `field-select--${this.theme}` : '',
        { 'is-show': this.show },
        { 'is-focus': this.focus },
        { 'is-active': this.active },
      ]
    },
    active() {
      return this.fieldValue !== ''
    },
    selected() {
      return this.fieldValue &&
        this.options.find(({ value }) => value === this.fieldValue)
        ? this.options.find(({ value }) => value === this.fieldValue).text
        : ''
    },
  },

  watch: {
    value() {
      this.fieldValue = this.value
    },
    fieldValue(val) {
      this.$emit('input', val)
    },
    focused(val) {
      if (val !== null) {
        this.$scrollTo(`.js-${this.name}-${val}`, {
          container: `.js-${this.name}-dropdown`,
          duration: 0,
          offset: -25,
        })
      }
    },
  },

  created() {
    this.fieldValue = this.value
  },

  methods: {
    handleTriggerClick() {
      if (!this.show) this.openDropdown()
      else this.handleClose()
    },
    handleClose() {
      this.show = false
      this.focused = null
    },
    openDropdown() {
      this.show = true
      const i = this.options.findIndex((el) => el.value === this.fieldValue)
      if (i > -1) {
        this.focused = i
      }
    },
    handleSelect(val) {
      this.fieldValue = val
      this.show = false
    },
    selectFocused() {
      if (this.focused !== null) {
        this.fieldValue = this.options[this.focused].value
        this.show = false
      }
    },
    focusPrev() {
      if (this.focused === null || this.focused === 0) {
        return (this.focused = this.options.length - 1)
      }

      this.focused--
    },
    focusNext() {
      if (this.focused === null || this.focused === this.options.length - 1) {
        return (this.focused = 0)
      }

      this.focused++
    },
    makeSearch() {
      const res = this.options.findIndex((item) =>
        item.text.toLowerCase().startsWith(this.search.toLowerCase())
      )
      if (res > -1) {
        this.focused = res
      }
    },
    resetSearch: debounce(function () {
      this.search = ''
    }, 1000),
    handleKeyDown(e) {
      switch (e.keyCode) {
        case 27: // ESC
          if (this.show) this.handleClose()
          break
        case 39: // RIGHT
        case 40: // DOWN
          e.preventDefault()
          if (!this.show) this.openDropdown()
          else this.focusNext()
          break
        case 37: // LEFT
        case 38: // UP
          e.preventDefault()
          if (!this.show) this.openDropdown()
          else this.focusPrev()
          break
        case 13: // ENTER
          e.preventDefault()
          if (!this.show) this.openDropdown()
          else this.selectFocused()
          break
        case 9: // TAB
          this.selectFocused()
          break
        default:
          if (/^.$/i.test(e.key)) {
            this.search = `${this.search}${e.key}`
            this.makeSearch()
            this.resetSearch()
          }
          break
      }
    },
  },
}
</script>

<style lang="scss">
.field-select {
  $e: &;
  @include transition(margin);

  position: relative;
  width: 100%;

  &__group {
    position: relative;
  }

  &__trigger {
    @include transition(color border-color);
    @include rf(16, 16);
    @include font-normal;
    @include size(100%, 6.5rem);
    @include flex-start-center;
    @include padding-x(0);
    border-bottom: 1px solid var(--border);
    background-color: transparent;
    color: var(--color-font);
    position: relative;
    z-index: 2;
  }

  &__label {
    @include transition(color font-size top opacity);
    @include center-abs(vertical);
    @include rf(14, 14);
    color: var(--color-font);
    left: 0;
    opacity: 0.8;

    &.small {
      @include rf(12, 12);

      opacity: 0.4;
      top: 1.5rem;
    }

    i {
      @include text-alert;
    }
  }

  &__field {
    @include hide-visually;
  }

  &__arrow {
    position: absolute;
    right: 0;
  }

  &__value {
    @include transition(color);
    @include rf(16, 16);
    @include font-medium;

    color: var(--color-font);
    line-height: $leading-tight;
    width: 100%;
    text-align: left;
    padding-top: 1.5rem;

    #{$e}.has-nolabel & {
      padding-top: 0;
    }
  }

  &__dropdown {
    position: absolute;
    left: 0;
    min-width: 100%;
    top: 100%;
    z-index: 20;
    // border-radius: 1.5rem;
    overflow-x: hidden;
    overflow-y: auto;
    max-height: calc(6rem * 5 - 3rem);
    @include bg-background;
  }

  &__options {
    // @include padding-y(0.5rem);
  }

  &__option {
    @include rf(15, 15);
    @include flex-start-center;

    padding: 0 1.5rem;
    width: 100%;
    height: 6rem;
    opacity: 0.7;
    border-bottom: 1px solid var(--border);

    &.focused,
    &:hover {
      opacity: 1;
      background-color: darken($background, 1%);
    }
    &.active {
      opacity: 1;
      background-color: darken($background, 2%);
    }
  }

  &__error {
  }

  &.has-error {
  }

  &.is-focus {
  }

  &.is-active {
  }

  &.is-disabled {
    #{$e}__trigger {
      opacity: 0.5;
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
