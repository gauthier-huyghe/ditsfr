<template>
  <UiSection :id="content.id" class="home-hero-split__section">
    <UiContainer classname="home-hero-split">
      <!-- <template #bg>
        <UiImage
          :src="content.image"
          :alt="content.alt"
          :data-scroll="true"
          :data-scroll-speed="-2"
        />
      </template> -->
      <!-- <UiMacaron v-if="showMacaron" class="home-hero-split__macaron" />
      <div class="home-hero-split__countdown" v-html="countDownText" /> -->

      <!-- <div class="home-hero-split__fixed only-mobile">
        <UiTagline
          v-if="content.tagline"
          class="home-hero-split__tagline"
          :text="content.tagline"
        />
        <UiImage
          src="/img/DITSfr_black.svg"
          alt="Dinner in the sky - Belgium"
          auto-size
          no-background
        />
        <UiTitle
          tag="h1"
          size="home"
          class="home-hero-split__title"
          :title="title"
          :subtitle="subtitle"
        />
      </div> -->

      <div class="home-hero-split__items">
        <div
          v-for="(item, i) in content.items"
          :key="`home-split-${i}`"
          class="home-hero-split__item"
          :class="`home-split-item-${i}`"
        >
          <div class="home-hero-split__item__image">
            <UiImage :src="item.image" alt="Dinner in the sky - Belgium" />
            <UiLink
              :link="{ route: item.moreinfoLink }"
              class="home-hero-split__item__button"
              theme="main-menu"
            >
              {{ $t('button_moreinfo') }}
            </UiLink>
          </div>
          <UiBookLink
            theme="giantbutton"
            :link="item.cta.link"
            :gtm-data="{ action: '', position: 'home' }"
          >
            <UiTitle
              tag="h2"
              size="lg"
              class="home-hero-split__item__title"
              :title="item.title"
              :subtitle="item.subtitle"
              no-margin
            />
            <UiText class="home-hero-split__item__text" :text="item.text" />
            <div class="home-hero-split__item__cta">
              {{ item.cta.text }}
              <UiIcon icon="arrow-square" size="xs" />
            </div>
          </UiBookLink>
        </div>
        <div class="home-hero-split__items__or" v-text="$t('or')" />
      </div>
      <!-- <div class="home-hero-split__partners">
        <UiImage
          class="home-hero-split__waterloo"
          src="/img/partners/waterloo-domaine.png"
          alt="Domain de la bataille de waterloo"
          title="Domain de la bataille de waterloo"
          auto-size
          no-background
        />
        <UiImage
          class="home-hero-split__bla"
          src="/img/partners/bla.png"
          alt="Braine l'alleud"
          title="Braine l'alleud"
          auto-size
          no-background
        />
      </div> -->
      <div class="home-hero-split__contact" v-html="content.contact" />
    </UiContainer>
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
  computed: {
    ...mapGetters('common', ['reservationOpen', 'showMacaron']),
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
    countDays() {
      const oneDay = 24 * 60 * 60 * 1000 // hours*minutes*seconds*milliseconds
      const firstDate = new Date()
      const secondDate = new Date(2024, 4, 30)
      return Math.round((secondDate - firstDate) / oneDay)
    },
    countDownText() {
      return this.countDays > 0
        ? this.$t('count_down').replace('$count', this.countDays)
        : this.countDays > -25
        ? this.$t('countdown_inlive')
        : ''
    },
  },
}
</script>

<style lang="scss">
.home-hero-split {
  --color: var(--color-font-alt);
  --color-font: var(--color-font-alt);

  &__section {
    @include lg-up {
      background-image: url('/img/background/snow.png');
      background-size: auto 100%;
      background-repeat: no-repeat;
      background-position: center right;
    }
  }

  // &__bg {
  //   .ui-image {
  //     border-top-left-radius: var(--global-radius);
  //     border-bottom-right-radius: var(--global-radius);
  //   }

  //   &::before {
  //     content: '';
  //     position: absolute;
  //     z-index: 1;
  //     inset: 0;
  //     background-image: linear-gradient(
  //       83.37deg,
  //       rgba(0, 12, 56, 0.59) 5.59%,
  //       rgba(0, 12, 56, 0) 62.25%
  //     );
  //   }
  // }

  &__inner {
    position: relative;

    @include md-down {
      @include flex-start-stretch;
      // height: -webkit-fill-available;
      // height: calc(100vh - var(--header-main) - var(--gutter));
      // height: calc(var(--vh, 1vh) * 100 - var(--header-main) - var(--gutter));
    }
    @include lg-up {
      @include flex-start-stretch;
      min-height: 70rem;
      // height: calc(100vh - var(--header-main) - var(--gutter));
      // height: calc(var(--vh, 1vh) * 100 - var(--header-main) - var(--gutter));
      // max-height: 100rem;
    }
  }

  &__content {
    color: var(--color-font);

    @include md-down {
      // display: grid;
      // gap: 2rem;
      // padding: 0 2rem;
      // padding-top: calc(var(--header-height) + 10rem);
      // padding-bottom: 4rem;
    }
    @include lg-up {
      width: 100%;
      // padding-left: columns(1);
      // padding-top: var(--header-height);
      // padding-bottom: calc(var(--header-height) / 2);
    }
  }

  &__fixed {
    @include flex-start-center;
    @include flex-col;
    position: absolute;
    left: 0;
    width: 100%;
    text-align: center;
    z-index: 1;
    pointer-events: none;
    transition: all 0.6s $ease-in-out-quart;

    @include md-down {
      top: 2rem;
    }
    @include lg-up {
      top: 4rem;
    }

    .ui-image.auto-size {
      @include flex-initial;
      width: 20rem;
      margin-bottom: 1rem;
    }

    &.only-mobile {
      --color-font: #{$font};

      @include lg-up {
        display: none;
      }
    }
  }

  &__macaron {
    @include rf(20, 25);
    left: calc(var(--gutter) + columns(1) - 1rem);
    top: 4rem;
    z-index: 10;
  }
  &__countdown {
    @include rf(17, 21);
    position: absolute;
    // right: calc(var(--gutter) + 3rem);
    right: 3rem;
    top: 3rem;
    line-height: 1em;
    text-transform: uppercase;
    text-align: center;
    --color-font: #{$font};
    color: var(--color-font);
    z-index: 10;

    strong {
      @include font-bold;
      font-size: 3em;
      line-height: 0.9em;
    }
    em {
      font-size: 1.5em;
      line-height: 0.9em;
    }
  }
  &__tagline {
    @include lg-up {
      margin-bottom: 1rem;
    }
  }
  &__logo.ui-image.auto-size {
    @include aspect-ratio(336, 71);

    @include md-down {
      width: 50%;
      max-width: 40rem;
    }
    @include lg-up {
      width: 35%;
      max-width: 45rem;
    }

    img {
      // transform: unset !important;
      object-fit: contain;
      // image-rendering: crisp-edges;
    }
  }
  &__items {
    @include flex-start-stretch;
    width: 100%;
    gap: 0rem;
    // border-top-left-radius: var(--global-radius);
    // border-bottom-right-radius: var(--global-radius);
    // overflow: hidden;

    @include md-down {
      @include flex-col;
    }
    @include lg-up {
      padding: 0 5rem;
    }

    @include lg-up {
      &:hover {
        .home-hero-split__item {
          &:not(:hover) {
            .home-hero-split__fixed {
              opacity: 0;
            }
          }
        }
      }
    }

    &__or {
      @include rf(20, 20);
      font-weight: 700;
      text-transform: uppercase;
      color: $font;

      @include md-down {
        margin: 1rem 0 0rem 0;
        text-align: center;
        order: 1;
      }
      @include lg-up {
        @include center-abs('horizontal');
        bottom: 17rem;
      }
    }
  }
  &__item {
    @include flex-initial;
    @include flex-start-center;
    @include flex-col;
    // border: 1px solid $font;
    position: relative;
    text-align: center;
    transition: all 1.5s $ease-in-out-quart;
    --color-font: #{$font};

    @include md-down {
      width: 100%;
      padding: 5rem 3rem 3rem 3rem;

      &.home-split-item-0 {
        order: 0;
      }
      &.home-split-item-1 {
        order: 2;
      }
    }
    @include lg-up {
      width: 50%;
      height: 100%;
      padding: 8rem 5rem 0 5rem;
    }

    // &:hover {
    //   @include lg-up {
    //     width: 60%;

    //     .home-hero-split__item__text {
    //       opacity: 1;
    //     }
    //   }
    // }

    .home-hero-split__fixed {
      @include md-down {
        display: none;
      }
    }

    &__bg {
      @include fit;
      z-index: 0;

      &::before {
        content: '';
        position: absolute;
        z-index: 1;
        inset: 0;
        background-image: linear-gradient(
          83.37deg,
          rgba(0, 12, 56, 0.59) 5.59%,
          rgba(0, 12, 56, 0) 62.25%
        );
      }
    }
    &__image {
      display: block;
      position: relative;

      @include md-down {
        width: 100%;
      }

      .home-hero-split__item__button {
        position: absolute;
        bottom: 0rem;
        left: 50%;
        transform: translateX(-50%);
        z-index: 2;
        --color-font: #{$font-alt};

        &.ui-link--main-menu {
          @include rf(16, 16);
        }
      }

      .ui-image {
        overflow: initial;
        background: none;
        z-index: 0;

        @include lg-up {
          max-width: 76rem;
          max-height: 76rem;
          width: 35vw;
          height: 35vw;
        }

        &__container {
          overflow: initial;
          background: none;

          img {
            overflow: hidden;
            border-top-left-radius: var(--global-radius);
            border-bottom-right-radius: var(--global-radius);
          }
        }
      }
    }

    &__title.ui-title.lg {
      @include font-normal;
      position: relative;
      text-transform: uppercase;
      margin-top: 3rem;
      z-index: 2;

      strong {
        @include font-bold;
      }

      @include lg-up {
      }

      .ui-title {
        &__title {
          @include rf(32, 42);
          display: block;
          line-height: 0.8;
        }
        &__subtitle {
          @include rf(28, 32);
          margin-top: 0;
        }
      }
    }

    &__text {
      position: relative;
      min-height: 5.5rem;
      margin-top: 1.2rem;
      z-index: 2;
      transition: opacity 0.5s ease-in-out;

      @include lg-up {
        // opacity: 0;
      }

      &.ui-text {
        @include rf(14, 14);
        text-align: center;

        br {
          display: none;
        }
      }
    }

    &__cta {
      position: relative;
      text-transform: uppercase;
      z-index: 2;
    }
  }

  // &__title.ui-title.home {
  //   @include font-normal;

  //   strong {
  //     @include font-bold;
  //   }

  //   @include lg-up {
  //     margin-top: 1rem;
  //   }
  // }

  // &__place.ui-title.lg {
  //   // margin-bottom: 0;
  // }
  // &__partners {
  //   @include flex-start-center;
  //   gap: 2rem;
  // }
  // &__waterloo.ui-image.auto-size {
  //   width: 10rem;
  // }
  // &__bla.ui-image.auto-size {
  //   width: 8rem;
  // }

  // &__text {
  //   &.ui-text {
  //     @include rf(18, 18);
  //   }

  //   @include md-down {
  //     margin-top: 1rem;
  //   }
  //   @include lg-up {
  //     max-width: columns(4, 11);
  //     margin-top: 1rem;
  //   }
  // }

  // &__cta {
  //   @include md-down {
  //     margin-top: 3.5rem;
  //   }
  //   @include lg-up {
  //     margin-top: 4rem;
  //   }
  // }

  &__contact {
    text-align: center;
    margin-top: 6rem;
    color: $color-christmas;
    @include rf(19, 19);

    a {
      text-decoration: underline;
    }
  }
}
</style>
