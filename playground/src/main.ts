import { createApp } from 'vue';
import Antd from 'ant-design-vue';
import App from './App.vue';
import router from './router';
import 'ant-design-vue/dist/reset.css';
// 引入UI库的样式
import '@mylib/ui/dist/styles/index.css';

const app = createApp(App);
app.use(Antd); // 全局引入antdv组件
app.use(router);
app.mount('#app');
