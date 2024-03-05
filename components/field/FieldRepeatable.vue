<template>
  <Field lg="6" md="2" class="field-repeatable">
    <slot :items="value" :remove="handleRemove" />

    <button class="field-repeatable__button" type="button" @click="handleAdd">
      <UiIcon icon="plus-outline" /> {{ add }}
    </button>
  </Field>
</template>

<script>
export default {
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    model: {
      type: Object,
      required: true,
    },
    add: {
      type: String,
      default: 'Ajouter',
    },
  },

  methods: {
    handleAdd() {
      const value = [...this.value]
      value.push({
        ...this.model,
      })
      this.$emit('input', value)
    },
    handleRemove(i) {
      const value = [...this.value]
      value.splice(i, 1)
      this.$emit('input', value)
    },
  },
}
</script>

<style lang="scss">
.field-repeatable {
  &__button {
    @include flex-center-center;
    @include rf(15, 15);
    @include font-bold;
    border-radius: 1.6rem;
    color: var(--color-alt);
    width: 100%;
    height: 5.5rem;
    gap: 1.5rem;

    .field-fieldset + & {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }
}
</style>
