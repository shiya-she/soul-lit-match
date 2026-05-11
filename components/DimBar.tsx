'use client'

interface DimResult {
  score: number
  left: { label: string; emoji: string }
  right: { label: string; emoji: string }
}

export function DimBar({ dim }: { dim: DimResult }) {
  const maxScore = 3
  const abs = Math.abs(dim.score)
  const pct = (abs / maxScore) * 100
  const ip = dim.score >= 0
    ? Math.max(0, 50 - (abs / maxScore) * 50)
    : Math.min(100, 50 + (abs / maxScore) * 50)

  return (
    <div className="flex items-center gap-3 mb-2.5">
      <span className="w-12 text-xs text-muted-foreground text-right">
        {dim.left.emoji} {dim.left.label}
      </span>
      <div className="flex-1 relative h-1.5 bg-muted rounded-full">
        {dim.score > 0 && (
          <div
            className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-primary to-[#e8d5a3] transition-all duration-1000"
            style={{ width: `${pct}%` }}
          />
        )}
        {dim.score < 0 && (
          <div
            className="absolute right-0 top-0 h-full rounded-full bg-gradient-to-r from-[#6b5b8a] to-[#8b7baa] transition-all duration-1000"
            style={{ width: `${pct}%` }}
          />
        )}
        <div
          className="absolute -top-[3px] w-3 h-3 rounded-full bg-white border-2 border-primary -translate-x-1/2 transition-all duration-1000"
          style={{ left: `${ip}%` }}
        />
      </div>
      <span className="w-12 text-xs text-muted-foreground text-left">
        {dim.right.label} {dim.right.emoji}
      </span>
    </div>
  )
}
