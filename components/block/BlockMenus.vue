<template>
  <UiSection :id="content.id">
    <UiContainer classname="block-menu">
      <UiNarrow left="1" right="1" class="block-menu__narrow">
        <div class="block-menu__texts">
          <UiTagline
            v-if="content.tagline"
            class="block-menu__tagline"
            :text="content.tagline"
          />
          <UiTitle
            v-if="content.title"
            class="block-menu__title"
            :title="content.title"
            size="xl"
          />
          <UiText v-if="content.text" :text="content.text" />
        </div>
        <div
          v-if="content.menu"
          ref="scrollYParallax"
          class="block-menu__menu"
          :style="style"
        >
          <h3 v-html="content.menu.title" />
          <p v-html="content.menu.text" />
          <UiImage
            v-if="content.menu.image"
            :src="content.menu.image.thumb"
            :alt="content.menu.title"
            auto-size
            @click.native="handleGallery"
          />
        </div>
      </UiNarrow>
    </UiContainer>

    <portal to="rootmenu">
      <VueGallery
        v-if="content.menu && content.menu.image && content.menu.image.large"
        :id="`menu-gallery-${_uid}`"
        :images="images"
        :index="openImage"
        @close="handleClose"
      >
        <UiIcon slot="prev" icon="chevron-left" />
        <UiIcon slot="next" icon="chevron-right" />
        <UiIcon slot="close" icon="close" />
      </VueGallery>
    </portal>
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
.block-menu {
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
      width: calc(columns(5, 12) - 4rem);
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

  &__menu {
    @include flex-initial;
    position: relative;
    padding: 4rem 2rem;
    border-top-right-radius: 8rem;
    border-bottom-left-radius: 8rem;
    background: $background;
    box-shadow: 0px 14px 74px -11px rgba(0, 12, 56, 0.1);

    @include md-down {
      width: calc(100% - var(--gutter) * 2);
      margin: 0 var(--gutter);
    }
    @include lg-up {
      width: calc(columns(7, 12) - 4rem);
    }

    h3 {
      @include rf(20, 22);
      @include font-light;
      @include padding-x(3rem);
      text-transform: uppercase;

      strong {
        @include font-bold;
      }
    }
    p {
      @include rf(16, 16);
      @include font-light;
      @include padding-x(3rem);
    }

    .ui-image.auto-size {
      @include aspect-ratio(170, 81);
      width: 100%;
      margin-top: 2rem;
      cursor: pointer;

      &__container {
        background: transparent;
      }
    }
  }
}
</style>
