import { electronAPI } from '@electron-toolkit/preload'
import type { ProjectCreateParams } from '@preload/@types/ipc'
import { contextBridge, ipcRenderer } from 'electron'

import { IPC_EVENTS } from '../shared/constants/ipc'

const api = {
  projectsApi: {
    create(request: ProjectCreateParams): Promise<{ [key: string]: string }> {
      return ipcRenderer.invoke(IPC_EVENTS.PROJECTS.CREATE, request)
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
