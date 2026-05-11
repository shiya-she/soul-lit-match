'use client'

import { Progress } from '@/components/ui/progress'
import { ArrowRight } from 'lucide-react'

interface Question {
  id: number; text: string; optA: string; emojiA: string; optB: string; emojiB: string
}

interface Props {
  question: Question
  current: number
  total: number
  onAnswer: (qid: number, choice: 'A' | 'B') => void
}

export function QuizView({ question, current, total, onAnswer }: Props) {
  const pct = (current / total) * 100

  return (
    <div>
      <div className="flex items-center gap-4 mb-8">
        <span className="text-muted-foreground text-sm whitespace-nowrap tabular-nums">
          第 {question.id} / {total} 题
        </span>
        <Progress value={pct} className="flex-1 h-1.5" />
      </div>

      <p className="font-serif text-xl text-center mb-10 leading-relaxed min-h-[72px] flex items-center justify-center animate-scale-in" key={`q-${question.id}`}>
        {question.text}
      </p>

      <div className="flex flex-col gap-3" key={`o-${question.id}`}>
        <button
          onClick={() => onAnswer(question.id, 'A')}
          className="group flex items-center gap-4 p-5 bg-secondary/80 hover:bg-secondary border border-border hover:border-primary/40 rounded-xl text-left transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span className="text-2xl flex-shrink-0 transition-transform duration-200 group-hover:scale-110">
            {question.emojiA}
          </span>
          <span className="text-sm flex-1">{question.optA}</span>
          <ArrowRight className="w-4 h-4 text-muted-foreground/30 opacity-0 group-hover:opacity-100 group-hover:text-primary/60 transition-all duration-200 -translate-x-2 group-hover:translate-x-0" />
        </button>
        <button
          onClick={() => onAnswer(question.id, 'B')}
          className="group flex items-center gap-4 p-5 bg-secondary/80 hover:bg-secondary border border-border hover:border-primary/40 rounded-xl text-left transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <span className="text-2xl flex-shrink-0 transition-transform duration-200 group-hover:scale-110">
            {question.emojiB}
          </span>
          <span className="text-sm flex-1">{question.optB}</span>
          <ArrowRight className="w-4 h-4 text-muted-foreground/30 opacity-0 group-hover:opacity-100 group-hover:text-primary/60 transition-all duration-200 -translate-x-2 group-hover:translate-x-0" />
        </button>
      </div>
    </div>
  )
}
