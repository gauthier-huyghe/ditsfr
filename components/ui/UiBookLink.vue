<template>
  <div class="ui-book-link">
    <a
      v-if="reservationOpen"
      :class="classes"
      target="_blank"
      rel="noreferrer"
      :href="link || $t('link_booking')"
      @click="clickCta()"
    >
      <!-- @click.prevent="clickOpenModal($event)" -->
      <slot />
    </a>
    <a
      v-else
      :class="classes"
      :href="link || $t('link_booking')"
      @click.prevent="clickScroll(link || $t('link_booking'), false)"
    >
      <slot />
    </a>
    <UiModal v-if="modalOpen" v-model="modalOpen" theme="tiny">
      <div class="ui-book-link__modal">
        <h3 class="ui-book-link__modal__title" v-text="$t('book_title')" />
        <div class="ui-book-link__modal__btns">
          <UiButton theme="book" @click.native="clickScroll('#booking', true)">
            {{ $t('book_company') }}
          </UiButton>
          <UiButton
            theme="book"
            :link="{ url: link || $t('link_booking') }"
            @click.native="modalOpen = false"
          >
            {{ $t('book_private') }}
          </UiButton>
        </div>
      </div>
    </UiModal>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  props: {
    link: {
      type: String,
      default: '',
    },
    theme: {
      type: String,
      default: 'default',
    },
    gtmData: {
      type: Object,
      default: () => ({}),
    },
  },

  data: () => ({
    modalOpen: false,
  }),

  computed: {
    ...mapGetters('common', ['reservationOpen']),
    classes() {
      return ['ui-book-link', `ui-book-link--${this.theme}`]
    },
  },
  methods: {
    ...mapMutations('common', ['setIsCompanyFromButton']),
    clickCta() {
      this.$pushGtmEvent('click_cta', this.gtmData)
    },
    clickOpenModal($event) {
      this.modalOpen = true
      this.$emit('click', $event)
    },
    clickScroll($event, company) {
      this.modalOpen = false
      this.$scrollTo($event)
      if (company) {
        this.setIsCompanyFromButton(true)
      }
      this.$emit('click', $event)
    },
  },
}
</script>

<style lang="scss">
.ui-book-link {
  @include rf(11, 13);
  @include font-medium;
  display: inline-block;
  transition: color 0.4s $ease-in-out;
  color: var(--color-font);

  &:hover {
    --color: var(--color-primary);
  }

  // °_°_°_°_°_°
  // THEMES
  // °_°_°_°_°_°
  &--underline {
    @include rf(18, 18);
    @include font-regular;
    padding: 1rem 0;
    letter-spacing: 0.1em;
    line-height: 1;
    text-transform: uppercase;

    @include underline-hover(var(--color-font), 1px, 0.4rem, 0px);

    &::after {
      background: linear-gradient(
        to right,
        currentColor 33.3%,
        transparent 33.3%,
        transparent 66.6%,
        currentColor 66.6%
      );
      background-size: 300%;
      background-position: 100% 0;
      transform: scaleX(1);
      transition: all 0.8s $ease-in-out-circ;
    }

    .ui-icon {
      --icon-size: 1.1rem;
      margin-left: 4.5rem;
      transition: all 0.6s $ease-in-out-circ;
    }

    @include hover {
      &::after {
        background-position: 0% 0%;
      }
      .ui-icon {
        transform: rotate(45deg);
      }
    }
  }

  &--header-subscribe {
    @include flex-start-center;
    @include inline-flex;
    @include rf(16, 18);
    @include font-medium;
    text-transform: uppercase;
    background: var(--fg);
    color: var(--color-font);
    border: 0;
    border-radius: 0;
    transition: all 0.3s $ease-in-out-circ;

    @include md-down {
      padding: 1.3rem 2.5rem 1.3rem 3rem;
      height: 5rem;
      border-bottom-left-radius: 3rem;
    }
    @include lg-up {
      padding: 0.8em 3em 0.8em 3.5em;
      height: 4.5em;
      border-bottom-left-radius: 2.8em;
    }

    .ui-icon {
      margin-left: 2rem;
      --icon-size: 1.2rem;
      transition: none;
    }

    @include hover() {
      border: 0;
      color: var(--color-font-alt);
      background-color: $primary;
    }
  }

  &--giantbutton {
    @include flex-start-center;
    @include flex-col;
    @include inline-flex;
    @include rf(16, 18);
    @include font-medium;
    background: var(--fg);
    color: var(--color-font);
    border: 0;
    border-radius: 0;
    margin-top: 2rem;
    transition: all 0.3s $ease-in-out-circ;

    @include md-down {
      padding: 1.3rem 2.5rem 1.3rem 3rem;
      // height: 5rem;
      border-top-left-radius: 2rem;
      border-bottom-right-radius: 2rem;
    }
    @include lg-up {
      width: 30em;
      padding: 0.8em 1em 2.2rem 1em;
      // height: 4em;
      border-top-left-radius: 1.8em;
      border-bottom-right-radius: 1.8em;
    }

    .ui-icon {
      margin-left: 2rem;
      --icon-size: 1.2rem;
      transition: none;
    }

    @include hover() {
      border: 0;
      color: var(--color-font-alt);
      background-color: $primary;
    }
  }

  &--bigbutton {
    @include flex-start-center;
    @include inline-flex;
    @include rf(18, 20);
    @include font-medium;
    position: relative;
    background: var(--fg);
    color: $font;
    // background: $color-christmas;
    // color: var(--color-font);
    line-height: 1;
    border: 0;
    gap: 2rem;
    border-radius: 0;
    text-transform: uppercase;
    transition: all 0.3s $ease-in-out-circ;
    overflow: hidden;

    @include md-down {
      padding: 1.5rem 2.2rem;
      // height: 5rem;
      border-top-left-radius: 2rem;
      border-bottom-right-radius: 2rem;
    }
    @include lg-up {
      // width: 30em;
      padding: 1.5rem 2.2rem;
      // height: 4em;
      border-top-left-radius: 1.4em;
      border-bottom-right-radius: 1.4em;
    }

    span {
      position: relative;
      z-index: 2;
    }

    .ui-icon {
      margin-left: 2rem;
      --icon-size: 1.2rem;
      transition: none;
      position: relative;
      z-index: 2;
    }

    @include hover() {
      border: 0;
      color: var(--color-font-alt);
      background-color: $primary;
    }

    &::before {
      @include fit;
      content: '';
      z-index: 0;
      background-image: linear-gradient(
        83.37deg,
        rgba(0, 12, 56, 0.3) 5.59%,
        rgba(0, 12, 56, 0) 80%
      );
    }
  }

  // MODAL

  &__modal {
    &__title {
      @include rf(24, 34);
      color: var(--color-font-alt);
      text-transform: uppercase;
      text-align: center;
    }
    &__btns {
      @include flex-start-stretch;
      gap: 1rem;

      @include md-down {
        margin-top: 2rem;
      }
      @include lg-up {
        margin-top: 3rem;
      }

      .ui-button {
        @include flex-auto;
      }
    }
  }
}
</style>
