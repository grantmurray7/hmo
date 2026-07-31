import { cn } from '@/lib/utils'
import type { PostStatus } from '@/lib/content'

const labels: Record<PostStatus, string> = {
  confirmed: 'Confirmed',
  concern: 'Concern',
  process: 'Process',
}

const tones: Record<PostStatus, string> = {
  confirmed: 'border-emerald-700/30 bg-emerald-950/80 text-emerald-200',
  concern: 'border-red-800/40 bg-red-950/80 text-red-200',
  process: 'border-stone-700 bg-stone-900 text-stone-200',
}

type StatusPillProps = {
  status: PostStatus
}

export function StatusPill({ status }: StatusPillProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em]',
        tones[status],
      )}
    >
      {labels[status]}
    </span>
  )
}
