import isArray from './utils/isArray'
import isString from './utils/isString'
import SYMBOLS from './symbols'
import APPENDS from './appends'

/**
 * @method add
 * @param {Array|String} symbols
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
        APPENDS.push(symbol)
        SYMBOLS.push(symbol)
      }
    })
  } else {
    /* istanbul ignore else */
    if (isString(symbols)) {
      APPENDS.push(symbols)
      SYMBOLS.push(symbols)
    }
  }
}

export default add
