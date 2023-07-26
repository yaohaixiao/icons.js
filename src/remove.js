import isString from './utils/isString'
import getSymbol from './getSymbol'
import getSymbols from './getSymbols'
import SYMBOLS from './symbols'

const remove = (name, iconSet = 'icon') => {
  const symbols = getSymbols()
  const target = getSymbol(name, iconSet)
  let index = -1

  if (!isString(name)) {
    return false
  }

  index = symbols.indexOf(target)

  if (index > -1) {
    SYMBOLS.splice(index, 1)
  }
}

export default remove
