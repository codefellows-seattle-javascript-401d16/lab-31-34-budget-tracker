import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props){
    super(props);
    console.log('props', props);
    this.state = props.expense ? {...props.expense} : {name: '', price: 0, categoryID: props.categoryID};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componeneWillReceiveProps(props) {
    if(props.expense)
      this.setState(props.expense);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value});
    if(this.props.expense) {
      this.props.expense[e.target.name] = e.target.value;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(Object.assign({}, this.state));
    if(!this.props.expense)
      this.setState({name: '', price: 0, categoryId: ''});
  }

  render() {
    return(
      <form className='expense-form'
        onSubmit={this.handleSubmit}>
        <input
          name='name'
          type='text'
          placeholder='Expense'
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          name='price'
          type='number'
          step={0.01}
          placeholder='Amount'
          value={this.state.price}
          onChange={this.handleChange}
        />

        <button type='submit'> {this.props.submitText} </button>
      </form>
    );
  }
}

export default ExpenseForm;
