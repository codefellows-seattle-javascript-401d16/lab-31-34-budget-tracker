import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.expense
      ? {...props.expense}
      : {expense: '', price: '', categoryID: props.categoryID };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    console.log('THIS ONE', this.props.onComplete);
    console.log('PROPS', this.props);
  }

  componentWillReceiveProps(props){
    if(props.expense)
      this.setState({...props.expense});
    if(props.categoryID)
      this.setState({categoryID: props.categoryID});
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onComplete(this.state);
    if(!this.props.expense)
      this.setState({expense: '', price: ''});
  }

  render(){
    return (
      <form className='expense-form' onSubmit={this.handleSubmit} >
        <input
          type='text'
          name='expense'
          placeholder='expense'
          value={this.state.expense}
          onChange={this.handleChange}
        />
        <input
          type='number'
          name='price'
          placeholder='price'
          value={this.state.price}
          onChange={this.handleChange}
        />

        <button type='submit'> {this.props.buttonText} </button>
      </form>
    );
  }
}

export default ExpenseForm;
