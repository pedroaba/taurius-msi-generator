import { Button } from '@renderer/components/ui/button'
import { Input } from '@renderer/components/ui/input'
import { Eraser, Search } from 'lucide-react'
import {
  type ChangeEvent,
  type KeyboardEvent,
  useCallback,
  useRef,
  useState,
} from 'react'
import { Link } from 'react-router-dom'

export function ReleaseListPage() {
  const [releases, setReleases] = useState<unknown[]>([])
  const [isFetchingReleases, setIsFetchingReleases] = useState<boolean>(true)

  const [releaseNameFilter, setReleaseNameFilter] = useState<string>('')

  const searchInputRef = useRef<HTMLInputElement | null>(null)

  // const handleFetchReleases = useCallback(
  //   async (releaseName?: string) => {
  //     setIsFetchingReleases(true)
  //     const { releases } = await window.api.releasesApi.fetch(
  //       releaseName ?? releaseNameFilter,
  //     )

  //     setReleases(releases)
  //     setIsFetchingReleases(false)
  //   },
  //   [releaseNameFilter],
  // )

  // async function handleDeleteProjectById(projectId: string) {
  //   await window.api.releasesApi.delete(projectId)
  //   setReleases((state) => state.filter((project) => project.id !== projectId))

  //   searchInputRef.current?.focus()
  // }

  async function handleClearFilter() {
    if (!releaseNameFilter) {
      return
    }

    setReleaseNameFilter('')
    // await handleFetchReleases('')
  }

  async function handleKeyDownOnSearchInput(
    event: KeyboardEvent<HTMLInputElement>,
  ) {
    if (event.code === 'Enter') {
      // await handleFetchReleases()
    }
  }

  async function handleOnChangeFilterReleaseName(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    setReleaseNameFilter(event.target.value)
  }

  return (
    <div className="space-y-10 p-10">
      <div className="w-full flex justify-between items-center gap-4">
        <span className="text-white text-xl font-bold">Releases</span>
        <div className="flex items-center justify-end gap-4">
          <div className="flex items-center justify-between pr-2.5 w-96 border-2 group group-focus:border-design-system-schemes-inverse-on-surface border-design-system-schemes-on-surface-variant bg-transparent rounded-lg">
            <Input
              className="bg-transparent"
              placeholder="Pesquise pelo nome da release..."
              value={releaseNameFilter}
              onKeyDown={handleKeyDownOnSearchInput}
              onChange={handleOnChangeFilterReleaseName}
              disabled={isFetchingReleases}
              ref={searchInputRef}
            />
            <Search className="text-design-system-schemes-on-surface-variant size-5" />
          </div>
          <Button
            className="bg-green-800 hover:bg-green-900"
            onClick={handleClearFilter}
          >
            Limpar Filtro
            <Eraser className="text-white size-4 ml-2" />
          </Button>
          <Link to="/releases/new-release">
            <Button className="bg-green-800 hover:bg-green-900">
              Criar Release
              <Eraser className="text-white size-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
