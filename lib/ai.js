import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function analyzeSymptoms(data) {
  const prompt = `
You are a medical AI assistant.

Analyze the user's symptoms and provide:

1. Possible health conditions
2. Risk level (Low, Medium, High)
3. Suggested actions
4. Preventive advice

Symptoms: ${data.symptoms}
Age: ${data.age}
Gender: ${data.gender}

Return JSON:
{
possible_conditions: [],
risk_level: "",
advice: "",
prevention: ""
}
`;

  const response = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return response.choices[0].message.content;
}