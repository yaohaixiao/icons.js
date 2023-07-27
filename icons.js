import paint from './paint'
import createElement from './createElement'
import appendTo from './appendTo'
import getSymbols from './getSymbols'
import add from './add'
import remove from './remove'
import clear from './clear'

const icons = {
  paint(symbols = []) {
    paint(symbols)
    return this
  },

  createElement(name, options) {
    createElement(name, options)
    return this
  },

  appendTo(el, name, options) {
    appendTo(el, name, options)
    return this
  },

  symbols(name, iconSet = 'icon') {
    return getSymbols(name, iconSet)
  },

  add(symbol) {
    add(symbol)
    return this
  },

  remove(name) {
    remove(name)
    return this
  },

  clear() {
    clear()
    return this
  }
}

export default icons
