module.exports = [
    {
        text: "guide",
        link: "/SUMMARY/"
    },
    {
        text: "example",
        link: '/example/index.html',
        rel: "noopener",
        target: "_blank"
    },
    {
        text: "API",
        link: "/api"
    },
    {
        text: "plugins",
        items: [
            {
                text: "Image Loader",
                items: [
                    {
                        text: "xxx",
                        link: "/",
                        rel: "noopener",
                        target: "_blank"
                    }
                ]
            }
        ]
    },
    {
        text: 'show more',
        ariaLabel: '了解更多',
        items: [
            {
                text: 'API',
                items: [
                    {
                        text: 'CLI',
                        link: '/api/cli.html'
                    },
                    {
                        text: 'Node',
                        link: '/api/node.html'
                    }
                ]
            },
            {
                text: '开发指南',
                items: [
                    {
                        text: '本地开发',
                        link: '/miscellaneous/local-development.html'
                    },
                    {
                        text: '设计理念',
                        link: '/miscellaneous/design-concepts.html'
                    },
                    {
                        text: 'FAQ',
                        link: '/faq/'
                    },
                    {
                        text: '术语',
                        link: '/miscellaneous/glossary.html'
                    }
                ]
            },
            {
                text: '其他',
                items: [
                    {
                        text: '从 0.x 迁移',
                        link: '/miscellaneous/migration-guide.html'
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
