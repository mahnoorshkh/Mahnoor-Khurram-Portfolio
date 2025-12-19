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
  // Try to get the key from the environment variable injected by the platform
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    return "ERROR_MISSING_KEY";
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
    return response.text || "I'm having trouble connecting to my cognitive backend. Please try again later.";
  } catch (error: any) {
    console.error("Gemini Error:", error);
    if (error?.message?.includes("Requested entity was not found") || error?.message?.includes("API_KEY_INVALID")) {
      return "ERROR_INVALID_KEY";
    }
    return "Error: Request failed. Ensure your API key is active and has sufficient quota.";
  }
};