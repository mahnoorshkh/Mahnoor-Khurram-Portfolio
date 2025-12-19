import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are an AI representative for Mahnoor Khurram. 
Mahnoor is a Software Engineer and Visiting Faculty at FAST NUCES.
Her core stack is Node.js, Nest, MongoDB, AWS, and Next.js.
She specializes in backend development, API optimization, and mentoring.

Notable projects:
- BuzzHub (MERN, Stripe, WebSockets)
- GoFood MERN App
- PropLink Property App
- Carter Boating App (AWS S3, Google Maps, CRON)
- MedEase (Healthcare AI)

Answer briefly and professionally. Use a terminal-like, technical tone.
`;

export const getGeminiResponse = async (prompt: string): Promise<string> => {
  // Directly use the environment variable as per instructions
  const apiKey = process.env.API_KEY;

  if (!apiKey) {
    console.error("API Key missing in process.env");
    return "Connection Error: API key is not configured in the environment.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "I'm currently unable to process your request.";
  } catch (error: any) {
    console.error("Gemini Error:", error);
    return "Error: Request failed. Please ensure the API_KEY environment variable is valid.";
  }
};