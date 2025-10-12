<script setup>
defineProps({
  msg: String,
})
</script>

<template>
  <div class="center-box">
    <h1>大春，你要做什么！ 😭😭😭</h1>
  </div>
</template>

<style scoped>
.center-box {
  display: flex;
  justify-content: center; /* ✅ 横向居中 */
  align-items: flex-start; /* ✅ 顶部对齐 */
  min-height: 100vh; /* ✅ 占满整个屏幕高度 */
  padding-top: 30vh; /* 👈 纵向偏移量改用百分比（这里是屏幕高度的30%） */
}

h1 {
  margin: 0;
  text-align: center;
}
</style>
