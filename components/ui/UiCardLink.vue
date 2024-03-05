<template>
  <component
    :is="link.url ? 'a' : 'NuxtLink'"
    class="ui-cardlink"
    :target="link.url ? '_blank' : null"
    :rel="link.url ? 'noreferrer' : null"
    :href="link.url ? link.url : localePath(link.route)"
    :to="link.url ? null : localePath(link.route)"
  >
    <span class="ui-cardlink__name">{{ link.text }}</span>
    <div class="ui-cardlink__info">
      <template v-if="link.format">
        <small class="ui-cardlink__label">{{ $t('link_format') }}</small>
        {{ link.format }}
      </template>
    </div>
    <div class="ui-cardlink__info">
      <template v-if="link.size">
        <small class="ui-cardlink__label">{{ $t('link_size') }}</small>
        {{ link.size }}
      </template>
    </div>
    <span class="ui-cardlink__icon">
      <span class="ui-cardlink__icon-label">{{
        link.format ? $t('link_download') : $t('link_visit')
      }}</span>
      <UiIcon size="xs" :icon="link.format ? 'download' : 'arrow-right'" />
    </span>
  </component>
</template>

<script>
export default {
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.ui-cardlink {
  @include lg-up {
    grid-template-columns: columns(6) repeat(3, columns(2));
    align-items: center;
    height: 7rem;
    padding-left: 3rem;
    padding-right: 1rem;
  }
  @include md-down {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 0 2rem;
    padding: 1rem 2rem;
  }
  @include transition(box-shadow);
  @include shadow-card;
  display: grid;
  background-color: var(--bg);
  border-radius: 1.6rem;

  &__name {
    @include md-down {
      grid-column: -1 / 1;
    }
    @include font-medium;
    @include rf(16, 16);
  }

  &__icon {
    @include lg-up {
      @include size(5rem);
      @include flex-center-center;

      justify-self: end;
    }
    @include md-down {
      @include flex-between-center;

      height: 5rem;
      padding: 0 1.5rem;
      grid-column: -1 / 1;
      margin: 0 -1rem;
      margin-top: 2rem;
    }

    border-radius: 1rem;
    // background-color: var(--color-red);
    color: var(--color-font-alt);
  }

  &__info {
    @include rf(15, 15);
    @include font-medium;
  }

  &__label {
    @include rf(12, 12);
    opacity: 0.5;
    margin-right: 0.5rem;
  }

  &__icon-label {
    @include lg-up {
      display: none;
    }
  }

  &:hover {
    @include shadow-card-hover;
  }
}
</style>
