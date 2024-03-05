<template>
  <div class="cookiesettings">
    <UiTitle tag="h3" :title="$t('cookies_bar_settings')" />
    <div class="cookiesettings__list">
      <div
        v-for="({ id, editable }, index) in $cookieManager.groups"
        :key="`cookiesetting_item-${index}`"
        class="cookiesettings__item"
      >
        <div class="cookiesettings__header">
          <h4 class="cookiesettings__title">
            {{ $t(`cookies_${id}_title`) }}
          </h4>
          <div class="cookiesettings__switcher">
            <div
              v-if="editable === false"
              class="cookiesettings__always"
              v-text="$t('cookies_necessary')"
            />
            <CookiesSwitcher
              v-else
              v-model="$cookieManager.cookies[id]"
              :name="`cookie-${id}`"
              label=""
            />
          </div>
        </div>
        <div
          class="cookiesettings__description"
          v-text="$t(`cookies_${id}_description`)"
        />
      </div>
    </div>
    <div class="cookiesettings__ctas">
      <NuxtLink
        :to="$cookieManager.closeRoute"
        class="cookiesettings__save"
        @click.native="$cookieManager.saveUserPreferences()"
      >
        {{ $t('cookies_save_btn') }}
      </NuxtLink>
      <UiButton
        icon=""
        size="md"
        :to="$cookieManager.closeRoute"
        @click.native="$cookieManager.acceptAllCookies()"
        v-text="$t('cookies_accept_all_btn')"
      />
    </div>
  </div>
</template>

<style lang="scss">
.cookiesettings {
  @include md-down {
    padding: 3rem 2rem;
    position: fixed;
    left: 102%;
    top: 0;
    width: 100%;
    height: calc(100vh - 9rem);
    height: calc(var(--vh, 1vh) * 100 - 9rem);
    z-index: 1;
    transition: left 0.3s ease-in-out;
    background-color: var(--bg);
    overflow-y: auto;
  }
  @include lg-up {
    @include padding-y(8rem, 5.5rem);

    position: sticky;
    top: 0;
    bottom: 0;
  }

  &.opened {
    @include md-down {
      left: 0;
    }
  }

  &__list {
    @include flex-initial;

    width: 100%;

    @include md-down {
      @include margin-y(0, 3rem);
    }
    @include lg-up {
      @include margin-y(0, 5rem);
    }
  }

  &__item {
    @include padding-y(3rem);

    &:not(:last-child) {
      border-bottom: 1px solid rgba($border, 0.3);
    }
  }

  &__header {
    @include flex-between-center;
    @include margin-y(0, 1rem);

    gap: 1rem;
  }

  &__title {
    @include rf(16, 18);
    @include margin-y(0);

    text-transform: uppercase;
  }

  &__always {
    @include rf(15, 16);

    text-transform: uppercase;
    opacity: 0.3;
  }

  &__description {
    @include rf(15, 16);
  }

  &__ctas {
    @include flex-between-center;
  }

  &__save {
    @include rf(14, 14);

    text-transform: uppercase;
    text-decoration: underline;
    color: var(--color-font);
    cursor: pointer;
    padding: 0;

    @include hover {
      color: inherit;
    }
  }

  &__accept {
    --size: 4.6rem;
    --gap: 1.6rem;

    // Aspect
    padding: 1rem calc(var(--gap) * 1.15);
    min-height: var(--size);
    border-radius: 20rem;
    display: inline-flex;
    align-items: center;
    gap: var(--gap);
    border: 1.5px solid;
    color: var(--color-font);
    border-color: var(--color-font);
    overflow: hidden;
    // white-space: nowrap;
    max-width: calc(100vw - 4.2rem);

    // Animation
    transition: 400ms $ease-in-out;
    transition-property: background-color, color;

    // Font
    @include rf(15, 15);
    @include font-medium;

    &__icon {
      flex-shrink: 0;
    }

    @include hover {
      background-color: var(--fg);
      color: var(--color-font-alt);
    }
  }
}
</style>
