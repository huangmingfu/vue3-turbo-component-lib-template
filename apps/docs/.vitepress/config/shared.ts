import { defineConfig } from 'vitepress';
import vueJsx from '@vitejs/plugin-vue-jsx';
import { vitepressDemoPlugin } from 'vitepress-demo-plugin';
import path from 'node:path';

export const shared = defineConfig({
  // 设置基础路径,用于GitHub Pages部署
  base: '/vue3-turbo-component-lib-template/',
  // 启用最后更新时间
  lastUpdated: true,
  // 生成干净的 URL（去掉.html后缀）
  cleanUrls: true,
  // 将元数据拆分为单独的 chunk
  metaChunk: true,
  // URL重写规则,将zh/开头的路径重写为根路径
  rewrites: {
    'zh/:rest*': ':rest*',
  },
  // 配置HTML头部标签
  head: [['link', { rel: 'icon', href: '/vue3-turbo-component-lib-template/favicon.ico' }]],
  // Markdown配置
  markdown: {
    // 配置Markdown解析器
    config(md) {
      // 使用vitepress-demo-plugin插件,用于展示示例代码
      md.use(vitepressDemoPlugin, {
        demoDir: path.resolve(__dirname, '../../examples'),
      });
    },
  },
  // Vite配置
  vite: {
    // 添加vue-jsx插件支持
    plugins: [vueJsx()],
  },
});