<template>
  <!-- Button -->
  <button
    v-if="(!link.url && !link.route) || !link"
    :type="type"
    :class="classes"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <UiIcon
      v-if="displayedIcon"
      :icon="displayedIcon"
      class="ui-button__icon"
      :class="iconColor"
    />
    <span class="ui-button__text">
      <slot />
    </span>
    <UiIcon
      v-if="chevron"
      class="ui-button__chevron"
      size="xs"
      icon="chevron-right"
    />
  </button>
  <!-- External link -->
  <a
    v-else-if="link.url"
    :href="link.url"
    :target="target"
    :class="classes"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <UiIcon
      v-if="displayedIcon"
      :icon="displayedIcon"
      class="ui-button__icon"
      :class="iconColor"
    />
    <span class="ui-button__text">
      <slot />
    </span>
    <UiIcon
      v-if="chevron"
      class="ui-button__chevron"
      size="xs"
      icon="chevron-right"
    />
  </a>
  <a
    v-else-if="
      !link.url &&
      link.route &&
      typeof link.route === 'string' &&
      link.route.startsWith('#')
    "
    :class="classes"
    :href="link.route"
    @click.prevent="clickScroll($event)"
  >
    <UiIcon
      v-if="displayedIcon"
      :icon="displayedIcon"
      class="ui-button__icon"
      :class="iconColor"
    />
    <span class="ui-button__text">
      <slot />
    </span>
    <UiIcon
      v-if="chevron"
      class="ui-button__chevron"
      size="xs"
      icon="chevron-right"
    />
  </a>
  <!-- Nuxt link -->
  <NuxtLink
    v-else
    :class="classes"
    :disabled="disabled"
    :to="localePath(link.route)"
    @click.native="$emit('click')"
  >
    <UiIcon
      v-if="displayedIcon"
      :icon="displayedIcon"
      class="ui-button__icon"
      :class="iconColor"
    />
    <span class="ui-button__text">
      <slot />
    </span>
    <UiIcon
      v-if="chevron"
      class="ui-button__chevron"
      size="xs"
      icon="chevron-right"
    />
  </NuxtLink>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    link: {
      type: [Object, String],
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'button',
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: 'default',
    },
    iconColor: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    chevron: {
      type: Boolean,
      default: false,
    },
    theme: {
      type: String,
      default: '',
    },
    target: {
      type: String,
      default: '_blank',
    },
  },

  computed: {
    classes() {
      return [
        'ui-button',
        `ui-button--${this.size}`,
        this.theme ?? `ui-button--${this.theme}`,
        { 'is-loading': this.isLoading },
        { 'ui-button--has-icon': this.displayedIcon },
        { 'ui-button--overlay': this.overlay },
        { 'ui-button--has-chevron': this.chevron },
        { 'is-active': this.isActive },
      ]
    },
    isActive() {
      return this.link.route === `#${this.currentSection}`
    },
    displayedIcon() {
      return this.isLoading ? 'refresh' : this.icon
    },
  },
  methods: {
    clickScroll($event) {
      this.$scrollTo(this.link.route)
      this.$emit('click', $event)
    },
  },
}
</script>

<style lang="scss">
.ui-button {
  @include transition(background-color color border);
  $e: &;

  // Aspect
  min-height: var(--size);
  gap: var(--gap);
  border-radius: 20rem;
  display: inline-flex;
  align-items: center;
  overflow: hidden;
  position: relative;
  text-align: left;

  // Font
  @include rf(16, 16);
  @include font-semibold;

  // SIZES
  // Default
  @include padding-x(2rem);
  --size: 5rem;
  --gap: 1.3rem;

  &--has-icon {
    padding-left: 1.5rem;
  }
  &--has-chevron {
    padding-right: 6rem;
  }

  // Small
  &--xs {
    @include padding-x(1.5rem);
    @include rf(15, 15);
    --size: 3.6rem;
    --gap: 1rem;
  }
  &--xs:is(&--has-icon) {
    @include padding-x(1rem, 1.5rem);
    padding-left: 0.5rem;
  }
  &--sm {
    @include padding-x(1.5rem);
    --size: 4.2rem;
    --gap: 1rem;
  }
  &--sm:is(&--has-icon) {
    @include padding-x(1rem, 1.5rem);
    padding-left: 1rem;
  }
  &--full {
    display: flex;
    width: 100%;
  }

  &__icon {
    flex-shrink: 0;
    transition: transform 200ms $ease-in-out-quad;
    z-index: 1;
    color: currentColor;
  }

  &__text {
    flex: 1;
    white-space: nowrap;
  }

  &:not(.overlay):not(.white):not(.login) &__icon.primary {
    color: var(--color-primary);
  }
  &:not(.overlay):not(.white):not(.login) &__icon.secondary {
    color: var(--color-secondary);
  }
  &:not(.overlay):not(.white):not(.login) &__icon.blue-light {
    color: var(--color-blue-light);
  }

  small {
    @include rf(12, 12);
    opacity: 0.6;
  }

  &__chevron {
    position: absolute;
    right: 2rem;
  }

  &.is-loading &__icon {
    transition-property: transform;
    animation-name: spin;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration: 1.25s;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  & + &:not(&--full) {
    margin-left: 1rem;
  }

  // °_°_°_°_°_
  // THEMES
  // °_°_°_°_°_
  // BASE
  & {
    color: $font;
    background-color: transparent;
    border: 1.5px solid $font;

    @include hover(false) {
      color: $font-alt;
      background-color: $font;
      border: 1.5px solid $font;
    }
  }
  // WHITE
  &.white {
    color: $font-alt;
    border: 1.5px solid $background;

    @include hover(false) {
      color: $font;
      background-color: $background;
      border: 1.5px solid $background;
    }
  }
  // header-subscribe
  &.header-subscribe {
    @include flex-row-reverse;
    background: var(--fg);
    color: var(--color-font);
    border: 0;
    border-radius: 0;

    @include md-down {
      padding: 1.3rem 2.5rem 1.3rem 3rem;
      height: 5rem;
      border-bottom-left-radius: 3rem;
    }
    @include lg-up {
      padding: 1.5rem 4.5rem 1.5rem 5rem;
      height: 7.5rem;
      border-bottom-left-radius: 5rem;
    }

    #{$e}__text {
      @include rf(16, 16);
      @include font-medium;
      text-transform: uppercase;
    }
    #{$e}__icon {
      --icon-size: 1.2rem;
      transition: none;
    }

    @include hover() {
      border: 0;
      color: var(--color-font-alt);
      background-color: $primary;
    }
  }

  &.underline {
    @include rf(18, 18);
    @include font-regular;
    border: 0;
    border-radius: 0;
    padding: 1rem 0;
    letter-spacing: 0.1em;
    line-height: 1;
    text-transform: uppercase;

    @include underline-hover(var(--color-font), 1px, 0.4rem, 0px);

    &::after {
      background: linear-gradient(
        to right,
        currentColor 33.3%,
        transparent 33.3%,
        transparent 66.6%,
        currentColor 66.6%
      );
      background-size: 300%;
      background-position: 100% 0;
      transform: scaleX(1);
      transition: all 0.8s $ease-in-out-circ;
    }

    .ui-icon {
      --icon-size: 1.1rem;
      margin-left: 4.5rem;
      transition: all 0.6s $ease-in-out-circ;
    }

    @include hover {
      color: inherit;
      background-color: transparent;
      border: 0px;

      &::after {
        background-position: 0% 0%;
      }
      .ui-icon {
        transform: rotate(45deg);
      }
    }
  }

  &.book {
    @include flex-center-center;
    @include flex-col;
    @include rf(16, 18);
    @include font-medium;
    position: relative;
    text-align: center;
    border-radius: 1rem;
    border: 1px solid var(--color-font-alt);
    color: var(--color-font-alt);
    background-color: var(--color-primary);
    padding: 1.4rem 2rem;
    height: 5.4rem;
    width: 18rem;

    &:hover {
      color: var(--color-primary);
      border-color: var(--color-font-alt);
      background: var(--color-font-alt);
      opacity: 1;
    }
  }
}
</style>
