import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {

try {

const { age, symptoms, history, image } = await req.json();

if (!symptoms) {
return Response.json({
result: "Please enter symptoms."
});
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

const model = genAI.getGenerativeModel({
model: "gemini-2.5-flash"
});

const prompt = `
You are a medical AI assistant.

Explain in simple Indian English.

Keep answer under 120 words.

Format exactly like this:

🦠 Possible Conditions:
• condition
• condition

⚠ Risk Level:
Low / Medium / High

💡 Advice:
• advice
• advice

Patient Information:
Age: ${age}
Symptoms: ${symptoms}
Health History: ${history}
`;

let response;

if (image) {

const base64Data = image.split(",")[1];

response = await model.generateContent([
{
text: prompt
},
{
inlineData: {
mimeType: "image/jpeg",
data: base64Data
}
}
]);

} else {

response = await model.generateContent(prompt);

}

const text = response.response.text();

return Response.json({
result: text
});

} catch (error) {

console.error("AI ERROR:", error);

return Response.json({
result: "AI analysis failed. Please try again."
});

}

}