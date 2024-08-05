export type Project = {
  id: string

  name: string
  description?: string

  createdAt: number
  updatedAt: number
}

export type ProjectCreateParams = Omit<
  Project,
  'createdAt' | 'updatedAt' | 'id'
>
