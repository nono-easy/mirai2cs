import {createRouter, createWebHistory} from 'vue-router'

// 路由表（按你的 4 个页面）
const routes = [
  // 兜底 404
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/core/NotFound.vue'),
    meta: {title: '404 - 页面不存在'}
  },
  // 具体路由
  { path: '/', name: 'Home', component: () => import('../views/core/Home.vue'), meta: { title: '首页 - mirai2cs' } },
  { path: '/about', name: 'About', component: () => import('../views/core/About.vue'), meta: { title: '关于 - mirai2cs' } },
  { path: '/history', name: 'History', component: () => import('../views/core/History.vue'), meta: { title: '网站日志 - mirai2cs' } },
  { path: '/cs', name: 'ComputerScience', component: () => import('../views/cs/ComputerScience.vue'), meta: { title: '计算机科学 - mirai2cs' } },
  { path: '/anime', name: 'Anime', component: () => import('../views/culture/Anime.vue'), meta: { title: '动漫 - mirai2cs' } },
  { path: '/japanese', name: 'Japanese', component: () => import('../views/culture/Japanese.vue'), meta: { title: '日语 - mirai2cs' } },
  { path: '/game', name: 'Game', component: () => import('../views/entertainment/Game.vue'), meta: { title: '游戏 - mirai2cs' } },
  { path: '/test', name: 'Test', component: () => import('../views/entertainment/Test.vue'), meta: { title: '测试' } },
  { path: '/neuroscience', name: 'Neuroscience', component: () => import('../views/cs/Neuroscience.vue'), meta: { title: '脑科学 - mirai2cs' } },
  { path: '/nihon', name: 'Nihon', component: () => import('../views/culture/Nihon.vue'), meta: { title: '日本 - mirai2cs' } }
  {path: '/', name: 'Home', component: () => import('../views/core/Home.vue'), meta: {title: '首页 - mirai2cs'}},
  {
    path: '/software-engineering',
    name: 'SoftwareEngineering',
    component: () => import('../views/can/SoftwareEngineering.vue'),
    meta: {title: '软件工程 - mirai2cs'}
  },
  {path: '/about', name: 'About', component: () => import('../views/core/About.vue'), meta: {title: '关于 - mirai2cs'}},
  {
    path: '/history',
    name: 'History',
    component: () => import('../views/core/History.vue'),
    meta: {title: '网站日志 - mirai2cs'}
  },
  {
    path: '/cs',
    name: 'ComputerScience',
    component: () => import('../views/cs/ComputerScience.vue'),
    meta: {title: '计算机科学 - mirai2cs'}
  },
  {
    path: '/anime',
    name: 'Anime',
    component: () => import('../views/culture/Anime.vue'),
    meta: {title: '动漫 - mirai2cs'}
  },
  {
    path: '/japanese',
    name: 'Japanese',
    component: () => import('../views/culture/Japanese.vue'),
    meta: {title: '日语 - mirai2cs'}
  },
  {
    path: '/game',
    name: 'Game',
    component: () => import('../views/entertainment/Game.vue'),
    meta: {title: '游戏 - mirai2cs'}
  },
  {path: '/test', name: 'Test', component: () => import('../views/entertainment/Test.vue'), meta: {title: '测试'}},
  {
    path: '/neuroscience',
    name: 'Neuroscience',
    component: () => import('../views/cs/Neuroscience.vue'),
    meta: {title: '脑科学 - mirai2cs'}
  },
  {
    path: '/nihon',
    name: 'Nihon',
    component: () => import('../views/culture/Nihon.vue'),
    meta: {title: '日本 - mirai2cs'}
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // 切页回到顶部
  scrollBehavior() {
    return {top: 0}
  },
})

// 切页改标题
router.afterEach((to) => {
  document.title = (to.meta && to.meta.title) ? to.meta.title : 'mirai2cs'
})

export default router
