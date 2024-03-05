export const getCSSVar = (name) => {
  const root = document.documentElement
  return getComputedStyle(root).getPropertyValue(name)
}

export const setCSSVar = (name, value) => {
  const root = document.documentElement
  return root.style.setProperty(name, value)
}
