<template>
  <UiContainer
    tag="div"
    classname="header-top"
    fullwidth
    :class="{ down: scrollingDown, isTop }"
  >
    <TheLogo />
    <MenuLinks :items="secondary_menu" theme="top-menu" />
    <UiSocials is-icons />
  </UiContainer>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('screens', ['scrollingDown', 'isTop']),
    ...mapGetters('common', ['secondary_menu']),
  },
}
</script>

<style lang="scss">
.header-top {
  --color: var(--color-font-alt);
  overflow: hidden;

  &__content {
    @include transition(height);
    @include flex-between-center;
    height: var(--header-top);
    padding-left: var(--global-radius);
  }

  &.isTop &__content {
    height: 0;
  }
}
</style>
