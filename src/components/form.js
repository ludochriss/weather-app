import React, { useState } from 'react';
import './myStyles.css';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';


function Form() {
    const [location, setLocation] = useState('Sydney');

    function changeLocationText(event) {

        setLocation(event.target.value);
        
    }
    function changeLocation(){
        localStorage.clear();
      localStorage.setItem('city', location);
       }

    return (
        <div>
            <Accordion >
  
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
       <h2 className='accordion-text'>Search for City</h2>
      </Accordion.Toggle>
    
    <Accordion.Collapse eventKey="0">
       <form>
                
                <label className='label-text'>Enter City : </label>
                <input type="text" name="location" onChange={changeLocationText} />
                <input type="submit" onClick={changeLocation}></input>

            </form>

    </Accordion.Collapse>
  
  </Accordion>
           
        </div>
    )
}





export default Form
