import React from 'react';


class DeleteButton extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    console.log('this.props.category', this.props.category);
    this.props.onClick(this.props.category);
  }


  render(){
    return (
      <button type='button' onClick={this.handleClick}> {this.props.submitText} </button>
    )
  }
}

export default DeleteButton;
