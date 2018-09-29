import React, { Component } from 'react';
import {connect} from 'react-redux';
import './style.css';

const mapStateToProps = state => {
    return {animal : state.animal}
}
class ConnectedDetails extends Component{

    
    render(){
        return(
           <div className='container' id="details-container">
            <div>This animal is named {this.props.animal.name}</div>
            <div>It's latin name is {this.props.animal.latinName}</div>
            <div>It belongs to kingdom {this.props.animal.Kingdom} and family {this.props.animal.Family}</div>
            <div>This animal is {this.props.animal.Diet}</div>
            <div>It weighs about {this.props.animal.Weight}</div>
            <div>Approximate lifespan is {this.props.animal.Lifespan}</div>
            <div></div>
      </div>
      )
    }
}
const Details = connect(mapStateToProps)(ConnectedDetails)
export default Details