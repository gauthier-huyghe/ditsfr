<template>
  <UiSection :id="content.id">
    <UiContainer classname="home-hero-double">
      <template #bg>
        <UiImage
          :src="isDesktop ? content.image.desktop : content.image.mobile"
          :alt="content.alt"
          :data-scroll="true"
          :data-scroll-speed="-2"
        />
      </template>
      <UiMacaron v-if="showMacaron" class="home-hero-double__macaron" />
      <UiSlogan
        v-if="content.slogan"
        class="home-hero-double__slogan"
        :text="content.slogan"
      />
      <!-- <div class="home-hero-double__countdown" v-html="countDownText" /> -->
      <!-- <UiTagline
        v-if="content.tagline"
        class="home-hero-double__tagline"
        :text="content.tagline"
      /> -->
      <UiImage
        class="home-hero-double__logo"
        src="/img/DITSfr_white.svg"
        alt="Dinner in the sky - Belgium"
        auto-size
        no-background
      />
      <div class="home-hero-double__footer">
        <div
          v-for="(item, index) in content.items"
          :key="`homehero_${index}`"
          class="home-hero-double__footer__item"
        >
          <UiTitle
            tag="h2"
            size="homedouble"
            class="home-hero-double__title"
            :title="replace(item.title)"
            :subtitle="replace(item.subtitle)"
          />
          <UiText
            v-if="item.text"
            class="home-hero-double__text"
            :text="replace(item.text)"
          />
          <div class="home-hero-double__cta">
            <UiBookLink
              theme="bigbutton"
              :link="item.cta.link"
              :gtm-data="{ action: 'Saint-Valentin', position: 'home' }"
            >
              <span v-html="item.cta.text" />
              <UiIcon icon="arrow-square" size="xs" />
            </UiBookLink>
          </div>
        </div>
      </div>
      <!-- <div class="home-hero-double__partners">
        <UiImage
          class="home-hero-double__waterloo"
          src="/img/partners/waterloo-domaine.png"
          alt="Domain de la bataille de waterloo"
          title="Domain de la bataille de waterloo"
          auto-size
          no-background
        />
        <UiImage
          class="home-hero-double__bla"
          src="/img/partners/bla.png"
          alt="Braine l'alleud"
          title="Braine l'alleud"
          auto-size
          no-background
        />
      </div> -->
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
    ...mapGetters('screens', ['isDesktop']),
    replace() {
      return (text) => {
        return text
          ? text
              .replace('$dates_long', this.$t('dates_long'))
              .replace('$dateslimburg', this.$t('dateslimburg'))
              .replace('$dates', this.$t('dates'))
          : ''
      }
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
.home-hero-double {
  --color: var(--color-font);
  --color-font: var(--color-font);
  overflow: hidden;

  &__bg {
    .ui-image {
      border-top-left-radius: var(--global-radius);
      border-bottom-right-radius: var(--global-radius);

      img {
        @include sm {
          object-position: center top;
        }
        @include md {
          object-position: center -25vw;
        }
      }
    }

    &::before {
      content: '';
      position: absolute;
      z-index: 1;
      inset: 0;
      background-image: linear-gradient(
        83.37deg,
        rgba(0, 12, 56, 0.2) 5.59%,
        rgba(0, 12, 56, 0) 62.25%
      );
      border-top-left-radius: var(--global-radius);
      border-bottom-right-radius: var(--global-radius);
    }
  }

  &__inner {
    position: relative;

    @include md-down {
      @include flex-start-end;
      min-height: -webkit-fill-available;
      // height: calc(100vh - var(--header-main) - var(--gutter));
      // height: calc(var(--vh, 1vh) * 100 - var(--header-main) - var(--gutter));
    }
    @include lg-up {
      @include flex-start-center;
      min-height: 70rem;
      height: calc(100vh - var(--header-main) - var(--gutter));
      height: calc(var(--vh, 1vh) * 100 - var(--header-main) - var(--gutter));
      max-height: 100rem;
    }
  }

  &__content {
    @include md-down {
      display: grid;
      gap: 2rem;
      padding: 4rem 2rem 2rem 2rem;
    }
    @include lg-up {
      @include flex-between-stretch;
      @include flex-col;
      height: 90%;
      padding-left: columns(1);
      padding-right: columns(1);
      padding-top: var(--header-height);
      padding-bottom: calc(var(--header-height) / 2);
    }
  }

  &__macaron {
    @include rf(20, 25);
    left: calc(var(--gutter) + columns(1) - 1rem);
    top: 4rem;
  }
  &__slogan {
    @include rf(20, 25);
    right: calc(var(--gutter) + columns(1));
    top: calc(var(--header-height) * 1.5);

    @include md {
      top: 4rem;
      right: 8rem;
    }
  }
  &__countdown {
    @include rf(17, 21);
    position: absolute;
    right: calc(var(--gutter) + 3rem);
    top: 3rem;
    line-height: 1em;
    text-transform: uppercase;
    text-align: center;

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
      width: 70%;
      max-width: 25rem;
    }
    @include sm {
      margin-bottom: 80vw;
    }
    @include md {
      margin-bottom: 55vw;
    }
    @include lg-up {
      width: 35%;
      max-width: 42rem;
    }

    img {
      // transform: unset !important;
      object-fit: contain;
      // image-rendering: crisp-edges;
    }
  }
  &__title.ui-title.home {
    @include font-normal;

    strong {
      @include font-bold;
    }

    @include lg-up {
      margin-top: 1rem;
    }
  }

  &__footer {
    gap: 2rem;

    @include sm {
      @include flex-start-stretch;
      @include flex-col;
      gap: 4rem;
    }
    @include md-up {
      @include flex-between-end;
      gap: 2rem;
    }

    &__item {
      @include flex-initial;

      &:nth-child(2),
      &:nth-child(2) .ui-text {
        @include md-up {
          text-align: right;
        }
      }
    }
  }

  &__place.ui-title.lg {
    // margin-bottom: 0;
  }
  &__partners {
    @include flex-start-center;
    gap: 2rem;
  }
  &__waterloo.ui-image.auto-size {
    width: 10rem;
  }
  &__bla.ui-image.auto-size {
    width: 8rem;
  }

  &__text {
    &.ui-text {
      @include rf(17, 20);
    }

    @include md-down {
      margin-top: 1rem;
      width: 60%;
    }
    @include lg-up {
      margin-top: 1rem;
    }
  }

  &__banner {
    @include flex-center-center;
    @include rf(16, 20);
    text-align: center;
    text-transform: uppercase;
    font-weight: 600;
    line-height: 1;
    padding: 1.2rem;
    position: absolute;
    transform: rotate(-20deg);
    background: $color-blue-light;
    // background: $color-christmas;
    box-shadow: 0 0.5rem 0.7rem 0 rgba(0, 0, 0, 0.3);

    &::before {
      @include fit;
      content: '';
      z-index: 0;
      background-image: linear-gradient(
        83.37deg,
        rgba(0, 12, 56, 0.59) 5.59%,
        rgba(0, 12, 56, 0) 62.25%
      );
    }

    @include sm {
      width: 120vw;
      right: -20vw;
      bottom: 5rem;
    }
    @include md {
      width: 80rem;
      right: -10rem;
      bottom: 8rem;
    }
    @include lg-up {
      width: 100vw;
      right: -25vw;
      bottom: 10rem;
    }

    & > div {
      @include flex-initial;
      position: relative;
      z-index: 1;
      max-width: 80vw;
    }
  }

  &__cta {
    @include md-down {
      margin-top: 3rem;
    }
    @include lg-up {
      margin-top: 5rem;
    }
  }
}
</style>
