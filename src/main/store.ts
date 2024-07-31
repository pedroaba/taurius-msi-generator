import Store from 'electron-store'

type Project = {
  id: string
  name: string
  description?: string
}

export interface TauriusBuilderStore {
  projects: Project[]
}

export const store = new Store<TauriusBuilderStore>({
  defaults: {
    projects: [],
  },
})
