<template>
  <main class="hero-grid">
    <ModuleCard
      title="我能做的"
      :actions="[
        { label: '软件工程', to: '/software-engineering' },
        { label: '沟通', to: '/communication' },
      ]"
    />

    <ModuleCard
      title="我擅长的"
      :actions="[
        { label: '思考', to: '/sorry' },
        { label: '整理', to: '/sorry' },
      ]"
    />

    <ModuleCard
      title="我喜欢的"
      :actions="[
        { label: '游戏', to: '/sorry' },
        { label: '解密', to: '/sorry' },
        { label: '番剧', to: '/sorry' },
      ]"
    />

    <ModuleCard
      title="我思考的"
      :actions="[
        { label: '百科', to: '/sorry' },
        { label: '日常', to: '/sorry' },
        { label: '脑洞', to: '/sorry' },
      ]"
    />

    <ModuleCard
      title="我想做的"
      :actions="[
        { label: '语言', to: '/sorry' },
        { label: '工商', to: '/sorry' },
        { label: '投资', to: '/sorry' },
        { label: '硬件', to: '/sorry' },
        { label: '乐器', to: '/sorry' },
        { label: '脑科学', to: '/sorry' },
      ]"
    />

    <ModuleCard
      title="杂货铺"
      :actions="[
        { label: '建站史', to: '/history' },
        { label: '关于', to: '/about' },
        { label: '计算机科学', to: '/cs' },
        { label: '未来装置研究所', to: '/lab' },
        { label: '脑科学', to: '/neuroscience' },
        { label: '动漫', to: '/anime' },
        { label: '日语', to: '/japanese' },
        { label: '日本', to: '/nihon' },
        { label: '游戏', to: '/game' },
      ]"
    />
  </main>
</template>

<script setup>
// 当前组件暂无逻辑
import ModuleCard from '@/components/ModuleCard.vue'
import { useHead } from '@unhead/vue'
useHead({ title: '首页' })
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');

/* --------- 全局变量：尺寸 / 色彩 / 间距 --------- */
:root {
  /* 布局尺寸 */
  --layout-max-w: 1400px;
  --layout-gap: clamp(24px, 4vw, 56px);
  --layout-pad: clamp(24px, 4vw, 48px);

  /* 插画尺寸 */
  --illus-size: clamp(260px, 24vw, 360px);

  /* 分隔线 */
  --divider-w: 1px;
  --divider-color: rgba(0, 0, 0, 0.1);
  --divider-offset: calc(var(--layout-gap) / 2);
  --divider-safe-pad: 80px;

  /* 渐变背景与标题 */
  --hero-bg: linear-gradient(120deg, #fcf7ee, #f9f6f1);
  --title-grad: linear-gradient(90deg, #409eff, #e6a23c);
}

/* 复用你的变量。这里只把布局改为网格按行排布。 */
.hero-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr)); /* ✅ 每行三个 */
  gap: 24px;
  max-width: var(--layout-max-w);
  margin: 40px auto 0;
  padding: var(--layout-pad);
  background: var(--hero-bg);
  border-radius: 16px;
}

/* 响应式：中屏 2 列，小屏 1 列 */
@media (max-width: 1200px) {
  .hero-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
@media (max-width: 640px) {
  .hero-grid {
    grid-template-columns: 1fr;
    border-radius: 10px;
    margin-top: 24px;
    padding: 16px;
  }
}

/* --------- 响应式：小屏幕时改为单列布局 --------- */
@media (max-width: 960px) {
  .hero-grid {
    grid-template-columns: 1fr;
    row-gap: var(--layout-gap);
    min-height: auto;
    border-radius: 0;
    margin-top: 24px; /* 移动端适当减小顶部间距 */
  }
}
</style>
