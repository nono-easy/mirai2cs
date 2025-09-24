<template>
  <div class="common-layout">
    <el-container class="layout-root">
      <!-- 顶部：吸顶 + 导航 -->
      <el-header class="header debug-header">
        <div class="nav container">
          <!-- 左：站点标识 -->
          <router-link to="/" class="brand">
            <img src="/mirai2cs-logo.png" alt="Mirai2CS Logo" class="brand-logo" />
            <span class="brand-text">Mirai2CS</span>
          </router-link>

          <!-- 右：导航链接 -->
          <div class="links">
            <router-link to="/">🏠 首页</router-link>
            <span class="sep">|</span>
            <router-link to="/nihon">🌸 日本</router-link>
            <span class="sep">|</span>
            <router-link to="/about">ℹ️ 关于</router-link>
            <span class="sep">|</span>
            <router-link to="/history">⏲️ 网站日志</router-link>
          </div>
        </div>
      </el-header>

      <!-- 主体：占满剩余空间 -->
      <el-main class="main debug-main">
        <div class="container">
          <router-view />
        </div>
      </el-main>

    </el-container>
  </div>
</template>

<script setup lang="ts">
/* 无逻辑，布局组件 */
</script>

<!-- 全局变量：非 scoped，供整个站点使用 -->
<style>
:root {
  --app-header-h: 56px;      /* 统一管理 Header 高度 */
  --app-main-pad: 16px;      /* el-main 内边距（上下） */
  --app-max-w: 1280px;       /* 内容最大宽度，可按需调到 1366/1400 */
}

/* 可选：全站容器宽度约束（导航和主体统一左右留白） */
.container {
  max-width: var(--app-max-w);
  margin: 0 auto;
  padding: 0 16px;
}
</style>

<!-- 局部样式：scoped -->
<style scoped>
/* —— 布局基础 —— */
.common-layout { width: 100%; height: 100%; }
.layout-root {
  min-height: 100svh;        /* 占满视口高度（更稳于100vh） */
  display: flex;
  flex-direction: column;
}

/* —— Header —— */
.header {
  position: sticky; top: 0; z-index: 100;
  height: var(--app-header-h);         /* 使用统一变量 */
  display: flex; align-items: center;
  background: var(--el-bg-color);
  box-shadow: 0 1px 4px rgba(0,0,0,.08);
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}
/* —— 品牌 —— */
.brand {
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 8px;
}
.brand-logo {
  height: 32px;
  width: 32px;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0,0,0,.15);
}
.brand-text {
  font-weight: 800;
  font-size: 20px;
  background: linear-gradient(90deg, #409eff, #67c23a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.links { display: flex; align-items: center; gap: 10px; }
.nav a { color: var(--el-text-color-primary); text-decoration: none; }
.sep { opacity: .5; }

/* —— Main —— */
.main {
  /* 占满“剩余空间”，不需要再给 100vh/svh，避免和 header 相加溢出 */
  flex: 1;
  /* 给 router-view 的上下留白交给变量，页面内部可用它做 calc */
  padding: var(--app-main-pad) 0;
  overflow: visible;    /* 建议 visible，防止出现主区+子区双滚动条 */
}

/* —— 调试底色 —— */
.debug-header { background-color: #409EFF22; }
.debug-main   { background-color: #E6A23C22; }
</style>
