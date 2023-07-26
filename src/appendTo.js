import isElement from './utils/isElement'
import isString from './utils/isString'
import create from './create'

/**
 *
 * @method appendTo
 * @param {HTMLElement|String} el
 * @param {String} name
 * @param {Object} [options]
 */
const appendTo = (el, name, options) => {
  const $icon = create(name, options)
  let $el

  if (isElement(el)) {
    $el = el
  } else {
    if (isString(el)) {
      $el = document.querySelector(el) || document.getElementById(el)
    }
  }

  if (!$el) {
    return false
  }

  $el.appendChild($icon)
}

export default appendTo
