module.exports = {
  plugins: ['@vuepress/last-updated'],
  base: "/cornerstone-book/",
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    '/': {
      lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
      title: 'Cornerstone',
      description: 'Cornerstone is an open source project with a goal to deliver a complete web based medical imaging platform.'
    },
    '/zh/': {
      lang: '中文',
      title: 'Cornerstone',
      description: 'Cornerstone 是一个开源项目，致力于交付一个基于 web 端的医疗影像平台。'
    }
  },

  themeConfig: {
    lastUpdated: 'Last Updated',
    sidebar: "auto",
    nav: [
      { text: 'Home', link: '' },
      { text: 'Guide', link: 'guide/' },
      { text: 'External', link: 'https://google.com' },
    ]
  }
}