// 仅做路由增强（重定向、守卫、滚动行为）
import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
  type RouterScrollBehavior,
} from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/core/Home.vue'),
    meta: { title: '首页 - mirai2cs' },
  },
  {
    path: '/software-engineering',
    name: 'SoftwareEngineering',
    component: () => import('@/pages/software-engineering/index.md'),
    meta: { title: '软件工程 - mirai2cs' },
  },
  {
    path: '/communication',
    name: 'Communication',
    component: () => import('@/pages/communication/index.md'),
    meta: { title: '沟通 - mirai2cs' },
  },
  {
    path: '/encyclopedia',
    name: 'EncyclopediaHome',
    component: () => import('../views/encyclopedia/EncyclopediaHome.vue'),
    meta: { title: '百科 - mirai2cs' },
  },
  {
    path: '/encyclopedia/mirai2cs',
    name: 'EncyclopediaMirai2cs',
    component: () => import('../views/encyclopedia/Mirai2csEntry.vue'),
    meta: { title: 'mirai2cs - 百科 - mirai2cs' },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/core/About.vue'),
    meta: { title: '关于 - mirai2cs' },
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('../views/core/History.vue'),
    meta: { title: '网站日志 - mirai2cs' },
  },
  {
    path: '/cs',
    name: 'ComputerScience',
    component: () => import('../views/cs/ComputerScience.vue'),
    meta: { title: '计算机科学 - mirai2cs' },
  },
  {
    path: '/anime',
    name: 'Anime',
    component: () => import('../views/culture/Anime.vue'),
    meta: { title: '动漫 - mirai2cs' },
  },
  {
    path: '/japanese',
    name: 'Japanese',
    component: () => import('../views/culture/Japanese.vue'),
    meta: { title: '日语 - mirai2cs' },
  },
  {
    path: '/game',
    name: 'Game',
    component: () => import('../views/entertainment/Game.vue'),
    meta: { title: '游戏 - mirai2cs' },
  },
  {
    path: '/snake',
    name: 'SnakeGame',
    component: () => import('../views/entertainment/SnakeGame.vue'),
    meta: { title: '贪吃蛇 - mirai2cs' },
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('../views/entertainment/Test.vue'),
    meta: { title: '测试' },
  },
  {
    path: '/neuroscience',
    name: 'Neuroscience',
    component: () => import('../views/cs/Neuroscience.vue'),
    meta: { title: '脑科学 - mirai2cs' },
  },
  {
    path: '/lab',
    name: 'Lab',
    component: () => import('../views/cs/FutureLabRetro.vue'),
    meta: { title: 'Lab - mirai2cs' },
  },
  {
    path: '/nihon',
    name: 'Nihon',
    component: () => import('../views/culture/Nihon.vue'),
    meta: { title: '日本 - mirai2cs' },
  },

  // 兜底 404 —— 必须在最后
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/core/NotFound.vue'),
    meta: { title: '404 - 页面不存在' },
  },
]

const scrollBehavior: RouterScrollBehavior = (_to, _from, saved) => saved ?? { top: 0 }

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior,
})

export default router
export { routes }
