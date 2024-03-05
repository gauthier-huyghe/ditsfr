export const validateProp = (value = {}, props = []) => {
  return props.every((key) => key in value)
}

export const localizeEndpointPath = (name, locale = '') => {
  const baseURL = process.env.NUXT_ENV_BASEURL
  const dev = process.env.NODE_ENV === 'development'
  const ext = dev || baseURL !== '/' ? '.json' : ''
  const repo = dev || baseURL !== '/' ? 'json' : 'endpoints'

  return `/${repo}/${locale}/${name}${ext}`
}

export const getStringFromErrors = (errors) => {
  let errorMessages = []
  const keys = Object.keys(errors)
  keys.forEach((key) => {
    errorMessages = errorMessages.concat(errors[key])
  })
  return errorMessages.join(' <br /> ')
}

export const getErrorMessage = (error) => {
  const data = error.response ? error.response.data : null
  console.log(data)
  if (data && Object.keys(data).length > 0) {
    const { errors, message, status, statusText } = data
    const statusErrorText = status ? `${status} : ${statusText}` : ''
    const messageErrorText = message ? ` <br /> Message: ${message}` : ''
    const serverErrorText = errors
      ? ` <br /> ${getStringFromErrors(errors)}`
      : ''
    return `
      ${statusErrorText}
      ${serverErrorText}
      ${messageErrorText}
    `
  }

  return `${error}`
}
