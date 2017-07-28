import React from 'react';

class Dropzone extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      dropReady: false,
    }
    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
    this.handleDragEnter = this.handleDragEnter.bind(this);
    this.handleDragLeave = this.handleDragLeave.bind(this);
  }
handleDragOver(e){
   e.preventDefault()
}

handleDrop(e){
  e.preventDefault()
  try {
    let expense = JSON.parse(e.dataTransfer.getData('application/json'));
    this.props.onComplete(null, expense)
  } catch (error) {
    this.props.onComplete(error)
  }
this.props.dropzone()
}

handleDragEnter(){
  this.props.dropzone()
}
handleDragLeave(){
  this.props.dropzone()
}

  render(){
    return (
      <div
        onDragOver={this.handleDragOver}
        onDrop={this.handleDrop}
        onDragEnter={this.handleDragEnter}
        onDragLeave={this.handleDragLeave}
      >
        {this.props.children}
      </div>
    )
  }
}

export default Dropzone;
