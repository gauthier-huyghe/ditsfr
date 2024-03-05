import Vue from 'vue'
import VueNotifications from 'vue-notification'

Vue.use(VueNotifications, {
  name: 'notification',
})

export default (context, inject) => {
  inject('notify', (object) => {
    Vue.notification({
      ...object,
      speed: 500,
      duration: object.type === 'error' ? 20000 : 10000,
      class: 'notification',
    })
  })
}
