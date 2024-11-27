import { defineConfig } from 'vite';
// 导入 Vue 插件
import vue from '@vitejs/plugin-vue';
// 导入 TypeScript 声明文件插件
import dts from 'vite-plugin-dts';
// node
import path from 'node:path';

// 导出 Vite 配置
export default defineConfig({
  resolve: {
    alias: {
      '~': path.resolve(import.meta.dirname, 'src'),
    },
  },
  plugins: [
    // 使用 Vue 插件
    vue(),
    // 使用 TypeScript 声明文件插件
    dts({
      // 包含的文件类型
      include: ['src/**/*.ts', 'src/**/*.vue'],
      // 输出目录
      outDir: ['dist/es', 'dist/lib'],
      // 写入文件前的处理
      beforeWriteFile: (filePath, content) => ({
        // 替换文件路径中的 '/src/' 为 '/'
        filePath: filePath.replace('/src/', '/'),
        content,
      }),
    }),
  ],
  // 构建配置
  build: {
    // 目标环境
    target: 'modules',
    // 输出目录
    outDir: 'dist',
    // 清空输出目录
    emptyOutDir: true,
    // 库配置
    lib: {
      // 入口文件
      entry: path.resolve(import.meta.dirname, 'src/index.ts'),
      // 输出格式
      formats: ['es', 'cjs'],
      // 输出文件名
      fileName: (format) =>
        `${format === 'es' ? 'es' : 'lib'}/index.${format === 'es' ? 'mjs' : 'js'}`,
      // CSS 输出文件名
      cssFileName: `style`,
    },
    // Rollup 选项
    rollupOptions: {
      // 外部依赖
      external: ['vue'],
      // 输出配置
      output: {
        // 导出方式
        exports: 'named',
      },
    },
  },
});
