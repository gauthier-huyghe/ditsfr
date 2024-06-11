<template>
  <UiSection :id="content.id">
    <UiContainer classname="block-splitscreen">
      <UiImage
        class="block-splitscreen__image"
        :src="
          device === 'mobile' ? content.bg_img.mobile : content.bg_img.desktop
        "
        alt="background"
        :data-scroll="false"
        :data-scroll-speed="-2"
      />
      <div class="block-splitscreen__splits">
        <div
          v-for="(item, key) in content.list"
          :key="`item-${key}`"
          class="block-splitscreen__split"
        >
          <div class="block-splitscreen__texts">
            <UiTitle
              v-if="item.title"
              class="block-splitscreen__title"
              :title="item.title"
              size="xl"
            />
            <UiTitle
              v-if="item.subtitle"
              class="block-splitscreen__subtitle"
              :title="item.subtitle"
              size="default"
            />
            <UiText v-if="item.text" :text="content.text" />
            <UiButton
              v-if="item.link.url || item.link.route"
              icon="chevron-outline-right"
              icon-color="white"
              theme="bigwhite"
              :is-real-link="true"
              :link="item.link"
            >
              {{ item.link.text }}
            </UiButton>
            <div
              v-else
              class="block-splitscreen__infos"
              v-html="item.link.text"
            />
          </div>
        </div>
      </div>
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

  data: () => ({}),

  computed: {
    ...mapGetters('screens', ['device']),
  },
}
</script>

<style lang="scss">
.block-splitscreen {
  position: relative;

  &__image {
    @include fit;
    z-index: 0;

    .ui-image__container {
      margin-top: calc(-80px);
      height: calc(100% + 80px);

      img {
        object-position: center top;
      }
    }
  }

  &__splits {
    overflow: hidden;

    @include sm {
      @include flex-start-start;
      @include flex-col;
      gap: 3rem;
      padding: 80vw 0 3rem 0;
      border-bottom-right-radius: 4rem;
    }
    @include md-up {
      @include flex-center-center;
      height: calc(100svh - 8rem - 5rem);
      gap: 0rem;
      border-bottom-right-radius: 6rem;
    }
  }

  &__split {
    @include sm {
      @include flex-end-stretch;
      @include flex-col;
      position: relative;
      width: 100%;
      overflow: hidden;
    }
    @include md-up {
      @include flex-end-start;
      @include flex-col;
      position: relative;
      width: columns(1, 3);
      height: 100%;
      overflow: hidden;
    }
  }

  &__texts {
    position: relative;
    z-index: 1;
    padding: 2.5rem;
    border-top-left-radius: 4rem;
    border-bottom-right-radius: 4rem;
    background: rgba($white, 0.3);

    @include md-down {
      margin: 0 2.5rem;
    }
    @include lg-up {
      @include flex-between-start;
      @include flex-col;
      @include rf(20, 30);
      margin: 2.5rem;
      min-width: 12em;
      min-height: 11em;
    }
  }

  &__tagline {
    @include text-primary;
    margin-bottom: 2rem;
  }

  &__title {
    @include lg-up {
      margin-left: -0.08em;
    }
  }

  &__infos {
    @include rf(20, 30);
  }
}
</style>
