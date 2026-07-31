import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'

import type { CampaignPost } from '@/lib/content'
import { StatusPill } from '@/components/StatusPill'

type PostCardProps = {
  post: CampaignPost
  compact?: boolean
}

export function PostCard({ post, compact = false }: PostCardProps) {
  return (
    <article className="group flex h-full flex-col justify-between border border-stone-800 bg-stone-950/70 p-6 transition hover:border-red-400/40 hover:bg-stone-950">
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <StatusPill status={post.status} />
          <p className="text-[11px] uppercase tracking-[0.24em] text-stone-400">{post.date}</p>
        </div>
        <div className="space-y-3">
          <h3 className="font-display text-3xl leading-none text-stone-100">{post.title}</h3>
          <p className="text-sm leading-6 text-stone-300">{post.summary}</p>
        </div>
      </div>

      <div className="mt-6 flex items-end justify-between gap-4 border-t border-stone-800 pt-4">
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-stone-700 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-stone-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <Link
          to={`/updates/${post.slug}`}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-stone-100 transition group-hover:text-red-300"
        >
          {compact ? 'Read' : 'Read update'}
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  )
}
