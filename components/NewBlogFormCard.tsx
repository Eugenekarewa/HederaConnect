"use client";

import { useState } from "react";

const NewBlogFormCard = () => {
  const [newBlogTitle, setNewBlogTitle] = useState("");
  const [newBlogContent, setNewBlogContent] = useState("");

  const handleAddBlog = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newBlogTitle || !newBlogContent) return;

    // Placeholder API request (You'll need to create the API route)
    await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newBlogTitle, content: newBlogContent }),
    });

    setNewBlogTitle("");
    setNewBlogContent("");
    alert("Blog submitted! Refresh to see changes.");
  };

  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
      <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Add a New Blog</h2>
      <form onSubmit={handleAddBlog} className="space-y-4">
        <input
          type="text"
          value={newBlogTitle}
          onChange={(e) => setNewBlogTitle(e.target.value)}
          placeholder="Blog Title"
          className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-primary-500"
          required
        />
        <textarea
          value={newBlogContent}
          onChange={(e) => setNewBlogContent(e.target.value)}
          placeholder="Blog Content"
          className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-primary-500"
          rows={4}
          required
        />
        <button
          type="submit"
          className="bg-primary-500 text-white px-4 py-2 rounded-md hover:bg-primary-600"
        >
          Submit Blog
        </button>
      </form>
    </div>
  );
};

export default NewBlogFormCard;
