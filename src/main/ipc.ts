import { ipcMain } from 'electron'

import { IPC_EVENTS } from '../shared/constants/ipc'
import { IPC_NOTIFICATION_EVENTS } from '../shared/constants/notification'
import { projectsApi } from './apis/project'

ipcMain.handle(IPC_EVENTS.PROJECTS.CREATE, async (event, request) => {
  const result = await projectsApi.create(request)
  if (result.isLeft()) {
    event.sender.send(IPC_NOTIFICATION_EVENTS.VALIDATION.ERROR, result.value)
    return null
  }

  event.sender.send(IPC_NOTIFICATION_EVENTS.SUCCESS, {
    message: 'Projeto criado com sucesso!',
  })
  return result.value
})
