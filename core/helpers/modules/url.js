export const getUrlParams = (param) => {
  const urlParams = {}
  if (process.client) {
    window.location.href
      .replace(window.location.hash, '')
      .replace(/[?&]+([^=&]+)=?([^&]*)?/gi, (m, key, value) => {
        // callback
        urlParams[key] = value !== undefined ? value : ''
      })
    if (param) {
      return urlParams[param] ? urlParams[param] : null
    }
    return urlParams
  }
}

export const getUrlParamsHashtag = (param) => {
  const urlParams = {}

  if (process.client) {
    window.location.hash.replace(
      /[#&]+([^=&]+)=?([^&]*)?/gi,
      (m, key, value) => {
        // callback
        urlParams[key] = value !== undefined ? value : ''
      }
    )
    if (param) {
      return urlParams[param] ? urlParams[param] : null
    }
  }
  return urlParams
}

export const removeUrlAllParams = () => {
  if (process.client) {
    window.history.replaceState(null, null, window.location.href.split('?')[0])
  }
}

export const removeUrlParams = (key) => {
  if (process.client) {
    if (!key) {
      window.location.hash = ''
    } else {
      const urlParams = getUrlParams()
      if (urlParams[key]) {
        delete urlParams[key]
      }
      setUrlParams(urlParams)
    }
  }
}

export const removeUrlAllParamsHashtag = () => {
  if (process.client) {
    window.history.replaceState(null, null, window.location.href.split('#')[0])
  }
}

export const removeUrlParamsHashtag = (key) => {
  if (process.client) {
    if (!key) {
      window.location.hash = ''
    } else {
      const urlParams = getUrlParamsHashtag()
      if (urlParams[key] !== undefined) {
        delete urlParams[key]
      }
      let hash = ''
      Object.entries(urlParams).forEach(([key, val]) => {
        hash += `${key}=${val}&`
      })
      window.location.hash = hash.slice(0, -1)
    }
  }
}

export const setUrlParams = (params) => {
  if (process.client) {
    if (params !== null) {
      let urlParams = ''
      Object.entries(params).forEach(([key, value], index) => {
        if (index === 0) {
          urlParams += '?'
        } else {
          urlParams += '&'
        }
        urlParams += `${key}=${value}`
      })
      window.history.pushState(null, null, urlParams)
    }
  }
}

export const setUrlParamsHashtag = (params) => {
  if (process.client) {
    if (params !== null) {
      let urlParams = ''
      Object.entries(params).forEach(([key, value], index) => {
        if (index === 0) {
          urlParams += '#'
        } else {
          urlParams += '&'
        }
        urlParams += `${key}=${value}`
      })
      window.history.pushState(null, null, urlParams)
    }
  }
}

export const getYoutubeIdFromUrl = (url) => {
  let id = ''
  // eslint-disable-next-line no-useless-escape
  const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  const match = url.match(regExp)
  if (match && match[2].length === 11) {
    id = match[2]
  } else {
    id = ''
  }

  return id
}

export const getVimeoIdFromUrl = (url) => {
  let id = ''
  // eslint-disable-next-line no-useless-escape
  const regExp =
    /^.*(vimeo\.com\/)((channels\/[A-z]+\/)|(groups\/[A-z]+\/videos\/))?([0-9]+)/
  const match = url.match(regExp)
  if (match && match[5].length > 0) {
    id = match[5]
  } else {
    id = ''
  }

  return id
}
