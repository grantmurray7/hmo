import { describe, expect, it } from 'vitest'

import {
  getAllPosts,
  getAvailableTags,
  getFeaturedPosts,
  getPostBySlug,
  getRelatedPosts,
} from '@/lib/content'

describe('content loader', () => {
  it('loads posts in reverse chronological order', () => {
    const posts = getAllPosts()

    expect(posts).toHaveLength(3)
    expect(posts[0].slug).toBe('campaign-record-launch')
    expect(posts[1].slug).toBe('planning-position-summary')
    expect(posts[2].slug).toBe('resident-observations-log')
  })

  it('returns featured posts only', () => {
    const featuredPosts = getFeaturedPosts()

    expect(featuredPosts).toHaveLength(2)
    expect(featuredPosts.every((post) => post.featured)).toBe(true)
  })

  it('collects topic tags', () => {
    const tags = getAvailableTags()

    expect(tags).toContain('planning')
    expect(tags).toContain('timeline')
  })

  it('resolves a post and its related updates', () => {
    const post = getPostBySlug('campaign-record-launch')

    expect(post).not.toBeNull()
    expect(getRelatedPosts(post!)).toHaveLength(2)
  })
})
