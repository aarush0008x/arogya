"use client";

import { useState } from "react";

type Doctor = {
  name: string;
  lat: number;
  lon: number;
  distance: number;
};

export default function Doctors() {

const [city,setCity] = useState("");
const [doctors,setDoctors] = useState<Doctor[]>([]);
const [loading,setLoading] = useState(false);

async function findDoctors(){

if(!city){
alert("Enter a city");
return;
}

setLoading(true);

try{

// Get city coordinates
const geo = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${city}`);
const geoData = await geo.json();

if(!geoData.length){
alert("City not found");
setLoading(false);
return;
}

const lat = geoData[0].lat;
const lon = geoData[0].lon;

// Fetch nearby hospitals
const overpass = `
[out:json];
(
node["amenity"="hospital"](around:5000,${lat},${lon});
node["amenity"="clinic"](around:5000,${lat},${lon});
);
out;
`;

const res = await fetch("https://overpass-api.de/api/interpreter",{
method:"POST",
body:overpass
});

const data = await res.json();

const list = data.elements.slice(0,8).map((d:any)=>{

const distance = calcDistance(lat,lon,d.lat,d.lon);

return{
name: d.tags.name || "Local Hospital",
lat: d.lat,
lon: d.lon,
distance
};

});

setDoctors(list);

}catch(err){
console.log(err);
}

setLoading(false);

}

// distance calculator
function calcDistance(lat1:number, lon1:number, lat2:number, lon2:number){

const R = 6371;
const dLat = (lat2-lat1) * Math.PI/180;
const dLon = (lon2-lon1) * Math.PI/180;

const a =
Math.sin(dLat/2)*Math.sin(dLat/2) +
Math.cos(lat1*Math.PI/180) *
Math.cos(lat2*Math.PI/180) *
Math.sin(dLon/2)*Math.sin(dLon/2);

const c = 2*Math.atan2(Math.sqrt(a),Math.sqrt(1-a));

return (R*c).toFixed(2);

}

return(

<div style={{maxWidth:"900px",margin:"60px auto"}}>

<h1 style={{textAlign:"center"}}>🏥 Find Doctors Near You</h1>

<div style={{display:"flex",gap:"10px",justifyContent:"center",marginTop:"20px"}}>

<input
value={city}
onChange={(e)=>setCity(e.target.value)}
placeholder="Enter your city"
style={{
padding:"12px",
width:"250px",
borderRadius:"8px",
border:"1px solid #ccc"
}}
/>

<button
onClick={findDoctors}
style={{
padding:"12px 20px",
background:"#0ea5e9",
color:"white",
border:"none",
borderRadius:"8px",
cursor:"pointer"
}}
>

Search

</button>

</div>

{loading && <p style={{textAlign:"center",marginTop:"20px"}}>Loading doctors...</p>}


{/* Doctor Cards */}

<div style={{
display:"grid",
gridTemplateColumns:"repeat(auto-fit,minmax(250px,1fr))",
gap:"20px",
marginTop:"40px"
}}>

{doctors.map((doc,i)=>(

<div key={i} style={{
background:"white",
padding:"20px",
borderRadius:"12px",
boxShadow:"0 10px 25px rgba(0,0,0,0.08)"
}}>

<h3>{doc.name}</h3>

<p>⭐ Rating: 4.{Math.floor(Math.random()*5)+1}</p>

<p>📍 {doc.distance} km away</p>

<div style={{display:"flex",gap:"10px",marginTop:"10px"}}>

<a
href={`https://www.google.com/maps?q=${doc.lat},${doc.lon}`}
target="_blank"
style={{
padding:"8px 12px",
background:"#2563eb",
color:"white",
borderRadius:"6px",
textDecoration:"none"
}}
>

Directions

</a>

<a
href="tel:+911234567890"
style={{
padding:"8px 12px",
background:"#10b981",
color:"white",
borderRadius:"6px",
textDecoration:"none"
}}
>

Call

</a>

</div>

</div>

))}

</div>

</div>

);
}