import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// 新：把 Markdown 编译成 Vue 组件（兼容 Vite 7）
import Markdown from 'unplugin-vue-markdown/vite'

// 新：文件即路由（.vue / .md）
import Pages from 'vite-plugin-pages'

// 新：基于目录的布局（给 .md/.vue 套统一外壳）
import Layouts from 'vite-plugin-vue-layouts-next'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    // 让 Vite 同时处理 .vue 和 .md
    vue({ include: [/\.vue$/, /\.md$/] }),

    // Markdown -> Vue
    Markdown({
      headEnabled: false,
      frontmatter: true,
      wrapperClasses: 'article-md',
      // 先不加 markdown-it 插件，跑通后再按需添加
      // markdownItSetup(md) {
      //   md.use(require('markdown-it-anchor'))
      // }
    }),

    // pages 目录自动生成路由（默认扫描 src/pages）
    Pages({ extensions: ['vue', 'md'] }),

    // layouts 目录自动套布局（默认 src/layouts）
    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'article', // 你会新建 src/layouts/article.vue
    }),
  ],

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
