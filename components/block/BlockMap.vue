<template>
  <UiContainer>
    <UiNarrow left="2" right="2">
      <div class="block-map">
        <UiMap :marker="content" />
      </div>
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
.block-map {
  position: relative;
  height: 60rem;
  border-top-right-radius: 6rem;
  border-bottom-left-radius: 6rem;
  transform: translateZ(0);
  overflow: hidden;

  @include md-down {
    margin: 0 calc(-1 * var(--gutter));
  }
}
</style>
