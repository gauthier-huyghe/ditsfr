/* eslint-disable camelcase */
import { wait } from '@unanim/helpers'
import { configure, extend, localize, setInteractionMode } from 'vee-validate'
import {
  required,
  email,
  double,
  confirmed,
  required_if,
  min,
} from 'vee-validate/dist/rules'
import { parsePhoneNumberFromString } from 'libphonenumber-js'

import nl from '../static/json/nl/vee-validate.json'
import en from '../static/json/en/vee-validate.json'
import fr from '../static/json/fr/vee-validate.json'

// Global Config
configure({
  useConstraintAttrs: false,
})

// Change Ux Interaction mode
setInteractionMode('aggressive')

// Install rules
extend('min', min)
extend('confirmed', confirmed)
extend('required', required)
extend('required_if', required_if)
extend('email', email)
extend('double', double)
extend('password', (value) => {
  return value.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)
})
extend('phone', (value) => {
  const phone = parsePhoneNumberFromString(value, 'BE')
  const valid = value && phone && phone.isValid()
  return valid
  // return value.match(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/)
})
extend('date', (value) => {
  return value.match(
    /^(?:0[1-9]|[12]\d|3[01])([/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/
  )
})

// Install messages

export default ({ app }) => {
  // Loading languages for Vee
  localize('nl', nl)
  localize('en', en)
  localize('fr', fr)

  // Localizing the app when user refresh or access a localized link
  localize(app.i18n.locale)

  // onLanguageSwitched called right after setting a new locale (and with a delay for animation)
  app.i18n.onLanguageSwitched = (oldLocale, newLocale) => {
    wait(500, () => {
      localize(newLocale)
    })
  }
}
