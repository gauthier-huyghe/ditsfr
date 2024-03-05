<template>
  <UiSection :id="content.id">
    <UiContainer classname="home-hero">
      <template #bg>
        <UiImage
          :src="isDesktop ? content.image.desktop : content.image.mobile"
          :alt="content.alt"
          :data-scroll="true"
          :data-scroll-speed="-2"
        />
      </template>
      <UiMacaron v-if="showMacaron" class="home-hero__macaron" />
      <!-- <div class="home-hero__countdown" v-html="countDownText" /> -->
      <UiTagline
        v-if="content.tagline"
        class="home-hero__tagline"
        :text="content.tagline"
      />
      <UiImage
        class="home-hero__logo"
        src="/img/DITSfr_white.svg"
        alt="Dinner in the sky - Belgium"
        auto-size
        no-background
      />
      <UiTitle
        tag="h1"
        size="home"
        class="home-hero__title"
        :title="title"
        :subtitle="subtitle"
      />
      <UiTitle
        v-if="content.place"
        tag="h3"
        size="lg"
        class="home-hero__place"
        :title="content.place"
        no-margin
      />
      <UiText
        v-if="content.text"
        class="home-hero__text"
        :text="content.text"
      />
      <div v-if="content.banner" class="home-hero__banner">
        <div v-html="content.banner" />
      </div>
      <!-- <div class="home-hero__partners">
        <UiImage
          class="home-hero__waterloo"
          src="/img/partners/waterloo-domaine.png"
          alt="Domain de la bataille de waterloo"
          title="Domain de la bataille de waterloo"
          auto-size
          no-background
        />
        <UiImage
          class="home-hero__bla"
          src="/img/partners/bla.png"
          alt="Braine l'alleud"
          title="Braine l'alleud"
          auto-size
          no-background
        />
      </div> -->
      <div class="home-hero__cta">
        <UiBookLink
          theme="bigbutton"
          :link="$t('link_booking')"
          :gtm-data="{ action: '', position: 'home' }"
        >
          <span
            v-html="$t(reservationOpen ? 'button_booknow' : 'button_subscribe')"
          />
          <UiIcon icon="arrow-square" size="xs" />
        </UiBookLink>
      </div>
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
    // countDownText() {
    //   return this.countDays > 0
    //     ? this.$t('count_down').replace('$count', this.countDays)
    //     : this.countDays > -25
    //     ? this.$t('countdown_inlive')
    //     : ''
    // },
  },
}
</script>

<style lang="scss">
.home-hero {
  --color: var(--color-font-alt);
  --color-font: var(--color-font-alt);
  overflow: hidden;

  &__bg {
    .ui-image {
      border-top-left-radius: var(--global-radius);
      border-bottom-right-radius: var(--global-radius);

      @include md-down {
        img {
          object-position: top center;
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
        rgba(0, 12, 56, 0.59) 5.59%,
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
    color: var(--color-font);

    @include md-down {
      display: grid;
      gap: 2rem;
      padding: 0 2rem;
      padding-top: 7rem;
      padding-bottom: 14rem;
    }
    @include lg-up {
      padding-left: columns(1);
      padding-top: var(--header-height);
      padding-bottom: calc(var(--header-height) / 2);
    }
  }

  &__macaron {
    @include rf(20, 25);
    left: calc(var(--gutter) + columns(1) - 1rem);
    top: 4rem;
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
      width: 50%;
      max-width: 40rem;
      margin-bottom: 80vw;
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
  &__title.ui-title.home {
    @include font-normal;

    strong {
      @include font-bold;
    }

    @include lg-up {
      margin-top: 1rem;
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
      max-width: columns(4, 11);
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
    }
    @include lg-up {
      margin-top: 5rem;
    }
  }
}
</style>
