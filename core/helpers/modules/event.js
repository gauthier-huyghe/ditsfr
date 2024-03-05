export const addListeners = (el, names, fn, options = true) => {
  if (el) {
    names.split(' ').forEach((e) => el.addEventListener(e, fn, options))
  }
}

export const removeListeners = (el, names, fn, options = true) => {
  if (el) {
    names.split(' ').forEach((e) => el.removeEventListener(e, fn, options))
  }
}

export const dispatchEvent = (el, name, obj = {}) => {
  if (el) {
    el.dispatchEvent(new window.CustomEvent(name, { detail: obj }))
  }
}
