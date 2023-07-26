import isArray from './utils/isArray'
import isString from './utils/isString'
import SYMBOLS from './symbols'

/**
 * @method add
 * @param {Array|String} symbols
 */
const add = (symbols) => {
  if (isArray(symbols) && symbols.length > 0) {
    symbols.forEach((symbol) => {
      if (SYMBOLS.indexOf(symbol) === -1 && isString(symbol)) {
        SYMBOLS.push(symbol)
      }
    })
  } else {
    if (isString(symbols)) {
      SYMBOLS.push(symbols)
    }
  }
}

export default add
