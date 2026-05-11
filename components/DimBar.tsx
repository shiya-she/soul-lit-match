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
  const isLeft = dim.score > 0
  const isRight = dim.score < 0
  const isNeutral = dim.score === 0

  const ballColor = isLeft
    ? 'bg-rose-400 border-rose-300 shadow-[0_0_6px_hsl(345_55%_60%_/_0.6)]'
    : isRight
      ? 'bg-violet-400 border-violet-300 shadow-[0_0_6px_hsl(260_50%_60%_/_0.6)]'
      : 'bg-muted-foreground/40 border-muted-foreground/40'

  return (
    <div className="flex items-center gap-3 mb-3">
      <span className={`w-14 text-xs text-right transition-colors duration-500 ${isLeft || isNeutral ? 'text-foreground/80' : 'text-muted-foreground'}`}>
        {dim.left.emoji} <span className="hidden sm:inline">{dim.left.label}</span>
      </span>

      <div className="flex-1 relative h-2 rounded-full overflow-hidden">
        {/* Background track */}
        <div className="absolute inset-0 rounded-full bg-muted" />

        {/* Left-side bar (violet — area left of indicator) */}
        <div
          className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-violet-800 to-violet-500 transition-all duration-700 ease-out"
          style={{ width: `${ip}%` }}
        />

        {/* Right-side bar (rose — area right of indicator) */}
        <div
          className="absolute right-0 top-0 h-full rounded-full bg-gradient-to-l from-primary to-rose-300 transition-all duration-700 ease-out"
          style={{ width: `${100 - ip}%` }}
        />

        {/* Indicator ball */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full border-2 -translate-x-1/2 transition-all duration-700 ease-out z-10 ${ballColor}`}
          style={{ left: `${ip}%` }}
        />
      </div>

      <span className={`w-14 text-xs text-left transition-colors duration-500 ${isRight || isNeutral ? 'text-foreground/80' : 'text-muted-foreground'}`}>
        <span className="hidden sm:inline">{dim.right.label}</span> {dim.right.emoji}
      </span>
    </div>
  )
}
