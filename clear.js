import DEFAULTS from './defaults'
import SYMBOLS from './symbols'
import APPENDS from './appends'

const clear = () => {
  const $icons = document.querySelector('#ijs-icons')

  if ($icons) {
    $icons.parentNode.removeChild($icons)
  }

  APPENDS.length = 0
  SYMBOLS.length = 0
  DEFAULTS.forEach((symbol) => {
    SYMBOLS.push(symbol)
  })
}

export default clear
