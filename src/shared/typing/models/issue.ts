import type { BaseModel } from './base'

export type Issue = BaseModel & {
  name: string
  activities: string
}

export type IssueCreateParams = Omit<Issue, keyof BaseModel>
