<template>
  <UiContainer classname="block-media">
    <UiNarrow v-if="content.title || content.tagline" left="3" right="3">
      <UiTagline v-if="content.tagline" :text="content.tagline" />
      <UiTitle v-if="content.title" :title="content.title" />
    </UiNarrow>
    <UiNarrow left="2" right="1">
      <div class="block-media__list">
        <div
          v-for="(image, i) in content.images"
          :key="i"
          class="block-media__slide"
        >
          <UiImage
            class="block-media__image"
            size="gallery"
            :src="image.thumbnail"
            :alt="image.alt"
            rounded
          />
        </div>
      </div>
    </UiNarrow>
  </UiContainer>
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      index: null,
      options: {
        spaceBetween: 20,
        slidesPerView: 1.2,
        watchOverflow: true,
        breakpoints: {
          768: {
            slidesPerView: 2.2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
        },
        navigation: {
          nextEl: `.block-media-${this._uid}__next`,
          prevEl: `.block-media-${this._uid}__prev`,
        },
      },
    }
  },

  computed: {
    images() {
      return this.content.images.map((item, index) => ({
        id: index,
        href: item.image,
        description: item.alt,
      }))
    },
  },

  methods: {
    handleClose() {
      this.index = null
    },
  },
}
</script>

<style lang="scss">
.block-media {
  @include lg-up {
    overflow: hidden;
  }

  &__swiper {
    overflow: visible !important;
  }

  &__slide {
    display: flex;
  }

  &__button {
    padding: 0;
    flex: 1;
  }
}
</style>
