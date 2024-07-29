import { Avatar } from './avatar'
// import { SearchButton } from './search'

export function Navbar() {
  return (
    <nav className="w-screen h-12 bg-design-system-gray-700 flex justify-between items-center px-5">
      <h1 className="text-sm text-design-system-schemes-inverse-on-surface font-bold cursor-default select-none">
        Taurius Builder
      </h1>
      <div className="flex items-center gap-2.5">
        {/* <SearchButton /> */}
        <span className="text-sm text-design-system-schemes-inverse-on-surface font-bold cursor-default select-none">
          Histórico de Build
        </span>
        <span className="text-sm text-design-system-schemes-inverse-on-surface font-bold cursor-default select-none">
          Projetos
        </span>
        <Avatar />
      </div>
    </nav>
  )
}
