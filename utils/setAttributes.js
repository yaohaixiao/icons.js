import isObject from './isObject'
import hasOwn from './hasOwn'
import setAttribute from './setAttribute'

const setAttributes = (el, attrs) => {
  if (!el || !isObject(attrs)) {
    return false
  }

  Object.keys(attrs).forEach((attr) => {
    const value = attrs[attr]
    if (hasOwn(attrs, attr)) {
      setAttribute(el, attr, value)
    }
  })
}

export default setAttributes
