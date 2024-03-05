<template>
  <UiSection :id="content.id">
    <div class="block-chefs">
      <UiContainer classname="block-chefs-container">
        <UiNarrow left="0" right="0" class="block-chefs__narrow">
          <div class="block-chefs__texts">
            <UiTagline
              v-if="content.tagline"
              class="block-chefs__tagline"
              :text="content.tagline"
            />
            <UiTitle
              v-if="content.title"
              class="block-chefs__title"
              :title="content.title"
              size="xl"
            />
            <UiText v-if="content.text" :text="content.text" />
          </div>
        </UiNarrow>
      </UiContainer>
      <div class="block-chefs__list">
        <div
          v-for="(item, itemIndex) in chefsList"
          :key="itemIndex"
          class="block-chefs__list__item"
        >
          <CardChef :datas="item" />
        </div>
      </div>
    </div>
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
    return {
      index: null,
    }
  },

  computed: {
    ...mapGetters('common', ['chefs']),
    chefsList() {
      return this.chefs.filter((i) => i.is_published)
    },
    hasLink() {
      return (
        this.content.book &&
        this.content.book.text &&
        (this.content.book.route || this.content.book.url)
      )
    },
  },
}
</script>

<style lang="scss">
.block-chefs {
  $e: &;
  position: relative;
  padding-bottom: 5rem;
  overflow: hidden;

  &::before {
    position: absolute;
    inset: 0;
    background-image: url(/img/cloud03.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: right center;
    content: '';
  }

  &__narrow {
    display: grid;
    gap: 4rem;

    @include lg-up {
      @include flex-start-end;
      @include flex-col;
    }
  }

  &__texts {
    @include flex-initial;
    margin-bottom: 3rem;
    // width: columns(5.75, 12);

    @include md-down {
      width: 100%;
      padding: 0 var(--gutter);
      order: 1;
    }
    @include lg-up {
      width: calc(columns(7.2, 12) - 0.5rem);
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

  &__controls {
    gap: 2.5rem;
    padding-top: 4rem;

    @include sm {
      @include flex-start-start;
      @include flex-col;
    }
    @include lg-up {
      @include flex-start-center;
    }
  }

  &__list {
    @include flex-auto;
    position: relative;
    width: 100%;
    display: grid;
    column-gap: 2rem;
    row-gap: 3rem;

    @include sm {
      grid-template-columns: repeat(2, 1fr);
      padding: 2rem 2rem 2rem 4rem;
    }
    @include md {
      grid-template-columns: repeat(3, 1fr);
      padding: 3rem 6rem 3rem 8rem;
    }
    @include lg-up {
      grid-template-columns: repeat(5, 1fr);
      padding: 0 var(--gutter) 8rem var(--gutter);
    }
    @include xxl {
      grid-template-columns: repeat(7, 1fr);
      max-width: $page-max;
      padding: 2rem 6rem 8rem 6rem;
      margin: 6rem auto;
    }

    &__item {
      grid-column: span 1;

      @include sm {
        &:nth-child(2n - 1) {
          transform: translateY(0);
        }
        &:nth-child(2n) {
          transform: translateY(3rem);
        }
      }
      @include md {
        &:nth-child(3n - 2) {
          transform: translateY(3rem);
        }
        &:nth-child(3n - 1) {
          transform: translateY(0);
        }
        &:nth-child(3n) {
          transform: translateY(6rem);
        }
      }
      @include lg-up {
        &:nth-child(5n - 4) {
          transform: translateY(4rem);
        }
        &:nth-child(5n - 3) {
          transform: translateY(8rem);
        }
        &:nth-child(5n - 2) {
          transform: translateY(0);
        }
        &:nth-child(5n - 1) {
          transform: translateY(6rem);
        }
        &:nth-child(5n) {
          transform: translateY(11rem);
        }
      }
      @include xxl {
        &:nth-child(7n - 6) {
          transform: translateY(5rem);
        }
        &:nth-child(7n - 5) {
          transform: translateY(0);
        }
        &:nth-child(7n - 4) {
          transform: translateY(4rem);
        }
        &:nth-child(7n - 3) {
          transform: translateY(8rem);
        }
        &:nth-child(7n - 2) {
          transform: translateY(0);
        }
        &:nth-child(7n - 1) {
          transform: translateY(6rem);
        }
        &:nth-child(7n) {
          transform: translateY(0rem);
        }
      }
    }
  }
}
</style>
