module.exports = [
	{
		text: "指南",
		link: "/zh/SUMMARY/"
	},
	{
		text: "示例",
		link: "/example/index.html",
		rel: "noopener",
		target:"_blank"
	},
	{
		text: "API",
		link: "/zh/api"
	},
	{
		text: "插件",
		items: [
			{
				text: "Image Loader",
				items: [
					{
						text: "xxx",
						link: "/zh/",
						rel: "noopener",
						target: "_blank"
					}
				]
			}
		]
	},
	{
    text: '了解更多',
    ariaLabel: '了解更多',
    items: [
      {
        text: 'API',
        items: [
          {
            text: 'CLI',
            link: '/zh/api/cli.html'
          },
          {
            text: 'Node',
            link: '/zh/api/node.html'
          }
        ]
      },
      {
        text: '开发指南',
        items: [
          {
            text: '本地开发',
            link: '/zh/miscellaneous/local-development.html'
          },
          {
            text: '设计理念',
            link: '/zh/miscellaneous/design-concepts.html'
          },
          {
            text: 'FAQ',
            link: '/zh/faq/'
          },
          {
            text: '术语',
            link: '/zh/miscellaneous/glossary.html'
          }
        ]
      },
      {
        text: '其他',
        items: [
          {
            text: '从 0.x 迁移',
            link: '/zh/miscellaneous/migration-guide.html'
          },
          {
            text: 'Changelog',
            link: 'https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md'
          }
        ]
      }
    ]
  },
];
