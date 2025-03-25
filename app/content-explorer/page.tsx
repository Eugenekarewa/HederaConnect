import MainHeader from "@/components/main-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ArrowRight,
  ExternalLink,
  Filter,
  Search,
  Twitter,
  Linkedin,
  FileText,
  MessageSquare,
  Youtube,
} from "lucide-react"
import Link from "next/link"
import { db } from "@/lib/db"

export default async function ContentExplorerPage({
  searchParams,
}: {
  searchParams: { platform?: string; tag?: string; q?: string }
}) {
  // Build the query based on search parameters
  const where = {}

  if (searchParams.platform) {
    where.platform = searchParams.platform
  }

  if (searchParams.tag) {
    where.tags = {
      has: searchParams.tag,
    }
  }

  if (searchParams.q) {
    where.OR = [
      { title: { contains: searchParams.q, mode: "insensitive" } },
      { summary: { contains: searchParams.q, mode: "insensitive" } },
      { content: { contains: searchParams.q, mode: "insensitive" } },
    ]
  }

  // Fetch content from the database
  const content = await db.scrapedContent.findMany({
    where,
    orderBy: {
      publishedAt: "desc",
    },
    take: 20,
  })

  // Get counts for each platform for the tabs
  const platformCounts = await db.scrapedContent.groupBy({
    by: ["platform"],
    _count: {
      id: true,
    },
  })

  const counts = {
    all: await db.scrapedContent.count(),
    twitter: 0,
    linkedin: 0,
    medium: 0,
    reddit: 0,
    youtube: 0,
  }

  platformCounts.forEach((item) => {
    counts[item.platform] = item._count.id
  })

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "twitter":
        return <Twitter className="h-4 w-4" />
      case "linkedin":
        return <Linkedin className="h-4 w-4" />
      case "medium":
        return <FileText className="h-4 w-4" />
      case "reddit":
        return <MessageSquare className="h-4 w-4" />
      case "youtube":
        return <Youtube className="h-4 w-4" />
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <MainHeader />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Content Explorer</h1>
          <p className="text-muted-foreground">
            Discover educational content about Hedera from across the web, all in one place.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <form>
              <Input
                type="search"
                name="q"
                placeholder="Search for Hedera content..."
                className="pl-8"
                defaultValue={searchParams.q || ""}
              />
            </form>
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        <Tabs defaultValue={searchParams.platform || "all"} className="mb-8">
          <TabsList className="w-full flex overflow-x-auto md:w-auto md:inline-flex">
            <TabsTrigger value="all" asChild>
              <Link href="/content-explorer">All Sources ({counts.all})</Link>
            </TabsTrigger>
            <TabsTrigger value="twitter" asChild>
              <Link href="/content-explorer?platform=twitter">Twitter ({counts.twitter})</Link>
            </TabsTrigger>
            <TabsTrigger value="linkedin" asChild>
              <Link href="/content-explorer?platform=linkedin">LinkedIn ({counts.linkedin})</Link>
            </TabsTrigger>
            <TabsTrigger value="medium" asChild>
              <Link href="/content-explorer?platform=medium">Medium ({counts.medium})</Link>
            </TabsTrigger>
            <TabsTrigger value="reddit" asChild>
              <Link href="/content-explorer?platform=reddit">Reddit ({counts.reddit})</Link>
            </TabsTrigger>
            <TabsTrigger value="youtube" asChild>
              <Link href="/content-explorer?platform=youtube">YouTube ({counts.youtube})</Link>
            </TabsTrigger>
          </TabsList>

          <TabsContent value={searchParams.platform || "all"} className="mt-6">
            {content.length > 0 ? (
              <div className="space-y-4">
                {content.map((item) => (
                  <Card key={item.id}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              {getPlatformIcon(item.platform)}
                              <span className="capitalize">{item.platform}</span>
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {new Date(item.publishedAt).toLocaleDateString()}
                            </span>
                          </div>

                          <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                          <p className="text-muted-foreground mb-3">{item.summary}</p>

                          <div className="flex items-center gap-2 mb-3">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={item.authorAvatar} alt={item.authorName} />
                              <AvatarFallback>{item.authorName.slice(0, 2)}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm">{item.authorName}</span>
                          </div>

                          <div className="flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col gap-2">
                          <Button variant="outline" size="sm" asChild>
                            <Link href={`/articles/imported-${item.id}`}>
                              <ArrowRight className="mr-2 h-3 w-3" />
                              Read More
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <a href={item.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-3 w-3" />
                              Original Source
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ) : (
              <Card>
                <CardContent className="p-12 text-center">
                  <p className="text-muted-foreground mb-4">No content found. Try adjusting your search criteria.</p>
                  <Button asChild>
                    <Link href="/admin/content-aggregation">Scrape New Content</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>
        </Tabs>
      </main>
      <footer className="bg-muted py-6">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} HederaConnect. Powered by Hedera Hashgraph.</p>
        </div>
      </footer>
    </div>
  )
}

