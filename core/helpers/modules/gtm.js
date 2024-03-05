export const getPageviewEvent = (params) => ({
  event: 'pageview',
  pageName: params.page_name || '',
  language: params.language || 'en',
  path: params.path || '/',
  template_responsive: params.responsive || '',
})
