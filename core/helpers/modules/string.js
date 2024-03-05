export const hyphenate = (string) => {
  return string
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/,/g, '-')
    .replace(/\s+/g, '-')
    .toLowerCase()
}

export const generateGuid = () =>
  Math.floor((1 + Math.random()) * 0x100000).toString(16)

export const truncateString = (str, num) => {
  if (str.length <= num) {
    return str
  }
  return str.slice(0, num) + '...'
}

export const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export const snakeToPascal = (string) => {
  return string
    .split('_')
    .map((str) => {
      return capitalize(str.split('/').map(capitalize).join('/'))
    })
    .join('')
}
