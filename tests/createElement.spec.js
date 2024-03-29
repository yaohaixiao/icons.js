/**
 * @jest-environment jsdom
 */
import ICONS from '@/assets/icons'
import createElement from '@/createElement'
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
    paint(ICONS)
  })

  it(`不传参数：createElement()，返回：null`, () => {
    const $icon = createElement()
    expect($icon).toEqual(null)
  })

  it(`仅传递 nane 参数：createElement('up')`, () => {
    const $up = document.querySelector('#up')
    const $icon = createElement('up')
    let $svg
    let $use

    expect($icon.className).toEqual('ijs-icon')

    $up.appendChild($icon)
    expect($up.querySelector('.ijs-icon')).toEqual($icon)

    $svg = $icon.querySelector('svg')
    expect($svg.getAttribute('class')).toEqual('ijs-icon__svg')
    expect(getStyle($svg, 'width')).toEqual(getStyle($svg, 'height'))

    $use = $svg.querySelector('use')
    expect($use.getAttribute('xlink:href')).toEqual('#icon-up')
  })

  it(`传递 nane 和 options 参数：createElement('npm', {size: [24, 26], color: '#333', iconSet: 'rdc'})`, () => {
    const NPM =
      '<symbol id="rdc-icon-npm" viewBox="0 0 2500 2500"><path d="M0 0h2500v2500H0z" fill="#c00"></path><path d="M1241.5 268.5h-973v1962.9h972.9V763.5h495v1467.9h495V268.5z" fill="#fff"></path></symbol>'
    const $down = document.querySelector('#down')
    const $icon = createElement('npm', {
      size: [24, 26],
      color: '#333',
      iconSet: 'rdc'
    })
    let $svg
    let $use

    paint(NPM)

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

  it(`仅传递 nane 参数：createElement('<svg><path d="M0 0h2500v2500H0z" fill="#c00"></path></svg>')`, () => {
    const svg = '<svg><path d="M0 0h2500v2500H0z" fill="#c00"></path></svg>'
    const $menu = document.querySelector('#menu')
    const $icon = createElement(svg, {
      size: [24, 26],
      color: '#333',
      iconSet: 'rdc'
    })
    let $svg

    expect($icon.className).toEqual('ijs-icon')
    $menu.appendChild($icon)
    $svg = $icon.querySelector('svg')

    expect($menu.querySelector('.ijs-icon')).toEqual($icon)
    expect($svg.getAttribute('class')).toEqual('ijs-icon__svg')
    expect(getStyle($svg, 'width')).toEqual('24px')
    expect(getStyle($svg, 'height')).toEqual('26px')
    expect(getStyle($svg, 'color')).toEqual('rgb(51, 51, 51)')
  })
})
