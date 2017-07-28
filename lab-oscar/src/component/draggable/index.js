import React from 'react';

class Draggable extends React.Component {
  constructor(props){
    console.log('draggable', props);
    super(props)
    this.handleDragStart = this.handleDragStart.bind(this)
    this.handleDrop = this.handleDrop.bind(this);
  }

handleDrop(e){
  e.preventDefault();
}

handleDragStart(e){
  let jsonItem = JSON.stringify(this.props.dataTransferItem)
  e.dataTransfer.setData('application/json', jsonItem)
}
  render(){
    return (
      <div
        className='draggable'
        draggable
        onDragEnd={this.handleDrop}
        onDragStart={this.handleDragStart}
      >
        {this.props.children}
      </div>
    )
  }
}

export default Draggable;
