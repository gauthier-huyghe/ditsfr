<template>
  <form
    class="ui-form"
    :class="theme ? `ui-form--${theme}` : ''"
    @submit.prevent="handleSubmit"
  >
    <slot />
  </form>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: '',
    },
  },

  methods: {
    handleSubmit() {
      this.$emit('submit', this.$el)
    },
  },
}
</script>

<style lang="scss">
.ui-form {
  display: grid;
  grid-template-rows: auto;
  column-gap: 2rem;
  row-gap: 1rem;

  @include sm {
    grid-template-columns: minmax(0, 1fr);
  }
  @include md {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @include lg-up {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  // °_°_°_°_°_°
  // THEMES
  // °_°_°_°_°_°
}
</style>
