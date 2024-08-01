import Logo from '@renderer/assets/logo.png'

import { ProjectCreatePopover } from './components/project-create-popover'

export function Home() {
  return (
    <div className="w-full h-[calc(100vh-3rem)] gap-y-12 flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <img src={Logo} alt="" />
        <span className="text-white font-bold text-6xl">Taurius Builder</span>
        <span className="text-white font-bold text-sm">
          Crie executáveis de forma intuitiva e simples
        </span>
      </div>

      <ProjectCreatePopover />
    </div>
  )
}
