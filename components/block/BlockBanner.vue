<template>
  <UiContainer :style="{ '--duo-bg': duo.bg, '--duo-fg': duo.fg }">
    <UiNarrow class="block-banner" left="1" right="1">
      <div class="block-banner__content">
        <div class="block-banner__bg">
          <UiGradient v-if="content.image" />
          <UiImage v-if="content.image" :src="content.image" />
        </div>
        <div class="block-banner__texts" :class="{ right: content.right }">
          <UiTagline
            v-if="content.tagline"
            class="block-banner__tagline"
            :text="content.tagline"
          />
          <UiTitle
            v-if="content.title"
            size="lg"
            class="block-banner__title"
            :class="{ 'has-image': content.image }"
            :title="content.title"
            no-margin
          />
          <UiText
            v-if="content.text"
            class="block-banner__text"
            :text="content.text"
          />
          <UiButton
            v-if="content.cta && content.cta.text"
            class="block-banner__cta"
            :link="content.cta"
            theme="white"
            size="sm"
          >
            {{ content.cta.text }}
          </UiButton>
        </div>
      </div>
    </UiNarrow>
  </UiContainer>
</template>

<script>
import { randomDuo } from '@unanim/helpers'

export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      duo: randomDuo(),
    }
  },
}
</script>

<style lang="scss">
.block-banner {
  @include md-down {
    --radius: 3rem;
  }
  --radius: 8rem;
  --color: var(--color-font-alt);
  position: relative;

  &__bg {
    @include md-down {
      margin: 0 -2rem;
    }
    z-index: -1;
    position: absolute;
    inset: 0;
    background-color: var(--duo-bg);
    border-top-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    overflow: hidden;
  }

  &__content {
    @include lg-up {
      padding: 7rem;
      padding-top: 20rem;
    }
    @include md-down {
      padding: 4rem 2rem;
      padding-top: 13rem;
    }
    position: relative;
  }

  &__texts {
    @include lg-up {
      max-width: columns(7);

      &.right {
        margin-left: auto;
      }
    }
  }

  &__title {
    &:not(.has-image) {
      color: var(--duo-fg);
    }
  }

  &__text,
  &__cta {
    margin-top: 2rem;
  }
}
</style>
