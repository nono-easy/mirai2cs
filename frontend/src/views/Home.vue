<template>
  <main class="hero-grid">
    <!-- 左侧：站娘插画 -->
    <div class="hero-illustration">
      <img src="/mirai2cs-logo.png" alt="Mirai2CS Mascot"/>
    </div>

    <!-- 右侧：文字区域 -->
    <section class="hero-info">
      <h1>Mirai2CS</h1>
      <p class="tagline">面向未来的计算机科学</p>
      <el-divider/>
      <p class="contact">
        联系站长のの：nono.mirai2cs@gmail.com
      </p>
      <el-button type="primary">
        <el-icon><Search /></el-icon>
        Search
      </el-button>
      <el-button type="primary" :icon="Search">Search</el-button>
    </section>
  </main>
</template>

<style>
/* ===============================
   1️⃣ 基础变量（可与全局 Token 合并）
   =============================== */
@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');

:root {
  /* 尺寸与间距 */
  --layout-max-w: 1400px;
  --layout-gap: clamp(24px, 4vw, 56px);
  --layout-pad: clamp(24px, 4vw, 48px);

  /* 插画大小 */
  --illus-size: clamp(260px, 24vw, 360px);

  /* 分隔线 */
  --divider-w: 1px;
  --divider-color: rgba(0, 0, 0, 0.1);
  --divider-offset: calc(var(--layout-gap) / 2);
  --divider-safe-pad: 80px;

  /* 渐变背景 */
  --hero-bg: linear-gradient(120deg, #fcf7ee, #f9f6f1);
  --title-grad: linear-gradient(90deg, #409eff, #e6a23c);
}

/* ===============================
   2️⃣ 布局结构（网格 / 排版 / 尺寸）
   =============================== */

/* 主容器：两列网格布局 */
.hero-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: var(--layout-gap);
  align-items: center;
  max-width: var(--layout-max-w);
  margin: 0 auto;
  padding: var(--layout-pad);

  /* 依赖外部 header 高度的动态高度控制 */
  min-height: calc(100svh - var(--app-header-h) - var(--app-main-pad) * 2);

  box-sizing: border-box;
  background: var(--hero-bg);
  border-radius: 16px;
}

/* 左侧插画区域：居中承载 */
.hero-illustration {
  display: grid;
  place-items: center;
}

/* 右侧文字区域：留出分隔线空间 */
.hero-info {
  position: relative;
  max-width: 720px;
  line-height: 1.85;
  padding-left: calc(var(--divider-offset) + var(--divider-safe-pad));
}

/* ===============================
   3️⃣ 视觉层（颜色 / 字体 / 动效 / 分隔线）
   =============================== */

/* 插画图片 */
.hero-illustration img {
  width: var(--illus-size);
  height: var(--illus-size);
  object-fit: contain;
  border-radius: 20px;
  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
  transition: transform 0.3s ease;
}

.hero-illustration img:hover {
  transform: scale(1.04);
}

/* 分隔线（桌面端） */
.hero-info::before {
  content: '';
  position: absolute;
  left: var(--divider-offset);
  top: 12%;
  bottom: 12%;
  width: var(--divider-w);
  background: linear-gradient(180deg, transparent, var(--divider-color), transparent);
  pointer-events: none;
}

/* 标题：渐变文字 */
.hero-info h1 {
  font-family: 'Audiowide', sans-serif;
  font-size: clamp(36px, 5vw, 64px);
  margin: 0 0 10px;
  letter-spacing: 0.5px;
  background: var(--title-grad);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* 副标题 */
.tagline {
  font-size: clamp(16px, 1.4vw, 20px);
  margin: 6px 0 18px;
}

/* 联系方式 */
.contact a {
  text-decoration: underline;
}

/* ===============================
   4️⃣ 响应式（集中处理媒体查询）
   =============================== */
@media (max-width: 960px) {
  .hero-grid {
    grid-template-columns: 1fr;
    row-gap: var(--layout-gap);
    min-height: auto;
    border-radius: 0;
  }

  .hero-info {
    padding-left: 0;
  }

  .hero-info::before {
    display: none;
  }
}
</style>
