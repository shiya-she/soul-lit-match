export interface Dimension {
  id: string
  name: string
  left: { code: string; label: string; emoji: string }
  right: { code: string; label: string; emoji: string }
}

export const dimensions: Dimension[] = [
  { id: 'worldview', name: '世界观', left: { code: 'R', label: '浪漫', emoji: '🌙' }, right: { code: 'Z', label: '现实', emoji: '🌍' } },
  { id: 'creation', name: '创作观', left: { code: 'G', label: '感性', emoji: '💜' }, right: { code: 'L', label: '理性', emoji: '🧠' } },
  { id: 'aesthetic', name: '美学观', left: { code: 'D', label: '古典', emoji: '🏛' }, right: { code: 'F', label: '先锋', emoji: '🚀' } },
  { id: 'expression', name: '表达观', left: { code: 'N', label: '内省', emoji: '🔮' }, right: { code: 'W', label: '外放', emoji: '📢' } },
]
