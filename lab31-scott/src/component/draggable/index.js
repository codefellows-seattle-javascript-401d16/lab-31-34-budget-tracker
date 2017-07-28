import React from 'react';

class Draggable extends React.Component{
  constructor(props){
    super(props);
    this.handleDragStart = this.handleDragStart.bind(this);
  }

  handleDragStart(e){
    console.log('hit drag start');
    console.log('DragStart props: ', this.props);
    //expense item being dragged from the data transfer prop from expense item.
    let jsonItem = JSON.stringify(this.props.dataTransferItem);
    e.dataTransfer.setData('application/json', jsonItem);
  }

  render(){
    console.log('DRAG: ', this.props);
    return(
      <div
        className='draggable'
        draggable
        onDragStart={this.handleDragStart}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Draggable;
