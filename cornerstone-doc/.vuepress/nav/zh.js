const { path } = require("@vuepress/shared-utils");

const toolsVersionItem = (version, base) => ({
	text: version,
	link: path.resolve(base, `zh/cornerstone-tools/${version}/SUMMARY`),
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
    items: [
      {
        text: "cornerstone",        
        link: path.resolve(base, 'example/index.html'),
        rel: "noopener",
        target:"_blank"
      },
      {
        text: "cornerstoneTools V2",
        link: path.resolve(base, 'cornerstone-tools-2-examples/index.html'),
        rel: "noopener",
        target:"_blank"
      },
      {
        text: "cornerstoneTools 最新",
        link: path.resolve(base, 'cst-examples/index.html'),
        rel: "noopener",
        target:"_blank"
      },
    ],
	},
	{
		text: "API",
		link: "/zh/api"
	},
	{
		text: "插件",
		items: [
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
]);
