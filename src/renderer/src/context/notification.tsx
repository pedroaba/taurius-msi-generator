import { Toaster } from '@renderer/components/ui/sonner'
import { createContext, ReactNode } from 'react'
import { toast } from 'sonner'

import { IPC_NOTIFICATION_EVENTS } from '../../../shared/constants/notification'

type NotificationListenerSuccessEvent = {
  message: string
}

interface INotificationContext {}

export const NotificationContext = createContext({} as INotificationContext)

interface NotificationContextProviderProps {
  children: ReactNode
}

export function NotificationContextProvider({
  children,
}: NotificationContextProviderProps) {
  window.electron.ipcRenderer.on(
    IPC_NOTIFICATION_EVENTS.VALIDATION.ERROR,
    function (_, validationErrorFields) {
      for (const field in validationErrorFields) {
        toast.error(validationErrorFields[field].at(0))
      }
    },
  )

  window.electron.ipcRenderer.on(
    IPC_NOTIFICATION_EVENTS.SUCCESS,
    function (_, { message }: NotificationListenerSuccessEvent) {
      toast.success(message)
    },
  )

  window.electron.ipcRenderer.on(
    IPC_NOTIFICATION_EVENTS.INFO,
    function (_, { message }: NotificationListenerSuccessEvent) {
      toast.info(message)
    },
  )

  window.electron.ipcRenderer.on(
    IPC_NOTIFICATION_EVENTS.FAILURE,
    function (_, { message }: NotificationListenerSuccessEvent) {
      toast.warning(message)
    },
  )

  window.electron.ipcRenderer.on(
    IPC_NOTIFICATION_EVENTS.ERROR,
    function (_, { message }: NotificationListenerSuccessEvent) {
      toast.warning(message)
    },
  )

  window.electron.ipcRenderer.on(
    IPC_NOTIFICATION_EVENTS.FATAL,
    function (_, { message }: NotificationListenerSuccessEvent) {
      toast.error(message)
    },
  )

  return (
    <NotificationContext.Provider value={{}}>
      {children}
      <Toaster position="bottom-right" richColors />
    </NotificationContext.Provider>
  )
}
