export const getRect = (el) => {
  const rect = el.getBoundingClientRect()
  return rect
}

export const getDocumentHeight = () => {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  )
}

export const getMousePos = (e) => {
  let posx = 0
  let posy = 0
  if (process.client) {
    if (!e) e = window.event
    if (e.pageX || e.pageY) {
      posx = e.pageX
      posy = e.pageY
    } else if (e.clientX || e.clientY) {
      posx =
        e.clientX +
        document.body.scrollLeft +
        document.documentElement.scrollLeft
      posy =
        e.clientY + document.body.scrollTop + document.documentElement.scrollTop
    }
  }
  return { x: posx, y: posy }
}

export const getPosition = (element) => {
  let top = 0
  let left = 0

  if (element) {
    do {
      top += element.offsetTop || 0
      left += element.offsetLeft || 0
      element = element.offsetParent
    } while (element)
  }

  return { top, left }
}

export const getSize = (element) => {
  return {
    width: element.offsetWidth,
    height: element.offsetHeight,
  }
}

export const getScrollTop = (container = window) => {
  if (process.client) {
    if (container !== window) {
      return Math.max(container.scrollTop)
    }
    return Math.max(document.body.scrollTop, document.documentElement.scrollTop)
  }
}

export const copyToClipBoard = (text) => {
  const currentScrollTop = Math.max(
    document.body.scrollTop,
    document.documentElement.scrollTop
  )

  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text)
    document.body.scrollTop = document.documentElement.scrollTop =
      currentScrollTop
    return
  }
  navigator.clipboard.writeText(text).then(
    () => {
      console.log('Async: Copying to clipboard was successful!')
    },
    (err) => {
      console.error('Async: Could not copy text: ', err)
    }
  )

  document.body.scrollTop = document.documentElement.scrollTop =
    currentScrollTop
}

const fallbackCopyTextToClipboard = (text) => {
  const textArea = document.createElement('textarea')
  textArea.value = text
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()

  try {
    const successful = document.execCommand('copy')
    const msg = successful ? 'successful' : 'unsuccessful'
    console.log('Fallback: Copying text command was ' + msg)
  } catch (err) {
    console.error('Fallback: Oops, unable to copy', err)
  }

  document.body.removeChild(textArea)
}
