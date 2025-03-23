import MainHeader from "@/components/main-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Check, CircleDollarSign, Gem, Trophy } from "lucide-react"
import Link from "next/link"

export default function RewardsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <MainHeader />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Contributor Rewards</h1>
          <p className="text-muted-foreground">
            Earn rewards for sharing and creating educational content about Hedera.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Your Points</CardTitle>
              <Gem className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">135</div>
              <p className="text-xs text-muted-foreground">+12 points this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Rewards Earned</CardTitle>
              <CircleDollarSign className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24.5 ℏ</div>
              <p className="text-xs text-muted-foreground">From 5 articles</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Next Reward</CardTitle>
              <Trophy className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">15 ℏ</div>
              <div className="mt-2">
                <div className="flex justify-between mb-1 text-xs">
                  <span>135/200 points</span>
                  <span>65 to go</span>
                </div>
                <Progress value={67.5} className="h-2" />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Reward Activity</h2>
            <Button variant="outline" size="sm">
              View History
            </Button>
          </div>

          <Tabs defaultValue="earnings">
            <TabsList className="mb-6">
              <TabsTrigger value="earnings">Earnings</TabsTrigger>
              <TabsTrigger value="points">Points</TabsTrigger>
              <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
            </TabsList>

            <TabsContent value="earnings">
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4 flex justify-between items-center">
                    <div>
                      <div className="font-medium">Weekly Reward Distribution</div>
                      <div className="text-sm text-muted-foreground">July 15, 2023</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">+ 8.5 ℏ</div>
                      <div className="text-xs text-muted-foreground">From 42 engagement points</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 flex justify-between items-center">
                    <div>
                      <div className="font-medium">Weekly Reward Distribution</div>
                      <div className="text-sm text-muted-foreground">July 8, 2023</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">+ 6.2 ℏ</div>
                      <div className="text-xs text-muted-foreground">From 31 engagement points</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 flex justify-between items-center">
                    <div>
                      <div className="font-medium">Featured Article Bonus</div>
                      <div className="text-sm text-muted-foreground">July 5, 2023</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold">+ 5.0 ℏ</div>
                      <div className="text-xs text-muted-foreground">For "Understanding Hedera Consensus Service"</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="points">
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4 flex justify-between items-center">
                    <div>
                      <div className="font-medium">Article Like</div>
                      <div className="text-sm text-muted-foreground">Today at 2:30 PM</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-primary">+ 1 point</div>
                      <div className="text-xs text-muted-foreground">On "Building DeFi Applications on Hedera"</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 flex justify-between items-center">
                    <div>
                      <div className="font-medium">Article Share</div>
                      <div className="text-sm text-muted-foreground">Yesterday at 10:15 AM</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-primary">+ 2 points</div>
                      <div className="text-xs text-muted-foreground">On "Understanding Hedera Consensus Service"</div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4 flex justify-between items-center">
                    <div>
                      <div className="font-medium">New Article</div>
                      <div className="text-sm text-muted-foreground">July 13, 2023</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-primary">+ 10 points</div>
                      <div className="text-xs text-muted-foreground">For submitting a new article</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="leaderboard">
              <Card>
                <CardHeader>
                  <CardTitle>Top Contributors This Week</CardTitle>
                  <CardDescription>Based on engagement points earned from July 10-17</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 text-primary font-bold rounded-full h-8 w-8 flex items-center justify-center">
                          1
                        </div>
                        <div>
                          <div className="font-medium">David Chen</div>
                          <div className="text-xs text-muted-foreground">185 points</div>
                        </div>
                      </div>
                      <div className="font-bold">32.4 ℏ</div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 text-primary font-bold rounded-full h-8 w-8 flex items-center justify-center">
                          2
                        </div>
                        <div>
                          <div className="font-medium">Jane Cooper</div>
                          <div className="text-xs text-muted-foreground">152 points</div>
                        </div>
                      </div>
                      <div className="font-bold">26.8 ℏ</div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-primary/10 text-primary font-bold rounded-full h-8 w-8 flex items-center justify-center">
                          3
                        </div>
                        <div>
                          <div className="font-medium">Alex Johnson</div>
                          <div className="text-xs text-muted-foreground">143 points</div>
                        </div>
                      </div>
                      <div className="font-bold">25.1 ℏ</div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-muted text-muted-foreground font-bold rounded-full h-8 w-8 flex items-center justify-center">
                          4
                        </div>
                        <div>
                          <div className="font-medium">You</div>
                          <div className="text-xs text-muted-foreground">135 points</div>
                        </div>
                      </div>
                      <div className="font-bold">24.5 ℏ</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">How to Earn Rewards</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Create Content</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-sm">Submit original educational articles</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-sm">Share articles from other platforms</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-sm">Get content verified by the community</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Engage with Content</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-sm">Like articles: +1 point each</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-sm">Share articles: +2 points each</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-sm">Comment on articles: +1 point each</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Receive Rewards</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-sm">Weekly HBAR distributions based on points</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-sm">Bonus rewards for featured content</p>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="h-5 w-5 text-primary mt-0.5" />
                  <p className="text-sm">Top contributor badges and recognition</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <Button className="mt-4" asChild>
              <Link href="/articles/new" className="inline-flex items-center">
                Submit an Article <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
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

