import React from 'react';

class BudgetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.categoryId ? {title: '', budget: 0} : {title: '', price: 0, categoryId: props.categoryId};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit({...this.state});
  }

  render() {
    return (
      <form className='budget-form' onSubmit={this.handleSubmit}>
        <input
          name='title'
          type='text'
          placeholder={this.props.submitText === 'Add Budget Category' ? 'Budget Category Name' : 'Expense Name'}
          value={this.state.title}
          onChange={this.handleChange}
          required
        />
        <input
          name={this.props.submitText === 'Add Budget Category' ? 'budget' : 'price'}
          type='number'
          step={0.01}
          placeholder='Budgeted Money'
          value={this.props.submitText === 'Add Budget Category' ? this.state.budget : this.state.price}
          onChange={this.handleChange}
          required
        />
        <button
          name='submit-budget'
          type='submit'
          onSubmit={this.handleSubmit}
        >Add Category</button>
      </form>
    );
  }
}

export default BudgetForm;
