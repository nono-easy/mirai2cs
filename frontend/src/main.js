import { createApp } from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './styles/base.css'   // ✅ 新增：防滚条基线
import './styles/theme.css'  // ✅ 重命名后的原 style.css（外观）

import router from './router'

const app = createApp(App)
app.use(ElementPlus).use(router)

// 建议：在各组件内按需导入图标，例如：
// import { Edit } from '@element-plus/icons-vue'
// 并在该组件内通过 <el-icon><Edit /></el-icon> 使用。
app.mount('#app')
