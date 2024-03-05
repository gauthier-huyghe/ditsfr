<template>
  <!-- Button -->
  <button
    v-if="to === ''"
    :type="type"
    class="ui-icon-button"
    :class="{ 'no-border': noBorder }"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <UiIcon :icon="icon" :size="size" class="ui-icon-button__icon" />
    <span class="hidden">{{ label }}</span>
  </button>
  <!-- External link -->
  <a
    v-else-if="external"
    :href="to"
    target="_blank"
    class="ui-icon-button"
    :class="{ 'no-border': noBorder }"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <UiIcon :icon="icon" :size="size" class="ui-icon-button__icon" />
    <span class="hidden">{{ label }}</span>
  </a>
  <!-- Nuxt link -->
  <NuxtLink
    v-else
    class="ui-icon-button"
    :class="{ 'no-border': noBorder }"
    :disabled="disabled"
    :to="to"
    @click.native="$emit('click')"
  >
    <UiIcon :icon="icon" :size="size" class="ui-icon-button__icon" />
    <span class="hidden">{{ label }}</span>
  </NuxtLink>
</template>

<script>
export default {
  inheritAttrs: false,

  props: {
    to: {
      type: [Object, String],
      default: '',
    },
    external: {
      type: Boolean,
      default: false,
    },
    icon: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'button',
    },
    size: {
      type: String,
      default: 'xs',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    noBorder: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss">
.ui-icon-button {
  @include transition(color opacity background-color);
  @include size(3.2rem);

  flex: 0 0 3.2rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 3.2rem;
  padding: 0;
  border: 1.5px solid currentColor;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &.no-border {
    border: none;
  }

  @include hover {
    color: var(--color-primary);
  }
}
</style>
