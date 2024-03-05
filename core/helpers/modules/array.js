import { indexOf, without } from 'lodash'

export const dynamicSort = (property) => {
  let sortOrder = 1

  if (property[0] === '-') {
    sortOrder = -1
    property = property.substr(1)
  }

  return function (a, b) {
    if (sortOrder === -1) {
      return b[property].localeCompare(a[property])
    } else {
      return a[property].localeCompare(b[property])
    }
  }
}

export const sortAlphabetically = (array, property) => {
  return array.sort(dynamicSort(property))
}

export const toggleItem = (collection, item) => {
  const index = indexOf(collection, item)
  if (index !== -1) {
    return without(collection, item)
  }
  return [...collection, item]
}

export const insertItemAtIndex = (array, item, index) => {
  return [...array.slice(0, index), item, ...array.slice(index)]
}

export const insertItemsAtIndexes = (array, items, indexes) => {
  let rtnArray = [...array]
  items.forEach((item, i) => {
    rtnArray = insertItemAtIndex(rtnArray, item, indexes[i])
  })
  return rtnArray
}

export const arrayShuffle = (array) => {
  let currentIndex = array.length
  let randomIndex

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex--

    // And swap it with the current element.
    ;[array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ]
  }

  return array
}

export const groupBy = (array, key) => {
  return array.reduce((acc, current) => {
    ;(acc[current[key]] = acc[current[key]] || []).push(current)
    return acc
  }, {})
}

export const longestLength = (array) => {
  return Math.max(...array.map((i) => i.length))
}
