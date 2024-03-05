import { mapMutations } from 'vuex'
import { addListeners } from '@/core/helpers'

export default {
  data() {
    return {
      lastScrollTop: 0,
      scrollDirection: 'down',
      scrollPosition: 0,
    }
  },
  mounted() {
    addListeners(window, 'scroll', this.handleWindowScroll)
  },
  methods: {
    ...mapMutations('screens', ['setScrollY']),
    handleWindowScroll() {
      const st =
        window.scrollY ||
        window.pageYOffset ||
        window.scrollTop ||
        document.getElementsByTagName('html')[0].scrollTop
      this.setScrollY(Math.round(st))

      this.scrollDirection = st > this.lastScrollTop ? 'down' : 'up'
      this.lastScrollTop = st <= 0 ? 0 : st
      this.scrollPosition = this.lastScrollTop
    },
  },
}
