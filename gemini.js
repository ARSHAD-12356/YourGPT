const apiKey = "AIzaSyBjCPfvdup8xIblhihJd8EGQlnrklPQKjc";

import {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } from "@google/generative-ai";

  // Removed unused 'mime' import as it was not used in the code
  

  const genAI = new GoogleGenerativeAI(apiKey); // Ensure ES module syntax consistency
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseModalities: [
    ],
    responseMimeType: "text/plain",
  };
  
  async function run(prompt) {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });
  
    try {
      const result = await chatSession.sendMessage(prompt);
      const candidates = result.response.candidates;
  
      for (let candidate_index = 0; candidate_index < candidates.length; candidate_index++) {
        for (let part_index = 0; part_index < candidates[candidate_index].content.parts.length; part_index++) {
          const part = candidates[candidate_index].content.parts[part_index];
          if (part.inlineData) {
            const mimeType = part.inlineData.mimeType;
            const data = Buffer.from(part.inlineData.data, 'base64').toString('utf-8');
            console.log(`Inline data (MIME type: ${mimeType}):`, data);
          }
        }
      }
  
      console.log("Response text:", result.response.text);
    } catch (error) {
      console.error("Error in run function:", error);
    }
  }
  
  export default run;