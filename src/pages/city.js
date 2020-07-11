import React, {useState,useEfect, useEffect} from 'react';
import apiKey from '../key/apikey.js'
var axios = require('axios')
var moment = require('moment')

function City(){ 
    

    const cities = [
        {label:"jkt", value:"Jakarta"},
        {label:"bdg", value:"Bandung"},
        {label:"sby", value:"Surabaya"},
    ]
    const [city, setCity] = useState('Jakarta');
    const [weather, setWeather] = useState({ daily:[] });
    
    useEffect(async () => {

        const result = await axios(
            `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${apiKey}`,
        );        
        const dailyData = result.data.list.filter(only => only.dt_txt.includes("18:00:00"))
        setWeather({daily:dailyData})    
        
      
    },[]);
   
    const getForecast = async (event)=>{
        event.preventDefault()
        console.log(event.target.value)
        setCity(event.target.value)
        const handleuri= `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${apiKey}`
        const result = await axios(
            handleuri,
        );        
        const dailyData = result.data.list.filter(only => only.dt_txt.includes("18:00:00"))
        setWeather({daily:dailyData})    
        console.log("handle " + handleuri)
    }   
  
    
    
         
   
   return (
    <div>
    <form onSubmit={getForecast}>
     Select your city   <select
        onChange={(e)=> setCity(e.target.value)}
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
    <button type="submit">get forecast</button>
    </form>
      <ul>        
        {weather.daily.map((item,index)=>(
            <li key={index}>{moment(item.dt_txt).format('MMMM Do, h:mm a')} - {item.main.temp} Celcius - {item.weather[0].description}</li>
        ))}
      </ul>     
 
    </div>
   )
 
}
export default City;