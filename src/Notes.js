import React, { Component } from 'react';
import './Notes.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card.js';
import Header from './Header.js';

class Notes extends Component {
    render() {
        return (
            <div className="container main">
                <Header />
                <div className="row front-page">  
                    <div className="col-12">
                        <h2 className="page-title">Notes</h2>
                    </div>
                </div>
                </div>    

        );
    }
}




export default Notes;