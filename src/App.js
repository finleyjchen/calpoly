import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.js';
import FrontPage from './FrontPage.js';

class App extends Component {
  render() {
    return (
        <div className="App container">

        <Header />
        <FrontPage />
      </div>
    );
  }
}

export default App;
