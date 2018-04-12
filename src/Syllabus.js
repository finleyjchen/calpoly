import React, { Component } from 'react';
import './Syllabus.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from './Card.js';
import Header from './Header.js';
import { Document, Page } from 'react-pdf';
import SyllUpload from './SyllUpload';

class Syllabus extends Component {
    render() {
        return (
            <div className="container main">
                <Header />
                <div className="row front-page">  
                    <div className="col-12">
                        <h2 className="page-title">Syllabi</h2>
                        <SyllUpload />
                    </div>

                    <div className="col-sm-12 col-md-4">

                    </div>

                    <div className="col-sm-12 col-md-4">

                    </div>

                    <div className="col-sm-12 col-md-4">

                    </div>
                </div>
                </div>    

        );
    }
}




export default Syllabus;