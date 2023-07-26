/**
 * @jest-environment jsdom
 */
import paint from '@/paint'
import getSymbols from '@/getSymbols'

describe('paint() 方法：', () => {
  it(`paint(), 返回：true`, () => {
    let $icons

    paint()
    $icons = document.querySelector('#icons')

    expect($icons.id).toEqual('icons')
    expect($icons.querySelectorAll('symbol').length).toEqual(getSymbols.length)
  })
})
