const { path } = require("@vuepress/shared-utils");

const toolsVersionItem = (version, base) => ({
	text: version,
	link: path.resolve(base, `cornerstone-tools/${version}/SUMMARY`),
	rel: "noopener",
	target: "_blank"
});

module.exports = (base) => ([
	{
		text: "guide",
		link: "/SUMMARY/"
	},
	{
		text: "examples",
		items: [
		{
			text: "cornerstone",        
			link: path.resolve(base, 'example/index.html'),
			rel: "noopener",
			target:"_blank"
		},
		{
			text: "cornerstoneTools",        
			link: path.resolve(base, 'cst-examples/index.html'),
			rel: "noopener",
			target:"_blank"
		},
		],
	},
	{
		text: "API",
		link: "/api"
	},
	{
		text: "plugins",
		items: [
			// {
			// 	text: "Image Loader",
			// 	items: [
			// 		{
			// 			text: "xxx",
			// 			link: "/",
			// 			rel: "noopener",
			// 			target: "_blank"
			// 		}
			// 	]
			// },
			{
				text: "cornerstoneTools",
				items: [
          toolsVersionItem("latest", base),
          toolsVersionItem("v2", base),
          toolsVersionItem("v3", base),
				]
			},
		]
	},
	// {
	// 	text: 'show more',
	// 	ariaLabel: '了解更多',
	// 	items: [
	// 		{
	// 			text: 'API',
	// 			items: [
	// 				{
	// 					text: 'CLI',
	// 					link: '/api/cli.html'
	// 				},
	// 				{
	// 					text: 'Node',
	// 					link: '/api/node.html'
	// 				}
	// 			]
	// 		},
	// 		{
	// 			text: '开发指南',
	// 			items: [
	// 				{
	// 					text: '本地开发',
	// 					link: '/miscellaneous/local-development.html'
	// 				},
	// 				{
	// 					text: '设计理念',
	// 					link: '/miscellaneous/design-concepts.html'
	// 				},
	// 				{
	// 					text: 'FAQ',
	// 					link: '/faq/'
	// 				},
	// 				{
	// 					text: '术语',
	// 					link: '/miscellaneous/glossary.html'
	// 				}
	// 			]
	// 		},
	// 		{
	// 			text: '其他',
	// 			items: [
	// 				{
	// 					text: '从 0.x 迁移',
	// 					link: '/miscellaneous/migration-guide.html'
	// 				},
	// 				{
	// 					text: 'Changelog',
	// 					link: 'https://github.com/vuejs/vuepress/blob/master/CHANGELOG.md'
	// 				}
	// 			]
	// 		}
	// 	]
	// },
]);
