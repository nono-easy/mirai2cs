<template>
  <main class="hero-grid">
    <ModuleCard
      title="我能做的"
      :actions="[
        { label: '前端·Vue', to: '/cs/frontend' },
        { label: 'Java 后端', to: '/cs/java' },
        { label: '部署&运维', to: '/cs/devops' },
      ]"
    />

    <ModuleCard
      title="我擅长的"
      :actions="[
        { label: 'UI/交互', to: '/cs/ui' },
        { label: '工程化', to: '/cs/engineering' },
        { label: '算法基础', to: '/cs/algorithms' },
      ]"
    />

    <ModuleCard
      title="我喜欢的"
      :actions="[
        { label: '动漫·Gal', to: '/anime' },
        { label: '日语学习', to: '/japanese' },
        { label: '脑科学', to: '/neuro' },
      ]"
    />

    <ModuleCard
      title="我想做的"
      :actions="[
        { label: '研究计划', to: '/lab' },
        { label: '开源贡献', href: 'https://github.com/nono-easy' },
        { label: '路线图', to: '/roadmap' },
      ]"
    />

    <ModuleCard
      title="我思考的"
      :actions="[
        { label: '随笔', to: '/posts' },
        { label: '日志', to: '/history' },
        { label: '书影音', to: '/media' },
      ]"
    />
  </main>
</template>

<script setup lang="ts">
import ModuleCard from '@/components/ModuleCard.vue'
</script>

<style scoped>
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
</style>
