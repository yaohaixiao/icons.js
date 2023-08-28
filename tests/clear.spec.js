/**
 * @jest-environment jsdom
 */
import ICONS from '@/assets/icons'
import clear from '@/clear'
import add from '@/add'
import paint from '@/paint'
import getSymbol from '@/getSymbol'
import getSymbols from '@/getSymbols'
import count from '@/count'

describe('remove() 方法：', () => {
  const NPM =
    '<symbol id="rdc-icon-npm" viewBox="0 0 2500 2500"><path d="M0 0h2500v2500H0z" fill="#c00"/><path d="M1241.5 268.5h-973v1962.9h972.9V763.5h495v1467.9h495V268.5z" fill="#fff"/></symbol>'

  beforeEach(() => {
    clear()
    paint(ICONS)
  })

  it(`没有调用 paint() 方法，直接调用 clear(), 只会清理数据，并返回：undefined`, () => {
    add(NPM)
    expect(count()).toEqual(61)
    expect(getSymbol('npm', 'rdc')).toEqual(NPM)

    expect(clear()).toBe(undefined)
    expect(count()).toEqual(0)
    expect(getSymbol('up')).toEqual(getSymbols()[0])
  })

  it(`调用 paint() 方法，然后调用 clear(), 只会清理数据，同时移除：icons 图标集的 SVG 元素`, () => {
    let $icons

    paint(NPM)
    expect(count()).toEqual(61)
    expect(getSymbol('npm', 'rdc')).toEqual(NPM)

    clear()

    $icons = document.querySelector('#icons')
    expect($icons).toBe(null)
    expect(count()).toEqual(0)
    expect(getSymbol('up')).toBe(undefined)
  })
})
