import Logo from '@renderer/assets/logo.png'

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

      <button className="bg-design-system-blue-600 text-white text-base rounded-lg font-semibold px-6 h-12 hover:brightness-125 cursor-default">
        Criar Executável
      </button>
    </div>
  )
}
