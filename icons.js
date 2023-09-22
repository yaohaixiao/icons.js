import paint from './paint'
import createElement from './createElement'
import icon from './icon'
import appendTo from './appendTo'
import add from './add'
import remove from './remove'
import clear from './clear'
import getSymbolPath from './getSymbolPath'
import getSymbolSize from './getSymbolSize'
import getSymbolName from './getSymbolName'
import getSymbols from './getSymbols'
import count from './count'

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
  },

  getSymbol(name, iconSet = 'icon') {
    return getSymbols(name, iconSet)
  },

  getSymbolName(symbol, isFull = false) {
    return getSymbolName(symbol, isFull)
  },

  getSymbolPath(name, iconSet = 'icon') {
    return getSymbolPath(name, iconSet)
  },

  getSymbolSize(name, iconSet = 'icon') {
    return getSymbolSize(name, iconSet)
  },

  symbols(name, iconSet = 'icon') {
    return getSymbols(name, iconSet)
  },

  count() {
    return count()
  }
}

export default icons
