"use client"

import { useState, useEffect } from "react"
import MainHeader from "@/components/main-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  AlertCircle,
  ArrowRight,
  Check,
  Clock,
  Download,
  ExternalLink,
  Filter,
  Import,
  Loader2,
  Plus,
  RefreshCw,
  Search,
  Settings,
  Twitter,
  Linkedin,
  FileText,
  MessageSquare,
  Youtube,
} from "lucide-react"
import type { ScrapedContent, ScrapingOptions } from "@/lib/scraping/content-scraper"
import { scrapeContent, importScrapedContent, scheduleScraping, getSavedContent } from "@/lib/actions/scraping-actions"
import Link from "next/link"
import { useToast } from "@/components/ui/use-toast"

export default function ContentAggregationPage() {
  const [isLoading, setIsLoading] = useState(false)
  const [scrapedContent, setScrapedContent] = useState<ScrapedContent[]>([])
  const [importedContent, setImportedContent] = useState<any[]>([])
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>(["twitter", "linkedin", "medium"])
  const [keywords, setKeywords] = useState<string[]>(["Hedera", "Hashgraph", "HTS", "HBAR"])
  const [timeframe, setTimeframe] = useState<string>("week")
  const [importingId, setImportingId] = useState<string | null>(null)
  const [schedules, setSchedules] = useState<any[]>([])
  const { toast } = useToast()

  // Fetch imported content and schedules on component mount
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await getSavedContent()
        if (result.success) {
          setImportedContent(result.data)
        }

        // Fetch schedules (this would be implemented in a real app)
        // const schedulesResult = await getScrapingSchedules()
        // if (schedulesResult.success) {
        //   setSchedules(schedulesResult.data)
        // }
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, [])

  const handleScrape = async () => {
    setIsLoading(true)
    try {
      const options: ScrapingOptions = {
        platforms: selectedPlatforms as any[],
        keywords,
        timeframe: timeframe as any,
        limit: 20,
      }

      const result = await scrapeContent(options)

      if (result.success && result.data) {
        setScrapedContent(result.data)
        toast({
          title: "Content scraped successfully",
          description: `Found ${result.data.length} items from ${selectedPlatforms.join(", ")}`,
        })
      } else {
        console.error("Failed to scrape content:", result.error)
        toast({
          title: "Error scraping content",
          description: result.error || "An unexpected error occurred",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error scraping content:", error)
      toast({
        title: "Error scraping content",
        description: "An unexpected error occurred",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleImport = async (content: ScrapedContent) => {
    setImportingId(content.url)
    try {
      const result = await importScrapedContent(content)

      if (result.success) {
        toast({
          title: "Content imported successfully",
          description: `"${content.title}" has been added to your content library`,
        })

        // Remove from scraped content list
        setScrapedContent((prev) => prev.filter((item) => item.url !== content.url))

        // Refresh imported content
        const savedContent = await getSavedContent()
        if (savedContent.success) {
          setImportedContent(savedContent.data)
        }
      } else {
        console.error("Failed to import content:", result.error)
        toast({
          title: "Error importing content",
          description: result.error || "An unexpected error occurred",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error importing content:", error)
      toast({
        title: "Error importing content",
        description: "An unexpected error occurred",
        variant: "destructive",
      })
    } finally {
      setImportingId(null)
    }
  }

  const handleSchedule = async () => {
    try {
      const result = await scheduleScraping({
        frequency: "daily",
        platforms: selectedPlatforms as any[],
        keywords,
      })

      if (result.success) {
        toast({
          title: "Scraping scheduled successfully",
          description: `Daily scraping scheduled for ${selectedPlatforms.join(", ")}`,
        })

        // Add to schedules list
        setSchedules((prev) => [...prev, result.data])
      } else {
        console.error("Failed to schedule scraping:", result.error)
        toast({
          title: "Error scheduling scraping",
          description: result.error || "An unexpected error occurred",
          variant: "destructive",
        })
      }
    } catch (error) {
      console.error("Error scheduling scraping:", error)
      toast({
        title: "Error scheduling scraping",
        description: "An unexpected error occurred",
        variant: "destructive",
      })
    }
  }

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
          <h1 className="text-3xl font-bold mb-2">Content Aggregation</h1>
          <p className="text-muted-foreground">
            Scrape and import Hedera educational content from various social media platforms.
          </p>
        </div>

        <Tabs defaultValue="scrape">
          <TabsList className="mb-6">
            <TabsTrigger value="scrape">Scrape Content</TabsTrigger>
            <TabsTrigger value="imported">Imported Content</TabsTrigger>
            <TabsTrigger value="scheduled">Scheduled Scraping</TabsTrigger>
          </TabsList>

          <TabsContent value="scrape">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Scraping Configuration</CardTitle>
                <CardDescription>
                  Configure which platforms and keywords to scrape for Hedera educational content.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label>Platforms</Label>
                    <div className="flex flex-wrap gap-4">
                      {["twitter", "linkedin", "medium", "reddit", "youtube"].map((platform) => (
                        <div key={platform} className="flex items-center space-x-2">
                          <Checkbox
                            id={platform}
                            checked={selectedPlatforms.includes(platform)}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                setSelectedPlatforms((prev) => [...prev, platform])
                              } else {
                                setSelectedPlatforms((prev) => prev.filter((p) => p !== platform))
                              }
                            }}
                          />
                          <Label htmlFor={platform} className="capitalize flex items-center">
                            {getPlatformIcon(platform)}
                            <span className="ml-1">{platform}</span>
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label>Keywords</Label>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {keywords.map((keyword) => (
                        <Badge key={keyword} variant="secondary" className="flex items-center gap-1">
                          {keyword}
                          <button
                            className="ml-1 hover:text-destructive"
                            onClick={() => setKeywords((prev) => prev.filter((k) => k !== keyword))}
                          >
                            ×
                          </button>
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Input
                        placeholder="Add keyword..."
                        onKeyDown={(e) => {
                          if (e.key === "Enter" && e.currentTarget.value) {
                            e.preventDefault()
                            const newKeyword = e.currentTarget.value.trim()
                            if (newKeyword && !keywords.includes(newKeyword)) {
                              setKeywords((prev) => [...prev, newKeyword])
                              e.currentTarget.value = ""
                            }
                          }
                        }}
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => {
                          const input = document.querySelector(
                            'input[placeholder="Add keyword..."]',
                          ) as HTMLInputElement
                          if (input && input.value.trim()) {
                            const newKeyword = input.value.trim()
                            if (!keywords.includes(newKeyword)) {
                              setKeywords((prev) => [...prev, newKeyword])
                              input.value = ""
                            }
                          }
                        }}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeframe">Timeframe</Label>
                    <Select value={timeframe} onValueChange={setTimeframe}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select timeframe" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="day">Last 24 hours</SelectItem>
                        <SelectItem value="week">Last week</SelectItem>
                        <SelectItem value="month">Last month</SelectItem>
                        <SelectItem value="all">All time</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" onClick={handleSchedule}>
                  <Clock className="mr-2 h-4 w-4" />
                  Schedule Daily
                </Button>
                <Button onClick={handleScrape} disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Scraping...
                    </>
                  ) : (
                    <>
                      <Search className="mr-2 h-4 w-4" />
                      Scrape Content
                    </>
                  )}
                </Button>
              </CardFooter>
            </Card>

            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-xl font-bold">Scraped Content</h2>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm">
                  <Filter className="mr-2 h-4 w-4" />
                  Filter
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </div>
            </div>

            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
                <span className="ml-2">Scraping content...</span>
              </div>
            ) : scrapedContent.length > 0 ? (
              <div className="space-y-4">
                {scrapedContent.map((content) => (
                  <Card key={content.url}>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="flex items-center gap-1">
                              {getPlatformIcon(content.platform)}
                              <span className="capitalize">{content.platform}</span>
                            </Badge>
                            <span className="text-xs text-muted-foreground">
                              {new Date(content.publishedAt).toLocaleDateString()}
                            </span>
                          </div>

                          <h3 className="text-lg font-bold mb-1">{content.title}</h3>
                          <p className="text-muted-foreground mb-3">{content.summary}</p>

                          <div className="flex items-center gap-2 mb-3">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={content.author.avatar} alt={content.author.name} />
                              <AvatarFallback>{content.author.name.slice(0, 2)}</AvatarFallback>
                            </Avatar>
                            <span className="text-sm">{content.author.name}</span>
                          </div>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {content.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex flex-col gap-2">
                          <Button
                            variant="default"
                            size="sm"
                            onClick={() => handleImport(content)}
                            disabled={importingId === content.url}
                          >
                            {importingId === content.url ? (
                              <>
                                <Loader2 className="mr-2 h-3 w-3 animate-spin" />
                                Importing...
                              </>
                            ) : (
                              <>
                                <Import className="mr-2 h-3 w-3" />
                                Import
                              </>
                            )}
                          </Button>
                          <Button variant="outline" size="sm" asChild>
                            <a href={content.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="mr-2 h-3 w-3" />
                              View Source
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
                  <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-lg font-medium mb-2">No Content Found</h3>
                  <p className="text-muted-foreground mb-4">
                    Configure your scraping options and click "Scrape Content" to find Hedera educational content.
                  </p>
                  <Button onClick={handleScrape} disabled={isLoading}>
                    <Search className="mr-2 h-4 w-4" />
                    Scrape Content
                  </Button>
                </CardContent>
              </Card>
            )}
          </TabsContent>

          <TabsContent value="imported">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>Imported Content</CardTitle>
                <CardDescription>
                  View and manage content that has been imported from social media platforms.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center mb-4">
                  <div className="relative w-full max-w-sm">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input type="search" placeholder="Search imported content..." className="pl-8" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Select defaultValue="all">
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Filter by platform" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Platforms</SelectItem>
                        <SelectItem value="twitter">Twitter</SelectItem>
                        <SelectItem value="linkedin">LinkedIn</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="reddit">Reddit</SelectItem>
                        <SelectItem value="youtube">YouTube</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button variant="outline" size="icon">
                      <RefreshCw className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {importedContent.length > 0 ? (
                  <div className="space-y-4">
                    {importedContent.map((content) => (
                      <Card key={content.id}>
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <Badge variant="outline" className="flex items-center gap-1">
                                  {getPlatformIcon(content.platform)}
                                  <span className="capitalize">{content.platform}</span>
                                </Badge>
                                <Badge variant="secondary">Imported</Badge>
                                <span className="text-xs text-muted-foreground">
                                  {new Date(content.publishedAt).toLocaleDateString()}
                                </span>
                              </div>

                              <h3 className="text-lg font-bold mb-1">{content.title}</h3>
                              <p className="text-muted-foreground mb-3">{content.summary}</p>

                              <div className="flex items-center gap-2 mb-3">
                                <Avatar className="h-6 w-6">
                                  <AvatarImage src={content.authorAvatar} alt={content.authorName} />
                                  <AvatarFallback>{content.authorName.slice(0, 2)}</AvatarFallback>
                                </Avatar>
                                <span className="text-sm">{content.authorName}</span>
                              </div>

                              <div className="flex flex-wrap gap-2">
                                {content.tags.map((tag) => (
                                  <Badge key={tag} variant="secondary" className="text-xs">
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div className="flex flex-col gap-2">
                              <Button variant="outline" size="sm" asChild>
                                <Link href={`/articles/imported-${content.id}`}>
                                  <ArrowRight className="mr-2 h-3 w-3" />
                                  View
                                </Link>
                              </Button>
                              <Button variant="outline" size="sm" asChild>
                                <a href={content.url} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="mr-2 h-3 w-3" />
                                  Source
                                </a>
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground mb-4">No imported content yet.</p>
                    <Button asChild>
                      <Link href="#scrape">Import your first content</Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="scheduled">
            <Card>
              <CardHeader>
                <CardTitle>Scheduled Scraping</CardTitle>
                <CardDescription>
                  Configure automated content scraping to keep your platform updated with the latest Hedera educational
                  content.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-medium">Active Schedules</h3>
                    <Button>
                      <Plus className="mr-2 h-4 w-4" />
                      New Schedule
                    </Button>
                  </div>

                  {schedules.length > 0 ? (
                    <div className="space-y-4">
                      {schedules.map((schedule) => (
                        <Card key={schedule.id}>
                          <CardContent className="p-4">
                            <div className="flex items-center justify-between">
                              <div>
                                <div className="font-medium mb-1">{schedule.name || "Scheduled Scraping"}</div>
                                <div className="text-sm text-muted-foreground mb-2">
                                  Runs {schedule.frequency} at {new Date(schedule.nextRunAt).toLocaleTimeString()}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {schedule.platforms.map((platform) => (
                                    <Badge key={platform} variant="outline" className="flex items-center gap-1">
                                      {getPlatformIcon(platform)}
                                      <span className="capitalize">{platform}</span>
                                    </Badge>
                                  ))}
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge variant="secondary" className="flex items-center gap-1">
                                  <Check className="h-3 w-3" />
                                  <span>Active</span>
                                </Badge>
                                <Button variant="ghost" size="icon">
                                  <Settings className="h-4 w-4" />
                                </Button>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <Card>
                      <CardContent className="p-8 text-center">
                        <p className="text-muted-foreground mb-4">No scheduled scraping configured yet.</p>
                        <Button onClick={handleSchedule}>
                          <Clock className="mr-2 h-4 w-4" />
                          Schedule Daily Scraping
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </CardContent>
            </Card>
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

