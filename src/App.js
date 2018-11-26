import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import NavBar from './NavBar/NavBar';
import User from './User/User';
import Panel from './Panel/Panel';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <CssBaseline/>
        <Router>
          <div>
            <NavBar></NavBar>
            <User></User>
            <Panel></Panel>
            <Panel></Panel>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
