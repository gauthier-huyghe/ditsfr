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
            :title="title"
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
  computed: {
    title() {
      return this.content.title
        ? this.content.title
            .replace('$dates_long', this.$t('dates_long'))
            .replace('$dates', this.$t('dates'))
        : ''
    },
    subtitle() {
      return this.content.subtitle
        ? this.content.subtitle
            .replace('$dates_long', this.$t('dates_long'))
            .replace('$dates', this.$t('dates'))
        : ''
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
