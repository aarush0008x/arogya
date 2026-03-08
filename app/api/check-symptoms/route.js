import { analyzeSymptoms } from "@/lib/ai";
import { connectDB } from "@/lib/db";

export async function POST(req) {
  const data = await req.json();

  const result = await analyzeSymptoms(data);

  const db = await connectDB();

  await db.collection("reports").insertOne({
    ...data,
    result,
    date: new Date(),
  });

  return Response.json({ result });
}