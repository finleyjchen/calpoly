import React, { Component } from 'react';
import './Card.css';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Document, Page } from 'react-pdf/dist/entry.webpack';

class SyllUpload extends Component {
    constructor(props) {
        super(props);
      }

    render() {
      return (
        <div>
        <Document
          file="somefile.pdf"
          onLoadSuccess={this.onDocumentLoad}
        >
        <Page />
        </Document>
      </div>
      );
    }
}

export default SyllUpload;