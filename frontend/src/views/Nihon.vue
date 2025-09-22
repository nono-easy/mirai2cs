<!-- src/views/Nihon.vue -->
<template>
  <div class="wrap">
    <el-card class="hero">
      <div class="hero-inner">
        <img
          class="hero-logo"
          src="/mirai2cs-logo.png"
          alt="Mirai2CS Mascot"
          loading="lazy"
          width="120"
          height="120"
        />
        <div>
          <h2 class="title">日本 · Nihon</h2>
          <p class="subtitle">二次元 / 日语 / 文化小站入口</p>
        </div>
      </div>
    </el-card>

    <div class="grid">
      <el-card class="card">
        <h3>日语学习</h3>
        <p class="desc">五十音、语法清单、常用表达与素材导航。</p>
        <div class="actions">
          <el-button type="primary" @click="nav('/nihongo')">进入 Nihongo</el-button>
          <el-button link @click="nav('/nihongo/resources')">学习资料</el-button>
        </div>
      </el-card>

      <el-card class="card">
        <h3>二次元角</h3>
        <p class="desc">番剧/音乐/游戏随记，轻松又快乐~</p>
        <div class="actions">
          <el-button type="success" @click="nav('/a2')">去逛逛</el-button>
          <el-button link @click="nav('/tags/anime')">#anime</el-button>
        </div>
      </el-card>

      <el-card class="card">
        <h3>文化随笔</h3>
        <p class="desc">日本风物与文化观察，慢慢写，慢慢看。</p>
        <div class="actions">
          <el-button @click="nav('/blog/japan')">阅读随笔</el-button>
          <el-button link @click="nav('/blog')">更多文章</el-button>
        </div>
      </el-card>
    </div>

    <el-card class="tips">
      <p>
        ✨ 小提示：本页由AI生成。先占坑，后续再补内容。
      </p>
    </el-card>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const nav = (to) => router.push(to)
</script>

<style>
.wrap {
  max-width: 980px;
  margin: 40px auto;
  padding: 0 16px;
}

.hero {
  margin-bottom: 20px;
}
.hero-inner {
  display: flex;
  align-items: center;
  gap: clamp(12px, 3vw, 24px);
}
.hero-logo {
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,.08);
}
.title {
  margin: 0;
  font-size: clamp(20px, 3.2vw, 28px);
}
.subtitle {
  margin: 6px 0 0;
  opacity: .8;
}

.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 16px;
  margin-top: 12px;
}
.card {
  grid-column: span 12;
}
@media (min-width: 720px) {
  .card { grid-column: span 4; }
}

.desc {
  margin: 8px 0 16px;
  line-height: 1.6;
}
.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tips {
  margin-top: 16px;
  font-size: 14px;
  color: #666;
}
</style>
