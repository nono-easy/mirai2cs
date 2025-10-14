// 只维护可被收录的静态路径；想屏蔽就注释掉或加 noindex:true
export const publicRoutes = [
  { path: '/', changefreq: 'daily', priority: 1.0 },
  { path: '/software-engineering', changefreq: 'weekly', priority: 0.7 },
  { path: '/computer-science', changefreq: 'weekly', priority: 0.7 },
  { path: '/anime', changefreq: 'weekly', priority: 0.7 },
  { path: '/japanese', changefreq: 'weekly', priority: 0.7 },
  { path: '/neuroscience', changefreq: 'weekly', priority: 0.7 },
  { path: '/lab', changefreq: 'weekly', priority: 0.7 },
  // 以后新增：{ path: "/blog" },
  // 不想收录：{ path: "/debug", noindex: true },
] as const
