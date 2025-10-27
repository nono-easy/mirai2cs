<!--suppress CssUnusedSymbol -->
<template>
  <div class="generator-container">
    <!-- 密码显示区域 -->
    <div class="password-display">
      <input v-if="password" :value="password" readonly class="password-input" />
      <div v-else class="placeholder">点击下方按钮生成密码</div>

      <button
        v-if="password"
        @click="copyToClipboard"
        class="copy-btn"
        :class="{ copied: isCopied }"
      >
        {{ isCopied ? '已复制 ✓' : '复制' }}
      </button>
    </div>

    <!-- 配置区域 -->
    <div class="settings">
      <div class="length-control">
        <label>密码长度</label>
        <div class="length-display">
          <input v-model.number="length" type="range" min="8" max="128" class="slider" />
          <span class="length-value">{{ length }}</span>
        </div>
      </div>

      <div class="options">
        <label class="checkbox-item">
          <input v-model="options.uppercase" type="checkbox" />
          <span>大写字母 (A-Z)</span>
        </label>
        <label class="checkbox-item">
          <input v-model="options.lowercase" type="checkbox" />
          <span>小写字母 (a-z)</span>
        </label>
        <label class="checkbox-item">
          <input v-model="options.numbers" type="checkbox" />
          <span>数字 (0-9)</span>
        </label>
        <label class="checkbox-item">
          <input v-model="options.symbols" type="checkbox" />
          <span>特殊符号 (!@#$...)</span>
        </label>
      </div>
    </div>

    <!-- 强度指示 -->
    <div v-if="password" class="strength-indicator">
      <div class="strength-bar">
        <div :class="`strength-fill strength-${strengthLevel}`"></div>
      </div>
      <span class="strength-text">强度: {{ strengthLabel }}</span>
    </div>

    <!-- 生成按钮 -->
    <button @click="generatePassword" class="generate-btn">生成密码</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const length = ref(16)
const password = ref('')
const isCopied = ref(false)

const options = ref({
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: true,
})

const generatePassword = () => {
  const chars = {
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    numbers: '0123456789',
    symbols: '!@#$%^&*()_+-=[]{}|;:,.<>?',
  }

  let available = ''
  if (options.value.uppercase) available += chars.uppercase
  if (options.value.lowercase) available += chars.lowercase
  if (options.value.numbers) available += chars.numbers
  if (options.value.symbols) available += chars.symbols

  if (!available) {
    alert('请至少选择一种字符类型')
    return
  }

  password.value = Array.from(
    { length: length.value },
    () => available[Math.floor(Math.random() * available.length)]
  ).join('')
}

const strengthLevel = computed(() => {
  if (length.value < 8) return 1
  if (length.value < 12) return 2
  if (length.value < 16) return 3
  return 4
})

const strengthLabel = computed(() => {
  const labels = ['弱', '一般', '中等', '强', '非常强']
  return labels[strengthLevel.value]
})

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(password.value)
    isCopied.value = true
    setTimeout(() => {
      isCopied.value = false
    }, 2000)
  } catch (err) {
    console.error('复制失败:', err)
  }
}
</script>

<!-- stylelint-disable -->
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.generator-container {
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
}

/* 密码显示区域 */
.password-display {
  position: relative;
  display: flex;
  gap: 12px;
  align-items: center;
}

.password-input {
  flex: 1;
  padding: 16px 20px;
  font-size: 16px;
  font-family: 'Monaco', 'Courier New', monospace;
  letter-spacing: 2px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #fafafa;
  transition: all 0.3s ease;
}

.password-input:focus {
  outline: none;
  border-color: #0066ff;
  background: #fff;
  box-shadow: 0 0 0 3px rgba(0, 102, 255, 0.1);
}

.placeholder {
  flex: 1;
  padding: 16px 20px;
  color: #999;
  font-size: 14px;
  text-align: center;
}

.copy-btn {
  padding: 12px 20px;
  background: #0066ff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.copy-btn:hover {
  background: #0052cc;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 102, 255, 0.3);
}

.copy-btn.copied {
  background: #10b981;
}

/* 配置区域 */
.settings {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.length-control label {
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #333;
  margin-bottom: 12px;
}

.length-display {
  display: flex;
  gap: 16px;
  align-items: center;
}

.slider {
  flex: 1;
  height: 6px;
  border-radius: 3px;
  background: #e0e0e0;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #0066ff;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 102, 255, 0.4);
}

.slider::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 4px 12px rgba(0, 102, 255, 0.6);
}

.slider::-moz-range-thumb {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #0066ff;
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 102, 255, 0.4);
}

.length-value {
  min-width: 40px;
  text-align: right;
  font-weight: 600;
  color: #0066ff;
  font-size: 16px;
}

/* 选项 */
.options {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.checkbox-item {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 6px;
  transition: background 0.2s ease;
}

.checkbox-item:hover {
  background: #f5f5f5;
}

.checkbox-item input[type='checkbox'] {
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: #0066ff;
}

.checkbox-item span {
  font-size: 14px;
  color: #333;
  user-select: none;
}

/* 强度指示 */
.strength-indicator {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.strength-bar {
  width: 100%;
  height: 6px;
  background: #e0e0e0;
  border-radius: 3px;
  overflow: hidden;
}

.strength-fill {
  height: 100%;
  border-radius: 3px;
  transition: all 0.3s ease;
}

.strength-fill.strength-1 {
  width: 25%;
  background: #ef4444;
}

.strength-fill.strength-2 {
  width: 50%;
  background: #f97316;
}

.strength-fill.strength-3 {
  width: 75%;
  background: #eab308;
}

.strength-fill.strength-4 {
  width: 100%;
  background: #10b981;
}

.strength-text {
  font-size: 12px;
  color: #666;
  text-align: right;
}

/* 生成按钮 */
.generate-btn {
  padding: 14px 24px;
  background: #0066ff;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 8px;
}

.generate-btn:hover {
  background: #0052cc;
  transform: translateY(-2px);
  box-shadow: 0 8px 16px rgba(0, 102, 255, 0.3);
}

.generate-btn:active {
  transform: translateY(0);
}

/* 响应式 */
@media (max-width: 480px) {
  .generator-container {
    padding: 24px 16px;
    gap: 20px;
  }

  .password-display {
    flex-direction: column;
  }

  .copy-btn {
    width: 100%;
  }

  .options {
    grid-template-columns: 1fr;
  }
}
</style>
<!-- stylelint-enable -->
