import DEFAULTS from './assets/icons'
import SYMBOLS from './symbols'
import APPENDS from './appends'

/**
 * (重置)清理图标集，恢复到默认图标集
 * =============================================================
 * @method clear
 */
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
