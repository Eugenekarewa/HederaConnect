import { HederaClient } from "./client"

export class TopicService {
  private client: HederaClient

  constructor(client: HederaClient) {
    this.client = client
  }

  async createArticleTopic(name: string, description: string) {
    return this.client.createTopic(name, description)
  }

  async submitArticleToTopic(
    topicId: string,
    articleData: {
      id: string
      title: string
      authorId: string
      contentHash: string
      timestamp: string
    },
  ) {
    // Convert article data to JSON string
    const message = JSON.stringify(articleData)

    // Submit to Hedera
    return this.client.submitMessageToTopic(topicId, message)
  }

  async verifyArticle(
    topicId: string,
    verificationData: {
      articleId: string
      verifierId: string
      status: "verified" | "rejected"
      reason?: string
      timestamp: string
    },
  ) {
    // Convert verification data to JSON string
    const message = JSON.stringify(verificationData)

    // Submit to Hedera
    return this.client.submitMessageToTopic(topicId, message)
  }
}

// Create and export a default topic service
export const topicService = new TopicService(new HederaClient({ networkType: "testnet" }))

