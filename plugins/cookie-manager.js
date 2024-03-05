import CookieManager from '~/core/CookieManager'

export default ({ app }, inject) => {
  const cookieManager = new CookieManager(app.router)

  // 👇 ADD HERE COOKIE ACTIVATION DEACTIVATION ACTIONS 👇
  // YOU CAN PLACE THE INIT FUNCTION IN ANY VUE COMPONENT
  // cookieManager.init({
  //   functional: {
  //     activate: () => {
  //       console.log('Activated functionnal cookies')
  //     },
  //     deactivate: () => {
  //       console.log('Turned functional cookies off')
  //     },
  //   },
  //   tracking: {
  //     activate: () => {
  //       console.log('Activated tracking cookies')
  //       this.$initGtm()
  //     },
  //     deactivate: () => {
  //       console.log('Turned tracking cookies off')
  //     },
  //   },
  // })

  inject('cookieManager', cookieManager)
}
