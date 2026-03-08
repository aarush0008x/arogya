"use client";

import { useState } from "react";
import Link from "next/link";

export default function Home() {

const [menuOpen,setMenuOpen] = useState(false);

return (

<div className="landing">

{/* NAVBAR */}

<nav className="navbar">

<div className="logo">💙 ArogyaAI</div>

<div className={`nav-links ${menuOpen ? "active" : ""}`}>

<Link href="/">Home</Link>
<a href="#features">Features</a>
<a href="#works">How it Works</a>
<a href="#">Doctors Near You</a>

<div className="nav-buttons-mobile">
<Link href="/login" className="btn-outline">Login</Link>
<Link href="/signup" className="btn-primary">Sign Up</Link>
</div>

</div>

<div className="nav-buttons">
<Link href="/login" className="btn-outline">Login</Link>
<Link href="/signup" className="btn-primary">Sign Up</Link>
</div>

<div
className="hamburger"
onClick={()=>setMenuOpen(!menuOpen)}
>
☰
</div>

</nav>


{/* HERO */}

<section className="hero">

<div className="hero-left">

<h1>Your AI-Powered Health Assistant</h1>

<p>
Decode prescriptions, detect health issues, and find affordable
medicines with AI-powered healthcare.
</p>

<div className="hero-buttons">

<Link href="/prescription" className="btn-primary">
Upload Prescription
</Link>

<Link href="/symptoms" className="btn-green">
Scan Health Issue
</Link>

</div>

</div>

<div className="hero-right">

<img
src="/hero-medical.png"
alt="AI Healthcare"
/>

</div>

</section>


{/* FEATURES */}

<section id="features" className="features">

<div className="card">

<img src="/icons/prescription.png" alt="Prescription"/>

<h3>Prescription Decoder</h3>

<p>Convert handwritten prescriptions to text.</p>

</div>


<div className="card">

<img src="/icons/skin.png" alt="Skin"/>

<h3>Skin Issue Detector</h3>

<p>Analyze skin problems instantly.</p>

</div>


<div className="card">

<img src="/icons/medicine.png" alt="Medicine"/>

<h3>Symptoms and Risk Detector</h3>

<p>Helps to know the nature and severity of health issues.</p>

</div>


<div className="card">

<img src="/icons/map.png" alt="Doctors"/>

<h3>Doctor Finder</h3>

<p>Locate nearby doctors and specialists.</p>

</div>

</section>


{/* HOW IT WORKS */}

<section id="works" className="how">

<h2>How ArogyaAI Works</h2>

<div className="steps">

<div className="step">

<div className="step-number">1</div>

<p>Upload Photo or Prescription</p>

</div>


<div className="step">

<div className="step-number">2</div>

<p>AI Analyzes the Condition</p>

</div>


<div className="step">

<div className="step-number">3</div>

<p>Get Results & Advice</p>

</div>

</div>

</section>
{/* TESTIMONIALS */}

<section className="testimonials">

<h2>What Users Say</h2>

<div className="testimonial-grid">

<div className="testimonial-card">
<p>
"ArogyaAI helped me understand my prescription instantly.
Super useful and easy to use!"
</p>
<h4>— Rohan Sharma</h4>
<span>Delhi</span>
</div>

<div className="testimonial-card">
<p>
"I used the symptom checker and it gave very helpful
preventive suggestions."
</p>
<h4>— Priya Patel</h4>
<span>Mumbai</span>
</div>

<div className="testimonial-card">
<p>
"The generic medicine finder saved me a lot of money.
Amazing healthcare tool!"
</p>
<h4>— Amit Verma</h4>
<span>Bangalore</span>
</div>

</div>

</section>
{/* FOOTER */}

<footer className="footer">

<div className="footer-container">

<div className="footer-brand">

<h2>💙 ArogyaAI</h2>

<p>
AI-powered healthcare assistant helping people
understand prescriptions, detect symptoms,
and find affordable medicine.
</p>

</div>


<div className="footer-links">

<h4>Product</h4>

<a href="/symptoms">Symptom Checker</a>
<a href="/prescription">Prescription Decoder</a>
<a href="#">Medicine Finder</a>

</div>


<div className="footer-links">

<h4>Company</h4>

<a href="#">About</a>
<a href="#">Contact</a>
<a href="#">Privacy Policy</a>

</div>


<div className="footer-links">

<h4>Follow Us</h4>

<a href="#">Twitter</a>
<a href="#">LinkedIn</a>
<a href="#">Instagram</a>

</div>

</div>


<div className="footer-bottom">

<p>© 2026 ArogyaAI — All rights reserved.</p>

</div>

</footer>
</div>

);
}