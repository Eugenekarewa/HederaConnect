"use server"

import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { hashPassword, comparePasswords } from "@/lib/auth/password"
import { createSession } from "@/lib/auth/session"

interface LoginData {
  email: string
  password: string
}

interface RegisterData {
  name: string
  username: string
  email: string
  password: string
}

export async function loginUser(data: LoginData) {
  try {
    // In a real app, this would query the database
    // For now, we'll simulate a successful login with mock data

    // Simulate database query
    // const user = await db.user.findUnique({ where: { email: data.email } })

    // Mock user for demonstration
    const mockUser = {
      id: "user-123",
      email: "demo@example.com",
      passwordHash: await hashPassword("password123"),
      name: "Demo User",
      username: "demouser",
    }

    // Check if user exists and password matches
    if (data.email === mockUser.email && (await comparePasswords(data.password, mockUser.passwordHash))) {
      // Create session
      const session = await createSession(mockUser.id)

      // Set session cookie
      cookies().set("session_id", session.id, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7, // 1 week
        path: "/",
      })

      return { success: true, userId: mockUser.id }
    }

    return { success: false, error: "Invalid email or password" }
  } catch (error) {
    console.error("Login error:", error)
    return { success: false, error: "An error occurred during login" }
  }
}

export async function registerUser(data: RegisterData) {
  try {
    // Validate input
    if (!data.name || !data.username || !data.email || !data.password) {
      return { success: false, error: "All fields are required" }
    }

    // In a real app, check if username or email already exists
    // const existingUser = await db.user.findFirst({
    //   where: { OR: [{ email: data.email }, { username: data.username }] },
    // })

    // if (existingUser) {
    //   return { success: false, error: "Email or username already in use" }
    // }

    // Hash password
    const passwordHash = await hashPassword(data.password)

    // Create user in database
    // const newUser = await db.user.create({
    //   data: {
    //     name: data.name,
    //     username: data.username,
    //     email: data.email,
    //     passwordHash,
    //   },
    // })

    // Mock user creation
    const newUser = {
      id: "user-" + Date.now(),
      name: data.name,
      username: data.username,
      email: data.email,
    }

    // Create session
    const session = await createSession(newUser.id)

    // Set session cookie
    cookies().set("session_id", session.id, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    })

    return { success: true, userId: newUser.id }
  } catch (error) {
    console.error("Registration error:", error)
    return { success: false, error: "An error occurred during registration" }
  }
}

export async function logoutUser() {
  // Clear session cookie
  cookies().delete("session_id")

  // Revalidate paths that might show user-specific data
  revalidatePath("/")
  revalidatePath("/dashboard")

  // Redirect to home page
  redirect("/")
}

