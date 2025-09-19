import { createRouter, createWebHistory } from 'vue-router'

// 路由表（按你的 4 个页面）
const routes = [
  { path: '/', name: 'Home', component: () => import('../view/Home.vue'), meta: { title: '首页 - mirai2cs' } },
  { path: '/hello', name: 'HelloWorld', component: () => import('../view/HelloWorld.vue'), meta: { title: 'HelloWorld' } },
  { path: '/about', name: 'About', component: () => import('../view/About.vue'), meta: { title: '关于' } },
  { path: '/containerTest', name: 'ContainerTest', component: () => import('../view/ContainerTest.vue'), meta: { title: 'Container 示例' } },
  { path: '/history', name: 'History', component: () => import('../view/History.vue'), meta: { title: '网站日志' } },
  // 兜底 404
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../view/NotFound.vue'), meta: { title: '404 - 页面不存在' } },
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
