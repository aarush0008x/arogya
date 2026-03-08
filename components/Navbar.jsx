"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {

const [menuOpen,setMenuOpen] = useState(false);

return (
<nav className="navbar">

<div className="logo">💙 ArogyaAI</div>

<div className={`nav-links ${menuOpen ? "active" : ""}`}>
<Link href="/">Home</Link>
<Link href="/features">Features</Link>
<Link href="/symptoms">Symptom Checker</Link>
<Link href="/login">Login</Link>
<Link href="/signup" className="btn-green">Sign Up</Link>
</div>

<div 
className="hamburger"
onClick={()=>setMenuOpen(!menuOpen)}
>
☰
</div>

</nav>
);
}