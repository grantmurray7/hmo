import { SectionHeader } from '@/components/SectionHeader'
import { PostCard } from '@/components/PostCard'
import { getAllPosts, getAvailableTags } from '@/lib/content'
import { useCampaignStore } from '@/stores/useCampaignStore'
import { cn } from '@/lib/utils'

const allPosts = getAllPosts()
const allTags = getAvailableTags()

export default function Updates() {
  const selectedTag = useCampaignStore((state) => state.selectedTag)
  const setSelectedTag = useCampaignStore((state) => state.setSelectedTag)

  const visiblePosts = selectedTag
    ? allPosts.filter((post) => post.tags.includes(selectedTag))
    : allPosts

  return (
    <div className="space-y-8">
      <SectionHeader
        eyebrow="Archive"
        title="Campaign updates in date order"
        description="Every post is listed here so the public record can be followed in sequence. Use the topic filters to focus on planning, process, or resident updates."
      />

      <section className="space-y-5 border border-stone-800 bg-stone-950/70 p-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-sm leading-6 text-stone-300">
            Showing <span className="text-stone-100">{visiblePosts.length}</span> updates
            {selectedTag ? (
              <>
                {' '}
                tagged <span className="text-stone-100">{selectedTag}</span>
              </>
            ) : null}
            .
          </p>
          {selectedTag ? (
            <button
              type="button"
              onClick={() => setSelectedTag(null)}
              className="text-left text-[11px] font-semibold uppercase tracking-[0.24em] text-red-300 transition hover:text-red-200 md:text-right"
            >
              Clear filter
            </button>
          ) : null}
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setSelectedTag(null)}
            className={cn(
              'rounded-full border px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] transition',
              selectedTag === null
                ? 'border-red-500 bg-red-500 text-white'
                : 'border-stone-700 text-stone-300 hover:border-stone-500 hover:bg-stone-900',
            )}
          >
            All topics
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => setSelectedTag(tag)}
              className={cn(
                'rounded-full border px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] transition',
                selectedTag === tag
                  ? 'border-red-500 bg-red-500 text-white'
                  : 'border-stone-700 text-stone-300 hover:border-stone-500 hover:bg-stone-900',
              )}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      <section className="grid gap-5">
        {visiblePosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </section>
    </div>
  )
}
