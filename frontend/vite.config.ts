/* eslint-env node */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import { visualizer } from 'rollup-plugin-visualizer'
import Markdown from 'unplugin-vue-markdown/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts-next'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

const enableAnalyzer = process.env.VITE_VISUALIZER === 'true'
const re = (s: string) => new RegExp(s.replace(/\//g, '[\\\\/]'))

export default defineConfig({
  esbuild: { target: 'es2020' },

  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    Markdown({ headEnabled: true, frontmatter: true, wrapperClasses: 'article-md' }),
    Pages({
      extensions: ['vue', 'md'],
      importMode: (fp) => (fp.includes('/src/pages/index.') ? 'sync' : 'async'),
    }),
    Layouts({ layoutsDirs: 'src/layouts', defaultLayout: 'article' }),

    AutoImport({ resolvers: [ElementPlusResolver()], dts: 'src/auto-imports.d.ts' }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: 'css' })],
      dts: 'src/components.d.ts',
    }),

    enableAnalyzer &&
      visualizer({
        filename: './stats.html',
        gzipSize: true,
        brotliSize: true,
        emitFile: false,
        open: true,
      }),
  ].filter(Boolean),

  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
  },

  optimizeDeps: {
    include: ['vue', 'vue-router', 'element-plus'],
  },

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (re('node_modules/vue').test(id)) return 'vendor-vue'
            if (re('node_modules/element-plus').test(id)) return 'vendor-element'
            if (re('node_modules/lodash').test(id)) return 'vendor-lodash'
            return 'vendor'
          }
        },
      },
    },
    // chunkSizeWarningLimit: 1500,
  },
})
