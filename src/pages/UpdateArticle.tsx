import { Link, Navigate, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { ArrowLeft, ArrowRight } from 'lucide-react'

import { PostCard } from '@/components/PostCard'
import { StatusPill } from '@/components/StatusPill'
import { getPostBySlug, getRelatedPosts } from '@/lib/content'

export default function UpdateArticle() {
  const { slug } = useParams<{ slug: string }>()

  if (!slug) {
    return <Navigate to="/updates" replace />
  }

  const post = getPostBySlug(slug)

  if (!post) {
    return <Navigate to="/not-found" replace />
  }

  const relatedPosts = getRelatedPosts(post)

  return (
    <div className="space-y-10">
      <section className="space-y-6 border-b border-stone-800 pb-8">
        <Link
          to="/updates"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-stone-300 transition hover:text-red-300"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to updates
        </Link>

        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <StatusPill status={post.status} />
            <p className="text-[11px] uppercase tracking-[0.24em] text-stone-400">{post.date}</p>
          </div>
          <h1 className="max-w-5xl font-display text-[3.2rem] leading-[0.95] text-stone-50 md:text-[4.6rem]">
            {post.title}
          </h1>
          <p className="max-w-3xl text-base leading-7 text-stone-300">{post.summary}</p>
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
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.1fr_0.58fr]">
        <article className="article-copy">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
        </article>

        <aside className="space-y-6">
          <div className="border border-stone-800 bg-stone-950/70 p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-red-300">
              Reading note
            </p>
            <p className="mt-4 text-sm leading-7 text-stone-300">
              This update is part of a dated public record. Where a point has not been confirmed,
              it should be understood as a concern or process issue rather than a statement of fact.
            </p>
          </div>

          {relatedPosts.length > 0 ? (
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                <h2 className="font-display text-3xl leading-none text-stone-100">
                  Related updates
                </h2>
                <ArrowRight className="h-5 w-5 text-red-300" />
              </div>
              <div className="grid gap-4">
                {relatedPosts.map((relatedPost) => (
                  <PostCard key={relatedPost.slug} post={relatedPost} compact />
                ))}
              </div>
            </div>
          ) : null}
        </aside>
      </section>
    </div>
  )
}
