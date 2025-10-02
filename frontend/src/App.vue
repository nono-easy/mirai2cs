<template>
  <div id="app" class="app-root">
    <!-- 顶部：吸顶导航（不脱离文档流的 sticky，更稳） -->
    <header class="app-header">
      <div class="container nav">
        <router-link to="/" class="brand" aria-label="Mirai2CS Home">
          <img src="/mirai2cs-logo.png" alt="" class="brand-logo" />
          <span class="brand-text">Mirai2CS</span>
        </router-link>

        <div class="nav-actions">
          <el-button type="text" class="nav-btn" @click="$router.push('/')">
            🏠 首页
          </el-button>
          <el-button type="primary" @click="goToGithub">
            <img src="../src/assets/github-mark-white.svg" class="icon" alt="GitHub" />
            GitHub
          </el-button>
        </div>
      </div>
    </header>

    <!-- 主体：只负责“占满剩余 + 单一滚动” -->
    <main class="app-main" id="main">
      <div class="container">
        <!-- 将首尾外边距塌陷风险内收：用 wrapper 兜底 -->
        <div class="page-wrap">
          <router-view/>
        </div>
      </div>
    </main>

    <!-- 页脚（可选） -->
    <footer class="app-footer">
      <div class="container footer-inner">
        © {{ new Date().getFullYear() }} Mirai2CS · のの
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
const goToGithub = () => {
  window.open("https://github.com/nono-easy/mirai2cs", "_blank")
}
</script>

<style scoped>
/* 局部：仅与本组件结构相关的样式；全局规则放 base.css */

.app-root {
  min-height: 100svh; /* 更稳于 100vh */
  display: grid;
  grid-template-rows: auto 1fr auto; /* 头/主/脚 */
}

/* Header：sticky 不脱离文档流，不需要给 main 额外补偿 */
.app-header {
  position: sticky;
  top: 0;
  z-index: 1000;
  height: var(--app-header-h);
  backdrop-filter: saturate(140%) blur(6px);
  background: color-mix(in srgb, var(--el-bg-color) 92%, transparent);
  border-bottom: 1px solid var(--app-border);
}

/* 导航内容 */
.nav {
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.nav-actions {
  display: flex;
  align-items: center;
  gap: 12px; /* 按钮之间的间距 */
}
.nav-btn {
  font-size: 16px;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: var(--el-text-color-primary);
  border: none;
}
.nav-btn:focus,
.nav-btn:focus-visible {
  outline: none;
  box-shadow: none;
}

.icon {
  width: 18px;
  height: 18px;
  margin-right: 6px;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
}

.brand-logo {
  inline-size: 32px;
  block-size: 32px;
  border-radius: 6px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, .15);
}

.brand-text {
  font-weight: 800;
  font-size: 20px;
  background: linear-gradient(90deg, #409eff, #67c23a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.links a {
  text-decoration: none;
}

/* Main：只做“承载 + 呼吸间距”，不设置 100vh/100% 高度 */
.app-main {
  padding-block: var(--app-main-pad);
}

/* 兜底：防止页面第一个/最后一个子元素的 margin 影响整体高度 */
.page-wrap {
  padding-block: 1px;
}

/* 1px 抵消 margin 折叠，无视觉影响 */

/* Footer */
.app-footer {
  border-top: 1px solid var(--app-border);
  padding-block: 16px;
  color: var(--muted-fg);
  font-size: 14px;
  background: var(--el-bg-color);
}

.footer-inner {
  text-align: center;
}
</style>
