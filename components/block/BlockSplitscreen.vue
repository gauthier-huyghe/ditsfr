<template>
  <UiSection :id="content.id">
    <UiContainer classname="block-splitscreen">
      <div class="block-splitscreen__splits">
        <div
          v-for="(item, key) in content.list"
          :key="`item-${key}`"
          class="block-splitscreen__split"
        >
          <UiImage
            class="block-splitscreen__image"
            :src="item.img"
            :alt="item.title"
            :data-scroll="false"
            :data-scroll-speed="-2"
          />
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
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },

  data: () => ({}),

  computed: {},
}
</script>

<style lang="scss">
.block-splitscreen {
  position: relative;

  &__splits {
    overflow: hidden;

    @include md-down {
      @include flex-col;
      border-bottom-right-radius: 4rem;
    }
    @include lg-up {
      @include flex-center-center;
      height: calc(100svh - 8rem - 5rem);
      gap: 0rem;
      border-bottom-right-radius: 6rem;
    }
  }

  &__split {
    @include md-down {
      @include flex-end-stretch;
      @include flex-col;
      position: relative;
      width: 100%;
      height: 36rem;
      overflow: hidden;
    }
    @include lg-up {
      @include flex-end-start;
      @include flex-col;
      position: relative;
      width: columns(1, 3);
      height: 100%;
      overflow: hidden;
      transition: width 1s $ease-in-out-circ;

      @include hover {
        width: columns(4, 5);
      }
    }
  }

  &__image {
    @include fit;
    z-index: 0;
  }

  &__texts {
    position: relative;
    z-index: 1;
    margin: 2.5rem;
    padding: 2.5rem;
    border-top-left-radius: 4rem;
    border-bottom-right-radius: 4rem;

    @include lg-up {
      @include flex-between-start;
      @include flex-col;
      @include rf(20, 30);
      min-width: 12em;
      min-height: 11em;
      background: rgba($white, 0.3);
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
