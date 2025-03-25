import MainHeader from "@/components/main-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Filter, ArrowRight, Hash, TrendingUp, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Mock topics data
const topics = [
  {
    id: "hts",
    name: "Hedera Token Service",
    description: "Learn about creating and managing tokens on the Hedera network",
    articleCount: 42,
    followers: 1250,
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop",
    trending: true,
  },
  {
    id: "hcs",
    name: "Hedera Consensus Service",
    description: "Explore Hedera's distributed consensus mechanism and applications",
    articleCount: 38,
    followers: 980,
    image: "https://images.unsplash.com/photo-1639322537067-11072ba0a958?q=80&w=2832&auto=format&fit=crop",
    trending: true,
  },
  {
    id: "smart-contracts",
    name: "Smart Contracts",
    description: "Developing and deploying smart contracts on Hedera",
    articleCount: 56,
    followers: 1890,
    image: "https://images.unsplash.com/photo-1639322537757-6edce9a71337?q=80&w=2832&auto=format&fit=crop",
    trending: false,
  },
  {
    id: "defi",
    name: "DeFi on Hedera",
    description: "Decentralized finance applications and use cases on Hedera",
    articleCount: 27,
    followers: 750,
    image: "https://images.unsplash.com/photo-1639322538074-5400a9ab5319?q=80&w=2832&auto=format&fit=crop",
    trending: true,
  },
  {
    id: "enterprise",
    name: "Enterprise Solutions",
    description: "How businesses are leveraging Hedera for enterprise applications",
    articleCount: 34,
    followers: 1120,
    image: "https://images.unsplash.com/photo-1639322538135-1c12a4788b6c?q=80&w=2832&auto=format&fit=crop",
    trending: false,
  },
  {
    id: "nfts",
    name: "NFTs",
    description: "Non-fungible tokens and digital collectibles on Hedera",
    articleCount: 29,
    followers: 870,
    image: "https://images.unsplash.com/photo-1639322538451-2e4d7f4e1eec?q=80&w=2832&auto=format&fit=crop",
    trending: true,
  },
  {
    id: "development",
    name: "Development",
    description: "Tools, SDKs, and resources for Hedera developers",
    articleCount: 65,
    followers: 2150,
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2670&auto=format&fit=crop",
    trending: false,
  },
  {
    id: "governance",
    name: "Governance",
    description: "Hedera's governance model and council updates",
    articleCount: 18,
    followers: 620,
    image: "https://images.unsplash.com/photo-1639322538135-1c12a4788b6c?q=80&w=2832&auto=format&fit=crop",
    trending: false,
  },
]

export default function TopicsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainHeader />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Topics</h1>
          <p className="text-muted-foreground">
            Explore educational content organized by topics related to Hedera Hashgraph.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input type="search" placeholder="Search topics..." className="pl-8" />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList>
            <TabsTrigger value="all">All Topics</TabsTrigger>
            <TabsTrigger value="trending">Trending</TabsTrigger>
            <TabsTrigger value="following">Following</TabsTrigger>
            <TabsTrigger value="recent">Recently Added</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topics.map((topic) => (
                <Card key={topic.id} className="overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                  <div className="relative h-40">
                    <Image src={topic.image || "/placeholder.svg"} alt={topic.name} fill className="object-cover" />
                    {topic.trending && (
                      <Badge variant="secondary" className="absolute top-2 right-2 flex items-center">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Trending
                      </Badge>
                    )}
                  </div>

                  <CardHeader className="p-4 pb-2">
                    <div className="flex items-center gap-2 mb-1">
                      <Hash className="h-4 w-4 text-primary" />
                      <CardTitle className="text-lg">{topic.name}</CardTitle>
                    </div>
                    <CardDescription>{topic.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="p-4 pt-0 pb-2 flex-grow">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mt-2">
                      <span>{topic.articleCount} articles</span>
                      <span>{topic.followers} followers</span>
                    </div>
                  </CardContent>

                  <CardFooter className="p-4 pt-2">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/topics/${topic.id}`}>
                        Explore Topic <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="trending" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topics
                .filter((topic) => topic.trending)
                .map((topic) => (
                  <Card key={topic.id} className="overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                    <div className="relative h-40">
                      <Image src={topic.image || "/placeholder.svg"} alt={topic.name} fill className="object-cover" />
                      <Badge variant="secondary" className="absolute top-2 right-2 flex items-center">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        Trending
                      </Badge>
                    </div>

                    <CardHeader className="p-4 pb-2">
                      <div className="flex items-center gap-2 mb-1">
                        <Hash className="h-4 w-4 text-primary" />
                        <CardTitle className="text-lg">{topic.name}</CardTitle>
                      </div>
                      <CardDescription>{topic.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="p-4 pt-0 pb-2 flex-grow">
                      <div className="flex items-center justify-between text-sm text-muted-foreground mt-2">
                        <span>{topic.articleCount} articles</span>
                        <span>{topic.followers} followers</span>
                      </div>
                    </CardContent>

                    <CardFooter className="p-4 pt-2">
                      <Button variant="outline" className="w-full" asChild>
                        <Link href={`/topics/${topic.id}`}>
                          Explore Topic <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>

          <TabsContent value="following" className="mt-6">
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">You need to be logged in to see your followed topics.</p>
              <Button asChild>
                <Link href="/login">Sign In</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="recent" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topics.slice(0, 3).map((topic) => (
                <Card key={topic.id} className="overflow-hidden flex flex-col hover:shadow-md transition-shadow">
                  <div className="relative h-40">
                    <Image src={topic.image || "/placeholder.svg"} alt={topic.name} fill className="object-cover" />
                    <Badge variant="secondary" className="absolute top-2 right-2 flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      New
                    </Badge>
                  </div>

                  <CardHeader className="p-4 pb-2">
                    <div className="flex items-center gap-2 mb-1">
                      <Hash className="h-4 w-4 text-primary" />
                      <CardTitle className="text-lg">{topic.name}</CardTitle>
                    </div>
                    <CardDescription>{topic.description}</CardDescription>
                  </CardHeader>

                  <CardContent className="p-4 pt-0 pb-2 flex-grow">
                    <div className="flex items-center justify-between text-sm text-muted-foreground mt-2">
                      <span>{topic.articleCount} articles</span>
                      <span>{topic.followers} followers</span>
                    </div>
                  </CardContent>

                  <CardFooter className="p-4 pt-2">
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/topics/${topic.id}`}>
                        Explore Topic <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
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

