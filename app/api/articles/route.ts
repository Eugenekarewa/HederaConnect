import { type NextRequest, NextResponse } from "next/server"
import { getArticles } from "@/lib/data/articles"

export async function GET(request: NextRequest) {
  try {
    // Get query parameters
    const searchParams = request.nextUrl.searchParams
    const category = searchParams.get("category")
    const tag = searchParams.get("tag")
    const verified = searchParams.get("verified")

    // Get all articles
    let articles = await getArticles()

    // Apply filters if needed
    if (category) {
      articles = articles.filter((article) => article.tags.some((t) => t.toLowerCase() === category.toLowerCase()))
    }

    if (tag) {
      articles = articles.filter((article) => article.tags.some((t) => t.toLowerCase() === tag.toLowerCase()))
    }

    if (verified === "true") {
      articles = articles.filter((article) => article.isVerified)
    }

    return NextResponse.json({
      success: true,
      data: articles,
    })
  } catch (error) {
    console.error("Error fetching articles:", error)
    return NextResponse.json({ success: false, error: "Failed to fetch articles" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.title || !body.content) {
      return NextResponse.json({ success: false, error: "Title and content are required" }, { status: 400 })
    }

    // In a real application:
    // 1. Authenticate the user
    // 2. Save article to database
    // 3. Store content on IPFS/Arweave
    // 4. Create Hedera record

    // Mock response with created article
    return NextResponse.json(
      {
        success: true,
        data: {
          id: "new-article-id",
          title: body.title,
          // Other fields would be set here
          createdAt: new Date().toISOString(),
        },
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("Error creating article:", error)
    return NextResponse.json({ success: false, error: "Failed to create article" }, { status: 500 })
  }
}

