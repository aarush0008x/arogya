"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login(){

  const router = useRouter();

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleLogin = async () => {

    const res = await fetch("/api/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    });

    const data = await res.json();

    if(data.message === "Login successful"){
      alert("Welcome!");
      router.push("/dashboard");
    }else{
      alert(data.message);
    }

  };

  return(
    <div className="auth-container">
      <div className="auth-card login-card">

        <div className="logo-row">
          💙 <span>ArogyaAI</span>
        </div>

        <h2>Login</h2>

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

        <button
          className="login-btn"
          onClick={handleLogin}
        >
          Login
        </button>

      </div>
    </div>
  )
}