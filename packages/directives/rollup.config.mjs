import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

/** @type {import('rollup').RollupOptions} */
export default {
  input: 'src/index.ts',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
    },
    {
      file: 'dist/index.mjs',
      format: 'es',
    },
    // 打包出压缩后的文件
    // {
    //   dir: 'dist',
    //   entryFileNames: 'index.min.mjs',
    //   file: `dist/index${minify ? '.min' : ''}.js`, // dir+entryFileNames
    //   format: 'esm',
    //   plugins: [minify && terser()],
    // },
  ],
  plugins: [
    typescript({
      // 指定 tsconfig 文件
      tsconfig: './tsconfig.json',
    }),
    terser(), // 压缩输出（体积减小了，但是不方便查看打包后的代码来排查问题）
  ],
};
