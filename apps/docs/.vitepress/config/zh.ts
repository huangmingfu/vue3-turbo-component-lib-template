import { defineConfig } from 'vitepress';

export const zh = defineConfig({
  lang: 'zh-Hans',
  title: '组件库模板文档',
  description: '一个基于 Vue3 的组件库和工具集',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      // { text: '其他', link: '/markdown-examples' },
      { text: '博客', link: 'https://huangmingfu.github.io/my-blog' },
    ],
    sidebar: [
      {
        text: '快速开始',
        items: [{ text: '介绍', link: '/guide/index' }],
      },
      {
        text: '组件（@mylib/ui）',
        items: [
          { text: 'Button 按钮', link: '/packages/ui/button' },
          { text: 'Dialog 对话框', link: '/packages/ui/dialog' },
        ],
      },
      {
        text: 'Hooks（@mylib/hooks）',
        items: [{ text: 'useCounter 计数器', link: '/packages/hooks/useCounter' }],
      },
      {
        text: '指令（@mylib/directives）',
        items: [{ text: 'vFocus 聚焦', link: '/packages/directives/vFocus' }],
      },
      {
        text: '工具函数（@mylib/utils）',
        items: [{ text: '字符串工具', link: '/packages/utils/string' }],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/huangmingfu/vue3-turbo-component-lib-template' },
    ],
  },
});
