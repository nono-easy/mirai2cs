// createApp，挂 router/head/全局样式
import { createApp } from 'vue'
import { createHead } from '@unhead/vue/client'
import App from './App.vue'

import './styles/base.css'
import './styles/theme.css'

import router from './router'

const app = createApp(App)

app.use(router)

// head
const head = createHead()
app.use(head)

app.mount('#app')
