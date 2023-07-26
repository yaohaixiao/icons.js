import paint from './paint'
import create from './create'
import appendTo from './appendTo'
import getSymbols from './getSymbols'
import add from './add'
import remove from './remove'

const icons = {
  paint(symbols = []) {
    paint(symbols)

    return this
  },

  create(name, options) {
    create(name, options)

    return this
  },

  appendTo(el, name, options) {
    appendTo(el, name, options)
    return this
  },

  add(symbol) {
    add(symbol)

    return this
  },

  remove(name) {
    remove(name)
    return this
  },

  symbols(name, iconSet = 'icon') {
    return getSymbols(name, iconSet)
  }
}

export default icons
