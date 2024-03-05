<template>
  <transition
    enter-active-class="animated fadeIn"
    leave-active-class="animated fadeOut"
  >
    <div v-show="show" class="cookies-modal">
      <transition
        enter-active-class="animated fadeIn delay-animation-100"
        leave-active-class="animated fadeOut delay-animation-600"
      >
        <NuxtLink
          v-show="show"
          class="cookies-modal__overlay"
          :to="$cookieManager.closeRoute"
        />
      </transition>

      <div class="cookies-modal__wrapper">
        <transition
          enter-active-class="animated fadeInDown delay-animation-500"
          leave-active-class="animated fadeOutUp delay-animation-500"
        >
          <div v-show="show" class="cookies-modal__inner">
            <div class="cookies-modal__content">
              <slot />
            </div>
          </div>
        </transition>

        <transition
          enter-active-class="animated fadeIn delay-animation-1000"
          leave-active-class="animated fadeOut"
        >
          <NuxtLink
            v-show="show"
            class="cookies-modal__close"
            :to="$cookieManager.closeRoute"
          >
            {{ $t('cookies_modalclose') }}
            <span v-show="show" class="cookies-modal__close__icon">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M16 13.338l-11.314-11.314-2.262 2.262 11.314 11.314-11.314 11.314 2.262 2.262 11.314-11.314 11.314 11.314 2.262-2.262-11.314-11.314 11.314-11.314-2.262-2.262-11.314 11.314z"
                ></path>
              </svg>
            </span>
          </NuxtLink>
        </transition>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.cookies-modal {
  position: fixed;
  inset: 0;
  z-index: 9999;
  overflow-x: hidden;
  overflow-y: scroll;
  transition-duration: 1s;
  background-color: var(--bg);

  @include sm {
    padding: 0;
  }

  // Wrapper

  &__wrapper {
    width: 100%;
  }

  // INNER

  &__inner {
    padding: 0;
  }

  // Overlay

  &__overlay {
    @include bg-background;

    position: fixed;
    inset: 0;
    z-index: -1;
    cursor: pointer;
  }

  // Close button

  &__close {
    @include font-medium;
    @include rf(16, 16);

    text-transform: uppercase;
    position: fixed;
    display: flex;
    align-items: center;
    top: 3rem;
    right: 3rem;
    padding: 0;
    z-index: 3;

    &__icon {
      @include size(2.5rem);

      position: relative;
      display: block;
      margin-left: 2rem;
      opacity: 0.8;
      transition: opacity 0.5s ease-in-out, transform 0.5s $ease-in-out-expo;

      svg {
        @include fit;
      }
    }

    &:hover &__icon {
      opacity: 1;
      transform: rotate(180deg);
    }
  }
}
</style>
