import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  Filter,
  ArrowRight,
  Hash,
  TrendingUp,
  Clock,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { topics } from "@/types";

export default function TopicsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Topics</h1>
          <p className="text-muted-foreground">
            Explore educational content organized by topics related to Hedera
            Hashgraph.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search topics..."
              className="pl-8"
            />
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
                <Card
                  key={topic.id}
                  className="overflow-hidden flex flex-col hover:shadow-md transition-shadow"
                >
                  <div className="relative h-40">
                    <Image
                      src={topic.image || "/placeholder.svg"}
                      alt={topic.name}
                      fill
                      className="object-cover"
                    />
                    {topic.trending && (
                      <Badge
                        variant="secondary"
                        className="absolute top-2 right-2 flex items-center"
                      >
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
                  <Card
                    key={topic.id}
                    className="overflow-hidden flex flex-col hover:shadow-md transition-shadow"
                  >
                    <div className="relative h-40">
                      <Image
                        src={topic.image || "/placeholder.svg"}
                        alt={topic.name}
                        fill
                        className="object-cover"
                      />
                      <Badge
                        variant="secondary"
                        className="absolute top-2 right-2 flex items-center"
                      >
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
              <p className="text-muted-foreground mb-4">
                You need to be logged in to see your followed topics.
              </p>
              <Button asChild>
                <Link href="/login">Sign In</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="recent" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topics.slice(0, 3).map((topic) => (
                <Card
                  key={topic.id}
                  className="overflow-hidden flex flex-col hover:shadow-md transition-shadow"
                >
                  <div className="relative h-40">
                    <Image
                      src={topic.image || "/placeholder.svg"}
                      alt={topic.name}
                      fill
                      className="object-cover"
                    />
                    <Badge
                      variant="secondary"
                      className="absolute top-2 right-2 flex items-center"
                    >
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
    </div>
  );
}
