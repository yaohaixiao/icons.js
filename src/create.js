import isArray from './utils/isArray'

/**
 * 创建 SVG 图标 DOM 元素
 * ========================================================================
 * @method create
 * @param {String} name
 * @param {Object} [options]
 * @param {Number} [options.size]
 * @param {String} [options.color]
 * @param {String} [options.iconSet]
 * @returns {HTMLElement}
 */
const create = (name, options) => {
  const size = options.size || 0
  const color = options.color || ''
  const iconSet = options.iconSet || ''
  const binds = iconSet
    ? `xlink:href="#${iconSet}-icon-${name}"`
    : `xlink:href="#icon-${name}"`
  const width = isArray(size) ? size[0] : size
  const height = isArray(size) ? size[1] : size
  const defaultRules = size ? `width:${width}px;height:${height}px;` : ''
  const cssRules = color ? defaultRules + `color:${color}` : defaultRules
  const svg =
    `<svg aria-hidden="true" class="icons-icon__svg" style="${cssRules}">` +
    `<use ${binds}></use>` +
    `</svg>`
  const $icon = document.createElement('i')

  $icon.className = 'icons-icon'
  $icon.innerHTML = svg

  return $icon
}

export default create
