import * as PrimitiveTooltip from '@radix-ui/react-tooltip'
import { Button } from '@renderer/components/ui/button'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@renderer/components/ui/tooltip'
import dayjs from 'dayjs'
import { Trash } from 'lucide-react'

import type { Project } from '@/shared/typing/models/project'

interface CardProps {
  project: Project
  onDeleteProject?: (projectId: string) => Promise<void>
}

export function Card({ project, onDeleteProject = async () => {} }: CardProps) {
  const createdAtFormattedDate = dayjs(new Date(project.createdAt)).format(
    'YYYY-MM-DD HH:mm:ss',
  )

  const updatedAtFormattedDate = dayjs(new Date(project.updatedAt)).format(
    'YYYY-MM-DD HH:mm:ss',
  )

  const projectDescription = project.description
    ? project.description
    : 'Não tem descrição.'

  return (
    <div className="space-y-4 min-w-64 min-h-52 max-w-full bg-zinc-700 p-4 justify-between flex-col rounded-md group relative">
      <div className="flex justify-between gap-4 w-full">
        <div className="flex gap-4 w-full">
          <div className="flex items-center justify-center min-w-10 w-10 h-10 bg-slate-400/30 rounded">
            <span className="uppercase text-white font-bold">
              {project.name.at(0)}
            </span>
          </div>
          <p className="text-white/90 capitalize text-sm truncate">
            {project.name}
          </p>
        </div>
        <Button
          variant="ghost"
          className="ml-auto hover:bg-transparent hover:cursor-pointer hidden group-hover:flex absolute top-2 right-2"
          size="sm"
          onClick={() => onDeleteProject(project.id)}
        >
          <Trash
            className="size-4 text-red-400 stroke-2 hover:fill-red-400 hover:text-white"
            strokeWidth={4}
          />
        </Button>
      </div>
      <TooltipProvider skipDelayDuration={0} delayDuration={300}>
        <Tooltip>
          <TooltipTrigger asChild>
            <div className="space-y-3 max-h-52 line-clamp-6">
              <p className="text-xs text-white/55 line-clamp-6">
                {projectDescription}
              </p>
            </div>
          </TooltipTrigger>

          <TooltipContent
            sideOffset={10}
            align="start"
            className="bg-gray-400 border-none space-y-2"
          >
            <div className="max-w-96 text-black font-bold text-xs ">
              <p className="">{projectDescription}</p>
            </div>
            <PrimitiveTooltip.Arrow className="fill-gray-400" />
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <div className="text-xs text-white/40 flex flex-col">
        <span>Criado em: {createdAtFormattedDate}</span>
        <span>Ultima atualização: {updatedAtFormattedDate}</span>
      </div>
    </div>
  )
}
