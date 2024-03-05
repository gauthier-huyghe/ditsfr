<template>
  <div class="swiper swiper-container">
    <div class="swiper-wrapper">
      <slot name="default" />
    </div>
    <slot name="pagination" />
    <slot name="buttonPrev" />
    <slot name="buttonNext" />
    <slot name="scrollbar" />
  </div>
</template>

<script>
/* eslint-disable vue/multi-word-component-names */
import SwiperInstance from 'swiper/swiper-bundle.js'
import 'swiper/swiper-bundle.min.css'

const DEFAULT_EVENTS = [
  'beforeDestroy',
  'slideChange',
  'slideChangeTransitionStart',
  'slideChangeTransitionEnd',
  'slideNextTransitionStart',
  'slideNextTransitionEnd',
  'slidePrevTransitionStart',
  'slidePrevTransitionEnd',
  'transitionStart',
  'transitionEnd',
  'touchStart',
  'touchMove',
  'touchMoveOpposite',
  'sliderMove',
  'touchEnd',
  'click',
  'tap',
  'doubleTap',
  'imagesReady',
  'progress',
  'reachBeginning',
  'reachEnd',
  'fromEdge',
  'setTranslate',
  'setTransition',
  'resize',
  'observerUpdate',
  'beforeLoopFix',
  'loopFix',
]

export default {
  name: 'Swiper',

  props: {
    options: {
      type: Object,
      default: () => {
        return {}
      },
    },
  },

  data() {
    return {
      swiper: null,
      swiperOptions: {},
      defaultOptions: {
        init: false,
        threshold: 30,
        observer: false,
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
      },
    }
  },
  mounted() {
    window.addEventListener('resize', () => {
      if (this.swiper) {
        this.update()
      }
    })
    this.mountInstance()
  },
  updated() {
    this.update()
  },
  beforeDestroy() {
    // THIS WILL KILL SWIPER AND RE-RENDER
    // BEFORE THE PAGE TRANSITION ENDS CAUSING A FLICK
    // this.$nextTick(() => {
    //   if (this.swiper) {
    //     this.swiper.destroy && this.swiper.destroy()
    //     delete this.swiper
    //   }
    // })
  },
  methods: {
    bindEvents() {
      const vm = this
      DEFAULT_EVENTS.forEach((eventName) => {
        this.swiper.on(eventName, function () {
          vm.$emit(eventName, ...arguments)
          vm.$emit(
            eventName.replace(/([A-Z])/g, '-$1').toLowerCase(),
            ...arguments
          )
        })
      })
    },
    mountInstance() {
      this.swiperOptions = Object.assign({}, this.defaultOptions, this.options)
      this.swiper = new SwiperInstance(this.$el, this.swiperOptions)
      this.bindEvents()

      this.swiper.on('init', () => {
        this.$emit('ready', this.swiper)
      })
      this.swiper.init()
    },
    reset() {
      if (this.swiper) {
        this.swiper.destroy(false, true)
      }
      this.$nextTick(() => {
        this.mountInstance()
      })
    },
    update() {
      this.$nextTick(() => {
        if (this.swiper) {
          this.swiper.update()
          this.swiper.navigation.update()
          this.swiper.pagination.render()
          this.swiper.pagination.update()
        }
      })
    },
  },
}
</script>
