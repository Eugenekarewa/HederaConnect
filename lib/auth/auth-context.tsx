"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { useRouter } from "next/navigation"

type User = {
  id: string
  name: string
  username: string
  email: string
  avatar?: string
} | null

type AuthContextType = {
  user: User
  isLoading: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  register: (data: { name: string; username: string; email: string; password: string }) => Promise<{
    success: boolean
    error?: string
  }>
  logout: () => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  // Check if user is logged in on initial load
  useEffect(() => {
    async function loadUserFromSession() {
      try {
        // In a real app, this would make an API call to verify the session
        const storedUser = localStorage.getItem("user")
        if (storedUser) {
          setUser(JSON.parse(storedUser))
        }
      } catch (error) {
        console.error("Failed to load user session:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadUserFromSession()
  }, [])

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true)

      // In a real app, this would make an API call to your backend
      // For demo purposes, we'll use mock data

      // Mock successful login for demo@example.com/password123
      if (email === "demo@example.com" && password === "password123") {
        const userData = {
          id: "user-123",
          name: "David Mwangi",
          username: "davidmwangi",
          email: "demo@example.com",
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
        }

        // Save user data to localStorage (in a real app, this would be a secure HTTP-only cookie)
        localStorage.setItem("user", JSON.stringify(userData))
        setUser(userData)

        return { success: true }
      }

      return { success: false, error: "Invalid email or password" }
    } catch (error) {
      console.error("Login error:", error)
      return { success: false, error: "An unexpected error occurred" }
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (data: { name: string; username: string; email: string; password: string }) => {
    try {
      setIsLoading(true)

      // In a real app, this would make an API call to your backend
      // For demo purposes, we'll simulate a successful registration

      const userData = {
        id: `user-${Date.now()}`,
        name: data.name,
        username: data.username,
        email: data.email,
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
      }

      // Save user data to localStorage (in a real app, this would be a secure HTTP-only cookie)
      localStorage.setItem("user", JSON.stringify(userData))
      setUser(userData)

      return { success: true }
    } catch (error) {
      console.error("Registration error:", error)
      return { success: false, error: "An unexpected error occurred" }
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    // Clear user data from localStorage
    localStorage.removeItem("user")
    setUser(null)

    // Redirect to home page
    router.push("/")
  }

  return <AuthContext.Provider value={{ user, isLoading, login, register, logout }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

