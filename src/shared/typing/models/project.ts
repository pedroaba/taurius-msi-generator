import type { BaseModel } from './base'

export type Project = BaseModel & {
  name: string
  description?: string
}

export type ProjectCreateParams = Omit<Project, keyof BaseModel>
