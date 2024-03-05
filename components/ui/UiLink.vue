<template>
  <a
    v-if="link.url"
    :class="classes"
    target="_blank"
    rel="noreferrer"
    :href="link.url"
    @click="$emit('click', $event)"
  >
    <slot />
  </a>
  <a
    v-else-if="
      !link.url &&
      link.route &&
      typeof link.route === 'string' &&
      link.route.startsWith('#')
    "
    :class="classes"
    :href="linkRtn(link.route)"
    @click.prevent="clickScroll($event)"
  >
    <slot />
  </a>
  <NuxtLink
    v-else
    :class="classes"
    :to="localePath(link.route)"
    @click.native="$emit('click', $event)"
  >
    <slot />
  </NuxtLink>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    link: {
      type: Object,
      required: true,
    },
    theme: {
      type: String,
      default: 'default',
    },
  },

  computed: {
    ...mapState('application', ['currentSection']),
    classes() {
      return [
        'ui-link',
        `ui-link--${this.theme}`,
        { 'is-active': this.isActive },
      ]
    },
    isActive() {
      return this.link.route === `#${this.currentSection}`
    },
  },
  methods: {
    linkRtn(route) {
      return this.$route.path !== `/${this.$i18n.locale}` ? `/${route}` : route
    },
    clickScroll($event) {
      // console.log('this.$route.path', this.$route.path)
      if (
        this.$route.path !== `/` &&
        this.$route.path !== `/${this.$i18n.locale}` &&
        this.$route.path !== `/${this.$i18n.locale}/`
      ) {
        this.$router.push(this.localePath(`/${this.link.route}`))
      } else {
        this.$scrollTo(this.link.route)
      }
      this.$emit('click', $event)
    },
  },
}
</script>

<style lang="scss">
.ui-link {
  @include rf(11, 13);
  @include font-medium;

  transition: color 0.4s $ease-in-out;
  color: var(--color-font);

  &:hover {
    --color: var(--color-primary);
  }

  // °_°_°_°_°_°
  // THEMES
  // °_°_°_°_°_°
  &--main-menu {
    @include rf(14, 12);
    @include font-medium;
    @include padding-y(2rem);
    line-height: 1;
    text-transform: uppercase;

    @include lg {
      @include padding-x(0.5rem);
      @include underline-hover(var(--color-font), 1px, 1.4rem, 0.5rem);
      letter-spacing: 0.1em;
    }
    @include xl {
      @include padding-x(0.8rem);
      @include underline-hover(var(--color-font), 1px, 1.4rem, 0.8rem);
      letter-spacing: 0.2em;
    }
    @include xxl {
      @include padding-x(1rem);
      @include underline-hover(var(--color-font), 1px, 1.4rem, 1rem);
      letter-spacing: 0.2em;
    }
  }
  &--mobile-main {
    @include font-medium;
    display: inline-block;
    font-size: 10vw;
    padding: 0.3rem 0;
    letter-spacing: -0.03em;
    line-height: 1;
    text-transform: uppercase;
    @include underline-hover(var(--color-font), 1px, 0.4rem, 0rem);
  }

  &--simple {
    @include font-medium;
    @include rf(16, 16);
    display: inline-block;
    padding: 1rem 2rem;
    letter-spacing: -0.03em;
    line-height: 1;
    text-transform: uppercase;
    color: $white;
    background: $color-blue-medium;

    &:hover {
      background: $color-blue-dark;
    }
  }

  &--underline {
    @include rf(18, 18);
    @include font-regular;
    padding: 1rem 0;
    letter-spacing: 0.1em;
    line-height: 1;
    text-transform: uppercase;

    @include underline-hover(var(--color-font), 1px, 0.4rem, 0px);

    &::after {
      background: linear-gradient(
        to right,
        $white 33.3%,
        transparent 33.3%,
        transparent 66.6%,
        $white 66.6%
      );
      background-size: 300%;
      background-position: 100% 0;
      transform: scaleX(1);
      transition: all 0.8s $ease-in-out-circ;
    }

    @include hover {
      &::after {
        background-position: 0% 0%;
      }
      .ui-icon {
        transform: rotate(45deg);
      }
    }

    .ui-icon {
      --icon-size: 1.1rem;
      margin-left: 4.5rem;
      transition: all 0.6s $ease-in-out-circ;
    }
  }
}
</style>
