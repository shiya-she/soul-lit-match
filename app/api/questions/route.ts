import { questions } from '@/server/data/questions'
import { dimensions } from '@/server/data/dimensions'
import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({ questions, dimensions })
}
