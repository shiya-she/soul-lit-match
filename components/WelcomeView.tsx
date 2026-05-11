'use client'

import { Button } from '@/components/ui/button'
import { Sparkles } from 'lucide-react'

interface Props { onStart: () => void }

export function WelcomeView({ onStart }: Props) {
  return (
    <div className="text-center">
      <h1 className="font-serif text-3xl sm:text-4xl text-rose-200 tracking-wider mb-2">
        寻隐者
      </h1>
      <p className="text-muted-foreground text-sm tracking-[0.2em] mb-8">
        SOUL LITERATI · 灵魂文学家匹配测试
      </p>
      <div className="w-10 h-px bg-primary/50 mx-auto my-5" />
      <p className="text-foreground/90 text-sm leading-relaxed mb-9">
        在文学的星空中，<span className="text-primary">每一位伟大的作家都是一颗独特的星球</span>。
        <br />有些炽烈如太阳，有些清冷如月亮，有些深邃如黑洞。
        <br /><br />
        通过 <span className="text-primary">12 道灵魂拷问</span>，我们将为你在这片星空中，
        <br />找到那颗<span className="text-primary">与你共振频率最相近的文学之星</span>。
      </p>
      <Button size="xl" onClick={onStart} className="tracking-wider">
        <Sparkles className="w-4 h-4 mr-2" />
        开始寻隐
      </Button>
      <p className="text-muted-foreground text-xs mt-6">约需 3-5 分钟 · 共 12 题</p>
    </div>
  )
}
