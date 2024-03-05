<template>
  <component :is="tag">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: 'div',
    },
    once: {
      type: Boolean,
      default: true,
    },
  },

  data() {
    return {
      options: {
        rootMargin: '-40% -40%',
      },
      observer: null,
    }
  },

  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      this.handleIntersect(entries[0])
    }, this.options)

    this.observer.observe(this.$el)
  },

  unmounted() {
    this.observer.disconnect()
  },

  methods: {
    handleIntersect(entry) {
      if (entry.isIntersecting) {
        this.$emit('reveal')
        if (this.once) {
          this.observer.disconnect()
        }
      } else {
        this.$emit('out')
      }
    },
  },
}
</script>
