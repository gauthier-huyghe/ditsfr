<template>
  <UiSection :id="content.id">
    <UiContainer classname="block-partners">
      <UiNarrow v-if="content.title || content.tagline" left="7" right="1">
        <UiTagline
          v-if="content.tagline"
          class="block-partners__tagline"
          :text="content.tagline"
        />
        <UiTitle
          v-if="content.title"
          class="block-partners__title"
          :title="content.title"
          size="xl"
        />
      </UiNarrow>
      <UiNarrow left="0.4" right="0.4">
        <div class="block-partners__list">
          <div
            v-for="(item, imageIndex) in partners"
            :key="`gallery-${imageIndex}`"
            class="block-partners__list__item"
            :class="`is-${item.type}`"
          >
            <a
              :href="item.url"
              target="_blank"
              class="block-partners__list__link"
            >
              <UiImage
                class="block-partners__image"
                :src="`/img/partners/${item.img}`"
                alt=""
              />
            </a>
          </div>
        </div>
      </UiNarrow>
    </UiContainer>
  </UiSection>
</template>

<script>
import { mapGetters } from 'vuex'

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
    ...mapGetters('common', ['partners']),
  },

  methods: {},
}
</script>

<style lang="scss">
.block-partners {
  @include md-down {
    padding-left: 2rem;
  }
  @include lg-up {
    @include padding-y(5rem, 10rem);
  }

  &__tagline {
    @include text-primary;
    margin-bottom: 2rem;
  }

  &__title {
    @include lg-up {
    }
  }

  &__list {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 2rem;

    &__item {
      --columns-sm: 6;
      --columns-md: 4;
      --columns-lg: 2;

      // // FIRST 8 BIGGER
      // // LARGE
      // &:nth-child(1),
      // &:nth-child(2),
      // &:nth-child(3),
      // &:nth-child(4),
      // &:nth-child(5),
      // &:nth-child(6),
      // &:nth-child(7),
      // &:nth-child(8) {
      //   --columns-lg: 3;
      // }
      // &:nth-child(4n + 1) {
      //   transform: translateY(6rem);
      // }
      // &:nth-child(4n + 3) {
      //   transform: translateY(6rem);
      // }
      // &:nth-child(4n + 4) {
      //   transform: translateY(8rem);
      // }

      // // small
      // &:nth-child(6n + 9) {
      //   transform: translateY(8rem);
      // }
      // &:nth-child(6n + 10) {
      //   transform: translateY(6rem);
      // }
      // &:nth-child(6n + 11) {
      //   transform: translateY(0rem);
      // }
      // &:nth-child(6n + 12) {
      //   transform: translateY(6rem);
      // }
      // &:nth-child(6n + 13) {
      //   transform: translateY(12rem);
      // }
      // &:nth-child(6n + 14) {
      //   transform: translateY(8rem);
      // }

      @include sm {
        grid-column: span var(--columns-sm);
      }
      @include md {
        grid-column: span var(--columns-md);
      }
      @include lg-up {
        grid-column: span var(--columns-lg);

        &:nth-child(6n + 1) {
          transform: translateY(8rem);
        }
        &:nth-child(6n + 2) {
          transform: translateY(6rem);
        }
        &:nth-child(6n + 3) {
          transform: translateY(0rem);
        }
        &:nth-child(6n + 4) {
          transform: translateY(6rem);
        }
        &:nth-child(6n + 5) {
          transform: translateY(12rem);
        }
        &:nth-child(6n + 6) {
          transform: translateY(8rem);
        }
      }
    }

    &__link {
      display: block;
      padding: 1.5rem;
      // background: $background;
      background: rgba(darken($primary, 10%), 0.7);
      border-top-left-radius: 5rem;
      border-bottom-right-radius: 5rem;
      overflow: hidden;
    }
  }

  &__image.ui-image {
    @include aspect-ratio(1.5, 1);
    width: 100%;

    .ui-image__container {
      background: none;

      img {
        object-fit: contain;
        // mix-blend-mode: difference;
      }
    }
  }
}
</style>
