import type { BaseModel } from './base'

export type Release = BaseModel & {
  releasedAt: number

  name: string
  description?: string

  issues: string[] // issues ids

  appVersion: string
  project: string // project id
}

export type ReleaseCreateParams = Omit<Release, keyof BaseModel>
