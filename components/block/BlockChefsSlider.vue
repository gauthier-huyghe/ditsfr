<template>
  <UiSection :id="content.id">
    <div class="block-chefs-slider">
      <UiContainer classname="block-chefs-slider-container">
        <UiNarrow left="1" right="1" class="block-chefs-slider__narrow">
          <div class="block-chefs-slider__texts">
            <UiTagline
              v-if="content.tagline"
              class="block-chefs-slider__tagline"
              :text="content.tagline"
            />
            <UiTitle
              v-if="content.title"
              class="block-chefs-slider__title"
              :title="content.title"
              size="xl"
            />
            <UiText v-if="content.text" :text="content.text" />
          </div>
        </UiNarrow>
      </UiContainer>
      <div class="block-chefs-slider__images">
        <Swiper :options="options" class="block-chefs-slider__swiper">
          <SwiperSlide
            v-for="(item, itemIndex) in chefs"
            :key="itemIndex"
            class="block-chefs-slider__slide"
          >
            <div class="block-chefs-slider__item">
              <CardChef :datas="item" />
            </div>
          </SwiperSlide>
        </Swiper>
        <SwiperNavigation
          :show-scrollbar="true"
          :classname="`block-chefs-slider-${_uid}`"
          theme="chefs"
        />
      </div>
    </div>
  </UiSection>
</template>

<script>
import { mapGetters } from 'vuex'

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
        slidesPerGroup: 2,
        spaceBetween: 10,
        slidesPerView: 'auto',
        autoplay: true,
        speed: 800,
        watchOverflow: true,
        breakpoints: {
          // when window width is >= 320px
          1080: {
            spaceBetween: 40,
          },
        },
        // mousewheel: {
        //   releaseOnEdges: true,
        // },
        navigation: {
          nextEl: `.block-chefs-slider-${this._uid}__next`,
          prevEl: `.block-chefs-slider-${this._uid}__prev`,
        },
        scrollbar: {
          el: `.swiper-scrollbar`,
          draggable: true,
        },
      },
    }
  },

  computed: {
    ...mapGetters('common', ['chefs']),
    hasLink() {
      return (
        this.content.book &&
        this.content.book.text &&
        (this.content.book.route || this.content.book.url)
      )
    },
  },
}
</script>

<style lang="scss">
.block-chefs-slider {
  $e: &;
  position: relative;
  overflow: hidden;

  &::before {
    position: absolute;
    inset: 0;
    background-image: url(/img/cloud03.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right center;
    content: '';
  }

  &__narrow {
    display: grid;
    gap: 4rem;

    @include lg-up {
      @include flex-start-end;
      @include flex-col;
    }
  }

  &__texts {
    @include flex-initial;
    // width: columns(5.75, 12);

    @include md-down {
      width: 100%;
      padding: 0 var(--gutter);
      order: 1;
    }
    @include lg-up {
      width: calc(columns(5.75, 12) - 12rem);
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
    gap: 2.5rem;
    padding-top: 4rem;

    @include sm {
      @include flex-start-start;
      @include flex-col;
    }
    @include lg-up {
      @include flex-start-center;
    }
  }

  &__images {
    @include flex-auto;
    position: relative;
    width: 100%;
    overflow: hidden;

    @include sm {
      padding: 3rem 5rem 7rem 5rem;
    }
    @include md {
      padding: 3rem 10rem 5rem 10rem;
    }
    @include lg-up {
      padding: 6rem 10rem 8rem 10rem;
      max-width: $page-max;
      margin: 0 auto;
      overflow: initial;
    }

    .swiper-container {
      overflow: initial;
    }
    .swiper-wrapper {
      transition-timing-function: $ease-in-out-circ;
    }
  }

  &__slide {
    &.swiper-slide {
      @include sm {
        width: 70%;
      }
      @include md {
        width: 30%;
      }
      @include lg-up {
        width: 30rem;
      }
    }

    &:nth-child(5n - 4) {
      @include padding-y(4rem, 0);
    }
    &:nth-child(5n - 3) {
      @include padding-y(8rem, 0);
    }
    &:nth-child(5n - 2) {
      @include padding-y(0, 0);
    }
    &:nth-child(5n - 1) {
      @include padding-y(6rem, 0);
    }
    &:nth-child(5n) {
      @include padding-y(11rem, 0);
    }
  }
}
</style>
