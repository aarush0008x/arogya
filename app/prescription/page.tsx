"use client";

import { useState } from "react";
import Tesseract from "tesseract.js";

export default function PrescriptionPage() {

const [file,setFile] = useState<File | null>(null);
const [text,setText] = useState("");
const [loading,setLoading] = useState(false);

const analyzeImage = async () => {

if(!file) return;

setLoading(true);

const { data } = await Tesseract.recognize(
file,
"eng",
{
logger: m => console.log(m)
}
);

const cleaned = data.text
.replace(/=/g,"")
.replace(/\n{2,}/g,"\n")
.trim();

setText(cleaned);
setLoading(false);

};

return (

<div className="prescription-container">

<h1 className="title">💊 Prescription Analyzer</h1>

<p className="subtitle">
Upload a prescription and let AI extract medicines and details.
</p>

<div className="upload-card">

<input
type="file"
accept="image/*"
onChange={(e)=>setFile(e.target.files?.[0] || null)}
/>

<button onClick={analyzeImage}>
Analyze Prescription
</button>

</div>

{loading && (
<div className="loading">
Analyzing prescription...
</div>
)}

{text && (

<div className="result-card">

<h3>Extracted Prescription</h3>

<pre>{text}</pre>

</div>

)}

</div>

);

}