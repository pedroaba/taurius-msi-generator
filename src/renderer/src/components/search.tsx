import clsx from 'clsx'
import { Search } from 'lucide-react'
import { useRef, useState } from 'react'

export function SearchButton() {
  const [hasFocus, setHasFocus] = useState(false)
  const searchInputRef = useRef<HTMLInputElement | null>(null)

  function handleSetFocus() {
    setHasFocus(true)
  }

  function handleSetBlur() {
    setHasFocus(false)
  }

  return (
    <button
      onClick={() => {
        searchInputRef.current?.focus()
      }}
      className="border-2 border-design-system-schemes-on-surface-variant h-9 min-w-9 px-2 gap-2 rounded-lg flex justify-center items-center text-design-system-schemes-on-surface-variant cursor-default"
    >
      <Search className="size-4" />
      <input
        id="search"
        ref={searchInputRef}
        onFocus={handleSetFocus}
        onBlur={handleSetBlur}
        className={clsx(
          'w-36 focus:outline-none focus-within:outline-none bg-transparent text-zinc-300 placeholder:text-xs placeholder:text-ellipsis placeholder:text-design-system-schemes-on-surface-variant placeholder:font-kumbh-sans placeholder:font-bold',
          { hidden: !hasFocus },
        )}
        placeholder="Pesquise pelo nome..."
      />
    </button>
  )
}
