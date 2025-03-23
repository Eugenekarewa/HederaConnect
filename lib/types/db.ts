// Database schema types

export interface User {
  id: string
  name: string
  username: string
  email: string
  avatar?: string
  hederaAccountId?: string
  createdAt: Date
  updatedAt: Date
}

export interface ArticleData {
  id: string
  title: string
  summary: string
  content: string
  coverImage?: string
  authorId: string
  sourceUrl?: string
  sourceName?: string
  ipfsHash?: string
  hederaMessageId?: string
  tags: string[]
  isVerified: boolean
  publishedAt: Date
  updatedAt?: Date
}

export interface UserReward {
  id: string
  userId: string
  amount: number
  points: number
  reason: string
  transactionId?: string
  createdAt: Date
}

export interface Engagement {
  id: string
  userId: string
  articleId: string
  type: "like" | "share" | "comment"
  pointsEarned: number
  createdAt: Date
}

