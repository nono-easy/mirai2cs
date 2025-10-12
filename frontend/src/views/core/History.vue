<template>
  <div class="wrap">
    <el-card class="mb-4">
      建站：{{ launchDateStr }} ｜ 今日：{{ todayStr }} ｜ 站龄：{{ daysAlive }} 天
    </el-card>
    <el-card>
      <p v-for="log in logs" :key="log.date">{{ log.date }}：{{ log.text }}</p>
    </el-card>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

// 建站日
const launchDate = new Date('2025-08-24')

// 日期格式化
const formatDate = (d: Date): string =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`

// 当前时间
const now = ref<Date>(new Date())

// 站龄（天）
const daysAlive = computed(() =>
  Math.floor((now.value.getTime() - launchDate.getTime()) / (1000 * 60 * 60 * 24))
)

// 日期字符串
const launchDateStr = formatDate(launchDate)
const todayStr = computed(() => formatDate(now.value))

// 日志类型 & 数据
interface LogItem {
  date: string
  text: string
}
const logs = ref<LogItem[]>([
  { date: '250926', text: '添加多个标签页导航，标签页内容待完成' },
  { date: '250922', text: '代码调整，nihon标签页上线' },
  { date: '250919', text: 'UI美化，站娘上线，可爱捏' },
  { date: '250918', text: '分离网站日志' },
  { date: '250916', text: '诶嘿嘿，粗去丸回来噜~' },
  { date: '250906', text: '更改主页样式' },
  { date: '250902', text: 'CI/CD 功能完成' },
  { date: '250824', text: '网站上线' },
])

// 定时更新时间（顺便调试输出，确保变量被使用）
setInterval(() => {
  now.value = new Date()
  if (import.meta.env.DEV) console.warn(`已运行 ${daysAlive.value} 天`)
}, 60000)
</script>

<style>
.wrap {
  max-width: 720px;
  margin: 40px auto;
}
.mb-4 {
  margin-bottom: 16px;
}
</style>
