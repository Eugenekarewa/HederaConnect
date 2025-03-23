import { type NextRequest, NextResponse } from "next/server"
import { tokenService } from "@/lib/hedera/token-service"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate request
    if (!body.accountId || !body.amount) {
      return NextResponse.json({ success: false, error: "Account ID and amount are required" }, { status: 400 })
    }

    // Ensure amount is a positive number
    const amount = Number.parseFloat(body.amount)
    if (isNaN(amount) || amount <= 0) {
      return NextResponse.json({ success: false, error: "Amount must be a positive number" }, { status: 400 })
    }

    // Perform token transfer
    const result = await tokenService.distributeRewards(body.accountId, amount)

    return NextResponse.json({
      success: true,
      data: result,
    })
  } catch (error) {
    console.error("Error processing token transfer:", error)
    return NextResponse.json({ success: false, error: "Failed to process token transfer" }, { status: 500 })
  }
}

