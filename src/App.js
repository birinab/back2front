import React, { Component } from 'react';
import {Route, Switch} from "react-router-dom";
import {BrowserRouter as Router} from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Main from './components/main'

class App extends Component {
  render() {
    return (
      <div>
      <Router>
     <Main/>
     </Router>
     </div>
    )
  }
}

export default App;
