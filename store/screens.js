import { MEDIAQUERIES as mediaqueries } from '@constants'

export const state = () => ({
  mediaqueries,
  screenWidth: 0,
  screenHeight: 0,
  isRealMobile: false,
  scrollY: 0,
  lastScrollY: 0,
  inputIsInFocus: false,
})

export const getters = {
  breakpoint: (state) => {
    return state.mediaqueries.find(
      (mediaquery) =>
        state.screenWidth >= mediaquery.min &&
        state.screenWidth <= mediaquery.max
    )
  },
  device: (_, getters) => getters.breakpoint.device,
  isDesktop: (_, getters) => getters.device === 'desktop',
  isMobile: (_, getters) => getters.device !== 'desktop',
  vhUnit: (state) => state.screenHeight * 0.01,
  isTop: (state) => state.scrollY < 100,
  scrollingDown: (state) =>
    state.scrollY > 30 && state.scrollY - state.lastScrollY > 0,
}

export const mutations = {
  setScreenWidth: (state, number) => {
    state.screenWidth = number
  },
  setScreenHeight: (state, number) => {
    state.screenHeight = number
  },
  setIsRealMobile: (state, boolean) => {
    state.isRealMobile = boolean
  },
  setScrollY: (state, number) => {
    state.lastScrollY = state.scrollY
    state.scrollY = number
  },
}

export const actions = {
  updateScreenSize: ({ commit }) => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    const vh = window.innerHeight * 0.01
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    commit('setScreenHeight', window.innerHeight)
    commit('setScreenWidth', window.innerWidth)
  },
  updateIsRealMobile: ({ commit }) => {
    const rtn =
      /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        window.navigator.userAgent
      ) ||
      (window.navigator.platform === 'MacIntel' &&
        window.navigator.maxTouchPoints > 1)
    commit('setIsRealMobile', rtn)
  },
}
