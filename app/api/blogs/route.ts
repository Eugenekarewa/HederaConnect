import { connectDB } from "@/lib/db/mongo";
import Blog from "@/lib/db/models/Blog";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const blogs = await Blog.find().sort({ published: -1 }).lean(); // Sort by newest first
    return NextResponse.json({ blogs });
  } catch (error) {
    console.error("❌ Error fetching blogs:", error);
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}
