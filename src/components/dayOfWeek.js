import React, { Component } from 'react';
import TimeContainer from './timeContainer';
import {  Row } from 'react-bootstrap';

function timeDisplay(times, icons) {
    let componentArray = [];
    for (let i = 0; i < times.length; i++) {

        componentArray.push(
                <TimeContainer className='time-container' Time={times[i]} Icon={icons[i]} />
           
        )
    }
    return componentArray;
}
function displayDayOfWeek(date){

    let dateObj = new Date(date);
  return  dateObj.toLocaleDateString('default', {weekday: 'long'})


}



class DayOfWeek extends Component {


    Times = this.props.Times
    Icons = this.props.Icons;
    Date = this.props.Date;

    render() {
        return <div className="small-container ">


            <h1>{displayDayOfWeek(this.Date)} </h1>
            <Row className='daily-forecast-container'>
                {/* //returns the time display icon*/}
            {timeDisplay(this.Times, this.Icons)}
            </Row>

            
        </div>
    }




    
}

export default DayOfWeek;