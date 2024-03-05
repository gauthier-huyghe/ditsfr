<template>
  <div :class="customClasses">
    <div
      v-if="lazy"
      v-lazy-container="vlazy"
      class="ui-image__container"
      :style="styleImage"
    >
      <img :data-src="src" :alt="alt" @load="$emit('load')" />
    </div>
    <div v-else class="ui-image__container" :style="styleImage">
      <img :src="src" :alt="alt" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { getRect, getPosition } from '@unanim/helpers'
import Error from '@/assets/images/error.png'
import Loading from '@/assets/images/loading.svg'

export default {
  name: 'UiImage',
  props: {
    src: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: false,
      default: null,
    },
    hasHover: {
      type: Boolean,
      default: false,
    },
    hasGradient: {
      type: Boolean,
      default: false,
    },
    noBackground: {
      type: Boolean,
      default: false,
    },
    autoSize: {
      type: Boolean,
      default: false,
    },
    lazy: {
      type: Boolean,
      default: true,
    },
    dataScroll: {
      type: [Boolean, String],
      default: false,
    },
    dataScrollSpeed: {
      type: [String, Number],
      default: 0,
    },
  },
  data: () => ({
    loading: Loading,
    error: Error,
  }),
  computed: {
    ...mapState('screens', ['scrollY']),
    vlazy() {
      return {
        selector: 'img',
        error: this.error,
        loading: this.loading,
      }
    },
    customClasses() {
      return [
        'ui-image',
        {
          'has-hover': this.hasHover,
          'has-gradient': this.hasGradient,
          'no-background': this.noBackground,
          'auto-size': this.autoSize,
          'has-datascroll': this.dataScroll,
        },
      ]
    },
    translateYImage() {
      return this.dataScroll
        ? (((this.$el
            ? getPosition(this.$el).top + getRect(this.$el).height / 2
            : 0) -
            this.scrollY) *
            this.dataScrollSpeed) /
            200
        : 0
    },
    imageHeight() {
      return 100 - (100 * this.dataScrollSpeed) / 10
    },
    styleImage() {
      return this.dataScroll
        ? `transform: translateY(${this.translateYImage}%);height:${this.imageHeight}%;`
        : null
    },
  },
}
</script>

<style lang="scss">
.ui-image {
  @include transition(opacity, 100ms);

  overflow: hidden;
  width: 100%;
  height: 100%;

  &.has-hover {
    @include lg-up {
      @include hover {
        .ui-image__container {
          transform: scale(0.9);
        }
        img {
          transform: scale(1.25);
        }
      }
    }
  }

  &.has-gradient &__container {
    position: relative;

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      z-index: 1;
      background-image: linear-gradient(
        to bottom,
        rgba(#0c1133, 0),
        rgba(#0c1133, 0.75)
      );
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 0.7s ease-in;

    &[lazy='error'],
    &[lazy='loading'] {
      object-fit: none;
      // transform: scale(0.6);
      opacity: 0;
    }
  }

  &.has-datascroll {
    .ui-image__container {
      height: 110%;
      transition: none;
    }
  }

  &__container {
    @include transition(transform);
    transform-origin: center;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: rgba($primary, 0.1);

    .no-background & {
      background: none;
    }
  }

  &.auto-size {
    @include size(auto);

    .ui-image__container,
    img {
      @include size(auto);
    }
  }
}
</style>
