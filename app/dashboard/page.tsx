"use client";

import { useState } from "react";
import Link from "next/link";

import {
LineChart,
Line,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
ResponsiveContainer
} from "recharts";

const data = [
{day:"Mon",score:70},
{day:"Tue",score:80},
{day:"Wed",score:75},
{day:"Thu",score:85},
{day:"Fri",score:90},
{day:"Sat",score:88},
{day:"Sun",score:92}
];

export default function Dashboard(){

const [menu,setMenu] = useState(false);

return(

<div className="dashboard">

{/* MOBILE NAV */}

<div className="mobile-nav">

<div className="logo">💙 ArogyaAI</div>

<button
className="hamburger"
onClick={()=>setMenu(!menu)}
>
☰
</button>

</div>


{/* SIDEBAR */}

<aside className={`sidebar ${menu ? "open" : ""}`}>

<h2 className="logo">💙 ArogyaAI</h2>

<nav>

<Link href="/dashboard">Dashboard</Link>

<Link href="/symptoms">Symptom Checker</Link>

<Link href="/prescription">Prescription AI</Link>

<Link href="/history">Health History</Link>

<Link href="/tips">Preventive Tips</Link>

<Link href="/login">Logout</Link>

</nav>

</aside>


{/* MAIN */}

<main className="main">

<h1 className="welcome">
Hello, John 👋
</h1>


{/* QUICK ACTIONS */}

<div className="cards">

<Link href="/symptoms" className="card">
<h3>🩺 Symptom Checker</h3>
<p>Check symptoms using AI</p>
</Link>

<Link href="/prescription" className="card">
<h3>💊 Prescription Analyzer</h3>
<p>Decode prescriptions instantly</p>
</Link>

<Link href="/history" className="card">
<h3>📊 Health Reports</h3>
<p>View health history</p>
</Link>

</div>


{/* HEALTH SCORE */}

<div className="health-grid">

<div className="health-score">

<h3>Health Score</h3>

<div className="score">88%</div>

<p>Excellent condition</p>

</div>


{/* HEALTH GRAPH */}

<div className="health-graph">

<h3>Weekly Health Score</h3>

<ResponsiveContainer width="100%" height={250}>

<LineChart data={data}>

<CartesianGrid strokeDasharray="3 3"/>

<XAxis dataKey="day"/>

<YAxis/>

<Tooltip/>

<Line
type="monotone"
dataKey="score"
stroke="#0ea5e9"
strokeWidth={3}
/>

</LineChart>

</ResponsiveContainer>

</div>

</div>


{/* RECENT HEALTH CHECK */}

<div className="health-panel">

<h2>Recent Health Check</h2>

<p><b>Possible Condition:</b> Viral Infection</p>

<p><b>Symptoms:</b> cough, sore throat</p>

<div className="risk">
Risk Level: MEDIUM
</div>

<div className="tips">

<span>💧 Stay hydrated</span>

<span>🛌 Rest</span>

<span>👨‍⚕️ Consult doctor</span>

</div>

</div>


{/* MEDICINE REMINDER */}

<div className="reminder">

<h3>Medicine Reminder</h3>

<ul>

<li>Calpol – 4ml (Morning)</li>

<li>Levocet – 1 tablet (Night)</li>

<li>Vitamin C – 1 tablet</li>

</ul>

</div>

</main>

</div>

);
}