/**
 * @jest-environment jsdom
 */
import appendTo from '@/appendTo'
import paint from '@/paint'
import clear from '@/clear'

const getStyle = (el, ruleName) => {
  return getComputedStyle(el)[ruleName]
}
describe('remove() 方法：', () => {
  // Set up our document body
  document.body.innerHTML =
    '<ul id="toolbar" class="toolbar">\n' +
    '  <li class="toolbar__item" id="up">\n' +
    '  </li>\n' +
    '  <li class="toolbar__item" id="hompage">\n' +
    '  </li>\n' +
    '  <li class="toolbar__item" id="menu">\n' +
    '  </li>\n' +
    '  <li class="toolbar__item" id="down">\n' +
    '  </li>\n' +
    '</ul>'

  beforeEach(() => {
    clear()
    paint()
  })

  it(`不传参数：appendTo()，返回：false`, () => {
    const $icon = appendTo()
    expect($icon).toEqual(false)
  })

  it(`不传 name 参数：appendTo('up')，返回：false`, () => {
    const $icon = appendTo('up')
    expect($icon).toEqual(false)
  })

  it(`传 el 参数，但无此 DOM 元素：appendTo('good', 'up')，返回：false`, () => {
    const $icon = appendTo('good', 'up')
    expect($icon).toEqual(false)
  })

  it(`传递 el 和 nane 参数，且都有效：appendTo($up, 'up')`, () => {
    const $up = document.querySelector('#up')
    let $icon
    let $svg
    let $use

    appendTo($up, 'up')

    $icon = $up.querySelector('.ijs-icon')
    expect($icon.className).toEqual('ijs-icon')

    $up.appendChild($icon)
    expect($up.querySelector('.ijs-icon')).toEqual($icon)

    $svg = $icon.querySelector('svg')
    expect($svg.getAttribute('class')).toEqual('ijs-icon__svg')
    expect(getStyle($svg, 'width')).toEqual(getStyle($svg, 'height'))

    $use = $svg.querySelector('use')
    expect($use.getAttribute('xlink:href')).toEqual('#icon-up')
  })

  it(`传递 el、nane 和 options 参数，且都有效：appendTo('down', 'npm', {size: [24, 26], color: '#333', iconSet: 'rdc'})`, () => {
    const NPM =
      '<symbol id="rdc-icon-npm" viewBox="0 0 2500 2500"><path d="M0 0h2500v2500H0z" fill="#c00"/><path d="M1241.5 268.5h-973v1962.9h972.9V763.5h495v1467.9h495V268.5z" fill="#fff"/></symbol>'
    const $down = document.querySelector('#down')
    let $icon
    let $svg
    let $use

    paint(NPM)
    appendTo('down', 'npm', { size: [24, 26], color: '#333', iconSet: 'rdc' })

    $icon = $down.querySelector('.ijs-icon')
    expect($icon.className).toEqual('ijs-icon')

    $down.appendChild($icon)
    expect($down.querySelector('.ijs-icon')).toEqual($icon)

    $svg = $icon.querySelector('svg')
    expect($svg.getAttribute('class')).toEqual('ijs-icon__svg')
    expect(getStyle($svg, 'width')).toEqual('24px')
    expect(getStyle($svg, 'height')).toEqual('26px')
    expect(getStyle($svg, 'color')).toEqual('rgb(51, 51, 51)')

    $use = $svg.querySelector('use')
    expect($use.getAttribute('xlink:href')).toEqual('#rdc-icon-npm')
  })
})
