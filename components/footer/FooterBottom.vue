<template>
  <UiContainer fullwidth classname="footer-bottom">
    <UiNarrow class="footer-bottom__narrow" left="1" right="0">
      <p class="footer-bottom__copyright">
        <span v-text="$t('footer_copyright')" />
      </p>
      <div>
        <UiLink :link="{ route: $cookieManager.openRoute }">
          {{ $t('cookies_policy') }}
        </UiLink>
        <MenuLinks :items="footer.menu" theme="footer-bottom" />
      </div>
    </UiNarrow>
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
.footer-bottom {
  position: relative;

  &__narrow {
    border-top: 1px solid var(--border);

    @include md-down {
      @include padding-y(3rem);
      text-align: center;
    }
    @include lg-up {
      height: 10rem;
      @include flex-between-center;
    }

    & > div {
      @include md-down {
        @include flex-center-start;
        padding-top: 2rem;
      }
      @include lg-up {
        @include flex-start-start;
      }

      & > .ui-link {
        margin-right: 3rem;
      }
    }
  }

  &__copyright {
    @include rf(13, 14);

    opacity: 0.6;
  }
}
</style>
