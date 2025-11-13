import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';

export default tseslint.config(
  // 全局忽略配置
  { ignores: ['**/node_modules', '**/dist', '**/*.js'] },

  // 基础配置
  eslint.configs.recommended, // 使用 ESLint 的推荐配置
  tseslint.configs.base, // 使用 TypeScript ESLint 的基础配置
  ...pluginVue.configs['flat/recommended'], // 使用 Vue ESLint 的推荐配置
  ...pluginVue.configs['flat/strongly-recommended'],
  ...pluginVue.configs['flat/essential'],

  // 通用规则配置（适用于所有文件）
  {
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
        document: 'readonly',
        navigator: 'readonly',
        window: 'readonly',
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 2022,
        sourceType: 'module',
      },
      sourceType: 'module',
    },
    rules: {
      // 'no-console': ['error', { allow: ['warn', 'error', 'info', 'clear'] }], // 禁止使用 console 语句，但允许 warn, error, info 和 clear
      'no-debugger': 'error', // 禁止使用 debugger 语句
      'prefer-const': 'error', // 强制使用 const 而不是 let
      'sort-imports': ['error', { ignoreDeclarationSort: true }], // 强制排序导入语句，但忽略声明排序
      'no-duplicate-imports': 'error', // 禁止重复导入
      'no-unused-vars': 'off', // 禁用对未使用变量的检查（针对类型声明）
      'no-var': 'error', // 禁止使用 var
      // typescript 相关规则
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/prefer-ts-expect-error': 'error', // 强制使用 @ts-expect-error 而不是 @ts-ignore
      '@typescript-eslint/consistent-type-imports': [
        'error',
        {
          fixStyle: 'inline-type-imports', // 使用内联类型导入样式
          disallowTypeAnnotations: false, // 允许类型注解
        },
      ],
      '@typescript-eslint/no-import-type-side-effects': 'error', // 禁止导入类型时产生副作用
    },
  },

  // TypeScript 文件配置
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        createDefaultProgram: false,
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        extraFileExtensions: ['.vue'],
        jsxPragma: 'React',
        project: './tsconfig.*.json',
        sourceType: 'module',
      },
    },
    // rules: {},
  },

  // Vue 文件配置
  {
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser', // 使用 TypeScript ESLint 解析器解析 Vue 文件中的 TypeScript
      },
    },
    rules: {
      ...pluginVue.configs.base.rules,
      // Vue 特定规则
      'vue/max-attributes-per-line': 'off', // 关闭每行最多属性数的限制
      'vue/singleline-html-element-content-newline': 'off', // 关闭单行 HTML 元素内容换行的限制
      'vue/multi-word-component-names': 'off', // 关闭多单词组件名称的限制
      'vue/html-self-closing': [
        'error',
        {
          html: { component: 'always', normal: 'always', void: 'any' }, // 强制 HTML 组件和普通元素始终自闭合，void 元素可以自闭合或不自闭合
          math: 'always', // 强制 math 元素始终自闭合
          svg: 'always', // 强制 svg 元素始终自闭合
        },
      ],
      'vue/no-unused-vars': [
        'error',
        {
          ignorePattern: '^_',
        },
      ],
      'vue/no-v-html': 'off',
    },
  },
);
