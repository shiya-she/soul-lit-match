# 寻隐者 — 灵魂文学家匹配测试

> 在文学的星空中，找到那颗与你灵魂共振的星球。

12 道题定位 4 个文学维度倾向，从 16 位伟大文学家中匹配最契合的一位。

## 技术栈

- **前端**: Nuxt 3 + Vue 3 + TypeScript
- **后端**: Nuxt Server Routes (Nitro)
- **数据库**: Supabase (PostgreSQL)
- **样式**: CSS custom properties，暗色主题，响应式

## 架构

```
浏览器 (Vue SPA)
  │
  │ GET /api/questions   → 获取题目和维度定义
  │ POST /api/match      → 提交答案，服务端计算匹配
  │
  ▼
Nuxt Server Routes (Nitro)
  │
  │ 评分算法 · 类型码计算 · 匹配逻辑（全部服务端）
  │
  ▼
Supabase PostgreSQL
  │
  │ writers 表（文学家数据库，可动态管理）
```

**关键设计：** 评分算法和匹配逻辑全部在服务端运行，前端只负责展示。文学家数据存储在 Supabase 中，可通过 Dashboard 或 API 增删改，无需重新部署。

## 快速开始

```bash
# 1. 安装依赖
npm install

# 2. 配置 Supabase
cp .env.example .env
# 编辑 .env 填入你的 Supabase 项目 URL 和密钥

# 3. 初始化数据库
# 在 Supabase SQL Editor 中运行 supabase/migrations/001_create_writers.sql

# 4. 启动开发服务器
npm run dev

# 5. 生产构建
npm run build
npm run preview
```

## 项目结构

```
soul-lit-match/
├── app.vue                    # 主应用组件（状态管理 + 视图路由）
├── app.css                    # 全局样式
├── nuxt.config.ts             # Nuxt 配置
├── types/index.ts             # TypeScript 类型定义
├── components/
│   ├── WelcomeView.vue        # 欢迎页
│   ├── QuizView.vue           # 答题页
│   └── ResultView.vue         # 结果页（维度图、文学家详情、分享）
├── server/
│   ├── api/
│   │   ├── questions.get.ts   # GET /api/questions
│   │   └── match.post.ts      # POST /api/match（评分 + 匹配逻辑）
│   └── data/
│       ├── dimensions.ts      # 维度定义
│       └── questions.ts       # 题目定义
├── supabase/
│   └── migrations/
│       └── 001_create_writers.sql  # 建表 + 种子数据
└── legacy/                    # 旧版静态 HTML（保留参考）
    └── index.html
```

## 文学家管理

所有文学家存储在 Supabase `writers` 表中。可通过 Supabase Dashboard 直接：

- **新增文学家**：只需插入一行新数据，指定 `type_code`
- **修改内容**：更新 `match_reason`、`keywords` 等字段，即时生效
- **删除文学家**：删除对应行

16 种类型码由 4 个维度组合（R/Z × G/L × D/F × N/W），新增类型码时需确保唯一性。
