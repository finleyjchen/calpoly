import React, { Component } from 'react';
import './Header.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Switch, Route } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
      }

    render() {
      return (
        <header className="App-header">
          <div className="header-wrapper">
           <div className="header-logo">
            <h1 className="App-title left"><Link to="/">calpoly.fjchen.net</Link></h1>
           </div>
           <div className="header-links">
            <a href="https://blog.fjchen.net" className="header-link">blog.fjchen.net</a>
            <Link to="/about" className="header-link">about project</Link>

           </div>
          </div>
        </header>

      );
    }
  }

export default Header;