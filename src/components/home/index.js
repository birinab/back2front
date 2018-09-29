import React, { Component } from 'react';
import './style.css';
import {Link } from "react-router-dom";
import homepageImage from '../../images/husky.jpeg';
import logo from '../../images/logo.png'
import logo1 from '../../images/ss.png'
class Home extends Component{

  scanAnimal(){
    
  }

    render(){
        return(
           <div id="home" className="container">
           
           <img id='homelogo' src={logo1}/>
           
            <div>Take a picture of your animal</div>
            
            <img className='dog' src={homepageImage}/>
            
            <Link to="/animal" style={{ textDecoration: 'none' }}><button className="linkButton" onClick={this.scanAnimal}>Scan the animal</button></Link>
      </div>
      )
    }
}

export default Home