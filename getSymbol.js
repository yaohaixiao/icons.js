import SYMBOLS from './symbols'

/**
 * @method getSymbol
 * @param {String} name
 * @param {String} [iconSet]
 * @returns {String}
 */
const getSymbol = (name, iconSet = 'icon') => {
  const patternName = /id="(.*?)"/
  const patternSet = /^(\w+)-/
  const symbols = SYMBOLS

  return symbols.find((symbol) => {
    const names = patternName.exec(symbol)
    const fullName = names[1]
    const sets = patternSet.exec(fullName)
    const setName = sets[1]
    const contains = fullName.indexOf(name) > -1

    return setName === iconSet && contains
  })
}

export default getSymbol
