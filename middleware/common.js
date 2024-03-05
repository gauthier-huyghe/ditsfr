export default async function ({ app: { $api }, i18n, store }) {
  const currentCommonLanguage = store.state.common.lang
  const staleCommonFetch =
    currentCommonLanguage && currentCommonLanguage === i18n.locale

  // console.log('shouldFetchCommon:', staleCommonFetch, currentCommonLanguage)

  if (!staleCommonFetch) {
    const data = await $api.getCommon(i18n.locale)
    const globals = await $api.getGlobals()
    store.commit('common/setData', {
      data,
      lang: i18n.locale,
      globals,
    })
  }
}
