import { capitalize } from '@unanim/helpers'

// SET EVENTS PARAMS DEFAULTS HERE
const events = {
  // DONE
  pageview: {
    pageName: '',
    language: 'en',
    path: '/',
  },
}

export const pushEvent = (gtm, event, data) => {
  const params = Object.assign({}, events[event], data)
  if (!gtm) return new Error('Gtm not installed')
  gtm.push({
    event,
    ...params,
  })
}

export const resolvePageViewData = (route, locale, siteName) => {
  const chunks = [siteName]
  const slug = route.params?.slug || 'homepage'
  chunks.push(capitalize(slug))

  return {
    pageName: chunks.join(':'),
    language: locale,
    path: route.fullPath || '/',
  }
}

export default ({ $gtm, $config, app }, inject) => {
  inject('pushGtmEvent', (event, data) => pushEvent($gtm, event, data))
  inject('initGtm', () => {
    $gtm.init($config.gtm.id)

    // wait(2000, () => {
    //   const data = resolvePageViewData({}, app.i18n.locale, $config.siteName)
    //   console.log('init data', data)
    //   pushEvent($gtm, 'pageview', data)
    // })
  })

  if ($config.autoPushPageView) {
    app.router.afterEach((to, from, failure) => {
      if (failure) return
      const data = resolvePageViewData(to, app.i18n.locale, $config.siteName)
      // console.log('data', data)
      pushEvent($gtm, 'pageview', data)
    })
  }
}
