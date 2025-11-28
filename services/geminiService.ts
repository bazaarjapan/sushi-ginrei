import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { ChatMessage } from '../types';

const API_KEY = process.env.API_KEY || '';

// Initialize only if key is present to avoid immediate crashes, 
// though actual calls will fail gracefully if missing.
const ai = API_KEY ? new GoogleGenAI({ apiKey: API_KEY }) : null;

export const sendMessageToConcierge = async (
  history: ChatMessage[],
  newMessage: string
): Promise<string> => {
  if (!ai) {
    return "申し訳ございません。現在AIコンシェルジュはメンテナンス中です。";
  }

  try {
    const model = 'gemini-2.5-flash';
    
    // Construct the prompt with history context
    // We strictly use generateContent for this stateless interaction pattern 
    // or we could use chat sessions, but for simplicity in this stateless service wrapper:
    
    const systemInstruction = `
      あなたは銀座の高級寿司店「鮨 銀嶺 (Ginrei)」のAIコンシェルジュです。
      非常に丁寧で、洗練された、高級感のある日本語（敬語、謙譲語、尊敬語）を使ってください。
      
      店舗情報:
      - 場所: 東京都中央区銀座 8-8-8
      - 営業時間: 17:30 - 23:00 (L.O. 21:00)
      - 定休日: 日曜・祝日
      - 料理長: 山田 健一 (この道30年の職人)
      - こだわり: 赤酢のシャリ、豊洲一番鮪、完全予約制
      
      役割:
      お客様からの質問（メニュー、予約、ドレスコード、アレルギー対応など）に答えてください。
      予約の確定はできませんが、「予約フォームよりお申し込みください」と案内してください。
      ドレスコードは「スマートカジュアル以上」を推奨しています。
    `;

    // Format history for the model
    // Note: In a real app with 'chat' method we would pass history objects.
    // Here we will just append the new message to a chat session.
    
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: systemInstruction,
      }
    });

    // Replay history to set context (simplified for this demo)
    // In a production app, you'd maintain the 'chat' object instance.
    for (const msg of history) {
      if (msg.role === 'user') {
        await chat.sendMessage({ message: msg.text });
      }
      // We assume the model's responses are implicit in the state for this simple turn-based logic,
      // or we just send the latest message if we don't want to burn tokens re-sending history every time 
      // without a persistent chat object. 
      // For this implementation, let's just send the current message with system instruction sufficient for tone.
    }

    const result: GenerateContentResponse = await chat.sendMessage({
      message: newMessage
    });

    return result.text || "申し訳ございません。うまく聞き取れませんでした。";

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "大変申し訳ございません。現在システムが混み合っております。お電話にてお問い合わせください。";
  }
};