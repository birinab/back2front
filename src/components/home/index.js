import React, { Component } from 'react';
import {connect} from 'react-redux';
import './style.css';
import {Link } from "react-router-dom";
import homepageImage from '../../images/husky.jpeg';
import logo from '../../images/logo.png'
import logo1 from '../../images/ss.png';
import {setAnimals} from "../../actions";

const mapDispatchToProps = dispatch => {
 return {
  
  setAnimals:animals=>dispatch(setAnimals(animals))
 };
};

const mapStateToProps = state => {
 return { animal: state.animal,
        
 };
};
class ConnectedHome extends Component{

  scanAnimal(){
  const url=new URL('http://localhost:8080/getAnimal');
  var form=new FormData();
  form.append("name","Dog");
   const request=new Request(url,{
    method:'POST',
    mode:'cors',
    body:form,

   });

   fetch(request).then(response=>
     response.json()).then(responseData=>this.setAnimal(responseData))
     .catch(function(error){console.log(error);})
  }

  setAnimal(response){
    this.props.setAnimals(response);
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

const Home = connect(mapStateToProps)(ConnectedHome)
export default Home