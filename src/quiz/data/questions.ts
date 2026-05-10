export interface Question {
  id: number
  dim: string
  text: string
  optA: string
  emojiA: string
  optB: string
  emojiB: string
}

export const questions: Question[] = [
  { id: 1, dim: 'worldview', text: '你更被什么打动？', optA: '一轮意外的落日', emojiA: '🌅', optB: '一张精确的蓝图', emojiB: '📐' },
  { id: 2, dim: 'worldview', text: '旅行时你最享受？', optA: '漫无目的地迷路', emojiA: '🗺', optB: '按计划打卡每一个点', emojiB: '✅' },
  { id: 3, dim: 'worldview', text: '人生的意义在于？', optA: '创造美与诗意', emojiA: '✨', optB: '解决真实的问题', emojiB: '🔧' },
  { id: 4, dim: 'creation', text: '做重要决定时你靠？', optA: '直觉和心跳', emojiA: '💓', optB: '分析和数据', emojiB: '📊' },
  { id: 5, dim: 'creation', text: '朋友向你哭诉，你更倾向？', optA: '先共情，陪ta一起难过', emojiA: '🫂', optB: '先分析，帮ta理清思路', emojiB: '🧭' },
  { id: 6, dim: 'creation', text: '一部作品最吸引你的是？', optA: '让你哭或笑的情感力量', emojiA: '😭', optB: '让你思考的智性光芒', emojiB: '💡' },
  { id: 7, dim: 'aesthetic', text: '你对传统的态度？', optA: '传统是一座宝藏，值得传承', emojiA: '🏛', optB: '传统是用来打破的脚手架', emojiB: '🔨' },
  { id: 8, dim: 'aesthetic', text: '你偏爱的艺术风格？', optA: '文艺复兴的和谐典雅', emojiA: '🎨', optB: '当代艺术的抽象实验', emojiB: '🌀' },
  { id: 9, dim: 'aesthetic', text: '写作时你更看重？', optA: '遵循经典的章法与韵律', emojiA: '📜', optB: '创造全新的形式与语言', emojiB: '⚡' },
  { id: 10, dim: 'expression', text: '周末你更想？', optA: '独自读书或散步，与自己对话', emojiA: '📖', optB: '约朋友聚会，在人群中充电', emojiB: '🎉' },
  { id: 11, dim: 'expression', text: '你表达观点的方式？', optA: '深思熟虑后写成文字', emojiA: '✍️', optB: '即兴发言，情到浓时自然吐露', emojiB: '🎤' },
  { id: 12, dim: 'expression', text: '你从何处获得力量？', optA: '内心的宁静和自我觉察', emojiA: '🧘', optB: '外界的反馈和影响力', emojiB: '⚡' },
]
