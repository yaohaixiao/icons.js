import isString from './utils/isString'

const getSymbolName = (symbol, isFull = false) => {
  const pattern = isFull ? /id="(.*?)"/ : /id="icon-(.*?)"/

  if (!isString(symbol)) {
    return ''
  }

  return symbol.match(pattern)[1]
}

export default getSymbolName
