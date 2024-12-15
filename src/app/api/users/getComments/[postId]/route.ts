// /api/comments/[postId]/route.ts
import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import Comment from "@/models/reply";

export async function GET(request: Request, { params }: { params: { postId: string } }) {
    try {
        const { postId } = params;

        // Validate postId
        if (!postId) {
            return NextResponse.json({ error: "Post ID is required" }, { status: 400 });
        }

        // Connect to MongoDB
        await connectMongoDB();

        // Fetch comments for the post
        const comments = await Comment.find({ postId }).sort({ createdAt: -1 });

        return NextResponse.json(comments, { status: 200 });
    } catch (error) {
        console.error("Error fetching comments:", error);
        return NextResponse.json({ error: "Failed to fetch comments" }, { status: 500 });
    }
}

