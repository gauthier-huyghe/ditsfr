<template>
  <UiLink :link="link" class="the-logo" @click.native="handleClick">
    <img class="the-logo__img" src="/img/logo.png" alt="logo" />
  </UiLink>
</template>

<script>
export default {
  computed: {
    link() {
      return this.$route.path !== `/${this.$i18n.locale}` &&
        this.$route.path !== `/`
        ? { route: '/#home' }
        : { route: '#home' }
    },
  },
  methods: {
    handleClick() {
      if (this.isMobile) {
        this.$store.commit('application/setShowMenu', false)
      }
    },
  },
}
</script>

<style lang="scss">
.the-logo {
  @include flex-center-center;
  @include inline-flex;

  &__img {
    @include size(15.4rem, 3.3rem);
    object-fit: contain;
  }
}
</style>
