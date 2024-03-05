<template>
  <UiSection :id="content.id">
    <UiContainer
      classname="block-cocktails"
      :class="{ 'image-left': content.image_left }"
    >
      <UiNarrow left="1" right="1" class="block-cocktails__narrow">
        <div class="block-cocktails__texts">
          <UiTagline
            v-if="content.tagline"
            class="block-cocktails__tagline"
            :text="content.tagline"
          />
          <UiTitle
            v-if="content.title"
            class="block-cocktails__title"
            :title="content.title"
            size="xl"
          />
          <UiText v-if="content.text" :text="content.text" />
          <div v-if="hasLink" class="block-cocktails__controls">
            <UiBookLink
              theme="underline"
              :link="$t('link_booking') + content.book.url"
              :gtm-data="{ action: '', position: 'cocktail' }"
            >
              {{ content.book.text }}
              <UiIcon icon="arrow-square" size="xs" />
            </UiBookLink>
            <!-- <UiLink v-if="hasLink" :link="content.book" theme="simple">
              {{ content.book.text }}
            </UiLink> -->
          </div>
        </div>
        <div class="block-cocktails__images">
          <Swiper :options="options" class="block-cocktails__swiper">
            <SwiperSlide
              v-for="(item, itemIndex) in content.list"
              :key="itemIndex"
              class="block-cocktails__slide"
            >
              <div class="block-cocktails__item">
                <div class="block-cocktails__item__image">
                  <UiImage :src="item.image" :alt="item.alt" auto-size />
                </div>
                <div class="block-cocktails__item__text">
                  <div
                    class="block-cocktails__item__index"
                    v-html="`0${itemIndex + 1}`"
                  />
                  <div class="block-cocktails__item__name" v-html="item.name" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <SwiperNavigation :classname="`block-cocktails-${_uid}`" />
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

  data() {
    return {
      index: null,
      options: {
        spaceBetween: 20,
        slidesPerView: 1,
        autoplay: true,
        speed: 800,
        watchOverflow: true,
        navigation: {
          nextEl: `.block-cocktails-${this._uid}__next`,
          prevEl: `.block-cocktails-${this._uid}__prev`,
        },
      },
    }
  },

  computed: {
    hasLink() {
      return (
        this.content.book && this.content.book.text
        // (this.content.book.route || this.content.book.url)
      )
    },
  },
}
</script>

<style lang="scss">
.block-cocktails {
  position: relative;

  @include lg-up {
    margin-top: -5rem;
  }

  &::before {
    position: absolute;
    inset: 0;
    background-image: url(/img/cloud02.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 0px center;
    content: '';
  }

  &__narrow {
    @include md-down {
      @include flex-start-stretch;
      @include flex-col;
      gap: 4rem;
      padding: 5rem var(--gutter);
    }
    @include lg-up {
      @include flex-center-center;
      @include padding-y(0, 5rem);
      gap: 12rem;
    }
  }

  &__tagline {
    @include text-primary;
    margin-bottom: 2rem;
  }

  &__title {
    @include lg-up {
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
      width: columns(5.75, 12);
    }
  }

  &__images {
    position: relative;

    @include md-down {
      width: 100%;
      padding: 0 4rem;
    }
    @include lg-up {
      width: columns(6.25, 12);
      @include margin-y(5rem, 15rem);
      padding: 0 8rem;
    }

    .swiper-wrapper {
      transition-timing-function: $ease-in-out-circ;
    }
  }

  &.image-left &__texts {
    @include lg-up {
      order: 1;
    }
  }

  &__item {
    @include flex-center-center;

    &__image {
      @include flex-auto;
      @include flex-center-center;
      width: 40%;
      max-width: 25rem;

      .ui-image__container {
        background: none;
        transform: rotate(-5deg);
        transition: transform 0.5s $ease-in-out-circ;
        margin: 0 -3rem;
        width: calc(100% + 6rem);

        .swiper-slide-active & {
          transform: rotate(5deg);
        }
      }
    }
    &__text {
      @include flex-initial;
    }
    &__index {
      @include rf(11, 11);
      margin-bottom: 1rem;
    }
    &__name {
      @include flex-auto;
      @include rf(18, 18);
      @include font-light;
      line-height: 1.1;

      strong {
        @include rf(30, 50);
        @include font-medium;
        display: inline-block;
        line-height: 0.9;
        text-transform: uppercase;
        letter-spacing: -0.05em;
        margin-bottom: 0.3rem;
      }
    }
  }
}
</style>
