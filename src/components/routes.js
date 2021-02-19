import React from 'react';
import {  Redirect, Route, Switch } from 'react-router-dom'
import Body from './body';
import About from './about';

function Routes(){
    return(
      
               <Switch>
                 <Route exact path='/'>
                   <Redirect to='/Weather'></Redirect>
                 </Route>
        <Route path="/Weather">
          <Body></Body>
        </Route>

      <Route path = '/About'>
        <About></About>
      </Route>
      </Switch>
      
    )
}

export default Routes;