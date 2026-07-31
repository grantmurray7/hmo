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

function parseScalar(value: string): unknown {
  const trimmed = value.trim()

  if (trimmed === 'true') return true
  if (trimmed === 'false') return false

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1)
  }

  if (trimmed.startsWith('[') && trimmed.endsWith(']')) {
    const inner = trimmed.slice(1, -1).trim()

    if (!inner) {
      return []
    }

    return inner
      .split(',')
      .map((item) => parseScalar(item) as string)
      .filter(Boolean)
  }

  return trimmed
}

function parseFrontmatter(raw: string) {
  if (!raw.startsWith('---')) {
    return { data: {}, content: raw }
  }

  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)

  if (!match) {
    return { data: {}, content: raw }
  }

  const [, frontmatterBlock, content] = match
  const data: Record<string, unknown> = {}

  for (const line of frontmatterBlock.split(/\r?\n/)) {
    const trimmed = line.trim()

    if (!trimmed) {
      continue
    }

    const separatorIndex = trimmed.indexOf(':')

    if (separatorIndex === -1) {
      continue
    }

    const key = trimmed.slice(0, separatorIndex).trim()
    const value = trimmed.slice(separatorIndex + 1).trim()

    data[key] = parseScalar(value)
  }

  return { data, content }
}

function parsePost(path: string, raw: string): CampaignPost {
  const parsed = parseFrontmatter(raw)
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
