import mongoose, { Schema, Document, Model } from "mongoose";

export interface IBlog extends Document {
  title: string;
  link: string;
  author: string;
  published: Date;
  summary: string;
}

const BlogSchema: Schema<IBlog> = new Schema({
  title: { type: String, required: true },
  link: { type: String, required: true, unique: true },
  author: { type: String, default: "Unknown" },
  published: { type: Date, required: true },
  summary: { type: String, required: true },
});

// Avoid redefining the model if it already exists
const Blog: Model<IBlog> = mongoose.models.Blog || mongoose.model<IBlog>("Blog", BlogSchema);
export default Blog;
