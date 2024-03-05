<template>
  <div class="home">
    <TheBlockGenerator :blocks="blocks" />
  </div>
</template>

<script>
import { capitalize } from '@unanim/helpers'
import { resolveHead } from '~/core/ResolveHead'

export default {
  name: 'HomePage',

  async asyncData({ $api, i18n }) {
    const { metas, blocks } = await $api.getPage(i18n.locale, 'home')

    const desc = i18n?._vm?.messages[i18n.locale]?.dates
      ? i18n?._vm?.messages[i18n.locale]?.dates.replace(/<\/?[^>]+(>|$)/g, '')
      : ''
    metas.description = metas.description.replace(
      '$dates',
      capitalize(desc) || ''
    )

    return {
      dataLoaded: true,
      metas,
      blocks,
    }
  },

  data: () => ({
    dataLoaded: false,
    meta: null,
    blocks: [],
  }),

  head() {
    return resolveHead(this.metas, this.$route.fullPath)
  },
}
</script>
