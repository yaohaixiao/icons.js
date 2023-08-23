import isElement from './utils/isElement'
import isString from './utils/isString'
import createElement from './createElement'

/**
 * 将通过 createElement() 方法创建的图标添加到指定的 DOM 元素中
 * =============================================================
 * @method appendTo
 * @param {HTMLElement|String} el
 * @param {String} name
 * @param {Object} [options]
 */
const appendTo = (el, name, options) => {
  let $el

  if (isElement(el)) {
    $el = el
  } else {
    if (isString(el)) {
      $el = document.querySelector(el) || document.getElementById(el)
    }
  }

  if (!$el || !name) {
    return false
  }

  $el.appendChild(createElement(name, options))
}

export default appendTo
