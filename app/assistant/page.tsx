"use client";

import { useState } from "react";

export default function Assistant(){

const [messages,setMessages] = useState<any[]>([]);
const [input,setInput] = useState("");

const sendMessage = async () => {

if(!input) return;

const userMsg = {role:"user",text:input};

setMessages([...messages,userMsg]);

setInput("");

/* temporary AI response */

const aiReply = {
role:"ai",
text:"Based on your symptoms you should rest, drink water and consult a doctor if symptoms persist."
};

setMessages(prev => [...prev,userMsg,aiReply]);

};

return(

<div className="assistant-container">

<h1>🤖 AI Health Assistant</h1>

<div className="chat-box">

{messages.map((m,i)=>(
<div
key={i}
className={m.role === "user" ? "msg user" : "msg ai"}
>
{m.text}
</div>
))}

</div>

<div className="chat-input">

<input
value={input}
onChange={(e)=>setInput(e.target.value)}
placeholder="Ask about symptoms, medicine..."
/>

<button onClick={sendMessage}>
Send
</button>

</div>

</div>

);
}