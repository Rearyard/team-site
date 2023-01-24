import { defineUserConfig,defaultTheme } from 'vuepress'

export default defineUserConfig({
    lang: 'zh-CN',
    title: 'Rearyard Team',
    description: '咕咕咕咕咕咕',
    theme: defaultTheme({
        navbar: [
            {
                text: "了解Rearyard",
                children: [
                    {
                        text: '价值主张',
                        link: '/description/value-proposition/',
                    },
                    {
                        text: '平台规则',
                        link: '/description/platform-rules/',
                    },
                    {
                        text: '内容管理',
                        link: '/description/encourage-and-prohibit/',
                    },
                ],
            },
            {
                text: '加入我们',
                link: '/hire/',
            },
            {
                text: '捐赠',
                link: '/donation/',
            },
        ]
    }),
})
