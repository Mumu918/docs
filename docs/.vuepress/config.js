const { defaultTheme } = require('vuepress')
const {
  registerComponentsPlugin
} = require('@vuepress/plugin-register-components')
const path = require('path')

module.exports = {
  plugins: [
    registerComponentsPlugin({
      components: {
        Counter: path.resolve(__dirname, './components/Counter.vue')
      }
    })
  ],
  lang: 'zh-CN',
  title: '木',
  description: '这是我的第一个 VuePress 站点',
  head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
  theme: defaultTheme({
    navbar: [
      // NavbarItem
      {
        text: '指导',
        link: '/code/'
      },
      // NavbarGroup
      {
        text: 'Group',
        children: ['/group/foo.md', '/group/bar.md']
      }
    ],
    logo: '/images/logo.png',
    repo: 'https://gitee.com/mumu918/docs',
    sidebar: [
      {
        text: '介绍',
        children: [
          {
            text: '什么是pinia?',
            link: '/code/'
          },
          {
            text: '开始',
            link: '/start/'
          }
        ]
      }
    ]
  })
}
