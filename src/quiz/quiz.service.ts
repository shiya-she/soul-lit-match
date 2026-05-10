import { Injectable } from '@nestjs/common'
import { SupabaseService } from '../supabase/supabase.service'
import { questions } from './data/questions'
import { dimensions } from './data/dimensions'

@Injectable()
export class QuizService {
  constructor(private readonly supabase: SupabaseService) {}

  getQuestions() {
    return { questions, dimensions }
  }

  async computeMatch(answers: Record<number, 'A' | 'B'>) {
    // Scoring
    const scores: Record<string, number> = {}
    for (const dim of dimensions) {
      scores[dim.id] = 0
    }
    for (const q of questions) {
      const choice = answers[q.id]
      if (choice === 'A' || choice === 'B') {
        scores[q.dim] += choice === 'A' ? 1 : -1
      }
    }

    // Type code
    let typeCode = ''
    const dimResults = dimensions.map((dim) => {
      const score = scores[dim.id]
      const result = score >= 0 ? dim.left : dim.right
      typeCode += result.code
      return {
        name: dim.name,
        score,
        left: dim.left,
        right: dim.right,
        resultLabel: result.label,
        resultEmoji: result.emoji,
      }
    })

    // Query Supabase
    const client = this.supabase.getClient()
    const { data: writer, error } = await client
      .from('writers')
      .select('*')
      .eq('type_code', typeCode)
      .single()

    if (error || !writer) {
      throw new Error(`未找到匹配的文学家 (${typeCode}): ${error?.message || '无数据'}`)
    }

    return {
      typeCode,
      writer: {
        name: writer.name,
        title: writer.title,
        era: writer.era,
        works: writer.works,
        keywords: writer.keywords,
        portrait: writer.portrait,
        quote: writer.quote,
        matchReason: writer.match_reason,
      },
      dimensions: dimResults,
    }
  }
}
