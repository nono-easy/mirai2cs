import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/base.css'
import './styles/theme.css'
import { createAppHead } from './head'

const app = createApp(App)
app.use(router)

const head = createAppHead()
app.use(head)

router.afterEach((to) => {
  const { title, description } = to.meta

  head.push({
    title,
    meta: description
      ? [
          {
            name: 'description',
            content: description as string,
            // 用 key 让 Unhead 对这条描述做“可替换式”去重
            key: 'route:description',
          },
        ]
      : [
          // 如果没有描述，也可以清掉上一页的描述（可选）
          // { name: 'description', content: '', key: 'route:description' }
        ],
  })
})

app.mount('#app')
