export const resolveHead = (
  { title = '', description = '', image = '' },
  fullPath
) => {
  return {
    title,
    meta: [
      {
        hid: 'facebook-domain-verification',
        name: 'facebook-domain-verification',
        content: '3kha0gyw1icp565r5m3slr25xgz9ie',
      },
      // Search Engine
      {
        hid: 'title',
        name: 'title',
        content: title,
      },
      {
        hid: 'description',
        name: 'description',
        content: description,
      },
      {
        hid: 'image',
        name: 'image',
        content: image,
      },
      // Schema.org for Google
      {
        itemprop: 'name',
        content: title,
      },
      {
        itemprop: 'description',
        content: description,
      },
      {
        itemprop: 'image',
        content: image,
      },
      // Twitter
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary',
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: title,
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: description,
      },
      {
        hid: 'og:title',
        name: 'og:title',
        property: 'og:title',
        content: title,
      },
      {
        hid: 'og:description',
        name: 'og:description',
        property: 'og:description',
        content: description,
      },
      {
        hid: 'og:image',
        name: 'og:image',
        property: 'og:image',
        content: image,
      },
      {
        hid: 'og:url',
        name: 'og:url',
        property: 'og:url',
        content: fullPath,
      },
      {
        hid: 'og:site_name',
        name: 'og:site_name',
        property: 'og:site_name',
        content: 'Dinner in the sky France',
      },
      {
        hid: 'og:type',
        name: 'og:type',
        property: 'og:type',
        content: 'website',
      },
    ],
    link: [
      {
        rel: 'shortcut icon',
        type: 'image/x-icon',
        sizes: '16x16 32x32',
        href: '/favicon.ico',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon-16x16.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon-32x32.png',
      },
      // {
      //   rel: 'icon',
      //   type: 'image/png',
      //   sizes: '192x192',
      //   href: '/android-chrome-192x192.png',
      // },
      // {
      //   rel: 'icon',
      //   type: 'image/png',
      //   sizes: '512x512',
      //   href: '/android-chrome-256x256.png',
      // },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        sizes: '180x180',
        href: '/apple-touch-icon.png',
      },
      // {
      //   rel: 'manifest',
      //   href: '/site.webmanifest',
      // },
      {
        rel: 'mask-icon',
        color: '#5bbad5',
        href: '/safari-pinned-tab.svg',
      },
    ],
  }
}
