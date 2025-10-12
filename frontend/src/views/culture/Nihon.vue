<!-- src/views/Nihon.vue -->
<template>
  <div class="nihon-wrap">
    <div class="nihon-grid">
      <el-card class="nihon-card">
        <div class="card-inner">
          <div class="icon" aria-hidden="true">🌸</div>
          <div class="content">
            <h3 class="title">日漫</h3>
            <p class="desc">番剧随记、推荐与安利。</p>
            <div class="actions">
              <el-button type="primary" round @click="nav('/nihon/anime')">进入</el-button>
            </div>
          </div>
        </div>
      </el-card>

      <el-card class="nihon-card">
        <div class="card-inner">
          <div class="icon violet">🎮</div>
          <div class="content">
            <h3 class="title">Galgame</h3>
            <p class="desc">游戏推荐、角色与故事。</p>
            <div class="actions">
              <el-button type="success" round @click="nav('/nihon/galgame')">进入</el-button>
            </div>
          </div>
        </div>
      </el-card>

      <el-card class="nihon-card">
        <div class="card-inner">
          <div class="icon orange">📖</div>
          <div class="content">
            <h3 class="title">Nihongo</h3>
            <p class="desc">日语学习笔记与资源。</p>
            <div class="actions">
              <el-button type="warning" round @click="nav('/nihon/nihongo')">进入</el-button>
            </div>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const nav = (to) => router.push(to)
</script>

<style>
:root {
  --card-pad: 16px;
  --radius: 16px;
  --gap: 16px;
  --bg-soft: #faf6f1;
}
@media (prefers-color-scheme: dark) {
  :root {
    --bg-soft: #151515;
  }
}

.nihon-wrap {
  max-width: 1080px;
  margin: 24px auto 40px;
  padding: 0 16px;
}

.nihon-grid {
  display: grid;
  gap: var(--gap);
  grid-template-columns: 1fr;
}
@media (min-width: 680px) {
  .nihon-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (min-width: 980px) {
  .nihon-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

.nihon-card {
  border-radius: var(--radius);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}
.nihon-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.08);
}

/* 让图标+文本在一行，垂直居中；卡片内容统一高度 */
.card-inner {
  display: grid;
  grid-template-columns: 56px 1fr;
  align-items: center;
  gap: 14px;
  min-height: 132px;
  padding: var(--card-pad);
}

/* 萌系圆形图标 */
.icon {
  width: 56px;
  height: 56px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  background: linear-gradient(180deg, #ffe7f1, #ffd9e8);
  box-shadow: 0 2px 8px rgba(255, 80, 160, 0.15);
  font-size: 26px;
  user-select: none;
}
.icon.violet {
  background: linear-gradient(180deg, #efe5ff, #e4d6ff);
  box-shadow: 0 2px 8px rgba(90, 65, 200, 0.15);
}
.icon.orange {
  background: linear-gradient(180deg, #fff0dc, #ffe4c2);
  box-shadow: 0 2px 8px rgba(255, 140, 0, 0.15);
}

.content {
  display: grid;
  gap: 6px;
}
.title {
  margin: 0;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.3px;
}
.desc {
  margin: 0;
  opacity: 0.8;
  line-height: 1.6;
  min-height: 1.6em; /* 保证两行时也不跳高 */
}
.actions {
  margin-top: 6px;
  display: flex;
  gap: 8px;
}
</style>
