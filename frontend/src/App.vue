<template>
  <div class="wrap">
    <el-card>
      <h1>mirai2cs.com</h1>
      <p>本站的建站日期：<strong>{{ launchDateStr }}</strong></p>
      <p>已存活：<strong>{{ daysAlive }}</strong> 天</p>
      <p>今天是：<strong>{{ todayStr }}</strong></p>
      <p>站长希望你今天也要开心哦 😊</p>
      <p>250902：CI/CD 功能完成</p>
      <el-divider></el-divider>
      <p>
        <el-button type="primary" @click="count++">点击 {{ count }}</el-button>
      </p>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 建站日（静态）
const launchDate = new Date('2025-08-24')

// 当前日期
const now = new Date()

// 计算已存活天数
const daysAlive = Math.floor((now - launchDate) / (1000 * 60 * 60 * 24))

// 日期格式
const formatDate = (date) =>
  `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`

const launchDateStr = formatDate(launchDate)
const todayStr = formatDate(now)

// 点击按钮计数
const count = ref(0)
</script>

<style>
.wrap {
  max-width: 720px;
  margin: 40px auto;
}
</style>
