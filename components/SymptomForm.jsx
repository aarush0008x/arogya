"use client";

import { useState } from "react";

export default function SymptomForm() {
  const [symptoms, setSymptoms] = useState("");
  const [result, setResult] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("/api/check-symptoms", {
      method: "POST",
      body: JSON.stringify({
        symptoms,
        age: 22,
        gender: "male",
      }),
    });

    const data = await res.json();
    setResult(data.result);
  }

  return (
    <div className="p-6 bg-white rounded-xl shadow">
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter symptoms..."
          className="w-full border p-3 rounded"
          onChange={(e) => setSymptoms(e.target.value)}
        />

        <button className="mt-4 bg-sky-500 text-white px-6 py-2 rounded">
          Analyze
        </button>
      </form>

      {result && (
        <div className="mt-6 bg-green-50 p-4 rounded">
          <h3 className="font-bold">AI Result</h3>
          <pre>{result}</pre>
        </div>
      )}
    </div>
  );
}