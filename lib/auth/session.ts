import { randomUUID } from "crypto"
import { cookies } from "next/headers"

// In-memory session store (would be a database in production)
const sessions = new Map<string, { userId: string; createdAt: Date }>()

export async function createSession(userId: string) {
  const sessionId = randomUUID()
  const session = { userId, createdAt: new Date() }

  // Store session
  sessions.set(sessionId, session)

  return { id: sessionId, ...session }
}

export async function getSession() {
  const sessionId = cookies().get("session_id")?.value

  if (!sessionId) {
    return null
  }

  return sessions.get(sessionId) || null
}

export async function getUserFromSession() {
  const session = await getSession()

  if (!session) {
    return null
  }

  // In a real app, fetch user from database
  // return db.user.findUnique({ where: { id: session.userId } })

  // Mock user for demonstration
  return {
    id: session.userId,
    name: "Demo User",
    username: "demouser",
    email: "demo@example.com",
  }
}

