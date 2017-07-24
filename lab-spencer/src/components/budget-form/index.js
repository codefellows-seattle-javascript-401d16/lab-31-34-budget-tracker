import React from 'react';

class BudgetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.budgetCategory ? props.budgetCategory.title : '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ title: event.target.value });
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
      </form>
    );
  }
}
