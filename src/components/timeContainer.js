import React from 'react';
import ReactAnimatedWeather from 'react-animated-weather/build/ReactAnimatedWeather';

function TimeContainer(props){
  
    function trimTime(time){
      switch(time)
      {
        case  "00:00:00":
        return "12 AM";
       
        case  "03:00:00":
        return "3 AM";

        case  "06:00:00":
        return "6 AM";
        

        case  "09:00:00":
        return "9 AM";
        

        case  "12:00:00":
        return "12 PM";
        

        case  "15:00:00":
        return "3 PM";
        

        case  "18:00:00":
        return "6 PM";
        
        case "21:00:00":
          return "9 PM";

       
        
      }
      

    }
    return(
      <div>
      <h3>{trimTime(props.Time)}</h3>
      
      <ReactAnimatedWeather 
            
            icon={props.Icon.icon}
                    color={props.Icon.color}
                    size={props.Icon.size}
                    animate={props.Icon.animate} 
            />
  </div>
    )
   
}
export default TimeContainer;