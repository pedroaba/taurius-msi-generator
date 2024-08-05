import { randomUUID } from 'node:crypto'

import { type Either, left, right } from '@main/@core/either'
import { store } from '@main/store'
import { z } from 'zod'

import type { Project } from '@/shared/typing/models/project'

const projectCreateSchema = z.object({
  name: z
    .string({
      required_error: 'É necessário inserir o nome do projeto',
    })
    .min(5, {
      message:
        'É necessário que o projeto tenha no mínimo 5 caracteres no nome',
    })
    .transform((name) => name.trim())
    .refine((name) => name.length > 5, {
      message:
        'É necessário que o projeto tenha no mínimo 5 caracteres no nome',
    }),
  description: z.string().optional().default(''),
})

type ProjectCreateSchema = z.infer<typeof projectCreateSchema>

type ProjectCreateResponse = Either<
  Partial<Record<keyof ProjectCreateSchema, string[] | undefined>>,
  Record<'id', string>
>

type ProjectFetchResponse = Either<null, Record<'projects', Project[]>>

export class ProjectApi {
  static async create(
    data: ProjectCreateSchema,
  ): Promise<ProjectCreateResponse> {
    const project = projectCreateSchema.safeParse(data)
    if (project.error) {
      const flattenErrors = project.error.flatten().fieldErrors

      return left(flattenErrors)
    }

    const projectId = randomUUID()
    const { name, description } = project.data
    store.set(`projects.${projectId}`, {
      name,
      description,
      id: projectId,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    })

    return right({
      id: projectId,
    })
  }

  static async fetch(projectName: string): Promise<ProjectFetchResponse> {
    const projects = store.get('projects')
    const projectList = Object.values(projects).filter((project) =>
      project.name.toLowerCase().includes(projectName.toLowerCase().trim()),
    )

    return right({
      projects: projectList,
    })
  }

  static async delete(projectId: string): Promise<void> {
    // @ts-expect-error (https://github.com/sindresorhus/electron-store/issues/196)
    store.delete(`projects.${projectId}`)
  }
}
