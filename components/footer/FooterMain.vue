<template>
  <UiContainer fullwidth classname="footer-main">
    <TheLogo />
    <div class="footer-main__menu">
      <UiLink
        v-for="link in footer.menu"
        :key="link.text"
        theme="footer-main"
        :link="link"
      >
        {{ link.text }}
      </UiLink>
    </div>
  </UiContainer>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('common', ['footer']),
  },
}
</script>

<style lang="scss">
.footer-main {
  @include md-down {
    padding: 5rem 0;
  }
  padding: 10rem 0;
  background-color: $foreground;

  &__content {
    @include md-down {
      @include flex-center-center;
      @include flex-col;
      gap: 3rem;
    }
  }

  &__menu {
    @include lg-up {
      align-items: flex-end;
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
}
</style>
