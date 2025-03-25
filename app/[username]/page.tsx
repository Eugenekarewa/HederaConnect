import MainHeader from "@/components/main-header"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  Edit,
  Settings,
  FileText,
  Heart,
  Share2,
  MessageSquare,
  CircleDollarSign,
  ExternalLink,
  Calendar,
  MapPin,
  LinkIcon,
  Twitter,
  Github,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"

// Mock user data - in a real app, this would come from a database
const mockUsers = {
  davidmwangi: {
    id: "user-123",
    name: "David Mwangi",
    username: "davidmwangi",
    bio: "Blockchain developer and educator focused on Hedera adoption in East Africa. Building decentralized solutions for real-world problems.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    location: "Nairobi, Kenya",
    website: "https://davidmwangi.dev",
    twitter: "davidmwangi",
    github: "davidmwangi",
    joinedDate: "January 2023",
    hederaAccountId: "0.0.12345",
    stats: {
      articles: 8,
      followers: 124,
      following: 56,
      points: 235,
      rewards: 42.5,
    },
  },
  sarahomondi: {
    id: "user-124",
    name: "Sarah Omondi",
    username: "sarahomondi",
    bio: "Head of Education at HederaConnect. Passionate about blockchain education and adoption in East Africa.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    location: "Kampala, Uganda",
    website: "https://sarahomondi.com",
    twitter: "sarahomondi",
    github: "sarahomondi",
    joinedDate: "February 2023",
    hederaAccountId: "0.0.12346",
    stats: {
      articles: 6,
      followers: 98,
      following: 42,
      points: 185,
      rewards: 32.8,
    },
  },
}

// Mock articles data
const userArticles = {
  davidmwangi: [
    {
      id: "1",
      title: "Understanding Hedera Consensus Service",
      summary:
        "A deep dive into Hedera's distributed consensus mechanism and how it achieves high throughput and security.",
      publishedAt: "2023-09-15T14:30:00Z",
      likes: 42,
      shares: 12,
      comments: 7,
      isVerified: true,
      coverImage: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop",
    },
    {
      id: "2",
      title: "Building DeFi Applications on Hedera",
      summary: "Learn how to create decentralized finance applications using Hedera Token Service and Smart Contracts.",
      publishedAt: "2023-09-10T09:15:00Z",
      likes: 38,
      shares: 15,
      comments: 9,
      isVerified: true,
      coverImage: "https://images.unsplash.com/photo-1639322537067-11072ba0a958?q=80&w=2832&auto=format&fit=crop",
    },
    {
      id: "4",
      title: "Introduction to Hedera Smart Contracts",
      summary: "A beginner's guide to deploying and interacting with smart contracts on the Hedera network.",
      publishedAt: "2023-08-28T16:20:00Z",
      likes: 56,
      shares: 23,
      comments: 12,
      isVerified: true,
      coverImage: "https://images.unsplash.com/photo-1639322538074-5400a9ab5319?q=80&w=2832&auto=format&fit=crop",
    },
  ],
  sarahomondi: [
    {
      id: "3",
      title: "Hedera for Enterprise: Supply Chain Use Cases",
      summary: "Explore how businesses are leveraging Hedera to improve supply chain transparency and efficiency.",
      publishedAt: "2023-09-05T11:45:00Z",
      likes: 27,
      shares: 8,
      comments: 3,
      isVerified: false,
      coverImage: "https://images.unsplash.com/photo-1639322537757-6edce9a71337?q=80&w=2832&auto=format&fit=crop",
    },
    {
      id: "5",
      title: "Hedera vs. Other Blockchain Networks: A Comparison",
      summary:
        "An objective analysis comparing Hedera Hashgraph's performance, security, and features to other leading blockchain platforms.",
      publishedAt: "2023-08-20T13:10:00Z",
      likes: 72,
      shares: 31,
      comments: 18,
      isVerified: true,
      coverImage: "https://images.unsplash.com/photo-1639322538135-1c12a4788b6c?q=80&w=2832&auto=format&fit=crop",
    },
  ],
}

// Mock activity data
const userActivity = {
  davidmwangi: [
    {
      id: "act-1",
      type: "article_published",
      title: "Understanding Hedera Consensus Service",
      date: "2023-09-15T14:30:00Z",
    },
    {
      id: "act-2",
      type: "article_liked",
      title: "Hedera vs. Other Blockchain Networks: A Comparison",
      date: "2023-09-12T10:15:00Z",
    },
    {
      id: "act-3",
      type: "reward_received",
      amount: 8.5,
      date: "2023-09-08T08:45:00Z",
    },
    {
      id: "act-4",
      type: "article_published",
      title: "Building DeFi Applications on Hedera",
      date: "2023-09-10T09:15:00Z",
    },
    {
      id: "act-5",
      type: "article_shared",
      title: "Getting Started with the Hedera JavaScript SDK",
      date: "2023-09-05T16:30:00Z",
    },
  ],
  sarahomondi: [
    {
      id: "act-6",
      type: "article_published",
      title: "Hedera for Enterprise: Supply Chain Use Cases",
      date: "2023-09-05T11:45:00Z",
    },
    {
      id: "act-7",
      type: "reward_received",
      amount: 6.2,
      date: "2023-09-01T09:30:00Z",
    },
    {
      id: "act-8",
      type: "article_published",
      title: "Hedera vs. Other Blockchain Networks: A Comparison",
      date: "2023-08-20T13:10:00Z",
    },
  ],
}

// Change the component to be async and await the params
export default async function ProfilePage({ params }: { params: { username: string } }) {
  // Await the params object before accessing its properties
  const paramsData = await Promise.resolve(params)
  const username = paramsData.username

  // Check if user exists
  if (!mockUsers[username]) {
    notFound()
  }

  const user = mockUsers[username]
  const articles = userArticles[username] || []
  const activity = userActivity[username] || []

  // In a real app, this would check against the logged-in user from a server component
  // For demo purposes, we'll hardcode it
  const isCurrentUser = username === "davidmwangi"

  return (
    <div className="min-h-screen flex flex-col">
      <MainHeader />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Profile Header */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <Avatar className="h-24 w-24 md:h-32 md:w-32">
                <AvatarImage src={user.avatar} alt={user.name} />
                <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
              </Avatar>

              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
                  <div>
                    <h1 className="text-3xl font-bold">{user.name}</h1>
                    <p className="text-muted-foreground">@{user.username}</p>
                  </div>

                  {isCurrentUser ? (
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/profile/edit">
                          <Edit className="h-4 w-4 mr-2" />
                          Edit Profile
                        </Link>
                      </Button>
                      <Button variant="ghost" size="icon" asChild>
                        <Link href="/settings">
                          <Settings className="h-4 w-4" />
                          <span className="sr-only">Settings</span>
                        </Link>
                      </Button>
                    </div>
                  ) : (
                    <Button>Follow</Button>
                  )}
                </div>

                <p className="mb-4">{user.bio}</p>

                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  {user.location && (
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{user.location}</span>
                    </div>
                  )}

                  {user.website && (
                    <div className="flex items-center">
                      <LinkIcon className="h-4 w-4 mr-1" />
                      <a href={user.website} target="_blank" rel="noopener noreferrer" className="hover:text-primary">
                        {user.website.replace(/^https?:\/\//, "")}
                      </a>
                    </div>
                  )}

                  {user.joinedDate && (
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>Joined {user.joinedDate}</span>
                    </div>
                  )}
                </div>

                <div className="flex flex-wrap gap-3">
                  {user.twitter && (
                    <a
                      href={`https://twitter.com/${user.twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  )}

                  {user.github && (
                    <a
                      href={`https://github.com/${user.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 mt-8">
              <div className="text-center">
                <div className="font-bold">{user.stats.articles}</div>
                <div className="text-sm text-muted-foreground">Articles</div>
              </div>

              <div className="text-center">
                <div className="font-bold">{user.stats.followers}</div>
                <div className="text-sm text-muted-foreground">Followers</div>
              </div>

              <div className="text-center">
                <div className="font-bold">{user.stats.following}</div>
                <div className="text-sm text-muted-foreground">Following</div>
              </div>

              <div className="text-center">
                <div className="font-bold">{user.stats.points}</div>
                <div className="text-sm text-muted-foreground">Points</div>
              </div>

              <div className="text-center">
                <div className="font-bold">{user.stats.rewards} ℏ</div>
                <div className="text-sm text-muted-foreground">Rewards</div>
              </div>
            </div>
          </div>

          <Separator className="mb-8" />

          {/* Profile Content */}
          <Tabs defaultValue="articles">
            <TabsList className="mb-8">
              <TabsTrigger value="articles">Articles</TabsTrigger>
              <TabsTrigger value="activity">Activity</TabsTrigger>
              <TabsTrigger value="rewards">Rewards</TabsTrigger>
            </TabsList>

            <TabsContent value="articles">
              <div className="mb-6 flex justify-between items-center">
                <h2 className="text-xl font-bold">Published Articles</h2>
                {isCurrentUser && (
                  <Button asChild>
                    <Link href="/articles/new">
                      <FileText className="h-4 w-4 mr-2" />
                      New Article
                    </Link>
                  </Button>
                )}
              </div>

              {articles.length > 0 ? (
                <div className="space-y-6">
                  {articles.map((article) => (
                    <Card key={article.id} className="overflow-hidden">
                      <div className="flex flex-col md:flex-row">
                        <div className="relative h-48 md:h-auto md:w-48 shrink-0">
                          <Image
                            src={article.coverImage || "/placeholder.svg"}
                            alt={article.title}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="p-6 flex-1">
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="text-xl font-bold mb-2">
                                <Link href={`/articles/${article.id}`} className="hover:text-primary">
                                  {article.title}
                                </Link>
                              </h3>
                              <p className="text-muted-foreground mb-4">{article.summary}</p>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <span className="mr-4">{new Date(article.publishedAt).toLocaleDateString()}</span>
                                {article.isVerified && <Badge variant="secondary">Verified</Badge>}
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-4 mt-4">
                            <div className="flex items-center text-muted-foreground">
                              <Heart className="h-4 w-4 mr-1" />
                              <span>{article.likes}</span>
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <MessageSquare className="h-4 w-4 mr-1" />
                              <span>{article.comments}</span>
                            </div>
                            <div className="flex items-center text-muted-foreground">
                              <Share2 className="h-4 w-4 mr-1" />
                              <span>{article.shares}</span>
                            </div>
                            <div className="ml-auto">
                              <Button variant="ghost" size="sm" asChild>
                                <Link href={`/articles/${article.id}`}>
                                  <ExternalLink className="h-4 w-4 mr-1" />
                                  View
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-muted-foreground mb-4">No articles published yet.</p>
                    {isCurrentUser && (
                      <Button asChild>
                        <Link href="/articles/new">
                          <FileText className="h-4 w-4 mr-2" />
                          Write Your First Article
                        </Link>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="activity">
              <h2 className="text-xl font-bold mb-6">Recent Activity</h2>

              {activity.length > 0 ? (
                <div className="space-y-4">
                  {activity.map((item) => (
                    <Card key={item.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center gap-4">
                          <div className="bg-primary/10 w-10 h-10 rounded-full flex items-center justify-center shrink-0">
                            {item.type === "article_published" && <FileText className="h-5 w-5 text-primary" />}
                            {item.type === "article_liked" && <Heart className="h-5 w-5 text-primary" />}
                            {item.type === "article_shared" && <Share2 className="h-5 w-5 text-primary" />}
                            {item.type === "reward_received" && <CircleDollarSign className="h-5 w-5 text-primary" />}
                          </div>

                          <div className="flex-1">
                            {item.type === "article_published" && (
                              <p>
                                Published an article:{" "}
                                <Link href={`/articles/${item.id}`} className="font-medium hover:text-primary">
                                  {item.title}
                                </Link>
                              </p>
                            )}

                            {item.type === "article_liked" && (
                              <p>
                                Liked an article:{" "}
                                <Link href={`/articles/${item.id}`} className="font-medium hover:text-primary">
                                  {item.title}
                                </Link>
                              </p>
                            )}

                            {item.type === "article_shared" && (
                              <p>
                                Shared an article:{" "}
                                <Link href={`/articles/${item.id}`} className="font-medium hover:text-primary">
                                  {item.title}
                                </Link>
                              </p>
                            )}

                            {item.type === "reward_received" && (
                              <p>
                                Received <span className="font-medium">{item.amount} ℏ</span> in rewards
                              </p>
                            )}

                            <p className="text-sm text-muted-foreground">
                              {new Date(item.date).toLocaleDateString()} at {new Date(item.date).toLocaleTimeString()}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card>
                  <CardContent className="p-8 text-center">
                    <p className="text-muted-foreground">No recent activity.</p>
                  </CardContent>
                </Card>
              )}
            </TabsContent>

            <TabsContent value="rewards">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Total Rewards</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{user.stats.rewards} ℏ</div>
                    <p className="text-xs text-muted-foreground">From {user.stats.articles} articles</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Current Points</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{user.stats.points}</div>
                    <p className="text-xs text-muted-foreground">65 more to next tier</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-sm font-medium">Hedera Account</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-lg font-mono">{user.hederaAccountId}</div>
                    <Button variant="link" size="sm" className="h-auto p-0 text-xs" asChild>
                      <a
                        href={`https://hashscan.io/mainnet/account/${user.hederaAccountId}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View on HashScan
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Reward History</CardTitle>
                  <CardDescription>Earned rewards from content contributions</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Weekly Reward Distribution</div>
                        <div className="text-sm text-muted-foreground">September 15, 2023</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">+ 8.5 ℏ</div>
                        <div className="text-xs text-muted-foreground">From 42 engagement points</div>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Featured Article Bonus</div>
                        <div className="text-sm text-muted-foreground">September 10, 2023</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">+ 15.0 ℏ</div>
                        <div className="text-xs text-muted-foreground">
                          For "Understanding Hedera Consensus Service"
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Weekly Reward Distribution</div>
                        <div className="text-sm text-muted-foreground">September 8, 2023</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">+ 7.2 ℏ</div>
                        <div className="text-xs text-muted-foreground">From 36 engagement points</div>
                      </div>
                    </div>

                    <Separator />

                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Weekly Reward Distribution</div>
                        <div className="text-sm text-muted-foreground">September 1, 2023</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">+ 6.8 ℏ</div>
                        <div className="text-xs text-muted-foreground">From 34 engagement points</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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

