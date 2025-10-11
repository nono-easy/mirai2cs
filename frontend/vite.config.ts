// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { visualizer } from 'rollup-plugin-visualizer'
import Markdown from 'unplugin-vue-markdown/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts-next'

// ✅ 新增：Element Plus 按需自动引入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    Markdown({
      headEnabled: true,
      frontmatter: true,
      wrapperClasses: 'article-md',
    }),
    Pages({ extensions: ['vue', 'md'] }),
    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'article',
    }),

    // ✅ 自动引入 Element Plus 组件 & API（会生成 d.ts，IDE 也友好）
    AutoImport({
      resolvers: [ElementPlusResolver()],
      dts: 'src/auto-imports.d.ts',
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: 'css' })],
      dts: 'src/components.d.ts',
    }),

    visualizer({
      filename: './stats.html',
      gzipSize: true,
      brotliSize: true,
      emitFile: false,
      open: false,
    }),
  ],

  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },

  // ✅ 可选：拆 vendor，利于缓存 & 减小入口块
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('/vue')) return 'vendor-vue'
            if (id.includes('element-plus')) return 'vendor-element'
            if (id.match(/lodash/)) return 'vendor-lodash'
            return 'vendor'
          }
        },
      },
    },
    // 如果告警还在且合理，可以放宽阈值（最后再开）
    // chunkSizeWarningLimit: 1500,
  },
})
