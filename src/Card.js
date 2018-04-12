import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class Card extends Component {
    constructor(props) {
        super(props);
      }
      frenchify() {
        this.setState({ title: 'fuck you' });
      }

    render() {
      return (
        <Link to={ this.props.path } className="card-link">
            <div className="card">
                <h2 className="light">{this.props.title} </h2>
                <hr />
                <small>{this.props.description}</small>
            </div>
        </Link>
      );
    }
  }





export default Card;