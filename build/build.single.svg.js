const fs = require('fs')
const icons = require('../assets/icons.umd')

icons.forEach((symbol) => {
  const patternName = /id="(.*?)"/
  const patternContent = /<symbol(([\s\S])*?)>(.*?)<\/symbol>/
  const patternSize = /viewBox="0 0 (.*?)"/
  const paths = patternContent.exec(symbol)[3]
  const name = patternName.exec(symbol)[1].replace('icon-', '')
  const sizes = patternSize.exec(symbol)[1].split(' ')
  const originWidth = parseInt(sizes[0], 10)
  const originHeight = parseInt(sizes[1], 10)
  const width = 200
  const height = 200
  const fileName = `${name}.svg`
  const icon =
    '<svg xmlns="http://www.w3.org/2000/svg" class="ijs-icon__svg" width="' +
    width +
    '" height="' +
    height +
    '" viewBox="0 0 ' +
    originWidth +
    ' ' +
    originHeight +
    '">' +
    paths +
    '</svg>'

  fs.writeFile(`assets/svg/${fileName}`, icon, (err) => {
    if (err) {
      console.error(err)
    }

    // file written successfully
    console.log(`${fileName} written successfully`)
  })
})
