// /api/comments/route.ts
import { NextResponse } from "next/server";
import connectMongoDB from "@/lib/mongodb";
import Comment from "@/models/reply";

export async function POST(request: Request) {
    try {
        const { content, authorId, postId } = await request.json();

        // Validate input
        if (!content || !authorId || !postId) {
            return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
        }

        // Connect to MongoDB
        await connectMongoDB();

        // Create and save the comment
        const newComment = await Comment.create({ content, authorId, postId });
        return NextResponse.json(newComment, { status: 201 });
    } catch (error) {
        console.error("Error adding comment:", error);
        return NextResponse.json({ error: "Failed to add comment" }, { status: 500 });
    }
}
