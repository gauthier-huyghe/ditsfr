<template>
  <UiContainer classname="block-image">
    <UiNarrow left="3" right="3">
      <UiTagline v-if="content.tagline" :text="content.tagline" />
      <UiTitle v-if="content.title" :title="content.title" />
      <UiImage size="lg" rounded :src="content.image" :alt="content.alt" />
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
