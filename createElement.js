import isArray from './utils/isArray'
import isString from './utils/isString'
import isSVG from './utils/isSVG'
import _createElement from './utils/createElement'
import setAttributes from './utils/setAttributes'

/**
 * 创建 SVG 图标 DOM 元素
 * ========================================================================
 * @method createElement
 * @param {String} name - （必须）当前图标集中的图标名称或者完整的 SVG 图标字符串
 * @param {Object} [options] - （可选）配置参数对象
 * @param {Number|Array} [options.size] - （可选）图标大小，Number 类型高和宽相等，Array 类型可以单独设置高和宽
 * @param {String} [options.color] - （可选）图标颜色
 * @param {String} [options.iconSet] - （可选）图标集的名称
 * @param {Object} [options.attrs] - （可选）给创建的 icons 元素设置的 HTML 属性对象
 * @returns {HTMLElement}
 */
const createElement = (name, options = {}) => {
  const ICON = 'ijs-icon'
  const size = options.size || 0
  const isArraySize = isArray(size)
  const color = options.color || ''
  const iconSet = options.iconSet || ''
  const width = isArraySize ? size[0] : size
  const height = isArraySize ? size[1] : size
  const defaultRules = size ? `width:${width}px;height:${height}px;` : ''
  const cssRules = color ? defaultRules + `color:${color}` : defaultRules
  const attrs = options.attrs || {}
  let binds = ''
  let svg = ''
  let $icon
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
    svg = `<svg><use ${binds}></use></svg>`
  }

  attrs.innerHTML = svg

  if (attrs.className) {
    attrs.className = `${ICON} ${attrs.className}`
  } else {
    attrs.className = `${ICON}`
  }

  $icon = _createElement('i', attrs)

  $svg = $icon.querySelector('svg')
  setAttributes($svg, {
    'aria-hidden': true,
    xmlns: 'http://www.w3.org/2000/svg',
    class: 'ijs-icon__svg',
    width: 200,
    height: 200,
    style: cssRules
  })

  return $icon
}

export default createElement
