import React from 'react';


class DeleteButton extends React.Component {
  constructor(props){
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e){
    e.preventDefault();
    this.props.onClick(this.props.parentElement);
  }


  render(){
    return (
      <button type='button' onClick={this.handleClick}> {this.props.submitText} </button>
    );
  }
}

export default DeleteButton;
