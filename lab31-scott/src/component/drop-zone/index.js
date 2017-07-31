import React from 'react';

class DropZone extends React.Component{
  constructor(props){
    super(props);

    this.handleDragOver = this.handleDragOver.bind(this);
    this.handleDrop = this.handleDrop.bind(this);
  }

  //stop the page from rendering on drag over of a valid category
  handleDragOver(e){
    e.preventDefault();
  }

  //trigger event when the expense drops to the budget.
  handleDrop(e){
    e.preventDefault();
    console.log('hit handle drop');
    try {
      let item = JSON.parse(e.dataTransfer.getData('application/json'));
      this.props.onComplete(null, item);
    } catch (error) {
      this.props.onComplete(error);
    }
  }

  render(){
    return(
      <div
        onDragOver={this.handleDragOver}
        onDrop={this.handleDrop}
      >
        {this.props.children}
      </div>
    );
  }
}

export default DropZone;
