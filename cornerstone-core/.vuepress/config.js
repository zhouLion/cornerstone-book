const { zh, en } = require("./nav/index");

const base =  "/cornerstone-book/";

console.log(zh(base));
module.exports = {
  base,
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/logo512.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/logo512.png', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/logo512.png.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
  ],
  extraWatchFiles: [
    '.vuepress/nav/en.js',
    '.vuepress/nav/zh.js'
  ],
  plugins: [
    [
      '@vuepress/pwa', {
          serviceWorker: true,
          updatePopup: true
      }
    ],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'G-S95NP6G4YB' // UA-00000000-0
      }
    ],
    [
      require('./googletagmanager-plugins/ga'),
      {
        'ga': 'G-S95NP6G4YB' // UA-00000000-0
      }
    ]
  ],
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
    logo: '/logo.png',
    sidebar: "auto",
    smoothScroll: true,
    locales: {
      '/zh/': {
        label: '简体中文',
        selectText: '选择语言',
        ariaLabel: '选择语言',
        nav: zh(base),
      },
      '/': {
        label: 'English',
        selectText: 'Language',
        ariaLabel: 'Language',
        nav: en(base),
      }
    }
  }
}