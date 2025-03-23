"use client"

import Link from "next/link"
import { useState } from "react"
import { Search, Menu, X, User, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTheme } from "next-themes"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { setTheme } = useTheme()

  return (
    <header className="border-b sticky top-0 z-40 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold mr-2">HederaConnect</span>
            </Link>
            <nav className="hidden md:flex ml-10 space-x-8">
              <Link href="/articles" className="text-sm font-medium hover:text-primary">
                Articles
              </Link>
              <Link href="/content-explorer" className="text-sm font-medium hover:text-primary">
                Content Explorer
              </Link>
              <Link href="/topics" className="text-sm font-medium hover:text-primary">
                Topics
              </Link>
              <Link href="/rewards" className="text-sm font-medium hover:text-primary">
                Rewards
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-primary">
                About
              </Link>
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search articles..." className="w-[200px] pl-8" />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="icon" asChild>
              <Link href="/profile">
                <User className="h-5 w-5" />
                <span className="sr-only">Profile</span>
              </Link>
            </Button>

            <Button variant="default" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden p-4 border-t">
          <nav className="flex flex-col space-y-4 mb-4">
            <Link href="/articles" className="text-sm font-medium hover:text-primary">
              Articles
            </Link>
            <Link href="/content-explorer" className="text-sm font-medium hover:text-primary">
              Content Explorer
            </Link>
            <Link href="/topics" className="text-sm font-medium hover:text-primary">
              Topics
            </Link>
            <Link href="/rewards" className="text-sm font-medium hover:text-primary">
              Rewards
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
          </nav>
          <div className="flex flex-col space-y-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search articles..." className="w-full pl-8" />
            </div>
            <Button variant="default" className="w-full" asChild>
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}

