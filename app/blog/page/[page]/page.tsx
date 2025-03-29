import ListLayout from "@/layouts/ListLayoutWithTags";
import { notFound } from "next/navigation";

const POSTS_PER_PAGE = 5;

async function fetchBlogs() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs`);
  if (!res.ok) throw new Error("Failed to fetch blogs");
  const { blogs } = await res.json();
  return blogs;
}

export default async function Page({ params }: { params: { page: string } }) {
  const pageNumber = parseInt(params.page);
  const blogs = await fetchBlogs();
  const totalPages = Math.ceil(blogs.length / POSTS_PER_PAGE);

  if (pageNumber <= 0 || pageNumber > totalPages || isNaN(pageNumber)) {
    return notFound();
  }

  const initialDisplayPosts = blogs.slice(
    POSTS_PER_PAGE * (pageNumber - 1),
    POSTS_PER_PAGE * pageNumber
  );
  const pagination = { currentPage: pageNumber, totalPages };

  return (
    <ListLayout
      posts={blogs}
      initialDisplayPosts={initialDisplayPosts}
      pagination={pagination}
      title="All Posts"
    />
  );
}
