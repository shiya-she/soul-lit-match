'use client'

import { Progress } from '@/components/ui/progress'

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
      <div className="flex items-center gap-4 mb-6 animate-fade-in-up" key={`h-${question.id}`}>
        <span className="text-muted-foreground text-sm whitespace-nowrap">
          第 {question.id} / {total} 题
        </span>
        <Progress value={pct} className="flex-1" />
      </div>

      <p className="font-serif text-xl text-center mb-9 leading-relaxed min-h-[80px] flex items-center justify-center animate-fade-in-up" key={`q-${question.id}`}>
        {question.text}
      </p>

      <div className="flex flex-col gap-3 animate-fade-in-up" key={`o-${question.id}`}>
        <button
          onClick={() => onAnswer(question.id, 'A')}
          className="flex items-center gap-4 p-5 bg-secondary hover:bg-secondary/80 border border-border hover:border-primary/50 rounded-lg text-left transition-all hover:translate-x-1"
        >
          <span className="text-2xl flex-shrink-0">{question.emojiA}</span>
          <span className="text-sm">{question.optA}</span>
        </button>
        <button
          onClick={() => onAnswer(question.id, 'B')}
          className="flex items-center gap-4 p-5 bg-secondary hover:bg-secondary/80 border border-border hover:border-primary/50 rounded-lg text-left transition-all hover:translate-x-1"
        >
          <span className="text-2xl flex-shrink-0">{question.emojiB}</span>
          <span className="text-sm">{question.optB}</span>
        </button>
      </div>
    </div>
  )
}
