<template>
  <UiContainer
    tag="div"
    classname="header-main"
    fullwidth
    :class="{ down: scrollingDown, isTop, transparent }"
  >
    <!-- LEFT : LOGO + MEGA MENU TRIGGERS -->
    <nav class="header-main__left">
      <TheLogo />
      <div class="header-main__left-menu">
        <p class="header-main__title" v-html="$t('header_title')" />
      </div>
    </nav>

    <!-- RIGHT : PAGES + SEARCH + EXTERNAL LINK -->
    <nav class="header-main__right">
      <div class="header-main__right-wrapper">
        <UiSlideUpDown :active="isTop">
          <div class="header-main__right-menu">
            <MenuLinks :items="main_menu" theme="main-menu" />
          </div>
        </UiSlideUpDown>

        <UiSlideUpDown :active="!isTop">
          <div class="header-main__right-menu">
            <MenuLinks :items="secondary_menu" theme="main-menu" />
          </div>
        </UiSlideUpDown>
      </div>
      <UiSocials is-icons />

      <UiLanguageDropdown v-if="isDesktop" />

      <!-- BURGER -->
      <UiBurger />
    </nav>
  </UiContainer>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState('application', ['showMenuMobile']),
    ...mapGetters('common', ['main_menu', 'secondary_menu']),
    ...mapGetters('screens', ['isDesktop', 'scrollingDown', 'isTop']),
    transparent() {
      return !this.showMenuMobile && this.isTop
    },
  },
}
</script>

<style lang="scss">
.header-main {
  @include transition(height background-color border-color);

  position: relative;
  z-index: 2;
  height: var(--header-main);
  // height: 0;
  color: var(--color-font);
  background: var(--bg);
  background: var(--fg);

  &.isTop {
    @include lg-up {
      height: var(--header-main);
    }
  }
  // &.transparent {
  //   background-color: transparent;
  //   --color: var(--color-font-alt);
  //   --color-active: var(--color-font-alt);
  //   --border: #{rgba(#ffffff, 0.2)};
  // }
  // &:not(.transparent) {
  //   --color-active: var(--color-primary);
  // }

  &__inner {
    height: 100%;
  }

  &__content {
    @include flex-between-center;
    height: 100%;

    @include md-down {
      gap: 2rem;
    }
    @include lg-up {
      gap: 3rem;
    }
  }

  &__left {
    @include flex-start-center;

    height: 100%;
    gap: 3rem;

    @include lg-up {
      padding-left: var(--global-radius);
    }
  }

  &__title {
    @include rf(14, 15);
    text-transform: uppercase;
    line-height: 1.1;
  }

  &__right {
    @include flex-auto;
    @include flex-end-center;
    height: 100%;
    gap: 2.5rem;
  }
  &__right-wrapper {
  }
  &__right-menu {
    height: 100%;
  }

  &__burger {
    @include lg-up {
      display: none;
    }
    @include size(5rem);
    @include flex-center-center;
  }

  &__mobile-controls {
    @include flex-end-center;
    @include lg-up {
      display: none;
    }

    position: absolute;
    gap: 1rem;
    right: 1.5rem;
    top: 50%;
    z-index: 2;
    transform: translateY(-50%);
  }

  &__left-menu {
    @include md-down {
      display: none;
    }
  }

  &__right-menu {
    @include md-down {
      display: none;
    }
  }
}
</style>
