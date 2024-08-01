import Store from 'electron-store'

type Project = {
  id: string
  name: string
  description?: string
  createdAt: number
  updatedAt: number
}

export interface TauriusBuilderStore {
  projects: Record<string, Project>
}

export const store = new Store<TauriusBuilderStore>({
  defaults: {
    projects: {},
  },
})
