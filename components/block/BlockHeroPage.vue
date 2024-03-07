<template>
  <UiContainer classname="hero-page" bg-snap="both">
    <template #bg>
      <UiImage
        v-if="content.image"
        :src="content.image"
        :lazy="false"
        no-background
      />
    </template>
    <UiNarrow left="1" right="5" class="hero-page__narrow">
      <UiImage
        v-if="content.logo"
        class="hero-page__logo"
        :src="content.logo"
        alt="Dinner in the sky - France"
        auto-size
        no-background
      />
      <UiTagline v-if="content.tagline" :text="content.tagline" />
      <UiTitle no-margin size="lg" :title="content.title" />
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
.hero-page {
  --color: var(--color-font-alt);

  &__bg {
    background-color: var(--duo-bg);
  }

  &__narrow {
    @include md-down {
      height: 40rem;
      padding: 4rem 2rem;
    }
    @include flex-end-stretch;
    @include flex-col;
    @include padding-y(6rem);

    height: 43rem;
  }
  &__logo.ui-image.auto-size {
    margin-bottom: 3rem;

    @include md-down {
      width: 50%;
      max-width: 40rem;
    }
    @include lg-up {
      width: 35%;
      max-width: 45rem;
    }

    img {
      object-fit: contain;
    }
  }
}
</style>
