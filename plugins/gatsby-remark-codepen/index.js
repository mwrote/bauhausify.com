const visit = require('unist-util-visit')
const parse = require('url-parse')

const initialOptions = {
  theme: 'light', // dark, light
  width: '100%',
  height: 400,
  defaultTab: [
    // html, css, js, result
    'js',
    'result',
  ],
  run: 'false', // false is /embed/preview, true is /embed
}

module.exports = async ({ markdownAST }) => {
  visit(markdownAST, 'text', async node => {
    const { value } = node
    const isPenURI = value.match(
      /https:\/\/(www\.)?codepen\.io\/([A-Za-z0-9-_?=]*\/pen\/[A-Za-z0-9-_?=]*)/gi
    )

    if (isPenURI) {
      const url = parse(value, true)

      const penId = url.pathname.split('/').pop()
      const penUser = url.pathname.split('/')[1]
      console.log(`\n Embeding pen: ${penId} by ${penUser} \n`)

      const params = url.query
      const options = Object.assign({}, initialOptions)

      if (Object.keys(params).length) {
        Object.keys(params).forEach(paramsKey => {
          Object.keys(options).forEach(optionKey => {
            if (paramsKey === optionKey) {
              options[optionKey] = params[paramsKey]
            }
          })
        })
      }

      const { width, height, theme } = options
      const run = options.run === 'false' ? '/preview' : ''
      const defaultTab = Array.isArray(options.defaultTab)
        ? options.defaultTab.join(',')
        : options.defaultTab

      node.type = 'html'
      node.value = `<div class="embed-codepen"><iframe
        height='${height}'
        scrolling='no'
        src='//codepen.io/${penUser}/embed${run}/${penId}/?height=${height}&theme-id=${theme}&default-tab=${defaultTab}'
        frameborder='no'
        allowtransparency='true'
        allowfullscreen='true'
        style='width: ${width};'></iframe></div>`
    }
  })

  return markdownAST
}
