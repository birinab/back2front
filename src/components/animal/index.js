import React, { Component } from 'react';
import './style.css';
import hasky from '../../images/husky-database.jpg'
class Animal extends Component{

    render(){
        return(
           <div className='container'>
            <div class='flex'>
             <img className='animal' src={hasky}></img>
            <h1 className='h'>Dog(Canis lupus familiaris)</h1>
            <button class="btn btn-primary btn-lg">Details</button>
            </div>
           <h3 className='do'>DO : </h3> <ul className='do'><li>Lorem ipsum dolor sit amet, integer dictum gravida primis commodo, lorem lectus sit ut ante.</li> <li>Lorem ipsum dolor sit amet, integer dictum gravida primis commodo, lorem lectus sit ut ante.</li><li>Lorem ipsum dolor sit amet, integer dictum gravida primis commodo, lorem lectus sit ut ante.</li></ul>
           <h3 className='dont'>DON'T : </h3> <ul className='do'><li>Lorem ipsum dolor sit amet, integer dictum gravida primis commodo, lorem lectus sit ut ante.</li> <li>Lorem ipsum dolor sit amet, integer dictum gravida primis commodo, lorem lectus sit ut ante.</li><li>Lorem ipsum dolor sit amet, integer dictum gravida primis commodo, lorem lectus sit ut ante.</li></ul>
           
            
      </div>
      )
    }

}

export default Animal