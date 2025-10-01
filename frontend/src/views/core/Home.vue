<template>
  <section class="shards container" aria-labelledby="topics-title">
    <header class="section-header">
      <h2 id="topics-title">按主题浏览</h2>
      <p class="section-sub">像选关一样，点进你感兴趣的领域～</p>
    </header>

    <!-- 桌面端：碎片拼图 -->
    <div class="shard-stage" role="list" aria-label="主题拼图导航">
      <router-link
        v-for="(t, i) in topics"
        :key="t.to"
        :to="t.to"
        class="shard"
        role="listitem"
        :class="`shard-${i+1}`"
        :aria-label="t.title"
        tabindex="0"
      >
        <div class="shard-inner">
          <span class="shard-title">{{ t.emoji }} {{ t.title }}</span>
          <span class="shard-sub">{{ t.sub }}</span>
        </div>
      </router-link>
    </div>

    <!-- 移动端：降级为普通网格 -->
    <div class="mobile-grid">
      <router-link v-for="t in topics" :key="`m-${t.to}`" :to="t.to" class="mcard">
        <strong>{{ t.emoji }} {{ t.title }}</strong>
        <span>{{ t.sub }}</span>
      </router-link>
    </div>
  </section>
</template>

<script setup lang="ts">
const topics = [
  { title: '计算机科学', sub: 'Java / 算法 / 系统 / 工程化', emoji: '💻', to: '/cs' },
  { title: '动漫・Galgame', sub: '观影札记 / 推荐 / 杂谈', emoji: '📺', to: '/anime' },
  { title: '日语', sub: '学习法 / 语法要点 / 资料', emoji: '🌸', to: '/japanese' },
  { title: '脑科学', sub: '神经科学 / 认知 / AI与脑', emoji: '🧠', to: '/neuroscience' },
  { title: '实验室・随想', sub: '小项目 / 想法 / 试验田', emoji: '🧪', to: '/lab' },
  { title: '网站日志', sub: '迭代记录 / 变更', emoji: '⏲️', to: '/history' },
]
</script>

<style scoped>
:root {
  --container-max: 1120px;
  --space-2: 12px;
  --space-3: 16px;
  --space-4: 24px;
  --space-6: 32px;
  --radius-xl: 16px;
  --brand: var(--el-color-primary, #409eff);
  --muted: color-mix(in srgb, var(--el-text-color-primary) 60%, transparent);
}

/* 区块标题沿用你现有风格 */
.section-header { margin: var(--space-6) 0 var(--space-3); }
.section-sub { opacity: .75; margin-top: var(--space-2); }

/* ===== 桌面端碎片舞台 ===== */
.shard-stage {
  position: relative;
  aspect-ratio: 1 / 1;
  max-width: 920px;
  margin: 0 auto var(--space-6);
  border-radius: 24px;
  background:
    radial-gradient(120% 120% at 10% 0%, #fff 0%, #f7fbff 50%, #eef5ff 100%);
  box-shadow: 0 10px 32px rgba(0,0,0,.06) inset, 0 8px 28px rgba(0,0,0,.06);
  overflow: hidden;
}

/* 每一个碎片都是一个绝对定位的 router-link，clip-path 切形 */
.shard {
  position: absolute;
  display: block;
  text-decoration: none;
  color: inherit;
  transition: transform .18s ease, filter .18s ease, scale .18s ease;
  will-change: transform;
  /* 让点击区域更友好 */
  -webkit-tap-highlight-color: transparent;
}
.shard:focus-visible .shard-inner {
  outline: 2px solid var(--brand);
  outline-offset: 2px;
}

.shard-inner {
  height: 100%;
  width: 100%;
  padding: clamp(10px, 1.6vw, 18px);
  display: grid;
  align-content: end;
  gap: 6px;
  background: #fff;
  filter: drop-shadow(0 8px 18px rgba(0,0,0,.08));
  transition: background .2s ease;
}
.shard:hover { transform: translateY(-2px); }
.shard:hover .shard-inner { background: #fff; }

.shard-title { font-weight: 700; }
.shard-sub { font-size: 14px; color: var(--muted); }

/* —— 定义 6 块碎片的位置与形状（百分比相对舞台） —— */
/* 你可以随意微调 top/left/width/height，以及 polygon 坐标 */
.shard-1 { top: 6%; left: 6%; width: 38%; height: 28%;
  clip-path: polygon(6% 8%, 96% 0%, 100% 72%, 10% 100%);
}
.shard-2 { top: 8%; left: 46%; width: 48%; height: 26%;
  clip-path: polygon(0% 16%, 100% 6%, 86% 100%, 10% 86%);
}
.shard-3 { top: 34%; left: 8%; width: 40%; height: 28%;
  clip-path: polygon(0% 10%, 92% 0%, 100% 84%, 10% 100%);
}
.shard-4 { top: 34%; left: 50%; width: 40%; height: 30%;
  clip-path: polygon(6% 0%, 100% 12%, 86% 100%, 0% 84%);
}
.shard-5 { top: 64%; left: 10%; width: 35%; height: 26%;
  clip-path: polygon(4% 0%, 100% 10%, 96% 100%, 0% 86%);
}
.shard-6 { top: 64%; left: 48%; width: 44%; height: 28%;
  clip-path: polygon(0% 12%, 92% 0%, 100% 78%, 12% 100%);
}

/* 悬停微交互：略微放大 + 提升阴影层次 */
.shard:hover { scale: 1.02; }
.shard:hover .shard-inner { filter: drop-shadow(0 12px 24px rgba(0,0,0,.12)); }

/* ===== 移动端降级：使用普通网格卡片，保证可读性与可点性 ===== */
.mobile-grid {
  display: none;
}
@media (max-width: 768px) {
  .shard-stage { display: none; }
  .mobile-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-3);
  }
  .mcard {
    background: #fff;
    border-radius: var(--radius-xl);
    padding: var(--space-4);
    box-shadow: 0 6px 24px rgba(0,0,0,.06);
    display: grid;
    gap: 6px;
    text-decoration: none;
    color: inherit;
  }
  .mcard strong { font-weight: 700; }
  .mcard span { color: var(--muted); font-size: 14px; }
}
</style>
