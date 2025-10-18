<template>
  <article class="entry">
    <nav class="breadcrumb">
      <RouterLink to="/encyclopedia">百科</RouterLink>
      <span aria-hidden="true">/</span>
      <span>mirai2cs</span>
    </nav>

    <header class="entry-hero">
      <h1>mirai2cs</h1>
      <p>mirai2cs 是のの为记录思考与创造力而打造的个人网站，也是TA探索未来自我可能性的实验场。</p>
    </header>

    <section>
      <h2>命名与愿景</h2>
      <p>
        “Mirai2CS” 的意思大概就是「面向未来的计算机科学」。
        <br />
        “mirai” 来自日语「未来」，“2”谐音“to”，“cs” 指的是 “to computer science”。
        <br />
        这是一个个人网站，用来记录我在计算机科学路上的一些想法和尝试。
      </p>
      <p>
        网站希望成为一个可以自由分享知识、兴趣和灵感的空间，为未来的合作与创作打下基础。
        无论是技术记录、学习心得还是脑洞实验，都能在这里留下痕迹。
      </p>
    </section>

    <section>
      <h2>发展规划</h2>
      <ul>
        <li>
          <strong>知识沉淀：</strong>
          持续扩充百科词条，记录实践中的方法论与工具链。
        </li>
        <li>
          <strong>创意实验：</strong>
          通过小游戏、互动作品等形式探索新的表达方式。
        </li>
        <li>
          <strong>社区连接：</strong>
          未来将开放留言或订阅功能，连接志同道合的朋友。
        </li>
      </ul>
    </section>

    <section>
      <h2>时间线</h2>
      <dl class="timeline">
        <div>
          <dt>2025 年 - 10月</dt>
          <dd>上线 mirai2cs 百科，开始系统地整理个人知识库。</dd>
        </div>
      </dl>
    </section>

    <footer class="entry-footer">
      <RouterLink class="back-link" to="/encyclopedia">返回百科首页</RouterLink>
    </footer>
  </article>
</template>

<script setup lang="ts">
import { useHead } from '@unhead/vue'

useHead({ title: 'mirai2cs - 百科 - mirai2cs' })
</script>

<style scoped>
.entry {
  max-width: 820px;
  margin: 0 auto;
  padding: 48px 20px 80px;
  line-height: 1.8;
}

.breadcrumb {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #888;
}

.breadcrumb a {
  color: #409eff;
  text-decoration: none;
}

.entry-hero {
  margin-top: 24px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.entry-hero h1 {
  margin: 0;
  font-size: clamp(32px, 4vw, 44px);
}

section {
  margin-bottom: 36px;
}

section h2 {
  font-size: 24px;
  margin-bottom: 16px;
}

ul {
  list-style: disc;
  padding-left: 20px;
}

.timeline {
  display: grid;
  gap: 16px;
}

.timeline div {
  border-left: 3px solid rgba(64, 158, 255, 0.3);
  padding-left: 16px;
}

.timeline dt {
  font-weight: 700;
}

.entry-footer {
  margin-top: 48px;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  color: #409eff;
  text-decoration: none;
  font-weight: 600;
}

.back-link::before {
  content: '←';
}

.back-link:hover {
  text-decoration: underline;
}
</style>
