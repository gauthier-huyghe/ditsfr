<template>
  <UiSection :id="content.id">
    <UiContainer classname="block-knowmore" bg-snap="both">
      <UiNarrow v-if="content.title || content.tagline" left="1" right="4">
        <UiTagline
          v-if="content.tagline"
          class="block-knowmore__tagline"
          :text="content.tagline"
        />
        <UiTitle
          v-if="content.title"
          class="block-knowmore__title"
          :title="content.title"
          size="xl"
        />
        <div class="block-knowmore__texts">
          <UiText v-if="content.text1" :text="content.text1" />
          <UiText v-if="content.text2" :text="content.text2" />
        </div>
      </UiNarrow>
      <template v-if="content.bg" #bg>
        <div ref="scrollYParallax" class="block-knowmore__bg__inner">
          <div
            class="block-knowmore__bg__pretitle"
            :style="style1"
            v-text="content.bg.pretitle"
          />
          <div
            class="block-knowmore__bg__title"
            :style="style2"
            v-text="content.bg.title"
          />
          <img
            class="block-knowmore__bg__img"
            :src="content.bg.img"
            alt="Dinner in the sky"
          />
        </div>
      </template>
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
    return {}
  },

  computed: {
    ...mapState('screens', ['scrollY']),
    translateY() {
      return (scrollspeed) => {
        return (
          (((this.$refs.scrollYParallax
            ? getPosition(this.$refs.scrollYParallax).top +
              getRect(this.$refs.scrollYParallax).height / 2
            : 0) -
            this.scrollY) *
            scrollspeed) /
          200
        )
      }
    },
    style1() {
      return `transform: translateY(${this.translateY(-3)}%);`
    },
    style2() {
      return `transform: translateY(${this.translateY(-12)}%);`
    },
  },

  methods: {},
}
</script>

<style lang="scss">
.block-knowmore {
  position: relative;

  @include md-down {
    @include padding-x(var(--gutter));
  }
  @include lg-up {
    @include padding-y(10rem, 5rem);
  }

  &::before {
    position: absolute;
    inset: 0;
    background-image: url(/img/cloud02.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: left center;
    content: '';
  }

  &__tagline {
    @include text-primary;
    margin-bottom: 2rem;
  }

  &__title {
    @include lg-up {
    }
  }

  &__texts {
    @include flex-start-start;
    gap: 5rem;

    @include md-down {
      @include flex-col;
    }
    @include lg-up {
      .ui-text {
        width: calc(50% - 2.5rem);
      }
    }
  }

  &__bg {
    &__inner {
      @include flex-start-end;
      @include flex-col;
      @include font-bold;
      color: #e2e8f8;
      letter-spacing: -0.7em;
      padding-top: 1rem;

      @include lg-up {
      }
    }

    &__pretitle {
      @include rf(70, 196);
      line-height: 0.9;
      margin-right: 2em;
      margin-bottom: 2rem;
    }
    &__title {
      @include rf(200, 356);
      line-height: 0.8;
    }
    &__img {
      position: absolute;
      width: 40%;
      bottom: 3rem;
      right: 10%;
      opacity: 0.3;

      @include lg-up {
        max-width: 35rem;
      }
      @include xxl {
        max-width: 55rem;
      }
    }
  }
}
</style>
