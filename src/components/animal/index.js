import React, { Component } from 'react';
import './style.css';
import hasky from '../../images/husky-database.jpg'
import arrow from '../../images/left.png'
import logo from '../../images/logo.png'
import {Link} from 'react-router-dom'
import logo1 from '../../images/ss.png'
import {connect} from 'react-redux'

const mapStateToProps = state => {
   return {animal : state.animal}
}
class ConnectedAnimal extends Component{

   render(){
       return(
          <div className='container'>
          <Link to='/'>
          <img id='homelogo' src={logo1}/>

          </Link>

           <div className='flex'>
           <img className='animal' src={hasky}/>
           <h1 className='h'>{this.props.animal.name}({this.props.animal.latinName})</h1>

           <Link to ='/details'>
           <button className="btn btn-primary btn-lg">Details</button>
           </Link>


           </div>
           <Link to ='/'>
          <img className="arrow" src={arrow}/>
          </Link>
          <h6>Back</h6>
          <h3 className='do'>DO : </h3>
          <ul className='do'>
          {this.props.animal.dos.map((e,i) => <li key={i}>{e} </li>)}
          </ul>
          <h3 className='dont'>DON'T : </h3>
          <ul className='do'>
          {this.props.animal.donts.map((e,i) => <li key={i}>{e}</li>)}
          </ul>


     </div>
     )
   }

}
const Animal = connect(mapStateToProps)(ConnectedAnimal)
export default Animal