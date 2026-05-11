'use client'

import { useState, useEffect, useCallback } from 'react'
import { Card } from '@/components/ui/card'
import { WelcomeView } from '@/components/WelcomeView'
import { QuizView } from '@/components/QuizView'
import { ResultView } from '@/components/ResultView'
import { Loader2 } from 'lucide-react'

type Page = 'welcome' | 'quiz' | 'result'

interface Question {
  id: number; dim: string; text: string
  optA: string; emojiA: string; optB: string; emojiB: string
}

interface Dimension {
  id: string; name: string
  left: { code: string; label: string; emoji: string }
  right: { code: string; label: string; emoji: string }
}

interface DimResult {
  name: string; score: number
  left: { code: string; label: string; emoji: string }
  right: { code: string; label: string; emoji: string }
  resultLabel: string; resultEmoji: string
}

interface Writer {
  name: string; title: string; era: string
  works: string; keywords: string; portrait: string
  quote: string; matchReason: string
}

interface MatchResult {
  typeCode: string; writer: Writer; dimensions: DimResult[]
}

export default function Home() {
  const [page, setPage] = useState<Page>('welcome')
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentIdx, setCurrentIdx] = useState(0)
  const [answers, setAnswers] = useState<Record<number, 'A' | 'B'>>({})
  const [result, setResult] = useState<MatchResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [mounted, setMounted] = useState(false)

  useEffect(() => { setMounted(true) }, [])

  useEffect(() => {
    fetch('/api/questions')
      .then(r => r.json())
      .then(d => setQuestions(d.questions))
      .catch(() => setError('无法加载测试数据，请刷新页面重试'))
  }, [])

  const startQuiz = useCallback(() => {
    setAnswers({})
    setCurrentIdx(0)
    setPage('quiz')
  }, [])

  const answer = useCallback((qid: number, choice: 'A' | 'B') => {
    const next = { ...answers, [qid]: choice }
    setAnswers(next)
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(i => i + 1)
    } else {
      setPage('result')
      setLoading(true)
      fetch('/api/match', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers: next }),
      })
        .then(async r => {
          const d = await r.json()
          if (!r.ok) throw new Error(d.error)
          setResult(d)
          setLoading(false)
        })
        .catch(e => {
          setError(e.message)
          setLoading(false)
        })
    }
  }, [answers, currentIdx, questions.length])

  const reset = useCallback(() => {
    setPage('welcome')
    setResult(null)
    setError('')
  }, [])

  if (!mounted) return null

  return (
    <div className="w-full max-w-xl px-4 sm:px-6 py-8 sm:py-12">
      <Card className="p-6 sm:p-10 lg:p-12 relative overflow-hidden border-border/60 shadow-2xl shadow-primary/5">
        {/* Subtle top-edge glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

        {page === 'welcome' && <WelcomeView onStart={startQuiz} />}

        {page === 'quiz' && questions.length > 0 && (
          <QuizView question={questions[currentIdx]} current={currentIdx} total={questions.length} onAnswer={answer} />
        )}

        {page === 'result' && loading && (
          <div className="flex flex-col items-center gap-5 py-16">
            <div className="relative">
              <Loader2 className="w-10 h-10 animate-spin text-primary" />
              <div className="absolute inset-0 rounded-full blur-xl bg-primary/20 animate-pulse" />
            </div>
            <p className="text-muted-foreground text-sm tracking-wider">正在寻找你的灵魂文学家...</p>
          </div>
        )}

        {page === 'result' && error && (
          <div className="text-center py-16">
            <p className="text-destructive mb-6">{error}</p>
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 underline underline-offset-4 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md px-2 py-1"
            >
              返回重试
            </button>
          </div>
        )}

        {page === 'result' && result && !loading && (
          <ResultView result={result} onRetry={reset} />
        )}
      </Card>
    </div>
  )
}
