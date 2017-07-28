import React from 'react';
import {classToggler} from '../../util.js';

class DropZone extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      dropReady: false,
    };

    this.handleDragEnter = this.handleDragEnter.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  handleDragEnter(event) {
    this.setState({dropReady: true});
  }

  handleDragLeave(event) {
    this.setState({dropReady: false});
  }


  handleDragOver(event) {
    event.preventDefault();
  }

  handleDrop(event) {
    event.preventDefault;
    try {
      let item = JSON.parse(event.dataTransfer.getData('application/json'));
      this.props.onSubmit(null, item);
    } catch(error) {
      this.props.onSubmit(error);
    }
    this.setState({dropReady: false});
  }


  render() {
    let className = classToggler({
      'dropzone': true,
      'drop-ready': this.state.dropReady,
    });

    return(
      <div
        className={className}
        onDragOver={this.handleDragOver}
        onDrop={this.handleDrop}
        onDragEnter={this.handleDragEnter}
        onDragLeave={this.handleDragLeave}
      >

        {this.props.children}

      </div>
    );
  }
}

export default DropZone;
