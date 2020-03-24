module.exports = {
  base: "/",
  title: "丝丝前端团队文档",
  description: "丝丝前端团队文档",
  port: 3001,
  dest: "public",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'vue', link: '/vue/' },
      { text: 'react', link: '/react/' }
    ],
    sidebar: {
      '/vue/': [
        '',
        'one',
        'two'
      ],
      '/react/': [
        '',
        'one',
        'two'
      ],
      '/': [
        {
          title: '组1',
          collapsable: false,
          children: [
            '/', '/home1'
          ]
        },
        {
          title: '组2',
          children: [
            ['/home2', 'home2自定义'],
            '/home3'
          ]
        }
      ]
    }
  }
}