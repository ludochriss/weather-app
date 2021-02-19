import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import './myStyles.css';
import DayOfWeek from './dayOfWeek';
import {Container} from 'react-bootstrap';
import './myStyles.css';



function Forecast() {

    //array with dates, times for the dates and icons for the times.
    const [dailyWeather, setDailyWeather] = useState([]);
    let city = localStorage.getItem('city');

    useEffect(() => {
        let weeklyKey = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=1247cf22a8ea4c430db4bac89a3efbc6`;

        fetch(weeklyKey)
            .then((r) => r.json())
            .then((data) => {
                                           
                setDailyWeather(
                    addWeatherDays(
                        sortTimesAndDates(
                            addDatesToArray(data.list))));

            })
    }, []);


    //creates a list of dates
    function addDatesToArray(list) {
        let array = [];
        for (let i = 0; i < list.length; i++) {

            array.push(list[i]);
        }
        return array;
    }

    //sorts the times and dates and adds the icons. returns a multi-dimensional array.
    function sortTimesAndDates(dates) {

        let datesArray = [];
        let timesArray = [];
        let tempTime = [];
        let tempDailyIconArray = [];
        let dailyIconArray = [];

        for (let i = 0; i < dates.length; i++) {

            //separating the date string into date and time
            let dateStr = dates[i].dt_txt;
            let ind = dateStr.indexOf(' ');
            let date = dateStr.slice(0, ind);
            let time = dateStr.slice(ind + 1);


            if (datesArray[datesArray.length - 1] == date || datesArray.length === 0) {

                datesArray.push(date);
                tempTime.push(time);
                tempDailyIconArray.push(setWeatherIcon(dates[i].weather[0].main));

            }
            else if (datesArray[datesArray.length - 1 !== date]) {

                datesArray.push(date);

                tempTime.push(time);
                tempDailyIconArray.push(setWeatherIcon(dates[i].weather[0].main));
            }

            else {
                tempTime.push(time);
                datesArray.push(date);
                timesArray.push(tempTime);
                tempDailyIconArray.push(setWeatherIcon(dates[i].weather[0].main));
                dailyIconArray.push(tempDailyIconArray);
                tempDailyIconArray = [];
                tempTime = [];

            }
        }

        let sortedDateArray = [];
        datesArray.forEach(e => {
            if (sortedDateArray.includes(e) == false) {
                sortedDateArray.push(e);
            }
        });
        let final = []
        for (let i = 0; i < sortedDateArray.length; i++) {

            final.push([sortedDateArray[i], timesArray[i], dailyIconArray[i]]);
        }
        return final;
    }


    //sets the icon for 3 hour time blocks in each day
    //each day is one index in an array
    function setWeatherIcon(data) {

        if (data == 'Clear') {
            let newDefault = {
                icon: 'CLEAR_DAY',
                color: 'black',
                size: 64,
                animate: true
            };
            return newDefault


        }
        else if (data === undefined) {

        }
        else if (data == 'Rain') {
            let newDefault = {
                icon: 'RAIN',
                color: 'black',
                size: 64,
                animate: true
            };
            return newDefault;
        }

        else if (data == 'Thunderstorm') {
            let newDefault = {
                icon: 'RAIN',
                color: 'black',
                size: 64,
                animate: true
            };
            return newDefault;
        }
        else if (data == 'Drizzle') {
            let newDefault = {
                icon: 'RAIN',
                color: 'black',
                size: 64,
                animate: true
            };
            return newDefault;
        }
        else if (data == 'Snow') {
            let newDefault = {
                icon: 'SNOW',
                color: 'black',
                size: 64,
                animate: true
            };
            return newDefault;
        }
        else if (data == 'Mist') {
            let newDefault = {
                icon: 'FOG',
                color: 'black',
                size: 64,
                animate: true
            };
            return newDefault;
        }
        else if (data == 'Haze') {
            let newDefault = {
                icon: 'FOG',
                color: 'black',
                size: 64,
                animate: true
            };
            return newDefault;
        }
        else if (data === 'Clouds') {
            let newDefault = {
                icon: 'CLOUDY',
                color: 'black',
                size: 64,
                animate: true
            };
            return newDefault;
        }
        else {

            let newDefault = {
                icon: 'CLEAR_DAY',
                color: 'black',
                size: 64,
                animate: true
            };
            return newDefault;

        }
    }


    //adds a day container for each date in the array
    function addWeatherDays(sortedArray) {

        let weekArray = [];
        for (let i = 0; i < sortedArray.length; i++) {

            //verification of each element
            if (sortedArray[i][0] !== undefined && sortedArray[i][1] !== undefined && sortedArray[i][2] !== undefined) {
                weekArray.push(
                    
               
               <DayOfWeek className="day-container"
                    Date={sortedArray[i][0]}
                    Times={sortedArray[i][1]}
                    Icons={sortedArray[i][2]}
                />
                
                
                )
            }
        }
        return weekArray;
    }


    function displayWeather(dailyWeather) {
        if (dailyWeather === []) {
            return <div><h2>Unable to display daily weather</h2></div>
        }
        else {
            return dailyWeather;
        }
    }
    return (

        <div className='forecast' >
            <Container fluid className='accordion'>
                <Accordion className='accordion'>


                    <Accordion.Toggle as={Button} variant="link" eventKey="0" className='accordion'>
                        <h2 className='accordion-text'>5 Day Forcast</h2>
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0">

                        <Container>

                            {displayWeather(dailyWeather)}

                        </Container>

                    </Accordion.Collapse>


                </Accordion>
            </Container>


        </div>
    )
}



export default Forecast;