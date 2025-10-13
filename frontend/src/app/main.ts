import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/styles/tokens.css'
import '@/styles/globals.css'
import '@/styles/theme.css'
import { createAppHead } from './head'

const app = createApp(App)
app.use(router)

const head = createAppHead()
app.use(head)

router.afterEach((to) => {
  const { title, description, image } = (to.meta || {}) as {
    title?: string
    description?: string
    image?: string
  }

  // 计算“绝对 URL”
  const url = to.fullPath.startsWith('http')
    ? to.fullPath
    : `${window.location.origin}${to.fullPath}`

  // 计算 OG 图（支持相对/绝对；没有就走默认）
  const ogImage = image
    ? image.startsWith('http')
      ? image
      : `${window.location.origin}${image}`
    : `${window.location.origin}/og/default-og.png`

  head.push({
    title,

    // canonical（带 key，保证可替换）
    link: [{ rel: 'canonical', href: url, key: 'route:canonical' }],

    // 描述 + OG/Twitter（全部带 key，避免上一页残留）
    meta: [
      description
        ? { name: 'description', content: description, key: 'route:description' }
        : { name: 'description', content: '', key: 'route:description' }, // 可清空上一页描述

      { property: 'og:title', content: title || 'Mirai2CS', key: 'route:og:title' },
      { property: 'og:description', content: description || '', key: 'route:og:description' },
      { property: 'og:url', content: url, key: 'route:og:url' },
      { property: 'og:image', content: ogImage, key: 'route:og:image' },

      { name: 'twitter:title', content: title || 'Mirai2CS', key: 'route:tw:title' },
      { name: 'twitter:description', content: description || '', key: 'route:tw:description' },
      { name: 'twitter:image', content: ogImage, key: 'route:tw:image' },
    ],
  })
})

app.mount('#app')
