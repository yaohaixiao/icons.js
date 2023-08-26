import Outline from '@yaohaixiao/outline.js/src/outline'

const defaults = Outline.DEFAULTS
let outline

defaults.selector = 'h2,h3'
defaults.title = false
defaults.showCode = false
defaults.position = 'sticky'
defaults.parentElement = '#aside'
defaults.scrollElement = '#main'
defaults.articleElement = '#article'
defaults.git = 'https://github.com/yaohaixiao/icons.js'
defaults.tags = 'https://github.com/yaohaixiao/icons.js/tags'
defaults.issues = 'https://github.com/yaohaixiao/icons.js/issues'
defaults.chapterTextFilter = (text) => {
  return text.replace(/\(.*?\)/, '()')
}

outline = new Outline(Outline.DEFAULTS)
