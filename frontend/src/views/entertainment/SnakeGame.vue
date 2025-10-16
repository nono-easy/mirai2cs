<template>
  <div class="snake-page">
    <section class="snake-card">
      <header class="snake-header">
        <h1>贪吃蛇</h1>
        <p>保持冷静，躲开自己，吃掉每一颗能量方块。</p>
      </header>

      <div class="snake-stats">
        <div class="stat">
          <span class="stat-label">得分</span>
          <span class="stat-value">{{ score }}</span>
        </div>
        <div class="stat">
          <span class="stat-label">最高分</span>
          <span class="stat-value">{{ bestScore }}</span>
        </div>
        <div class="stat">
          <span class="stat-label">状态</span>
          <span class="stat-value">{{ statusText }}</span>
        </div>
      </div>

      <div class="snake-board" :style="boardStyle" role="application" aria-label="贪吃蛇棋盘">
        <div
          v-for="cell in cells"
          :key="cell.key"
          class="snake-cell"
          :class="{
            'snake-cell--snake': cell.snake,
            'snake-cell--head': cell.head,
            'snake-cell--food': cell.food,
          }"
        />
      </div>

      <div class="snake-controls">
        <button type="button" class="btn" @click="toggleRunning">
          {{ isGameOver ? '重新开始' : isRunning ? '暂停' : score > 0 ? '继续' : '开始游戏' }}
        </button>
        <button type="button" class="btn ghost" @click="resetGame">重置</button>
      </div>
    </section>

    <aside class="snake-help">
      <h2>操作指南</h2>
      <ul>
        <li>
          <span>方向键 / WASD</span>
          控制移动方向
        </li>
        <li>
          <span>空格</span>
          暂停或继续游戏
        </li>
        <li>蛇撞到边界或身体时游戏结束</li>
      </ul>
    </aside>
  </div>
</template>

<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useHead } from '@unhead/vue'

type Position = { x: number; y: number }

useHead({ title: '贪吃蛇 - mirai2cs' })

const GRID_SIZE = 18
const START_LENGTH = 3
const BASE_SPEED = 180

const snake = ref<Position[]>([])
const direction = ref<Position>({ x: 1, y: 0 })
const pendingDirection = ref<Position>({ x: 1, y: 0 })
const food = ref<Position>({ x: 0, y: 0 })
const isRunning = ref(false)
const isGameOver = ref(false)
const timer = ref<number | undefined>()
const bestScore = ref(0)
const speed = ref(BASE_SPEED)

const score = computed(() => Math.max(0, snake.value.length - START_LENGTH))
const statusText = computed(() => {
  if (isGameOver.value) return '游戏结束'
  if (!isRunning.value) return score.value > 0 ? '暂停中' : '准备开始'
  return '进行中'
})

const boardStyle = computed(() => ({
  gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
}))

const cells = computed(() => {
  const snakeIndexMap = new Map<string, number>()
  snake.value.forEach((segment, index) => {
    snakeIndexMap.set(`${segment.x}-${segment.y}`, index)
  })

  return Array.from({ length: GRID_SIZE * GRID_SIZE }, (_, index) => {
    const x = index % GRID_SIZE
    const y = Math.floor(index / GRID_SIZE)
    const key = `${x}-${y}`
    const snakeIndex = snakeIndexMap.get(key)
    return {
      key,
      snake: snakeIndex !== undefined,
      head: snakeIndex === 0,
      food: food.value.x === x && food.value.y === y,
    }
  })
})

function initSnake() {
  const startY = Math.floor(GRID_SIZE / 2)
  const startX = Math.floor(GRID_SIZE / 2) - Math.floor(START_LENGTH / 2)
  snake.value = Array.from({ length: START_LENGTH }, (_, i) => ({
    x: startX + START_LENGTH - 1 - i,
    y: startY,
  }))
  direction.value = { x: 1, y: 0 }
  pendingDirection.value = { x: 1, y: 0 }
}

function randomFoodPosition(): Position {
  const occupied = new Set(snake.value.map((segment) => `${segment.x}-${segment.y}`))
  let position: Position
  do {
    position = {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    }
  } while (occupied.has(`${position.x}-${position.y}`))
  return position
}

function placeFood() {
  food.value = randomFoodPosition()
}

function loadBestScore() {
  if (typeof window === 'undefined') return
  const stored = window.localStorage.getItem('snake-best-score')
  if (stored) bestScore.value = Number(stored) || 0
}

function saveBestScore() {
  if (typeof window === 'undefined') return
  window.localStorage.setItem('snake-best-score', String(bestScore.value))
}

function updateBestScore() {
  if (score.value > bestScore.value) {
    bestScore.value = score.value
    saveBestScore()
  }
}

function step() {
  direction.value = pendingDirection.value
  const head = snake.value[0]
  const newHead = { x: head.x + direction.value.x, y: head.y + direction.value.y }

  if (
    newHead.x < 0 ||
    newHead.y < 0 ||
    newHead.x >= GRID_SIZE ||
    newHead.y >= GRID_SIZE ||
    snake.value.some((segment) => segment.x === newHead.x && segment.y === newHead.y)
  ) {
    endGame()
    return
  }

  snake.value = [newHead, ...snake.value]

  if (newHead.x === food.value.x && newHead.y === food.value.y) {
    placeFood()
  } else {
    snake.value.pop()
  }
}

function scheduleTick() {
  cancelTick()
  timer.value = window.setInterval(step, speed.value)
}

function cancelTick() {
  if (timer.value !== undefined) {
    clearInterval(timer.value)
    timer.value = undefined
  }
}

function startGame() {
  initSnake()
  placeFood()
  isGameOver.value = false
  isRunning.value = true
  speed.value = BASE_SPEED
  scheduleTick()
}

function endGame() {
  isGameOver.value = true
  isRunning.value = false
  cancelTick()
  updateBestScore()
}

function toggleRunning() {
  if (isGameOver.value) {
    startGame()
    return
  }
  if (isRunning.value) {
    isRunning.value = false
    cancelTick()
  } else {
    isRunning.value = true
    scheduleTick()
  }
}

function resetGame() {
  initSnake()
  placeFood()
  isGameOver.value = false
  isRunning.value = false
  cancelTick()
}

function changeDirection(next: Position) {
  const current = pendingDirection.value
  if (current.x + next.x === 0 && current.y + next.y === 0) return
  pendingDirection.value = next
}

function onKeydown(event: KeyboardEvent) {
  const key = event.key.toLowerCase()
  if (key === ' ') {
    event.preventDefault()
    toggleRunning()
    return
  }

  const mapping: Record<string, Position> = {
    arrowup: { x: 0, y: -1 },
    w: { x: 0, y: -1 },
    arrowdown: { x: 0, y: 1 },
    s: { x: 0, y: 1 },
    arrowleft: { x: -1, y: 0 },
    a: { x: -1, y: 0 },
    arrowright: { x: 1, y: 0 },
    d: { x: 1, y: 0 },
  }

  const next = mapping[key]
  if (!next) return
  event.preventDefault()
  changeDirection(next)
  if (!isRunning.value && !isGameOver.value) {
    isRunning.value = true
    scheduleTick()
  }
}

watch(
  () => snake.value.length,
  (length) => {
    if (length <= START_LENGTH) return
    const newSpeed = Math.max(90, BASE_SPEED - (length - START_LENGTH) * 6)
    if (newSpeed !== speed.value && isRunning.value) {
      speed.value = newSpeed
      scheduleTick()
    } else {
      speed.value = newSpeed
    }
  }
)

onMounted(() => {
  loadBestScore()
  initSnake()
  placeFood()
  window.addEventListener('keydown', onKeydown)
})

onBeforeUnmount(() => {
  cancelTick()
  window.removeEventListener('keydown', onKeydown)
})
</script>

<style scoped>
.snake-page {
  display: grid;
  gap: clamp(24px, 3vw, 40px);
  grid-template-columns: minmax(0, 1fr);
  max-width: min(960px, 94vw);
  margin: 40px auto;
}

.snake-card {
  padding: clamp(20px, 3vw, 28px);
  background: linear-gradient(160deg, #f7f9ff, #fef9f5);
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(46, 63, 99, 0.08);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: clamp(16px, 2.4vw, 24px);
}

.snake-header {
  text-align: center;
}

.snake-header h1 {
  font-family: 'Audiowide', cursive;
  font-size: clamp(24px, 4vw, 32px);
  color: #2b3c62;
  margin-bottom: 8px;
}

.snake-header p {
  color: rgba(43, 60, 98, 0.7);
  font-size: 14px;
}

.snake-stats {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
  width: 100%;
}

.stat {
  background: rgba(255, 255, 255, 0.65);
  border-radius: 12px;
  padding: 12px;
  text-align: center;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.6);
}

.stat-label {
  font-size: 12px;
  color: rgba(43, 60, 98, 0.6);
  display: block;
  margin-bottom: 6px;
  letter-spacing: 0.05em;
}

.stat-value {
  font-size: 20px;
  font-weight: 600;
  color: #2b3c62;
}

.snake-board {
  width: min(420px, 82vw);
  aspect-ratio: 1 / 1;
  background: rgba(255, 255, 255, 0.68);
  backdrop-filter: blur(6px);
  border-radius: 18px;
  border: 1px solid rgba(70, 99, 167, 0.15);
  display: grid;
  gap: 4px;
  padding: 14px;
  box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.4);
}

.snake-cell {
  border-radius: 8px;
  background: rgba(230, 235, 248, 0.6);
  transition: background 0.12s ease;
}

.snake-cell--snake {
  background: linear-gradient(135deg, #4e8cff, #3a6edc);
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.16);
}

.snake-cell--head {
  background: linear-gradient(135deg, #ff9a62, #ff7155);
}

.snake-cell--food {
  background: radial-gradient(circle at 35% 35%, #ffde75, #ffb347);
  box-shadow: 0 0 12px rgba(255, 199, 94, 0.6);
}

.snake-controls {
  display: flex;
  gap: 12px;
}

.btn {
  border: none;
  border-radius: 999px;
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 600;
  color: white;
  background: linear-gradient(135deg, #4e8cff, #7b9dff);
  box-shadow: 0 12px 24px rgba(78, 140, 255, 0.25);
  cursor: pointer;
  transition:
    transform 0.18s ease,
    box-shadow 0.18s ease;
}

.btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 26px rgba(78, 140, 255, 0.35);
}

.btn:active {
  transform: translateY(0);
}

.btn.ghost {
  background: rgba(255, 255, 255, 0.8);
  color: #2b3c62;
  box-shadow: none;
  border: 1px solid rgba(70, 99, 167, 0.25);
}

.btn.ghost:hover {
  background: rgba(255, 255, 255, 0.95);
}

.snake-help {
  background: rgba(255, 255, 255, 0.86);
  border-radius: 20px;
  padding: clamp(18px, 3vw, 24px);
  box-shadow: 0 16px 40px rgba(33, 43, 68, 0.08);
}

.snake-help h2 {
  margin-bottom: 12px;
  font-size: 18px;
  color: #2b3c62;
}

.snake-help ul {
  display: grid;
  gap: 8px;
  color: rgba(43, 60, 98, 0.75);
  font-size: 14px;
}

.snake-help span {
  font-weight: 600;
  color: #3f5fb4;
}

@media (min-width: 880px) {
  .snake-page {
    grid-template-columns: 3fr 2fr;
    align-items: start;
  }

  .snake-help {
    position: sticky;
    top: 120px;
  }
}

@media (max-width: 540px) {
  .snake-stats {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .snake-controls {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
