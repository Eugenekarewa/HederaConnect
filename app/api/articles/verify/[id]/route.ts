import { type NextRequest, NextResponse } from "next/server"
import { topicService } from "@/lib/hedera/topic-service"

export async function POST(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const articleId = params.id
    const body = await request.json()

    // Validate request
    if (!body.verifierId || !body.status) {
      return NextResponse.json({ success: false, error: "Verifier ID and status are required" }, { status: 400 })
    }

    // Valid status values
    if (body.status !== "verified" && body.status !== "rejected") {
      return NextResponse.json({ success: false, error: "Status must be 'verified' or 'rejected'" }, { status: 400 })
    }

    // In a real implementation:
    // 1. Authenticate the verifier (admin/moderator)
    // 2. Get the article from the database
    // 3. Submit verification to Hedera

    // Create verification data
    const verificationData = {
      articleId,
      verifierId: body.verifierId,
      status: body.status,
      reason: body.reason || undefined,
      timestamp: new Date().toISOString(),
    }

    // Submit to Hedera - assuming we have a verification topic ID
    const result = await topicService.verifyArticle(
      "0.0.48620", // This would be a stored topic ID for verifications
      verificationData,
    )

    // In a real implementation, update the article verification status in the database

    return NextResponse.json({
      success: true,
      data: {
        articleId,
        status: body.status,
        transactionId: result.transactionId,
      },
    })
  } catch (error) {
    console.error("Error verifying article:", error)
    return NextResponse.json({ success: false, error: "Failed to verify article" }, { status: 500 })
  }
}

