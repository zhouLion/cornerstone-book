const { path } = require("@vuepress/shared-utils");

const toolsVersionItem = (version, base) => ({
	text: version,
	link: path.resolve(base, `/cornerstone-tools/${version}/SUMMARY`),
	rel: "noopener",
	target: "_blank"
});

module.exports = (base) => ([
	{
		text: "指南",
		link: "/zh/SUMMARY/"
	},
	{
		text: "示例",
		link: path.resolve(base, 'example/index.html'),
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
			// {
			// 	text: "图像加载器",
			// 	items: [
			// 		{
			// 			text: "xxx",
			// 			link: "/zh/",
			// 			rel: "noopener",
			// 			target: "_blank"
			// 		}
			// 	]
			// },
			{
				text: "基石工具库",
				items: [
          toolsVersionItem("latest", base),
          toolsVersionItem("v2", base),
          toolsVersionItem("v3", base),
				]
			},
		]
	},
	// {
  //   text: '了解更多',
  //   ariaLabel: '了解更多',
  //   items: [
  //     {
  //       text: 'API',
  //       items: [
  //         {
  //           text: 'CLI',
  //           link: '/zh/api/cli.html'
  //         },
  //         {
  //           text: 'Node',
  //           link: '/zh/api/node.html'
  //         }
  //       ]
  //     },
  //     {
  //       text: '开发指南',
  //       items: [
  //         {
  //           text: '本地开发',
  //           link: '/zh/miscellaneous/local-development.html'
  //         },
  //         {
  //           text: '设计理念',
  //           link: '/zh/miscellaneous/design-concepts.html'
  //         },
  //         {
  //           text: 'FAQ',
  //           link: '/zh/faq/'
  //         },
  //         {
  //           text: '术语',
  //           link: '/zh/miscellaneous/glossary.html'
  //         }
  //       ]
  //     },
  //     {
  //       text: '其他',
  //       items: [
  //         {
  //           text: '从 0.x 迁移',
  //           link: '/zh/miscellaneous/migration-guide.html'
  //         },
  //         {
  //           text: 'Changelog',
  //           link: 'https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md'
  //         }
  //       ]
  //     }
  //   ]
  // },
]);
