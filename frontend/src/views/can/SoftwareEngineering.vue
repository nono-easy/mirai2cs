<template>
  <PageFrame>
    <template #breadcrumb>
      <el-breadcrumb separator="›">
        <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
        <el-breadcrumb-item>软件工程</el-breadcrumb-item>
      </el-breadcrumb>
    </template>

    <template #title>软件工程</template>
    <template #desc>以工程化方法构建可靠的软件系统</template>

    <template #actions>
      <el-button type="primary" @click="$router.push('/software-engineering/guide')">快速上手</el-button>
      <el-button @click="$router.push('/software-engineering/roadmap')">学习路线</el-button>
    </template>

    <!-- 主体内容：按块写，天然有统一间距；卡片无阴影、弱边框 -->
    <section class="section-card">
      <h2>🧩 一、什么是「软件工程」</h2>
      一句话定义：<br>
      👉 软件工程就是<b>用工程化的方法去设计、开发、测试、维护和管理软件系统</b>的整个过程。<br>
      <br>
      它的核心思想是：软件不再是“码农灵光一现写出来的小工具”，而是像造飞机、建大桥一样，需要<b>系统规划、分工协作、过程管理和质量保证</b>。
    </section>

    <section class="section-card">
      <h2>🏗️ 二、软件工程的生命周期（从无到有）</h2>
      经典的生命周期大致分为这几步👇：
      <ol>
        <li><b>需求分析</b> – 搞清楚客户/用户到底要什么（最难的一步）</li>
        <li><b>系统设计</b> – 把需求转成系统结构和模块设计</li>
        <li><b>详细设计与编码</b> – 写出具体的代码</li>
        <li><b>测试</b> – 验证功能、性能、安全性，找出 bug</li>
        <li><b>部署与交付</b> – 上线给用户用</li>
        <li><b>维护与升级</b> – 修 bug、加功能、适配新环境</li>
      </ol>
      这个循环在敏捷开发里是快速迭代的（比如每两周一个 sprint），在传统瀑布模型里则是顺序推进的。
    </section>

    <section class="section-card">
      <h2>🧭 三、软件工程的核心原则</h2>
      一些被反复验证过的“铁律”：
      <ul>
        <li><b>🧱 模块化</b>：把系统拆成可独立开发和维护的模块</li>
        <li><b>📜 抽象化</b>：隐藏细节，暴露接口，提高可维护性</li>
        <li><b>🔁 迭代和增量</b>：不要一口吃成胖子，小步快跑持续交付</li>
        <li><b>📊 版本控制与协作</b>：用 Git 等工具规范团队协作</li>
        <li><b>🔍 测试优先 & 自动化</b>：保证质量的生命线</li>
        <li><b>📐 文档与规范</b>：不是可有可无，而是团队沟通的桥梁</li>
      </ul>
    </section>

    <section class="section-card">
      <h2>🧠 四、软件工程常见开发模型</h2>
      不同团队、不同项目会选不同模型：
      <ul>
        <li><b>🌊 瀑布模型</b>：需求固定、按部就班（传统企业系统常用）</li>
        <li><b>🔁 迭代模型</b>：逐步完善，适合需求不完全明确的项目</li>
        <li><b>🚀 敏捷开发（Agile/Scrum）</b>：快速迭代、快速反馈，互联网公司标配</li>
        <li><b>🧪 测试驱动开发（TDD）</b>：先写测试，再写代码，质量要求高时用</li>
        <li><b>🏗️ DevOps</b>：开发 + 运维一体化，强调持续交付和自动化部署</li>
      </ul>
    </section>

    <section class="section-card">
      <h2>🧰 五、软件工程涉及的学科和技能</h2>
      软件工程其实是一个交叉学科，它不只是“写代码”👇：
      <ul>
        <li><b>📚 计算机科学基础</b>：数据结构、算法、操作系统等</li>
        <li><b>🧑‍💼 项目管理</b>：需求管理、时间成本控制、风险评估</li>
        <li><b>👩‍💻 工程实践</b>：版本控制、自动化测试、CI/CD、代码评审</li>
        <li><b>🛠️ 架构设计</b>：微服务、分层架构、设计模式</li>
        <li><b>🔐 安全与质量保证</b>：安全设计、QA 流程、测试框架</li>
        <li><b>🤝 团队协作与沟通</b>：这个在大型项目里比技术还重要</li>
      </ul>
    </section>

    <template #foot>
      最近更新：2025-10-07 · 维护者：のの
    </template>
  </PageFrame>
</template>

<script setup lang="ts">
import PageFrame from '@/layouts/PageFrame.vue'
</script>
