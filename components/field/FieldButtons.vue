<template>
  <Field :lg="lg" :md="md">
    <div class="field-buttons">
      <slot />
    </div>
  </Field>
</template>

<script>
export default {
  props: {
    lg: {
      type: Number,
      default: 12,
    },
    md: {
      type: Number,
      default: 2,
    },
  },
}
</script>

<style lang="scss">
.field-buttons {
  display: grid;
  gap: 1rem;
}
</style>
