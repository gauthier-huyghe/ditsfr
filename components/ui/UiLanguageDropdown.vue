<template>
  <nav
    v-if="$i18n.locales.length > 1"
    v-click-outside="close"
    class="ui-language-dropdown"
    :class="customClasses"
  >
    <span class="ui-language-dropdown__toggle" @click.prevent="toggle">
      <span class="ui-language-dropdown__toggle__lg" v-html="localeName" />
      <span class="ui-language-dropdown__toggle__icon" />
      <!-- <UiIcon
        class="ui-language-dropdown__toggle__chevron"
        icon="chevron-down"
        size="xxs"
      /> -->
    </span>
    <div class="ui-language-dropdown__dropdown">
      <UiSlideUpDown :active="isOpen">
        <ul>
          <li v-for="locale in $i18n.locales" :key="locale.code">
            <NuxtLink
              :to="switchLocalePath(locale.code)"
              :class="{ 'is-active': locale.code === $i18n.locale }"
            >
              {{ isDesktop ? locale.name : locale.code }}
            </NuxtLink>
          </li>
        </ul>
      </UiSlideUpDown>
    </div>
  </nav>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  data: () => ({
    isOpen: false,
  }),
  computed: {
    ...mapState('screens', ['scrollY']),
    ...mapGetters('screens', ['isDesktop']),
    localeName() {
      return this.$i18n.locales.find((i) => i.code === this.$i18n.locale)[
        this.isDesktop ? 'code' : 'name'
      ]
    },
    hasScroll() {
      return this.scrollY > 10
    },
    customClasses() {
      return [{ 'is-open': this.isOpen }]
    },
  },
  watch: {
    '$i18n.locale'() {
      this.close()
    },
    hasScroll() {
      this.close()
    },
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    open() {
      this.isOpen = true
    },
    close() {
      this.isOpen = false
    },
  },
}
</script>

<style lang="scss">
.ui-language-dropdown {
  @include rf(14, 14);

  position: relative;
  z-index: 99;

  &__toggle {
    @include flex-start-center;
    @include padding-y(0.8rem);
    @include padding-x(0);
    gap: 0.5rem;

    position: relative;
    cursor: pointer;
    z-index: 1;

    &__lg {
      @include flex-initial;
      text-transform: uppercase;
    }

    &__icon {
      @include flex-initial;
      position: relative;
      height: 0;
      width: 0;
      pointer-events: none;
      border: solid transparent;
      border-color: rgba(136, 183, 213, 0);
      border-top-color: var(--color-font);
      border-width: 5px;
      transform: scaleX(0.6) translateY(2px);

      .is-open & {
        transform: scaleX(0.6) scaleY(-1) translateY(3px);
      }
    }

    &__chevron {
      @include flex-initial;
      @include rf(18, 18);
      @include transition(transform);

      .is-open & {
        transform: scaleY(-1);
      }
    }
  }

  &__dropdown {
    @include bg-background;
    position: absolute;
    right: 0;
    top: 100%;
    z-index: 10;
    min-width: 100%;
    border-top-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    box-shadow: 0 5px 10px rgba($black, 0.1);
  }

  ul {
    @include flex-start-center;
    @include flex-col;
    @include padding-y(0.2rem);

    width: 100%;

    li {
      @include flex-initial;

      a {
        @include text-font;
        @include md-down {
          @include padding-y(0.4rem);
          @include padding-x(1.5rem);
        }
        @include lg-up {
          @include padding-y(0.3rem);
          @include padding-x(1.5rem);
        }
        @include hover {
          text-decoration: underline;
        }

        display: inline-block;

        &.is-active,
        &.nuxt-link-exact-active {
          text-decoration: underline;
        }
      }
    }
  }

  &.is-open ul {
    z-index: 99;
  }
}
</style>
