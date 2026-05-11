'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DimBar } from '@/components/DimBar'
import { Share2, RotateCcw } from 'lucide-react'

interface Writer {
  name: string; title: string; era: string
  works: string; keywords: string; portrait: string
  quote: string; matchReason: string
}

interface DimResult {
  name: string; score: number
  left: { code: string; label: string; emoji: string }
  right: { code: string; label: string; emoji: string }
  resultLabel: string; resultEmoji: string
}

interface Props {
  result: { typeCode: string; writer: Writer; dimensions: DimResult[] }
  onRetry: () => void
}

export function ResultView({ result, onRetry }: Props) {
  const m = result.writer
  const kws = m.keywords.split('·').map(k => k.trim())

  const share = async () => {
    const text = `我在「寻隐者」文学灵魂测试中匹配到了 ${m.name}（${m.title}）！\n"${m.quote}"\n我的灵魂类型码：${result.typeCode}\n来测测你的文学之魂 👉`
    if (navigator.share) {
      await navigator.share({ title: '寻隐者 · 灵魂文学家匹配', text })
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(text)
      alert('结果已复制到剪贴板，粘贴分享给朋友吧 ✨')
    } else {
      alert(text)
    }
  }

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-7 animate-fade-in-up">
        <Badge variant="default" className="mb-3">YOUR SOUL MATCH</Badge>
        <div className="text-6xl mb-3 animate-fade-in-up" style={{ animation: 'fade-in-up 0.6s ease, pulse 2s ease-in-out infinite 0.6s' }}>
          {m.portrait}
        </div>
        <h2 className="font-serif text-3xl text-[#e8d5a3] mb-1">{m.name}</h2>
        <p className="text-muted-foreground text-sm mb-0.5">{m.title}</p>
        <p className="text-muted-foreground text-xs">{m.era}</p>
      </div>

      {/* Quote */}
      <div className="bg-secondary rounded-lg border-l-[3px] border-primary px-5 py-4 mb-5 text-sm italic text-center animate-fade-in-up">
        「{m.quote}」
      </div>

      {/* Works */}
      <p className="text-center text-muted-foreground text-xs mb-6 animate-fade-in-up">
        📖 代表作：{m.works}
      </p>

      {/* Keywords */}
      <div className="flex flex-wrap justify-center gap-2 mb-7 animate-fade-in-up">
        {kws.map((kw, i) => (
          <Badge key={i} variant="default">{kw}</Badge>
        ))}
      </div>

      {/* Dimensions */}
      <div className="mb-7 animate-fade-in-up">
        <p className="text-xs text-muted-foreground text-center mb-4 tracking-wider">
          🧬 你的文学灵魂维度
        </p>
        {result.dimensions.map((dim) => (
          <DimBar key={dim.name} dim={dim} />
        ))}
      </div>

      {/* Match reason */}
      <div className="bg-secondary rounded-lg p-5 mb-6 animate-fade-in-up">
        <p className="text-sm text-primary mb-2 tracking-wider">💫 为什么是 {m.name}？</p>
        <p className="text-sm text-foreground/90 leading-relaxed">{m.matchReason}</p>
      </div>

      {/* Actions */}
      <div className="flex gap-3 animate-fade-in-up">
        <Button variant="outline" className="flex-1" onClick={onRetry}>
          <RotateCcw className="w-4 h-4 mr-2" />
          再做一次
        </Button>
        <Button className="flex-1" onClick={share}>
          <Share2 className="w-4 h-4 mr-2" />
          分享结果
        </Button>
      </div>
    </div>
  )
}
