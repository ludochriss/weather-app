import React, { useState, useEffect } from "react";
import './myStyles.css';
import ReactAnimatedWeather from 'react-animated-weather';


function WeatherFetch(props) {

    const defaults = {
        
        icon: 'CLEAR_DAY',
        color: 'black',
        size: 128,
        animate: true
      };
    const [feels_like, setFeelsLike] = useState('');
    const [mainTemp, setMainTemp] = useState('');
    const [description, setDescription] = useState('');
    const [main, setMain] = useState('');
    const [icons, setIcons]= useState(defaults);
 
 
    useEffect(() => {

        let key = `http://api.openweathermap.org/data/2.5/weather?q=${props.city}&units=metric&appid=cb0f9c9edc0c301a181a38d4687d3814`;
       
        fetch(key)
            .then((r) => r.json())
            .then((data) => {
                if (data.main != undefined) {
                    console.log('The data was not undefined');
                    setFeelsLike(data.main.feels_like);
                    setMainTemp(Math.round(data.main.temp*10)/10);
                    setDescription(data.weather[0].description);
                    setMain(data.weather[0].main);
                    setWeatherIcon(data.weather[0].main);
                    
                }

                else {
                    setFeelsLike(`City ${props.city} Does Not Exist`);
                    setMainTemp(`City ${props.city} Does Not Exist`);
                    setDescription(`City ${props.city} Does Not Exist`);
                    setMain(`City ${props.city} Does Not Exist`);
                    setWeatherIcon(`City ${props.city} Does Not Exist`);
                }

            })
    }, [props], [defaults]);


    function setWeatherIcon(data) {
        if (data == 'Clear') {
            let newDefault = {
                icon: 'CLEAR_DAY',
                    color: 'black',
                    size: 128,
                    animate: true
                  };
                  setIcons(newDefault);


            }
            else if(data == 'Rain')
            {
                let newDefault = {
                    icon: 'RAIN',
                    color: 'black',
                    size: 128,
                    animate: true
                  };
                  setIcons(newDefault);
            }
            
            else if(data ==  'Thunderstorm')
            {
                let newDefault = {
                    icon: 'RAIN',
                    color: 'black',
                    size: 128,
                    animate: true
                  };
                  setIcons(newDefault);
            }
            else if(data == 'Drizzle')
            {
                let newDefault = {
                    icon: 'RAIN',
                    color: 'black',
                    size: 128,
                    animate: true
                  };
                  setIcons(newDefault);
            }
            else if(data == 'Snow')
            {
                let newDefault = {
                    icon: 'SNOW',
                    color: 'black',
                    size: 128,
                    animate: true
                  };
                  setIcons(newDefault);
            }
            else if(data == 'Mist')
            {
                let newDefault = {
                    icon: 'FOG',
                    color: 'black',
                    size: 128,
                    animate: true
                  };
                  setIcons(newDefault);
            }
            else if(data == 'Haze')
            {
                let newDefault = {
                    icon: 'FOG',
                    color: 'black',
                    size: 128,
                    animate: true
                  };
                  setIcons(newDefault);
            }
            else if(data === 'Clouds')
            {
                let newDefault = {
                    icon: 'CLOUDY',
                    color: 'black',
                    size: 128,
                    animate: true
                  };
                  setIcons(newDefault);
            }
            else 
            {
                let newDefault = {
                    icon: 'CLEAR_DAY',
                    color: 'black',
                    size: 128,
                    animate: true
                  };
                  setIcons(newDefault);
            }}
            
        return (
            <div>
                
                <ReactAnimatedWeather
                    icon={icons.icon}
                    color={icons.color}
                    size={icons.size}
                    animate={icons.animate} />
                    <p className="body-text">In {props.city}, The Temperature is {mainTemp}, but feels like {feels_like} </p>
               
                <h2 className="label-text">Weather : {main} </h2>
                <h2 className="label-text">Description : {description} </h2>
            </div>
        )
    }

export default WeatherFetch;