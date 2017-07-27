import React from 'react';

class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.title || '',
      price: props.price || 0,
      categoryId: props.categoryId,
      editing: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit({...this.state});
    this.setState({title: '', price: ''});
  }

  render() {
    return (
      <form className='expense-form' onSubmit={this.handleSubmit}>
        <input
          name='title'
          type='text'
          placeholder='Expense Name'
          value={this.state.title}
          onChange={this.handleChange}
          required
        />
        <input
          name='price'
          type='number'
          step={0.01}
          placeholder='Price'
          value={this.state.price}
          onChange={this.handleChange}
          required
        />
        <button
          name='submit-expense'
          type='submit'
        >Add Expense</button>
      </form>
    );
  }
}

export default ExpenseForm;
