"use server"

import { contentScraper, type ScrapedContent, type ScrapingOptions } from "../scraping/content-scraper"
import { db } from "../db"
import { revalidatePath } from "next/cache"

export async function scrapeContent(options: ScrapingOptions) {
  try {
    // Scrape content from specified platforms
    const scrapedContent = await contentScraper.scrapeFromPlatforms(options)

    console.log(`Scraped ${scrapedContent.length} items from ${options.platforms.join(", ")}`)

    // Save scraped content to database
    for (const content of scrapedContent) {
      await contentScraper.saveScrapedContent(content)
    }

    // Revalidate content explorer page
    revalidatePath("/content-explorer")

    return {
      success: true,
      data: scrapedContent,
    }
  } catch (error) {
    console.error("Error scraping content:", error)
    return {
      success: false,
      error: "Failed to scrape content",
    }
  }
}

export async function importScrapedContent(content: ScrapedContent) {
  try {
    // Save to database
    await contentScraper.saveScrapedContent(content)

    // Revalidate content explorer page
    revalidatePath("/content-explorer")

    return {
      success: true,
      data: {
        message: "Content imported successfully",
      },
    }
  } catch (error) {
    console.error("Error importing scraped content:", error)
    return {
      success: false,
      error: "Failed to import content",
    }
  }
}

export async function scheduleScraping(schedule: {
  frequency: "hourly" | "daily" | "weekly"
  platforms: Array<"twitter" | "linkedin" | "medium" | "reddit" | "youtube">
  keywords: string[]
}) {
  try {
    // Save the schedule to the database
    const newSchedule = await db.scrapingSchedule.create({
      data: {
        frequency: schedule.frequency,
        platforms: schedule.platforms,
        keywords: schedule.keywords,
        nextRunAt: getNextRunTime(schedule.frequency),
        isActive: true,
      },
    })

    return {
      success: true,
      data: newSchedule,
    }
  } catch (error) {
    console.error("Error scheduling scraping:", error)
    return {
      success: false,
      error: "Failed to schedule scraping",
    }
  }
}

// Helper function to calculate next run time based on frequency
function getNextRunTime(frequency: "hourly" | "daily" | "weekly"): Date {
  const now = new Date()

  switch (frequency) {
    case "hourly":
      now.setHours(now.getHours() + 1)
      break
    case "daily":
      now.setDate(now.getDate() + 1)
      now.setHours(8, 0, 0, 0) // 8:00 AM
      break
    case "weekly":
      now.setDate(now.getDate() + (7 - now.getDay())) // Next Monday
      now.setHours(8, 0, 0, 0) // 8:00 AM
      break
  }

  return now
}

// Function to get all saved content
export async function getSavedContent(options?: {
  platform?: string
  tag?: string
  limit?: number
  offset?: number
}) {
  try {
    const where = {}

    if (options?.platform) {
      where.platform = options.platform
    }

    if (options?.tag) {
      where.tags = {
        has: options.tag,
      }
    }

    const content = await db.scrapedContent.findMany({
      where,
      orderBy: {
        publishedAt: "desc",
      },
      take: options?.limit || 20,
      skip: options?.offset || 0,
    })

    return {
      success: true,
      data: content,
    }
  } catch (error) {
    console.error("Error getting saved content:", error)
    return {
      success: false,
      error: "Failed to get saved content",
    }
  }
}

