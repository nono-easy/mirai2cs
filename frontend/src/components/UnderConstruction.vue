<script setup>
defineProps({
  msg: String,
})
</script>

<template>
  <div class="center-box">
    <h1>🚧 施工中...</h1>
  </div>
</template>

<style scoped>
.center-box {
  display: grid;
  place-items: center; /* 居中就好 */
  min-height: 100%; /* 占满父容器(main)的可见高度 */
}

h1 {
  margin: 0;
  text-align: center;
  transform: translateY(30vh); /* 视觉下移，不增加布局高度 */
}
</style>
