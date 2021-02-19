import React, {useState, useEffect} from 'react';
import './myStyles.css';
import Form from './form';
import WeatherFetch from './weatherFetch';




function Top() {
    const [city, setCity] = useState('Sydney');

   useEffect(()=>{
    
       let savedCity = localStorage.getItem('city');
       
       setCity(savedCity);
       
   },[city])


    return (
        <div>
            <h1 className='location-text'>{city}</h1>
            <WeatherFetch city={city}/>
  
            <Form></Form>
        </div>
    )
}
export default Top