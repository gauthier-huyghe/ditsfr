export const state = () => ({
  showMenuMobile: false,
  currentSection: 'home',
})

export const mutations = {
  setShowMenu: (state, boolean) => {
    state.showMenuMobile = boolean
  },
  toggleShowMenu: (state) => {
    state.showMenuMobile = !state.showMenuMobile
  },
  setCurrentSection: (state, string) => {
    state.currentSection = string
  },
}
