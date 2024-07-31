import { Toaster } from '@renderer/components/ui/sonner'
import { createContext, ReactNode } from 'react'
import { toast } from 'sonner'

import { IPC_NOTIFICATION_EVENTS } from '../../../shared/constants/notification'

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

  return (
    <NotificationContext.Provider value={{}}>
      {children}
      <Toaster position="bottom-right" richColors />
    </NotificationContext.Provider>
  )
}
