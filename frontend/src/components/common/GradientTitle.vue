<template>
  <h1 class="gradient-title"><slot>Mirai2CS</slot></h1>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Audiowide&display=swap');

.gradient-title {
  font-family: 'Audiowide', sans-serif;
  font-size: clamp(36px, 5vw, 64px);
  margin: 0;
  letter-spacing: 0.5px;
  background: linear-gradient(90deg, #409eff, #e6a23c);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
