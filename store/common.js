export const state = () => ({
  lang: null,
  data: {},
  globals: {},
  isCompanyFromButton: false,
})

export const getters = {
  reservationOpen: (state) => state.globals?.reservationOpen || false,
  showMacaron: (state) => state.globals?.showMacaron || false,
  partners: (state) => state.globals?.partners || [],
  chefs: (state) => state.globals?.chefs || [],
  gallery: (state) => state.globals?.gallery || [],
  footer: (state) => state.data.footer,
  socials: (state) => state.data.socials,
  main_menu: (state) => state.data.main_menu,
  secondary_menu: (state) => state.data.secondary_menu,
  cookiesList: (state) => state.data.cookies?.list || [],
  cookiesPolicy: (state) => state.data.cookies?.policy_text || '',
}

export const mutations = {
  setData: (state, { data, lang, globals }) => {
    state.data = data
    state.lang = lang
    state.globals = globals
  },
  setIsCompanyFromButton: (state, boolean) => {
    state.isCompanyFromButton = boolean
  },
}
