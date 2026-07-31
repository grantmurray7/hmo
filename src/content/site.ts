export const campaignMeta = {
  title: 'Wilton Road Campaign',
  strapline: 'A resident-led record of concerns about development at Number 27, Wilton Road, Redhill, RH1 6QR.',
  location: 'Wilton Road, Redhill, RH1 6QR',
  property: 'Number 27, also known locally as "The Wilton"',
  issue:
    'Planning permission exists for a 6 metre rear extension, but residents are concerned that the works may relate to an HMO without the necessary permission.',
  mission:
    'This site is intended to document the timeline, separate confirmed facts from community concerns, and publish updates in a clear and organised way.',
} as const

export const factCards = [
  {
    title: 'Confirmed',
    status: 'confirmed' as const,
    body: 'Permission has been described by residents as covering a 6 metre rear extension to the property.',
  },
  {
    title: 'Concern',
    status: 'concern' as const,
    body: 'Residents suspect the development may involve HMO use or conversion beyond the permission understood to be in place.',
  },
  {
    title: 'Process',
    status: 'process' as const,
    body: 'Updates on this site should distinguish carefully between verified facts, observations, and issues still being checked.',
  },
]

export const timelineItems = [
  {
    date: 'Current position',
    title: 'Permission for rear extension understood to exist',
    detail:
      'The baseline planning position presented on the site starts from the reported approval for a 6 metre rear extension.',
  },
  {
    date: 'Resident concern',
    title: 'Questions raised about possible HMO-related works',
    detail:
      'Neighbours want clarity on whether the works match the permission already granted or suggest a different use requiring consent.',
  },
  {
    date: 'Site launch',
    title: 'Campaign record begins',
    detail:
      'The site begins publishing structured updates so the issue can be followed in date order, with supporting references where available.',
  },
] as const

export const publishingPrinciples = [
  'State confirmed planning facts separately from resident concerns and open questions.',
  'Use dates, titles, and short summaries so every update can be followed in sequence.',
  'Link to evidence or source references whenever available.',
  'Keep the writing calm, factual, and suitable for public scrutiny.',
]
