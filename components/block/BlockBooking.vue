<template>
  <UiSection :id="content.id">
    <UiContainer classname="block-booking">
      <UiNarrow left="0.4" right="0.4" class="block-booking__narrow">
        <div class="block-booking__container">
          <div class="block-booking__texts">
            <UiTagline
              v-if="content.tagline"
              class="block-booking__tagline"
              :text="content.tagline"
            />
            <UiTitle
              v-if="content.title"
              class="block-booking__title"
              :title="content.title"
              size="xl"
            />
            <UiText v-if="content.text" :text="content.text" />

            <UiThankYou
              v-if="status === 'sent'"
              :title="$t('booking_thanks_title')"
              :text="$t('booking_thanks_text')"
            />
            <FormBooking v-else v-model="status" :value="content" />
          </div>
          <div class="block-booking__image">
            <UiImage
              :src="content.image"
              :alt="content.title"
              :data-scroll="true"
              :data-scroll-speed="-2"
            />
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
    return {
      status: '',
    }
  },
}
</script>

<style lang="scss">
.block-booking {
  $e: &;
  position: relative;

  &__narrow {
  }

  &__container {
    width: 100%;
    // gap: 4rem;
    background: var(--color-primary);
    border-top-right-radius: 5rem;
    border-bottom-left-radius: 5rem;
    --color-font: var(--color-font-alt);

    @include md-down {
      @include flex-start-stretch;
      @include flex-col;
    }
    @include lg-up {
      @include flex-start-stretch;
      @include flex-row;
    }
  }

  &__texts {
    @include flex-initial;
    @include flex-start-stretch;
    @include flex-col;

    @include sm {
      width: 100%;
      padding: 4rem 3rem;
      order: 0;
    }
    @include md {
      width: 100%;
      padding: 4rem 6rem;
      order: 0;
    }
    @include lg-up {
      width: calc(columns(7, 12) + 2rem);
      padding: 5rem 6rem;
    }
    @include xxl {
      padding: 8rem 10rem;
    }
  }

  &__tagline {
    margin-bottom: 1.8rem;
    color: var(--color-font);
  }

  &__title {
    @include lg-up {
      &.ui-title.xl {
        margin-bottom: 0.7rem;
        margin-left: -0.05em;
      }
    }
  }

  &__image {
    @include flex-initial;
    @include flex-start-stretch;
    position: relative;
    overflow: hidden;

    @include md-down {
      width: 100%;
      border-bottom-left-radius: 5rem;
    }
    @include lg-up {
      width: calc(columns(5, 12) - 2rem);
      border-top-right-radius: 5rem;
    }

    .ui-image {
      overflow: hidden;

      @include md-down {
        border-bottom-left-radius: 5rem;
      }
      @include lg-up {
        border-top-right-radius: 5rem;
      }
    }

    .ui-image,
    .ui-image__container {
      @include md-down {
        height: 30rem;

        img {
          object-fit: cover;
        }
      }
      @include lg-up {
        @include flex-start-stretch;
        height: auto;

        img {
          height: auto;
        }
      }
    }
  }
}
</style>
