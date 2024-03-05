<template>
  <UiSection :id="content.id">
    <UiContainer classname="block-experience">
      <UiNarrow left="1" right="1" class="block-experience__narrow">
        <div class="block-experience__texts">
          <UiTagline
            v-if="content.tagline"
            class="block-experience__tagline"
            :text="content.tagline"
          />
          <UiTitle
            v-if="content.title"
            class="block-experience__title"
            :title="content.title"
            size="xl"
          />
          <UiText v-if="content.text" :text="content.text" />
        </div>
        <div v-if="content.formulas" class="block-experience__formulas">
          <div
            v-for="(item, index) in content.formulas"
            :key="`formulas-${index}`"
            class="block-experience__formulas__item"
          >
            <h3 class="block-experience__formulas__title" v-html="item.title" />
            <div
              v-if="item.text"
              class="block-experience__formulas__text1"
              v-html="item.text"
            />
            <div
              v-if="item.text2"
              class="block-experience__formulas__text2"
              v-html="item.text2"
            />
            <div
              v-if="item.text3"
              class="block-experience__formulas__text3"
              v-html="item.text3"
            />
            <div class="block-experience__formulas__cta">
              <UiBookLink
                v-if="item.cta"
                theme="underline"
                :link="item.cta.link"
                :gtm-data="{ action: '', position: 'experience' }"
              >
                {{ item.cta.text }}
                <UiIcon icon="arrow-square" size="xs" />
              </UiBookLink>
            </div>
            <div class="block-experience__formulas__image">
              <UiImage
                v-if="item.image"
                :src="item.image"
                :alt="item.title"
                :data-scroll="true"
                :data-scroll-speed="-2"
              />
            </div>
          </div>
        </div>
      </UiNarrow>
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

  data() {
    return {}
  },

  computed: {},

  created() {},

  mounted() {},

  methods: {},
}
</script>

<style lang="scss">
.block-experience {
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
      gap: 4rem;
      padding-left: 2rem;
    }
    @include lg-up {
      @include flex-start-start;
      @include flex-col;
      gap: 4rem;
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

  &__formulas {
    @include flex-start-stretch;
    @include flex-col;
    gap: 5rem;

    &__item {
      display: grid;
      row-gap: 1rem;
      column-gap: 3rem;

      @include sm {
        grid-template-areas:
          'title'
          'text1'
          'text2'
          'text3'
          'cta'
          'image';
      }
      @include md {
        grid-template-columns: auto auto;
        grid-template-areas:
          'title image'
          'text1 image'
          'text2 text3'
          'cta cta';
      }
      @include lg-up {
        grid-template-columns: auto auto auto auto;
        grid-template-rows: min-content auto auto 1fr;

        &:nth-child(even) {
          grid-template-areas:
            'title title image'
            'text1 text1 image'
            'text2 text3 image'
            'cta cta image';
        }
        &:nth-child(odd) {
          grid-template-areas:
            'image title title'
            'image text1 text1'
            'image text2 text3'
            'image cta cta';
        }
      }
    }

    &__title {
      grid-area: title;
      @include rf(30, 35);
      @include font-medium;
      letter-spacing: -0.04em;
      padding-top: 3rem;
      text-transform: uppercase;

      strong {
        @include font-bold;
      }
    }

    &__text1 {
      grid-area: text1;
      @include wysiwyg;
      @include rf(16, 16);
      @include font-light;
      @include margin-y(0, 2rem);

      @include md-down {
      }
      @include lg-up {
        @include padding-x(0, 3rem);
      }
    }
    &__text2 {
      grid-area: text2;
      @include wysiwyg;
      @include rf(16, 16);
      @include font-light;

      @include md-down {
        @include padding-y(0, 3rem);
      }
      @include lg-up {
        @include padding-x(0, 3rem);
      }
    }
    &__text3 {
      grid-area: text3;
      @include wysiwyg;
      @include rf(16, 16);
      @include font-light;
      @include padding-x(0, 3rem);
    }
    &__cta {
      grid-area: cta;
      margin-top: 2rem;
    }
    &__image {
      grid-area: image;

      @include sm {
        width: 100%;
        margin-top: 2rem;
      }
      @include md {
        @include flex-end-start;
        width: 100%;
        margin-bottom: 2rem;
      }
      @include lg-up {
        width: 35rem;
      }

      .ui-image {
        border-top-left-radius: 5rem;
        border-bottom-right-radius: 5rem;

        @include md-down {
          @include aspect-ratio(2, 1);
        }
        @include md {
          width: 35rem;
        }
        @include lg-up {
          @include aspect-ratio(2, 3.3);
        }

        &__container {
          background: transparent;
        }
      }
    }
  }
}
</style>
