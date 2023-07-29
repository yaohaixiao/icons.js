import isArray from './utils/isArray'
import isString from './utils/isString'

/**
 * 创建 SVG 图标 DOM 元素
 * ========================================================================
 * @method createElement
 * @param {String} name
 * @param {Object} [options]
 * @param {Number|Array} [options.size]
 * @param {String} [options.color]
 * @param {String} [options.iconSet]
 * @returns {HTMLElement}
 */
const createElement = (name, options = {}) => {
  const size = options.size || 0
  const color = options.color || ''
  const iconSet = options.iconSet || ''
  const width = isArray(size) ? size[0] : size
  const height = isArray(size) ? size[1] : size
  const defaultRules = size ? `width:${width}px;height:${height}px;` : ''
  const cssRules = color ? defaultRules + `color:${color}` : defaultRules
  const $icon = document.createElement('i')
  let binds = ''
  let svg = ''

  if (!isString(name)) {
    return null
  }

  binds =
    iconSet && iconSet !== 'icon'
      ? `xlink:href="#${iconSet}-icon-${name}"`
      : `xlink:href="#icon-${name}"`
  svg =
    `<svg aria-hidden="true" class="ijs-icon__svg" style="${cssRules}">` +
    `<use ${binds}></use>` +
    `</svg>`

  $icon.className = 'ijs-icon'
  $icon.innerHTML = svg

  return $icon
}

export default createElement
