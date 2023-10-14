# [2.4.0](https://github.com/yaohaixiao/icons.js/compare/2.3.0...2.4.0) (2023-10-14)


### Features

* 将 icons.js 中的各个 symbol 拆分为独立的 symbol 脚本（/assets/symbol） ([4bed255](https://github.com/yaohaixiao/icons.js/commit/4bed255aa740e4687f69307df27611df6cb613bf))



# [2.3.0](https://github.com/yaohaixiao/icons.js/compare/2.2.0...2.3.0) (2023-09-22)


### Features

* 添加 getSymbol()、getSymbolName()、getSymbolPath() 和 getSymbolSize() 方法，并更新 API 文档； ([991edeb](https://github.com/yaohaixiao/icons.js/commit/991edeb9b0e9624602c7ee73730442aea5a38c4e))



# [2.2.0](https://github.com/yaohaixiao/icons.js/compare/2.1.0...2.2.0) (2023-09-04)


### Features

* 调整 createElement() 方法，options 参数添加 attrs 属性，用以设置创建 DOM 元素的 HTML 标签，以更好的控制创建图标元素的样式； ([0899fdc](https://github.com/yaohaixiao/icons.js/commit/0899fdc6ec1eec4a945f283a063b87eba83f6123))



# [2.1.0](https://github.com/yaohaixiao/icons.js/compare/2.0.0...2.1.0) (2023-09-04)


### Features

* 调整 createElement() 方法 ([5c5e2a0](https://github.com/yaohaixiao/icons.js/commit/5c5e2a0aa34bf905a376bacb5b09cf32c5b99ccd))



# [2.0.0](https://github.com/yaohaixiao/icons.js/compare/1.8.0...2.0.0) (2023-08-28)


### Features

* 调整代码逻辑，2.0.0 版本开始默认图标为空，需要手动导入 assets/icons.js 中的图标绘制 ([2186036](https://github.com/yaohaixiao/icons.js/commit/21860365f48c18c4edbb12a17d66213338696d85))



# [1.8.0](https://github.com/yaohaixiao/icons.js/compare/1.7.0...1.8.0) (2023-08-27)


### Features

* 调整 assets 资源文件的结构；更新 API 文档，添加内置图标展示； ([f5d559f](https://github.com/yaohaixiao/icons.js/commit/f5d559f4a1e07cf8cf7816bd66a433e985b3cadb))



# [1.7.0](https://github.com/yaohaixiao/icons.js/compare/1.6.0...1.7.0) (2023-08-26)


### Features

* 添加 count() 方法；添加 API 文档；调整工程打包配置； ([582760c](https://github.com/yaohaixiao/icons.js/commit/582760cb0e3acfd3a5fef87b211319708c902355))



# [1.6.0](https://github.com/yaohaixiao/icons.js/compare/1.5.0...1.6.0) (2023-08-26)


### Features

* 扩展 createElement() 和 icon() 以及 appendTo() 方法中 options 参数的配置，新增 attrs 扩展 HTML 属性配置项，以便更好的控制 icons.js 创建的图标元素的样式 ([9f37d1c](https://github.com/yaohaixiao/icons.js/commit/9f37d1c91901d782cf354ad6c152ddae64f458cb))



# [1.5.0](https://github.com/yaohaixiao/icons.js/compare/1.4.1...1.5.0) (2023-08-23)


### Features

* 添加 6 个新的内置图标 ([55ee30a](https://github.com/yaohaixiao/icons.js/commit/55ee30a12ba3a0b60e8f081350556a92c372f5c9))



## [1.4.1](https://github.com/yaohaixiao/icons.js/compare/1.4.0...1.4.1) (2023-08-23)


### Bug Fixes

* 1.4.1 修复文件配置导致无法读取 components 和 utils 目录的文件 ([9344e4e](https://github.com/yaohaixiao/icons.js/commit/9344e4ebfe13b217de0e9cc73de6343853979e1c))



# [1.4.0](https://github.com/yaohaixiao/icons.js/compare/1.3.1...1.4.0) (2023-08-23)


### Features

* 新添加 6 个内置图标 ([62fc0fe](https://github.com/yaohaixiao/icons.js/commit/62fc0fed7529d64fddb44b767a7dbba07056ebba))



## [1.3.1](https://github.com/yaohaixiao/icons.js/compare/1.3.0...1.3.1) (2023-08-23)


### Bug Fixes

* 1. 修复 icon.vue 组件中应用模块路径错误的问题；2. 修复 createElement() 方法中使用 style.cssText 设置多个样式的问题；3. 添加各个方法的基本注释； ([5231596](https://github.com/yaohaixiao/icons.js/commit/5231596d3d7a2a0cee3ed7e78789af741c19e232))



# [1.3.0](https://github.com/yaohaixiao/icons.js/compare/1.2.0...1.3.0) (2023-08-11)


### Features

* 添加 icons 资源文件 ([b45767d](https://github.com/yaohaixiao/icons.js/commit/b45767d6a772e9a3df6b1cb86e03c271545e4d4d))



# [1.2.0](https://github.com/yaohaixiao/icons.js/compare/1.1.0...1.2.0) (2023-08-07)


### Features

* 调整 createElement() 方法，可以直接传递 SVG 字符串，不用依赖 icons 内置的图标 ([5bd28ba](https://github.com/yaohaixiao/icons.js/commit/5bd28ba9f1ca721b8914d6016f6ee6c34939873f))
* 调整 Icon.vue 组件的逻辑，支持直接绘制 svg ([1a4a143](https://github.com/yaohaixiao/icons.js/commit/1a4a1438bb1b250631e22bf1b2320bbd355b59bd))



# [1.1.0](https://github.com/yaohaixiao/icons.js/compare/1.0.5...1.1.0) (2023-08-03)


### Features

* 丰富 icons.js 默认的图标集；修复 getSymbol() 方法中判断图标名称的问题，将 indexOf 改成了 ===，并且需要比较全名 ([6eb6700](https://github.com/yaohaixiao/icons.js/commit/6eb6700901bc8dc8cc9ceb5ecc6799cb4c05c427))



## [1.0.5](https://github.com/yaohaixiao/icons.js/compare/1.0.4...1.0.5) (2023-07-31)


### Bug Fixes

* 修复图标样式显示细节，去掉 margin-top: -0.5em ([b302f0d](https://github.com/yaohaixiao/icons.js/commit/b302f0da5f75e22cd1c838a7afd8dc970d885288))



## [1.0.4](https://github.com/yaohaixiao/icons.js/compare/1.0.3...1.0.4) (2023-07-30)


### Bug Fixes

* 修复 ijs-icon 样式设置细节问题，去掉 overflow: hidden ([7bc7a27](https://github.com/yaohaixiao/icons.js/commit/7bc7a27e9b4e5fa9f7e409385aec1dc0311cc290))



## [1.0.3](https://github.com/yaohaixiao/icons.js/compare/1.0.2...1.0.3) (2023-07-30)


### Bug Fixes

* 修复图标显示的UI细节缺陷 ([f92ae2d](https://github.com/yaohaixiao/icons.js/commit/f92ae2de27cef33da3e3a4fe72801c854d18684e))



## [1.0.2](https://github.com/yaohaixiao/icons.js/compare/1.0.1...1.0.2) (2023-07-30)


### Bug Fixes

* 修复Icon组件的引用路径问题 ([3ebeae1](https://github.com/yaohaixiao/icons.js/commit/3ebeae18f4591892465430b4c4ffd82a93de86fe))



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




