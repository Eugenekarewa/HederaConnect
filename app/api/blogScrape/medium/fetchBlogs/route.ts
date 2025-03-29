import { connectDB } from "@/lib/db/mongo";
import Blog, { IBlog } from "@/lib/db/models/Blog";
import Parser from "rss-parser";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    await connectDB();
    const parser = new Parser();
    const feed = await parser.parseURL("https://medium.com/feed/tag/hedera");

    // Get the 10 most recent blogs
    const blogs: IBlog[] = feed.items.slice(0, 10).map((entry) => ({
      title: entry.title,
      link: entry.link,
      author: entry.creator || "Unknown",
      published: new Date(entry.pubDate ?? Date.now()), // ✅ Fixed issue
      summary: entry.contentSnippet,
    })) as IBlog[];

    // Insert only new blogs
    const newBlogs: IBlog[] = [];
    for (const blog of blogs) {
      const existingBlog = await Blog.exists({ link: blog.link });
      if (!existingBlog) {
        newBlogs.push(blog);
      }
    }

    if (newBlogs.length) {
      await Blog.insertMany(newBlogs);
      return NextResponse.json({ message: `${newBlogs.length} new blogs added`, newBlogs });
    }

    return NextResponse.json({ message: "No new blogs found" });
  } catch (error) {
    console.error("❌ Error fetching blogs:", error);
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}
