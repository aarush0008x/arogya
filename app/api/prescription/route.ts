import Tesseract from "tesseract.js";

export async function POST(req: Request) {

try {

const { image } = await req.json();

const { data } = await Tesseract.recognize(
Buffer.from(image, "base64"),
"eng"
);

return Response.json({
text: data.text
});

} catch (error) {

console.error("OCR error:", error);

return Response.json({
error: "Failed to analyze prescription"
});

}

}