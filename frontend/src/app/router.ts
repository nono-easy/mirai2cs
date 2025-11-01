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
    meta: { title: '首页' },
  },
  {
    path: '/software-engineering',
    name: 'SoftwareEngineering',
    component: () => import('@/pages/software-engineering/index.md'),
    meta: { title: '软件工程' },
  },
  {
    path: '/communication',
    name: 'Communication',
    component: () => import('@/pages/communication/index.md'),
    meta: { title: '沟通' },
  },
  {
    path: '/first-principles',
    name: 'FirstPrinciples',
    component: () => import('@/pages/first-principles/index.md'),
    meta: { title: '第一性原理' },
  },
  {
    path: '/q-a',
    name: 'QuestionAnswer',
    component: () => import('@/pages/question-answer/index.md'),
    meta: { title: '问题 & 答案' },
  },
  {
    path: '/encyclopedia',
    name: 'EncyclopediaHome',
    component: () => import('../views/encyclopedia/EncyclopediaHome.vue'),
    meta: { title: '百科' },
  },
  {
    path: '/encyclopedia/mirai2cs',
    name: 'EncyclopediaMirai2cs',
    component: () => import('../views/encyclopedia/Mirai2csEntry.vue'),
    meta: { title: 'mirai2cs - 百科' },
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
    meta: { title: '关于' },
  },
  {
    path: '/history',
    name: 'History',
    component: () => import('../views/core/History.vue'),
    meta: { title: '网站日志' },
  },
  {
    path: '/cs',
    name: 'ComputerScience',
    component: () => import('../views/cs/ComputerScience.vue'),
    meta: { title: '计算机科学' },
  },
  {
    path: '/anime',
    name: 'Anime',
    component: () => import('../views/culture/Anime.vue'),
    meta: { title: '动漫' },
  },
  {
    path: '/japanese',
    name: 'Japanese',
    component: () => import('../views/culture/Japanese.vue'),
    meta: { title: '日语' },
  },
  {
    path: '/game',
    name: 'Game',
    component: () => import('../views/entertainment/Game.vue'),
    meta: { title: '游戏' },
  },
  {
    path: '/snake',
    name: 'SnakeGame',
    component: () => import('../views/entertainment/SnakeGame.vue'),
    meta: { title: '贪吃蛇' },
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
    meta: { title: '脑科学' },
  },
  {
    path: '/lab',
    name: 'Lab',
    component: () => import('../views/cs/FutureLabRetro.vue'),
    meta: { title: 'Lab' },
  },
  {
    path: '/nihon',
    name: 'Nihon',
    component: () => import('../views/culture/Nihon.vue'),
    meta: { title: '日本' },
  },
  {
    path: '/password-generator',
    name: 'password-generator',
    component: () => import('@/views/tools/PasswordGenerator.vue'),
    meta: { title: '密码生成器' },
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
