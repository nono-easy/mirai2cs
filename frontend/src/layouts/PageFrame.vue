<template>
  <!-- 统一页壳：负责与 app-header 的安全间距、栅格与节奏 -->
  <section class="page" :class="[{ compact, 'no-gutters': noGutters }]">
    <div class="container">
      <!-- 头区：面包屑 / 标题 / 右侧操作 -->
      <header class="page-head">
        <div class="page-breadcrumb" v-if="$slots.breadcrumb">
          <slot name="breadcrumb" />
        </div>

        <div class="page-title" v-if="$slots.title || $slots.desc">
          <h1 class="title"><slot name="title" /></h1>
          <p class="desc" v-if="$slots.desc"><slot name="desc" /></p>
        </div>

        <div class="page-actions" v-if="$slots.actions">
          <slot name="actions" />
        </div>
      </header>

      <!-- 主体：放真正内容；保持统一节奏 -->
      <div class="page-body">
        <slot />
      </div>

      <!-- 页脚（可选）：例如翻页、次级说明 -->
      <footer class="page-foot" v-if="$slots.foot">
        <slot name="foot" />
      </footer>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  /** 更紧凑的上内边距（如二级页） */
  compact?: boolean
  /** 取消左右内边距（用于需要宽幅展示的页） */
  noGutters?: boolean
}>()
</script>

<style scoped>
/* ---- 设计令牌：保证与 header 保持“恰到好处”的距离 ---- */
:where(.page) {
  /* 顶部/底部内边距：用 svh 做随高度调节，避免贴顶 */
  --page-pad-top: clamp(28px, 7svh, 72px);
  --page-pad-bottom: clamp(24px, 5svh, 56px);

  /* 区块间距（标题区 ↔ 内容、内容区块之间） */
  --page-gap: clamp(16px, 2.2svh, 28px);
  --section-gap: clamp(18px, 2.6svh, 32px);

  /* 标题字号与权重 */
  --page-title-size: clamp(20px, 2.6vw, 28px);
  --page-title-weight: 800;

  /* 轻边框与圆角（与全站风格保持一致） */
  --page-border: var(--app-border, rgba(0, 0, 0, 0.08));
  --page-radius: 14px;
}

/* 紧凑模式：适合层级更深的页面 */
.page.compact {
  --page-pad-top: clamp(20px, 4.5svh, 44px);
}

.page {
  padding-block: var(--page-pad-top) var(--page-pad-bottom);
}

/* 和 header/footer 同步的容器宽度；你的 .container 已全局存在即可复用 */
.container {
  inline-size: 100%;
}

/* ---- 页头：三段式布局（面包屑 / 标题 / 右侧操作） ---- */
.page-head {
  display: grid;
  grid-template-columns: 1fr auto;
  grid-template-areas:
    'breadcrumb actions'
    'title     actions';
  align-items: center;
  row-gap: 10px;
  margin-block-end: var(--page-gap);
}

.page-breadcrumb {
  grid-area: breadcrumb;
  font-size: 13px;
  opacity: 0.8;
}
.page-title {
  grid-area: title;
}
.page-actions {
  grid-area: actions;
  display: inline-flex;
  gap: 10px;
}

.title {
  margin: 0;
  font-size: var(--page-title-size);
  font-weight: var(--page-title-weight);
  line-height: 1.25;
  /* 与品牌一致的渐变字（可直接沿用你 header 的配色） */
  background: linear-gradient(90deg, #409eff, #67c23a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.desc {
  margin: 6px 0 0;
  color: var(--el-text-color-secondary);
  font-size: 14px;
}

/* ---- 主体：统一垂直节奏；卡片是“无投影”干净风 ---- */
.page-body > * + * {
  margin-block-start: var(--section-gap);
}

/* 你常用的模块化卡片（无阴影、弱边框、柔和圆角） */
.section-card {
  border: 1px solid var(--page-border);
  border-radius: var(--page-radius);
  background: var(--el-bg-color);
  padding: clamp(14px, 2.2svh, 22px);
}

/* 页尾：较轻的次要信息区 */
.page-foot {
  margin-top: var(--page-gap);
  padding-top: 12px;
  border-top: 1px dashed var(--page-border);
  color: var(--el-text-color-secondary);
  font-size: 13px;
}

/* 可选：取消左右内边距的模式（用于需要充满横向空间的图表/表格） */
.page.no-gutters .container {
  padding-inline: 0;
}
</style>
