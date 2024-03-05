<template>
  <UiIntersect :id="id" :once="false" @reveal="updateHash">
    <slot />
  </UiIntersect>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    id: {
      type: String,
      default: '',
    },
  },
  methods: {
    ...mapMutations('application', ['setCurrentSection']),
    updateHash() {
      this.setUrlParamsHashtag(this.id)
      this.setCurrentSection(this.id)
      // this.$router.push({ hash: `${this.id}` })
    },
    setUrlParamsHashtag(id) {
      if (process.client && id !== null) {
        window.history.pushState(null, null, `#${id}`)
      }
    },
  },
}
</script>

<style lang="scss"></style>
