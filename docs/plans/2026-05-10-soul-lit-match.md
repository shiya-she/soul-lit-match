# 灵魂文学家匹配测试 — 实施计划

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** 构建一个类似 MBTI 的人格测试 Web 应用，通过 12 道题定位用户在 4 个文学维度上的倾向，匹配 16 位文学家中最灵魂契合的一位。

**Architecture:** 纯前端单页 HTML/CSS/JS。一个 HTML 文件包含全部逻辑：欢迎页 → 答题页（12题逐题展示）→ 结果页（文学家画像 + 详细介绍 + 匹配理由）。无框架，无构建工具，无后端。

**Tech Stack:** HTML5, CSS3, Vanilla JS (ES6+), 内嵌 Emoji 作为文学家头像

---

## 产品设计

### 四个维度（类 MBTI）

| 维度 | 左极 (代号) | 右极 (代号) | 含义 |
|------|------------|------------|------|
| 世界观 | 🌙 浪漫 (R) | 🌍 现实 (Z) | 你看世界是透过诗意的滤镜，还是务实的透镜 |
| 创作观 | 💜 感性 (G) | 🧠 理性 (L) | 你更相信情感的冲动，还是逻辑的推演 |
| 美学观 | 🏛 古典 (D) | 🚀 先锋 (F) | 你偏爱经典永恒之美，还是前卫实验之新 |
| 表达观 | 🔮 内省 (N) | 📢 外放 (W) | 你的力量源于向内深潜，还是向外辐射 |

每题测试一个维度，共 12 题（每维度 3 题），每题两个选项对应两极。

### 16 位文学家矩阵

| 类型 | 文学家 | 代表作 | 灵魂关键词 |
|------|--------|--------|-----------|
| R-G-D-N | 李清照 | 《声声慢》《如梦令》 | 婉约深情，古典诗心，词中藏泪 |
| R-G-D-W | 李白 | 《将进酒》《蜀道难》 | 豪放飘逸，浪漫至极，酒入诗肠 |
| R-G-F-N | 村上春树 | 《挪威的森林》《1Q84》 | 孤独美学，超现实日常，爵士节奏 |
| R-G-F-W | 聂鲁达 | 《二十首情诗与绝望的歌》 | 炽烈情诗，万物有灵，政治与爱 |
| R-L-D-N | 陶渊明 | 《归园田居》《桃花源记》 | 隐逸哲思，田园理想，淡而有味 |
| R-L-D-W | 苏轼 | 《赤壁赋》《定风波》 | 旷达通透，苦难中开花，千古通才 |
| R-L-F-N | 博尔赫斯 | 《小径分岔的花园》《阿莱夫》 | 迷宫哲思，无限图书馆，盲眼先知 |
| R-L-F-W | 王小波 | 《黄金时代》《沉默的大多数》 | 黑色幽默，理性浪漫，特立独行 |
| Z-G-D-N | 曹雪芹 | 《红楼梦》 | 繁华落尽，人性深渊，以情悟道 |
| Z-G-D-W | 杜甫 | 《春望》《茅屋为秋风所破歌》 | 沉郁顿挫，家国情怀，诗史 |
| Z-G-F-N | 张爱玲 | 《倾城之恋》《金锁记》 | 苍凉美学，人性解剖，都市寓言 |
| Z-G-F-W | 鲁迅 | 《狂人日记》《阿Q正传》 | 冷峻深刻，国民性批判，铁屋呐喊 |
| Z-L-D-N | 司马迁 | 《史记》 | 忍辱负重，实录精神，史家绝唱 |
| Z-L-D-W | 蒙田 | 《随笔集》 | 怀疑主义，自我探索，温和智慧 |
| Z-L-F-N | 钱锺书 | 《围城》《管锥编》 | 学贯中西，机智刻薄，围城内外 |
| Z-L-F-W | 乔治·奥威尔 | 《1984》《动物农场》 | 反极权，语言即思想，冷峻预言 |

### 题目设计（12 题）

**维度1：浪漫 vs 现实（3题）**
1. 你更被什么打动？ A.一轮意外的落日 🌅(R) / B.一张精确的蓝图 📐(Z)
2. 旅行时你最享受？ A.漫无目的地迷路 🗺(R) / B.按计划打卡每一个点 ✅(Z)
3. 你认为人生的意义在于？ A.创造美与诗意 ✨(R) / B.解决真实的问题 🔧(Z)

**维度2：感性 vs 理性（3题）**
4. 做重要决定时你靠？ A.直觉和心跳 💓(G) / B.分析和数据 📊(L)
5. 面对朋友哭诉你更倾向？ A.先共情，陪ta一起难过 🫂(G) / B.先分析，帮ta理清思路 🧭(L)
6. 一部作品最吸引你的是？ A.让你哭或笑的情感力量 😭(G) / B.让你思考的智性光芒 💡(L)

**维度3：古典 vs 先锋（3题）**
7. 你对传统的态度？ A.传统是一座宝藏，值得传承 🏛(D) / B.传统是用来打破的脚手架 🔨(F)
8. 你偏爱的艺术风格？ A.文艺复兴的和谐典雅 🎨(D) / B.当代艺术的抽象实验 🌀(F)
9. 写作时你更看重？ A.遵循经典的章法与韵律 📜(D) / B.创造全新的形式与语言 ⚡(F)

**维度4：内省 vs 外放（3题）**
10. 周末你更想？ A.独自读书或散步，与自己对话 📖(N) / B.约朋友聚会，在人群中充电 🎉(W)
11. 你表达观点的方式？ A.深思熟虑后写成文字 ✍️(N) / B.即兴发言，情到浓时自然吐露 🎤(W)
12. 你从何处获得力量？ A.从内心的宁静和自我觉察中 🧘(N) / B.从外界的反馈和影响力中 ⚡(W)

### 评分与匹配

- 每题选A得对应维度左极+1，选B得右极-1
- 每维度3题，得分正数偏左极，负数偏右极，零则默认左极
- 4个维度倾向组合 → 映射到16宫格中的一位文学家

---

## 实施任务

### Task 1: 创建完整 HTML 文件（数据 + 样式 + 逻辑）

**Objective:** 一次性创建包含全部功能、样式、数据的完整单页 HTML 文件。

**Files:**
- Create: `/project/soul-lit-match/index.html`

**内容要点：**
- 完整 CSS（暗色主题、卡片布局、动画、响应式）
- 完整 JS 数据层（维度、题目、文学家数据库）
- 完整 JS 逻辑层（状态管理、评分算法、匹配算法）
- 完整 JS 渲染层（欢迎页、答题页、结果页）

**Step 1: 创建文件**

```bash
cd /project/soul-lit-match && cat > index.html << 'HEREDOC_EOF'
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>寻隐者 — 灵魂文学家匹配测试</title>
<style>
:root {
  --bg: #0f0f1a;
  --card-bg: #1a1a2e;
  --text: #e0d8c8;
  --text-dim: #8b8680;
  --accent: #c9a96e;
  --accent-glow: #e8d5a3;
  --option-bg: #222236;
  --option-hover: #2a2a44;
  --progress-bg: #2a2a3a;
  --divider: #333350;
  --font-serif: 'Noto Serif SC', 'STSong', serif;
  --font-sans: 'PingFang SC', 'Microsoft YaHei', sans-serif;
  --radius: 12px;
  --transition: 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
* { margin: 0; padding: 0; box-sizing: border-box; }
body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-sans);
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image:
    radial-gradient(ellipse at 20% 50%, rgba(201,169,110,0.05) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 20%, rgba(180,160,200,0.04) 0%, transparent 50%);
}
.container { width: 100%; max-width: 600px; padding: 40px 24px; }
.card {
  background: var(--card-bg);
  border-radius: var(--radius);
  padding: 48px 40px;
  border: 1px solid var(--divider);
  box-shadow: 0 4px 24px rgba(0,0,0,0.3);
}
/* Welcome Page */
.welcome-title { font-family: var(--font-serif); font-size: 2rem; text-align: center; color: var(--accent-glow); margin-bottom: 8px; letter-spacing: 0.05em; }
.welcome-subtitle { text-align: center; color: var(--text-dim); font-size: 0.9rem; margin-bottom: 32px; letter-spacing: 0.1em; }
.welcome-desc { text-align: center; color: var(--text); font-size: 0.95rem; line-height: 1.8; margin-bottom: 36px; }
.welcome-desc span { color: var(--accent); }
.quote-divider { width: 40px; height: 1px; background: var(--accent); margin: 20px auto; opacity: 0.5; }
.btn-start { display: block; width: 100%; max-width: 240px; margin: 0 auto; padding: 14px 0; background: linear-gradient(135deg, var(--accent), #b8943e); color: #1a1a2e; border: none; border-radius: 8px; font-size: 1.05rem; font-weight: 600; cursor: pointer; transition: var(--transition); letter-spacing: 0.05em; }
.btn-start:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(201,169,110,0.3); }
.welcome-footer { text-align: center; color: var(--text-dim); font-size: 0.75rem; margin-top: 24px; }
/* Quiz Page */
.quiz-header { display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; }
.quiz-counter { color: var(--text-dim); font-size: 0.85rem; }
.progress-bar { flex: 1; height: 3px; background: var(--progress-bg); border-radius: 2px; margin: 0 16px; overflow: hidden; }
.progress-fill { height: 100%; background: linear-gradient(90deg, var(--accent), var(--accent-glow)); border-radius: 2px; transition: width 0.5s ease; }
.quiz-question { font-family: var(--font-serif); font-size: 1.25rem; text-align: center; margin-bottom: 36px; line-height: 1.6; color: var(--text); min-height: 80px; display: flex; align-items: center; justify-content: center; }
.quiz-options { display: flex; flex-direction: column; gap: 12px; }
.option-btn { display: flex; align-items: center; gap: 12px; padding: 18px 20px; background: var(--option-bg); border: 1px solid var(--divider); border-radius: var(--radius); color: var(--text); font-size: 0.95rem; cursor: pointer; transition: var(--transition); text-align: left; font-family: var(--font-sans); }
.option-btn:hover { background: var(--option-hover); border-color: var(--accent); transform: translateX(4px); }
.option-btn .emoji { font-size: 1.5rem; flex-shrink: 0; }
.option-btn .text { flex: 1; }
@keyframes fadeInUp { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }
.fade-in { animation: fadeInUp 0.4s ease forwards; }
/* Result Page */
.result-header { text-align: center; margin-bottom: 28px; }
.result-badge { display: inline-block; padding: 4px 16px; background: rgba(201,169,110,0.15); border: 1px solid rgba(201,169,110,0.3); border-radius: 20px; color: var(--accent); font-size: 0.8rem; letter-spacing: 0.05em; margin-bottom: 12px; }
.result-portrait { font-size: 4rem; text-align: center; margin-bottom: 12px; }
.result-name { font-family: var(--font-serif); font-size: 2rem; text-align: center; color: var(--accent-glow); margin-bottom: 4px; }
.result-title { text-align: center; color: var(--text-dim); font-size: 0.85rem; margin-bottom: 4px; }
.result-era { text-align: center; color: var(--text-dim); font-size: 0.75rem; margin-bottom: 16px; }
.result-quote { text-align: center; font-family: var(--font-serif); font-style: italic; color: var(--text); font-size: 0.95rem; padding: 16px 20px; background: var(--option-bg); border-radius: var(--radius); border-left: 3px solid var(--accent); margin-bottom: 20px; line-height: 1.7; }
.result-works { text-align: center; color: var(--text-dim); font-size: 0.82rem; margin-bottom: 24px; }
.result-keywords { display: flex; flex-wrap: wrap; justify-content: center; gap: 8px; margin-bottom: 28px; }
.keyword-tag { padding: 4px 12px; background: rgba(201,169,110,0.1); border-radius: 14px; font-size: 0.78rem; color: var(--accent); }
.dimensions-analysis { margin-bottom: 28px; }
.dimensions-title { font-size: 0.85rem; color: var(--text-dim); text-align: center; margin-bottom: 16px; letter-spacing: 0.05em; }
.dim-item { display: flex; align-items: center; gap: 12px; margin-bottom: 10px; }
.dim-label { width: 50px; font-size: 0.8rem; color: var(--text-dim); text-align: right; }
.dim-bar-wrap { flex: 1; height: 6px; background: var(--progress-bg); border-radius: 3px; position: relative; overflow: visible; }
.dim-bar { height: 100%; border-radius: 3px; transition: width 1s ease 0.3s; }
.dim-bar.left { background: linear-gradient(90deg, var(--accent), var(--accent-glow)); }
.dim-bar.right { background: linear-gradient(90deg, #6b5b8a, #8b7baa); }
.dim-indicator { position: absolute; top: -3px; width: 12px; height: 12px; border-radius: 50%; background: white; border: 2px solid var(--accent); transform: translateX(-50%); transition: left 1s ease 0.3s; }
.dim-label-right { width: 50px; font-size: 0.8rem; color: var(--text-dim); text-align: left; }
.match-reason { padding: 20px; background: var(--option-bg); border-radius: var(--radius); margin-bottom: 24px; }
.match-reason-title { font-size: 0.85rem; color: var(--accent); margin-bottom: 8px; letter-spacing: 0.05em; }
.match-reason-text { font-size: 0.9rem; color: var(--text); line-height: 1.8; }
.result-actions { display: flex; gap: 12px; }
.btn-retry { flex: 1; padding: 12px 0; background: var(--option-bg); color: var(--text); border: 1px solid var(--divider); border-radius: 8px; font-size: 0.9rem; cursor: pointer; transition: var(--transition); }
.btn-retry:hover { border-color: var(--accent); background: var(--option-hover); }
.btn-share { flex: 1; padding: 12px 0; background: linear-gradient(135deg, var(--accent), #b8943e); color: #1a1a2e; border: none; border-radius: 8px; font-size: 0.9rem; font-weight: 600; cursor: pointer; transition: var(--transition); }
.btn-share:hover { transform: translateY(-2px); box-shadow: 0 8px 24px rgba(201,169,110,0.3); }
@keyframes pulse { 0%,100%{transform:scale(1);}50%{transform:scale(1.05);} }
.result-portrait { animation: fadeInUp 0.6s ease, pulse 2s ease-in-out infinite 0.6s; }
@media (max-width: 480px) { .container { padding: 20px 12px; } .card { padding: 32px 20px; } .welcome-title { font-size: 1.6rem; } .quiz-question { font-size: 1.1rem; min-height: 60px; } .result-name { font-size: 1.6rem; } .result-actions { flex-direction: column; } }
</style>
</head>
<body>
<div class="container"><div class="card" id="app"></div></div>
<script>
// ============ 数据层 ============
const DIMENSIONS = [
  { id:'worldview', name:'世界观', left:{code:'R',label:'浪漫',emoji:'🌙',desc:'透过诗意的滤镜看世界'}, right:{code:'Z',label:'现实',emoji:'🌍',desc:'透过务实的透镜看世界'} },
  { id:'creation',  name:'创作观', left:{code:'G',label:'感性',emoji:'💜',desc:'相信情感的冲动'}, right:{code:'L',label:'理性',emoji:'🧠',desc:'相信逻辑的推演'} },
  { id:'aesthetic', name:'美学观', left:{code:'D',label:'古典',emoji:'🏛',desc:'偏爱经典永恒之美'}, right:{code:'F',label:'先锋',emoji:'🚀',desc:'偏爱前卫实验之新'} },
  { id:'expression',name:'表达观', left:{code:'N',label:'内省',emoji:'🔮',desc:'力量源于向内深潜'}, right:{code:'W',label:'外放',emoji:'📢',desc:'力量源于向外辐射'} },
];

const QUESTIONS = [
  { id:1, dim:'worldview', text:'你更被什么打动？', optA:'一轮意外的落日', emojiA:'🌅', optB:'一张精确的蓝图', emojiB:'📐' },
  { id:2, dim:'worldview', text:'旅行时你最享受？', optA:'漫无目的地迷路', emojiA:'🗺', optB:'按计划打卡每一个点', emojiB:'✅' },
  { id:3, dim:'worldview', text:'人生的意义在于？', optA:'创造美与诗意', emojiA:'✨', optB:'解决真实的问题', emojiB:'🔧' },
  { id:4, dim:'creation', text:'做重要决定时你靠？', optA:'直觉和心跳', emojiA:'💓', optB:'分析和数据', emojiB:'📊' },
  { id:5, dim:'creation', text:'朋友向你哭诉，你更倾向？', optA:'先共情，陪ta一起难过', emojiA:'🫂', optB:'先分析，帮ta理清思路', emojiB:'🧭' },
  { id:6, dim:'creation', text:'一部作品最吸引你的是？', optA:'让你哭或笑的情感力量', emojiA:'😭', optB:'让你思考的智性光芒', emojiB:'💡' },
  { id:7, dim:'aesthetic', text:'你对传统的态度？', optA:'传统是一座宝藏，值得传承', emojiA:'🏛', optB:'传统是用来打破的脚手架', emojiB:'🔨' },
  { id:8, dim:'aesthetic', text:'你偏爱的艺术风格？', optA:'文艺复兴的和谐典雅', emojiA:'🎨', optB:'当代艺术的抽象实验', emojiB:'🌀' },
  { id:9, dim:'aesthetic', text:'写作时你更看重？', optA:'遵循经典的章法与韵律', emojiA:'📜', optB:'创造全新的形式与语言', emojiB:'⚡' },
  { id:10, dim:'expression', text:'周末你更想？', optA:'独自读书或散步，与自己对话', emojiA:'📖', optB:'约朋友聚会，在人群中充电', emojiB:'🎉' },
  { id:11, dim:'expression', text:'你表达观点的方式？', optA:'深思熟虑后写成文字', emojiA:'✍️', optB:'即兴发言，情到浓时自然吐露', emojiB:'🎤' },
  { id:12, dim:'expression', text:'你从何处获得力量？', optA:'内心的宁静和自我觉察', emojiA:'🧘', optB:'外界的反馈和影响力', emojiB:'⚡' },
];

const LITERATI = {
  'RGDN':{name:'李清照',title:'千古第一才女',era:'宋代',works:'《声声慢》《如梦令》《一剪梅》',keywords:'婉约深情 · 古典诗心 · 词中藏泪',portrait:'🏮',quote:'寻寻觅觅，冷冷清清，凄凄惨惨戚戚。',matchReason:'你的灵魂中住着一个李清照——婉约细腻，情感深沉。你像她一样，在古典的形式中注入真挚的情感，以柔克刚，以情动人。你的内心世界丰富而敏感，善于在细微处发现美，在孤独中酝酿力量。'},
  'RGDW':{name:'李白',title:'诗仙',era:'唐代',works:'《将进酒》《蜀道难》《静夜思》',keywords:'豪放飘逸 · 浪漫至极 · 酒入诗肠',portrait:'🍶',quote:'天生我材必有用，千金散尽还复来。',matchReason:'你的灵魂中住着一个李白——浪漫不羁，豪气干云。你像他一样，用激情点燃世界，用想象力刺破现实的边界。你的生命力旺盛而张扬，不惧世俗眼光，不负少年意气。'},
  'RGFN':{name:'村上春树',title:'后现代孤独美学大师',era:'当代',works:'《挪威的森林》《1Q84》《海边的卡夫卡》',keywords:'孤独美学 · 超现实日常 · 爵士节奏',portrait:'🎵',quote:'不必太纠结于当下，也不必太忧虑未来。',matchReason:'你的灵魂中住着一个村上春树——在现实与超现实之间游走，在孤独中找寻美感。你像他一样，用冷静的语调讲述炽热的故事，在日常的表象下发掘奇幻的暗流。爵士乐般的节奏感和疏离感，正是你的精神底色。'},
  'RGFW':{name:'聂鲁达',title:'20世纪最伟大的爱情诗人',era:'20世纪',works:'《二十首情诗与绝望的歌》《漫歌》',keywords:'炽烈情诗 · 万物有灵 · 政治与爱',portrait:'🌹',quote:'我喜欢你是寂静的，仿佛你消失了一样。',matchReason:'你的灵魂中住着一个聂鲁达——用全部的生命力去爱，去歌唱，去战斗。你像他一样，将个人的情感与时代的脉搏融为一体，诗句如同火山喷发般炽热。在你的世界里，万物有灵，爱与革命同样重要。'},
  'RLDN':{name:'陶渊明',title:'田园诗人之祖',era:'东晋',works:'《归园田居》《桃花源记》《饮酒》',keywords:'隐逸哲思 · 田园理想 · 淡而有味',portrait:'🌿',quote:'采菊东篱下，悠然见南山。',matchReason:'你的灵魂中住着一个陶渊明——超然物外，回归本真。你像他一样，在喧嚣世界中保持内心的宁静，在简单中发现深意。不为五斗米折腰的傲骨，与田园中寻得的诗意，正是你的精神家园。'},
  'RLDW':{name:'苏轼',title:'千古通才',era:'宋代',works:'《赤壁赋》《定风波》《江城子》',keywords:'旷达通透 · 苦难中开花 · 千古通才',portrait:'🌊',quote:'回首向来萧瑟处，归去，也无风雨也无晴。',matchReason:'你的灵魂中住着一个苏轼——旷达乐观，百折不挠。你像他一样，拥有在逆境中谈笑风生的能力，将人生的苦酒酿成诗意的甘醴。你的智慧不只是书斋里的学问，更是历经风雨后的通透与豁达。'},
  'RLFN':{name:'博尔赫斯',title:'迷宫中的图书馆长',era:'20世纪',works:'《小径分岔的花园》《阿莱夫》《虚构集》',keywords:'迷宫哲思 · 无限图书馆 · 盲眼先知',portrait:'📚',quote:'天堂应该是图书馆的模样。',matchReason:'你的灵魂中住着一个博尔赫斯——在无限的迷宫中漫步，在镜子的反射中寻找真相。你像他一样，将哲学思考融入精妙的叙事，在有限中触摸无限。时间和空间的悖论对你而言不是困惑，而是美的源头。'},
  'RLFW':{name:'王小波',title:'特立独行的思想者',era:'当代',works:'《黄金时代》《沉默的大多数》《红拂夜奔》',keywords:'黑色幽默 · 理性浪漫 · 特立独行',portrait:'🐷',quote:'一个人只拥有此生此世是不够的，他还应该拥有诗意的世界。',matchReason:'你的灵魂中住着一个王小波——用幽默消解荒诞，用理性守护浪漫。你像他一样，在沉默的大多数中保持独立思考，用戏谑的口吻说出最严肃的真相。你的特立独行不是叛逆，而是对真实和有趣的执着。'},
  'ZGDN':{name:'曹雪芹',title:'中国文学之巅峰',era:'清代',works:'《红楼梦》',keywords:'繁华落尽 · 人性深渊 · 以情悟道',portrait:'🏯',quote:'满纸荒唐言，一把辛酸泪。都云作者痴，谁解其中味？',matchReason:'你的灵魂中住着一个曹雪芹——看尽繁华，洞穿人性。你像他一样，对人间悲欢有着深邃的体察，在极致的繁华中看见虚无，在细微处捕捉人性的光芒与幽暗。你的感性不是浅薄的伤感，而是经历过沧桑后的透彻与悲悯。'},
  'ZGDW':{name:'杜甫',title:'诗圣',era:'唐代',works:'《春望》《茅屋为秋风所破歌》《登高》',keywords:'沉郁顿挫 · 家国情怀 · 诗史',portrait:'⛰',quote:'安得广厦千万间，大庇天下寒士俱欢颜。',matchReason:'你的灵魂中住着一个杜甫——心怀天下，沉郁深厚。你像他一样，将个人的命运与时代的苦难紧密相连，用文字记录真实，用诗句承载良知。你的现实主义不是冷漠的旁观，而是饱含深情的担当与悲悯。'},
  'ZGFN':{name:'张爱玲',title:'苍凉美学的缔造者',era:'20世纪',works:'《倾城之恋》《金锁记》《半生缘》',keywords:'苍凉美学 · 人性解剖 · 都市寓言',portrait:'🪷',quote:'生命是一袭华美的袍，爬满了虱子。',matchReason:'你的灵魂中住着一个张爱玲——冷眼看世情，笔下见苍凉。你像她一样，在华丽的表象下看见人性的褶皱，在爱情的故事中解剖欲望与算计。你的犀利不是刻薄，而是对真实毫不留情的洞察，以及对美与荒凉的深刻共鸣。'},
  'ZGFW':{name:'鲁迅',title:'民族魂',era:'20世纪',works:'《狂人日记》《阿Q正传》《呐喊》',keywords:'冷峻深刻 · 国民性批判 · 铁屋呐喊',portrait:'✒️',quote:'真的猛士，敢于直面惨淡的人生，敢于正视淋漓的鲜血。',matchReason:'你的灵魂中住着一个鲁迅——冷峻而热烈，绝望中战斗。你像他一样，用锋利的思想解剖社会和人性的病灶，用文字作为匕首和投枪。你的愤怒不是戾气，而是对黑暗的不容忍；你的冷峻不是冷漠，而是最深沉的关怀。'},
  'ZLDN':{name:'司马迁',title:'史家之绝唱',era:'汉代',works:'《史记》',keywords:'忍辱负重 · 实录精神 · 史家绝唱',portrait:'📜',quote:'人固有一死，或重于泰山，或轻于鸿毛。',matchReason:'你的灵魂中住着一个司马迁——在至暗时刻以笔为剑，以史为镜。你像他一样，拥有超越个人苦难的宏大视野，将生命的意义锚定在更高的价值之上。你的坚韧不是麻木，而是清醒地选择负重前行，用理性与意志照亮历史的天空。'},
  'ZLDW':{name:'蒙田',title:'随笔之父',era:'16世纪',works:'《随笔集》',keywords:'怀疑主义 · 自我探索 · 温和智慧',portrait:'🕯',quote:'我知道什么？',matchReason:'你的灵魂中住着一个蒙田——温和而深刻，怀疑而从容。你像他一样，对人类的一切保持善意的好奇，对教条保持优雅的怀疑。你的智慧不是锋芒毕露的辩论，而是与自我持续对话的深度。在不确定的世界中，你以探索本身为乐。'},
  'ZLFN':{name:'钱锺书',title:'学贯中西的文化昆仑',era:'20世纪',works:'《围城》《管锥编》《谈艺录》',keywords:'学贯中西 · 机智刻薄 · 围城内外',portrait:'📖',quote:'婚姻是一座围城，城外的人想进去，城里的人想出来。',matchReason:'你的灵魂中住着一个钱锺书——博学而机智，洞明而尖刻。你像他一样，在中西文化的交汇处游刃有余，用学识武装幽默，用讽刺揭示真相。你的理性不是枯燥的学究气，而是洞察世事后的从容调侃与通透智慧。'},
  'ZLFW':{name:'乔治·奥威尔',title:'反乌托邦先知',era:'20世纪',works:'《1984》《动物农场》《向加泰罗尼亚致敬》',keywords:'反极权 · 语言即思想 · 冷峻预言',portrait:'👁',quote:'在一个普遍欺骗的时代，说真话就是一种革命行为。',matchReason:'你的灵魂中住着一个乔治·奥威尔——以冷峻的目光审视权力，以朴素的语言揭示真相。你像他一样，对谎言和压迫有着本能的警觉，对自由和真实有着执着的捍卫。你的政治不是口号，而是对普通人的深切关怀和对极权的清醒批判。'},
};

// ============ 状态管理 ============
const state = {
  page: 'welcome',
  currentQuestion: 0,
  answers: {},
  scores: { worldview:0, creation:0, aesthetic:0, expression:0 },
};

function recordAnswer(qid, choice) {
  state.answers[qid] = choice;
  const q = QUESTIONS.find(x => x.id === qid);
  state.scores[q.dim] += (choice === 'A' ? 1 : -1);
}

function getDimensionResult(dimId) {
  const score = state.scores[dimId];
  const dim = DIMENSIONS.find(d => d.id === dimId);
  return score >= 0 ? { side:'left', ...dim.left } : { side:'right', ...dim.right };
}

function getTypeCode() {
  return DIMENSIONS.map(d => getDimensionResult(d.id).code).join('');
}

function getMatch() {
  return LITERATI[getTypeCode()] || Object.values(LITERATI)[0];
}

function getDimensionScores() {
  return DIMENSIONS.map(dim => {
    const score = state.scores[dim.id];
    const pct = Math.round((Math.abs(score) / 3) * 100);
    const r = getDimensionResult(dim.id);
    return { ...dim, score, percentage:pct, resultLabel:r.label, resultEmoji:r.emoji };
  });
}

// ============ 页面渲染 ============
function renderWelcome() {
  document.getElementById('app').innerHTML = `
    <h1 class="welcome-title">寻隐者</h1>
    <p class="welcome-subtitle">SOUL LITERATI · 灵魂文学家匹配测试</p>
    <div class="quote-divider"></div>
    <p class="welcome-desc">
      在文学的星空中，<span>每一位伟大的作家都是一颗独特的星球</span>。
      <br>有些炽烈如太阳，有些清冷如月亮，有些深邃如黑洞。
      <br><br>
      通过 <span>12 道灵魂拷问</span>，我们将为你在这片星空中，
      <br>找到那颗<span>与你共振频率最相近的文学之星</span>。
    </p>
    <button class="btn-start" onclick="startQuiz()">开始寻隐</button>
    <p class="welcome-footer">约需 3-5 分钟 · 共 12 题</p>
  `;
}

function startQuiz() {
  state.page = 'quiz';
  state.currentQuestion = 0;
  state.answers = {};
  state.scores = { worldview:0, creation:0, aesthetic:0, expression:0 };
  renderQuiz();
}

function renderQuiz() {
  const q = QUESTIONS[state.currentQuestion];
  const pct = (state.currentQuestion / QUESTIONS.length) * 100;
  document.getElementById('app').innerHTML = `
    <div class="quiz-header fade-in">
      <span class="quiz-counter">第 ${q.id} / ${QUESTIONS.length} 题</span>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
    </div>
    <div class="quiz-question fade-in">${q.text}</div>
    <div class="quiz-options fade-in">
      <button class="option-btn" onclick="handleAnswer(${q.id},'A')"><span class="emoji">${q.emojiA}</span><span class="text">${q.optA}</span></button>
      <button class="option-btn" onclick="handleAnswer(${q.id},'B')"><span class="emoji">${q.emojiB}</span><span class="text">${q.optB}</span></button>
    </div>
  `;
}

function handleAnswer(qid, choice) {
  recordAnswer(qid, choice);
  if (state.currentQuestion < QUESTIONS.length - 1) {
    state.currentQuestion++;
    setTimeout(renderQuiz, 150);
  } else {
    state.page = 'result';
    setTimeout(renderResult, 400);
  }
}

function renderResult() {
  const m = getMatch();
  const ds = getDimensionScores();
  document.getElementById('app').innerHTML = `
    <div class="result-header fade-in">
      <div class="result-badge">YOUR SOUL MATCH</div>
      <div class="result-portrait">${m.portrait}</div>
      <div class="result-name">${m.name}</div>
      <div class="result-title">${m.title}</div>
      <div class="result-era">${m.era}</div>
    </div>
    <div class="result-quote fade-in">「${m.quote}」</div>
    <div class="result-works fade-in">📖 代表作：${m.works}</div>
    <div class="result-keywords fade-in">
      ${m.keywords.split('·').map(k => `<span class="keyword-tag">${k.trim()}</span>`).join('')}
    </div>
    <div class="dimensions-analysis fade-in">
      <div class="dimensions-title">🧬 你的文学灵魂维度</div>
      ${ds.map(d => {
        const abs = Math.abs(d.score);
        const indicatorPos = d.score >= 0 ? (50 - abs*16.7) : (50 + abs*16.7);
        const leftW = d.score >= 0 ? Math.max(abs*33.3, 2) : 0;
        const rightW = d.score < 0 ? Math.max(abs*33.3, 2) : 0;
        return `<div class="dim-item">
          <div class="dim-label">${d.left.emoji} ${d.left.label}</div>
          <div class="dim-bar-wrap">
            <div class="dim-bar left" style="width:${leftW}%"></div>
            <div class="dim-indicator" style="left:${indicatorPos}%"></div>
          </div>
          <div class="dim-label-right">${d.right.label} ${d.right.emoji}</div>
        </div>`;
      }).join('')}
    </div>
    <div class="match-reason fade-in">
      <div class="match-reason-title">💫 为什么是 ${m.name}？</div>
      <div class="match-reason-text">${m.matchReason}</div>
    </div>
    <div class="result-actions fade-in">
      <button class="btn-retry" onclick="startQuiz()">🔄 再做一次</button>
      <button class="btn-share" onclick="shareResult()">📤 分享结果</button>
    </div>
  `;
}

function shareResult() {
  const m = getMatch();
  const code = getTypeCode();
  const text = `我在「寻隐者」文学灵魂测试中匹配到了 ${m.name}（${m.title}）！\n"${m.quote}"\n我的灵魂类型码：${code}\n来测测你的文学之魂 👉`;
  if (navigator.share) {
    navigator.share({ title:'寻隐者 · 灵魂文学家匹配', text });
  } else {
    navigator.clipboard.writeText(text).then(() => alert('结果已复制到剪贴板，粘贴分享给朋友吧 ✨'));
  }
}

// ============ 初始化 ============
renderWelcome();
</script>
</body>
</html>
HEREDOC_EOF
```

**Step 2: 验证文件**

```bash
wc -c /project/soul-lit-match/index.html
# 预期：> 8000 bytes
```

**Step 3: Commit**

```bash
cd /project/soul-lit-match && git add index.html && git commit -m "feat: complete single-page soul-literati matching test app"
```

---

### Task 2: 创建 README

**Objective:** 项目说明和部署指南

**Files:**
- Create: `/project/soul-lit-match/README.md`

**Step 1: 写 README**

```markdown
# 寻隐者 — 灵魂文学家匹配测试

> 在文学的星空中，找到那颗与你灵魂共振的星球。

一个类似 MBTI 的人格测试 Web 应用，通过 12 道题定位用户在 4 个文学维度上的倾向，从 16 位伟大文学家中匹配出最灵魂契合的一位。

## 维度设计

| 维度 | 左极 | 右极 |
|------|------|------|
| 世界观 | 🌙 浪漫 | 🌍 现实 |
| 创作观 | 💜 感性 | 🧠 理性 |
| 美学观 | 🏛 古典 | 🚀 先锋 |
| 表达观 | 🔮 内省 | 📢 外放 |

## 16 位文学家

李清照、李白、村上春树、聂鲁达、陶渊明、苏轼、博尔赫斯、王小波、曹雪芹、杜甫、张爱玲、鲁迅、司马迁、蒙田、钱锺书、乔治·奥威尔

## 部署

纯静态文件，零依赖：

```bash
# 方式1：直接浏览器打开
open index.html

# 方式2：本地服务器
python3 -m http.server 8080

# 方式3：部署到 GitHub Pages / Vercel / Netlify
# 直接上传 index.html 即可
```

## 技术栈

- HTML5 + CSS3 + Vanilla JS (ES6+)
- 无框架，无构建工具，无后端
- 响应式设计，移动端友好
```

**Step 2: Commit**

```bash
cd /project/soul-lit-match && git add README.md && git commit -m "docs: README with project description and deployment guide"
```

---

## 执行策略

计划完成后，使用 Claude Code（print mode）逐个任务实施。每个任务调用一次 `claude -p`。

**执行命令示例：**
```bash
claude -p "Implement Task 1 from /project/soul-lit-match/docs/plans/2026-05-10-soul-lit-match.md" \
  --allowedTools "Read,Write,Bash" \
  --max-turns 5 \
  --workdir /project/soul-lit-match
```
