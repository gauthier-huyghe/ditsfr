export const getCookie = (name) => {
  const cookies = getAllCookies()
  const cookie = Object.prototype.hasOwnProperty.call(cookies, name)
    ? cookies[name]
    : null
  return cookie
}

export const getAllCookies = () => {
  const cookies = {}
  const pairs = document.cookie.split(';')

  for (let i = 0; i < pairs.length; i += 1) {
    const pair = pairs[i].split('=')
    cookies[pair[0].replace(/ /g, '')] = decodeURI(pair[1])
  }
  return cookies
}

export const createCookie = (name, value, days, domain) => {
  const date = new Date()
  let expires
  if (days) {
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
    expires = `; expires= ${date.toGMTString()}`
  } else {
    expires = ''
  }
  document.cookie = `${name}=${value}${expires};path=/${
    domain ? ';domain=' + domain : ''
  }`
}

export const deleteCookie = (name) => {
  if (getCookie(name)) {
    createCookie(name, '', -1, window.location.hostname ?? null)
  }
}
