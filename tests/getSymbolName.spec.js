/**
 * @jest-environment jsdom
 */
import ICONS from '@/assets/icons'
import getSymbolName from '@/getSymbolName'
import paint from '@/paint'
import clear from '@/clear'

describe('getSymbolName() 方法：', () => {
  const UP =
    '<symbol id="icon-up" viewBox="0 0 1024 1024"><path d="M494.784 261.696c0.832-0.448 1.536-1.216 2.368-1.536a38.72 38.72 0 0 1 46.08 8.256l277.824 302.272a41.92 41.92 0 0 1-1.536 58.048 39.104 39.104 0 0 1-56.448-1.6L513.728 355.904 260.736 626.048a39.104 39.104 0 0 1-56.448 1.088 41.6 41.6 0 0 1-1.088-57.984L483.84 269.696c0.512-0.512 1.344-0.768 1.92-1.408l1.088-1.344c2.368-2.496 5.312-3.648 8-5.248z"></path></symbol>'

  beforeEach(() => {
    clear()
    paint(ICONS)
  })

  it(`不传参数：getSymbolName()，返回：''`, () => {
    expect(getSymbolName()).toEqual('')
  })

  it(`getSymbolName(${UP})，返回：'up'`, () => {
    expect(getSymbolName(UP)).toEqual('up')
  })

  it(`getSymbolName(${UP}, true)，返回：'icon-up'`, () => {
    expect(getSymbolName(UP, true)).toEqual('icon-up')
  })
})
