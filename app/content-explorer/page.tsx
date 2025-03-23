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

export default function ContentExplorerPage() {
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
            <Input type="search" placeholder="Search for Hedera content..." className="pl-8" />
          </div>
          <Button variant="outline">
            <Filter className="h-4 w-4 mr-2" />
            Filter
          </Button>
        </div>

        <Tabs defaultValue="all" className="mb-8">
          <TabsList className="w-full flex overflow-x-auto md:w-auto md:inline-flex">
            <TabsTrigger value="all">All Sources</TabsTrigger>
            <TabsTrigger value="twitter">Twitter</TabsTrigger>
            <TabsTrigger value="linkedin">LinkedIn</TabsTrigger>
            <TabsTrigger value="medium">Medium</TabsTrigger>
            <TabsTrigger value="reddit">Reddit</TabsTrigger>
            <TabsTrigger value="youtube">YouTube</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="mt-6">
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Twitter className="h-4 w-4" />
                          <span>Twitter</span>
                        </Badge>
                        <span className="text-xs text-muted-foreground">2 days ago</span>
                      </div>

                      <h3 className="text-lg font-bold mb-1">
                        Hedera's HBAR Foundation Announces $155M Sustainability Fund
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        The HBAR Foundation has announced a new $155M Sustainability Fund to focus on ESG-related
                        projects built on Hedera.
                      </p>

                      <div className="flex items-center gap-2 mb-3">
                        <Avatar className="h-6 w-6">
                          <AvatarImage
                            src="https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=2940&auto=format&fit=crop"
                            alt="Hedera"
                          />
                          <AvatarFallback>HE</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">Hedera</span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          Hedera
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Sustainability
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          ESG
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Funding
                        </Badge>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/articles/imported-1">
                          <ArrowRight className="mr-2 h-3 w-3" />
                          Read More
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href="https://twitter.com/hedera/status/1234567890"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-3 w-3" />
                          Original Source
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <FileText className="h-4 w-4" />
                          <span>Medium</span>
                        </Badge>
                        <span className="text-xs text-muted-foreground">1 week ago</span>
                      </div>

                      <h3 className="text-lg font-bold mb-1">Understanding Hedera Token Service (HTS)</h3>
                      <p className="text-muted-foreground mb-3">
                        A comprehensive guide to creating and managing tokens on Hedera.
                      </p>

                      <div className="flex items-center gap-2 mb-3">
                        <Avatar className="h-6 w-6">
                          <AvatarImage
                            src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2574&auto=format&fit=crop"
                            alt="Hedera Developer Team"
                          />
                          <AvatarFallback>HD</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">Hedera Developer Team</span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          Hedera
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          HTS
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Tokens
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Development
                        </Badge>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/articles/imported-2">
                          <ArrowRight className="mr-2 h-3 w-3" />
                          Read More
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href="https://medium.com/@hederadev/understanding-hedera-token-service"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-3 w-3" />
                          Original Source
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Linkedin className="h-4 w-4" />
                          <span>LinkedIn</span>
                        </Badge>
                        <span className="text-xs text-muted-foreground">1 week ago</span>
                      </div>

                      <h3 className="text-lg font-bold mb-1">Enterprise Use Cases for Hedera Hashgraph</h3>
                      <p className="text-muted-foreground mb-3">
                        Exploring how enterprises are leveraging Hedera for supply chain, identity, and compliance
                        solutions.
                      </p>

                      <div className="flex items-center gap-2 mb-3">
                        <Avatar className="h-6 w-6">
                          <AvatarImage
                            src="https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=2574&auto=format&fit=crop"
                            alt="Sarah Johnson"
                          />
                          <AvatarFallback>SJ</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">Sarah Johnson</span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          Hedera
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Enterprise
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Use Cases
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          DLT
                        </Badge>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/articles/imported-3">
                          <ArrowRight className="mr-2 h-3 w-3" />
                          Read More
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href="https://linkedin.com/pulse/enterprise-use-cases-hedera-hashgraph"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-3 w-3" />
                          Original Source
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Youtube className="h-4 w-4" />
                          <span>YouTube</span>
                        </Badge>
                        <span className="text-xs text-muted-foreground">1 month ago</span>
                      </div>

                      <h3 className="text-lg font-bold mb-1">
                        Hedera Hashgraph Explained: The Future of Distributed Ledger Technology
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        A comprehensive video explanation of Hedera Hashgraph and its advantages.
                      </p>

                      <div className="flex items-center gap-2 mb-3">
                        <Avatar className="h-6 w-6">
                          <AvatarImage
                            src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2574&auto=format&fit=crop"
                            alt="Crypto Explained"
                          />
                          <AvatarFallback>CE</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">Crypto Explained</span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          Hedera
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Hashgraph
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          DLT
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Explanation
                        </Badge>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/articles/imported-4">
                          <ArrowRight className="mr-2 h-3 w-3" />
                          Read More
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://youtube.com/watch?v=abc123" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-3 w-3" />
                          Watch Video
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="twitter" className="mt-6">
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Twitter className="h-4 w-4" />
                          <span>Twitter</span>
                        </Badge>
                        <span className="text-xs text-muted-foreground">2 days ago</span>
                      </div>

                      <h3 className="text-lg font-bold mb-1">
                        Hedera's HBAR Foundation Announces $155M Sustainability Fund
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        The HBAR Foundation has announced a new $155M Sustainability Fund to focus on ESG-related
                        projects built on Hedera.
                      </p>

                      <div className="flex items-center gap-2 mb-3">
                        <Avatar className="h-6 w-6">
                          <AvatarImage
                            src="https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=2940&auto=format&fit=crop"
                            alt="Hedera"
                          />
                          <AvatarFallback>HE</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">Hedera</span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          Hedera
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Sustainability
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          ESG
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Funding
                        </Badge>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/articles/imported-1">
                          <ArrowRight className="mr-2 h-3 w-3" />
                          Read More
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href="https://twitter.com/hedera/status/1234567890"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-3 w-3" />
                          Original Source
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Twitter className="h-4 w-4" />
                          <span>Twitter</span>
                        </Badge>
                        <span className="text-xs text-muted-foreground">5 days ago</span>
                      </div>

                      <h3 className="text-lg font-bold mb-1">Tutorial: Building Your First Hedera Smart Contract</h3>
                      <p className="text-muted-foreground mb-3">
                        A step-by-step guide to deploying your first smart contract on Hedera.
                      </p>

                      <div className="flex items-center gap-2 mb-3">
                        <Avatar className="h-6 w-6">
                          <AvatarImage
                            src="https://images.unsplash.com/photo-1611605698335-8b1569810432?q=80&w=2940&auto=format&fit=crop"
                            alt="Hedera Developer"
                          />
                          <AvatarFallback>HD</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">Hedera Developer</span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          Hedera
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Smart Contracts
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Development
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Tutorial
                        </Badge>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/articles/imported-5">
                          <ArrowRight className="mr-2 h-3 w-3" />
                          Read More
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href="https://twitter.com/hederadev/status/1234567891"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-3 w-3" />
                          Original Source
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Other platform tabs would follow the same pattern */}
          <TabsContent value="linkedin" className="mt-6">
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Linkedin className="h-4 w-4" />
                          <span>LinkedIn</span>
                        </Badge>
                        <span className="text-xs text-muted-foreground">1 week ago</span>
                      </div>

                      <h3 className="text-lg font-bold mb-1">Enterprise Use Cases for Hedera Hashgraph</h3>
                      <p className="text-muted-foreground mb-3">
                        Exploring how enterprises are leveraging Hedera for supply chain, identity, and compliance
                        solutions.
                      </p>

                      <div className="flex items-center gap-2 mb-3">
                        <Avatar className="h-6 w-6">
                          <AvatarImage
                            src="https://images.unsplash.com/photo-1611944212129-29977ae1398c?q=80&w=2574&auto=format&fit=crop"
                            alt="Sarah Johnson"
                          />
                          <AvatarFallback>SJ</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">Sarah Johnson</span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          Hedera
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Enterprise
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Use Cases
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          DLT
                        </Badge>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/articles/imported-3">
                          <ArrowRight className="mr-2 h-3 w-3" />
                          Read More
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href="https://linkedin.com/pulse/enterprise-use-cases-hedera-hashgraph"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-3 w-3" />
                          Original Source
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="medium" className="mt-6">
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <FileText className="h-4 w-4" />
                          <span>Medium</span>
                        </Badge>
                        <span className="text-xs text-muted-foreground">1 week ago</span>
                      </div>

                      <h3 className="text-lg font-bold mb-1">Understanding Hedera Token Service (HTS)</h3>
                      <p className="text-muted-foreground mb-3">
                        A comprehensive guide to creating and managing tokens on Hedera.
                      </p>

                      <div className="flex items-center gap-2 mb-3">
                        <Avatar className="h-6 w-6">
                          <AvatarImage
                            src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2574&auto=format&fit=crop"
                            alt="Hedera Developer Team"
                          />
                          <AvatarFallback>HD</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">Hedera Developer Team</span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          Hedera
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          HTS
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Tokens
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Development
                        </Badge>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/articles/imported-2">
                          <ArrowRight className="mr-2 h-3 w-3" />
                          Read More
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a
                          href="https://medium.com/@hederadev/understanding-hedera-token-service"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-3 w-3" />
                          Original Source
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="reddit" className="mt-6">
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          <span>Reddit</span>
                        </Badge>
                        <span className="text-xs text-muted-foreground">10 days ago</span>
                      </div>

                      <h3 className="text-lg font-bold mb-1">ELI5: How does Hedera Hashgraph achieve consensus?</h3>
                      <p className="text-muted-foreground mb-3">
                        A simplified explanation of Hedera's consensus mechanism for beginners.
                      </p>

                      <div className="flex items-center gap-2 mb-3">
                        <Avatar className="h-6 w-6">
                          <AvatarImage
                            src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2574&auto=format&fit=crop"
                            alt="hedera_enthusiast"
                          />
                          <AvatarFallback>HE</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">hedera_enthusiast</span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          Hedera
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Consensus
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Beginner
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Explanation
                        </Badge>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/articles/imported-6">
                          <ArrowRight className="mr-2 h-3 w-3" />
                          Read More
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://reddit.com/r/Hedera/comments/abc123" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-3 w-3" />
                          Original Source
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="youtube" className="mt-6">
            <div className="space-y-4">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Youtube className="h-4 w-4" />
                          <span>YouTube</span>
                        </Badge>
                        <span className="text-xs text-muted-foreground">1 month ago</span>
                      </div>

                      <h3 className="text-lg font-bold mb-1">
                        Hedera Hashgraph Explained: The Future of Distributed Ledger Technology
                      </h3>
                      <p className="text-muted-foreground mb-3">
                        A comprehensive video explanation of Hedera Hashgraph and its advantages.
                      </p>

                      <div className="flex items-center gap-2 mb-3">
                        <Avatar className="h-6 w-6">
                          <AvatarImage
                            src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=2574&auto=format&fit=crop"
                            alt="Crypto Explained"
                          />
                          <AvatarFallback>CE</AvatarFallback>
                        </Avatar>
                        <span className="text-sm">Crypto Explained</span>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        <Badge variant="secondary" className="text-xs">
                          Hedera
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Hashgraph
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          DLT
                        </Badge>
                        <Badge variant="secondary" className="text-xs">
                          Explanation
                        </Badge>
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Button variant="outline" size="sm" asChild>
                        <Link href="/articles/imported-4">
                          <ArrowRight className="mr-2 h-3 w-3" />
                          Read More
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href="https://youtube.com/watch?v=abc123" target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="mr-2 h-3 w-3" />
                          Watch Video
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
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

