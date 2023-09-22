/**
 * @jest-environment jsdom
 */
import ICONS from '@/assets/icons'
import getSymbolSize from '@/getSymbolSize'
import paint from '@/paint'
import clear from '@/clear'

describe('getSymbolSize() 方法：', () => {
  beforeEach(() => {
    clear()
    paint(ICONS)
  })

  const PATH =
    '<path d="M494.784 261.696c0.832-0.448 1.536-1.216 2.368-1.536a38.72 38.72 0 0 1 46.08 8.256l277.824 302.272a41.92 41.92 0 0 1-1.536 58.048 39.104 39.104 0 0 1-56.448-1.6L513.728 355.904 260.736 626.048a39.104 39.104 0 0 1-56.448 1.088 41.6 41.6 0 0 1-1.088-57.984L483.84 269.696c0.512-0.512 1.344-0.768 1.92-1.408l1.088-1.344c2.368-2.496 5.312-3.648 8-5.248z"></path>'
  const SYMBOL = `<symbol id="icon-up" viewBox="0 0 1024 1024">${PATH}</symbol>`

  it(`不传参数：getSymbolSize()，返回：null`, () => {
    expect(getSymbolSize()).toEqual(null)
  })

  it(`获取内置图标的 size：getSymbolSize('up')，返回：{width:1024,height:1024}`, () => {
    expect(getSymbolSize('up')).toEqual({ width: 1024, height: 1024 })
  })

  it(`获取自定义图标的 size：getSymbolSize('${SYMBOL}')，返回：{width:1024,height:1024}`, () => {
    expect(getSymbolSize(SYMBOL)).toEqual({ width: 1024, height: 1024 })
  })

  it(`获取格式不正确的 symbol 字符串的 size：getSymbolSize('abc')，返回：null`, () => {
    expect(getSymbolSize('abc')).toEqual(null)
  })
})
