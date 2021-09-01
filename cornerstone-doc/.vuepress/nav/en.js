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
			text: "cornerstoneTools V2",
			link: path.resolve(base, 'cornerstone-tools-2-examples/index.html'),
			rel: "noopener",
			target:"_blank"
		},
		{
			text: "cornerstoneTools latest",        
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
]);
