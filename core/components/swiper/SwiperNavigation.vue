<template>
  <div
    class="swiper-nav"
    :class="[classname, '' + theme ? `swiper-nav--${theme}` : '']"
  >
    <UiIconButton
      icon="chevron-left"
      class="swiper-nav__button swiper-nav__prev"
      size="button"
      :class="`${classname}__prev`"
      label="précédent"
    />
    <div
      v-if="showScrollbar"
      slot="scrollbar"
      class="swiper-scrollbar swiper-nav__scrollbar"
      :class="`${classname}__scrollbar`"
    />
    <UiIconButton
      icon="chevron-right"
      size="button"
      class="swiper-nav__button swiper-nav__next"
      :class="`${classname}__next`"
      label="suivant"
    />
  </div>
</template>

<script>
export default {
  props: {
    classname: {
      type: String,
      required: true,
    },
    showScrollbar: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: '',
    },
  },
  computed: {},
}
</script>

<style lang="scss">
.swiper-nav {
  $e: &;
  @include flex-start-center;

  gap: 0.5rem;

  &__button.ui-icon-button {
    @include flex-center-center;
    position: absolute;
    border: 1px solid var(--color-font);
    padding: 1rem;
    border-radius: 4rem;

    @include md-down {
      @include size(4rem);
    }
    @include lg-up {
      @include size(4vw);
    }
    @include xxl {
      @include size(8rem);
    }

    .ui-icon {
      @include flex-initial;
      --icon-size: 2rem;
    }

    &:hover {
      color: var(--color-font);
      border-color: $foreground;
    }
  }
  &__prev {
    top: 40%;
    left: 0;
  }
  &__next {
    top: 55%;
    right: 0;
  }

  &__scrollbar {
    position: absolute;
    left: 50%;
    top: 48%;
    width: calc(100% - 16rem);
    height: 1px;
    transform: translate(-50%);
    background: rgba($font, 0.1);

    @include xxl {
      width: calc(100% - 22rem);
    }

    .swiper-scrollbar-drag {
      height: 2.1rem;
      top: -1rem;
      background: none;
      cursor: pointer;

      &::before {
        @include center-abs(vertical);
        width: 100%;
        height: 1px;
        left: 0;
        content: '';
        background: var(--color-font);
      }
    }
  }

  // °_°_°_°_°_°
  // THEMES
  // °_°_°_°_°_°

  &--chefs {
    position: absolute;
    bottom: 4rem;
    left: 50%;
    transform: translate(-50%);

    @include sm {
      width: 80%;
    }
    @include md-up {
      width: 50%;
    }

    #{$e}__prev,
    #{$e}__next {
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>
