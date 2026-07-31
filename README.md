# Wilton Road Campaign

This repository contains the GitHub Pages site for `www.wiltonroadhmo.com`.

## Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Markdown-based campaign updates

## Local development

```bash
npm install
npm run dev
```

## Publishing a new update

1. Add a new Markdown file under `src/content/posts/`.
2. Use frontmatter in this format:

```md
---
title: "Your update title"
date: "2026-07-31"
summary: "Short summary for cards and archive pages."
tags: ["planning", "resident update"]
featured: false
status: "process"
relatedSlugs: ["another-post-slug"]
---

Write the full update in Markdown here.
```

3. Build and publish the site through the existing GitHub Pages workflow.

## Quality checks

```bash
npm run check
npm run test
npm run build
```
