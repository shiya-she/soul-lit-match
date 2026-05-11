import { questions } from '@/server/data/questions'
import { dimensions } from '@/server/data/dimensions'
import { getSupabase } from '@/lib/supabase'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const { answers } = await req.json()
    if (!answers || typeof answers !== 'object') {
      return NextResponse.json({ error: '请提供答题记录' }, { status: 400 })
    }

    // Scoring
    const scores: Record<string, number> = {}
    for (const dim of dimensions) scores[dim.id] = 0
    for (const q of questions) {
      const choice = answers[q.id]
      if (choice === 'A' || choice === 'B') {
        scores[q.dim] += choice === 'A' ? 1 : -1
      }
    }

    // Type code + dim analysis
    let typeCode = ''
    const dimResults = dimensions.map((dim) => {
      const score = scores[dim.id]
      const result = score >= 0 ? dim.left : dim.right
      typeCode += result.code
      return {
        name: dim.name, score,
        left: dim.left, right: dim.right,
        resultLabel: result.label, resultEmoji: result.emoji,
      }
    })

    // Query Supabase
    const supabase = getSupabase()
    const { data, error } = await supabase
      .from('writers')
      .select('*')
      .eq('type_code', typeCode)
      .single()

    if (error || !data) {
      return NextResponse.json(
        { error: `未找到匹配的文学家 (${typeCode}): ${error?.message || ''}` },
        { status: 500 }
      )
    }

    const writer = data as any

    return NextResponse.json({
      typeCode,
      writer: {
        name: writer.name, title: writer.title, era: writer.era,
        works: writer.works, keywords: writer.keywords,
        portrait: writer.portrait, quote: writer.quote,
        matchReason: writer.match_reason,
      },
      dimensions: dimResults,
    })
  } catch (e: any) {
    return NextResponse.json({ error: e.message || '匹配失败' }, { status: 500 })
  }
}
