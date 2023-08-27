const fs = require('fs')
const path = require('path')
const html2jade = require('html2jade')

const convertSvgFolderFilesToPug = () => {
  const folder = 'assets/svg'
  const html = []
  const icons = fs.readdirSync(path.resolve(folder))

  icons.forEach((svg) => {
    const svgPath = `${folder}/${svg}`
    const data = fs.readFileSync(path.resolve(svgPath), {
      encoding: 'utf8',
      flag: 'r'
    })
    const filename = path.basename(svgPath)

    html.push(
      `<div class="section-svg">${data}<p class="section-svg__name">${filename}</p></div>`
    )
  })

  html2jade.convertHtml(html.join(''), { bodyless: true }, (err, jade) => {
    fs.writeFile(`api/pug/icons.pug`, jade, (err) => {
      if (err) {
        console.error(err)
      }

      // file written successfully
      console.log(`icons.pug written successfully`)
    })
  })
}

convertSvgFolderFilesToPug()
