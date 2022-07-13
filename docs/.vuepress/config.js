const { defaultTheme } = require('vuepress')
module.exports = {
  lang: 'zh-CN',
  title: '木',
  description: '这是我的第一个 VuePress 站点',
  theme: defaultTheme({
    navbar: [
      // NavbarItem
      {
        text: 'Code',
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
        text: '首页',
        link: '/'
      },
      {
        text: '代码页',
        link: '/code/'
      },
    ]
  })
}
