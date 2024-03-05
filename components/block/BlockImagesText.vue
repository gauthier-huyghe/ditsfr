<template>
  <UiSection :id="content.id">
    <UiContainer
      classname="block-images-text"
      :class="{ 'image-left': content.image_left }"
    >
      <!-- <UiImage
        class="block-images-text__bg"
        :src="'/img/cloud01.png'"
        :alt="content.title"
        :data-scroll="true"
        :data-scroll-speed="-2"
      /> -->
      <UiNarrow left="1" right="1" class="block-images-text__narrow">
        <div class="block-images-text__texts">
          <UiTagline
            v-if="content.tagline"
            class="block-images-text__tagline"
            :text="content.tagline"
          />
          <UiTitle
            v-if="content.title"
            class="block-images-text__title"
            :title="content.title"
            size="xl"
          />
          <UiText v-if="content.text" :text="content.text" />
          <div v-if="hasCta || hasLink" class="block-images-text__controls">
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
        <div class="block-images-text__images">
          <UiImage
            v-for="(img, i) in content.images"
            :key="`block-images-text-images-${i}`"
            class="block-images-text__images__img"
            :class="`is-img-${i}`"
            :size="`block-image-${i}`"
            :src="img"
            :alt="content.title"
            :data-scroll="true"
            :data-scroll-speed="-2"
          />
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
.block-images-text {
  position: relative;

  &::before {
    position: absolute;
    inset: 0;
    background-image: url(/img/cloud01.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right center;
    content: '';
  }

  &__narrow {
    // padding: 0 columns(1);
    display: grid;

    @include md-down {
      gap: 4rem;
    }
    @include lg-up {
      gap: 12rem;
      display: flex;
      align-items: center;
    }
  }

  &__tagline {
    @include text-primary;
    margin-bottom: 2rem;
  }

  &__title {
    @include lg-up {
      width: columns(3, 4);
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
    @include md-down {
      width: 100%;
      order: 0;
    }
    @include lg-up {
      width: columns(5, 12);
    }
  }

  &__images {
    @include flex-auto;
    display: grid;
    gap: 2rem;
    grid-template-areas:
      'image1 image1 image1 empty1 empty1 empty1 empty1'
      'image1 image1 image1 image2 image2 image2 image2'
      'empty2 empty2 image3 image3 image3 image3 empty3';
    grid-template-columns: repeat(7, 1fr);

    @include md-down {
      width: 100%;
      grid-template-rows: 6rem 28rem 24rem;
    }
    @include lg-up {
      width: columns(7, 12);
      min-height: 46rem;
      grid-template-rows: 10rem 34rem 29rem;
    }

    &__img {
      --br: 8rem;

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
        margin-left: -6%;
      }
    }
  }

  &.image-left &__texts {
    order: 1;
  }
}
</style>
