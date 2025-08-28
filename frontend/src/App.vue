<template>
  <div class="wrap">
    <el-card>
      <h1>mirai2cs.com</h1>
      <p>你好，世界！这是前端首页。</p>
      <el-button @click="count++">点击 {{ count }}</el-button>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<style>
.wrap { max-width: 720px; margin: 40px auto; }
</style>
