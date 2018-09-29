import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";

import Home from '../home'
import Animal from '../animal'
import Details from '../details'
class Main extends Component{

    render(){
        return(
           <div id="main">
            <Switch>
            <Route exact path="/" component ={Home}/>
            <Route exact path="/animal" component ={Animal}/>
            <Route exact path="/details" component ={Details}/>
            </Switch>
      </div>
      )
    }
}

export default Main