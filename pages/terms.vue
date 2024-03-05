<template>
  <div class="home">
    <TheBlockGenerator :blocks="blocks" />
  </div>
</template>

<script>
import { resolveHead } from '~/core/ResolveHead'

export default {
  name: 'TermsPage',

  async asyncData({ $api, i18n }) {
    const { metas, blocks } = await $api.getPage(i18n.locale, 'terms')

    return {
      // dataLoaded: true,
      metas,
      blocks,
    }
  },

  data: () => ({
    // dataLoaded: false,
    meta: null,
    blocks: [],
  }),

  head() {
    return resolveHead(this.metas, this.$route.fullPath)
  },
}
</script>
