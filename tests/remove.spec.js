/**
 * @jest-environment jsdom
 */
import remove from '@/remove'
import clear from '@/clear'
import paint from '@/paint'
import getSymbol from '@/getSymbol'
import count from '@/count'

describe('remove() 方法：', () => {
  const NPM =
    '<symbol id="rdc-icon-npm" viewBox="0 0 2500 2500"><path d="M0 0h2500v2500H0z" fill="#c00"/><path d="M1241.5 268.5h-973v1962.9h972.9V763.5h495v1467.9h495V268.5z" fill="#fff"/></symbol>'

  clear()

  it(`remove(), 返回：false`, () => {
    expect(remove()).toBe(false)
  })

  it(`remove('up'), 移除：up 图标`, () => {
    remove('up')
    expect(count()).toEqual(59)
    expect(getSymbol('up')).toEqual(undefined)
  })

  it(`remove('down', 'icon'), 移除：down 图标`, () => {
    remove('down', 'icon')
    expect(count()).toEqual(58)
    expect(getSymbol('down')).toEqual(undefined)
  })

  it(`remove('npm', 'rdc'), 移除：down 图标`, () => {
    const iconSet = 'rdc'
    let $icons
    let $symbol

    paint(NPM)
    $icons = document.querySelector('#ijs-icons')
    $symbol = $icons.querySelector(`#${iconSet}-icon-npm`)

    expect($symbol.id).toEqual(`${iconSet}-icon-npm`)
    expect(count()).toEqual(59)
    expect(getSymbol('npm', iconSet)).toEqual(NPM)

    remove('npm', iconSet)
    $symbol = $icons.querySelector(`#${iconSet}-icon-npm`)
    expect(count()).toEqual(58)
    expect(getSymbol('npm', iconSet)).toEqual(undefined)
    expect($symbol).toEqual(null)

    remove('menu')
    $symbol = $icons.querySelector(`#icon-menu`)
    expect($symbol).toEqual(null)
  })
})
