# 快速开始

## 介绍

mylib-template 是一个基于 Vue3 的组件库和工具集模板项目，包含以下几个部分：

- UI 组件库：提供常用的 UI 组件
- 工具函数：提供常用的工具函数
- Hooks：提供可复用的组合式函数

## 安装

使用包管理器安装：

::: code-group

```bash [npm]
npm install @mylib/ui @mylib/utils @mylib/hooks
```

```bash [yarn]
yarn add @mylib/ui @mylib/utils @mylib/hooks
```

```bash [pnpm]
pnpm add @mylib/ui @mylib/utils @mylib/hooks
```

```bash [bun]
bun add @mylib/ui @mylib/utils @mylib/hooks
```

:::

## 使用

### UI 组件

```ts
import { createApp } from 'vue';
import UI from '@mylib/ui';
import '@mylib/ui/dist/styles/index.css';
const app = createApp(App);
app.use(UI);

// 按需引入
import { Button } from '@mylib/ui';
import '@mylib/ui/dist/styles/index.css';
const app = createApp(App);
app.use(Button);
```

### 工具函数

```ts
import { isString } from '@mylib/utils';
console.log(isString('hello')); // true
```

### Hooks

```ts
import { useCounter } from '@mylib/hooks';
const { count, increment, decrement } = useCounter();
```
