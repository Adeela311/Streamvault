import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ 
  apiKey: process.env.GEMINI_API_KEY 
});

export const getMovieRecommendation = async (movieTitle: string, description: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `You are an expert movie critic for StreamVault, a premium cinematic streaming platform.
      Provide a "Why you'll love this" recommendation for the following movie/show.
      Be cinematic, persuasive, and brief (max 3 sentences).
      
      Title: ${movieTitle}
      Description: ${description}`,
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return null;
  }
};

export const getAIPersonality = async (userName: string, watchHistory: string[]) => {
  try {
    const historyText = watchHistory.length > 0 ? watchHistory.join(", ") : "nothing yet";
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Analyze this user's watch history and define their "Viewer Personality" in 5 words or less.
      User: ${userName}
      History: ${historyText}
      
      Return ONLY the personality title (e.g., "The Noir Enthusiast", "Adrenaline Junkie").`,
    });

    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Casual Viewer";
  }
};
