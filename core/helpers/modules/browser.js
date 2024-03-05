export const getBrowser = () => {
  let browser = null
  if (process.client) {
    const winNav = window.navigator
    const uAgent = winNav.userAgent.toLowerCase()
    const isChromium = window.chrome
    const vendorName = winNav.vendor
    const isOpera = typeof window.opr !== 'undefined'
    const isIEedge = /edge/i.test(uAgent)
    const isIOSChrome = uAgent.match('crios')

    if (isIOSChrome) {
      // is Google Chrome on IOS
      browser = 'chromeIos'
    } else if (
      isChromium !== null &&
      typeof isChromium !== 'undefined' &&
      vendorName === 'Google Inc.' &&
      isOpera === false &&
      isIEedge === false
    ) {
      // is Google Chrome
      browser = 'chrome'
    } else {
      // not Google Chrome
    }
    if (isOpera) {
      browser = 'opera'
    }
    if (/firefox/i.test(uAgent)) {
      browser = 'firefox'
    }
    if (/^((?!chrome|android).)*safari/i.test(uAgent)) {
      browser = 'safari'
    }
    if (/msie/i.test(uAgent) || /trident\//i.test(uAgent)) {
      browser = 'ie'
    }
    if (/edge/i.test(uAgent)) {
      // old Edge
      browser = 'edge'
    }
    if (/edg/i.test(uAgent)) {
      // Edge Chromium
      browser = 'edge'
    }
  }
  return browser
}

export const getNavigatorLanguage = () => {
  if (navigator.language.includes('-')) {
    return navigator.language
      .slice(0, navigator.language.indexOf('-'))
      .toLowerCase()
  }
  return navigator.language.toLowerCase()
}

export const lockScroll = () => {
  document.body.style.top = `-${window.scrollY}px`
  document.body.style.position = 'fixed'
}

export const unlockScroll = () => {
  const scrollY = document.body.style.top
  document.body.style.position = ''
  document.body.style.top = ''
  window.scrollTo(0, parseInt(scrollY || '0') * -1)
}
