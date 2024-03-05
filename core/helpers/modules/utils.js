import { isEmpty as isEmptyLodash, isString, isObject, isArray } from 'lodash'

export const isEmpty = (value) => {
  return isString(value)
    ? value.length === 0
    : isObject(value) || isArray(value)
    ? isEmptyLodash(value)
    : undefined
}
