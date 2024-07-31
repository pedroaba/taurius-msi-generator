import { IPC_EVENTS } from '@shared/constants/ipc'
import { IPC_NOTIFICATION_EVENTS } from '@shared/constants/notification'
import { ipcMain } from 'electron'

import { projectsApi } from './apis/project'

export function bootstrapProjectEvents() {
  ipcMain.on(IPC_EVENTS.PROJECTS.CREATE, async (event, request) => {
    const result = await projectsApi.create(request)
    if (result.isLeft()) {
      event.reply(IPC_NOTIFICATION_EVENTS.VALIDATION.ERROR, result.value)
      return null
    }

    return result.value
  })
}
