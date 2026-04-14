import { NextRequest, NextResponse } from "next/server";
import { chatService } from "@/lib/openai/chat-service";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { prompt, conversationId } = body;

    if (!prompt || !conversationId) {
      return NextResponse.json(
        { error: "Missing prompt or conversationId" },
        { status: 400 },
      );
    }

    const result = await chatService.sendMessage(prompt, conversationId);

    return NextResponse.json(result);
  } catch (error) {
    console.error("Chat API error:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
