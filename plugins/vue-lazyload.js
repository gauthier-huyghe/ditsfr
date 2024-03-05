import Vue from 'vue'
import VueLazyload from 'vue-lazyload'

import error from '~/assets/images/error.png'

Vue.use(VueLazyload, {
  lazyComponent: false,
  error,
  loading: null,
})
