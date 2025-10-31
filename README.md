# mirai2cs - 个人网站项目

[![License](https://img.shields.io/github/license/nono-easy/mirai2cs)](LICENSE)
![Vue](https://img.shields.io/badge/Vue-3.x-brightgreen)
![Vite](https://img.shields.io/badge/Vite-7.x-646cff)
![pnpm](https://img.shields.io/badge/pnpm-%3E%3D8.x-orange)

个人网站 | Personal Website

## 技术栈

- **前端框架**: Vue 3 (Composition API)
- **构建工具**: Vite 7.x
- **包管理器**: pnpm 8.x
- **语言**: TypeScript
- **UI 组件库**: Element Plus
- **路由管理**: Vue Router 4.x
- **代码规范**: ESLint + Prettier

## 项目结构

```
mirai2cs/
├── frontend/ # 前端项目主目录
│ ├── src/ # 源代码目录
│ ├── public/ # 静态资源目录
│ ├── components/ # 公共组件
│ └── ...
├── backend/ # 后端服务（待实现）
├── deploy/ # 部署相关配置
├── docs/ # 项目文档
└── scripts/ # 脚本工具
```

## 快速开始

### 环境要求

- Node.js >= 16.x
- pnpm >= 8.x

### 安装依赖

```bash
# 进入前端目录
cd frontend

# 安装依赖
pnpm install
```

### 开发运行

```bash
# 启动开发服务器
pnpm dev

# 启动开发服务器并对外暴露
pnpm preview:host
```

### 构建部署

```bash
# 生产环境构建
pnpm build

# 构建并分析包大小
pnpm build:analyze

# 预览生产构建
pnpm preview
```

## 代码质量

### 类型检查

```bash
pnpm typecheck
```

### 代码规范检查

```bash
# 检查代码规范
pnpm lint

# 自动修复代码规范问题
pnpm lint:fix

# 格式化代码
pnpm format
```

## 项目脚本

| 脚本命令 | 描述 |
|---------|------|
| `dev` | 启动开发服务器 |
| `build` | 生产环境构建 |
| `build:analyze` | 构建并分析包大小 |
| `preview` | 预览生产构建 |
| `typecheck` | TypeScript 类型检查 |
| `lint` | ESLint 代码检查 |
| `lint:fix` | 自动修复 ESLint 问题 |
| `format` | Prettier 格式化代码 |

## 目录说明

- **frontend/**: Vue 3 + Vite 前端应用
- **backend/**: 后端服务（计划中）
- **deploy/**: 部署配置文件
- **docs/**: 项目文档
- **scripts/**: 工具脚本

## 贡献

欢迎提交 Issue 和 Pull Request 来改进这个项目。

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解更多详情。

## 联系方式

- 作者: のの
- GitHub: https://github.com/nono-easy
