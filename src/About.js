import React, { Component } from 'react';
import Card from './Card.js';
import Header from './Header.js';
class About extends Component {
    render() {
        return(
            <div className="container main">
                <Header />
                <div className="row front-page">  
                    <div className="col-sm-12">
                    <h2 className="page-title">About this project</h2>
                    <p className="light center">I got the idea for this project after a stressful and unsuccessful second quarter of college.</p>
                    </div>
                </div>
            </div>    
        );
    }
}

export default About;