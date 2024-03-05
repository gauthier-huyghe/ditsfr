<template>
  <nav class="ui-language">
    <ul>
      <li v-for="locale in locales" :key="locale.code">
        <NuxtLink
          :to="switchLocalePath(locale.code)"
          :title="locale.name"
          :class="{ 'is-active': locale.code === $i18n.locale }"
        >
          {{ locale.name }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: {
    showCurrent: {
      type: Boolean,
      default: true,
    },
  },
  computed: {
    ...mapGetters('screens', ['isDesktop']),
    locales() {
      return this.showCurrent
        ? this.$i18n.locales
        : this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
}
</script>

<style lang="scss">
.ui-language {
  @include padding-x(0);

  ul {
    @include md-down {
      justify-content: center;
    }
    @include flex-start-center;

    li {
      @include flex-initial;
      @include flex-start-center;

      &:not(:first-child) {
        @include margin-x(1.4em, 0);
      }

      a {
        @include flex-initial;
        @include text-font;
        @include rf(14, 18);
        @include margin-y(0, 0.05em);
        @include underline-hover($white, 1px, 0.1rem, 0.2rem);

        @include md-down {
          @include font-regular;
          @include padding-x(0.2rem);
          @include padding-y(0.4rem);
          opacity: 0.4;
        }
        @include lg-up {
          @include font-regular;
          @include padding-x(0.2rem);
          @include padding-y(0.2rem);
          opacity: 0.9;
        }
        @include hover {
          opacity: 1;
        }

        display: inline-block;
        line-height: $leading-tiny;
        transition: opacity 0.3s ease-in-out;

        &.is-active,
        &.nuxt-link-exact-active {
          opacity: 1;
        }
      }
    }
  }
}
</style>
