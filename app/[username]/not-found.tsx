import MainHeader from "@/components/main-header"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function UserNotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainHeader />
      <main className="flex-1 container mx-auto px-4 py-12 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">User not found</h1>
          <p className="text-muted-foreground mb-6">The user you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link href="/">Return to home page</Link>
          </Button>
        </div>
      </main>
    </div>
  )
}

