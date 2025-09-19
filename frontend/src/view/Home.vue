<template>
  <div class="wrap">
    <el-card>
      <div class="content-box">
        <!-- 左侧：吉祥物图片 -->
        <div class="logo-box">
          <img src="/mirai2cs-logo.png" alt="Mirai2CS Mascot" class="logo"/>
        </div>

        <!-- 右侧：文字和按钮 -->
        <div class="info-box">
          <h2>mirai2cs.com</h2>
          <h3>面向未来的计算机科学</h3>
          <p>本站的建站日期：<strong>{{ launchDateStr }}</strong></p>
          <p>已存活：<strong>{{ daysAlive }}</strong> 天</p>
          <p>今天是：<strong>{{ todayStr }}</strong></p>
          <p>站长のの希望你今天也要开心哦 😊</p>

          <el-divider></el-divider>

          <p style="display: flex; gap: 12px;">
            <a href="https://github.com/nono-easy/mirai2cs" target="_blank">
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
import {computed, ref} from 'vue'

// 建站日（静态）
const launchDate = new Date('2025-08-24')

// 格式化日期函数
const formatDate = (date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`

// 当前日期（响应式）
const now = ref(new Date())

// 计算属性：存活天数
const daysAlive = computed(() => {
  return Math.floor((now.value - launchDate) / (1000 * 60 * 60 * 24))
})

// 建站日期（固定）
const launchDateStr = formatDate(launchDate)

// 今天日期（随 now 改变而变）
const todayStr = computed(() => formatDate(now.value))

// 点击按钮计数
const count = ref(0)

// 定时更新 now（比如每分钟）
setInterval(() => {
  now.value = new Date()
}, 60000)
</script>

<style>
.wrap {
  max-width: 900px;
  margin: 40px auto;
}

.content-box {
  display: flex;
  align-items: center; /* 垂直居中 */
  gap: 24px; /* 左右间距 */
}

.logo-box {
  flex: 0 0 240px; /* 固定宽度 */
  text-align: center;
}

.logo {
  max-width: 100%;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.info-box {
  flex: 1;
}
</style>
