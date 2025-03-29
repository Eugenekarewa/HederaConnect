import { genPageMetadata } from "app/seo";
import ListLayout from "@/layouts/ListLayoutWithTags";

const POSTS_PER_PAGE = 5;
export const metadata = genPageMetadata({ title: "Blog" });

async function fetchBlogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs`);
  if (!res.ok) throw new Error("Failed to fetch blogs");
  const { blogs } = await res.json();
  return blogs;
}

export default async function BlogPage() {
  const blogs = await fetchBlogs();
  const pageNumber = 1;
  const totalPages = Math.ceil(blogs.length / POSTS_PER_PAGE);
  const initialDisplayPosts = blogs.slice(0, POSTS_PER_PAGE * pageNumber);
  const pagination = {
    currentPage: pageNumber,
    totalPages: totalPages,
  };

  return (
    <ListLayout
      posts={blogs}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Posts"
    />
  );
}
