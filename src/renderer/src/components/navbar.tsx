import { Link } from 'react-router-dom'

import { Avatar } from './avatar'
// import { SearchButton } from './search'

export function Navbar() {
  return (
    <nav className="w-screen h-12 bg-design-system-gray-700 flex justify-between items-center px-5">
      <Link
        to="/"
        className="text-sm text-design-system-schemes-inverse-on-surface font-bold cursor-default select-none"
      >
        Taurius Builder
      </Link>
      <div className="flex items-center gap-2.5">
        {/* <SearchButton /> */}
        <span className="text-sm text-design-system-schemes-inverse-on-surface font-bold cursor-default select-none">
          Histórico de Build
        </span>
        <Link
          to="/releases"
          className="text-sm text-design-system-schemes-inverse-on-surface font-bold cursor-default select-none"
        >
          Releases
        </Link>
        <Link
          to="/projects"
          className="text-sm text-design-system-schemes-inverse-on-surface font-bold cursor-default select-none"
        >
          Projetos
        </Link>
        <Avatar />
      </div>
    </nav>
  )
}
