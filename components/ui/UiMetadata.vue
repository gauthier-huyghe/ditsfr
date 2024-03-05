<template>
  <div class="ui-metadata">
    <div class="ui-metadata__image" :class="{ large: largeImage }">
      <UiImage v-if="image" size="fit" :src="image" />
      <UiIcon v-if="icon" :icon="icon" size="sm" />
    </div>
    <div>
      <p v-if="title" class="ui-metadata__title">{{ title }}</p>
      <p v-if="subtitle" class="ui-metadata__subtitle">{{ subtitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    largeImage: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.ui-metadata {
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  margin-right: 2rem;
  color: var(--color-font);

  &__image {
    @include flex-center-center;

    width: 3.6rem;
    height: 3.6rem;
    border-radius: 1.1rem;
    overflow: hidden;
    background-color: rgba(#ffffff, 0.1);
    position: relative;

    &.large {
      width: 5rem;
      height: 5rem;
    }
  }

  &__title {
    @include rf(15, 15);
    @include font-medium;
  }

  &__subtitle {
    @include rf(13, 13);

    opacity: 0.5;
  }
}
</style>
