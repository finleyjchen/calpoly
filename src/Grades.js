import React, { Component } from 'react';
import './Grades.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card.js';
import Header from './Header.js';

class Grades extends Component {
    render() {
        return (
            <div className="container main">
                <Header />
                <div className="row front-page">  
                    <div className="col-12">
                    <h2 className="page-title">Grades</h2>
                    </div>
                </div>
                </div>    

        );
    }
}




export default Grades;