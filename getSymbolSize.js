import isString from './utils/isString'
import getSymbol from './getSymbol'

const getSymbolSize = (name, iconSet = 'icon') => {
  const pattern = /<symbol(([\s\S])*?)>(.*?)<\/symbol>/
  const inner = getSymbol(name, iconSet)
  let size = []
  let symbol

  if (!isString(name)) {
    return null
  }

  symbol = inner || (pattern.test(name) ? name : '')

  if (symbol) {
    size = symbol.match(/viewBox="0 0 (.*?)"/)[1].split(' ')
  } else {
    return null
  }

  return {
    width: parseInt(size[0], 10),
    height: parseInt(size[1], 10)
  }
}

export default getSymbolSize
