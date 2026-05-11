import * as React from 'react'
import { cn } from '@/lib/utils'

const Progress = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { value?: number }
>(({ className, value = 0, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('relative h-1 w-full overflow-hidden rounded-full bg-muted', className)}
    {...props}
  >
    <div
      className="h-full rounded-full bg-gradient-to-r from-primary to-[#e8d5a3] transition-all duration-500 ease-out"
      style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
    />
  </div>
))
Progress.displayName = 'Progress'

export { Progress }
