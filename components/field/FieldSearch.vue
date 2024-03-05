<template>
  <div class="search-input">
    <input
      ref="input"
      v-model="searchInput"
      class="search-input__input"
      type="search"
      :placeholder="$t('search_placeholder')"
      name="search"
      autocomplete="off"
    />
    <button class="search-input__search" @click.prevent.stop="submitSearch">
      <UiIcon icon="search" /><span class="hidden">lancer la recheche</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {},

  data: () => ({
    searchInput: '',
  }),

  watch: {},

  mounted() {
    // if (this.$refs.input) this.$refs.input.focus()
  },

  methods: {
    submitSearch() {
      this.$emit('search', this.searchInput)
    },
  },
}
</script>

<style lang="scss">
.search-input {
  @include flex-center-center;

  position: relative;
  border: 1px solid currentColor;
  width: 28rem;
  z-index: 1;

  input {
    @include font-medium;
    @include rf(16, 17);

    padding: 0 2rem;
    width: 100%;
    height: 5rem;
    background-color: transparent;
    -webkit-appearance: none;
    border-radius: 0;
    background-color: transparent;
  }

  input::placeholder {
    opacity: 0.5;
  }

  &__search {
    @include size(5rem);
    position: absolute;
    color: var(--color-alt);
    right: 0;
    padding: 0.7rem 0 0 0;
    top: 0;
  }

  .hidden {
    @include hide-visually;
  }
}
</style>
