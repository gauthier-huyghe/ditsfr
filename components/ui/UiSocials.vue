<template>
  <nav class="ui-social" :class="theme ? `ui-social--${theme}` : ''">
    <ul class="ui-social__list">
      <li v-for="item in socials" :key="item.type" class="ui-social__item">
        <a :href="item.url" class="ui-social__link">
          <span class="ui-social__text" v-text="item.type" />
          <UiIcon size="xs" :icon="item.type" class="ui-social__icon" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    theme: {
      type: String,
      default: '',
    },
  },

  computed: {
    ...mapGetters('common', ['socials']),
    ...mapGetters('screens', ['isDesktop']),
  },
}
</script>

<style lang="scss">
.ui-social {
  &__list {
    @include flex-end-center;

    gap: 1rem;
  }

  &__link {
    @include flex-center-center;

    transition: color 400ms $ease-in-out;
    color: var(--color-font);
    position: relative;

    &:hover {
      color: var(--color-primary);
    }
  }

  &__text {
    @include hide-visually;
  }
}
</style>
