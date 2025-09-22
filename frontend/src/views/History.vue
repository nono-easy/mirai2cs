<template>
  <div class="wrap">
    <el-card>
      <p v-for="log in logs" :key="log.date">
        {{ log.date }}：{{ log.text }}
      </p>
    </el-card>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 建站日
const launchDate = new Date('2025-08-24')

// 格式化日期
const formatDate = d =>
  `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`

// 当前日期
const now = ref(new Date())

// 存活天数
const daysAlive = computed(() =>
  Math.floor((now.value - launchDate) / (1000 * 60 * 60 * 24))
)

// 日期字符串
const launchDateStr = formatDate(launchDate)
const todayStr = computed(() => formatDate(now.value))

// 日志数据
const logs = ref([
  { date: '250922', text: '代码调整，nigon标签页上线' },
  { date: '250919', text: 'UI美化，站娘上线，可爱捏' },
  { date: '250918', text: '分离网站日志' },
  { date: '250916', text: '诶嘿嘿，粗去丸回来噜~' },
  { date: '250906', text: '更改主页样式' },
  { date: '250902', text: 'CI/CD 功能完成' },
])

// 定时更新日期
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
