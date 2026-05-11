'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { DimBar } from '@/components/DimBar'
import { Share2, RotateCcw, BookOpen, Dna, Sparkles, Check } from 'lucide-react'

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
  const [shared, setShared] = useState(false)

  const share = async () => {
    const text = `我在「寻隐者」文学灵魂测试中匹配到了 ${m.name}（${m.title}）！\n"${m.quote}"\n我的灵魂类型码：${result.typeCode}\n来测测你的文学之魂`
    if (navigator.share) {
      await navigator.share({ title: '寻隐者 · 灵魂文学家匹配', text })
      setShared(true)
    } else if (navigator.clipboard) {
      await navigator.clipboard.writeText(text)
      setShared(true)
      setTimeout(() => setShared(false), 2000)
    }
  }

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-8">
        <Badge variant="default" className="mb-4 animate-fade-in tracking-wider">YOUR SOUL MATCH</Badge>
        <div className="text-6xl mb-4 animate-scale-in" key={m.portrait}>
          {m.portrait}
        </div>
        <h2 className="font-serif text-3xl text-rose-200 mb-1.5 animate-fade-in animate-stagger-2">{m.name}</h2>
        <p className="text-muted-foreground text-sm mb-1 animate-fade-in animate-stagger-3">{m.title}</p>
        <p className="text-muted-foreground/60 text-xs animate-fade-in animate-stagger-3">{m.era}</p>
      </div>

      {/* Quote */}
      <div className="relative bg-secondary/60 rounded-xl border-l-[3px] border-primary px-6 py-5 mb-6 text-sm italic text-center animate-fade-in animate-stagger-4">
        <span className="absolute -top-px left-0 w-full h-px bg-gradient-to-r from-primary/40 via-primary/10 to-transparent rounded-t-xl" />
        「{m.quote}」
      </div>

      {/* Works */}
      <div className="flex items-center justify-center gap-2 text-muted-foreground text-xs mb-7 animate-fade-in animate-stagger-4">
        <BookOpen className="w-3.5 h-3.5 text-primary/60" />
        <span>代表作：{m.works}</span>
      </div>

      {/* Keywords */}
      <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fade-in animate-stagger-5">
        {kws.map((kw, i) => (
          <Badge key={i} variant="default" className="transition-all hover:scale-105 hover:shadow-sm hover:shadow-primary/20">{kw}</Badge>
        ))}
      </div>

      {/* Dimensions */}
      <div className="mb-8">
        <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground mb-5 tracking-wider animate-fade-in animate-stagger-5">
          <Dna className="w-3.5 h-3.5 text-primary/60" />
          <span>你的文学灵魂维度</span>
        </div>
        {result.dimensions.map((dim, i) => (
          <div key={dim.name} className={`animate-fade-in animate-stagger-${6 + i}`}>
            <DimBar dim={dim} />
          </div>
        ))}
      </div>

      {/* Match reason */}
      <div className="bg-secondary/60 rounded-xl p-5 mb-7 animate-fade-in animate-stagger-7">
        <div className="flex items-center gap-2 text-sm text-primary mb-3 tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>为什么是 {m.name}？</span>
        </div>
        <p className="text-sm text-foreground/85 leading-relaxed">{m.matchReason}</p>
      </div>

      {/* Actions */}
      <div className="flex gap-3 animate-fade-in animate-stagger-8">
        <Button variant="outline" className="flex-1" onClick={onRetry}>
          <RotateCcw className="w-4 h-4 mr-2" />
          再做一次
        </Button>
        <Button className="flex-1" onClick={share}>
          {shared ? (
            <Check className="w-4 h-4 mr-2" />
          ) : (
            <Share2 className="w-4 h-4 mr-2" />
          )}
          {shared ? '已复制' : '分享结果'}
        </Button>
      </div>
    </div>
  )
}
