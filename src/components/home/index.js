import React, { Component } from 'react';
import './style.css';
import {Link } from "react-router-dom";
class Home extends Component{

    render(){
        return(
           <div id="home" className="container">
            <div>
            <div>Take a picture of your animal</div>
            <img src="http://pluspng.com/img-png/mobile-in-hand-png-snapshot-800.png"/>
            </div>
            <Link to="/animal" style={{ textDecoration: 'none' }}><button className="linkButton">Scan the animal</button></Link>
      </div>
      )
    }
}

export default Home