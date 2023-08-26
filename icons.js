import paint from './paint'
import createElement from './createElement'
import icon from './icon'
import appendTo from './appendTo'
import getSymbols from './getSymbols'
import count from './count'
import add from './add'
import remove from './remove'
import clear from './clear'

const icons = {
  paint(symbols = []) {
    paint(symbols)
    return this
  },

  createElement(name, options) {
    return createElement(name, options)
  },

  icon(name, options) {
    return icon(name, options)
  },

  appendTo(el, name, options) {
    appendTo(el, name, options)
    return this
  },

  symbols(name, iconSet = 'icon') {
    return getSymbols(name, iconSet)
  },

  count() {
    return count()
  },

  add(symbol) {
    add(symbol)
    return this
  },

  remove(name, iconSet = 'icon') {
    remove(name, iconSet)
    return this
  },

  clear() {
    clear()
    return this
  }
}

export default icons
