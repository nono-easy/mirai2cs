import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client' // ✅ v2 新路径
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './styles/base.css'
import './styles/theme.css'

import router from './router'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

// 注册 Element Plus 与路由
app.use(ElementPlus)
app.use(router)

// ✅ 注册 head 管理（v2 新写法）
const head = createHead()
app.use(head)

// 注册所有图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
