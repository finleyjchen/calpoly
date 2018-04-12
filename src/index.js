import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, Route, Switch} from "react-router-dom";
import './index.css';
import Header from './Header';
import Notes from './Notes';
import Grades from './Grades';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Syllabus from './Syllabus';
import About from './About';
import FrontPage from './FrontPage';
ReactDOM.render(      
    
    ( 
        <div>
        <BrowserRouter>

          <Switch>
            <Route exact path="/" component={FrontPage} />
            <Route path="/syllabus" component={Syllabus} />
            <Route path="/about" component={About} />
            <Route path="/grades" component={Grades} />
            <Route path="/notes" component={Notes} />

         </Switch>
        </BrowserRouter>
        </div>
        ),
    document.getElementById('root'));
registerServiceWorker();
