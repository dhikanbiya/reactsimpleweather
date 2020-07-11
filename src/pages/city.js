import React, {useState,useEfect} from 'react';

function City(){ 
    const cities = [
        {label:"jkt", value:"Jakarta"},
        {label:"bdg", value:"Bandung"},
        {label:"sby", value:"Surabaya"},
    ]
    const [city, setCity] = useState('Jakarta');
   
    const handleChange = (event)=>{
        event.preventDefault()
        setCity(event.target.value)
    }    
    
   return (
    <div>
     Select your city   <select
        onChange={handleChange}
     >
      {cities.map(c => (
        <option
          key={c.label}
          value={c.value}
        >
          {c.value}
        </option>
      ))}
    </select>
      <p>{city}</p>
    </div>
   )
 
}
export default City;