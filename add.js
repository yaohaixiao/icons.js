import isArray from './utils/isArray'
import isString from './utils/isString'

import SYMBOLS from './symbols'

/**
 * 向图标集中添加单个或者 symbol
 * =============================================================
 * @method add
 * @param {Array|String} symbols - 单个或者多个 svg 图标 symbol
 * @return {Boolean}
 */
const add = (symbols) => {
  if (!symbols) {
    return false
  }

  if (isArray(symbols) && symbols.length > 0) {
    symbols.forEach((symbol) => {
      /* istanbul ignore else */
      if (SYMBOLS.indexOf(symbol) === -1 && isString(symbol)) {
        SYMBOLS.push(symbol)
      }
    })
  } else {
    /* istanbul ignore else */
    if (isString(symbols)) {
      SYMBOLS.push(symbols)
    }
  }
}

export default add
