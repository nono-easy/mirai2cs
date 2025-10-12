<!-- src/views/FutureLabRetro.vue -->
<template>
  <main class="crt">
    <div class="page">
      <header class="header">
        <h1>Future Gadget Laboratory</h1>
        <p class="tagline">— 未来装置研究所 非公开主页 —</p>
        <p class="meta">
          建站：{{ founded }} ｜ 今日：{{ today }} ｜ 访问计数器：
          <span class="badge">{{ counter }}</span>
        </p>
        <nav class="nav">
          <a @click.prevent="section = 'news'" :class="{ active: section === 'news' }">研究日志</a>
          <a @click.prevent="section = 'gadgets'" :class="{ active: section === 'gadgets' }">
            未来装置
          </a>
          <a @click.prevent="section = 'members'" :class="{ active: section === 'members' }">
            成员档案
          </a>
          <a @click.prevent="section = 'guestbook'" :class="{ active: section === 'guestbook' }">
            留言板
          </a>
        </nav>
      </header>

      <section v-if="section === 'news'" class="panel">
        <h2>◆ 研究日志</h2>
        <ul class="list">
          <li v-for="n in news" :key="n.id">
            <span class="time">[{{ n.date }}]</span>
            <span class="title">{{ n.title }}</span>
            <span class="dot">·</span>
            <span class="desc">{{ n.desc }}</span>
          </li>
        </ul>
      </section>

      <section v-else-if="section === 'gadgets'" class="panel">
        <h2>◆ 未来装置 一览（试作）</h2>
        <div class="grid">
          <article v-for="g in gadgets" :key="g.id" class="card">
            <header class="card-hd">
              <span class="id">No.{{ g.id.toString().padStart(3, '0') }}</span>
              <h3 class="name">{{ g.name }}</h3>
            </header>
            <p class="intro">{{ g.brief }}</p>
            <details>
              <summary>技术备忘</summary>
              <ul class="notes">
                <li v-for="(x, idx) in g.notes" :key="idx">{{ x }}</li>
              </ul>
            </details>
          </article>
        </div>
      </section>

      <section v-else-if="section === 'members'" class="panel">
        <h2>◆ 成员档案</h2>
        <table class="table">
          <thead>
            <tr>
              <th>代号</th>
              <th>姓名</th>
              <th>职能</th>
              <th>签名</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="m in members" :key="m.code">
              <td class="mono">{{ m.code }}</td>
              <td>{{ m.name }}</td>
              <td>{{ m.role }}</td>
              <td class="fade">{{ m.motto }}</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section v-else class="panel">
        <h2>◆ 留言板（离线）</h2>
        <p>
          此页面为静态留档。你可以在
          <span class="badge">mirai2cs.com</span>
          的任意页面底部找到邮箱联系我。
        </p>
        <form class="guest">
          <label>
            昵称
            <input placeholder="okabe" />
          </label>
          <label>
            留言
            <textarea placeholder="El Psy Kongroo."></textarea>
          </label>
          <button type="button" @click="toast()">提交（模拟）</button>
        </form>
      </section>

      <footer class="footer">
        <span>El Psy Kongroo.</span>
        <span class="sep">|</span>
        <span>© {{ new Date().getFullYear() }} Future Gadget Lab · mirai2cs</span>
      </footer>
    </div>
  </main>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const founded = '2010-08-13'
const today = new Date().toISOString().slice(0, 10)
const counter = Math.floor(1000 + Math.random() * 9000)

const section = ref<'news' | 'gadgets' | 'members' | 'guestbook'>('gadgets')

const news = [
  {
    id: 1,
    date: '2025-09-20',
    title: '微波炉改造',
    desc: '通过手机触发加热，产生奇妙副作用（危险）。',
  },
  { id: 2, date: '2025-09-21', title: '电磁增幅测试', desc: '线圈过热；需要降压与屏蔽。' },
  { id: 3, date: '2025-09-22', title: 'SERN 资料传闻', desc: '待证伪；谨慎记录。' },
]

const gadgets = [
  {
    id: 1,
    name: 'PhoneWave（仮）',
    brief: '手机遥控的“微波炉”。',
    notes: ['继电器控制市电，注意隔离', '温控探针读数不稳定', '实验记录编号：PW-α'],
  },
  {
    id: 2,
    name: '时间感应妄想机',
    brief: '脑波感应与噪声反馈装置（未证实）。',
    notes: ['EEG 采集电极需要更稳固', '噪声门槛影响主观体验'],
  },
  {
    id: 3,
    name: 'IBN 5100 数据桥',
    brief: '古董电脑读写接口的中介工具。',
    notes: ['字符集转换', '电源纹波要小于 20mV'],
  },
  {
    id: 4,
    name: '胶囊台词发生器',
    brief: '随机输出中二台词，激励士气。',
    notes: ['可做为 build banner', '支持自定义词库'],
  },
  {
    id: 5,
    name: '邮件延迟器',
    brief: '把邮件定时“送往过去”（仅比喻）。',
    notes: ['Cron + 签名校验', '注意重放攻击'],
  },
  {
    id: 6,
    name: '环境噪声采样仪',
    brief: '采集周边 RF/EMI，绘制频谱瀑布图。',
    notes: ['SDR 入门级配置即可', 'WebAudio 可视化'],
  },
]

const members = [
  { code: '001', name: '冈部伦太郎', role: '狂妄的疯狂科学家', motto: '选择吧，命运石之门。' },
  { code: '002', name: '椎名真由理', role: '点心与“嘟嘟噜”', motto: '大家要幸福哟~' },
  { code: '003', name: '桥田至', role: '系统管理员/网站维护', motto: '神的领域也要有带宽。' },
  { code: '004', name: '牧濑红莉栖', role: '理论顾问', motto: '可证伪性 > 中二设定。' },
]

function toast() {
  alert('留言已保存到真空管里（并没有）。')
}
</script>

<style scoped>
/* ===== Retro / BBS / CRT 风格 ===== */
:root {
  --bg: #0e0f11;
  --panel: #111318;
  --ink: #d6e5ff;
  --dim: #9fb0c8;
  --accent: #58ff9c;
  --line: #2a2f3a;
  --card: #0f1217;
}

.crt {
  background:
    radial-gradient(1200px 500px at 50% -20%, #1a2130 0%, var(--bg) 60%) no-repeat,
    var(--bg);
  color: var(--ink);
  min-height: 100vh;
  padding: 32px 12px;
  font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, 'Liberation Mono', monospace;
  text-shadow: 0 0 1px rgba(88, 255, 156, 0.2);
}
.crt:before {
  /* 细微扫描线 */
  content: '';
  position: fixed;
  inset: 0;
  background: repeating-linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.02),
    rgba(255, 255, 255, 0.02) 1px,
    transparent 2px,
    transparent 3px
  );
  pointer-events: none;
  mix-blend-mode: overlay;
}

.page {
  max-width: 980px;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 20px;
}
.header h1 {
  letter-spacing: 1px;
  font-weight: 700;
  margin: 0;
}
.tagline {
  margin: 6px 0 4px;
  color: var(--dim);
}
.meta {
  color: var(--dim);
  font-size: 13px;
}
.badge {
  background: #16301f;
  color: var(--accent);
  padding: 2px 6px;
  border: 1px solid #234;
  border-radius: 4px;
}

.nav {
  display: inline-flex;
  gap: 10px;
  margin-top: 12px;
  flex-wrap: wrap;
  border: 1px solid var(--line);
  padding: 6px 8px;
  background: #0a0d12;
  border-radius: 8px;
}
.nav a {
  cursor: pointer;
  padding: 6px 10px;
  border-radius: 6px;
  border: 1px dashed transparent;
}
.nav a.active,
.nav a:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.panel {
  border: 1px solid var(--line);
  background: linear-gradient(180deg, #0d1117, var(--panel));
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
}

.list {
  list-style: none;
  margin: 0;
  padding: 0;
}
.list li {
  padding: 8px 0;
  border-bottom: 1px dashed #223;
}
.list .time {
  color: var(--accent);
  margin-right: 6px;
}
.list .title {
  font-weight: 600;
}
.list .desc {
  color: var(--dim);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 12px;
}
.card {
  background: var(--card);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 12px;
}
.card-hd {
  display: flex;
  align-items: baseline;
  gap: 8px;
  margin-bottom: 4px;
}
.card .id {
  color: var(--accent);
  font-size: 12px;
}
.card .name {
  margin: 0;
  font-size: 16px;
}
.intro {
  color: var(--dim);
  margin: 6px 0 10px;
}
.notes {
  padding-left: 18px;
  color: var(--dim);
}

.table {
  width: 100%;
  border-collapse: collapse;
}
.table th,
.table td {
  border: 1px solid var(--line);
  padding: 8px;
  text-align: left;
}
.mono {
  font-family: inherit;
  color: var(--accent);
}
.fade {
  color: var(--dim);
}

.guest {
  display: grid;
  gap: 10px;
  margin-top: 10px;
  max-width: 520px;
}
.guest label {
  display: grid;
  gap: 6px;
}
.guest input,
.guest textarea {
  background: #0b0f14;
  color: var(--ink);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 8px 10px;
  outline: none;
}
.guest textarea {
  min-height: 100px;
  resize: vertical;
}
.guest button {
  justify-self: start;
  padding: 8px 14px;
  border-radius: 8px;
  background: #11331f;
  border: 1px solid #1f3b2a;
  color: var(--accent);
  cursor: pointer;
}
.guest button:hover {
  filter: brightness(1.1);
}

.footer {
  display: flex;
  justify-content: center;
  gap: 10px;
  color: var(--dim);
  margin: 18px 0 8px;
}
.sep {
  opacity: 0.4;
}
@media (max-width: 560px) {
  .nav {
    width: 100%;
    justify-content: center;
  }
}
</style>
