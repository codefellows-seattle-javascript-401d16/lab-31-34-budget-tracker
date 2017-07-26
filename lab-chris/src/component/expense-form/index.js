import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name: props.expense ? props.expense.name : '',
      price: props.expense ? props.expense.price : '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillReceiveProps(props){
    if(props.expense)
      this.setState(props.expense);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onComplete(Object.assign({}, ...this.state));
    if(!this.props.expense)
      this.setState({name: ''}), this.setState({price: ''});
  }

  render(){
    return (
      <form className='expense-form' onSubmit={this.handleSubmit} >
        <input
          name='name'
          type='text'
          placeholder='expense name'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          name='price'
          type='number'
          placeholder='expense amount'
          value={this.state.price}
          onChange={this.handleChange}
        />

        <button type='submit'> {this.props.buttonText} </button>
      </form>
    );
  }
}

export default ExpenseForm;
