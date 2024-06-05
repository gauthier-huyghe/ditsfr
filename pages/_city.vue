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

  async asyncData({ $api, i18n, route, error }) {
    try {
      const { metas, blocks } = await $api.getPage(
        i18n.locale,
        route.params.city
      )

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
    } catch (e) {
      return error({ statusCode: 404, message: 'Page not found' })
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
