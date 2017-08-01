import React from 'react'

class Drag extends React.Component {
  constructor(props){
    super(props)
    this.handleDragStart = this.handleDragStart.bind(this)
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
        onDragStart={this.handleDragStart}>
        {this.props.children}
      </div>
    )
  }
}

export default Drag
