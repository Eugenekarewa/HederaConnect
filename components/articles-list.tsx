"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart, MessageSquare, Share2, MoreHorizontal } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { getArticles } from "@/lib/data/articles"
import type { Article } from "@/lib/types"

export default function ArticlesList() {
  const [articles, setArticles] = useState<Article[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadArticles() {
      try {
        const data = await getArticles()
        setArticles(data)
      } catch (error) {
        console.error("Failed to load articles:", error)
      } finally {
        setIsLoading(false)
      }
    }

    loadArticles()
  }, [])

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(6)].map((_, i) => (
          <Card key={i} className="animate-pulse">
            <div className="h-48 bg-muted rounded-t-lg" />
            <CardContent className="p-4">
              <div className="h-4 bg-muted rounded mb-2" />
              <div className="h-4 bg-muted rounded w-3/4" />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (!articles.length) {
    return (
      <div className="text-center py-12">
        <p className="text-xl text-muted-foreground mb-4">No articles found</p>
        <Button asChild>
          <Link href="/articles/new">Submit the first article</Link>
        </Button>
      </div>
    )
  }

  // Replace placeholder images with free stock images
  const articleImages = [
    "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1639322537067-11072ba0a958?q=80&w=2832&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1639322537757-6edce9a71337?q=80&w=2832&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1639322538074-5400a9ab5319?q=80&w=2832&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1639322538135-1c12a4788b6c?q=80&w=2832&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1639322538451-2e4d7f4e1eec?q=80&w=2832&auto=format&fit=crop",
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <Card key={article.id} className="overflow-hidden flex flex-col hover:shadow-md transition-shadow">
          <div className="relative h-48">
            <Image
              src={articleImages[index % articleImages.length] || "/placeholder.svg"}
              alt={article.title}
              fill
              className="object-cover"
            />
            {article.isVerified && (
              <Badge variant="secondary" className="absolute top-2 right-2">
                Verified
              </Badge>
            )}
          </div>

          <CardHeader className="p-4 pb-0">
            <div className="flex items-start justify-between">
              <Link href={`/articles/${article.id}`} className="group">
                <h3 className="font-bold text-lg group-hover:text-primary transition-colors">{article.title}</h3>
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="-mt-1">
                    <MoreHorizontal className="h-5 w-5" />
                    <span className="sr-only">Options</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Save for later</DropdownMenuItem>
                  <DropdownMenuItem>Report</DropdownMenuItem>
                  <DropdownMenuItem>Hide</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{article.summary}</p>
          </CardHeader>

          <CardContent className="p-4 pt-2 flex-grow">
            <div className="flex flex-wrap gap-2 mt-2">
              {article.tags.map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>

          <CardFooter className="p-4 pt-0 border-t flex items-center justify-between">
            <div className="flex items-center">
              <Avatar className="h-6 w-6 mr-2">
                <AvatarImage src={article.author.avatar} alt={article.author.name} />
                <AvatarFallback>{article.author.name.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <span className="text-xs text-muted-foreground">{article.author.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Heart className="h-4 w-4" />
                <span className="sr-only">Like</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MessageSquare className="h-4 w-4" />
                <span className="sr-only">Comment</span>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

