export const checkValue = (str, max) => {
  if (str.charAt(0) !== '0' || str === '00') {
    let num = parseInt(str)
    if (isNaN(num) || num <= 0 || num > max) num = 1
    str =
      num > parseInt(max.toString().charAt(0)) && num.toString().length === 1
        ? '0' + num
        : num.toString()
  }
  return str
}

export const clamp = (number, min = 0, max = Infinity) => {
  return Math.min(Math.max(number, min), max)
}

export const formatToEuroNumber = (number, lang, numberDecimal = 0) => {
  let lg = 'fr-BE'
  if (lang === 'nl') {
    lg = 'nl-BE'
  } else if (lang === 'en') {
    lg = 'en-GB'
  }
  const formatter = new Intl.NumberFormat(lg, {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: numberDecimal,
  })
  return formatter.format(number)
}

export const getDifference = (na, nb) => Math.abs(Math.ceil(nb - na))

export const lerp = (a, b, n) => (1 - n) * a + n * b

export const map = (x, a, b, c, d) => ((x - a) * (d - c)) / (b - a) + c

export const mathRoundTwo = (number) =>
  Math.round((number + Number.EPSILON) * 100) / 100

export const padWithZeroes = (number, length) => {
  let string = '' + number
  while (string.length < length) {
    string = '0' + string
  }

  return string
}

export const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min)
}
