<template>
  <Field :lg="lg" :md="md">
    <ValidationProvider
      v-slot="{ errors, invalid, validate }"
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
          { 'has-file': filename },
        ]"
      >
        <label class="field-file__label" :for="name">
          <div class="field-file__fake-field">
            <p v-if="filename" class="field-file__name">
              {{ filename }}
            </p>
            <input
              :id="name"
              ref="input"
              class="field-file__field"
              type="file"
              accept="image/jpeg,image/png,application/pdf"
              :name="name"
              :disabled="disabled"
              :multiple="multiple"
              @change="handleFileUpload($event, validate)"
            />
            <span class="field-file__top" :class="{ small: active }">
              {{ label }} <i v-if="required">*</i>
            </span>
          </div>
          <div class="field-file__upload">
            <UiIcon icon="upload" class="field-file__icon" />
          </div>
        </label>
        <FieldError
          :theme="theme"
          class="field-file__error"
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
    multiple: {
      type: Boolean,
      default: false,
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
    fieldValue: null,
  }),

  computed: {
    customClasses() {
      return [
        'field-file',
        this.theme ? `field-file--${this.theme}` : '',
        { 'is-active': this.active },
      ]
    },
    active() {
      return this.fieldValue !== null
    },
    filename() {
      if (this.multiple) {
        if (this.fieldValue && this.fieldValue.length)
          return this.fieldValue.map((item) => item.name).join(', ')
        return ''
      }
      if (!this.fieldValue) return ''
      return this.fieldValue.name
    },
  },

  watch: {
    value() {
      this.fieldValue = this.value
    },
    fieldValue(val) {
      this.$emit('input', val)
    },
    required() {},
  },

  created() {
    this.fieldValue = this.value
  },

  methods: {
    handleFileUpload(event, validate) {
      this.fieldValue = []
      validate(event).then((result) => {
        if (result.valid) {
          if (!this.$refs.input) return
          if (this.multiple) {
            const uploadedFiles = this.$refs.input.files
            for (let i = 0; i < uploadedFiles.length; i++) {
              this.fieldValue.push(uploadedFiles[i])
            }
          } else {
            const [file] = this.$refs.input.files
            this.fieldValue = file
          }
        }
      })
    },
  },
}
</script>

<style lang="scss">
.field-file {
  $e: &;

  @include transition(margin);

  width: 100%;
  position: relative;

  &__label {
    @include size(100%, 13.8rem);
    @include flex-start-start;
    @include flex-col-reverse;
    cursor: pointer;
    padding: 2rem 2rem 1.6rem 2rem;
    // border: 1px dashed $font;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='black' stroke-width='3' stroke-dasharray='2%2c12' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  }

  &__top {
    @include transition(color font-size top opacity);
    @include rf(14, 14);
    @include font-normal;
    text-transform: uppercase;
    display: block;
    left: 0;
    z-index: 1;
    pointer-events: none;
    color: var(--color-font);
  }

  &:focus-within &__top,
  &__top.small {
    // @include rf(11, 11);
    // opacity: 1;
    // top: 1.5rem;
  }

  &__field {
    @include hide-visually;
  }

  &__fake-field {
    @include flex-auto;
    @include transition(color border-color);
    @include flex-end-start;
    @include flex-col;
    color: var(--color-font);
    position: relative;
    cursor: pointer;
    width: 100%;
    // word-break: break-all;
    // word-wrap: break-word;
  }

  &__name {
    @include flex-initial;
    @include rf(16, 16);
    @include font-normal;
    line-height: 1.1;
    text-transform: uppercase;
    color: var(--color-font);
    width: 100%;
    word-break: break-all;
    -webkit-line-clamp: 3;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  &__upload {
    @include flex-initial;
    overflow: visible;

    .ui-icon {
      --icon-size: 3rem;
    }
  }

  &__icon {
    overflow: visible;
    height: 5rem;
    width: 4rem;
  }

  &__error {
    position: absolute;
    left: 0;
    bottom: -4rem;
    padding-left: 0;
  }

  &.has-error {
  }

  &.is-active {
  }

  // °_°_°_°_°
  // THEMES
  // °_°_°_°_°

  // DEFAULT
  & {
    @include transition(opacity);

    --border: var(--color-font);

    #{$e}__fake-field {
      @include transition(background-color);
    }
    #{$e}__top {
      &.small {
      }
    }

    &.has-file #{$e}__label {
      background: darken($background, 2%);
      background-image: none;

      #{$e}__top {
        display: none;
      }
    }
    &:focus-within #{$e}__top {
    }
  }
}
</style>
