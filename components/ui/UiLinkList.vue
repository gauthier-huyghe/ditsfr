<template>
  <nav :class="classes">
    <ul class="linklist__list">
      <li v-for="link in links" :key="link" class="linklist__item">
        <UiLink :link="link" :theme="theme" @click="$emit('click', $event)">
          {{ link.text }}
          <UiIcon
            v-if="theme === 'header-bottom'"
            class="linklist__icon"
            :class="{ opened }"
            icon="chevron-right"
            size="xs"
          />
          <UiIcon
            v-if="theme === 'header-bottom'"
            class="linklist__arrow"
            icon="triangle"
            size="xs"
          />
        </UiLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      default: () => [],
    },
    theme: {
      type: String,
      default: 'default',
    },
  },

  computed: {
    classes() {
      return ['linklist', `linklist--${this.theme}`]
    },
  },
}
</script>

<style lang="scss">
.linklist {
  $e: &;

  &__icon {
    @include lg-up {
      display: none;
    }
  }
  // °_°_°_°_°_°
  // THEMES
  // °_°_°_°_°_°
}
</style>
