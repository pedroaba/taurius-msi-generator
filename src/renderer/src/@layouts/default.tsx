import { Background } from '@renderer/components/background'
import { Navbar } from '@renderer/components/navbar'
import { Outlet } from 'react-router-dom'

export function DefaultLayout(): JSX.Element {
  // const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <div className="min-w-screen min-h-screen overflow-hidden">
      <Navbar />
      <Background />
      <Outlet />
    </div>
  )
}
