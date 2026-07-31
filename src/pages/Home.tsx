import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

import { campaignMeta, emptyUpdateCards, heroPoints } from '@/content/site'

export default function Home() {
  return (
    <div className="space-y-12">
      <section className="grid items-center gap-10 border-b border-slate-200 pb-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
            Wilton Road Campaign
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] text-slate-900 md:text-7xl">
            A simple public campaign site for Wilton Road.
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-slate-600">
            {campaignMeta.mission}
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              to="/updates"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
            >
              Browse updates
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-3 pt-2">
            {heroPoints.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600"
              >
                {point}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[28px] border border-slate-200 bg-slate-100 p-4">
          <div className="flex aspect-[4/3] items-center justify-center rounded-[22px] border border-dashed border-slate-300 bg-white">
            <div className="text-center">
              <p className="text-sm font-medium text-slate-600">Main image</p>
              <p className="mt-1 text-sm text-slate-400">Placeholder for now</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
        <div className="space-y-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-500">
            About
          </p>
          <h2 className="max-w-xl text-3xl font-semibold leading-tight text-slate-900 md:text-4xl">
            Professional, simple, and ready for real content.
          </h2>
          <p className="max-w-xl text-base leading-8 text-slate-600">
            {campaignMeta.issue}
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {emptyUpdateCards.map((card) => (
            <article key={card.title} className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-sm">
              <div className="mb-4 flex aspect-[16/10] items-center justify-center rounded-[18px] border border-dashed border-slate-300 bg-slate-50">
                <span className="text-sm text-slate-400">Blank image</span>
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{card.date}</p>
              <h3 className="mt-2 text-xl font-medium text-slate-900">{card.title}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{card.summary}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
