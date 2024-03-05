<template>
  <div class="cookiepage">
    <slot />
    <CookiesMobileSettingsTrigger
      @trigger="mobileSettingsOpen = !mobileSettingsOpen"
    >
      <span v-if="mobileSettingsOpen">{{ $t('cookies_policy_title') }}</span>
      <span v-else>{{ $t('cookies_settings_title') }}</span>
    </CookiesMobileSettingsTrigger>
  </div>
</template>

<script>
export default {
  data: () => ({
    mobileSettingsOpen: false,
  }),
}
</script>

<style lang="scss">
.cookiepage {
  @include lg-up {
    display: grid;
    grid-template-columns: columns(4) columns(7);
    justify-content: space-between;
    align-items: start;
    width: 100%;
    padding: 0 var(--gutter);
  }

  &::after {
    @include md-down {
      position: sticky;
      left: 0;
      bottom: 9rem;
      width: 100%;
      height: 7rem;
      display: flex;
      content: '';
      background: linear-gradient(
        to bottom,
        rgba($background, 0),
        rgba($background, 1)
      );
      pointer-events: none;
      z-index: 2;
    }

    @include lg-up {
      display: none;
    }
  }
}
</style>
