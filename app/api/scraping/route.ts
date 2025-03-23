import { type NextRequest, NextResponse } from "next/server"
import { contentScraper } from "@/lib/scraping/content-scraper"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate request
    if (!body.platforms || !Array.isArray(body.platforms) || body.platforms.length === 0) {
      return NextResponse.json({ success: false, error: "At least one platform must be specified" }, { status: 400 })
    }

    if (!body.keywords || !Array.isArray(body.keywords) || body.keywords.length === 0) {
      return NextResponse.json({ success: false, error: "At least one keyword must be specified" }, { status: 400 })
    }

    // Scrape content
    const scrapedContent = await contentScraper.scrapeFromPlatforms({
      platforms: body.platforms,
      keywords: body.keywords,
      timeframe: body.timeframe || "week",
      limit: body.limit || 20,
    })

    return NextResponse.json({
      success: true,
      data: scrapedContent,
    })
  } catch (error) {
    console.error("Error in scraping API:", error)
    return NextResponse.json({ success: false, error: "Failed to scrape content" }, { status: 500 })
  }
}

