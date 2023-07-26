import getSymbols from './getSymbols'

/**
 * @method getSymbol
 * @param {String} name
 * @param {String} [iconSet]
 * @returns {String}
 */
const getSymbol = (name, iconSet = 'icon') => {
  const patternName = /id="(.*?)"/
  const patternSet = /^(\w+)-/
  const symbols = getSymbols()
  const results = symbols.filter((symbol) => {
    const names = patternName.exec(symbol)
    const fullName = names[1] || ''
    const sets = patternSet.exec(fullName)
    const setName = sets[0] || ''
    const contains = fullName.indexOf(name) > -1

    return iconSet ? setName === iconSet && contains : contains
  })

  return results.length > 0 ? results[0] : ''
}

export default getSymbol
