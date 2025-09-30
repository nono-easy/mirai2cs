<template>
  <main class="home">
    <!-- A. 顶部 Hero：站娘 / 品牌 / 站点使命 / CTA -->
    <section class="hero container" aria-labelledby="hero-title">
      <div class="hero-media">
        <!-- TODO: 换成你的站娘图 -->
        <img src="/mirai2cs-logo.png" alt="Mirai2CS 站娘" loading="eager" />
      </div>

      <div class="hero-content">
        <h1 id="hero-title" class="site-title">Mirai2CS</h1>
        <p class="tagline">のの的未来计算机科学探索站</p>
        <p class="intro">
          <!-- TODO: 放你的个人/站点介绍文案（3~5 行） -->
          记录学习、思考与好奇心：Java · 动漫 · 日语 · 脑科学 · 未来技术交叉。
        </p>

        <div class="cta">
          <!-- TODO: 按需替换为路由或外链 -->
          <el-button type="primary" @click="goGithub">GitHub</el-button>
          <router-link to="/about" class="link">关于我</router-link>
          <a href="mailto:nono.mirai2cs@gmail.com" class="link">联系站长</a>
        </div>
      </div>
    </section>

    <!-- B. 主题入口：主题 -> 子主题（点击后再深入） -->
    <section class="topics container" aria-labelledby="topics-title">
      <header class="section-header">
        <h2 id="topics-title">按主题浏览</h2>
        <p class="section-sub">先看看大的方向，感兴趣再点进去细分</p>
      </header>

      <div class="topic-grid">
        <!-- ① 计算机科学 -->
        <router-link to="/cs" class="topic-card">
          <h3>计算机科学</h3>
          <p>Java / 算法 / 系统基础 / 工程化</p>
          <!-- TODO: 子主题在目标页再分组展示 -->
        </router-link>

        <!-- ② 动漫 & Galgame -->
        <router-link to="/anime" class="topic-card">
          <h3>动漫・Galgame</h3>
          <p>观影札记 / 推荐 / 文化杂谈</p>
        </router-link>

        <!-- ③ 日语 -->
        <router-link to="/japanese" class="topic-card">
          <h3>日语</h3>
          <p>学习方法 / 语法要点 / 资料整理</p>
        </router-link>

        <!-- ④ 脑科学 -->
        <router-link to="/brain" class="topic-card">
          <h3>脑科学</h3>
          <p>神经科学 / 认知 / AI 与大脑</p>
        </router-link>

        <!-- ⑤ 随笔/实验（可选） -->
        <router-link to="/lab" class="topic-card">
          <h3>实验室・随想</h3>
          <p>小项目 / 想法 / 试验田</p>
        </router-link>
      </div>
    </section>

    <!-- C. 最近更新：增强“活跃感”和入口性 -->
    <section class="updates container" aria-labelledby="updates-title">
      <header class="section-header">
        <h2 id="updates-title">最近更新</h2>
        <p class="section-sub">最新文章 / 笔记 / 网站日志</p>
      </header>

      <div class="updates-list">
        <!-- TODO: 后续替换为真实数据（Pin 3~6 条） -->
        <article class="post-item" v-for="i in 3" :key="i">
          <h3 class="post-title">占位标题 {{ i }}</h3>
          <p class="post-meta">2025-09-30 · 分类占位</p>
          <p class="post-excerpt">这里是一段 1~2 行的摘要，占位说明内容……</p>
          <router-link class="readmore" :to="`/post/demo-${i}`">阅读更多 →</router-link>
        </article>
      </div>
    </section>
  </main>
</template>

<script setup>
const goGithub = () => {
  window.open('https://github.com/nono-easy/mirai2cs', '_blank')
}
</script>

<style scoped>
/* ===== 基础布局变量（后续可抽到全局） ===== */
:root {
  --container-max: 1120px;
  --space-1: 8px;
  --space-2: 12px;
  --space-3: 16px;
  --space-4: 24px;
  --space-6: 32px;
  --radius-xl: 16px;
  --card-shadow: 0 6px 24px rgba(0,0,0,.06);
}

.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--space-3);
}

/* A. Hero */
.hero {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: var(--space-6);
  align-items: center;
  padding: var(--space-6) 0 var(--space-6);
}
.hero-media img {
  width: 100%;
  height: auto;
  border-radius: var(--radius-xl);
  box-shadow: var(--card-shadow);
  background: #fff;
}
.site-title {
  font-size: clamp(28px, 4vw, 44px);
  margin: 0 0 var(--space-2);
}
.tagline { opacity: .85; margin: 0 0 var(--space-3); }
.intro { line-height: 1.7; margin: 0 0 var(--space-4); }
.cta { display: flex; gap: var(--space-3); align-items: center; }
.cta .link { text-decoration: underline; }

/* B. 主题入口 */
.section-header { margin: var(--space-6) 0 var(--space-3); }
.section-sub { opacity: .7; margin-top: var(--space-1); }
.topic-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  gap: var(--space-4);
}
.topic-card {
  display: block;
  padding: var(--space-4);
  border-radius: var(--radius-xl);
  background: #fff;
  box-shadow: var(--card-shadow);
  transition: transform .12s ease, box-shadow .12s ease;
}
.topic-card:hover { transform: translateY(-2px); box-shadow: 0 10px 28px rgba(0,0,0,.1); }
.topic-card h3 { margin: 0 0 var(--space-1); }
.topic-card p { opacity: .75; margin: 0; }

/* C. 最近更新 */
.updates-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0,1fr));
  gap: var(--space-4);
  margin-bottom: var(--space-6);
}
.post-item {
  background: #fff;
  border-radius: var(--radius-xl);
  box-shadow: var(--card-shadow);
  padding: var(--space-4);
}
.post-title { margin: 0 0 var(--space-1); font-weight: 600; }
.post-meta { opacity: .6; margin: 0 0 var(--space-2); font-size: 14px; }
.post-excerpt { margin: 0 0 var(--space-2); }
.readmore { text-decoration: underline; }

/* D. 页脚 */
.site-footer {
  padding: var(--space-6) 0 var(--space-6);
  text-align: center;
  opacity: .9;
}
.footer-nav {
  display: flex;
  justify-content: center;
  gap: var(--space-4);
  margin-bottom: var(--space-2);
}

/* 响应式 */
@media (max-width: 1024px) {
  .topic-grid, .updates-list { grid-template-columns: repeat(2, minmax(0,1fr)); }
}
@media (max-width: 768px) {
  .hero { grid-template-columns: 1fr; }
  .hero-media { order: -1; } /* 小屏先显示站娘，按需调整 */
  .topic-grid, .updates-list { grid-template-columns: 1fr; }
}
</style>
