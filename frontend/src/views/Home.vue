<template>
  <div class="wrap">
    <el-card>
      <div class="content-box">
        <div class="logo-box">
          <img
            src="/mirai2cs-logo.png"
            alt="Mirai2CS Mascot"
            class="logo"
            loading="lazy"
            width="240"
            height="240"
          />
        </div>

        <div class="info-box">
          <h2>mirai2cs.com</h2>
          <h3>面向未来的计算机科学</h3>

          <p>本站的建站日期：<strong>{{ launchDateStr }}</strong></p>
          <p>已存活：<strong>{{ daysAlive }}</strong> 天</p>
          <p>今天是：<strong>{{ todayStr }}</strong></p>
          <p>站长のの希望你今天也要开心哦 😊</p>

          <el-divider/>

          <p class="actions">
            <a href="https://github.com/nono-easy/mirai2cs" target="_blank" rel="noopener">
              <el-button type="success">🌟 查看本站源码</el-button>
            </a>
            <el-button type="primary" @click="count++">憋戳🌶️ {{ count }}</el-button>
          </p>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script setup>
import {computed, onMounted, onUnmounted, ref} from 'vue'

const launchDate = new Date('2025-08-24')

const pad2 = n => String(n).padStart(2, '0')
const formatDate = d => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`

const now = ref(new Date())

const daysAlive = computed(() => {
  const ms = now.value - launchDate
  const days = Math.floor(ms / 86400000)
  // 若希望“建站当日记为第1天”，用：return Math.max(0, days) + 1
  return Math.max(0, days)
})

const launchDateStr = formatDate(launchDate)
const todayStr = computed(() => formatDate(now.value))

const count = ref(0)

let timer
onMounted(() => {
  timer = setInterval(() => {
    now.value = new Date()
  }, 60000) // 每分钟刷新
})
onUnmounted(() => {
  if (timer) clearInterval(timer)
})
</script>

<style>
.wrap {
  max-width: 900px;
  margin: 40px auto;
}

.content-box {
  display: flex;
  align-items: center;
  gap: clamp(16px, 3vw, 28px);
}

.logo-box {
  flex: 0 0 240px;
  text-align: center;
}

.logo {
  max-width: 100%;
  height: auto;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.info-box {
  flex: 1;
}

.actions {
  display: flex;
  gap: 12px;
  margin: 0;
}
</style>
