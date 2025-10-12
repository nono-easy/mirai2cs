// src/head.ts
import { createHead, type VueHeadClient } from '@unhead/vue/client'
import {
  TemplateParamsPlugin,
  AliasSortingPlugin,
  // 按需启用 Promise / Deprecations
  // PromisePlugin,
  // DeprecationsPlugin,
} from '@unhead/vue/plugins'

/**
 * 创建全局 Head 实例（Unhead v2 正确写法）
 */
export function createAppHead(): VueHeadClient {
  const head = createHead({
    plugins: [
      TemplateParamsPlugin,
      AliasSortingPlugin,
      // PromisePlugin,
      // DeprecationsPlugin,
    ],
  })

  // 全局默认 SEO / meta 模板
  head.push({
    titleTemplate: (t?: string) => (t ? `${t} | Mirai2CS` : 'Mirai2CS のの的未来计算机科学探索站'),

    htmlAttrs: { lang: 'zh-CN' },

    meta: [
      {
        name: 'description',
        content:
          'Mirai2CS - のの的未来计算机科学探索站，探索计算机、日语、脑科学与二次元文化交叉的奇妙世界。',
      },
      {
        name: 'keywords',
        content: 'Mirai2CS, のの, 计算机科学, Java, 前端, 软件工程, 动漫, 日语, 脑科学',
      },
      { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
      { name: 'theme-color', content: '#409EFF' },

      // OpenGraph / Twitter
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Mirai2CS' },
      { property: 'og:image', content: '/og-image.png' },
      { name: 'twitter:card', content: 'summary_large_image' },
    ],

    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    ],
  })

  return head
}
