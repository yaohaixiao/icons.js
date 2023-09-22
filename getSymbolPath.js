import isString from './utils/isString'
import getSymbol from './getSymbol'

const getSymbolPath = (name, iconSet = 'icon') => {
  const pattern = /<symbol(([\s\S])*?)>(.*?)<\/symbol>/
  const inner = getSymbol(name, iconSet)
  let matches = []
  let symbol = ''

  if (!isString(name)) {
    return ''
  }

  symbol = inner || (pattern.test(name) ? name : '')

  if (symbol) {
    matches = symbol.match(pattern)
  }

  return symbol ? matches[3] : ''
}

export default getSymbolPath
