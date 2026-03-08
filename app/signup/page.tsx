"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Signup() {

  const router = useRouter();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [age,setAge] = useState("");
  const [duration,setDuration] = useState("");

  const handleSignup = async () => {

    const res = await fetch("/api/signup",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,
        password,
        age,
        duration
      })
    });

    const data = await res.json();

    if(data.message === "User created successfully"){
      alert("Account created!");
      router.push("/login");
    }else{
      alert(data.message);
    }

  };

  return (
    <div className="auth-container">
      <div className="auth-card signup-card">

        <div className="logo-row">
          💙 <span>ArogyaAI</span>
        </div>

        <h2>Hello 👋</h2>

        <input
          type="email"
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <select onChange={(e)=>setAge(e.target.value)}>
          <option>Age</option>
          <option>18+</option>
          <option>30+</option>
        </select>

        <select onChange={(e)=>setDuration(e.target.value)}>
          <option>Duration</option>
          <option>1 Week</option>
          <option>1 Month</option>
        </select>

        <button
          className="signup-btn"
          onClick={handleSignup}
        >
          Create Account
        </button>

      </div>
    </div>
  );
}