<template>
  <div class="encyclopedia">
    <header class="hero">
      <h1>のの百科</h1>
      <p class="intro">
        这里记录我在搭建 mirai2cs
        过程中积累下的知识与洞见。词条目前还不多，但我会持续更新，欢迎常来看看。
      </p>

      <form class="search-form" role="search" @submit.prevent>
        <input
          v-model="keyword"
          type="search"
          class="search-input"
          placeholder="搜索词条，例如：mirai2cs"
          aria-label="搜索词条"
        />
        <button type="submit" class="search-button">搜索</button>
      </form>
      <p class="search-hint">当前已收录 {{ entries.length }} 个词条，欢迎探索。</p>
    </header>

    <section class="entry-list">
      <h2>已上线词条</h2>
      <p v-if="!filteredEntries.length" class="empty-state">暂未找到相关词条，欢迎稍后再来～</p>
      <ul v-else>
        <li v-for="entry in filteredEntries" :key="entry.path">
          <RouterLink :to="entry.path" class="entry-card">
            <div>
              <h3>{{ entry.title }}</h3>
              <p>{{ entry.description }}</p>
            </div>
            <span class="more">查看详情 →</span>
          </RouterLink>
        </li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useHead } from '@unhead/vue'

interface EntryItem {
  title: string
  description: string
  path: string
  keywords: string[]
}

const entries: EntryItem[] = [
  {
    title: 'mirai2cs',
    description: 'mirai2cs 的诞生背景、命名灵感与发展规划。',
    path: '/encyclopedia/mirai2cs',
    keywords: ['mirai2cs', '网站', '个人站'],
  },
]

const keyword = ref('')

const filteredEntries = computed(() => {
  const key = keyword.value.trim().toLowerCase()
  if (!key) return entries

  return entries.filter((entry) => {
    return (
      entry.title.toLowerCase().includes(key) ||
      entry.description.toLowerCase().includes(key) ||
      entry.keywords.some((k) => k.toLowerCase().includes(key))
    )
  })
})

useHead({ title: '百科' })
</script>

<style scoped>
.encyclopedia {
  max-width: 960px;
  margin: 0 auto;
  padding: 48px 20px 80px;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  text-align: center;
}

.hero h1 {
  font-size: clamp(32px, 4vw, 44px);
  margin: 0;
  font-weight: 800;
  letter-spacing: 0.02em;
}

.intro {
  max-width: 640px;
  color: #555;
  line-height: 1.8;
}

.search-form {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}

.search-input {
  min-width: min(320px, 80vw);
  padding: 12px 16px;
  border-radius: 999px;
  border: 1px solid rgba(0, 0, 0, 0.12);
  font-size: 16px;
  transition:
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.search-input:focus {
  outline: none;
  border-color: #409eff;
  box-shadow: 0 0 0 3px rgba(64, 158, 255, 0.12);
}

.search-button {
  padding: 12px 28px;
  border-radius: 999px;
  border: none;
  background: linear-gradient(120deg, #409eff, #67c23a);
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease;
}

.search-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 18px rgba(64, 158, 255, 0.2);
}

.search-button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(64, 158, 255, 0.2);
}

.search-hint {
  color: #888;
  font-size: 14px;
}

.entry-list h2 {
  margin: 0;
  font-size: 24px;
  font-weight: 700;
}

.entry-list ul {
  list-style: none;
  padding: 0;
  margin: 24px 0 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.entry-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 24px;
  border-radius: 16px;
  text-decoration: none;
  color: inherit;
  background: linear-gradient(135deg, rgba(64, 158, 255, 0.1), rgba(255, 255, 255, 0.9));
  border: 1px solid rgba(64, 158, 255, 0.2);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;
}

.entry-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 24px rgba(64, 158, 255, 0.18);
}

.entry-card h3 {
  margin: 0 0 6px;
  font-size: 20px;
  font-weight: 700;
}

.entry-card p {
  margin: 0;
  color: #555;
  line-height: 1.6;
}

.more {
  font-weight: 600;
  color: #409eff;
  white-space: nowrap;
}

.empty-state {
  margin-top: 16px;
  color: #999;
}

@media (max-width: 640px) {
  .entry-card {
    flex-direction: column;
    align-items: flex-start;
  }
}
</style>
