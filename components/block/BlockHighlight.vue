<template>
  <UiContainer classname="block-highlight">
    <UiNarrow left="3" right="3">
      <p class="block-highlight__text">
        {{ content.text }}
      </p>
    </UiNarrow>
  </UiContainer>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.block-highlight {
  &__content {
    @include md-down {
      padding: 0 2rem;
    }
  }

  &__text {
    --color: var(--color-purple);

    @include rf(26, 35);
    @include md-down {
      padding-left: 2rem;
      line-height: $leading-tiny;
    }
    line-height: $leading-tight;
    line-height: $leading-tight;
    padding-left: 4.7rem;
    color: var(--color-font);
    position: relative;

    &::before {
      content: '';
      border-left: 2px solid var(--color-font);
      position: absolute;
      left: 0;
      top: 1rem;
      bottom: 1rem;
    }
  }
}
</style>
