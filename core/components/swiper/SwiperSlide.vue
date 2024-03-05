<template>
  <div class="swiper-slide" :class="slideClass">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SwiperSlide',
  data() {
    return {
      slideClass: 'swiper-slide',
    }
  },
  created() {
    this.update()
  },
  mounted() {
    this.update()
    if (
      this.$parent &&
      this.$parent.options &&
      this.$parent.options.slideClass
    ) {
      this.slideClass = this.$parent.options.slideClass
    }
  },
  updated() {
    this.update()
  },
  methods: {
    update() {
      if (this.$parent && this.$parent.swiper) {
        this.$parent.update()
      }
    },
  },
}
</script>

<style lang="scss">
.swiper-slide {
  width: auto;
}
</style>
