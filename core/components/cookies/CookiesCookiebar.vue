<template>
  <div class="cookiebar">
    <div class="cookiebar__icon">
      <UiIcon icon="cookie" size="ml" />
    </div>
    <div class="cookiebar__text">
      <span v-html="$t('cookies_bar_text')" />
    </div>
    <div class="cookiebar__ctas">
      <!-- <CookiesTrigger /> -->

      <UiButton
        size="xs"
        theme="white"
        @click="$cookieManager.acceptAllCookies()"
      >
        {{ $t('cookies_bar_accept_all') }}
      </UiButton>
      <UiButton
        :link="{
          route: $cookieManager.openRoute,
        }"
        size="xs"
        theme="white"
      >
        {{ $t('cookies_triggerbutton') }}
      </UiButton>
    </div>
  </div>
</template>

<style lang="scss">
.cookiebar {
  @include flex-center-center;
  background-color: $foreground;
  gap: 2.5rem;
  color: var(--color-font-alt);
  position: fixed;
  width: calc(100% - var(--gutter) * 2);
  max-width: 80rem;
  z-index: 999;
  border-radius: 2.5rem;
  padding: 1rem;

  @include md-down {
    flex-wrap: wrap;
    padding: 2rem;
    max-width: 35rem;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    bottom: 4rem;
  }
  @include lg-up {
    right: var(--gutter);
    bottom: var(--gutter);
  }

  &__icon {
    @include md-down {
      @include size(6rem);
      flex: 0 0 6rem;
    }
    @include flex-center-center;
    @include size(8rem);
    flex: 0 0 8rem;
    border-radius: 1.8rem;
    background-color: rgba(#fff, 0.2);
  }

  &__text {
    @include rf(14, 14);
    @include font-semibold;
    line-height: 1.2;
  }

  &__ctas {
    @include lg-up {
      padding-right: 1rem;
    }
    @include flex-center-center;
  }
}
</style>
