import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

import { emptyUpdateCards } from '@/content/site'
import { getAllPosts } from '@/lib/content'

const allPosts = getAllPosts()

export default function Updates() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 transition hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4" />
          Back home
        </Link>
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">Updates</p>
        <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">Updates will appear here.</h1>
        <p className="max-w-2xl text-base leading-8 text-slate-600">
          No posts are published yet. This page is ready for future updates and images.
        </p>
      </div>

      <section className="grid gap-4 md:grid-cols-2">
        {allPosts.length > 0
          ? allPosts.map((post) => (
              <article
                key={post.slug}
                className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{post.date}</p>
                <h2 className="mt-2 text-xl font-medium text-slate-900">{post.title}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">{post.summary}</p>
              </article>
            ))
          : emptyUpdateCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="mb-4 flex aspect-[16/10] items-center justify-center rounded-[18px] border border-dashed border-slate-300 bg-slate-50">
                  <span className="text-sm text-slate-400">Blank image</span>
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{card.date}</p>
                <h2 className="mt-2 text-xl font-medium text-slate-900">{card.title}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">{card.summary}</p>
              </article>
            ))}
      </section>
    </div>
  )
}
