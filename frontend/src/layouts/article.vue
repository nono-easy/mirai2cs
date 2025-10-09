<template>
  <PageFrame>
    <template #breadcrumb>
      <el-breadcrumb v-if="fm.breadcrumb?.length" separator="›">
        <el-breadcrumb-item v-for="(b,i) in fm.breadcrumb" :key="i" v-bind="b.to?{to:b.to}:{ }">
          {{ b.text }}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </template>

    <template #title>{{ fm.title }}</template>
    <template #desc>{{ fm.desc }}</template>

    <template #actions>
      <el-button v-for="(a,i) in fm.actions||[]" :key="i" :type="a.type||'default'" round @click="go(a)">
        {{ a.label }}
      </el-button>
    </template>

    <section class="section-card article"><slot/></section>

    <template #foot>{{ fm.updated || today }} · 维护者：のの</template>
  </PageFrame>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import PageFrame from '@/layouts/PageFrame.vue'
const route = useRoute(); const router = useRouter()
const fm = (route.meta as any)?.frontmatter ?? {}
const today = new Date().toISOString().slice(0,10)
function go(a:any){ if(a?.to) router.push(a.to); else if(a?.href) open(a.href,'_blank','noopener,noreferrer') }
</script>
