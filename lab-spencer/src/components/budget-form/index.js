import React from 'react';

class BudgetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.budgetCategory ? props.budgetCategory.title : '',
      budget: props.budgetCategory ? props.budgetCategory.budget : 0,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit(Object.assign({}, this.state));
  }

  render() {
    return (
      <form className='budget-form' onSubmit={this.handleSubmit}>
        <input
          name='title'
          type='text'
          placeholder='Budget Category Name'
          value={this.state.title}
          onChange={this.handleChange}
        />
        <input
          name='budget'
          type='number'
          step={0.1}
          placeholder='Budgeted Money'
          value={this.state.budget}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}
