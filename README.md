# icons.js
[![npm version](https://img.shields.io/npm/v/@yaohaixiao/icons.js)](https://www.npmjs.com/package/@yaohaixiao/icons.js)
![Gzip size](http://img.badgesize.io/https://cdn.jsdelivr.net/gh/yaohaixiao/icons.js/icons.min.js?compression=gzip&label=gzip%20size)
[![prettier code style](https://img.shields.io/badge/code_style-prettier-07b759.svg)](https://prettier.io)
[![Coverage](https://codecov.io/gh/yaohaixiao/icons.js/branch/master/graph/badge.svg)](https://codecov.io/gh/yaohaixiao/icons.js)
[![npm downloads](https://img.shields.io/npm/dm/@yaohaixiao/icons.js)](https://npmcharts.com/compare/@yaohaixiao/icons.js?minimal=true)
[![MIT License](https://img.shields.io/github/license/yaohaixiao/icons.js.svg)](https://github.com/yaohaixiao/icons.js/blob/master/LICENSE)

icons.js - 专门用来显示 svg 图标的 JavaScript 小工具。



## 项目初衷

最近在开发中 outline.js 时，需要用到 ES6 模块的图标 svg 图标创建工具，加上一直开发的 VUE 项目也需要用到 svg 图标，所以整理了以下开发中常用的方法，写出了 icons.js 这个小工具。希望对其他有需要实用 svg 图标的朋友也带来一些便捷。



## 特点

- 原生 JavaScript 编写，无需任何依赖；
- 支持 UMD 规范；
- 支持 E6 模块，提供功能独立的 ES6 模块；
- 提供多个小工具： 
  * **icons.js** - 提供了一系列操作绘制图标库和显示 svg 图标的方法；
  * **Icon.vue** - Icon.vue 是基于 VUE 2.6 的一个独立组件，用于在 VUE 项目中显示 svg 图标；
  * **icon.js** - icon.js 是一个 ES6 独立功能函数，用于创建 svg 图标 DOM 元素的；
- 配置灵活，调用简单；
- 体积小；



## 浏览器支持

| [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_48x48.png" alt="IE / Edge" width="24px" height="24px" />](https://github.com/yaohaixiao/delegate.js/)</br>IE / Edge | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png" alt="Firefox" width="24px" height="24px" />](https://github.com/yaohaixiao/delegate.js/)</br>Firefox | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png" alt="Chrome" width="24px" height="24px" />](https://github.com/yaohaixiao/delegate.js/)</br>Chrome | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_48x48.png" alt="Safari" width="24px" height="24px" />](https://github.com/yaohaixiao/delegate.js/)</br>Safari | [<img src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_48x48.png" alt="Opera" width="24px" height="24px" />](https://github.com/yaohaixiao/delegate.js/)</br>Opera |
|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| IE11, Edge                                                                                                                                                                                               | last 10 versions                                                                                                                                                                                           | last 10 versions                                                                                                                                                                                       | last 10 versions                                                                                                                                                                                       | last 10 versions                                                                                                                                                                                   |




## 安装说明

icons.js 提供多种安装方式的支持： npm 安装、加载 CDN 资源、以及本地资源调用。


### npm install

```shell
npm i @yaohaixiao/icons.js
```

### CDN 调用

```html
<link href="https://cdn.jsdelivr.net/gh/yaohaixiao/icons.js/icons.min.css" rel="stylesheet" />
<script src="https://cdn.jsdelivr.net/gh/yaohaixiao/icons.js/icons.min.js"></script>
```

### 调用本地JS文件

```html
<link href="path/to/icons.min.css" rel="stylesheet" /></script>
<script src="path/to/icons.min.js"></script>
```



## 默认图标集

icons.js 的默认图标集仅提供了 8 个常用 svg 图标：

```js
const DEFAULTS = [
  '<symbol id="icon-up" viewBox="0 0 1024 1024"><path d="M494.784 261.696c0.832-0.448 1.536-1.216 2.368-1.536a38.72 38.72 0 0 1 46.08 8.256l277.824 302.272a41.92 41.92 0 0 1-1.536 58.048 39.104 39.104 0 0 1-56.448-1.6L513.728 355.904 260.736 626.048a39.104 39.104 0 0 1-56.448 1.088 41.6 41.6 0 0 1-1.088-57.984L483.84 269.696c0.512-0.512 1.344-0.768 1.92-1.408l1.088-1.344c2.368-2.496 5.312-3.648 8-5.248z"></path></symbol>',
  '<symbol id="icon-down" viewBox="0 0 1024 1024"><path d="M494.784 762.304c0.832 0.448 1.536 1.216 2.368 1.536 15.232 7.488 33.92 4.992 46.08-8.256l277.824-302.272a41.92 41.92 0 0 0-1.536-58.048 39.104 39.104 0 0 0-56.448 1.6l-249.344 271.232-252.992-270.144a39.104 39.104 0 0 0-56.448-1.088 41.6 41.6 0 0 0-1.088 57.984l280.576 299.456c0.512 0.512 1.344 0.768 1.92 1.408l1.088 1.344c2.368 2.496 5.312 3.648 8 5.248z"></path></symbol>',
  '<symbol id="icon-menu" viewBox="0 0 1024 1024"><path d="M320 256h640V128H320zM320 576h640V448H320zM320 896h640v-128H320zM64 256h128V128H64zM64 576h128V448H64zM64 896h128v-128H64z"></path></symbol>',
  '<symbol id="icon-hash" viewBox="0 0 24 24"><path d="M14.216 10l-0.444 4h-3.988l0.444-4zM15.006 2.89l-0.568 5.11h-3.988l0.543-4.89c0.061-0.549-0.335-1.043-0.883-1.104s-1.043 0.335-1.104 0.884l-0.568 5.11h-4.438c-0.552 0-1 0.448-1 1s0.448 1 1 1h4.216l-0.444 4h-3.772c-0.552 0-1 0.448-1 1s0.448 1 1 1h3.549l-0.543 4.89c-0.061 0.549 0.335 1.043 0.883 1.104s1.043-0.335 1.104-0.883l0.569-5.111h3.988l-0.543 4.89c-0.061 0.549 0.335 1.043 0.883 1.104s1.043-0.335 1.104-0.883l0.568-5.111h4.438c0.552 0 1-0.448 1-1s-0.448-1-1-1h-4.216l0.444-4h3.772c0.552 0 1-0.448 1-1s-0.448-1-1-1h-3.549l0.543-4.89c0.061-0.549-0.335-1.043-0.883-1.104s-1.043 0.335-1.104 0.883z"></path></symbol>',
  '<symbol id="icon-close" viewBox="0 0 1024 1024"><path d="M536.96 491.648L310.592 265.344a32 32 0 1 0-45.248 45.248L491.584 536.96l-226.304 226.304a32 32 0 0 0 45.312 45.248l226.24-226.304 226.304 226.304a32 32 0 0 0 45.248-45.248L582.144 536.896l226.304-226.24a32 32 0 0 0-45.248-45.248L536.896 491.584z"></path></symbol>',
  '<symbol id="icon-homepage" viewBox="0 0 26 28"><path d="M22 15.5v7.5c0 0.547-0.453 1-1 1h-6v-6h-4v6h-6c-0.547 0-1-0.453-1-1v-7.5c0-0.031 0.016-0.063 0.016-0.094l8.984-7.406 8.984 7.406c0.016 0.031 0.016 0.063 0.016 0.094zM25.484 14.422l-0.969 1.156c-0.078 0.094-0.203 0.156-0.328 0.172h-0.047c-0.125 0-0.234-0.031-0.328-0.109l-10.813-9.016-10.813 9.016c-0.109 0.078-0.234 0.125-0.375 0.109-0.125-0.016-0.25-0.078-0.328-0.172l-0.969-1.156c-0.172-0.203-0.141-0.531 0.063-0.703l11.234-9.359c0.656-0.547 1.719-0.547 2.375 0l3.813 3.187v-3.047c0-0.281 0.219-0.5 0.5-0.5h3c0.281 0 0.5 0.219 0.5 0.5v6.375l3.422 2.844c0.203 0.172 0.234 0.5 0.063 0.703z"></path></symbol>',
  '<symbol id="icon-tags" viewBox="0 0 24 28"><path d="M7 7c0-1.109-0.891-2-2-2s-2 0.891-2 2 0.891 2 2 2 2-0.891 2-2zM23.672 16c0 0.531-0.219 1.047-0.578 1.406l-7.672 7.688c-0.375 0.359-0.891 0.578-1.422 0.578s-1.047-0.219-1.406-0.578l-11.172-11.188c-0.797-0.781-1.422-2.297-1.422-3.406v-6.5c0-1.094 0.906-2 2-2h6.5c1.109 0 2.625 0.625 3.422 1.422l11.172 11.156c0.359 0.375 0.578 0.891 0.578 1.422zM29.672 16c0 0.531-0.219 1.047-0.578 1.406l-7.672 7.688c-0.375 0.359-0.891 0.578-1.422 0.578-0.812 0-1.219-0.375-1.75-0.922l7.344-7.344c0.359-0.359 0.578-0.875 0.578-1.406s-0.219-1.047-0.578-1.422l-11.172-11.156c-0.797-0.797-2.312-1.422-3.422-1.422h3.5c1.109 0 2.625 0.625 3.422 1.422l11.172 11.156c0.359 0.375 0.578 0.891 0.578 1.422z"></path><path d="M12 2c6.625 0 12 5.375 12 12 0 5.297-3.437 9.797-8.203 11.391-0.609 0.109-0.828-0.266-0.828-0.578 0-0.391 0.016-1.687 0.016-3.297 0-1.125-0.375-1.844-0.812-2.219 2.672-0.297 5.484-1.313 5.484-5.922 0-1.313-0.469-2.375-1.234-3.219 0.125-0.313 0.531-1.531-0.125-3.187-1-0.313-3.297 1.234-3.297 1.234-0.953-0.266-1.984-0.406-3-0.406s-2.047 0.141-3 0.406c0 0-2.297-1.547-3.297-1.234-0.656 1.656-0.25 2.875-0.125 3.187-0.766 0.844-1.234 1.906-1.234 3.219 0 4.594 2.797 5.625 5.469 5.922-0.344 0.313-0.656 0.844-0.766 1.609-0.688 0.313-2.438 0.844-3.484-1-0.656-1.141-1.844-1.234-1.844-1.234-1.172-0.016-0.078 0.734-0.078 0.734 0.781 0.359 1.328 1.75 1.328 1.75 0.703 2.141 4.047 1.422 4.047 1.422 0 1 0.016 1.937 0.016 2.234 0 0.313-0.219 0.688-0.828 0.578-4.766-1.594-8.203-6.094-8.203-11.391 0-6.625 5.375-12 12-12zM4.547 19.234c0.031-0.063-0.016-0.141-0.109-0.187-0.094-0.031-0.172-0.016-0.203 0.031-0.031 0.063 0.016 0.141 0.109 0.187 0.078 0.047 0.172 0.031 0.203-0.031zM5.031 19.766c0.063-0.047 0.047-0.156-0.031-0.25-0.078-0.078-0.187-0.109-0.25-0.047-0.063 0.047-0.047 0.156 0.031 0.25 0.078 0.078 0.187 0.109 0.25 0.047zM5.5 20.469c0.078-0.063 0.078-0.187 0-0.297-0.063-0.109-0.187-0.156-0.266-0.094-0.078 0.047-0.078 0.172 0 0.281s0.203 0.156 0.266 0.109zM6.156 21.125c0.063-0.063 0.031-0.203-0.063-0.297-0.109-0.109-0.25-0.125-0.313-0.047-0.078 0.063-0.047 0.203 0.063 0.297 0.109 0.109 0.25 0.125 0.313 0.047zM7.047 21.516c0.031-0.094-0.063-0.203-0.203-0.25-0.125-0.031-0.266 0.016-0.297 0.109s0.063 0.203 0.203 0.234c0.125 0.047 0.266 0 0.297-0.094zM8.031 21.594c0-0.109-0.125-0.187-0.266-0.172-0.141 0-0.25 0.078-0.25 0.172 0 0.109 0.109 0.187 0.266 0.172 0.141 0 0.25-0.078 0.25-0.172zM8.937 21.438c-0.016-0.094-0.141-0.156-0.281-0.141-0.141 0.031-0.234 0.125-0.219 0.234 0.016 0.094 0.141 0.156 0.281 0.125s0.234-0.125 0.219-0.219z"></path></symbol>',
  '<symbol id="icon-issues" viewBox="0 0 26 28"><path d="M25.5 15c0 0.547-0.453 1-1 1h-3.5c0 1.953-0.422 3.422-1.047 4.531l3.25 3.266c0.391 0.391 0.391 1.016 0 1.406-0.187 0.203-0.453 0.297-0.703 0.297s-0.516-0.094-0.703-0.297l-3.094-3.078s-2.047 1.875-4.703 1.875v-14h-2v14c-2.828 0-4.891-2.063-4.891-2.063l-2.859 3.234c-0.203 0.219-0.469 0.328-0.75 0.328-0.234 0-0.469-0.078-0.672-0.25-0.406-0.375-0.438-1-0.078-1.422l3.156-3.547c-0.547-1.078-0.906-2.469-0.906-4.281h-3.5c-0.547 0-1-0.453-1-1s0.453-1 1-1h3.5v-4.594l-2.703-2.703c-0.391-0.391-0.391-1.016 0-1.406s1.016-0.391 1.406 0l2.703 2.703h13.188l2.703-2.703c0.391-0.391 1.016-0.391 1.406 0s0.391 1.016 0 1.406l-2.703 2.703v4.594h3.5c0.547 0 1 0.453 1 1zM18 6h-10c0-2.766 2.234-5 5-5s5 2.234 5 5z"></path></symbol>'
]

export default DEFAULTS
```

其中 symbol 中的 id 字符名称，例如 icon-up：

* icon - 图标集名称；
* up - 图标名称；



## API Documentation

虽然项目名称是 icons.js，但 icons.js 提供多种实用用具：

* **icons.js** - 提供了一系列操作绘制图标库和显示 svg 图标的方法；
* **Icon.vue** - Icon.vue 是基于 VUE 2.6 的一个独立组件，用于在 VUE 项目中显示 svg 图标；
* **icon.js** - icon.js 是一个 ES6 独立功能函数，用于创建 svg 图标 DOM 元素的；



### icons.js

icons.js 提供了一系列操作绘制图标库和显示 svg 图标的方法；

#### paint([symbols = ''])

用于在页面中绘制 svg sprites 的图标集，以便 createElement() 创建的图标元素可以正确显示。

##### Parameters

###### symbols

Type: `String|Array`

Default: ``

（可选）单个或者多个 SVG 图标的 symbol。

##### Usage

###### 绘制默认图标集

```js
import icons from '@yaohaixiao/icons.js/icons'

// 不添加参数，绘制默认图标
icons.paint()  
```

###### 追加绘制单个新图标

```js
import icons from '@yaohaixiao/icons.js/icons'
// 或者引入独立方法
import paint from '@yaohaixiao/icons.js/paint'

const NPM =
  '<symbol id="rdc-icon-npm" viewBox="0 0 2500 2500"><path d="M0 0h2500v2500H0z" fill="#c00"/><path d="M1241.5 268.5h-973v1962.9h972.9V763.5h495v1467.9h495V268.5z" fill="#fff"/></symbol>'

// 绘制默认图标
icons.paint()  

// 参数为 string 类型，追加单个图标
// 追加绘制 NPM 图标
paint(NPM)
```

###### 追加绘制多个新图标

```js
import icons from '@yaohaixiao/icons.js/icons'
// 或者引入独立方法
import paint from '@yaohaixiao/icons.js/paint'

const ICONS = [
  '<symbol id="rdc-icon-unlink" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.1344 14.6172C11.5191 15.0019 12.1428 15.0019 12.5275 14.6172C12.9122 14.2325 12.9122 13.6088 12.5275 13.2241L2.77592 3.47247C2.39123 3.08778 1.76753 3.08778 1.38284 3.47247C0.998145 3.85716 0.998145 4.48086 1.38284 4.86555L2.07938 5.5621L1.73111 5.91037C-0.577036 8.21851 -0.577036 11.9608 1.73111 14.2689C4.03925 16.577 7.78149 16.577 10.0896 14.2689L10.4379 13.9206L11.1344 14.6172ZM9.04482 12.5275L3.47247 6.95518L3.12419 7.30346C1.58543 8.84222 1.58543 11.337 3.12419 12.8758C4.66296 14.4146 7.15778 14.4146 8.69654 12.8758L9.04482 12.5275Z" /><path d="M5.21383 2.42765C4.82913 2.81234 4.82914 3.43605 5.21383 3.82074C5.59852 4.20543 6.22222 4.20543 6.60691 3.82074L7.30346 3.12419C8.84222 1.58543 11.337 1.58543 12.8758 3.12419C14.4146 4.66296 14.4146 7.15778 12.8758 8.69654L12.1793 9.39309C11.7946 9.77778 11.7946 10.4015 12.1793 10.7862C12.564 11.1709 13.1877 11.1709 13.5724 10.7862L14.2689 10.0896C16.577 7.78149 16.577 4.03925 14.2689 1.73111C11.9608 -0.577036 8.21851 -0.577036 5.91037 1.73111L5.21383 2.42765Z" /></symbol>',
  '<symbol id="rdc-icon-npm" viewBox="0 0 2500 2500"><path d="M0 0h2500v2500H0z" fill="#c00"/><path d="M1241.5 268.5h-973v1962.9h972.9V763.5h495v1467.9h495V268.5z" fill="#fff"/></symbol>'
]

// 绘制默认图标
icons.paint()

// 参数为 array 类型，追加多个图标
// 追加绘制 NPM 图标
paint(ICONS)
```

#### createElement(name[, options]) 

createElement() 方法用于创建显示 svg 图标 DOM 元素。

##### Parameters

###### name

Type: `String`

Default: ``

（必须）图标名称（图标集中所包含的图标的名称）。

##### options

Type: `Object`

Default: `{}`

（可选）；


| Name      | Type                   | Default | Description                                                                           |
|-----------|------------------------|---------|---------------------------------------------------------------------------------------|
| `size`    | `Number, String, Array`| ''      | 可选，用来指定 icon 图标大小。number 和 string 类型时，可选值为 0 以上的整数, 宽度和高度值相等；array时数组长度为 2，分别代表宽度和高度； |
| `color`   | `String`               | ''      | 可选，用来指定 icon 图标颜色。                                                                    |                                                                   |
| `iconSet` | `String`               | 'icon'  | 可选，用来指定 icon 图标集的名称。                                                                  |


##### Returns

Type: `HTMLElement`

返回创建的显示图标的 DOM 元素：

```html
<i class="ijs-icon">
  <svg aria-hidden="true" class="ijs-icon__svg">
    <use xlink:href="#icon-up"></use>
  </svg>
</i>
```

##### Usage

```html
<ul class="toolbar">
  <li class="toolbar__item" id="up"></li>
  <li class="toolbar__item" id="down"></li>
  <li class="toolbar__item" id="tips"></li>  
</ul>
```

```js
import icons from '@yaohaixiao/icons.js/icons'
// 或者引入独立方法
import createElement from '@yaohaixiao/icons.js/createElement'

const $up = document.querySelector('#up')
const $down = document.querySelector('#down')

icons.paint()

// 使用 icon() 方法创建一个包含显示 up 图标的 i 标签:
const $iconUp = icons.createElement('up')
// 在 id="up" 的工具栏按钮中显示向上图标
$up.appendChild($iconUp)

// 传递 options 参数，控制图标样式
const $iconDown = createElement('down', {
  size: 24, // [24, 26]
  color: '#f00',
  iconSet: 'rdc'
})
$down.appendChild($iconDown)
```


#### appendTo(el, name[, options])

appendTo() 方法用于创建显示 svg 图标 DOM 元素，并添加到指定的 el DOM 元素。

##### Parameters

###### el

Type: `String|HTMLElement`

Default: ``

（必须）希望显示图标的 DOM 元素或者 DOM 元素的选择器。

###### name

Type: `String`

Default: ``

（必须）图标名称（图标集中所包含的图标的名称）。

###### options

Type: `Object`

Default: `{}`

（可选）；


| Name      | Type                   | Default | Description                                                                           |
|-----------|------------------------|---------|---------------------------------------------------------------------------------------|
| `size`    | `Number, String, Array`| ''      | 可选，用来指定 icon 图标大小。number 和 string 类型时，可选值为 0 以上的整数, 宽度和高度值相等；array时数组长度为 2，分别代表宽度和高度； |
| `color`   | `String`               | ''      | 可选，用来指定 icon 图标颜色。                                                                    |                                                                   |
| `iconSet` | `String`               | 'icon'  | 可选，用来指定 icon 图标集的名称。                                                                  |


##### Usage

```html
<ul class="toolbar">
  <li class="toolbar__item" id="up"></li>
  <li class="toolbar__item" id="down"></li>
  <li class="toolbar__item" id="tips"></li>  
</ul>
```

```js
import icons from '@yaohaixiao/icons.js/icons'
// 或者引入独立方法
import appendTo from '@yaohaixiao/icons.js/appendTo'

icons.paint()

icons.appendTo('#up', 'up')
appendTo('#down', 'down', {
  size: 24, // [24, 26]
  color: '#f00',
  iconSet: 'rdc'
})
```


#### symbols([name, iconSet='icon'])

symbols() 方法用于获取先现有图标集中单个或者全部 svg 图标 symbol 数据。

##### Parameters

###### name

Type: `String|Array`

Default: ``

（可选）图标名。

###### iconSet

Type: `String`

Default: `icon`

（可选）图标集名称。

##### Usage

```js
import icons from '@yaohaixiao/icons.js/icons'
// 或者引入独立方法
import symbols from '@yaohaixiao/icons.js/symbols'

const ICONS = [
  '<symbol id="rdc-icon-unlink" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.1344 14.6172C11.5191 15.0019 12.1428 15.0019 12.5275 14.6172C12.9122 14.2325 12.9122 13.6088 12.5275 13.2241L2.77592 3.47247C2.39123 3.08778 1.76753 3.08778 1.38284 3.47247C0.998145 3.85716 0.998145 4.48086 1.38284 4.86555L2.07938 5.5621L1.73111 5.91037C-0.577036 8.21851 -0.577036 11.9608 1.73111 14.2689C4.03925 16.577 7.78149 16.577 10.0896 14.2689L10.4379 13.9206L11.1344 14.6172ZM9.04482 12.5275L3.47247 6.95518L3.12419 7.30346C1.58543 8.84222 1.58543 11.337 3.12419 12.8758C4.66296 14.4146 7.15778 14.4146 8.69654 12.8758L9.04482 12.5275Z" /><path d="M5.21383 2.42765C4.82913 2.81234 4.82914 3.43605 5.21383 3.82074C5.59852 4.20543 6.22222 4.20543 6.60691 3.82074L7.30346 3.12419C8.84222 1.58543 11.337 1.58543 12.8758 3.12419C14.4146 4.66296 14.4146 7.15778 12.8758 8.69654L12.1793 9.39309C11.7946 9.77778 11.7946 10.4015 12.1793 10.7862C12.564 11.1709 13.1877 11.1709 13.5724 10.7862L14.2689 10.0896C16.577 7.78149 16.577 4.03925 14.2689 1.73111C11.9608 -0.577036 8.21851 -0.577036 5.91037 1.73111L5.21383 2.42765Z" /></symbol>',
  '<symbol id="rdc-icon-npm" viewBox="0 0 2500 2500"><path d="M0 0h2500v2500H0z" fill="#c00"/><path d="M1241.5 268.5h-973v1962.9h972.9V763.5h495v1467.9h495V268.5z" fill="#fff"/></symbol>'
]

// 参数为 array 类型，追加多个图标
// 追加绘制 NPM 图标
icons.add(ICONS)

// 获取全部
icons.symbols()
// 获取单个（只能获取默认图标集中的数据）
symbols('up')
// 获取单个，指定图标集
symbols('unlink', 'rdc')
```


#### add(symbol)

add() 方法用于先现有图标集中添加 svg 图标 symbol 数据。

##### Parameters

###### symbol

Type: `String|Array`

Default: ``

（必须）单个或者多个图标 symbol 数。

##### Usage

```js
import icons from '@yaohaixiao/icons.js/icons'
// 或者引入独立方法
import add from '@yaohaixiao/icons.js/add'

const ICONS = [
  '<symbol id="rdc-icon-unlink" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.1344 14.6172C11.5191 15.0019 12.1428 15.0019 12.5275 14.6172C12.9122 14.2325 12.9122 13.6088 12.5275 13.2241L2.77592 3.47247C2.39123 3.08778 1.76753 3.08778 1.38284 3.47247C0.998145 3.85716 0.998145 4.48086 1.38284 4.86555L2.07938 5.5621L1.73111 5.91037C-0.577036 8.21851 -0.577036 11.9608 1.73111 14.2689C4.03925 16.577 7.78149 16.577 10.0896 14.2689L10.4379 13.9206L11.1344 14.6172ZM9.04482 12.5275L3.47247 6.95518L3.12419 7.30346C1.58543 8.84222 1.58543 11.337 3.12419 12.8758C4.66296 14.4146 7.15778 14.4146 8.69654 12.8758L9.04482 12.5275Z" /><path d="M5.21383 2.42765C4.82913 2.81234 4.82914 3.43605 5.21383 3.82074C5.59852 4.20543 6.22222 4.20543 6.60691 3.82074L7.30346 3.12419C8.84222 1.58543 11.337 1.58543 12.8758 3.12419C14.4146 4.66296 14.4146 7.15778 12.8758 8.69654L12.1793 9.39309C11.7946 9.77778 11.7946 10.4015 12.1793 10.7862C12.564 11.1709 13.1877 11.1709 13.5724 10.7862L14.2689 10.0896C16.577 7.78149 16.577 4.03925 14.2689 1.73111C11.9608 -0.577036 8.21851 -0.577036 5.91037 1.73111L5.21383 2.42765Z" /></symbol>',
  '<symbol id="rdc-icon-npm" viewBox="0 0 2500 2500"><path d="M0 0h2500v2500H0z" fill="#c00"/><path d="M1241.5 268.5h-973v1962.9h972.9V763.5h495v1467.9h495V268.5z" fill="#fff"/></symbol>'
]
const DELETE = '<symbol id="rdc-icon-delete" viewBox="0 0 1024 1024"><path d="M732.48 724.288a33.792 33.792 0 0 1-48.448 0l-182.976-184.32-185.664 183.68a34.56 34.56 0 0 1-49.152 0 33.792 33.792 0 0 1 0-48.512l186.368-184.32L276.48 314.688a33.792 33.792 0 0 1 0-48.448 33.792 33.792 0 0 1 48.448 0L501.12 443.072l178.88-176.832a34.56 34.56 0 0 1 49.152 0 33.792 33.792 0 0 1 0 48.448L549.568 492.224l182.272 183.616a34.432 34.432 0 0 1 0.64 48.448z"></path></symbol>'

// 参数为 array 类型，追加多个图标
// 追加绘制 NPM 图标
icons.add(ICONS)
add(DELETE)
```


#### remove(name[, iconSet='icon'])

remove() 方法用于删除现有图标集中的与给定 name 同名的图标。

##### Parameters

###### name

Type: `String`

Default: ``

（必须）图标。

###### iconSet

Type: `String`

Default: `icon`

（可选）图标集名称。

##### Usage

```js
import icons from '@yaohaixiao/icons.js/icons'
// 或者引入独立方法
import remove from '@yaohaixiao/icons.js/remove'

const ICONS = [
  '<symbol id="rdc-icon-unlink" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.1344 14.6172C11.5191 15.0019 12.1428 15.0019 12.5275 14.6172C12.9122 14.2325 12.9122 13.6088 12.5275 13.2241L2.77592 3.47247C2.39123 3.08778 1.76753 3.08778 1.38284 3.47247C0.998145 3.85716 0.998145 4.48086 1.38284 4.86555L2.07938 5.5621L1.73111 5.91037C-0.577036 8.21851 -0.577036 11.9608 1.73111 14.2689C4.03925 16.577 7.78149 16.577 10.0896 14.2689L10.4379 13.9206L11.1344 14.6172ZM9.04482 12.5275L3.47247 6.95518L3.12419 7.30346C1.58543 8.84222 1.58543 11.337 3.12419 12.8758C4.66296 14.4146 7.15778 14.4146 8.69654 12.8758L9.04482 12.5275Z" /><path d="M5.21383 2.42765C4.82913 2.81234 4.82914 3.43605 5.21383 3.82074C5.59852 4.20543 6.22222 4.20543 6.60691 3.82074L7.30346 3.12419C8.84222 1.58543 11.337 1.58543 12.8758 3.12419C14.4146 4.66296 14.4146 7.15778 12.8758 8.69654L12.1793 9.39309C11.7946 9.77778 11.7946 10.4015 12.1793 10.7862C12.564 11.1709 13.1877 11.1709 13.5724 10.7862L14.2689 10.0896C16.577 7.78149 16.577 4.03925 14.2689 1.73111C11.9608 -0.577036 8.21851 -0.577036 5.91037 1.73111L5.21383 2.42765Z" /></symbol>',
  '<symbol id="rdc-icon-npm" viewBox="0 0 2500 2500"><path d="M0 0h2500v2500H0z" fill="#c00"/><path d="M1241.5 268.5h-973v1962.9h972.9V763.5h495v1467.9h495V268.5z" fill="#fff"/></symbol>'
]

// 参数为 array 类型，追加多个图标
// 追加绘制 NPM 图标
icons.paint(ICONS)

// 移除 up 图标
icons.remove('up')
// 移除 tips 图标
remove('tips', 'rdc')
```


#### clear()

清理在页面中绘制 svg sprites 的图标集，会移除图标集 DOM 元素。同时将图标集数据恢复为初始默认的 8 个图标。

##### Usage

```js
import icons from '@yaohaixiao/icons.js/icons'
// 或者引入独立方法
import clear from '@yaohaixiao/icons.js/clear'

const ICONS = [
  '<symbol id="rdc-icon-unlink" viewBox="0 0 16 16"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.1344 14.6172C11.5191 15.0019 12.1428 15.0019 12.5275 14.6172C12.9122 14.2325 12.9122 13.6088 12.5275 13.2241L2.77592 3.47247C2.39123 3.08778 1.76753 3.08778 1.38284 3.47247C0.998145 3.85716 0.998145 4.48086 1.38284 4.86555L2.07938 5.5621L1.73111 5.91037C-0.577036 8.21851 -0.577036 11.9608 1.73111 14.2689C4.03925 16.577 7.78149 16.577 10.0896 14.2689L10.4379 13.9206L11.1344 14.6172ZM9.04482 12.5275L3.47247 6.95518L3.12419 7.30346C1.58543 8.84222 1.58543 11.337 3.12419 12.8758C4.66296 14.4146 7.15778 14.4146 8.69654 12.8758L9.04482 12.5275Z" /><path d="M5.21383 2.42765C4.82913 2.81234 4.82914 3.43605 5.21383 3.82074C5.59852 4.20543 6.22222 4.20543 6.60691 3.82074L7.30346 3.12419C8.84222 1.58543 11.337 1.58543 12.8758 3.12419C14.4146 4.66296 14.4146 7.15778 12.8758 8.69654L12.1793 9.39309C11.7946 9.77778 11.7946 10.4015 12.1793 10.7862C12.564 11.1709 13.1877 11.1709 13.5724 10.7862L14.2689 10.0896C16.577 7.78149 16.577 4.03925 14.2689 1.73111C11.9608 -0.577036 8.21851 -0.577036 5.91037 1.73111L5.21383 2.42765Z" /></symbol>',
  '<symbol id="rdc-icon-npm" viewBox="0 0 2500 2500"><path d="M0 0h2500v2500H0z" fill="#c00"/><path d="M1241.5 268.5h-973v1962.9h972.9V763.5h495v1467.9h495V268.5z" fill="#fff"/></symbol>'
]

// 参数为 array 类型，追加多个图标
// 追加绘制 NPM 图标
icons.paint(ICONS)
// 将移除图标集元素
icons.clear()

// 再次绘制图标集元素，之前追加的2个图标已经清除
icons.paint()
clear()
```



### Icon.vue

Icon.vue 是基于 VUE 2.6 的一个独立组件，用于在 VUE 项目中显示 svg 图标。

#### import vue component

```js
// 引入 components 组件
import Icon from '@yaohaixiao/icons.js/components/Icon'

// 在使用组件前，需要先调用 paint() 方法将 svg 图标集绘制到文档中
import paint from '@yaohaixiao/icons.js/paint'

paint()
```

#### Usage

Icon 组件使用起来十分简单，调用语法如下：

```vue
<icon name="up" iconSet="icon" size="16" color="#999" />
```

#### Options

| Name      | Type                   | Default | Description                                                                           |
|-----------|------------------------|---------|---------------------------------------------------------------------------------------|
| `name`    | `String`               | ''      | 必选，图标名称，图标集中所包含的图标的名称。                                                                |
| `size`    | `Number, String, Array`| ''      | 可选，用来指定 icon 图标大小。number 和 string 类型时，可选值为 0 以上的整数, 宽度和高度值相等；array时数组长度为 2，分别代表宽度和高度； |
| `color`   | `String`               | ''      | 可选，用来指定 icon 图标颜色。                                                                    |                                                                   |
| `iconSet` | `String`               | 'icon'  | 可选，用来指定 icon 图标集的名称。                                                                  |




### icon.js

icon.js 是一个 ES6 独立功能函数，功能与 Icon.vue 类似，用于在 ES6 模块环境中创建 svg 图标 DOM 元素的。

#### icon(name[, options])

icon() 方法用于创建显示 svg 图标 DOM 元素。

##### Parameters

###### name

Type: `String`

Default: ``

（必须）图标名称，图标集中所包含的图标的名称。

#### options

Type: `Object`

Default: `{}`

（可选）；


| Name      | Type                   | Default | Description                                                                           |
|-----------|------------------------|---------|---------------------------------------------------------------------------------------|
| `size`    | `Number, String, Array`| ''      | 可选，用来指定 icon 图标大小。number 和 string 类型时，可选值为 0 以上的整数, 宽度和高度值相等；array时数组长度为 2，分别代表宽度和高度； |
| `color`   | `String`               | ''      | 可选，用来指定 icon 图标颜色。                                                                    |                                                                   |
| `iconSet` | `String`               | 'icon'  | 可选，用来指定 icon 图标集的名称。                                                                  |


#### Returns

Type: `HTMLElement`

返回创建的显示图标的 DOM 元素：

```html
<i class="ijs-icon">
  <svg aria-hidden="true" class="ijs-icon__svg">
    <use xlink:href="#icon-up"></use>
  </svg>
</i>
```


#### Usage

icon() 方法的调用与 Icon.vue 组件类似，调用语法如下：

```html
<ul class="toolbar">
  <li class="toolbar__item" id="up"></li>
  <li class="toolbar__item" id="down"></li>
  <li class="toolbar__item" id="tips"></li>  
</ul>
```

```js
// 引入 icon() 方法
import icon from '@yaohaixiao/icons.js/components.vue'
// 在使用组件前，需要先调用 paint() 方法将 svg 图标集绘制到文档中
import paint from '@yaohaixiao/icons.js/paint'

const NPM =
  '<symbol id="rdc-icon-npm" viewBox="0 0 2500 2500"><path d="M0 0h2500v2500H0z" fill="#c00"/><path d="M1241.5 268.5h-973v1962.9h972.9V763.5h495v1467.9h495V268.5z" fill="#fff"/></symbol>'
const $up = document.querySelector('#up')
const $tips = document.querySelector('#tips')

paint(NPM)

// 使用 icon() 方法创建一个包含显示 up 图标的 i 标签:
const $iconUp = icon('up')
// 在 id="up" 的工具栏按钮中显示向上图标
$up.appendChild($iconUp)

// 传递 options 参数，控制图标样式
const $iconTips = icon('tips', {
  size: 24, // [24, 26]
  color: '#f00',
  iconSet: 'rdc'
})
// 在 id="tips" 的工具栏按钮中显示提示图标
$tips.appendChild($iconTips)
```



## License
Licensed under MIT License.
