import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "career compass", // Unique app ID
  name: "Career Compass",
  credentials:{
    gemini:{
      apiKey: process.env.GEMINI_API_KEY
    }
  }
});