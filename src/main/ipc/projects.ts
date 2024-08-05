import { ProjectApi } from '@main/apis/project'
import { ipcMain } from 'electron'

import { IPC_EVENTS } from '@/shared/constants/ipc'
import { IPC_NOTIFICATION_EVENTS } from '@/shared/constants/notification'

ipcMain.handle(IPC_EVENTS.PROJECTS.CREATE, async (event, request) => {
  const result = await ProjectApi.create(request)
  if (result.isLeft()) {
    event.sender.send(IPC_NOTIFICATION_EVENTS.VALIDATION.ERROR, result.value)
    return null
  }

  event.sender.send(IPC_NOTIFICATION_EVENTS.SUCCESS, {
    message: 'Projeto criado com sucesso!',
  })
  return result.value
})

ipcMain.handle(
  IPC_EVENTS.PROJECTS.FETCH_ALL,
  async (event, { projectName }) => {
    try {
      const projects = await ProjectApi.fetch(projectName)
      return projects.value
    } catch {
      event.sender.send(IPC_NOTIFICATION_EVENTS.ERROR, {
        message: 'Ocorreu um erro na hora de buscar os projetos',
      })
      return []
    }
  },
)

ipcMain.handle(
  IPC_EVENTS.PROJECTS.DELETE_BY_ID,
  async (event, { projectId }) => {
    try {
      await ProjectApi.delete(projectId)
      event.sender.send(IPC_NOTIFICATION_EVENTS.ERROR, {
        message: 'Projeto deletado com sucesso',
      })

      return null
    } catch {
      event.sender.send(IPC_NOTIFICATION_EVENTS.ERROR, {
        message: 'Ocorreu um erro na hora de deletar um projeto.',
      })
      return null
    }
  },
)
