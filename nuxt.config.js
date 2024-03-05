import i18n from './config/i18n'
const buildDir = process.env.NUXT_ENV_DIR || 'dist'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  server: {
    port: 3000, // default: 3000
    host: '0.0.0.0', // default: localhost
  },

  publicRuntimeConfig: {
    siteName: 'Dinner in the sky',
    autoPushPageView: true,
    baseURL: '/',
    baseDomain: 'https://dinnerinthesky.fr',
    gtm: {
      // id: 'GTM-CODE',
    },
  },

  i18n,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Dinner in the sky',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        async: true,
        defer: true,
        crossorigin: 'anonymous',
        src: 'https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v15.0',
        nonce: 'QJXkuDEz',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: ['~/components', '~/core/components'],
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/style-resources',
    // Doc: https://github.com/nuxt-community/svg-sprite-module
    '@nuxtjs/svg-sprite',
    // https://google-fonts.nuxtjs.org/
    '@nuxtjs/google-fonts',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // Doc: https://github.com/nuxt-community/nuxt-i18n
    '@nuxtjs/i18n',
    // Doc: https://github.com/LinusBorg/portal-vue
    'portal-vue/nuxt',
    '@nuxtjs/gtm',
  ],

  // // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    './plugins/api.js',
    './plugins/cookie-manager.js',
    './plugins/vue-gallery.client.js',
    './plugins/vue-lazyload.js',
    '~/plugins/vue-vee-validate.client',
    '~/plugins/vue-click-outside',
    '~/plugins/vue-scrollto',
    // '~/plugins/vue-gmap',
    // '~/plugins/vue-lazyload',
    '~/plugins/vue-notification.client',
    // '~/plugins/vue-scroll-lock',
    // '~/plugins/vue-social-sharing',
    // '~/plugins/vue-vee-validate',
    '~/plugins/custom-gtm.js',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      config.resolve.alias['@constants'] = '~/core/constants'
    },
    transpile: ['swiper'],
  },

  router: {
    middleware: ['common'],
  },

  styleResources: {
    scss: './assets/styles/config.scss',
  },

  gtm: {
    enabled: true,
    autoInit: false
  },

  generate: {
    dir: buildDir,
  },

  googleFonts: {
    display: 'swap',
    subset: 'latin',
    families: {
      'Roboto+Condensed': {
        wght: [300, 400, 500, 600, 700],
      },
    },
  },
}
