import { connectDB } from "@/lib/db/mongo";
import Blog from "@/lib/db/models/Blog";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest): Promise<NextResponse> {
  try {
    await connectDB();
    const blogs = await Blog.find().sort({ published: -1 }).limit(10) ;
    return NextResponse.json(blogs);
  } catch (error) {
    console.error("❌ Error fetching blogs from DB:", error);
    return NextResponse.json({ error: "Failed to retrieve blogs" }, { status: 500 });
  }
}
