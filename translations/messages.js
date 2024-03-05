import useApiClient from '~/core/api'

export default async ({ error, app }, locale) => {
  return await useApiClient({
    error,
    app,
    strategy: 'static',
  }).getTranslations(locale)
}
