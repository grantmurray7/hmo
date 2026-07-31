import { describe, expect, it } from 'vitest'

import {
  getAllPosts,
  getAvailableTags,
  getFeaturedPosts,
  getPostBySlug,
  getRelatedPosts,
} from '@/lib/content'

describe('content loader', () => {
  it('starts with no posts', () => {
    const posts = getAllPosts()

    expect(posts).toHaveLength(0)
  })

  it('returns no featured posts', () => {
    const featuredPosts = getFeaturedPosts()

    expect(featuredPosts).toHaveLength(0)
  })

  it('returns no available tags', () => {
    const tags = getAvailableTags()

    expect(tags).toHaveLength(0)
  })

  it('returns no post and no related posts', () => {
    const post = getPostBySlug('missing-post')

    expect(post).toBeNull()
    expect(getRelatedPosts({
      slug: 'missing-post',
      title: 'Missing post',
      date: '2026-07-31',
      summary: 'Summary',
      tags: [],
      featured: false,
      status: 'process',
      relatedSlugs: ['another-missing-post'],
      body: '',
    })).toHaveLength(0)
  })
})
