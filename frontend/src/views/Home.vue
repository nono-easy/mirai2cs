<template>
  <main class="hero-grid">
    <!-- 左侧 1/3：图片 -->
    <div class="hero-illustration">
      <img src="/mirai2cs-logo.png" alt="Mirai2CS Mascot"/>
    </div>

    <!-- 右侧 2/3：文字 -->
    <section class="hero-info">
      <h1>Mirai2CS</h1>
      <p class="tagline">网站简介占位占位占位占位占位占位占位占位占位占位</p>

      <ul class="meta">
        <li>站长のの：Java 软件工程师 🌱</li>
        <li>兴趣：占位占位占位占位占位占位占位占位</li>
        <li>兴趣：占位占位占位占位占位占位占位占位</li>
      </ul>

      <el-divider/>

      <p class="actions">
        <a href="https://github.com/nono-easy/mirai2cs" target="_blank" rel="noopener">
          <el-button type="success">🌟 查看本站源码</el-button>
        </a>
        <el-button type="primary" @click="count++">憋戳🌶️ {{ count }}</el-button>
      </p>

      <p class="contact">联系我：nono.mirai2cs@gmail.com</p>
    </section>
  </main>
</template>

<script setup lang="ts">
import {computed, onMounted, onUnmounted, ref} from 'vue'

const launchDate = new Date('2025-08-24')

const pad2 = n => String(n).padStart(2, '0')
const formatDate = d => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`

const now = ref(new Date())

const daysAlive = computed(() => {
  const ms = now.value - launchDate
  const days = Math.floor(ms / 86400000)
  return Math.max(0, days)
})

const launchDateStr = formatDate(launchDate)
const todayStr = computed(() => formatDate(now.value))

const count = ref(0)

let timer
onMounted(() => {
  timer = setInterval(() => {
    now.value = new Date()
  }, 60000)
})
onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');

:root {
  --max-w: 1400px;
  --gap: clamp(24px, 4vw, 56px);
  --illus-size: clamp(260px, 24vw, 360px);
  --divider-w: 1px;
  --divider-color: rgba(0, 0, 0, .10);
  --divider-offset: calc(var(--gap) / 2);
  --divider-safe-pad: 80px;
}

/* 两列布局 */
.hero-grid {
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: var(--gap);
  align-items: center;
  max-width: var(--max-w);
  margin: 0 auto;
  padding: clamp(24px, 4vw, 48px);
  min-height: calc(100svh - var(--app-header-h) - var(--app-main-pad) * 2);
  box-sizing: border-box;
  background: linear-gradient(120deg, #fcf7ee, #f9f6f1);
  border-radius: 16px;
}

/* 左图 */
.hero-illustration {
  display: grid;
  place-items: center;
}
.hero-illustration img {
  width: var(--illus-size);
  height: var(--illus-size);
  object-fit: contain;
  border-radius: 20px;
  box-shadow: 0 10px 24px rgba(0,0,0,0.12);
  transition: transform .3s ease;
}
.hero-illustration img:hover {
  transform: scale(1.04);
}

/* 右文 */
.hero-info {
  position: relative;
  max-width: 720px;
  line-height: 1.85;
  padding-left: calc(var(--divider-offset) + var(--divider-safe-pad));
}
.hero-info::before {
  content: "";
  position: absolute;
  left: var(--divider-offset);
  top: 12%;
  bottom: 12%;
  width: var(--divider-w);
  background: linear-gradient(180deg, transparent, var(--divider-color), transparent);
  pointer-events: none;
}
.hero-info h1 {
  font-family: 'Audiowide', sans-serif;
  font-size: clamp(36px, 5vw, 64px);
  margin: 0 0 10px;
  letter-spacing: .5px;
  background: linear-gradient(90deg, #409eff, #e6a23c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.tagline {
  font-size: clamp(16px, 1.4vw, 20px);
  margin: 6px 0 18px;
}
.meta {
  margin: 0 0 14px 1em;
}
.meta li {
  margin: .2em 0;
}
.contact a {
  text-decoration: underline;
}
.actions {
  display: flex;
  gap: 12px;
  margin: 0;
}

/* 移动端 */
@media (max-width: 960px) {
  .hero-grid {
    grid-template-columns: 1fr;
    row-gap: var(--gap);
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
