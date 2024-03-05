<template>
  <UiContainer classname="block-expand">
    <UiNarrow left="2" right="2">
      <UiTagline v-if="content.tagline" :text="content.tagline" />
      <UiTitle
        v-if="content.title"
        :title="content.title"
        class="block-expand__title"
      />
      <UiExpand
        v-for="item in content.list"
        :key="item.trigger"
        :content="item"
      >
        <UiText class="block-expand__text" :text="item.content" />
        <div v-if="item.cta && item.cta.text" class="block-expand__cta">
          <UiButton size="sm" :link="item.cta">
            {{ item.cta.text }}
          </UiButton>
        </div>
      </UiExpand>
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
.block-expand {
  &__content {
    @include md-down {
      padding: 0 2rem;
    }
  }

  &__title {
    @include lg-up {
      max-width: columns(6);
    }
  }

  &__text {
    @include lg-up {
      padding-right: columns(1, 10);
    }
    @include font-text;
    @include rf(16, 16);
  }

  &__cta {
    margin-top: 2rem;
  }
}
</style>
