<template>
  <i
    v-if="name"
    class="ijs-icon"
    ref="icon">
    <svg
      v-if="!isSVG(name)"
      aria-hidden="true"
      :style="cssRules"
      class="ijs-icon__svg">
      <use v-bind="binds" />
    </svg>
  </i>
</template>

<script>
/**
 * Icon.vue - SVG 图标显示组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2023.08.22
 */
import isSVG from '../utils/isSVG'
import isArray from '../utils/isArray'
import appendTo from '../appendTo'

export default {
  name: 'IjsIcon',
  componentName: 'IjsIcon',
  props: {
    // icons.js 自带的默认图标名称
    // 或者 SVG 图标字符串
    name: {
      type: String,
      default: ''
    },
    size: {
      type: [String, Number, Array],
      default: 0
    },
    color: {
      type: String,
      default: ''
    },
    iconSet: {
      type: String,
      default: 'icon'
    }
  },
  computed: {
    binds() {
      const iconSet = this.iconSet
      const name = this.name
      const xlink =
        iconSet && iconSet !== 'icon'
          ? `#${iconSet}-icon-${name}`
          : `#icon-${name}`

      return {
        'xlink:href': xlink
      }
    },
    width() {
      const size = this.size
      return isArray(size) ? size[0] : size
    },
    height() {
      const size = this.size
      return isArray(size) ? size[1] : size
    },
    defaultRules() {
      const size = this.size
      return size ? `width:${this.width}px;height:${this.height}px;` : null
    },
    cssRules() {
      const defaultRules = this.defaultRules
      const color = this.color

      return color ? defaultRules + `color:${color}` : defaultRules
    }
  },
  mounted() {
    const $icon = this.$el
    const name = this.name
    const size = this.size
    const color = this.color
    const options = {
      size,
      color
    }

    if (!isSVG(name)) {
      return false
    }

    // 当 name 是一个完整 SVG 图标字符串时，
    // 使用 icons.js 中 appendTo 方法，
    // 直接将 SVG 图标绘制到 this.$el 中
    this.$nextTick(() => {
      appendTo($icon, name, options)
    })
  },
  methods: {
    isSVG
  }
}
</script>

<style lang="less">
@import './icon';
</style>
