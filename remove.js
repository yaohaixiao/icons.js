import isString from './utils/isString'
import getSymbol from './getSymbol'
import getSymbols from './getSymbols'
import SYMBOLS from './symbols'

/**
 * 通过名称移除图标集中的 symbol
 * ========================================================================
 * @method remove
 * @param {String} name - 图标名称
 * @param {String} [iconSet] - （可选）图标集名称，默认值：icon
 * @return {boolean}
 */
const remove = (name, iconSet = 'icon') => {
  const $icons = document.querySelector('#ijs-icons')
  const symbols = getSymbols()
  const target = getSymbol(name, iconSet)
  let index = -1
  let $symbol
  let selector

  if (!isString(name)) {
    return false
  }

  index = symbols.indexOf(target)

  /* istanbul ignore else */
  if (index > -1) {
    SYMBOLS.splice(index, 1)
  }

  if ($icons) {
    selector = `#${iconSet === 'icon' ? 'icon' : iconSet + '-icon'}-${name}`
    $symbol = $icons.querySelector(selector)
    $icons.removeChild($symbol)
  }
}

export default remove
