<template>
  <div class="menu-links" :class="`menu-links--${theme}`">
    <div
      v-for="(link, key) in items"
      :key="`link-${key}`"
      class="menu-links__item"
    >
      <UiLink :link="link" :theme="theme">
        {{ link.text }}
      </UiLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
    theme: {
      type: String,
      default: 'menu',
    },
  },
}
</script>

<style lang="scss">
.menu-links {
  @include flex-start-center;

  &__item {
    @include flex-initial;
    @include flex-start-center;
  }

  // THEMES

  // &--top-menu {
  //   @include md-down {
  //     @include flex-center-center;
  //   }
  //   @include lg-up {
  //     @include margin-x(auto, 5rem);
  //   }

  //   .menu-links {
  //     &__item {
  //       @include rf(13, 13);

  //       &:not(:last-of-type) {
  //         @include md-down {
  //           @include margin-x(0, 0.5rem);
  //         }
  //         @include lg-up {
  //           @include margin-x(0, 1rem);
  //         }
  //       }
  //     }
  //   }
  // }

  &--main-menu {
    @include md-down {
      @include flex-start-start;
      @include flex-col;
    }
    @include lg-up {
      @include flex-end-start;
      gap: 0rem;
    }

    .menu-links {
      &__item {
        @include md-down {
          @include flex-auto;
          width: 100%;
          border-bottom: 1px solid $border;
        }
        @include lg-up {
          @include flex-initial;
        }
      }
    }
  }

  &--footer-bottom {
    @include md-down {
      @include flex-center-center;
    }

    .menu-links {
      &__item {
        &:not(:first-child) {
          @include sm {
            margin-left: 2rem;
          }
          @include md {
            margin-left: 3rem;
          }
          @include lg-up {
            margin-left: 4rem;
          }
        }
      }
    }
  }
}
</style>
