import { Link } from 'react-router-dom'
import { ArrowRight, Clock3, FileText, MapPinned } from 'lucide-react'

import { FactCard } from '@/components/FactCard'
import { PostCard } from '@/components/PostCard'
import { SectionHeader } from '@/components/SectionHeader'
import { TimelineItem } from '@/components/TimelineItem'
import { campaignMeta, factCards, publishingPrinciples, timelineItems } from '@/content/site'
import { getFeaturedPosts, getLatestPost } from '@/lib/content'

const featuredPosts = getFeaturedPosts(2)
const latestPost = getLatestPost()

const quickFacts = [
  { label: 'Location', value: campaignMeta.location, icon: MapPinned },
  { label: 'Property', value: campaignMeta.property, icon: FileText },
  { label: 'Latest update', value: latestPost?.date ?? 'No updates yet', icon: Clock3 },
]

export default function Home() {
  return (
    <div className="space-y-12 md:space-y-16">
      <section className="grid gap-8 border-b border-stone-800 pb-10 lg:grid-cols-[1.55fr_0.9fr] lg:items-end">
        <div className="space-y-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-red-300">
            Resident-led planning watch
          </p>
          <h1 className="max-w-5xl font-display text-[3.4rem] leading-[0.94] text-stone-50 md:text-[5.25rem]">
            A serious public record of concern about development on Wilton Road.
          </h1>
          <p className="max-w-3xl text-base leading-7 text-stone-300 md:text-lg">
            {campaignMeta.mission}
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Link
              to="/updates"
              className="inline-flex items-center gap-2 border border-red-500 bg-red-500 px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-white transition hover:bg-red-400"
            >
              Browse updates
              <ArrowRight className="h-4 w-4" />
            </Link>
            <button
              type="button"
              onClick={() =>
                document.getElementById('publishing-principles')?.scrollIntoView({ behavior: 'smooth' })
              }
              className="inline-flex items-center gap-2 border border-stone-700 px-5 py-3 text-xs font-semibold uppercase tracking-[0.28em] text-stone-200 transition hover:border-stone-500 hover:bg-stone-900"
            >
              How this site works
            </button>
          </div>
        </div>

        <aside className="grid gap-4 border border-stone-800 bg-stone-950/70 p-5">
          {quickFacts.map(({ label, value, icon: Icon }) => (
            <div key={label} className="border-b border-stone-800 pb-4 last:border-b-0 last:pb-0">
              <div className="mb-3 flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-stone-400">
                <Icon className="h-4 w-4 text-red-300" />
                {label}
              </div>
              <p className="text-sm leading-6 text-stone-200">{value}</p>
            </div>
          ))}
        </aside>
      </section>

      <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-5">
          <SectionHeader
            eyebrow="Current issue"
            title="What the campaign is saying"
            description="The site should stay clear about what is known, what is suspected, and why residents are asking for closer scrutiny."
          />
          <p className="max-w-3xl text-sm leading-7 text-stone-300">{campaignMeta.issue}</p>
        </div>
        <div className="border border-stone-800 bg-stone-950/70 p-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-red-300">
            Editorial note
          </p>
          <p className="mt-4 text-sm leading-7 text-stone-300">
            The aim is not to publish accusations. The aim is to keep the public record orderly,
            factual, and useful as more information becomes available.
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeader
          eyebrow="Key facts"
          title="The site separates facts, concerns, and process"
          description="This gives each update a consistent structure and makes it easier for visitors to follow the issue without confusion."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {factCards.map((card) => (
            <FactCard key={card.title} {...card} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <SectionHeader
          eyebrow="Campaign timeline"
          title="A dated sequence, not a loose collection of posts"
          description="The timeline is there to keep the discussion grounded in sequence, context, and sourceable events."
        />
        <ol className="border-b border-stone-800">
          {timelineItems.map((item) => (
            <TimelineItem key={item.title} {...item} />
          ))}
        </ol>
      </section>

      <section className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Latest reporting"
            title="Featured updates"
            description="New posts are designed to appear here first, then continue into the full archive."
          />
          <Link
            to="/updates"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-stone-100 transition hover:text-red-300"
          >
            View all updates
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {featuredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section
        id="publishing-principles"
        className="grid gap-8 border border-stone-800 bg-stone-950/70 p-6 md:p-8 lg:grid-cols-[0.95fr_1.05fr]"
      >
        <div className="space-y-4">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-red-300">
            Publishing principles
          </p>
          <h2 className="font-display text-4xl leading-none text-stone-100 md:text-5xl">
            Professional, organised, and fit for scrutiny.
          </h2>
        </div>
        <ul className="space-y-4">
          {publishingPrinciples.map((principle) => (
            <li key={principle} className="border-t border-stone-800 pt-4 text-sm leading-7 text-stone-300">
              {principle}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
