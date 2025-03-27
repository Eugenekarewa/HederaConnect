"use client";

import Link from "next/link";
import { useState } from "react";
import { Search, Menu, X, Moon, Sun, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/lib/auth/auth-context";

export default function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { setTheme } = useTheme();
  const { user, logout } = useAuth();

  return (
    <header className="border-b sticky top-0 z-40 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <img
                src="/fe991a5a-de60-4b4d-805c-1a30a32552c0-removebg-preview.png"
                alt="photo"
                style={{ height: "60px", width: "60px" }}
              />
            </Link>
            <nav className="hidden md:flex ml-32 space-x-10">
              <Link
                href="/articles"
                className="text-sm font-medium hover:text-blue-600"
              >
                Articles
              </Link>
              <Link
                href="/content-explorer"
                className="text-sm font-medium hover:text-blue-600"
              >
                Content Explorer
              </Link>
              <Link
                href="/topics"
                className="text-sm font-medium hover:text-blue-600"
              >
                Topics
              </Link>
              {user && (
                <Link
                  href="/rewards"
                  className="text-sm font-medium hover:text-blue-600"
                >
                  Rewards
                </Link>
              )}
              <Link
                href="/about"
                className="text-sm font-medium hover:text-blue-600"
              >
                About
              </Link>
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="w-[200px] pl-8"
              />
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
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem asChild>
                    <Link href={`/${user.username}`}>Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard">Dashboard</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/settings">Settings</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={logout}
                    className="text-destructive"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button variant="default" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden p-4 border-t">
          <nav className="flex flex-col space-y-4 mb-4">
            <Link
              href="/articles"
              className="text-sm font-medium hover:text-primary"
            >
              Articles
            </Link>
            <Link
              href="/content-explorer"
              className="text-sm font-medium hover:text-primary"
            >
              Content Explorer
            </Link>
            <Link
              href="/topics"
              className="text-sm font-medium hover:text-primary"
            >
              Topics
            </Link>
            {user && (
              <Link
                href="/rewards"
                className="text-sm font-medium hover:text-primary"
              >
                Rewards
              </Link>
            )}
            <Link
              href="/about"
              className="text-sm font-medium hover:text-primary"
            >
              About
            </Link>
          </nav>
          <div className="flex flex-col space-y-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search articles..."
                className="w-full pl-8"
              />
            </div>
            {user ? (
              <div className="space-y-2">
                <div className="flex items-center gap-2 p-2 border rounded-md">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={user.avatar} alt={user.name} />
                    <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="font-medium">{user.name}</div>
                    <div className="text-xs text-muted-foreground">
                      @{user.username}
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/${user.username}`}>View Profile</Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/dashboard">Dashboard</Link>
                </Button>
                <Button
                  variant="destructive"
                  className="w-full"
                  onClick={logout}
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            ) : (
              <Button variant="default" className="w-full" asChild>
                <Link href="/login">Sign In</Link>
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
