<template>
  <UiContainer classname="block-video">
    <UiNarrow left="2" right="2">
      <UiVideo :video="content.video" :thumb="content.image" rounded>
        <UiTagline v-if="content.tagline" :text="content.tagline" />
        <UiTitle
          v-if="content.title"
          class="block-video__title"
          :title="content.title"
          no-margin
        />
      </UiVideo>
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
.block-video {
  &__content {
    // border: 3px solid teal;
  }
}
</style>
