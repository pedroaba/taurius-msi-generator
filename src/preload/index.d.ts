import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: {
      projectsApi: {
        create(request: ProjectCreateParams): Promise<{ [key: string]: string }>
      }
    }
  }
}
