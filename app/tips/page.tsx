"use client";

import { useState } from "react";

export default function Symptoms(){

const [age,setAge] = useState("");
const [symptoms,setSymptoms] = useState("");
const [history,setHistory] = useState("");
const [result,setResult] = useState("");

const analyze = async ()=>{

setResult("Analyzing...");

const res = await fetch("/api/analyze",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify({
age,
symptoms,
history
})
});

const data = await res.json();
setResult(data.result);

};

return(

<div className="symptom-page">

<h1>AI Health Analyzer</h1>

<div className="symptom-card">

<input
type="number"
placeholder="Your Age"
value={age}
onChange={(e)=>setAge(e.target.value)}
/>

<input
type="text"
placeholder="Enter Symptoms (fever, headache)"
value={symptoms}
onChange={(e)=>setSymptoms(e.target.value)}
/>

<input
type="text"
placeholder="Health History (diabetes, asthma etc)"
value={history}
onChange={(e)=>setHistory(e.target.value)}
/>

<button onClick={analyze}>
Analyze Health
</button>

</div>

{result && (

<div className="result-box">
{result}
</div>

)}

</div>

);

}