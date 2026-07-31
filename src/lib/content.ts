import matter from 'gray-matter'

export type PostStatus = 'confirmed' | 'concern' | 'process'

export type CampaignPost = {
  slug: string
  title: string
  date: string
  summary: string
  tags: string[]
  featured: boolean
  status: PostStatus
  relatedSlugs: string[]
  body: string
}

type PostFrontmatter = Partial<Omit<CampaignPost, 'body' | 'slug'>> & {
  slug?: string
}

const postModules = import.meta.glob('../content/posts/*.md', {
  eager: true,
  query: '?raw',
  import: 'default',
}) as Record<string, string>

function slugFromPath(path: string) {
  return path.split('/').pop()?.replace(/\.md$/, '') ?? 'untitled-post'
}

function normalizeTags(tags: unknown): string[] {
  if (!Array.isArray(tags)) {
    return []
  }

  return tags
    .filter((value): value is string => typeof value === 'string')
    .map((value) => value.trim())
    .filter(Boolean)
}

function normalizeRelatedSlugs(relatedSlugs: unknown): string[] {
  if (!Array.isArray(relatedSlugs)) {
    return []
  }

  return relatedSlugs.filter(
    (value): value is string => typeof value === 'string' && value.trim().length > 0,
  )
}

function normalizeStatus(value: unknown): PostStatus {
  if (value === 'confirmed' || value === 'concern' || value === 'process') {
    return value
  }

  return 'process'
}

function parsePost(path: string, raw: string): CampaignPost {
  const parsed = matter(raw)
  const data = parsed.data as PostFrontmatter

  return {
    slug: data.slug?.trim() || slugFromPath(path),
    title: data.title?.trim() || 'Untitled update',
    date: data.date?.trim() || '1970-01-01',
    summary: data.summary?.trim() || 'No summary available.',
    tags: normalizeTags(data.tags),
    featured: Boolean(data.featured),
    status: normalizeStatus(data.status),
    relatedSlugs: normalizeRelatedSlugs(data.relatedSlugs),
    body: parsed.content.trim(),
  }
}

export const allPosts = Object.entries(postModules)
  .map(([path, raw]) => parsePost(path, raw))
  .sort((left, right) => right.date.localeCompare(left.date))

export function getAllPosts() {
  return allPosts
}

export function getLatestPost() {
  return allPosts[0] ?? null
}

export function getFeaturedPosts(limit = 2) {
  return allPosts.filter((post) => post.featured).slice(0, limit)
}

export function getPostBySlug(slug: string) {
  return allPosts.find((post) => post.slug === slug) ?? null
}

export function getAvailableTags() {
  return Array.from(new Set(allPosts.flatMap((post) => post.tags))).sort((left, right) =>
    left.localeCompare(right),
  )
}

export function getRelatedPosts(post: CampaignPost) {
  return post.relatedSlugs
    .map((slug) => getPostBySlug(slug))
    .filter((value): value is CampaignPost => value !== null)
}
