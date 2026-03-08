"use client";

import { useEffect, useState } from "react";

export default function History(){

const [history,setHistory] = useState<any[]>([]);

useEffect(()=>{

const data = JSON.parse(localStorage.getItem("healthHistory") || "[]");

setHistory(data);

},[]);

return(

<div style={{maxWidth:"900px",margin:"80px auto"}}>

<h1 style={{textAlign:"center"}}>📊 Health History</h1>

{history.length === 0 && (
<p style={{textAlign:"center",marginTop:"20px"}}>
No health records yet.
</p>
)}

<div style={{
display:"grid",
gap:"20px",
marginTop:"40px"
}}>

{history.map((item,index)=>(

<div key={index} style={{
background:"white",
padding:"20px",
borderRadius:"12px",
boxShadow:"0 10px 25px rgba(0,0,0,0.08)"
}}>

<h3>🧠 Health Check</h3>

<p><b>Age:</b> {item.age}</p>
<p><b>Symptoms:</b> {item.symptoms}</p>
<p><b>History:</b> {item.history}</p>

<p><b>Result:</b> {item.result}</p>

<p style={{fontSize:"12px",color:"#777"}}>
{item.date}
</p>

</div>

))}

</div>

</div>

);

}