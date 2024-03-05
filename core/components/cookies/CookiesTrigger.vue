<template>
  <UiLink
    :theme="theme"
    :link="{
      route: $cookieManager.openRoute,
    }"
  >
    {{ $t('cookies_triggerbutton') }}
  </UiLink>
</template>

<script>
export default {
  props: {
    theme: {
      type: String,
      default: 'footer-bottom',
    },
  },
}
</script>
