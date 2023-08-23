import isArray from './utils/isArray'
import isString from './utils/isString'
import isSVG from './utils/isSVG'

/**
 * 创建 SVG 图标 DOM 元素
 * ========================================================================
 * @method createElement
 * @param {String} name - （必须）当前图标集中的图标名称或者完整的 SVG 图标字符串
 * @param {Object} [options] - （可选）配置参数对象
 * @param {Number|Array} [options.size] - （可选）图标大小，Number 类型高和宽相等，Array 类型可以单独设置高和宽
 * @param {String} [options.color] - （可选）图标颜色
 * @param {String} [options.iconSet] - （可选）图标集的名称
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
  let $svg

  if (!isString(name)) {
    return null
  }

  if (isSVG(name)) {
    svg = name
  } else {
    binds =
      iconSet && iconSet !== 'icon'
        ? `xlink:href="#${iconSet}-icon-${name}"`
        : `xlink:href="#icon-${name}"`
    svg =
      `<svg aria-hidden="true" class="ijs-icon__svg" style="${cssRules}">` +
      `<use ${binds}></use>` +
      `</svg>`
  }

  $icon.className = 'ijs-icon'
  $icon.innerHTML = svg

  if (isSVG(name)) {
    $svg = $icon.querySelector('svg')
    $svg.setAttribute('aria-hidden', 'true')
    $svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg')
    $svg.setAttribute('class', 'ijs-icon__svg')
    $svg.setAttribute('width', '200')
    $svg.setAttribute('height', '200')
    $svg.style.cssText = cssRules
  }

  return $icon
}

export default createElement
