
import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are an AI representative for Mahnoor Khurram. 
Mahnoor is a Software Engineer and Visiting Faculty at FAST NUCES.
Her core stack is Node.js, Nest, MongoDB, AWS, and Next.js.
She specializes in backend development, API optimization, and mentoring.
Her notable projects include:
- BuzzHub (MERN, Stripe, WebSockets)
- GoFood MERN App (Restaurant & Food delivery app)
- PropLink Property App (Real estate property listing app using MERN)
- Carter Boating App (AWS S3, Google Maps, CRON jobs)
- MedEase (AI-powered health FYP)

Answer questions briefly and professionally, maintaining a "Developer Dark Mode" and technical persona. 
Use a terminal-like tone but stay helpful. 
If someone asks something unrelated to her career, politely steer it back to her professional expertise.
`;

export const getGeminiResponse = async (prompt: string): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return response.text || "I'm having trouble connecting to my cognitive backend. Please try again later.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error: Request timed out. Ensure API configuration is active.";
  }
};
