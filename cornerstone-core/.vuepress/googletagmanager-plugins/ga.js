const { path } = require('@vuepress/shared-utils')

module.exports = (options = {}, context) => ({
  define () {
    const { siteConfig = {}} = context
    const ga = options.ga || siteConfig.ga
    const GM_ID = ga || false
    return { GM_ID }
  },

  enhanceAppFiles: path.resolve(__dirname, 'enhanceAppFile.js')
})
