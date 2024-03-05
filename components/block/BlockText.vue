<template>
  <UiSection :id="content.id">
    <UiContainer>
      <UiNarrow left="3" right="3">
        <div class="block-text">
          <UiTagline
            v-if="content.tagline"
            theme="red"
            :text="content.tagline"
          />
          <UiTitle
            v-if="content.title"
            class="block-text__title"
            :title="content.title"
          />
          <UiText :text="content.text" />
        </div>
      </UiNarrow>
    </UiContainer>
  </UiSection>
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
.block-text {
  @include md-down {
    padding: 0 2rem;
  }
}
</style>
