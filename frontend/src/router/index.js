import { createRouter, createWebHistory } from 'vue-router'

// 路由表（按你的 4 个页面）
const routes = [
  // 兜底 404
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/NotFound.vue'), meta: { title: '404 - 页面不存在' } },
  // 具体路由
  { path: '/', name: 'Home', component: () => import('../views/Home.vue'), meta: { title: '首页 - mirai2cs' } },
  { path: '/about', name: 'About', component: () => import('../views/About.vue'), meta: { title: '关于 - mirai2cs' } },
  { path: '/history', name: 'History', component: () => import('../views/History.vue'), meta: { title: '网站日志 - mirai2cs' } },
  { path: '/nihon', name: 'Nihon', component: () => import('../views/Nihon.vue'), meta: { title: '日本 - mirai2cs' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // 切页回到顶部
  scrollBehavior() {
    return { top: 0 }
  },
})

// 切页改标题
router.afterEach((to) => {
  document.title = (to.meta && to.meta.title) ? to.meta.title : 'mirai2cs'
})

export default router
