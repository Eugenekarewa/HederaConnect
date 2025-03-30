import { connectDB } from "@/lib/db/mongo";
import Blog from "@/lib/db/models/Blog";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { slug: string } }) {
  try {
    await connectDB();
    const blog = await Blog.findOne({ slug: params.slug }).lean();
    if (!blog) return NextResponse.json({ error: "Blog not found" }, { status: 404 });

    return NextResponse.json({ blog });
  } catch (error) {
    console.error("❌ Error fetching blog:", error);
    return NextResponse.json({ error: "Failed to fetch blog" }, { status: 500 });
  }
}
