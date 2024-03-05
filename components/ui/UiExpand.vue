<template>
  <div class="ui-expand">
    <button class="ui-expand__trigger" @click="handleToggle">
      <UiTitle tag="h3" size="xxs" no-margin>{{ content.trigger }}</UiTitle>
      <span class="ui-expand__icon">
        <UiIcon
          :key="expanded"
          :icon="expanded ? 'minus-outline' : 'plus-outline'"
        />
      </span>
    </button>

    <UiSlideUpDown :active="expanded">
      <div class="ui-expand__content">
        <slot />
      </div>
    </UiSlideUpDown>
  </div>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      expanded: this.content.opened,
    }
  },

  methods: {
    handleToggle() {
      this.expanded = !this.expanded
    },
  },
}
</script>

<style lang="scss">
.ui-expand {
  &:not(:last-of-type) {
    border-bottom: 1px solid var(--border);
  }

  &__trigger {
    @include flex-between-center;

    min-height: 8.7rem;
    width: 100%;
  }

  &__content {
    padding-bottom: 3rem;
  }

  &__icon {
    color: var(--color-red);
  }
}
</style>
