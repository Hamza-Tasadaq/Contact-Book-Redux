import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import CreateContact from './components/CreateContact';
import { Route } from 'react-router-dom';
import Routes from './Routes';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Routes />
        <br />
        <br />
      </React.Fragment>
    )
  }
}


