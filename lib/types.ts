export interface Author {
  id: string
  name: string
  username: string
  avatar?: string
}

export interface Article {
  id: string
  title: string
  summary: string
  content: string
  coverImage?: string
  publishedAt: string
  updatedAt?: string
  author: Author
  source?: {
    name: string
    url: string
  }
  tags: string[]
  likes: number
  shares: number
  comments: number
  views: number
  isVerified: boolean
}

