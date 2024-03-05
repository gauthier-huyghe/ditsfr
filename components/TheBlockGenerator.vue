<template>
  <div class="blocks">
    <component
      :is="resolveBlockName(block.type)"
      v-for="(block, index) in blocks"
      :key="`block_${block.type}_${index}`"
      :content="block.content"
    />
  </div>
</template>

<script>
import { snakeToPascal } from '@unanim/helpers'

export default {
  props: {
    blocks: {
      type: Array,
      required: true,
    },
  },

  methods: {
    resolveBlockName(type) {
      return `Block${snakeToPascal(type)}`
    },
  },
}
</script>

<style lang="scss">
.blocks {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  gap: var(--blocks-gap);
  margin-bottom: var(--blocks-gap);

  & > div {
    z-index: 1;
  }
}
</style>
