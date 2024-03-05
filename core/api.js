import { makePostBody } from '@unanim/helpers'

export default ({ error, app, strategy = 'ajax' }) => {
  if (!strategy || !['ajax', 'static'].includes(strategy))
    return new Error('The api strategy option is either "ajax" or "static"')
  if (!error) return new Error('This plugins needs Nuxt error')
  // TODO use vanila Error instead of nuxt's

  const calls = {
    getGlobals() {
      const path = `/globals`
      return makeGet(path, 'globals data')
    },
    getCommon(locale) {
      const path = `/${locale}/common`
      return makeGet(path, 'common data')
    },
    getTranslations(locale) {
      const path = `/${locale}/translations`
      return makeGet(path, 'translations')
    },
    getPage(locale, slug) {
      const path = `/${locale}/page/${slug}`
      return makeGet(path, 'page data', false)
    },
    post(endpoint, body) {
      const bodyDatas = makePostBody(body)
      return post(endpoint, bodyDatas)
    },
  }

  const makeGet = async (path, type, isPhp) => {
    // console.log('Making static get call =>', path)
    if (isPhp) {
      return await handlers.ajax(path, type, isPhp)
    } else {
      return await handlers[strategy](path, type)
    }
  }

  const post = async (endpoint, body) => {
    // const csrfToken =
    //   document.head.querySelector('meta[name="csrf-token"]')?.content ||
    //   'csrfToken'
    try {
      const res = await fetch(endpoint, {
        method: process.env.NUXT_ENV_API === '/json/' ? 'GET' : 'POST',
        headers: new Headers({
          // 'X-Requested-With': 'XMLHttpRequest',
          // 'X-CSRF-TOKEN': csrfToken,
          Accept: 'application/json',
        }),
        body: process.env.NUXT_ENV_API === '/json/' ? null : body,
      })
      if ([204, 205].includes(res.status)) {
        return true
      } else if ([200, 201, 202, 203].includes(res.status)) {
        return await res.json()
      } else {
        app.$notify({
          type: 'error',
          title: 'Oops! There was a problem posting your data',
          text: res.statusText,
        })
        // return error({
        //   title: `Oops! There was a problem posting your data`,
        //   statusCode: res.status,
        //   message: res.statusText,
        // })
      }
    } catch (e) {
      app.$notify({
        type: 'error',
        title: 'Oops! There was a problem posting your data',
        text: e,
      })
      // return error({
      //   title: `Oops! There was a problem posting your data`,
      //   message: e,
      // })
    }
  }

  const handlers = {
    // AJAX
    ajax: async (path, type, isPhp) => {
      try {
        path = `${
          isPhp
            ? 'https://ditsfr2024.lndo.site/static/json'
            : process.env.NUXT_ENV_API
        }${path}.${isPhp ? 'php' : 'json'}`
        const data = await fetch(path)
        if (data.status === 200) {
          const response = await data.json()
          console.log()
          return response
        } else {
          return error(`Error fetching ${type}, ${data.statusText}`)
        }
      } catch (e) {
        return error(e)
      }
    },

    // STATIC
    static: async (path, type) => {
      try {
        const data = await import(`~/static/json${path}.json`)
        return data.default
      } catch (e) {
        return error(e)
      }
    },
  }

  return calls
}
