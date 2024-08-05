import { Tray } from '@phosphor-icons/react'
import { Button } from '@renderer/components/ui/button'
import { Input } from '@renderer/components/ui/input'
import { Eraser, RefreshCcw, Search } from 'lucide-react'
import {
  type ChangeEvent,
  type KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

import type { Project } from '@/shared/typing/models/project'

import { Card } from './components/card'

export function ProjectListPage() {
  const [projects, setProjects] = useState<Project[]>([])
  const [isFetchingProjects, setIsFetchingProjects] = useState<boolean>(true)

  const [projectNameFilter, setProjectNameFilter] = useState<string>('')

  const searchInputRef = useRef<HTMLInputElement | null>(null)

  const handleFetchProjects = useCallback(
    async (projectName?: string) => {
      setIsFetchingProjects(true)
      const { projects } = await window.api.projectsApi.fetch(
        projectName ?? projectNameFilter,
      )

      setProjects(projects)
      setIsFetchingProjects(false)
    },
    [projectNameFilter],
  )

  async function handleDeleteProjectById(projectId: string) {
    await window.api.projectsApi.delete(projectId)
    setProjects((state) => state.filter((project) => project.id !== projectId))

    searchInputRef.current?.focus()
  }

  async function handleClearFilter() {
    if (!projectNameFilter) {
      return
    }

    setProjectNameFilter('')
    await handleFetchProjects('')
  }

  async function handleKeyDownOnSearchInput(
    event: KeyboardEvent<HTMLInputElement>,
  ) {
    if (event.code === 'Enter') {
      await handleFetchProjects()
    }
  }

  async function handleOnChangeFilterProjectName(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    setProjectNameFilter(event.target.value)
  }

  useEffect(() => {
    handleFetchProjects()
  }, [handleFetchProjects])

  return (
    <div className="space-y-10 p-10">
      <div className="w-full flex flex-row-reverse items-center gap-4">
        <Button
          className="bg-green-800 hover:bg-green-900"
          onClick={handleClearFilter}
        >
          Limpar Filtro
          <Eraser className="text-white size-4 ml-2" />
        </Button>
        <div className="flex items-center justify-between pr-2.5 w-96 border-2 group group-focus:border-design-system-schemes-inverse-on-surface border-design-system-schemes-on-surface-variant bg-transparent rounded-lg">
          <Input
            className="bg-transparent"
            placeholder="Pesquise pelo nome do projeto..."
            value={projectNameFilter}
            onKeyDown={handleKeyDownOnSearchInput}
            onChange={handleOnChangeFilterProjectName}
            disabled={isFetchingProjects}
            ref={searchInputRef}
          />
          <Search className="text-design-system-schemes-on-surface-variant size-5" />
        </div>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        {isFetchingProjects && (
          <div className="text-center flex justify-center items-center flex-col gap-4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            {/* <p className="text-white/40 text-xl">Carregando Projetos...</p> */}
            <RefreshCcw className="size-12 text-white/40 animate-spin rotate-180" />
          </div>
        )}
        {projects.length === 0 && !isFetchingProjects && (
          <div className="text-center flex justify-center items-center flex-col gap-4">
            <p className="text-white/40 text-xl">
              Não há projetos cadastrados ainda
            </p>
            <Tray className="size-12 text-white/40" weight="fill" />
          </div>
        )}
        {projects.length > 0 && !isFetchingProjects && (
          <div className="grid grid-cols-4 md:grid-cols-3 max-md:grid-cols-2 sm:grid-cols-2 gap-4 place-content-center grid-rows-3">
            {projects.map((project) => {
              return (
                <Card
                  project={project}
                  onDeleteProject={handleDeleteProjectById}
                  key={project.id}
                />
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
