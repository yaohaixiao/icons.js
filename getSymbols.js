import isString from './utils/isString'
import getSymbol from './getSymbol'
import SYMBOLS from './symbols'

/**
 * 通过名称获取图标集中的 symbol 或者全部的 symbol
 * ========================================================================
 * @method getSymbols
 * @param {String} [name]
 * @param {String} [iconSet]
 * @returns {string[]|*}
 */
const getSymbols = (name, iconSet = 'icon') => {
  if (isString(name)) {
    return getSymbol(name, iconSet)
  }

  return [...SYMBOLS]
}

export default getSymbols
