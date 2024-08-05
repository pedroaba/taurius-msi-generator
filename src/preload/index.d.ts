import { ElectronAPI } from '@electron-toolkit/preload'

import type {
  Project,
  ProjectCreateParams,
} from '@/shared/typing/models/project'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      projectsApi: {
        create(request: ProjectCreateParams): Promise<{ [key: string]: string }>
        fetch(projectName: string): Promise<Record<'projects', Project[]>>
        delete(projectId: string): Promise<void>
      }
      utils: {
        generateImageUrl(path: string): Promise<unknown | null>
      }
    }
  }
}
