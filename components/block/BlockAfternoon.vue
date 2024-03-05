<template>
  <UiSection :id="content.id">
    <UiContainer
      classname="block-afternoon"
      :class="{ 'image-left': content.image_left }"
    >
      <UiNarrow
        v-if="content.images1 && content.images1.length > 0"
        left="1"
        right="0"
        class="block-afternoon__narrow"
      >
        <div class="block-afternoon__images1">
          <UiImage
            v-for="(img, i) in content.images1"
            :key="`block-afternoon-images-${i}`"
            class="block-afternoon__images1__img"
            :class="`is-img-${i}`"
            :size="`block-image-${i}`"
            :src="img"
            :alt="content.title"
            :data-scroll="true"
            :data-scroll-speed="-2"
          />
        </div>
        <div class="block-afternoon__texts">
          <UiTagline
            v-if="content.tagline"
            class="block-afternoon__tagline"
            :text="content.tagline"
          />
          <UiTitle
            v-if="content.title"
            class="block-afternoon__title"
            :title="content.title"
            size="xl"
          />
          <UiText v-if="content.text1" :text="content.text1" />
          <UiText v-if="content.text2" :text="content.text2" />
          <div v-if="hasCta || hasLink" class="block-afternoon__controls">
            <UiButton
              v-if="hasCta"
              icon="chevron-outline-right"
              icon-color="primary"
              :link="content.cta"
            >
              {{ content.cta.text }}
            </UiButton>

            <UiLink v-if="hasLink" :link="content.link" theme="itc">
              {{ content.link.text }}
            </UiLink>
          </div>
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

  data: () => ({}),

  computed: {
    hasCta() {
      return (
        this.content.cta &&
        this.content.cta.text &&
        (this.content.cta.route || this.content.cta.url)
      )
    },
    hasLink() {
      return (
        this.content.link &&
        this.content.link.text &&
        (this.content.link.route || this.content.link.url)
      )
    },
  },
}
</script>

<style lang="scss">
.block-afternoon {
  position: relative;

  &::before {
    position: absolute;
    top: 40%;
    right: 0;
    width: 100%;
    height: 80%;
    background-image: url(/img/cloud05.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right center;
    content: '';
  }

  &__narrow {
    // display: grid;
    // gap: 2rem;

    @include md-down {
      // grid-template-areas: 'texts images';
      @include flex-start-stretch;
      @include flex-col;
      gap: 4rem;
      @include padding-x(var(--gutter));
    }
    @include lg-up {
      // grid-template-areas: 'texts empty images';
      // grid-template-columns: 4fr 1fr 7fr;
      @include flex-between-center;
      @include flex-row-reverse;
      gap: 10%;
    }
  }

  &__tagline {
    @include text-primary;
    margin-bottom: 2rem;
  }

  &__title {
    @include lg-up {
      margin-left: -0.08em;
    }
  }

  &__controls {
    @include flex-start-center;
    gap: 2.5rem;
    padding-top: 4rem;

    @include sm {
      @include flex-start-start;
      @include flex-col;
    }
  }

  &__texts {
    grid-area: texts;

    @include md-down {
      width: 100%;
      order: 0;
    }
    @include lg-up {
      width: columns(4, 12);
    }

    .ui-text {
      @include rf(18, 18);
      margin-bottom: 2rem;
    }
  }

  &__images1 {
    @include flex-auto;
    grid-area: images;
    display: grid;
    gap: 2rem;

    grid-template-columns: 2fr 4fr 10fr calc(100% / 7);
    grid-template-rows: 1fr 6fr 4fr;
    grid-template-areas:
      'image1 image1 empty1 empty1'
      'image1 image1 image2 image2'
      'empty2 image3 image3 empty3';

    @include md-down {
      width: 100%;
      height: 80vw;
    }
    @include lg-up {
      width: columns(7, 12);
      height: 40vw;
      max-height: 80rem;
    }

    &__img {
      @include sm {
        --br: 5rem;
      }
      @include md-up {
        --br: 8rem;
      }

      &.is-img-0 {
        grid-area: image1;
        border-top-right-radius: var(--br);
        border-bottom-left-radius: var(--br);
      }
      &.is-img-1 {
        grid-area: image2;
        border-top-left-radius: var(--br);
        border-bottom-right-radius: var(--br);
      }
      &.is-img-2 {
        grid-area: image3;
        border-top-left-radius: var(--br);
        border-bottom-right-radius: var(--br);
      }
      &.is-img-3 {
        grid-area: image4;
        border-top-right-radius: var(--br);
        border-bottom-left-radius: var(--br);
      }
    }
  }

  &.image-left &__texts {
    order: 1;
  }
}
</style>
