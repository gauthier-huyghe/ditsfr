<template>
  <div class="home">
    <TheBlockGenerator :blocks="blocks" />
  </div>
</template>

<script>
import { resolveHead } from '~/core/ResolveHead'

export default {
  name: 'PrivacyPage',

  async asyncData({ $api, i18n }) {
    const { metas, blocks } = await $api.getPage(i18n.locale, 'privacy')

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
