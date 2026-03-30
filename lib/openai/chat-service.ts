import OpenAI from "openai";
import { conversationRepository } from "../repositories/conversation.repository";

const apiKey = process.env.OPENAI_API_KEY;
const baseURL = process.env.BASE_URL;
const model = process.env.MODEL;

if (!apiKey) {
  throw new Error("Missing OPENAI_API_KEY");
}

if (!model) {
  throw new Error("Missing MODEL");
}

const client = new OpenAI({ apiKey, baseURL });

export type ChatResponse = {
  id: string;
  message: string;
};

export const chatService = {
  async sendMessage(
    prompt: string,
    conversationId: string,
  ): Promise<ChatResponse> {
    const response = await client.responses.create({
      model,
      input: prompt,
      temperature: 0.2,
      previous_response_id:
        conversationRepository.getLastResponseId(conversationId),
    });

    conversationRepository.setLastResponseId(conversationId, response.id);

    return {
      id: response.id,
      message: response.output_text,
    };
  },
};
