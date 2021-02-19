import React from 'react';
import Top from './Top';    
import Forecast from './forecast';
import { Container, Row, Col } from 'react-bootstrap';


function Body() {
    return (
        <div className='body' >
           <Container fluid className='transparent' >
               <Row>
                   <Col>
                   <Top/>
                   </Col>
               </Row>
               <Row>
                   <Col>
                   <Forecast />
                   </Col>         
               </Row>
           </Container>
            
            



        </div>
    )
}

export default Body;