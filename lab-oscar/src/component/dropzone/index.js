import React from 'react';

class Dropzone extends React.Domponent {
  constructor(props){
    super(props)
    this.state = {
      dropReady: false,
    }
  }
handleDragOver(){
  console.log('dragOver');
}
  render(){
    return (
      <div
        className='dropzone'
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
