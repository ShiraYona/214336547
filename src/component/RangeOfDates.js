
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Date } from './Date';
import { useState } from 'react';
import { Calendar } from 'primereact/calendar';
import { Fieldset } from 'primereact/fieldset';
import { Button } from 'primereact/button';

const RangeOfDates=()=>{
      //const [isChecked, setIsChecked] = useState(false);
    const location = useLocation();
    const [data,setData]=useState(new Array);
     const  data1=location.state
    console.log("rang",data1);


useEffect(()=>{
    const setDat=()=>{
setData(data1);
    }
    setDat()
},[])
// נסיון לcheckbox
// const toggleCheck = () => {
//     setIsChecked(!isChecked);
//   };


return(
        <>
<script src="https://unpkg.com/primereact/core/core.min.js"></script>
<script src="https://unpkg.com/primereact/fieldset/fieldset.min.js"></script>
{data&& data.map(i=>{
   <Fieldset legend="-----">
        <h3>{i.titel}</h3>
        <h5>desciption:{i.desciption}</h5>
        <h6>date:{i.start}</h6>
     </Fieldset>

     // נסיון לcheckbox
    //     <span onClick={() => toggleCheck()}>
    //     <input type="checkbox" checked={isChecked} {...data} />
    //     <span />
    //   </span>
 
})}

 <Button onClick={setData(data.filter(p=>p.className==="parashat"))}>show the parashot shavua</Button>
 <Button onClick={setData(data1)}> show all</Button>
        </>
    )
}
export {RangeOfDates}