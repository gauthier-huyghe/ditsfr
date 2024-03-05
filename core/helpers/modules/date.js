import {
  parseISO,
  fromUnixTime,
  format,
  isPast,
  isBefore,
  differenceInDays,
  differenceInYears,
  addYears,
} from 'date-fns'
import { DATE_FNS_LOCALES } from '@constants'

const locales = DATE_FNS_LOCALES

export const getAge = (date, precision = 2) => {
  const today = new Date()
  const birthday = new Date(date)
  return (differenceInDays(today, birthday) / 365).toFixed(precision)
}

export const aYearFromNow = () => {
  return addYears(new Date(), 1)
}

export const isAdult = (date, adulthood = 18) => {
  const today = new Date()
  const birthday = new Date(date)
  const diff = differenceInYears(today, birthday)
  return diff >= adulthood
}

export const resolveDateFormat = (date) => {
  // DATE COMES IN TIMESTAMP FROM ALGOLIA AND IN ISO8601 FROM JSON
  if (!date) return ''
  if (typeof date === 'number') {
    return new Date(date * 1000)
  }
  return date
}

export const formatTimestampToLocaleDate = (date, formatStr, locale) => {
  return format(fromUnixTime(date), formatStr, {
    locale: locales[locale] || locales[window.__localeId__],
  })
}

export const formatISOToLocaleDate = (date, formatStr, locale) => {
  return format(parseISO(date), formatStr, {
    locale: locales[locale] || locales[window.__localeId__],
  })
}

export const formatDate = (val, pattern, locale = 'fr') => {
  if (!val) return ''
  const date = new Date(val)
  if (!(date instanceof Date && !isNaN(date))) return val
  return format(date, pattern, {
    locale: locales[locale] || locales[window.__localeId__],
  })
}

export const humanDate = (val, locale) => {
  return formatDate(val, 'd MMMM Y', locale)
}

export const isDatePast = (date) => {
  return isPast(parseISO(date))
}

export const isDateBefore = (date, dateToCompare) => {
  return isBefore(parseISO(date), parseISO(dateToCompare))
}

export const isHourBefore = (date, hour, hourToCompare, limit) => {
  const limitHours = parseInt(limit, 10)
  const dateBase = date ? parseISO(date) : new Date()
  dateBase.setHours(
    parseInt(hour.split(':')[0], 10),
    parseInt(hour.split(':')[1], 10),
    0
  )
  const dateToCompare = date ? parseISO(date) : new Date()
  dateToCompare.setHours(
    parseInt(hourToCompare.split(':')[0], 10) + limitHours,
    parseInt(hourToCompare.split(':')[1], 10),
    0
  )
  return isBefore(dateBase, dateToCompare)
}
