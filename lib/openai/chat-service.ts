import OpenAI from "openai";
import { conversationRepository } from "../repositories/conversation.repository";

const SYSTEM_PROMPT = `
You are AI Patrick, a professional technical assistant from Urovo.

Your responsibilities:
- Help developers troubleshoot Urovo devices (POS, PDA)
- Provide clear, step-by-step technical guidance

Style:
- Be concise and practical
- Use structured steps when needed
- Avoid unnecessary explanation
- Speak like an experienced engineer
- Token Limit: 300

Context:
- Devices: Urovo POS / PDA
- OS: Android (MTK / Qualcomm)
- Topics: log capture, debugging, SDK usage
`;

export type ChatResponse = {
  id: string;
  message: string;
};

export const chatService = {
  async sendMessage(
    prompt: string,
    conversationId: string,
  ): Promise<ChatResponse> {
    const apiKey = process.env.OPENAI_API_KEY;
    const baseURL = process.env.BASE_URL;
    const model = process.env.MODEL;

    // ✅ runtime 才校验
    if (!apiKey) {
      throw new Error("Missing OPENAI_API_KEY");
    }

    if (!model) {
      throw new Error("Missing MODEL");
    }

    // ✅ runtime 才创建 client
    const client = new OpenAI({ apiKey, baseURL });

    const response = await client.responses.create({
      model,
      temperature: 0.2,
      previous_response_id:
        conversationRepository.getLastResponseId(conversationId),

      input: [
        {
          role: "system",
          content: SYSTEM_PROMPT,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    conversationRepository.setLastResponseId(conversationId, response.id);

    return {
      id: response.id,
      message: response.output_text,
    };
  },
};
