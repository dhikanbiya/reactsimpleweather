import React, {useState, useEffect} from 'react';
import apiKey from '../key/apikey.js'
import {Button,Form,Container,Col,Row} from 'react-bootstrap'
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
    const weatherAPI = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${apiKey}`
    useEffect(() => {
        const fetchD = async ()=>{
            const result = await axios(
                weatherAPI,
            );        
            const dailyData = result.data.list.filter(only => only.dt_txt.includes("18:00:00"))
            setWeather({daily:dailyData})          
        }
        
        fetchD();
      
    },[]);
   
    const getForecast = async (event)=>{
        event.preventDefault()
        console.log(event.target.value)
        setCity(event.target.value)        
        const result = await axios(
            weatherAPI,
        );        
        const dailyData = result.data.list.filter(only => only.dt_txt.includes("18:00:00"))
        setWeather({daily:dailyData})            
    }   
  
    
    
         
   
   return (
    <div>
    <h4>Get 5 days of Weather Forecast</h4>
    <form onSubmit={getForecast}>     
    <Form.Group controlId="selectCity">
    <Form.Label>Select City</Form.Label>
    <Form.Control as="select" onChange={(e)=> setCity(e.target.value)}>
    {cities.map(c => (
        <option
          key={c.label}
          value={c.value}
        >
           {c.value} 
        </option>
      ))}
    </Form.Control>
  </Form.Group>
    <Button variant="primary" type="submit">Get Forecast</Button>{' '}
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