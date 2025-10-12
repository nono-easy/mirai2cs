<template>
  <section class="module-card">
    <!-- 标题行（可选图标） -->
    <header class="card-head">
      <slot name="icon" />
      <h3 class="card-title">{{ title }}</h3>
    </header>

    <!-- 子按钮区 -->
    <div class="card-actions">
      <template v-for="(a, i) in actions" :key="i">
        <!-- 内部路由 -->
        <el-button
          v-if="a.to && !a.href"
          :type="a.type || 'default'"
          size="small"
          round
          class="subbtn"
          @click="$router.push(a.to)"
        >
          {{ a.label }}
        </el-button>

        <!-- 外部链接 -->
        <el-button
          v-else-if="a.href"
          :type="a.type || 'default'"
          size="small"
          round
          class="subbtn"
          tag="a"
          :href="a.href"
          target="_blank"
          rel="noopener noreferrer"
        >
          {{ a.label }}
        </el-button>

        <!-- 占位（避免报错） -->
        <el-button v-else size="small" round class="subbtn" disabled>
          {{ a.label }}
        </el-button>
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Action {
  label: string
  to?: string // 内部路由
  href?: string // 外链
  type?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'
}

defineProps<{
  title: string
  actions: Action[]
}>()
</script>

<style scoped>
.module-card {
  background: #fff;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease;
}

.module-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.1);
}

.card-head {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.card-title {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
}

.card-actions {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start; /* 行首贴左 */
  align-content: flex-start;
  gap: 10px; /* 用 gap 控间距 */
}

/* 关键：覆盖 Element Plus 的 “相邻按钮左外边距” */
.card-actions :deep(.el-button + .el-button) {
  margin-left: 0 !important;
}

/* 导航区域常见的焦点高亮处理（仅按钮自身） */
.subbtn {
  -webkit-tap-highlight-color: transparent;
}

.subbtn:focus,
.subbtn:focus-visible {
  outline: none;
  box-shadow: none;
}
</style>
