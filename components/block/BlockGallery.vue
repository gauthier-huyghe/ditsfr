<template>
  <UiSection :id="content.id">
    <UiContainer classname="block-gallery">
      <UiNarrow v-if="content.title || content.tagline" left="1" right="1">
        <UiTagline
          v-if="content.tagline"
          class="block-gallery__tagline"
          :text="content.tagline"
        />
        <UiTitle
          v-if="content.title"
          class="block-gallery__title"
          :title="content.title"
          size="xl"
        />
      </UiNarrow>
      <UiNarrow
        :left="isBaseGallery ? 0.4 : 0"
        :right="isBaseGallery ? 0.4 : 0"
      >
        <div
          class="block-gallery__list"
          :class="{ 'is-basegallery': isBaseGallery }"
        >
          <div
            v-for="(item, imageIndex) in galleryReturn"
            :key="`gallery-${imageIndex}`"
            class="block-gallery__list__item"
            :class="`is-${item.type}`"
          >
            <UiImage
              v-if="item.type === 'photo'"
              class="block-gallery__image"
              :src="`/img/gallery/thumbs/${item.src}`"
              :alt="`Dits - ${imageIndex}`"
              :data-scroll="true"
              :data-scroll-speed="-2"
              @click.native="index = imageIndex"
            />
            <UiVideo
              v-else
              :id="`video-id-${item.src}`"
              class="block-gallery__video"
              :video-type="item.type"
              :video-id="item.src"
            />
          </div>
        </div>
      </UiNarrow>
    </UiContainer>
    <portal to="rootgallery">
      <VueGallery
        :id="`slice-gallery-${_uid}`"
        :images="images"
        :index="index"
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

export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      index: 0,
    }
  },

  computed: {
    ...mapState('common', ['globals']),
    isBaseGallery() {
      return (
        this.content.galleryKey === undefined || this.content.galleryKey === ''
      )
    },
    galleryReturn() {
      return this.globals[this.content.galleryKey || 'gallery']
    },
    images() {
      return this.galleryReturn
        ? this.galleryReturn.map((item, index) => ({
            id: index,
            href: `/img/gallery/${item.src}`,
          }))
        : []
    },
  },

  methods: {
    handleClose() {
      this.index = 0
      document.body.style.removeProperty('overflow')
    },
  },
}
</script>

<style lang="scss">
.block-gallery {
  $e: &;

  #dits_2_0 + div > & {
    margin-top: calc(0px - #{var(--blocks-gap)});

    @include lg-up {
      padding-top: 2rem;
    }
  }

  @include lg-up {
    @include padding-y(5rem);
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
    // grid-auto-rows: 1fr;
    // grid-auto-rows: 1fr;

    @include sm {
      gap: 1.5rem;
      padding-left: 2rem;
    }
    @include md-up {
      gap: 2rem;
      padding-left: 2rem;
    }

    &:not(.is-basegallery) &__item {
      &.is-photo {
        --columns-sm: 6;
        --columns-md: 6;
        --columns-lg: 3;
        --rows-lg: 1;

        &:nth-child(13n + 5),
        &:nth-child(13n + 6),
        &:nth-child(13n + 7) {
          --columns-lg: 4;
        }
        &:nth-child(13n + 8),
        &:nth-child(13n + 9) {
          --columns-lg: 6;
          --rows-lg: 2;
        }
      }

      @include sm {
        grid-column: span var(--columns-sm);
      }
      @include md {
        grid-column: span var(--columns-md);
      }
      @include lg-up {
        grid-column: span var(--columns-lg);
        grid-row: span var(--rows-lg);
      }
    }

    &.is-basegallery &__item {
      &.is-photo {
        --columns-sm: 6;
        --columns-md: 6;
        --columns-lg: 3;
        --rows-lg: 1;

        &:nth-child(4),
        &:nth-child(5),
        &:nth-child(6),
        &:nth-child(25),
        &:nth-child(26),
        &:nth-child(27) {
          --columns-sm: 4;
        }
        &:nth-child(4),
        &:nth-child(5),
        &:nth-child(6),
        &:nth-child(10),
        &:nth-child(11),
        &:nth-child(12),
        &:nth-child(15),
        &:nth-child(16),
        &:nth-child(25),
        &:nth-child(26),
        &:nth-child(27) {
          --columns-md: 4;
        }

        &:nth-child(4),
        &:nth-child(5),
        &:nth-child(6),
        &:nth-child(15),
        &:nth-child(16),
        &:nth-child(17) {
          --columns-lg: 4;
        }
        &:nth-child(21) {
          @include aspect-ratio(1.2, 1);
        }
      }
      &.is-youtube,
      &.is-vimeo,
      &.is-facebook {
        --columns-sm: 12;
        --columns-md: 12;
        --columns-lg: 9;
        --rows-lg: 2;

        + #{$e}__list__item.is-photo,
        + #{$e}__list__item.is-photo + #{$e}__list__item.is-photo {
          .ui-image {
            @include aspect-ratio(1.2, 1);

            // &::before {
            //   display: none;
            // }
            // &__container {
            //   position: relative;
            // }
          }
        }
      }

      @include sm {
        grid-column: span var(--columns-sm);
      }
      @include md {
        grid-column: span var(--columns-md);
      }
      @include lg-up {
        grid-column: span var(--columns-lg);
        grid-row: span var(--rows-lg);
      }
    }
  }

  &__image.ui-image {
    @include aspect-ratio(1, 1);
    width: 100%;
    overflow: hidden;

    @include sm {
      border-top-left-radius: 3rem;
      border-bottom-right-radius: 3rem;
    }
    @include md-up {
      border-top-left-radius: 5rem;
      border-bottom-right-radius: 5rem;
    }

    .ui-image__container {
    }
  }
}
</style>
