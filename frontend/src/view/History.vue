<template>
  <div class="wrap">
    <el-card>
      <p>250918：诶嘿嘿，粗去丸回来噜~</p>
      <p>250906：更改主页样式</p>
      <p>250902：CI/CD 功能完成</p>
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

// 可选：定时更新 now（比如每分钟）
setInterval(() => {
  now.value = new Date()
}, 60000)
</script>


<style>
.wrap {
  max-width: 720px;
  margin: 40px auto;
}
</style>

