import { db } from "../db"

export interface ScrapedContent {
  title: string
  summary: string
  content: string
  url: string
  platform: string
  author: {
    name: string
    profileUrl?: string
    avatar?: string
  }
  publishedAt: string
  tags: string[]
  imageUrl?: string
}

export interface ScrapingOptions {
  platforms: Array<"twitter" | "linkedin" | "medium" | "reddit" | "youtube">
  keywords: string[]
  timeframe?: "day" | "week" | "month" | "all"
  limit?: number
}

export class ContentScraper {
  async scrapeFromPlatforms(options: ScrapingOptions): Promise<ScrapedContent[]> {
    const results: ScrapedContent[] = []

    // Process each platform in parallel
    const platformPromises = options.platforms.map((platform) =>
      this.scrapeFromPlatform(platform, options.keywords, options.timeframe, options.limit),
    )

    const platformResults = await Promise.all(platformPromises)

    // Combine results from all platforms
    for (const platformResult of platformResults) {
      results.push(...platformResult)
    }

    return results
  }

  private async scrapeFromPlatform(
    platform: string,
    keywords: string[],
    timeframe?: string,
    limit?: number,
  ): Promise<ScrapedContent[]> {
    console.log(`Scraping from ${platform} with keywords: ${keywords.join(", ")}`)

    switch (platform) {
      case "twitter":
        return this.scrapeFromTwitter(keywords, timeframe, limit)
      case "linkedin":
        return this.scrapeFromLinkedIn(keywords, timeframe, limit)
      case "medium":
        return this.scrapeFromMedium(keywords, timeframe, limit)
      case "reddit":
        return this.scrapeFromReddit(keywords, timeframe, limit)
      case "youtube":
        return this.scrapeFromYouTube(keywords, timeframe, limit)
      default:
        console.warn(`Unsupported platform: ${platform}`)
        return []
    }
  }

  private async scrapeFromTwitter(keywords: string[], timeframe?: string, limit = 10): Promise<ScrapedContent[]> {
    try {
      if (!process.env.TWITTER_BEARER_TOKEN) {
        throw new Error("Twitter API token not configured")
      }

      const query = encodeURIComponent(keywords.join(" OR "))
      const maxResults = limit || 10

      // Set timeframe parameter
      let timeParam = ""
      if (timeframe === "day") {
        // Last 24 hours
        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
        timeParam = `&start_time=${yesterday.toISOString()}`
      } else if (timeframe === "week") {
        // Last 7 days
        const lastWeek = new Date()
        lastWeek.setDate(lastWeek.getDate() - 7)
        timeParam = `&start_time=${lastWeek.toISOString()}`
      }

      const response = await fetch(
        `https://api.twitter.com/2/tweets/search/recent?query=${query}&max_results=${maxResults}${timeParam}&expansions=author_id&user.fields=name,username,profile_image_url`,
        {
          headers: {
            Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
          },
        },
      )

      if (!response.ok) {
        throw new Error(`Twitter API error: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()

      // Map users to a dictionary for easy lookup
      const users = {}
      if (data.includes && data.includes.users) {
        data.includes.users.forEach((user) => {
          users[user.id] = user
        })
      }

      // Transform the data to match our ScrapedContent interface
      return data.data.map((tweet) => {
        const user = users[tweet.author_id] || { name: "Unknown", username: "unknown" }

        return {
          title: tweet.text.length > 60 ? tweet.text.substring(0, 57) + "..." : tweet.text,
          summary: tweet.text,
          content: tweet.text,
          url: `https://twitter.com/${user.username}/status/${tweet.id}`,
          platform: "twitter",
          author: {
            name: user.name,
            profileUrl: `https://twitter.com/${user.username}`,
            avatar: user.profile_image_url,
          },
          publishedAt: tweet.created_at,
          tags: keywords,
        }
      })
    } catch (error) {
      console.error("Error scraping from Twitter:", error)
      return []
    }
  }

  private async scrapeFromLinkedIn(keywords: string[], timeframe?: string, limit = 10): Promise<ScrapedContent[]> {
    try {
      // LinkedIn doesn't offer a simple content search API for third-party developers
      // You would need to use LinkedIn Marketing API with proper authorization
      // This is a simplified example and would need to be expanded with proper OAuth flow

      if (!process.env.LINKEDIN_ACCESS_TOKEN) {
        throw new Error("LinkedIn API token not configured")
      }

      // For demonstration - in reality this would use the LinkedIn API
      const response = await fetch(
        `https://api.linkedin.com/v2/contentSearch?q=${encodeURIComponent(keywords.join(" OR "))}&count=${limit}`,
        {
          headers: {
            Authorization: `Bearer ${process.env.LINKEDIN_ACCESS_TOKEN}`,
          },
        },
      )

      if (!response.ok) {
        throw new Error(`LinkedIn API error: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()

      // Transform the data to match our ScrapedContent interface
      return data.elements.map((post) => ({
        title: post.title || (post.text?.length > 60 ? post.text.substring(0, 57) + "..." : post.text),
        summary: post.text || "",
        content: post.text || "",
        url: post.permalink,
        platform: "linkedin",
        author: {
          name: post.author.name,
          profileUrl: post.author.profileUrl,
          avatar: post.author.profileImageUrl,
        },
        publishedAt: post.created.time,
        tags: keywords,
        imageUrl: post.thumbnailUrl,
      }))
    } catch (error) {
      console.error("Error scraping from LinkedIn:", error)
      return []
    }
  }

  private async scrapeFromMedium(keywords: string[], timeframe?: string, limit = 10): Promise<ScrapedContent[]> {
    try {
      // Medium doesn't have an official API for content search
      // We can use RSS feeds for tags or publications

      const results: ScrapedContent[] = []

      // For each keyword, try to fetch the RSS feed for that tag
      for (const keyword of keywords) {
        try {
          const response = await fetch(`https://medium.com/feed/tag/${encodeURIComponent(keyword.toLowerCase())}`)

          if (!response.ok) {
            continue
          }

          const xmlText = await response.text()

          // Parse XML (in a real implementation, use a proper XML parser)
          // This is simplified for demonstration
          const parser = new DOMParser()
          const xmlDoc = parser.parseFromString(xmlText, "text/xml")

          const items = xmlDoc.querySelectorAll("item")

          for (let i = 0; i < Math.min(items.length, limit); i++) {
            const item = items[i]

            const title = item.querySelector("title")?.textContent || ""
            const link = item.querySelector("link")?.textContent || ""
            const pubDate = item.querySelector("pubDate")?.textContent || ""
            const description = item.querySelector("description")?.textContent || ""
            const creator = item.querySelector("dc:creator")?.textContent || "Unknown Author"

            // Extract image from content if available
            const content = item.querySelector("content:encoded")?.textContent || ""
            const imgMatch = content.match(/<img[^>]+src="([^">]+)"/)
            const imageUrl = imgMatch ? imgMatch[1] : undefined

            results.push({
              title,
              summary: description,
              content: content,
              url: link,
              platform: "medium",
              author: {
                name: creator,
                profileUrl: `https://medium.com/@${creator.replace(/\s+/g, "").toLowerCase()}`,
              },
              publishedAt: new Date(pubDate).toISOString(),
              tags: [keyword],
              imageUrl,
            })
          }
        } catch (error) {
          console.error(`Error fetching Medium RSS for keyword ${keyword}:`, error)
        }
      }

      return results
    } catch (error) {
      console.error("Error scraping from Medium:", error)
      return []
    }
  }

  private async scrapeFromReddit(keywords: string[], timeframe?: string, limit = 10): Promise<ScrapedContent[]> {
    try {
      // Reddit has a public API that doesn't require authentication for read-only operations

      // Convert timeframe to Reddit's time parameter
      let t = "week" // default
      if (timeframe === "day") t = "day"
      else if (timeframe === "week") t = "week"
      else if (timeframe === "month") t = "month"
      else if (timeframe === "all") t = "all"

      const results: ScrapedContent[] = []

      // For each keyword, search Reddit
      for (const keyword of keywords) {
        try {
          const response = await fetch(
            `https://www.reddit.com/search.json?q=${encodeURIComponent(keyword)}&sort=relevance&t=${t}&limit=${limit}`,
          )

          if (!response.ok) {
            throw new Error(`Reddit API error: ${response.status} ${response.statusText}`)
          }

          const data = await response.json()

          for (const post of data.data.children) {
            const postData = post.data

            // Skip non-text posts
            if (postData.is_video || postData.is_gallery) continue

            results.push({
              title: postData.title,
              summary: postData.selftext.substring(0, 200) + (postData.selftext.length > 200 ? "..." : ""),
              content: postData.selftext,
              url: `https://www.reddit.com${postData.permalink}`,
              platform: "reddit",
              author: {
                name: postData.author,
                profileUrl: `https://www.reddit.com/user/${postData.author}`,
              },
              publishedAt: new Date(postData.created_utc * 1000).toISOString(),
              tags: [keyword, ...(postData.link_flair_text ? [postData.link_flair_text] : [])],
              imageUrl:
                postData.thumbnail !== "self" && postData.thumbnail !== "default" ? postData.thumbnail : undefined,
            })
          }
        } catch (error) {
          console.error(`Error searching Reddit for keyword ${keyword}:`, error)
        }
      }

      return results
    } catch (error) {
      console.error("Error scraping from Reddit:", error)
      return []
    }
  }

  private async scrapeFromYouTube(keywords: string[], timeframe?: string, limit = 10): Promise<ScrapedContent[]> {
    try {
      if (!process.env.YOUTUBE_API_KEY) {
        throw new Error("YouTube API key not configured")
      }

      // Convert timeframe to YouTube's publishedAfter parameter
      let publishedAfter = ""
      if (timeframe === "day") {
        const yesterday = new Date()
        yesterday.setDate(yesterday.getDate() - 1)
        publishedAfter = `&publishedAfter=${yesterday.toISOString()}`
      } else if (timeframe === "week") {
        const lastWeek = new Date()
        lastWeek.setDate(lastWeek.getDate() - 7)
        publishedAfter = `&publishedAfter=${lastWeek.toISOString()}`
      } else if (timeframe === "month") {
        const lastMonth = new Date()
        lastMonth.setMonth(lastMonth.getMonth() - 1)
        publishedAfter = `&publishedAfter=${lastMonth.toISOString()}`
      }

      const query = encodeURIComponent(keywords.join(" OR "))
      const maxResults = limit || 10

      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&maxResults=${maxResults}${publishedAfter}&type=video&key=${process.env.YOUTUBE_API_KEY}`,
      )

      if (!response.ok) {
        throw new Error(`YouTube API error: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()

      return data.items.map((item) => ({
        title: item.snippet.title,
        summary: item.snippet.description,
        content: item.snippet.description,
        url: `https://www.youtube.com/watch?v=${item.id.videoId}`,
        platform: "youtube",
        author: {
          name: item.snippet.channelTitle,
          profileUrl: `https://www.youtube.com/channel/${item.snippet.channelId}`,
        },
        publishedAt: item.snippet.publishedAt,
        tags: keywords,
        imageUrl: item.snippet.thumbnails.high.url,
      }))
    } catch (error) {
      console.error("Error scraping from YouTube:", error)
      return []
    }
  }

  // Method to save scraped content to the database
  async saveScrapedContent(content: ScrapedContent) {
    try {
      // Check if content with this URL already exists
      const existing = await db.scrapedContent.findUnique({
        where: { url: content.url },
      })

      if (existing) {
        // Update existing content
        return await db.scrapedContent.update({
          where: { id: existing.id },
          data: {
            title: content.title,
            summary: content.summary,
            content: content.content,
            authorName: content.author.name,
            authorProfileUrl: content.author.profileUrl,
            authorAvatar: content.author.avatar,
            publishedAt: new Date(content.publishedAt),
            tags: content.tags,
            imageUrl: content.imageUrl,
            updatedAt: new Date(),
          },
        })
      } else {
        // Create new content
        return await db.scrapedContent.create({
          data: {
            title: content.title,
            summary: content.summary,
            content: content.content,
            url: content.url,
            platform: content.platform,
            authorName: content.author.name,
            authorProfileUrl: content.author.profileUrl,
            authorAvatar: content.author.avatar,
            publishedAt: new Date(content.publishedAt),
            tags: content.tags,
            imageUrl: content.imageUrl,
          },
        })
      }
    } catch (error) {
      console.error("Error saving scraped content to database:", error)
      throw error
    }
  }
}

// Create and export a default scraper instance
export const contentScraper = new ContentScraper()

