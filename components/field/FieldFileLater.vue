<template>
  <div class="field-file-later">
    <FieldFile
      v-show="showFileInput"
      v-model="attachements"
      :value="attachements"
      :name="key"
      :label="label"
      :rules="{ required: required }"
      :required="required"
    />
    <div
      v-show="attachements === null && !required"
      class="field-file-later__later"
    >
      <span
        class="field-file-later__later__later"
        v-text="$t('field_document_upload_later')"
      />
      <span class="field-file-later__later__title" v-text="label" />
    </div>
    <div
      v-if="attachements === null"
      class="field-file-later__additionnalbutton"
      @click="toggleLater()"
      v-text="required ? $t('field_document_later') : $t('field_document_now')"
    />
    <div
      v-if="attachements !== null"
      class="field-file-later__additionnalbutton"
      @click="deleteDoc()"
      v-text="$t('field_document_delete')"
    />
  </div>
</template>

<script>
export default {
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
      type: [Object, String, Number, null],
      default: null,
    },
    defValue: {
      type: String,
      default: '',
    },
  },

  data: () => ({
    required: true,
    attachements: null,
  }),

  computed: {
    showFileInput() {
      return (
        (this.attachements === null && this.required === true) ||
        this.isFile(this.attachements) ||
        this.isBlob(this.attachements) ||
        this.isArray(this.attachements)
      )
    },
    // fileName() {
    //   return this.attachements && this.dataAttachements.sepa_form
    //     ? this.dataAttachements.sepa_form.files[0].name
    //     : null
    // },
  },

  watch: {
    attachements(val) {
      this.$emit('input', val)
      this.required = true
    },
  },

  mounted() {
    if (this.defValue) {
      this.toDataURL(this.defValue)
    }
    this.$nextTick(() => {
      if (this.value) {
        this.attachements = this.value
        this.$nextTick(() => {
          this.required = false
        })
      }
    })
  },

  methods: {
    toggleLater() {
      this.required = !this.required
      this.attachements = null
    },
    deleteDoc() {
      this.attachements = null
    },
    toDataURL(url) {
      fetch(url).then(async (response) => {
        const filename = url.substring(url.lastIndexOf('/') + 1)
        const blob = await response.blob()
        const contentType = response.headers.get('content-type')

        const file = new File([blob], filename, { contentType })
        this.attachements = file
        // Set required to false because you can't set a input file programmaly
        this.$nextTick(() => {
          this.required = false
        })
      })
    },
    isFile(input) {
      return 'File' in window && input instanceof File
    },
    isBlob(input) {
      return 'Blob' in window && input instanceof Blob
    },
    isArray(input) {
      return Array.isArray(input)
    },
  },
}
</script>

<style lang="scss">
.field-file-later {
  $e: &;

  @include flex-start-end;
  @include flex-col;

  .field {
    @include flex-auto;
    width: 100%;
  }
  &__later {
    @include size(100%, 13.8rem);
    @include flex-between-stretch;
    @include flex-col;
    cursor: pointer;
    @include rf(16, 16);
    line-height: 1.1;
    text-transform: uppercase;
    padding: 2rem 2rem 1.6rem 2rem;
    background: darken($background, 5%);
    // border: 1px dashed $font;
    // background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='black' stroke-width='3' stroke-dasharray='2%2c12' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");

    &__later {
      text-align: right;
      text-decoration: underline;
      padding-left: 30%;
    }
  }
  &__additionnalbutton {
    @include rf(14, 14);
    text-transform: uppercase;
    text-decoration: underline;
    margin-top: 0.2rem;
    cursor: pointer;
  }
}
</style>
