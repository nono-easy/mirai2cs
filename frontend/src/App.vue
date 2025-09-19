<template>
  <div class="common-layout">
    <el-container class="layout-root">
      <!-- 顶部：吸顶 + 导航 + 调试底色 -->
      <el-header class="header debug-header">
        <nav class="nav">
          <router-link to="/">🏠 首页</router-link>
          <span class="sep">|</span>
          <!--<router-link to="/hello">👋 HelloWorld</router-link>-->
          <!--<span class="sep">|</span>-->
          <router-link to="/about">ℹ️ about</router-link>
          <span class="sep">|</span>
          <!--<router-link to="/containerTest">🧪 container</router-link>-->
          <!--<span class="sep">|</span>-->
          <router-link to="/history">⏲️ 网站日志</router-link>
        </nav>
      </el-header>

      <!-- 主体：可滚动 + 调试底色 -->
      <el-main class="main debug-main">
        <router-view />
      </el-main>

      <!-- 底部：固定在页面底部（非吸底，仅占位）+ 调试底色 -->
      <el-footer class="footer debug-footer">
        底部 · mirai2cs.com
      </el-footer>
    </el-container>
  </div>
</template>

<script setup lang="ts">
/* 无逻辑，布局组件 */
</script>

<style scoped>
/* —— 布局基础 —— */
.common-layout {
  width: 100%;
  height: 100%;
}
.layout-root {
  min-height: 100vh;         /* 撑满一屏 */
  display: flex;
  flex-direction: column;
}

/* —— Header —— */
.header {
  position: sticky;          /* 吸顶 */
  top: 0;
  z-index: 100;
  background: var(--el-bg-color);
  box-shadow: 0 1px 4px rgba(0,0,0,.08);
  display: flex;
  align-items: center;
  min-height: 56px;
}
.nav {
  display: flex;
  align-items: center;
  gap: 10px;
}
.nav a {
  color: var(--el-text-color-primary);
  text-decoration: none;
}

.sep { opacity: .5; }

/* —— Main —— */
.main {
  flex: 1;
  overflow: auto;
  padding: 16px;
}

/* —— Footer —— */
.footer {
  text-align: center;
  color: var(--el-text-color-secondary);
  padding: 12px 0;
  border-top: 1px solid rgba(0,0,0,.06);
}

/* —— 调试用底色 —— */
.debug-header { background-color: #409EFF22; }
.debug-main   { background-color: #E6A23C22; }
.debug-footer { background-color: #67C23A22; }
</style>
