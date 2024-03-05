<template>
  <header class="header" :class="{ isTop }">
    <div class="header__deco" />
    <!-- <HeaderTop /> -->
    <HeaderMain />

    <!-- <div class="header__button_subscribe">
      <UiBookLink
        theme="header-subscribe"
        size="sm"
        icon="arrow-square"
        :gtm-data="{ action: '', position: 'sticky' }"
      >
        {{ $t(reservationOpen ? 'button_booknow' : 'button_subscribe') }}
        <UiIcon icon="arrow-square" size="sm" />
      </UiBookLink>
      <UiMacaron v-if="showMacaron" class="header__button_subscribe__macaron" />
    </div> -->
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('screens', ['isTop']),
    ...mapGetters('common', ['reservationOpen', 'showMacaron']),
  },
}
</script>

<style lang="scss">
.header {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background: var(--bg);
  z-index: 3;

  &__deco {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 100%;
    max-width: $page-max;

    &::before {
      position: absolute;
      left: var(--gutter);
      top: 100%;
      width: var(--global-radius);
      height: calc(var(--global-radius) * 2);
      content: '';
      border-top-left-radius: var(--global-radius);
      box-shadow: 0 var(--global-radius-minus) 0 0 var(--fg); /* This is where the magic happens! */
    }

    &::after {
      position: absolute;
      right: calc(100% - var(--gutter));
      top: 0;
      width: calc(((100vw - 100%) / 2) + var(--gutter));
      height: 100vh;
      content: '';
      background: var(--fg);
    }
  }

  &__button_subscribe {
    position: absolute;
    top: 100%;
    right: 0;
    transition: transform 0.3s ease-in-out;
    z-index: 1;

    &__macaron.ui_macaron {
      @include rf(10, 15);
      pointer-events: none;

      @include md-down {
        top: 0rem;
        right: calc(100% - 1rem);
        padding: 0.8rem;
        border-top-left-radius: 1.5rem;
        border-bottom-right-radius: 1.5rem;
      }
      @include lg-up {
        top: 0.4rem;
        right: calc(100% - 2rem);
      }
    }
  }

  &.isTop {
    .header__button_subscribe {
      transform: translateY(-150%);
    }
  }
}
</style>
