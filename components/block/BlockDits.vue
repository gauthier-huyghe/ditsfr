<template>
  <UiSection :id="content.id">
    <UiContainer
      classname="block-dits"
      :class="{ 'image-left': content.image_left }"
    >
      <UiNarrow
        v-if="content.images1 && content.images1.length > 0"
        left="0"
        right="0"
        class="block-dits__narrow"
      >
        <div class="block-dits__images1">
          <UiImage
            v-for="(img, i) in content.images1"
            :key="`block-dits-images-${i}`"
            class="block-dits__images1__img"
            :class="`is-img-${i}`"
            :size="`block-image-${i}`"
            :src="img"
            :alt="content.title"
            :data-scroll="true"
            :data-scroll-speed="-2"
          />
        </div>
      </UiNarrow>
      <UiNarrow left="1" right="1" class="block-dits__narrow">
        <div class="block-dits__texts">
          <UiTagline
            v-if="content.tagline"
            class="block-dits__tagline"
            :text="content.tagline"
          />
          <UiTitle
            v-if="content.title"
            class="block-dits__title"
            :title="content.title"
            size="xxl"
          />
          <UiText
            v-if="content.text"
            :text="content.text.replace('$dates', $t('dates_long'))"
          />
          <div v-if="hasCta || hasLink" class="block-dits__controls">
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
      <UiNarrow
        v-if="content.images2 && content.images2.length > 0"
        left="0"
        right="0"
        class="block-dits__narrow"
      >
        <div class="block-dits__images2">
          <UiImage
            v-for="(img, i) in content.images2"
            :key="`block-dits-images-${i}`"
            class="block-dits__images2__img"
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
.block-dits {
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
      @include flex-start-stretch;
      @include flex-col;
      gap: 4rem;
    }
  }

  &__tagline {
    @include text-primary;
    margin-bottom: 2rem;
  }

  &__title {
    @include lg-up {
      width: columns(6, 7);
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
    width: 100%;

    @include md-down {
      order: 0;
      padding: 0 var(--gutter);
    }
    @include lg-up {
    }

    .ui-text {
      @include rf(18, 18);
    }
  }

  &__images1 {
    @include flex-auto;
    display: grid;
    width: 100%;
    gap: 2rem;
    grid-template-areas:
      'image1 image1 image1 image1 image1 image1 empty1 empty1 empty1 empty1 empty1 empty1'
      'image1 image1 image1 image1 image1 image1 image2 image2 image2 image2 image2 image2'
      'empty2 image3 image3 image3 image3 image3 image3 image4 image4 image4 image4 empty3'
      'empty4 empty4 empty4 empty4 empty4 empty4 empty4 image4 image4 image4 image4 empty3';
    grid-template-columns: repeat(12, 1fr);

    @include sm {
      // grid-template-rows: 6rem 16rem 15rem 6rem;
      grid-template-rows: 1fr 6fr 6fr 1fr;
    }
    @include md {
      // grid-template-rows: 6rem 28rem 24rem 6rem;
      grid-template-rows: 1fr 6fr 6fr 1fr;
    }
    @include lg-up {
      // width: columns(7, 12);
      // min-height: 46rem;
      // grid-template-rows: 8rem 35rem 29rem 14rem;
      grid-template-rows: 1fr 6fr 6fr 1fr;
      // margin-bottom: -5rem;
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

  &__images2 {
    @include flex-auto;
    display: grid;
    width: 100%;
    // grid-template-areas:
    //   'image3 image3 image3 image3 image3 image3 image3 image4 image4 image4 image4 image4'
    //   'empty4 empty4 empty4 empty4 empty4 empty4 empty4 image4 image4 image4 image4 image4'
    //   'image1 image1 image1 image1 image1 image1 empty1 empty1 empty1 empty1 empty1 empty1'
    //   'image1 image1 image1 image1 image1 image1 image2 image2 image2 image2 image2 image2';
    margin-top: 5rem;

    @include sm {
      grid-template-areas:
        'image2 empty1'
        'image2 image1'
        'image3 image4'
        'empty2 image4';
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 3rem 12rem 10rem 1rem;
      gap: 1rem;
    }
    @include md {
      grid-template-rows: repeat(4, minmax(0, 10rem));
      gap: 2rem;
    }
    @include lg-up {
      grid-template-areas:
        'image1 image1 image2 image2 image2 image3 image3 image3 image3 image3 image3 empty2'
        'image1 image1 image2 image2 image2 image3 image3 image3 image3 image3 image3 empty2'
        'image1 image1 image2 image2 image2 image4 image4 image4 image4 image4 image4 image4'
        'image1 image1 empty1 empty1 empty1 image4 image4 image4 image4 image4 image4 image4';
      grid-template-columns: repeat(12, 1fr);
      grid-template-rows: repeat(4, minmax(0, 13rem));
      gap: 2rem;
    }
    @include xxl {
      grid-template-rows: repeat(4, minmax(0, 16rem));
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
        border-top-left-radius: var(--br);
        border-bottom-right-radius: var(--br);
      }
      &.is-img-1 {
        grid-area: image2;
        border-top-right-radius: var(--br);
        border-bottom-left-radius: var(--br);
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
