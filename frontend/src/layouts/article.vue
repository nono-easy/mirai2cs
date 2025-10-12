<template>
  <PageFrame>
    <template #breadcrumb>
      <el-breadcrumb v-if="fm.breadcrumb?.length" separator="›">
        <el-breadcrumb-item
          v-for="(b, i) in fm.breadcrumb"
          :key="i"
          v-bind="b.to ? { to: b.to } : {}"
        >
          {{ b.text }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </template>

    <template #title>{{ fm.title }}</template>
    <template #desc>{{ fm.desc }}</template>

    <template #actions>
      <el-button
        v-for="(a, i) in fm.actions ?? []"
        :key="i"
        :type="a.type ?? 'default'"
        round
        @click="go(a)"
      >
        {{ a.label }}
      </el-button>
    </template>

    <section class="section-card article"><slot /></section>

    <template #foot>{{ fm.updated ?? today }} · 维护者：のの</template>
  </PageFrame>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter, type RouteLocationRaw } from 'vue-router'
import PageFrame from '@/layouts/PageFrame.vue'

/** 面包屑与动作的类型（按需再扩） */
type BreadcrumbItem = {
  text: string
  to?: RouteLocationRaw
}

type ActionItem = {
  label: string
  type?: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info'
  to?: RouteLocationRaw
  href?: string
}

type Frontmatter = {
  title?: string
  desc?: string
  updated?: string
  breadcrumb?: BreadcrumbItem[]
  actions?: ActionItem[]
}

/** 扩展一下 route.meta，让 TS 认识 frontmatter */
type RouteMetaExt = { frontmatter?: Frontmatter } & Record<string, unknown>

const route = useRoute()
const router = useRouter()
const fm = computed<Frontmatter>(() => (route.meta as RouteMetaExt).frontmatter ?? {})
const today = new Date().toISOString().slice(0, 10)

function go(a: ActionItem): void {
  if (a.to) router.push(a.to)
  else if (a.href) window.open(a.href, '_blank', 'noopener,noreferrer')
}
</script>
