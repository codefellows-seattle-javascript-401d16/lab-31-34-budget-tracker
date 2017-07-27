import React from 'react';
import {classToggler} from '../../util.js';

class DropZone extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      dropReady: false,
    };

    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleDragEnter = this.handleDragEnter.bind(this);
    this.handleDwatragLeave = this.handleDragLeave.bind(this);
  }

  handleDragOver(event) {
    event.preventDefault();
  }

  handleDrop(event) {
    event.preventDefault;
    try {

    } catch(error) {

    }
  }

  handleDragEnter(event) {

  }

  handleDragLeave(event) {

  }

  render() {
    let className = classToggler({
      'dropzone': true,
      'drop-ready': this.state.dropReady,
    })
    return(
      <div
        className={className}
        onDragOver={this.handleDragOver}
        onDrop={this.handleDrop}
        onDragEnter={this.handleDragEnter}
        onDragLeave={this.handleDragLeave}
      >

      </div>
    );
  }
}
