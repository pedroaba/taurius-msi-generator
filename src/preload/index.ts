import { electronAPI } from '@electron-toolkit/preload'
import { contextBridge, ipcRenderer } from 'electron'

import { IPC_EVENTS } from '@/shared/constants/ipc'
import { IPC_UTILS } from '@/shared/constants/utils'
import type {
  Project,
  ProjectCreateParams,
} from '@/shared/typing/models/project'

const api = {
  projectsApi: {
    async create(
      request: ProjectCreateParams,
    ): Promise<{ [key: string]: string }> {
      return await ipcRenderer.invoke(IPC_EVENTS.PROJECTS.CREATE, request)
    },
    async fetch(projectName: string): Promise<Project[]> {
      return await ipcRenderer.invoke(IPC_EVENTS.PROJECTS.FETCH_ALL, {
        projectName,
      })
    },
    async delete(projectId: string): Promise<void> {
      await ipcRenderer.invoke(IPC_EVENTS.PROJECTS.DELETE_BY_ID, {
        projectId,
      })
    },
  },
  utils: {
    generateImageUrl(path: string): Promise<string | null> {
      return ipcRenderer.invoke(IPC_UTILS.GET_IMAGE_URL, { path })
    },
  },
}

if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-expect-error (define in dts)
  window.electron = electronAPI
  // @ts-expect-error (define in dts)
  window.api = api
}
