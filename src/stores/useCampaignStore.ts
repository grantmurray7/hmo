import { create } from 'zustand'

type CampaignState = {
  selectedTag: string | null
  setSelectedTag: (tag: string | null) => void
}

export const useCampaignStore = create<CampaignState>((set) => ({
  selectedTag: null,
  setSelectedTag: (tag) => set({ selectedTag: tag }),
}))
