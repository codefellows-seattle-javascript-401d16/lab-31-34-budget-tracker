import React from 'react';

class ExpenseForm extends React.Component{
  constructor(props){
    super(props);
    this.state =
      props.expense ? {...props.expense} :
        {
          id: null,
          categoryID: this.props.categoryID,
          timestamp: null,
          title: '',
          amount: '',
        };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    console.log('EXPENSE FORM props: ', this.props);
    console.log('EXPENSE FORM state: ', this.state);
    this.props.onComplete(Object.assign({}, this.state));
    if(!this.props.expense) this.setState({title: '', amount: ''});
  }

  componentWillReceiveProps(props){
    if(props.expense) this.setState(props.expense);
  }

  render(){
    return(
      <form className='expense-form' onSubmit={this.handleSubmit}>
        EXPENSE FORM
        <input
          type='text'
          name='title'
          placeholder='Expense Title'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          type='number'
          name='amount'
          placeholder='Expense Amount'
          value={this.state.amount}
          onChange={this.handleChange}
        />
        <button className='edit-button' type='submit'>{this.props.buttonText}</button>
      </form>
    );
  }
}

export default ExpenseForm;
