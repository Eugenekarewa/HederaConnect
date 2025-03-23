import MainHeader from "@/components/main-header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { getArticleById } from "@/lib/data/articles"
import { Eye, Heart, MessageSquare, Share2, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default async function ArticlePage({ params }: { params: { id: string } }) {
  const article = await getArticleById(params.id)

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col">
        <MainHeader />
        <main className="flex-1 container mx-auto px-4 py-12 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Article not found</h1>
            <p className="text-muted-foreground mb-6">
              The article you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link href="/articles">Browse all articles</Link>
            </Button>
          </div>
        </main>
      </div>
    )
  }

  // Use a free stock image based on article ID
  const articleImages = [
    "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1639322537067-11072ba0a958?q=80&w=2832&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1639322537757-6edce9a71337?q=80&w=2832&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1639322538074-5400a9ab5319?q=80&w=2832&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1639322538135-1c12a4788b6c?q=80&w=2832&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1639322538451-2e4d7f4e1eec?q=80&w=2832&auto=format&fit=crop",
  ]

  const imageIndex = Number.parseInt(article.id) % articleImages.length
  const coverImage = articleImages[imageIndex]

  return (
    <div className="min-h-screen flex flex-col">
      <MainHeader />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Link href="/articles" className="text-sm text-muted-foreground hover:text-primary">
                Articles
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-sm">{article.title}</span>
            </div>

            <h1 className="text-3xl font-bold mb-4">{article.title}</h1>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center">
                <Avatar className="h-8 w-8 mr-2">
                  <AvatarImage src={article.author.avatar} alt={article.author.name} />
                  <AvatarFallback>{article.author.name.slice(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{article.author.name}</p>
                  <p className="text-xs text-muted-foreground">@{article.author.username}</p>
                </div>
              </div>

              <span className="text-muted-foreground text-sm flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {new Date(article.publishedAt).toLocaleDateString()}
              </span>

              <span className="text-muted-foreground text-sm flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                {article.views} views
              </span>

              {article.isVerified && <Badge variant="secondary">Verified</Badge>}
            </div>
          </div>

          <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
            <Image src={coverImage || "/placeholder.svg"} alt={article.title} fill className="object-cover" priority />
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {article.tags.map((tag) => (
              <Badge key={tag} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>

          <Separator className="mb-8" />

          <div className="flex flex-wrap gap-4 justify-between items-center mb-12">
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center">
                <Heart className="h-4 w-4 mr-2" />
                <span>{article.likes}</span>
              </Button>
              <Button variant="outline" className="flex items-center">
                <MessageSquare className="h-4 w-4 mr-2" />
                <span>{article.comments}</span>
              </Button>
              <Button variant="outline" className="flex items-center">
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>

            <div>
              <Button>Support Author</Button>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-xl font-bold mb-4">Comments ({article.comments})</h2>

            <Card className="p-4 mb-4">
              <textarea
                placeholder="Leave a comment..."
                className="w-full p-2 rounded bg-muted text-sm mb-2"
                rows={3}
              />
              <div className="flex justify-end">
                <Button>Comment</Button>
              </div>
            </Card>

            {/* Normally we would map through comments here */}
            <p className="text-center text-muted-foreground py-4">No comments yet. Be the first to comment!</p>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Placeholder for related articles */}
              <Card className="p-4 flex gap-4">
                <div className="relative h-20 w-20 shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1639322537067-11072ba0a958?q=80&w=2832&auto=format&fit=crop"
                    alt="Related article"
                    fill
                    className="rounded object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Introduction to Hedera Hashgraph</h3>
                  <p className="text-sm text-muted-foreground">
                    Learn the basics of Hedera's distributed ledger technology.
                  </p>
                </div>
              </Card>

              <Card className="p-4 flex gap-4">
                <div className="relative h-20 w-20 shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1639322537757-6edce9a71337?q=80&w=2832&auto=format&fit=crop"
                    alt="Related article"
                    fill
                    className="rounded object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Hedera Token Service (HTS) Guide</h3>
                  <p className="text-sm text-muted-foreground">
                    A comprehensive guide to creating and managing tokens on Hedera.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} HederaConnect. Powered by Hedera Hashgraph.</p>
        </div>
      </footer>
    </div>
  )
}

