"use client";

import { useState } from "react";

export default function Symptoms() {

  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState("");
  const [image, setImage] = useState<string | null>(null);

  // TEXT SYMPTOM ANALYSIS
  const analyzeSymptoms = async () => {

    try {

      setResult("Analyzing...");

      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ symptoms })
      });

      const data = await res.json();

      setResult(data.result);

    } catch {

      setResult("Something went wrong.");

    }

  };

  // IMAGE UPLOAD + AUTO ANALYSIS
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {

    const file = e.target.files?.[0];

    if (!file) return;

    const reader = new FileReader();

    reader.onloadend = async () => {

      const base64 = reader.result as string;

      setImage(base64);

      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          symptoms,
          image: base64
        })
      });

      const data = await res.json();

      setResult(data.result);

    };

    reader.readAsDataURL(file);

  };

  return (

    <div className="symptom-page">

      <h1>AI Symptom Checker</h1>

      <div className="symptom-card">

        <input
          type="text"
          placeholder="Enter symptoms (e.g. fever, headache)"
          value={symptoms}
          onChange={(e) => setSymptoms(e.target.value)}
        />

        <button onClick={analyzeSymptoms}>
          Analyze Symptoms
        </button>

      </div>

      {/* IMAGE UPLOAD */}

      <div className="image-upload">

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ marginTop: "20px" }}
        />

        {image && (
          <div className="image-preview">
            <img src={image} alt="Uploaded preview" />
          </div>
        )}

      </div>

      {/* RESULT */}

      {result && (
        <div className="result-box">

          {result.includes("Low") && (
            <div className="risk risk-low">🟢 Low Risk</div>
          )}

          {result.includes("Medium") && (
            <div className="risk risk-medium">🟡 Medium Risk</div>
          )}

          {result.includes("High") && (
            <div className="risk risk-high">🔴 High Risk</div>
          )}

          <pre>{result}</pre>

        </div>
      )}

      <p className="disclaimer">
        ArogyaAI provides AI-generated suggestions and is not a substitute for professional medical advice.
      </p>

    </div>

  );
}