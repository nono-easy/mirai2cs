<template>
  <!-- 整体骨架：Header / Main / Footer 可按需扩展 -->
  <el-container class="home-layout">
    <el-main>
      <!-- A. 顶部 Hero：站娘 / 品牌 / 站点使命 / CTA -->
      <section class="hero container" aria-labelledby="hero-title">
        <el-row :gutter="24" align="middle">
          <!-- 媒体区 -->
          <el-col :xs="24" :md="8">
            <div class="hero-media">
              <img src="/mirai2cs-logo.png" alt="Mirai2CS 站娘" loading="eager" />
            </div>
          </el-col>

          <!-- 文案区 -->
          <el-col :xs="24" :md="16">
            <div class="hero-content">
              <h1 id="hero-title" class="site-title">Mirai2CS</h1>
              <p class="tagline">のの的未来计算机科学探索站</p>
              <p class="intro">
                记录学习、思考与好奇心：Java · 动漫 · 日语 · 脑科学 · 未来技术交叉。
              </p>

              <div class="cta">
                <el-button type="primary" @click="goGithub">GitHub</el-button>
                <router-link to="/about" class="link">关于我</router-link>
                <a href="mailto:nono.mirai2cs@gmail.com" class="link">联系站长</a>
              </div>
            </div>
          </el-col>
        </el-row>
      </section>

      <!-- B. 主题入口：用 el-card 做卡片、el-row/el-col 做栅格 -->
      <section class="topics container" aria-labelledby="topics-title">
        <header class="section-header">
          <h2 id="topics-title">按主题浏览</h2>
          <p class="section-sub">先看看大的方向，感兴趣再点进去细分</p>
        </header>

        <el-row :gutter="16" class="topic-grid">
          <el-col :xs="24" :sm="12" :lg="8">
            <router-link to="/cs" class="topic-link">
              <el-card shadow="hover" class="topic-card">
                <h3>计算机科学</h3>
                <p>Java / 算法 / 系统基础 / 工程化</p>
              </el-card>
            </router-link>
          </el-col>

          <el-col :xs="24" :sm="12" :lg="8">
            <router-link to="/anime" class="topic-link">
              <el-card shadow="hover" class="topic-card">
                <h3>动漫・Galgame</h3>
                <p>观影札记 / 推荐 / 文化杂谈</p>
              </el-card>
            </router-link>
          </el-col>

          <el-col :xs="24" :sm="12" :lg="8">
            <router-link to="/japanese" class="topic-link">
              <el-card shadow="hover" class="topic-card">
                <h3>日语</h3>
                <p>学习方法 / 语法要点 / 资料整理</p>
              </el-card>
            </router-link>
          </el-col>

          <el-col :xs="24" :sm="12" :lg="8">
            <router-link to="/brain" class="topic-link">
              <el-card shadow="hover" class="topic-card">
                <h3>脑科学</h3>
                <p>神经科学 / 认知 / AI 与大脑</p>
              </el-card>
            </router-link>
          </el-col>

          <el-col :xs="24" :sm="12" :lg="8">
            <router-link to="/lab" class="topic-link">
              <el-card shadow="hover" class="topic-card">
                <h3>实验室・随想</h3>
                <p>小项目 / 想法 / 试验田</p>
              </el-card>
            </router-link>
          </el-col>
        </el-row>
      </section>

      <!-- C. 最近更新：用 el-card + 栅格，后续接入真实数据 -->
      <section class="updates container" aria-labelledby="updates-title">
        <header class="section-header">
          <h2 id="updates-title">最近更新</h2>
          <p class="section-sub">最新文章 / 笔记 / 网站日志</p>
        </header>

        <el-row :gutter="16" class="updates-list">
          <el-col v-for="i in 3" :key="i" :xs="24" :sm="12" :lg="8">
            <el-card class="post-item" shadow="never">
              <h3 class="post-title">占位标题 {{ i }}</h3>
              <p class="post-meta">2025-09-30 · 分类占位</p>
              <p class="post-excerpt">这里是一段 1~2 行的摘要，占位说明内容……</p>
              <router-link class="readmore" :to="`/post/demo-${i}`">阅读更多 →</router-link>
            </el-card>
          </el-col>
        </el-row>
      </section>
    </el-main>
  </el-container>
</template>

<script setup>
const goGithub = () => {
  window.open('https://github.com/nono-easy/mirai2cs', '_blank')
}
</script>

<style scoped>
/* ===== 基础布局变量（可抽到全局） ===== */
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

.home-layout {
  min-height: 100%;
  background: var(--el-bg-color-page, #f6f7fb);
}

.container {
  max-width: var(--container-max);
  margin: 0 auto;
  padding: 0 var(--space-3);
}

/* A. Hero */
.hero { padding: var(--space-6) 0 var(--space-6); }
.hero-media { display: flex; justify-content: center; }
.hero-media img {
  width: clamp(100px, 14vw, 180px);
  height: auto;
  border-radius: var(--radius-xl);
  box-shadow: var(--card-shadow);
  background: #fff;
}
.site-title { font-size: clamp(28px, 4vw, 44px); margin: 0 0 var(--space-2); }
.tagline { opacity: .85; margin: 0 0 var(--space-3); }
.intro { line-height: 1.7; margin: 0 0 var(--space-4); }
.cta { display: flex; gap: var(--space-3); align-items: center; }
.cta .link { text-decoration: underline; }

/* B. 主题入口（用 el-card 替代自写卡片） */
.section-header { margin: var(--space-6) 0 var(--space-3); }
.section-sub { opacity: .7; margin-top: var(--space-1); }
.topic-link { text-decoration: none; }
.topic-card { border-radius: var(--radius-xl); }
.topic-card h3 { margin: 0 0 var(--space-1); }
.topic-card p { opacity: .75; margin: 0; }

/* C. 最近更新 */
.updates-list { margin-bottom: var(--space-6); }
.post-item { border-radius: var(--radius-xl); }
.post-title { margin: 0 0 var(--space-1); font-weight: 600; }
.post-meta { opacity: .6; margin: 0 0 var(--space-2); font-size: 14px; }
.post-excerpt { margin: 0 0 var(--space-2); }
.readmore { text-decoration: underline; }

/* D. 页脚（可选） */
.site-footer { padding: var(--space-6) 0 var(--space-6); text-align: center; opacity: .9; }
.footer-nav { display: flex; justify-content: center; gap: var(--space-4); margin-bottom: var(--space-2); }

/* 响应式：el-row/el-col 已处理绝大多数，但可补充微调 */
@media (max-width: 768px) {
  .cta { flex-wrap: wrap; }
}
</style>
