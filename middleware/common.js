export default async function ({ app: { $api }, i18n, store, route }) {
  const currentCommonLanguage = store.state.common.lang
  const staleCommonFetch =
    currentCommonLanguage && currentCommonLanguage === i18n.locale

  // console.log('shouldFetchCommon:', staleCommonFetch, currentCommonLanguage)

  if (!staleCommonFetch) {
    const city = route.params.city || null
    const data = await $api.getCommon(i18n.locale, city)
    const globals = await $api.getGlobals(city)
    store.commit('common/setData', {
      data,
      lang: i18n.locale,
      globals,
    })
  }
}
