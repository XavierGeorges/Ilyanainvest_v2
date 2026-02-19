import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';

// Initialize the client only if the key exists to prevent immediate errors on load if missing
// In a real app, we'd handle this more gracefully.
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export const generateInvestmentAdvice = async (
  userMessage: string,
  history: { role: string; text: string }[] = []
): Promise<string> => {
  if (!ai) {
    return "Le système d'IA est actuellement en maintenance (Clé API manquante). Veuillez réessayer plus tard.";
  }

  try {
    // Construct the full conversation history including the new user message for the stateless request
    // Note: The structure must match the Content interface expected by generateContent
    const contents = [
      ...history.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }],
      })),
      {
        role: 'user',
        parts: [{ text: userMessage }],
      }
    ];

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: contents,
      config: {
        systemInstruction: `Tu es "Ilyana", l'assistant IA expert en investissement immobilier pour "Ilyana Invest".
      
      Ton rôle est d'agir comme un consultant senior en PropTech.
      
      Contexte de l'entreprise :
      - Ilyana Invest est une "anti-agence" au Maroc.
      - Mandat exclusif acquéreur (Buyer-Side).
      - Pas de conflit d'intérêt (on ne vend pas, on chasse).
      - Utilisation de la Data et de l'IA pour sécuriser les actifs (Cadastre, Juridique).
      - Zones : Casablanca, Marrakech, Tanger.
      - Frais : Acompte au démarrage, Succès fee à la fin.
      
      Ton ton doit être :
      - Professionnel, rassurant, et très "Business/Finance".
      - Concis et précis.
      - Utilise un vocabulaire financier (ROI, Yield, VEFA, Titre Foncier, LTV).
      
      Si l'utilisateur pose une question sur l'investissement au Maroc, réponds avec des données précises (simulées si besoin mais réalistes) et invite toujours à "Réserver un Diagnostic" pour une analyse approfondie.`,
      }
    });

    return response.text || "";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Je rencontre des difficultés à analyser les données de marché en temps réel. Veuillez réessayer dans un instant.";
  }
};