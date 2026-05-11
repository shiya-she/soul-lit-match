'use client'

import { Button } from '@/components/ui/button'
import { Sparkles, Moon, Sun } from 'lucide-react'

interface Props { onStart: () => void }

export function WelcomeView({ onStart }: Props) {
  return (
    <div className="text-center">
      <div className="mb-8">
        <h1 className="font-serif text-4xl sm:text-5xl text-rose-200 tracking-[0.15em] mb-3 animate-fade-in">
          寻隐者
        </h1>
        <p className="text-muted-foreground/60 text-xs tracking-[0.3em] mb-8 animate-fade-in animate-stagger-2">
          SOUL LITERATI MATCH
        </p>
        <div className="flex items-center justify-center gap-4 mb-6 animate-fade-in animate-stagger-2">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent max-w-16" />
          <Moon className="w-4 h-4 text-muted-foreground/50" />
          <span className="text-muted-foreground text-xs tracking-[0.15em]">灵魂文学家匹配测试</span>
          <Sun className="w-4 h-4 text-muted-foreground/50" />
          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent max-w-16" />
        </div>
      </div>

      <p className="text-foreground/80 text-sm leading-relaxed mb-10 max-w-sm mx-auto animate-fade-in animate-stagger-3">
        在文学的星空中，<span className="text-primary font-medium">每一位伟大的作家都是一颗独特的星球</span>。
        <br />有些炽烈如太阳，有些清冷如月亮，有些深邃如黑洞。
        <br /><br />
        通过 <span className="text-primary font-medium">12 道灵魂拷问</span>，我们将为你在这片星空中，
        <br />找到那颗<span className="text-primary font-medium">与你共振频率最相近的文学之星</span>。
      </p>

      <div className="animate-fade-in animate-stagger-4">
        <Button size="xl" onClick={onStart} className="tracking-[0.1em] shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 active:scale-95 transition-all duration-200">
          <Sparkles className="w-4 h-4 mr-2" />
          开始寻隐
        </Button>
        <p className="text-muted-foreground/60 text-xs mt-6 tracking-wider">约需 3–5 分钟 · 共 12 题</p>
      </div>
    </div>
  )
}
