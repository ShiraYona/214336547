import {useEffect, useState} from "react"
import React from "react";
import { navigate } from "react";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { RangeOfDates } from "./RangeOfDates";
import { Calendar } from 'primereact/calendar';

const Date=()=>{
const [start,setStart]=useState("");
const [end,setEnd]=useState("");
const [data,setData]=useState(new Array);
const navigate=useNavigate()


const Fatchd=async()=>{
console.log("fetch");
var response= await fetch("http://www.hebcal.com/hebcal?cfg=fc&v=1&i=oof&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s=on&start=2023-06-25&end=2023-08-06")
const data= response.json();
setData(data);
console.log("data1",data);
    navigate("./RangeOfDates",{state:{data}})
console.log("data1",data);

}



const getDate=async()=>{
   
   const response= await fetch(`http://www.hebcal.com/hebcal?cfg=fc&v=1&i=oof&maj=on&min=on&nx=on&mf=on&ss=on&mod=on&lg=he&s=on&start=${start}&end=${end}`)
    const dat= response.json();
    setData(dat);
     console.log("data",dat);
        navigate("./RangeOfDates",{dat}); 
   
}

useEffect(()=>{ 
        Fatchd()
       
},[])


return (
<>
{/* הוא לא נותן בפפורמט המבוקשMMMM-YY-DD */}
<Calendar placeholder="start" dateFormat="yy-mm-dd"   onChange={(e) => setStart(e.value)}></Calendar>
<br></br>
<Calendar  placeholder="end" dateFormat="yy-mm-dd"  onChange={(e) => setEnd(e.value)}></Calendar>




    <button onClick={()=>getDate()}> get date</button>
   </> 
    
   


)
} 
export {Date}
