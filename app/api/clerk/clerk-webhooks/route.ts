import { NextRequest, NextResponse } from "next/server";
import { Webhook } from "svix";
import { connectDB } from "@/lib/db/mongo";
import User from "@/lib/db/models/User"; // Import your Mongoose User model

const CLERK_WEBHOOK_SECRET: string = process.env.CLERK_WEBHOOK_SECRET ?? "";
if (!CLERK_WEBHOOK_SECRET) {
  throw new Error("❌ CLERK_WEBHOOK_SECRET is not defined in environment variables");
}

// Define Clerk Webhook Event Type
interface ClerkWebhookEvent {
  type: "user.created" | "user.updated" | "user.deleted" | string;
  data: {
    id: string;
    email_addresses?: { email_address: string }[];
    first_name?: string;
    last_name?: string;
  };
}

export async function POST(req: NextRequest) {
  await connectDB(); // Connect to MongoDB

  // Verify webhook signature
  const headers = req.headers;
  const svixId = headers.get("svix-id");
  const svixTimestamp = headers.get("svix-timestamp");
  const svixSignature = headers.get("svix-signature");

  if (!svixId || !svixTimestamp || !svixSignature) {
    return NextResponse.json({ error: "❌ Missing svix headers" }, { status: 400 });
  }

  const payload = await req.text();

  try {
    const wh = new Webhook(CLERK_WEBHOOK_SECRET);
    const event = wh.verify(payload, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    }) as ClerkWebhookEvent; // ✅ Properly typed event

    const { id, email_addresses, first_name, last_name } = event.data;

    if (event.type === "user.created") {
      // Check if the user already exists
      const existingUser = await User.findOne({ clerkId: id });
      if (existingUser) {
        return NextResponse.json({ message: "✅ User already exists" });
      }

      // Create a new user in MongoDB   
      const newUser = new User({
        clerkId: id,
        email: email_addresses?.[0]?.email_address || "",
        firstName: first_name || "",
        lastName: last_name || "",
      });

      await newUser.save();
      return NextResponse.json({ message: "✅ User created successfully" });
    }

    if (event.type === "user.updated") {
      // Find and update the user
      const updatedUser = await User.findOneAndUpdate(
        { clerkId: id },
        {
          email: email_addresses?.[0]?.email_address || "",
          firstName: first_name || "",
          lastName: last_name || "",
        },
        { new: true } // Return the updated document
      );

      if (!updatedUser) {
        return NextResponse.json({ error: "❌ User not found" }, { status: 404 });
      }

      return NextResponse.json({ message: "✅ User updated successfully" });
    }

    if (event.type === "user.deleted") {
      // Find and delete the user
      const deletedUser = await User.findOneAndDelete({ clerkId: id });

      if (!deletedUser) {
        return NextResponse.json({ error: "❌ User not found" }, { status: 404 });
      }

      return NextResponse.json({ message: "✅ User deleted successfully" });
    }

    return NextResponse.json({ message: "ℹ️ Event received but not handled" });
  } catch (error) {
    console.error("❌ Webhook Verification Failed:", error);
    return NextResponse.json({ error: "❌ Webhook verification failed" }, { status: 400 });
  }
}
