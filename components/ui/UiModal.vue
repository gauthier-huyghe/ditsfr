<template>
  <portal to="root">
    <!-- <transition leave-active-class="animated fadeOut"> -->
    <div v-show="value" :class="customClasses">
      <!-- <transition
          enter-active-class="animated fadeIn delay-animation-100"
          leave-active-class="animated fadeOut delay-animation-600"
        > -->
      <div
        v-show="value"
        class="ui-modal__overlay"
        @click="$emit('input', false)"
      ></div>
      <!-- </transition> -->

      <div class="ui-modal__wrapper" :class="{ full }">
        <!-- <transition
            v-if="!full"
            enter-active-class="animated fadeInDown delay-animation-500"
            leave-active-class="animated fadeOutUp delay-animation-500"
          > -->
        <div v-show="value" class="ui-modal__inner">
          <div class="ui-modal__content">
            <UiHeading
              v-if="title"
              class="ui-modal__title"
              theme="main-subtitle"
              tag="h4"
              :title="title"
            />
            <slot />
          </div>
        </div>
        <!-- </transition> -->

        <!-- <div v-else>
            <slot />
          </div> -->

        <!-- <transition
            enter-active-class="animated fadeIn delay-animation-1000"
            leave-active-class="animated fadeOut"
          > -->
        <button
          v-show="value"
          class="ui-modal__close"
          @click="$emit('input', false)"
        >
          {{ $t('close') }}
          <UiIcon
            v-show="value"
            class="ui-modal__close__icon"
            icon="close"
            size="md"
          />
        </button>
        <!-- </transition> -->
      </div>
    </div>
    <!-- </transition> -->
  </portal>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      default: '',
    },
    theme: {
      type: String,
      default: 'default',
    },
    full: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    customClasses() {
      return ['ui-modal', `ui-modal--${this.theme}`]
    },
  },
}
</script>

<style lang="scss">
.ui-modal {
  position: fixed;
  inset: 0;
  z-index: 999;

  // Wrapper

  &__wrapper {
    @include bg-background;

    margin: 0 auto;
    position: absolute;
    top: 50%;
    left: 3rem;
    right: 3rem;
    transform: translateY(-50%);
    max-width: $grid-width;

    @include md-down {
      left: 1.5rem;
      right: 1.5rem;
    }
    @include lg-up {
      left: 3rem;
      right: 3rem;
    }

    &.full {
      overflow: auto;
      max-height: 90vh;
    }
  }

  // INNER

  &__inner {
    @include md-down {
      padding: 6rem 1rem 2rem 1rem;
    }
    @include lg-up {
      padding: 10rem columns(1);
    }
  }

  // CONTENT

  &__content {
    max-height: calc(100vh - 26rem);
    overflow-y: auto;
  }

  // Overlay

  &__overlay {
    @include bg-background;
    position: absolute;
    inset: 0;
    z-index: 0;
    cursor: pointer;
  }

  // Close button

  &__close {
    @include font-medium;
    @include rf(13, 13);
    text-transform: uppercase;

    position: absolute;
    display: flex;
    align-items: center;
    z-index: 1;

    @include md-down {
      top: 1rem;
      right: 1rem;
    }
    @include lg-up {
      top: 3rem;
      right: 3rem;
    }

    &__icon {
      margin-left: 1.5rem;
      transition: transform 0.3s $ease-in-out-expo;
    }

    &:hover &__icon {
      transform: rotate(180deg);
    }
  }

  &__title {
    margin-bottom: 4.5rem;
  }

  // Theme

  &--tiny {
    color: var(--color-font-alt);

    .ui-modal {
      &__close {
        top: 2rem;
        right: 2rem;
        color: transparent;

        .ui-icon {
          color: var(--color-font-alt);
        }
      }
      &__overlay {
        background: $background;
        opacity: 0.8;
      }
      &__wrapper {
        max-width: 43rem;
        background: none;
      }
      &__inner {
        background-color: var(--color-primary);
        border-radius: 2rem;

        @include md-down {
          padding: 5rem 2rem 2rem 2rem;
          box-shadow: 0px 12px 48px -7px rgba(31, 34, 79, 0.2);
        }
        @include lg-up {
          padding: 4rem;
          box-shadow: 0px 42px 48px -37px rgba(31, 34, 79, 0.2);
        }
      }
    }
  }

  &--nopadding {
    .ui-modal__inner {
      padding: 0;
    }
  }

  &--fullsize {
    @include padding(0);
    width: 100vw;

    .ui-modal {
      &__overlay {
        background: rgba($foreground, 0.5);
      }
      &__wrapper {
        background: none;
        max-width: 250rem;
      }
      &__inner {
        background: $foreground;
        width: 100%;
        max-width: 100%;

        @include md-down {
          padding: 3rem;
        }
        @include lg-up {
          padding: 5rem;
        }
      }
      &__content {
        @include flex-start-stretch;
        border-radius: 0;
        min-height: calc(100vh - 15rem);
        background: none;

        .pdf-viewer {
          @include flex-auto;
          @include flex-start-stretch;
          width: 100%;

          embed {
            @include flex-auto;
            width: 100%;
          }
        }
      }
      &__close {
        @include md-down {
          top: 0.7rem;
          right: 0.7rem;
        }
        @include lg-up {
          top: 1.5rem;
          right: 1.5rem;
        }
      }
    }
  }
}
</style>
