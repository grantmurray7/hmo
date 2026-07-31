import type { PostStatus } from '@/lib/content'
import { StatusPill } from '@/components/StatusPill'

type FactCardProps = {
  title: string
  body: string
  status: PostStatus
}

export function FactCard({ title, body, status }: FactCardProps) {
  return (
    <article className="flex h-full flex-col justify-between border border-stone-800 bg-stone-950/70 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
      <div className="space-y-4">
        <StatusPill status={status} />
        <h3 className="font-display text-3xl leading-none text-stone-100">{title}</h3>
        <p className="text-sm leading-6 text-stone-300">{body}</p>
      </div>
    </article>
  )
}
