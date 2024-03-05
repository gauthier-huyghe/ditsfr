import useApiClient from '~/core/api'

export default ({ error, app }, inject) => {
  const api = useApiClient({
    error,
    app,
    strategy: 'static',
  })

  inject('api', api)
}
