'use client'

import { useState } from 'react'

const NewBlogFormCard = () => {
  const [newBlogTitle, setNewBlogTitle] = useState('')
  const [newBlogContent, setNewBlogContent] = useState('')

  const handleAddBlog = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!newBlogTitle || !newBlogContent) return

    // Placeholder API request (You'll need to create the API route)
    await fetch('/api/blogs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: newBlogTitle, content: newBlogContent }),
    })

    setNewBlogTitle('')
    setNewBlogContent('')
    alert('Blog submitted! Refresh to see changes.')
  }

  return (
    <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
      <h2 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">Add a New Artical</h2>
      <form onSubmit={handleAddBlog} className="space-y-4">
        <input
          type="text"
          value={newBlogTitle}
          onChange={(e) => setNewBlogTitle(e.target.value)}
          placeholder="Artical Title"
          className="focus:ring-primary-500 w-full rounded-md border px-4 py-2"
          required
        />
        <textarea
          value={newBlogContent}
          onChange={(e) => setNewBlogContent(e.target.value)}
          placeholder="Artical Content"
          className="focus:ring-primary-500 w-full rounded-md border px-4 py-2"
          rows={4}
          required
        />
        <button
          type="submit"
          className="rounded-md bg-blue-800 px-4 py-2 text-white hover:bg-blue-700"
        >
          Submit Artical
        </button>
      </form>
    </div>
  )
}

export default NewBlogFormCard
