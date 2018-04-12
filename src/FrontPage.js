import React, { Component } from 'react';
import Card from './Card.js';
import Header from './Header.js';

class FrontPage extends Component {
    render() {
        return(
            
            <div className="container main">
                    <Header />

                <div className="row front-page">  
                    <div className="col-12">
                        <Card title="Syllabi" description="View the syllabus of any of your classes." path="/syllabus"/>
                        <Card title="Notes" description="Notes for lectures and stuff." path="/notes"/>
                        <Card title="Grades" description="Where you store your grades, GPAs, and academic goals." path="/grades"/>

                    </div>
                </div>
            </div>    
        );
    }
}

export default FrontPage;