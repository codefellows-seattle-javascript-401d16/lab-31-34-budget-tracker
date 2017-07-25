import React from 'react';

class BudgetForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.category ? {...props.budgetCategory} : {title: '', budget: 0};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // if a new category is being passed into props, update the state to reflect the change
  componentWillReceiveProps(props) {
    if(props.category)
      this.setState(props.category);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.handleSubmit({...this.state});
    if(!this.props.category) {
      this.setState({ title: '', budget: 0 });
    }
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
          required
        />
        <input
          name='budget'
          type='number'
          step={0.01}
          placeholder='Budgeted Money'
          value={this.state.budget}
          onChange={this.handleChange}
          required
        />
        <button
          name='submit-budget-category'
          type='submit'
          onSubmit={this.handleSubmit}
        >Add Category</button>
      </form>
    );
  }
}

export default BudgetForm;
