import MainHeader from "@/components/main-header";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ArrowUpRight,
  ChevronRight,
  CircleDollarSign,
  FileText,
  Heart,
  LineChart,
  MessageSquare,
  Share2,
} from "lucide-react";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Track your content, engagement, and rewards
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Articles Published
              </CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">+1 last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Total Likes</CardTitle>
              <Heart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">128</div>
              <p className="text-xs text-muted-foreground">+24 last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Total Shares
              </CardTitle>
              <Share2 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">34</div>
              <p className="text-xs text-muted-foreground">+7 last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Rewards Earned
              </CardTitle>
              <CircleDollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24.5 ℏ</div>
              <p className="text-xs text-muted-foreground">+8.5 ℏ last week</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle>Engagement Overview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] flex items-center justify-center bg-muted rounded-md">
                <LineChart className="h-8 w-8 text-muted-foreground" />
                <span className="ml-2 text-muted-foreground">
                  Engagement chart would render here
                </span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Next Reward</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-medium">
                    <div>Weekly Distribution</div>
                    <div>Saturday</div>
                  </div>
                  <div className="text-2xl font-bold">~8.2 ℏ</div>
                  <div className="text-xs text-muted-foreground">
                    Based on current engagement
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <div>Current Points</div>
                    <div className="font-medium">135/200</div>
                  </div>
                  <Progress value={67.5} className="h-2" />
                  <div className="text-xs text-muted-foreground">
                    65 more points to reach next tier
                  </div>
                </div>

                <Button asChild size="sm" className="w-full">
                  <Link href="/rewards">View Rewards</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mb-8">
          <Tabs defaultValue="your-articles">
            <TabsList className="mb-6">
              <TabsTrigger value="your-articles">Your Articles</TabsTrigger>
              <TabsTrigger value="saved">Saved Articles</TabsTrigger>
            </TabsList>

            <TabsContent value="your-articles">
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">
                          Understanding Hedera Consensus Service
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Published on July 15, 2023
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Badge variant="outline" className="mr-4">
                          Verified
                        </Badge>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <div className="flex items-center">
                            <Heart className="h-4 w-4 mr-1" />
                            <span className="text-xs">42</span>
                          </div>
                          <div className="flex items-center">
                            <Share2 className="h-4 w-4 mr-1" />
                            <span className="text-xs">12</span>
                          </div>
                          <div className="flex items-center">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            <span className="text-xs">7</span>
                          </div>
                        </div>
                        <Button size="icon" variant="ghost" asChild>
                          <Link href={`/articles/1`}>
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">
                          Building DeFi Applications on Hedera
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Published on July 10, 2023
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Badge variant="outline" className="mr-4">
                          Verified
                        </Badge>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <div className="flex items-center">
                            <Heart className="h-4 w-4 mr-1" />
                            <span className="text-xs">38</span>
                          </div>
                          <div className="flex items-center">
                            <Share2 className="h-4 w-4 mr-1" />
                            <span className="text-xs">15</span>
                          </div>
                          <div className="flex items-center">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            <span className="text-xs">9</span>
                          </div>
                        </div>
                        <Button size="icon" variant="ghost" asChild>
                          <Link href={`/articles/2`}>
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">
                          Introduction to Hedera Smart Contracts
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Published on June 28, 2023
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Badge variant="outline" className="mr-4">
                          Verified
                        </Badge>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <div className="flex items-center">
                            <Heart className="h-4 w-4 mr-1" />
                            <span className="text-xs">56</span>
                          </div>
                          <div className="flex items-center">
                            <Share2 className="h-4 w-4 mr-1" />
                            <span className="text-xs">23</span>
                          </div>
                          <div className="flex items-center">
                            <MessageSquare className="h-4 w-4 mr-1" />
                            <span className="text-xs">12</span>
                          </div>
                        </div>
                        <Button size="icon" variant="ghost" asChild>
                          <Link href={`/articles/4`}>
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-4 text-center">
                <Button asChild>
                  <Link href="/articles/new">Submit New Article</Link>
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="saved">
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">
                          Hedera vs. Other Blockchain Networks: A Comparison
                        </div>
                        <div className="text-sm text-muted-foreground">
                          By David Chen • August 20, 2023
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Badge variant="outline" className="mr-4">
                          Verified
                        </Badge>
                        <Button size="icon" variant="ghost" asChild>
                          <Link href={`/articles/5`}>
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-medium">
                          Getting Started with the Hedera JavaScript SDK
                        </div>
                        <div className="text-sm text-muted-foreground">
                          By Emily Zhang • August 15, 2023
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Badge variant="outline" className="mr-4">
                          Verified
                        </Badge>
                        <Button size="icon" variant="ghost" asChild>
                          <Link href={`/articles/6`}>
                            <ChevronRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-6">Top Contributors</h2>

          <div className="space-y-4">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src="/placeholder.svg?height=40&width=40"
                        alt="David Chen"
                      />
                      <AvatarFallback>DC</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">David Chen</div>
                      <div className="text-sm text-muted-foreground">
                        185 points this week
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-1"
                    asChild
                  >
                    <Link href="/profile/dchen">
                      View Profile <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src="/placeholder.svg?height=40&width=40"
                        alt="Jane Cooper"
                      />
                      <AvatarFallback>JC</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Jane Cooper</div>
                      <div className="text-sm text-muted-foreground">
                        152 points this week
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-1"
                    asChild
                  >
                    <Link href="/profile/janecooper">
                      View Profile <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src="/placeholder.svg?height=40&width=40"
                        alt="Alex Johnson"
                      />
                      <AvatarFallback>AJ</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">Alex Johnson</div>
                      <div className="text-sm text-muted-foreground">
                        143 points this week
                      </div>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="flex items-center gap-1"
                    asChild
                  >
                    <Link href="/profile/alexj">
                      View Profile <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
