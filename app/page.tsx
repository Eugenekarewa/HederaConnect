import ArticlesList from "@/components/articles-list";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { ArrowRight, BookOpen, Globe, Shield, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          {/* <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop"
              alt="Blockchain background"
              fill
              priority
              className="object-cover brightness-[0.3]"
            />
          </div> */}
          <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
            <div className="max-w-3xl mx-auto text-center">
              {/* <Badge
                variant="outline"
                className="mb-4 bg-background/20 backdrop-blur-sm"
              >
                Decentralized Knowledge Sharing
              </Badge> */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white">
                Discover & Share Hedera Knowledge
              </h1>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Access educational content from across the web and earn rewards
                for your contributions to the{" "}
                <span className="text-blue-300"> Hedera </span>ecosystem.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/articles/new">Submit Article</Link>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="bg-background/20 backdrop-blur-sm text-white border-white/30 hover:bg-background/30"
                >
                  <Link href="/content-explorer">Explore Content</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-24"></div>
        </section>

        {/* Features Section */}
        <section className="py-16 container mx-auto px-4 mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">
            Why HederaConnect?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Aggregated Content</h3>
                <p className="text-muted-foreground">
                  Access Hedera educational content from across the web, all in
                  one place.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Verified Content</h3>
                <p className="text-muted-foreground">
                  Community-verified articles ensure high-quality, accurate
                  information.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Earn Rewards</h3>
                <p className="text-muted-foreground">
                  Get HBAR tokens for contributing and engaging with content.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">Learn & Grow</h3>
                <p className="text-muted-foreground">
                  Expand your knowledge about Hedera's technology and ecosystem.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Content Explorer Preview */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-1 order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-4">
                  Content From Across The Web
                </h2>
                <p className="text-muted-foreground mb-6">
                  HederaConnect aggregates educational content from Twitter,
                  LinkedIn, Medium, Reddit, and YouTube, bringing the best
                  Hedera resources together in one place.
                </p>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Image
                        src="https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=2940&auto=format&fit=crop"
                        alt="Twitter"
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">
                        Latest tweets from Hedera experts
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Image
                        src="https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=2574&auto=format&fit=crop"
                        alt="LinkedIn"
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">
                        In-depth articles from industry professionals
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Image
                        src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2574&auto=format&fit=crop"
                        alt="YouTube"
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-medium">
                        Video tutorials and explanations
                      </p>
                    </div>
                  </div>
                </div>
                <Button asChild>
                  <Link
                    href="/content-explorer"
                    className="inline-flex items-center"
                  >
                    Explore Content <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="flex-1 order-1 md:order-2">
                <div className="relative">
                  <Image
                    src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=2670&auto=format&fit=crop"
                    alt="Content Explorer"
                    width={600}
                    height={400}
                    className="rounded-lg shadow-lg"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-background rounded-lg shadow-lg p-3 border">
                    <Image
                      src="https://images.unsplash.com/photo-1642059889836-3a2e24540f21?q=80&w=2574&auto=format&fit=crop"
                      alt="Hedera Logo"
                      width={60}
                      height={60}
                      className="rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Articles Section */}
        <section className="py-16 container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl font-bold">Featured Articles</h2>
            <Button variant="ghost" asChild>
              <Link href="/articles" className="flex items-center">
                View All <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <ArticlesList />
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">Ready to Contribute?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Share your knowledge about Hedera and earn rewards for your
                contributions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/articles/new">Submit an Article</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/learn">Learn How It Works</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
