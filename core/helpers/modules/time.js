export const setFrameTimeout = (fn, delay) => {
  const start = new Date().getTime()
  const handle = {}

  function loop() {
    const current = new Date().getTime()
    const delta = current - start
    if (delta >= delay) {
      fn.call()
    } else {
      handle.value = window.requestAnimationFrame(loop)
    }
  }
  handle.value = window.requestAnimationFrame(loop)
  return handle
}

export const clearFrameTimeout = (handle) => {
  window.cancelAnimationFrame(handle.value)
}

export const setFrameInterval = (fn, delay) => {
  let start = new Date().getTime()
  const handle = {}

  function loop() {
    const current = new Date().getTime()
    const delta = current - start

    if (delta >= delay) {
      fn.call()
      start = new Date().getTime()
    }

    handle.value = window.requestAnimationFrame(loop)
  }

  handle.value = window.requestAnimationFrame(loop)
  return handle
}

export const clearFrameInterval = (handle) => {
  window.cancelAnimationFrame(handle.value)
}

export const debounce = (func, wait, immediate = false) => {
  let timeout
  return function () {
    const context = this
    const args = arguments
    const later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}

export const wait = (time, callback) => {
  const timeout = setFrameTimeout(() => {
    clearFrameTimeout(timeout)
    callback()
  }, time)
}
