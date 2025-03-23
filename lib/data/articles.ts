import type { Article } from "../types"

// Mock data - in a real app this would come from a database
const MOCK_ARTICLES: Article[] = [
  {
    id: "1",
    title: "Understanding Hedera Consensus Service",
    summary:
      "A deep dive into Hedera's distributed consensus mechanism and how it achieves high throughput and security.",
    content: `
      <p>Hedera Consensus Service (HCS) provides a new way for you to build applications 
      with trust and transparency at their core. By leveraging the security and 
      transparency of Hedera's public ledger, you can build applications that create 
      a verifiable log of events.</p>
      
      <h2>How HCS Works</h2>
      <p>Hedera Consensus Service (HCS) allows applications to track assets across 
      a distributed ledger without having to manage cryptocurrency. This opens up 
      countless use cases and allows developers to create applications that can:</p>
      
      <ul>
        <li>Create a verifiable audit trail of events</li>
        <li>Track assets without managing cryptocurrency</li>
        <li>Ensure data integrity and transparency</li>
        <li>Enable high throughput applications</li>
      </ul>
      
      <p>With HCS, you can submit messages to a topic and receive fair consensus 
      timestamps and ordering. This creates an immutable log of messages that can 
      be used as a source of truth for your application.</p>
    `,
    coverImage: "/placeholder.svg?height=800&width=1200",
    publishedAt: "2023-09-15T14:30:00Z",
    author: {
      id: "auth1",
      name: "Jane Cooper",
      username: "janecooper",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    tags: ["HCS", "Consensus", "Enterprise", "Tutorial"],
    likes: 42,
    shares: 12,
    comments: 7,
    views: 1250,
    isVerified: true,
  },
  {
    id: "2",
    title: "Building DeFi Applications on Hedera",
    summary: "Learn how to create decentralized finance applications using Hedera Token Service and Smart Contracts.",
    content: `
      <p>Decentralized Finance (DeFi) is revolutionizing financial services, 
      and Hedera provides the perfect platform for building DeFi applications 
      with its high throughput, low fees, and robust security.</p>
      
      <h2>Hedera Token Service for DeFi</h2>
      <p>The Hedera Token Service (HTS) allows you to create custom tokens 
      without writing smart contract code. This makes it easy to create 
      and manage tokens for various DeFi applications.</p>
      
      <p>Combined with the Hedera Consensus Service, you can build sophisticated 
      DeFi applications that are secure, fast, and fair.</p>
    `,
    coverImage: "/placeholder.svg?height=800&width=1200",
    publishedAt: "2023-09-10T09:15:00Z",
    author: {
      id: "auth2",
      name: "Alex Johnson",
      username: "alexj",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    tags: ["DeFi", "HTS", "Development", "Finance"],
    likes: 38,
    shares: 15,
    comments: 9,
    views: 980,
    isVerified: true,
  },
  {
    id: "3",
    title: "Hedera for Enterprise: Supply Chain Use Cases",
    summary: "Explore how businesses are leveraging Hedera to improve supply chain transparency and efficiency.",
    content: `
      <p>Supply chains today are complex global networks that often lack transparency 
      and efficiency. Hedera's distributed ledger technology offers a solution by 
      providing a secure, immutable record of supply chain events.</p>
      
      <h2>Real-World Application</h2>
      <p>Several enterprises are already using Hedera to track products from 
      manufacturer to consumer, ensuring authenticity and reducing fraud.</p>
      
      <p>By creating a shared source of truth, Hedera enables all supply chain 
      participants to have confidence in the data they're seeing.</p>
    `,
    coverImage: "/placeholder.svg?height=800&width=1200",
    publishedAt: "2023-09-05T11:45:00Z",
    author: {
      id: "auth3",
      name: "Michael Smith",
      username: "msmith",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    tags: ["Enterprise", "Supply Chain", "Use Case", "Business"],
    likes: 27,
    shares: 8,
    comments: 3,
    views: 750,
    isVerified: false,
  },
  {
    id: "4",
    title: "Introduction to Hedera Smart Contracts",
    summary: "A beginner's guide to deploying and interacting with smart contracts on the Hedera network.",
    content: `
      <p>Hedera smart contracts allow developers to build decentralized applications 
      with complex business logic. This guide will help you get started with 
      smart contract development on Hedera.</p>
      
      <h2>Solidity on Hedera</h2>
      <p>Hedera supports Solidity, the same programming language used for Ethereum 
      smart contracts, making it easy for Ethereum developers to transition to Hedera.</p>
      
      <p>In this guide, we'll cover:</p>
      <ul>
        <li>Setting up your development environment</li>
        <li>Writing your first smart contract</li>
        <li>Deploying to the Hedera testnet</li>
        <li>Interacting with your contract</li>
      </ul>
    `,
    coverImage: "/placeholder.svg?height=800&width=1200",
    publishedAt: "2023-08-28T16:20:00Z",
    author: {
      id: "auth4",
      name: "Sarah Wilson",
      username: "sarahw",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    tags: ["Smart Contracts", "Development", "Tutorial", "Beginner"],
    likes: 56,
    shares: 23,
    comments: 12,
    views: 1890,
    isVerified: true,
  },
  {
    id: "5",
    title: "Hedera vs. Other Blockchain Networks: A Comparison",
    summary:
      "An objective analysis comparing Hedera Hashgraph's performance, security, and features to other leading blockchain platforms.",
    content: `
      <p>With so many distributed ledger technologies available, it can be difficult 
      to understand the key differences between them. This article compares Hedera 
      to other popular blockchain networks, focusing on key metrics like performance, 
      security, cost, and governance.</p>
      
      <h2>Performance Comparison</h2>
      <p>Hedera Hashgraph consistently outperforms traditional blockchain networks 
      in terms of transactions per second, with the ability to process thousands of 
      transactions per second compared to dozens for some other networks.</p>
      
      <h2>Security Model</h2>
      <p>Hedera's asynchronous Byzantine Fault Tolerance (aBFT) provides the highest 
      grade of security possible for distributed systems, ensuring finality with no 
      possibility of forking.</p>
    `,
    coverImage: "/placeholder.svg?height=800&width=1200",
    publishedAt: "2023-08-20T13:10:00Z",
    author: {
      id: "auth5",
      name: "David Chen",
      username: "dchen",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    tags: ["Comparison", "Analysis", "Blockchain", "Research"],
    likes: 72,
    shares: 31,
    comments: 18,
    views: 2450,
    isVerified: true,
  },
  {
    id: "6",
    title: "Getting Started with the Hedera JavaScript SDK",
    summary: "A practical tutorial on how to use the Hedera JavaScript SDK to interact with the Hedera network.",
    content: `
      <p>The Hedera JavaScript SDK provides a simple way to interact with the 
      Hedera network from your JavaScript applications. This tutorial will guide 
      you through the process of setting up the SDK and performing basic operations.</p>
      
      <h2>Installation</h2>
      <p>First, let's install the SDK using npm:</p>
      <pre><code>npm install @hashgraph/sdk</code></pre>
      
      <h2>Creating a Client</h2>
      <p>To connect to the Hedera network, you need to create a client:</p>
      <pre><code>
const { Client } = require("@hashgraph/sdk");

// Create a client for the Hedera testnet
const client = Client.forTestnet();
      </code></pre>
      
      <h2>Setting up Account Credentials</h2>
      <p>You'll need to use account credentials to sign transactions:</p>
      <pre><code>
const { PrivateKey } = require("@hashgraph/sdk");

// Use your account ID and private key
const myAccountId = "0.0.12345";
const myPrivateKey = PrivateKey.fromString("302e...");

// Set the client's operator
client.setOperator(myAccountId, myPrivateKey);
      </code></pre>
    `,
    coverImage: "/placeholder.svg?height=800&width=1200",
    publishedAt: "2023-08-15T10:45:00Z",
    author: {
      id: "auth6",
      name: "Emily Zhang",
      username: "emilyzhang",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    tags: ["SDK", "JavaScript", "Development", "Tutorial"],
    likes: 65,
    shares: 27,
    comments: 15,
    views: 2150,
    isVerified: true,
  },
]

// Mock function to get all articles
export async function getArticles(): Promise<Article[]> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 800))
  return MOCK_ARTICLES
}

// Mock function to get article by ID
export async function getArticleById(id: string): Promise<Article | null> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500))
  return MOCK_ARTICLES.find((article) => article.id === id) || null
}

