"use client"

import type React from "react"

import { useState } from "react"
import MainHeader from "@/components/main-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Upload, LinkIcon, HelpCircle } from "lucide-react"
import Link from "next/link"
import { submitArticle } from "@/lib/actions/article-actions"

export default function NewArticlePage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [articleUrl, setArticleUrl] = useState("")
  const [submitType, setSubmitType] = useState<"url" | "content">("url")

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    // Get form data
    const formData = new FormData(event.currentTarget)
    try {
      await submitArticle(formData)
      // Redirect or show success message
    } catch (error) {
      console.error("Error submitting article:", error)
      // Show error message
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <MainHeader />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Link href="/articles" className="text-sm text-muted-foreground flex items-center hover:text-primary mb-4">
              <ArrowLeft className="h-4 w-4 mr-1" /> Back to Articles
            </Link>
            <h1 className="text-3xl font-bold mb-2">Submit an Article</h1>
            <p className="text-muted-foreground">
              Share educational content about Hedera with the community and earn rewards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <Card
              className={`cursor-pointer border-2 ${submitType === "url" ? "border-primary" : ""}`}
              onClick={() => setSubmitType("url")}
            >
              <CardHeader>
                <CardTitle className="flex items-center">
                  <LinkIcon className="h-5 w-5 mr-2" />
                  Submit URL
                </CardTitle>
                <CardDescription>Share an existing article from the web</CardDescription>
              </CardHeader>
            </Card>

            <Card
              className={`cursor-pointer border-2 ${submitType === "content" ? "border-primary" : ""}`}
              onClick={() => setSubmitType("content")}
            >
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Upload className="h-5 w-5 mr-2" />
                  Create Content
                </CardTitle>
                <CardDescription>Write or upload your own article</CardDescription>
              </CardHeader>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Article Details</CardTitle>
              <CardDescription>Fill in the details of the article you want to share.</CardDescription>
            </CardHeader>

            <form onSubmit={handleSubmit}>
              <CardContent className="space-y-6">
                {submitType === "url" ? (
                  <div className="space-y-2">
                    <Label htmlFor="url">Article URL</Label>
                    <div className="flex gap-2">
                      <Input
                        id="url"
                        name="url"
                        placeholder="https://example.com/article"
                        value={articleUrl}
                        onChange={(e) => setArticleUrl(e.target.value)}
                        required
                      />
                      <Button type="button" variant="secondary">
                        Fetch
                      </Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Paste the URL of an existing article. We'll fetch the content automatically.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-2">
                    <Label htmlFor="upload">Upload Content</Label>
                    <div className="border-2 border-dashed rounded-md p-6 text-center">
                      <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      <p className="text-sm mb-2">Drag and drop your article file here</p>
                      <p className="text-xs text-muted-foreground mb-4">Supports: .md, .txt, .docx, .pdf</p>
                      <Button type="button" variant="outline" size="sm">
                        Choose file
                      </Button>
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" name="title" placeholder="Enter article title" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="summary">Summary</Label>
                  <Textarea id="summary" name="summary" placeholder="Brief summary of the article" rows={3} required />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category</Label>
                    <Select name="category">
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technology">Technology</SelectItem>
                        <SelectItem value="defi">DeFi</SelectItem>
                        <SelectItem value="development">Development</SelectItem>
                        <SelectItem value="use-cases">Use Cases</SelectItem>
                        <SelectItem value="tutorials">Tutorials</SelectItem>
                        <SelectItem value="news">News</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="tags">Tags</Label>
                    <Input id="tags" name="tags" placeholder="tags separated by commas" />
                  </div>
                </div>

                {submitType === "content" && (
                  <div className="space-y-2">
                    <Label htmlFor="content">Content</Label>
                    <Textarea id="content" name="content" placeholder="Write your article content here..." rows={10} />
                  </div>
                )}

                <div className="p-4 bg-muted rounded-lg flex gap-2 items-start">
                  <HelpCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium mb-1">How rewards work</p>
                    <p className="text-xs text-muted-foreground">
                      Articles earn rewards based on engagement. Each like gives you +1 point, and each share +2 points.
                      Rewards are distributed weekly through the Hedera Token Service.
                    </p>
                  </div>
                </div>
              </CardContent>

              <CardFooter className="flex justify-between border-t p-6">
                <Button variant="outline" type="button" asChild>
                  <Link href="/articles">Cancel</Link>
                </Button>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Article"}
                </Button>
              </CardFooter>
            </form>
          </Card>
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

