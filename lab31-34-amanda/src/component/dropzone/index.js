import React from 'react';
import {classToggler} from '../../lib/util.js';

class Dropzone extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      dropReady:false,
    };

    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handelDragEnter = this.handelDragEnter.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
  }

  handelDragEnter(e){
    this.setState({dropready:true});
  }

  handleDragLeave(e){
    this.setState({dropready:false});
  }

  handleDragOver(e){
    e.preventDefault();
  }

  handleDrop(e){
    e.preventDefault();
    try {
      let item = JSON.parse(e.dataTransfer.getData('application/json'));
      this.props.onComplete(null, item);
    } catch (error){
      this.props.onComplete(error);
    }
    this.setState({dropready: false});
  }

  render(){
    let className = classToggler({
      'dropzone': true,
      'drop-ready': this.state.dropReady,
    });

    return (
      <div
        className={className}
        onDragOver={this.handleDragOver}
        onDrop={this.handleDrop}
        onDragEnter={this.onDragEnter}
        onDragLeave={this.handleDragLeave}
      >
        {this.props.children}
      </div>
    );

  }
}

export default Dropzone;
