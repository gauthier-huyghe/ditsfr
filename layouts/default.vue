<template>
  <div class="app">
    <div id="fb-root"></div>
    <TheHeader />
    <MenuMobile />
    <main id="main" class="app__content">
      <nuxt />
    </main>
    <TheFooter />
    <!-- <TheLoader v-if="isDesktop" /> -->
    <client-only>
      <PortalTarget name="root" />
      <PortalTarget name="rootmenu" />
      <PortalTarget name="rootgallery" multiple />
      <notifications
        classes="notification"
        position="bottom center"
        :duration="5000"
        :width="600"
        :ignore-duplicates="true"
      />
      <CookiesManager v-if="$cookieManager && $cookieManager.ready" />
      <TheConsole />
    </client-only>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { localize } from 'vee-validate'
import { debounce } from '@unanim/helpers'
import { mapGetters } from 'vuex'
import WindowScroll from '@/mixins/WindowScroll'

gsap.config({
  autoSleep: 60,
})

export default {
  name: 'DefaultLayout',

  mixins: [WindowScroll],

  head() {
    return this.$nuxtI18nHead({ addSeoAttributes: true })
  },

  computed: {
    ...mapGetters('screens', ['isDesktop']),
  },

  watch: {
    async '$i18n.locale'(newLocale) {
      const data = await this.$api.getCommon(newLocale)
      const globals = await this.$api.getGlobals()
      this.$store.commit('common/setData', {
        data,
        lang: newLocale,
        globals,
      })
      localize(newLocale)
    },
  },

  created() {
    this.$cookieManager.init({
      tracking: {
        activate: () => {
          this.$initGtm()
        },
      },
    })
  },

  mounted() {
    if (this.$route.hash && document.querySelector(this.$route.hash)) {
      const el = document.querySelector(this.$route.hash)
      window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
    }
    // window.addEventListener('scroll', this.handleScroll)
    window.addEventListener('resize', this.handleWindowResize)
    // this.handleScroll()
    this.handleWindowResize()
  },

  methods: {
    // handleScroll() {
    //   this.$store.commit('screens/setScrollY', window.scrollY)
    // },
    handleWindowResize: debounce(function () {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
      const scrollbarWidth = window.innerWidth - document.body.clientWidth
      document.documentElement.style.setProperty(
        '--scrollbar-width',
        `${scrollbarWidth}px`
      )
      this.$store.commit('screens/setScreenHeight', window.innerHeight)
      this.$store.commit('screens/setScreenWidth', window.innerWidth)
    }, 100),
  },
}
</script>

<style lang="scss">
@import '@/assets/styles/base.scss';

.app {
  @include bg-background;
  background: var(--bg-body);
  min-height: calc(100% - var(--header-margin));
  margin: 0 auto;
  padding-bottom: 0 !important;

  &__content {
    position: relative;
    margin-top: var(--header-margin);
  }
}
</style>
