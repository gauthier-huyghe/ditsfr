<template>
  <UiContainer classname="block-link-list">
    <UiNarrow
      v-if="content.title || content.tagline"
      class="block-link-list__narrow"
      left="3"
      right="3"
    >
      <UiTagline v-if="content.tagline" theme="red" :text="content.tagline" />
      <UiTitle v-if="content.title" :title="content.title" />
    </UiNarrow>
    <UiNarrow left="2" right="2">
      <ul class="block-link-list__list">
        <li v-for="link in content.list" :key="link.text">
          <UiCardLink :link="link" />
        </li>
      </ul>
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
.block-link-list {
  &__narrow {
    @include md-down {
      padding: 0 2rem;
    }
  }

  &__list {
    display: grid;
    gap: 1rem;
    padding-top: 3rem;
    padding-bottom: 4rem;
  }
}
</style>
