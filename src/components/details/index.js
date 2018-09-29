import React, { Component } from 'react';
import {connect} from 'react-redux';

const mapStateToProps = state => {
    return {animal : state.animal}
}
class ConnectedDetails extends Component{

    
    render(){
        return(
           <div className='container'>
            <h1>{this.props.animal.name}({this.props.animal.latinName})</h1>
            <div></div>
      </div>
      )
    }
}
const Details = connect(mapStateToProps)(ConnectedDetails)
export default Details