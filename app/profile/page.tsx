import { redirect } from "next/navigation"

// This is a redirect page that sends users to their own profile
export default async function ProfilePage() {
  // In a real app, this would get the current user from the session
  // For now, we'll redirect to a default user
  redirect("/davidmwangi")
}

// Mock user data
const user = {
  id: "user-123",
  name: "David Mwangi",
  username: "davidmwangi",
  bio: "Blockchain developer and educator focused on Hedera adoption in East Africa. Building decentralized solutions for real-world problems.",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
  location: "Nairobi, Kenya",
  website: "https://davidmwangi.dev",
  twitter: "davidmwangi",
  github: "davidmwangi",
  joinedDate: "January 2023",
  hederaAccountId: "0.0.12345",
  stats: {
    articles: 8,
    followers: 124,
    following: 56,
    points: 235,
    rewards: 42.5,
  },
}

// Mock articles data
const userArticles = [
  {
    id: "1",
    title: "Understanding Hedera Consensus Service",
    summary:
      "A deep dive into Hedera's distributed consensus mechanism and how it achieves high throughput and security.",
    publishedAt: "2023-09-15T14:30:00Z",
    likes: 42,
    shares: 12,
    comments: 7,
    isVerified: true,
    coverImage: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2832&auto=format&fit=crop",
  },
  {
    id: "2",
    title: "Building DeFi Applications on Hedera",
    summary: "Learn how to create decentralized finance applications using Hedera Token Service and Smart Contracts.",
    publishedAt: "2023-09-10T09:15:00Z",
    likes: 38,
    shares: 15,
    comments: 9,
    isVerified: true,
    coverImage: "https://images.unsplash.com/photo-1639322537067-11072ba0a958?q=80&w=2832&auto=format&fit=crop",
  },
  {
    id: "4",
    title: "Introduction to Hedera Smart Contracts",
    summary: "A beginner's guide to deploying and interacting with smart contracts on the Hedera network.",
    publishedAt: "2023-08-28T16:20:00Z",
    likes: 56,
    shares: 23,
    comments: 12,
    isVerified: true,
    coverImage: "https://images.unsplash.com/photo-1639322538074-5400a9ab5319?q=80&w=2832&auto=format&fit=crop",
  },
]

// Mock activity data
const userActivity = [
  {
    id: "act-1",
    type: "article_published",
    title: "Understanding Hedera Consensus Service",
    date: "2023-09-15T14:30:00Z",
  },
  {
    id: "act-2",
    type: "article_liked",
    title: "Hedera vs. Other Blockchain Networks: A Comparison",
    date: "2023-09-12T10:15:00Z",
  },
  {
    id: "act-3",
    type: "reward_received",
    amount: 8.5,
    date: "2023-09-08T08:45:00Z",
  },
  {
    id: "act-4",
    type: "article_published",
    title: "Building DeFi Applications on Hedera",
    date: "2023-09-10T09:15:00Z",
  },
  {
    id: "act-5",
    type: "article_shared",
    title: "Getting Started with the Hedera JavaScript SDK",
    date: "2023-09-05T16:30:00Z",
  },
]

