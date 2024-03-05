<template>
  <component
    :is="tag"
    :id="`${classname}_${_uid}`"
    class="ui-container"
    :class="[classname, cancelGap && `ui-container--cancel-${cancelGap}`]"
  >
    <div
      class="ui-container__inner"
      :class="[`${classname}__inner`, { padded, fullheight, fullwidth }]"
    >
      <div class="ui-container__content" :class="`${classname}__content`">
        <slot />
      </div>
    </div>
    <div
      :class="[
        `${classname}__bg`,
        bgSnap && `ui-container__bg--snap-${bgSnap}`,
        overlap && `ui-container__bg--over-${overlap}`,
      ]"
      class="ui-container__bg"
    >
      <slot name="bg" />
    </div>
  </component>
</template>

<script>
export default {
  props: {
    classname: {
      type: String,
      default: 'ui-container',
    },
    tag: {
      type: String,
      default: 'section',
    },
    padded: {
      type: Boolean,
      default: false,
    },
    fullheight: {
      type: Boolean,
      default: false,
    },
    fullwidth: {
      type: Boolean,
      default: false,
    },
    bgSnap: {
      type: String,
      default: '',
    },
    overlap: {
      type: String,
      default: '',
    },
    cancelGap: {
      type: String,
      default: '',
    },
  },
  methods: {},
}
</script>

<style lang="scss">
// stylelint-disable length-zero-no-unit
.ui-container {
  --pad: 0rem;

  width: 100%;
  position: relative;

  &__inner {
    position: relative;
    width: 100%;
    max-width: $page-max;
    margin: 0 auto;
    padding: var(--pad) var(--gutter);

    &.padded {
      @include lg-up {
        --pad: 7rem;
      }

      --pad: 3rem;
    }
    &.fullwidth {
      @include lg-up {
        --gutter: 4rem;
      }
    }
    &.fullheight {
      min-height: calc(100vh - var(--header-margin));
    }
  }

  &__content {
    width: 100%;
  }

  &__bg {
    --offset: var(--gutter);
    z-index: -1;
    position: absolute;
    inset: 0 var(--offset);
    overflow: hidden;

    @include page-max {
      inset: 0 calc((100vw - #{$page-max}) / 2 + var(--offset));
    }

    &--snap-right {
      right: 0;
    }
    &--snap-left {
      left: 0;
    }
    &--snap-both {
      left: 0;
      right: 0;
    }

    &--over-bottom {
      bottom: var(--overlap-offset);
    }
    &--over-top {
      top: var(--overlap-offset);
    }
    &--over-both {
      bottom: var(--overlap-offset);
      top: var(--overlap-offset);
    }
  }

  &--cancel-bottom {
    margin-bottom: calc(-1 * var(--blocks-gap));
  }
  &--cancel-top {
    margin-top: calc(-1 * var(--blocks-gap));
  }
  &--cancel-both {
    margin-top: calc(-1 * var(--blocks-gap));
    margin-bottom: calc(-1 * var(--blocks-gap));
  }
}
</style>
