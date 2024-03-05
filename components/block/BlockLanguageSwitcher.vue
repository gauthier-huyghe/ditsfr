<template>
  <UiContainer>
    <UiNarrow class="block-language-switcher" left="1" right="1">
      <div class="block-language-switcher__content">
        <UiText
          v-if="content.text"
          class="block-language-switcher__text"
          :text="content.text"
        />
        <UiLanguage :show-current="false" />
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
.block-language-switcher {
  &__content {
    @include md-down {
      padding: 0 2rem 4rem 2rem;
    }
    @include lg-up {
      padding: 0 7rem 7rem 7rem;
    }

    @include rf(18, 18);
    position: relative;

    .ui-language {
      margin-top: 2rem;
    }
  }
}
</style>
