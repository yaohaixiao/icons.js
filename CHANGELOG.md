## [1.0.1](https://github.com/yaohaixiao/icons.js/compare/1.0.0...1.0.1) (2023-07-29)


### Bug Fixes

* 修复设置 iconSet = 'icon' 时的逻辑处理问题 ([ffd85b1](https://github.com/yaohaixiao/icons.js/commit/ffd85b171d16ba872cc9fdfe5ebfcae5c0eae811))



# 1.0.0 (2023-07-27)


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




