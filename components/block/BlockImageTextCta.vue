<template>
  <UiSection :id="content.id">
    <UiContainer
      classname="block-itc"
      :class="{ 'image-left': content.image_left }"
    >
      <UiNarrow left="1" right="1" class="block-itc__narrow">
        <div class="block-itc__texts">
          <UiTagline
            v-if="content.tagline"
            class="block-itc__tagline"
            :text="content.tagline"
          />
          <UiTitle
            v-if="content.title"
            class="block-itc__title"
            :title="content.title"
            size="xl"
          />
          <UiText v-if="content.text" :text="content.text" />
          <div v-if="hasCta || hasLink" class="block-itc__controls">
            <UiBookLink
              v-if="hasCta"
              theme="underline"
              :link="content.cta.url"
              :gtm-data="{
                action: content.cta.gtm.action,
                position: content.cta.gtm.position,
              }"
            >
              <span v-html="content.cta.text" />
              <UiIcon icon="arrow-square" size="xs" />
            </UiBookLink>
            <!-- <UiButton v-if="hasCta" theme="underline" :link="content.cta">
              {{ content.cta.text }}
              <UiIcon icon="arrow-square" size="xs" />
            </UiButton> -->

            <UiLink v-if="hasLink" :link="content.link" theme="underline">
              {{ content.link.text }}
            </UiLink>
          </div>
        </div>
        <div class="block-itc__images">
          <div
            v-if="content.image"
            ref="scrollYParallax"
            class="block-itc__image"
            :style="style"
          >
            <UiImage :src="content.image" :alt="content.title" auto-size />
          </div>
          <div v-if="content.image2" class="block-itc__image2">
            <UiImage :src="content.image2" :alt="content.title" auto-size />
          </div>
        </div>
      </UiNarrow>
    </UiContainer>
  </UiSection>
</template>

<script>
import { mapState } from 'vuex'
import { getRect, getPosition } from '@unanim/helpers'

export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      openImage: 0,
      dataScrollSpeed: -2,
    }
  },

  computed: {
    ...mapState('screens', ['scrollY']),
    translateY() {
      return (
        (((this.$refs.scrollYParallax
          ? getPosition(this.$refs.scrollYParallax).top +
            getRect(this.$refs.scrollYParallax).height / 2
          : 0) -
          this.scrollY) *
          this.dataScrollSpeed) /
        200
      )
    },
    style() {
      return this.dataScrollSpeed
        ? `transform: translateY(${this.translateY}%);`
        : null
    },
    images() {
      return [this.content.menu.image.large]
    },
    hasCta() {
      return (
        this.content.cta &&
        this.content.cta.text &&
        (this.content.cta.route || this.content.cta.url)
      )
    },
    hasLink() {
      return (
        this.content.link &&
        this.content.link.text &&
        (this.content.link.route || this.content.link.url)
      )
    },
  },

  created() {},

  mounted() {},

  methods: {
    handleClose() {
      this.openImage = 0
      document.body.style.removeProperty('overflow')
    },
    handleGallery() {
      this.openImage = 1
    },
  },
}
</script>

<style lang="scss">
.block-itc {
  $e: &;

  @include padding-y(6rem);
  position: relative;

  &::before {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 250%;
    background-image: url(/img/cloud04.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right center;
    content: '';
  }

  &__narrow {
    @include md-down {
      display: grid;
      gap: 6rem;
    }
    @include lg-up {
      @include flex-start-start;
      gap: 8rem;
    }
  }

  &__texts {
    @include flex-initial;
    padding-top: 4rem;

    @include md-down {
      width: 100%;
      padding: 0 var(--gutter);
      order: 0;
    }
    @include lg-up {
      width: calc(columns(7, 12) - 4rem);
    }
  }

  &__tagline {
    @include text-primary;
    margin-bottom: 2rem;
  }

  &__title {
    @include lg-up {
    }
  }

  &__images {
    @include flex-initial;
    @include flex-center-center;
    @include flex-col;
    position: relative;

    @include md-down {
      width: calc(100% - var(--gutter) * 2);
      margin: 0 var(--gutter);
    }
    @include lg-up {
      width: calc(columns(5, 12) - 4rem);
    }
  }

  &__image {
    width: 100%;
    // padding: 4rem 2rem;
    border-top-right-radius: 8rem;
    border-bottom-left-radius: 8rem;
    background: $background;
    box-shadow: 0px 14px 74px -11px rgba(0, 12, 56, 0.1);

    .ui-image.auto-size {
      @include aspect-ratio(1, 1);
      width: 100%;
      cursor: pointer;
    }
    .ui-image__container {
      @include flex-center-center;
      background: transparent;
      border-top-right-radius: 8rem;
      border-bottom-left-radius: 8rem;
    }

    #bier &,
    #beer &,
    #biere &,
    #sleep & {
      padding: 0;
      overflow: hidden;

      .ui-image.auto-size {
        margin: 0;
        cursor: default;

        &::before {
          display: none;
        }

        .ui-image__container {
          position: relative;
        }

        img {
          width: 100%;
        }
      }
    }
  }

  &__image2 {
    .ui-image.auto-size {
      width: 20rem;
    }
    .ui-image__container {
      background: transparent;
    }
  }

  &__controls {
    @include sm {
      @include flex-start-start;
      @include flex-col;
    }
    @include flex-start-center;
    gap: 2.5rem;
    padding-top: 4rem;

    .ui-button.underline {
      @include hover {
        color: inherit;
      }
      // &::after {
      //   background: linear-gradient(
      //     to right,
      //     $font 33.3%,
      //     transparent 33.3%,
      //     transparent 66.6%,
      //     $font 66.6%
      //   );
      // }
    }
  }

  &.image-left &__texts {
    order: 1;
  }
}
</style>
